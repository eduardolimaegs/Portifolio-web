const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animar barras de habilidades
      const bar = e.target.querySelector('.skill-fill');
      if (bar) {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, 200);
      }
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Verificar barras já visíveis ao carregar
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const parent = bar.closest('.reveal');
    if (parent && parent.classList.contains('visible')) {
      bar.style.width = bar.dataset.width + '%';
    }
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  document.getElementById('sendBtn').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
