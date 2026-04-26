// =========================================
// BALAYASHISH MOVERS & PACKERS - SCRIPTS
// =========================================

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Balayashish App Loaded!');

    // ===== SMOOTH SCROLL FOR BUTTONS =====
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ===== SMOOTH SCROLL FOR NAV LINKS =====
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== CONTACT FORM SUBMISSION =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get all form inputs
            const inputs = this.querySelectorAll('input, textarea');
            const name = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const phone = inputs[2].value.trim();
            const message = inputs[3].value.trim();

            // Validation
            if (!name || !email || !phone || !message) {
                alert('❌ Please fill in all fields!');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('❌ Please enter a valid email!');
                return;
            }

            // Success!
            alert(`✅ Thank you, ${name}!\n\n📞 We'll contact you at ${phone}\n⏱️ Response time: 2-4 hours\n\n📧 Confirmation sent to ${email}`);

            // Log data (for future backend integration)
            console.log({
                name: name,
                email: email,
                phone: phone,
                message: message,
                timestamp: new Date().toLocaleString()
            });

            // Reset form
            this.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== PRICING PLAN BUTTONS =====
    const priceButtons = document.querySelectorAll('.price-card button');
    priceButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const planName = this.closest('.price-card').querySelector('h3').textContent;
            alert(`✨ ${planName} Plan Selected!\n\nPlease fill the form below to get started.`);
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                setTimeout(() => {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }, 200);
            }
        });
    });

    // ===== SERVICE CARDS HOVER EFFECT =====
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
            this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
        });
    });

    // ===== SCROLL REVEAL ANIMATION =====
    const revealElements = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(revealElements, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });

    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
    });

   // ===== COUNTER ANIMATION (FINAL FIX) =====
document.querySelectorAll('.stat-box h3').forEach(stat => {
  const originalText = stat.textContent.trim();

  // ✅ Do NOT animate symbolic values
  if (originalText.includes('K') || originalText.includes('%')) {
    stat.textContent = originalText; // keep exactly as written
    return;
  }

  // ✅ Animate only plain numbers like "15+"
  const number = parseInt(originalText.replace(/\D/g, ''), 10);
  let current = 0;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      const interval = setInterval(() => {
        current += Math.ceil(number / 40);

        if (current >= number) {
          stat.textContent = number + '+';
          clearInterval(interval);
        } else {
          stat.textContent = current + '+';
        }
      }, 30);

      observer.unobserve(stat);
    }
  }, { threshold: 0.6 });

  observer.observe(stat);
});

  

    // ===== BUTTON RIPPLE EFFECT =====
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.7)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple-animation 0.6s ease-out';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ===== ACTIVE NAV INDICATOR =====
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'white';
            link.style.borderBottom = 'none';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = '#f97316';
                link.style.borderBottom = '2px solid #f97316';
            }
        });
    });

    // ===== TESTIMONIAL AUTO-ROTATE =====
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 1) {
        let currentTestimonial = 0;
        
        setInterval(() => {
            testimonials.forEach((t, idx) => {
                t.style.opacity = idx === currentTestimonial ? '1' : '0.5';
                t.style.transition = 'opacity 0.5s ease';
            });
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }, 5000);
    }

    console.log('✅ All functionality loaded successfully!');
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
