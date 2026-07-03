# Muhammad Abdullah — Personal Portfolio Website

> A modern, fully responsive personal portfolio website built with pure HTML, CSS, and JavaScript.  
> Live at: `http://localhost:8080` (local dev server)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [File Structure](#2-file-structure)
3. [Technologies Used](#3-technologies-used)
4. [External Dependencies](#4-external-dependencies)
5. [Website Sections](#5-website-sections)
6. [HTML Structure (index.html)](#6-html-structure-indexhtml)
7. [CSS Architecture (style.css)](#7-css-architecture-stylecss)
8. [JavaScript Features (script.js)](#8-javascript-features-scriptjs)
9. [Responsive Design](#9-responsive-design)
10. [Color System & Design Tokens](#10-color-system--design-tokens)
11. [Animation System](#11-animation-system)
12. [Component Reference](#12-component-reference)
13. [How to Run](#13-how-to-run)
14. [Customization Guide](#14-customization-guide)
15. [Browser Support](#15-browser-support)

---

## 1. Project Overview

This is a professional personal portfolio website for **Muhammad Abdullah**, a BS Software Engineering student at COMSATS University Islamabad, Vehari Campus. The website serves as a digital resume and personal branding platform showcasing education, projects, skills, experience, and achievements.

### Key Highlights
- Zero frameworks — pure HTML5, CSS3, and vanilla JavaScript
- No build tools required — open directly in any browser
- Fully responsive — works on desktop, tablet, and mobile
- Premium UI with glassmorphism, gradients, and smooth animations
- 10 complete sections covering all portfolio needs
- Accessibility-aware markup with `aria-label` attributes

---

## 2. File Structure

```
myportfolio/
│
├── index.html       — Main HTML file (all sections)
├── style.css        — All styles (design system + components + responsive)
├── script.js        — All JavaScript (interactions + animations)
├── 1.jpeg           — Profile photo (used in Hero and About sections)
│
└── .vscode/
    └── launch.json  — VS Code debug config (Chrome on localhost:8080)
```

---

## 3. Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Semantic page structure |
| CSS3 | — | Styling, animations, responsive layout |
| JavaScript (ES6+) | — | Interactivity, scroll effects, animations |
| CSS Custom Properties | — | Design token system (colors, spacing, shadows) |
| CSS Grid | — | Multi-column layouts |
| CSS Flexbox | — | Component-level alignment |
| IntersectionObserver API | — | Scroll-triggered animations |
| CSS `clamp()` | — | Fluid typography |
| CSS `backdrop-filter` | — | Glassmorphism effects |

---

## 4. External Dependencies

All loaded via CDN — no npm or installation required.

### Google Fonts
```html
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800
                                      &family=Space+Grotesk:wght@400;500;600;700
```

| Font | Usage |
|---|---|
| **Inter** | Body text, paragraphs, labels, buttons |
| **Space Grotesk** | Headings (h1–h4), logo, stat numbers |

### Font Awesome 6.5.0
```html
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css
```
Used for all icons throughout the website (nav, buttons, timeline, contact, social links, badges).

---

## 5. Website Sections

| # | Section ID | Description |
|---|---|---|
| 1 | `#home` | Hero — name, title, photo, CTA buttons, stats |
| 2 | `#about` | About Me — bio, info grid, download CV |
| 3 | `#education` | Education timeline — BSE, F.Sc, Matric |
| 4 | `#projects` | 6 project cards with tech tags and links |
| 5 | `#skills` | Progress bars + tool badges |
| 6 | `#experience` | Experience timeline — events, projects, competitions |
| 7 | `#testimonials` | 3 testimonial cards with star ratings |
| 8 | `#blog` | 3 blog/article preview cards |
| 9 | `#achievements` | 4 achievement cards |
| 10 | `#contact` | Contact form + social links |
| — | Footer | Logo, copyright, quick links |

---

## 6. HTML Structure (index.html)

### Document Head
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Muhammad Abdullah — Portfolio</title>
  <link rel="stylesheet" href="style.css"/>
  <!-- Google Fonts -->
  <!-- Font Awesome 6.5.0 -->
</head>
```

### Navigation Bar
```html
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a class="nav-logo">Abdullah<span>.</span></a>
    <ul class="nav-links" id="navLinks">
      <!-- 8 nav links with href="#section-id" -->
    </ul>
    <button class="hamburger" id="hamburger">
      <!-- 3 spans = animated hamburger icon -->
    </button>
  </div>
</nav>
```
- Fixed position, becomes frosted glass on scroll via `.scrolled` class
- Hamburger button activates slide-in mobile menu
- Active link is highlighted by JavaScript

### Hero Section
```html
<section class="hero" id="home">
  <div class="hero-bg-shapes">
    <!-- 3 blurred gradient circles for background decoration -->
  </div>
  <div class="hero-container">
    <!-- Left: profile photo with floating animation + available badge -->
    <!-- Right: name, typing title, description, 3 CTA buttons, stats -->
  </div>
</section>
```

### Section Template Pattern
Every section after Hero follows this pattern:
```html
<section class="section [section-alt]" id="section-id">
  <div class="container">
    <div class="section-header" data-aos>
      <span class="section-tag">Subtitle</span>
      <h2 class="section-title">Main Title</h2>
    </div>
    <!-- Section-specific content -->
  </div>
</section>
```
- `section-alt` adds the alternate background color (`--bg-alt`)
- `data-aos` triggers scroll-in animation via IntersectionObserver

### Scroll Animation Attribute
Any element with `data-aos` will fade-in and slide up when scrolled into view:
```html
<div data-aos>...</div>
```

### Profile Image
Used in two places:
```html
<!-- Hero -->
<div class="hero-avatar">
  <img src="1.jpeg" alt="Muhammad Abdullah" />
</div>

<!-- About -->
<div class="about-avatar">
  <img src="1.jpeg" alt="Muhammad Abdullah" />
</div>
```

---

## 7. CSS Architecture (style.css)

The stylesheet is organized into clearly labeled sections using comment banners.

### Section Order
```
1.  ROOT & RESET        — CSS reset, :root custom properties
2.  SCROLLBAR           — Custom scrollbar styling
3.  TYPOGRAPHY          — Font family assignments
4.  UTILITY             — .container, .section, .section-header, .section-tag, .section-title
5.  BUTTONS             — .btn variants (primary, outline, ghost, sm, full)
6.  ANIMATIONS          — [data-aos] base + .aos-visible trigger
7.  NAVBAR              — .navbar, .nav-container, .nav-links, .hamburger
8.  HERO                — Layout, background shapes, avatar, badge, content, stats
9.  ABOUT               — Grid layout, image card, info grid
10. TIMELINE            — Shared by Education and Experience sections
11. PROJECTS            — Grid, cards, tags, links
12. SKILLS              — Progress bars, badges
13. TESTIMONIALS        — Cards with quote, author, stars
14. BLOG                — Cards with gradient headers
15. ACHIEVEMENTS        — Icon cards
16. CONTACT             — Grid, info items, form, social links
17. FOOTER              — Dark footer layout
18. BACK TO TOP         — Fixed button visibility toggle
19. RESPONSIVE          — Media queries: 1024px, 768px, 480px
```

### CSS Custom Properties (Design Tokens)
Defined on `:root`, used everywhere via `var()`:

```css
/* Colors */
--primary: #6C63FF          /* Purple — main brand color */
--primary-dark: #5A52D5     /* Darker purple */
--primary-light: #8B85FF    /* Lighter purple */
--secondary: #FF6584         /* Pink — accent color */
--accent: #43E97B            /* Green — "available" status */
--bg: #F8F9FF                /* Page background */
--bg-alt: #EEF0FB            /* Alternate section background */
--card: #FFFFFF              /* Card background */
--text: #1A1A2E              /* Primary text */
--text-muted: #6B7280        /* Secondary / muted text */
--border: rgba(108,99,255,0.15)  /* Card borders */

/* Shadows */
--shadow: 0 4px 24px rgba(108,99,255,0.08)
--shadow-lg: 0 12px 48px rgba(108,99,255,0.15)

/* Spacing */
--radius: 16px               /* Card border radius */
--radius-sm: 10px            /* Small element border radius */

/* Transitions */
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

/* Gradients */
--gradient: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)
--gradient-soft: linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(255,101,132,0.08) 100%)
```

### Key CSS Techniques

**Glassmorphism (navbar on scroll):**
```css
background: rgba(248, 249, 255, 0.9);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

**Gradient Text:**
```css
background: var(--gradient);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Fluid Typography with clamp():**
```css
font-size: clamp(2.5rem, 6vw, 4rem);   /* Hero name */
font-size: clamp(1.75rem, 4vw, 2.5rem); /* Section titles */
```

**Floating Animation (hero avatar):**
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-16px); }
}
animation: float 4s ease-in-out infinite;
```

**Pulsing Green Dot (available badge):**
```css
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(67, 233, 123, 0.6); }
  50%       { box-shadow: 0 0 0 8px rgba(67, 233, 123, 0); }
}
```

**Skill Bar Fill (CSS variable + JS class):**
```css
.skill-fill { width: 0; transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1); }
.skill-fill.animated { width: var(--pct); }  /* --pct set inline in HTML */
```

---

## 8. JavaScript Features (script.js)

The script is written in vanilla ES6+ JavaScript, organized into labeled blocks.

### 1. Sticky Navbar + Active Link Highlighting
```javascript
function updateNavbar() {
  // Adds .scrolled class when scrollY > 20px (triggers glassmorphism)
  // Detects current section by comparing scrollY to section offsetTop
  // Adds .active class to the matching nav link
}
window.addEventListener('scroll', updateNavbar, { passive: true });
```

### 2. Hamburger Menu
```javascript
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');      // Animates 3 bars → X
  navLinksContainer.classList.toggle('open'); // Slides in mobile menu
  document.body.style.overflow = ...;     // Prevents background scroll
});
// Also closes on: nav link click, outside click
```

### 3. Scroll Animations (Custom AOS)
```javascript
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Calculates sibling index for staggered delay (0–400ms)
      setTimeout(() => entry.target.classList.add('aos-visible'), delay);
      animObserver.unobserve(entry.target); // Only animates once
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
```
Any element with `data-aos` attribute is observed. When 12% of the element is visible, it fades in with an upward slide. Siblings are staggered by 100ms per index.

### 4. Skill Bar Animations
```javascript
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated'); // Triggers CSS width transition
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
```
Adds `.animated` class to `.skill-fill` elements when 30% visible, triggering the CSS width transition from `0` to `var(--pct)`.

### 5. Back to Top Button
```javascript
window.addEventListener('scroll', () => {
  // Shows button when scrollY > 500px via .visible class
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

### 6. Contact Form (Simulated Submit)
```javascript
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // 1. Changes button text to "Sending..." with spinner icon
  // 2. Disables button to prevent double-submit
  // 3. After 1500ms: resets form, shows success message for 5 seconds
});
```

### 7. Smooth Scroll with Navbar Offset
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const navHeight = navbar.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
```
Offsets scroll position by navbar height + 12px so sections aren't hidden behind the fixed navbar.

### 8. Typing Effect (Hero Title)
```javascript
const titles = [
  'Full-Stack Developer & MERN Stack Engineer',
  'React & Node.js Developer',
  'Flutter Mobile App Developer',
  'C# Desktop Application Developer',
  'BS Software Engineering Student'
];
// Cycles through titles with typewriter effect
// Types at 80ms/char, deletes at 40ms/char
// Pauses 2400ms at full title, 400ms between titles
// Formats ' & ' as <span class="amp">&</span> for gradient color
// Appends blinking cursor <span class="cursor">|</span>
```

### 9. Stat Counter Animation
```javascript
const counterObserver = new IntersectionObserver((entries) => {
  // When stat numbers enter viewport:
  // Animates from 0 to target number over ~1500ms
  // Preserves suffix characters (e.g., "+" in "10+")
  // Uses requestAnimationFrame for smooth 60fps counting
});
```

---

## 9. Responsive Design

Three breakpoints handle all device sizes:

### Desktop (> 1024px) — Default
- Hero: 2-column grid (photo | content)
- Skills: 3-column grid
- About: 2-column grid
- Projects/Blog/Testimonials: auto-fill grid (min 320–340px)

### Tablet (≤ 1024px)
```css
@media (max-width: 1024px) {
  .skills-wrapper { grid-template-columns: 1fr 1fr; }
  .hero-container { gap: 40px; }
}
```

### Mobile (≤ 768px)
```css
@media (max-width: 768px) {
  /* Hamburger menu replaces nav links */
  /* Hero becomes single column, photo on top */
  /* About becomes single column */
  /* Skills becomes single column */
  /* Contact becomes single column */
  /* Footer stacks vertically */
  /* Timeline padding reduced */
}
```

### Small Mobile (≤ 480px)
```css
@media (max-width: 480px) {
  /* Hero buttons stack full-width */
  /* All grids collapse to 1 column */
  /* About info grid goes single column */
}
```

---

## 10. Color System & Design Tokens

### Primary Palette
| Token | Hex | Use |
|---|---|---|
| `--primary` | `#6C63FF` | Buttons, links, active states, icons |
| `--primary-dark` | `#5A52D5` | Hover states |
| `--primary-light` | `#8B85FF` | Hover borders |
| `--secondary` | `#FF6584` | Gradient end, ampersand color |
| `--accent` | `#43E97B` | Available badge, success messages |

### Background Palette
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F8F9FF` | Main page background |
| `--bg-alt` | `#EEF0FB` | Alternate sections (Education, Skills, Testimonials, Achievements) |
| `--card` | `#FFFFFF` | Cards, forms, badges |

### Main Gradient
```css
--gradient: linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)
```
Used on: buttons, timeline dots, contact icons, achievement icons, skill bars, section underlines, hero name text, stat numbers.

---

## 11. Animation System

| Animation | Trigger | Duration | CSS Class/Property |
|---|---|---|---|
| Scroll fade-in | IntersectionObserver (12%) | 0.65s ease | `data-aos` → `.aos-visible` |
| Stagger delay | Sibling index × 100ms | up to 400ms | `setTimeout` in JS |
| Skill bars | IntersectionObserver (30%) | 1.2s cubic-bezier | `.skill-fill.animated` |
| Hero float | Auto, infinite | 4s ease-in-out | `@keyframes float` |
| Badge pulse | Auto, infinite | 2s | `@keyframes pulse` |
| Typing cursor | Auto, infinite | 0.7s step-end | `@keyframes blink` |
| Card hover lift | `:hover` | 0.3s | `transform: translateY(-8px)` |
| Timeline hover | `:hover` | 0.3s | `transform: translateX(6px)` |
| Back-to-top | scroll > 500px | 0.3s | `.back-to-top.visible` |
| Stat counter | IntersectionObserver (50%) | ~1500ms rAF | JS `requestAnimationFrame` |
| Navbar scroll | scroll > 20px | 0.3s | `.navbar.scrolled` |
| Hamburger → X | Click | 0.3s | `.hamburger.open` |

---

## 12. Component Reference

### Button Variants
```html
<a class="btn btn-primary">Primary (gradient + shadow)</a>
<a class="btn btn-outline">Outline (purple border)</a>
<a class="btn btn-ghost">Ghost (transparent + blur)</a>
<a class="btn btn-sm btn-primary">Small Primary</a>
<button class="btn btn-primary btn-full">Full Width</button>
```

### Timeline Card
```html
<div class="timeline-item" data-aos>
  <div class="timeline-dot"><i class="fas fa-icon"></i></div>
  <div class="timeline-card">
    <div class="timeline-badge edu|cert|exp|exp2|exp3">Label</div>
    <h3>Title</h3>
    <p class="timeline-org"><i class="fas fa-building"></i> Organization</p>
    <p class="timeline-date"><i class="fas fa-calendar"></i> Date</p>
    <p class="timeline-desc">Description</p>
    <div class="timeline-skills"><span>Tag</span></div>
    <!-- OR for experience: -->
    <ul class="timeline-list"><li>Point</li></ul>
  </div>
</div>
```

### Project Card
```html
<div class="project-card" data-aos>
  <div class="project-image [project-image-2|3]">
    <div class="project-icon"><i class="fas fa-icon"></i></div>
  </div>
  <div class="project-content">
    <div class="project-tags"><span>Tech</span></div>
    <h3>Project Title</h3>
    <p>Description</p>
    <p class="project-role"><strong>My Role:</strong> Role</p>
    <p class="project-outcome"><i class="fas fa-chart-line"></i> Outcome</p>
    <div class="project-links">
      <a class="btn btn-sm btn-primary">Live Demo</a>
      <a class="btn btn-sm btn-outline">GitHub</a>
    </div>
  </div>
</div>
```

### Skill Bar
```html
<div class="skill-item">
  <div class="skill-info">
    <span>Skill Name</span>
    <span>85%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-fill" style="--pct: 85%"></div>
  </div>
</div>
```

### Section Header
```html
<div class="section-header" data-aos>
  <span class="section-tag">Subtitle Tag</span>
  <h2 class="section-title">Main Title</h2>
</div>
```

---

## 13. How to Run

### Option A — Direct Browser (No Server)
1. Open `index.html` directly in any modern browser
2. Note: Google Fonts and Font Awesome require internet connection

### Option B — Node.js Local Server (Recommended)
```bash
# Run from the portfolio folder
node -e "
  const http=require('http'),fs=require('fs'),path=require('path');
  http.createServer((req,res)=>{
    let f=path.join(process.cwd(), req.url==='/'?'index.html':req.url);
    const ext=path.extname(f);
    const mime={'html':'text/html','css':'text/css','js':'application/javascript'};
    fs.readFile(f,(e,d)=>{
      if(e){res.writeHead(404);res.end('Not found');}
      else{res.writeHead(200,{'Content-Type':mime[ext.slice(1)]||'text/plain'});res.end(d);}
    });
  }).listen(8080,()=>console.log('Running at http://localhost:8080'));
"
```
Then open: `http://localhost:8080`

### Option C — VS Code Live Server
Install the **Live Server** extension and click "Go Live" in the status bar.

### Option D — VS Code Debug (F5)
The `.vscode/launch.json` is already configured to open Chrome at `http://localhost:8080`. Start the Node.js server first, then press **F5**.

---

## 14. Customization Guide

### Change Personal Info
All personal data is in `index.html`. Key spots to update:

| What | Where in HTML |
|---|---|
| Name | `<h1 class="hero-name">` and `<title>` |
| Title / Profession | `.hero-title` and `titles[]` array in `script.js` |
| Profile Photo | `src="1.jpeg"` in both `.hero-avatar img` and `.about-avatar img` |
| Email | `.contact-item` email row and `about-info-grid` |
| Phone | `.contact-item` phone row and `about-info-grid` |
| Location | `.tag` location spans |
| Social Links | `<a class="social-link">` href attributes in contact section |

### Change Color Theme
Edit these variables in `style.css` under `:root`:
```css
--primary: #6C63FF;      /* Change to any color */
--secondary: #FF6584;    /* Change gradient end color */
--accent: #43E97B;       /* Change available/success color */
```

### Add a New Project
Copy any `.project-card` block in the projects section and update:
- `project-image` gradient (inline style or class)
- `project-icon` Font Awesome icon
- `project-tags` tech stack
- Title, description, role, outcome
- Demo and GitHub links

### Add a New Skill Bar
```html
<div class="skill-item">
  <div class="skill-info"><span>Skill Name</span><span>80%</span></div>
  <div class="skill-bar"><div class="skill-fill" style="--pct:80%"></div></div>
</div>
```

### Add a New Timeline Entry
Copy any `.timeline-item` block in education or experience section and update content.

### Change Typing Titles
Edit the `titles` array in `script.js`:
```javascript
const titles = [
  'Your Title 1',
  'Your Title 2',
  // add more...
];
```

### Link the CV Download
Replace `href="#"` on the Download CV buttons with the actual file path:
```html
<a href="Muhammad-Abdullah-CV.pdf" class="btn btn-outline" download>
  <i class="fas fa-download"></i> Download CV
</a>
```

---

## 15. Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |
| IE 11 | ❌ Not supported (uses CSS Grid, custom properties, backdrop-filter) |

### Required Browser APIs
- `IntersectionObserver` — scroll animations (supported in all modern browsers)
- `CSS Custom Properties` — design tokens
- `CSS Grid & Flexbox` — layouts
- `backdrop-filter` — glassmorphism (may need `-webkit-` prefix on older Safari)
- `requestAnimationFrame` — stat counter animation

---

## Owner

**Muhammad Abdullah**  
BS Software Engineering — COMSATS University Islamabad, Vehari Campus  
📧 javaidabdullah509@gmail.com  
📞 +92 301 8075447  
📍 Hasilpur, Bahawalpur, Pakistan
