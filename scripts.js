document.addEventListener('DOMContentLoaded', function () {

  // HERO CTA SCROLL
  document.querySelector('.cta-btn')?.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  // NAV SCROLL
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // FORM FEEDBACK (NO BACKEND)
  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    alert('✅ Thank you! We will contact you shortly.');
    form.reset();
  });

});
