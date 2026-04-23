// scripts.js

// Smooth scrolling navigation
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form validation and submission
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Submit the form (this is just a placeholder)
    alert('Form submitted!');
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Scroll animations
const elements = document.querySelectorAll('.animate-on-scroll');

const scrollAnimation = () => {
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);

// Dynamic pricing calculation
const quantityInput = document.querySelector('#quantity');
const priceDisplay = document.querySelector('#price');
const pricePerUnit = 100; // Example price per unit

quantityInput.addEventListener('input', () => {
    const quantity = quantityInput.value;
    const totalPrice = quantity * pricePerUnit;
    priceDisplay.innerText = `Total Price: $${totalPrice}`;
});

// Interactive testimonial carousel
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('#prev-testimonial');
const nextBtn = document.querySelector('#next-testimonial');

const showTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
};

prevBtn.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex > 0) ? currentTestimonialIndex - 1 : testimonials.length - 1;
    showTestimonial(currentTestimonialIndex);
});

nextBtn.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex < testimonials.length - 1) ? currentTestimonialIndex + 1 : 0;
    showTestimonial(currentTestimonialIndex);
});

// Show the first testimonial by default
showTestimonial(currentTestimonialIndex);