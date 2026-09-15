'use strict';

/* =============================================
   NAVBAR — sticky behaviour
   ============================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.add('scrolled'); // always scrolled on blog page
  }
}, { passive: true });

/* =============================================
   HAMBURGER MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

if (hamburger && navLinksContainer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
    document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
  });

  navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksContainer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinksContainer.classList.contains('open')) {
      hamburger.classList.remove('open');
      navLinksContainer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* =============================================
   SCROLL ANIMATIONS (AOS-like)
   ============================================= */
const animatedEls = document.querySelectorAll('[data-aos]');

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-aos]'));
      const idx = siblings.indexOf(entry.target);
      const delay = Math.min(idx * 80, 320);
      setTimeout(() => {
        entry.target.classList.add('aos-visible');
      }, delay);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

animatedEls.forEach(el => animObserver.observe(el));

/* =============================================
   BACK TO TOP BUTTON
   ============================================= */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



