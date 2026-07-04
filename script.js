'use strict';

/* =============================================
   NAVBAR — sticky + active link highlighting
   ============================================= */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNavbar() {
  // Sticky shadow
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active section highlight
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* =============================================
   HAMBURGER MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
  document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
});

// Close on link click
navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navLinksContainer.classList.contains('open')) {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* =============================================
   SCROLL ANIMATIONS (AOS-like)
   ============================================= */
const animatedEls = document.querySelectorAll('[data-aos]');

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling cards
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-aos]'));
      const idx = siblings.indexOf(entry.target);
      const delay = Math.min(idx * 100, 400);
      setTimeout(() => {
        entry.target.classList.add('aos-visible');
      }, delay);
      animObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

animatedEls.forEach(el => animObserver.observe(el));

/* =============================================
   SKILL BAR ANIMATIONS
   ============================================= */
const skillBars = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));

/* =============================================
   BACK TO TOP BUTTON
   ============================================= */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   CONTACT FORM
   ============================================= */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  // Simulate async send
  setTimeout(() => {
    btn.innerHTML = original;
    btn.disabled = false;
    contactForm.reset();
    formSuccess.classList.add('show');
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 1500);
});

/* =============================================
   SMOOTH ANCHOR SCROLLING (offset for navbar)
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =============================================
   TYPING EFFECT — hero title
   ============================================= */
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const titles = [
    'Electrical Engineering Student & Electronics Enthusiast',
    'Embedded Systems & IoT Developer',
    'Arduino & ESP32 Developer',
    'Control Systems & Automation Engineer',
    'IEEE Student Branch President & Leader'
  ];
  let tIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const current = titles[tIdx];
    const amp = ' <span class="amp">&</span> ';

    if (deleting) {
      cIdx--;
    } else {
      cIdx++;
    }

    // Rebuild with formatted & symbol
    const raw = current.substring(0, cIdx);
    heroTitle.innerHTML = raw.replace(' & ', amp) + '<span class="cursor">|</span>';

    let speed = deleting ? 40 : 80;

    if (!deleting && cIdx === current.length) {
      speed = 2400;
      deleting = true;
    } else if (deleting && cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % titles.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  // Add cursor style
  const style = document.createElement('style');
  style.textContent = `.cursor { display: inline-block; width: 2px; background: var(--primary); animation: blink 0.7s step-end infinite; margin-left: 2px; vertical-align: middle; height: 1.1em; } @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`;
  document.head.appendChild(style);

  setTimeout(type, 1000);
}

/* =============================================
   STAT COUNTER ANIMATION
   ============================================= */
const statNums = document.querySelectorAll('.stat-num');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const text = el.textContent;
    const num = parseFloat(text);
    const suffix = text.replace(/[\d.]/g, '');
    const isDecimal = text.includes('.');
    const decimals = isDecimal ? (text.split('.')[1] || '').replace(/\D/g, '').length : 0;
    let start = 0;
    const duration = 1500;
    const steps = duration / 16;
    const step = num / steps;

    const tick = () => {
      start = Math.min(start + step, num);
      el.textContent = (isDecimal ? start.toFixed(decimals) : Math.ceil(start)) + suffix;
      if (start < num) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));
