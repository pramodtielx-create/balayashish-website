// =========================================
// BALAYASHISH MOVERS & PACKERS - SCRIPTS
// =========================================

document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ Balayashish App Loaded!');

  /* ======================================
     SMOOTH SCROLL : HERO CTA BUTTON
  ====================================== */
  const ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ======================================
     SMOOTH SCROLL : NAVIGATION LINKS
  ====================================== */
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ======================================
     CONTACT FORM VALIDATION (Formspree SAFE)
  ====================================== */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {

      const name = this.querySelector('input[name="name"]')?.value.trim();
      const email = this.querySelector('input[name="email"]')?.value.trim();
      const phone = this.querySelector('input[name="phone"]')?.value.trim();
      const message = this.querySelector('textarea[name="message"]')?.value.trim();

      if (!name || !email || !phone || !message) {
        alert('❌ Please fill all fields');
        event.preventDefault();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('❌ Invalid email address');
        event.preventDefault();
        return;
      }

      // ✅ Let Formspree submit, but show confirmation
      setTimeout(() => {
        alert(`✅ Thank you ${name}!\n\nWe will contact you shortly at ${phone}`);
        this.reset();
      }, 500);
    });
  }

  /* ======================================
     PRICING PLAN BUTTONS → CONTACT
  ====================================== */
  document.querySelectorAll('.price-card button').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const plan = this.closest('.price-card')?.querySelector('h3')?.textContent;
      alert(`✨ ${plan} Plan Selected\nPlease fill the form below.`);
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ======================================
     SERVICE CARD HOVER EFFECT (SAFER)
  ====================================== */
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  /* ======================================
     SCROLL REVEAL (PERFORMANCE SAFE)
  ====================================== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(25px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });

  /* ======================================
     HEADER SHADOW ON SCROLL
  ====================================== */
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 50
      ? '0 6px 15px rgba(0,0,0,0.2)'
      : '0 4px 6px rgba(0,0,0,0.1)';
  });

  /* ======================================
     STAT COUNTER ANIMATION
  ====================================== */
  document.querySelectorAll('.stat-box h3').forEach(stat => {
    const target = parseInt(stat.textContent.replace(/\D/g, ''));
    let current = 0;

