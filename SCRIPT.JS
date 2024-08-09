// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animations
window.addEventListener('scroll', () => {
    const services = document.querySelectorAll('.service');
    const aboutSection = document.querySelector('#about');
    const servicesSection = document.querySelector('#services');

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY > aboutSection.offsetTop - windowHeight / 2) {
        aboutSection.classList.add('appear');
    }

    if (scrollY > servicesSection.offsetTop - windowHeight / 2) {
        services.forEach((service, index) => {
            setTimeout(() => {
                service.classList.add('appear');
            }, index * 200);
        });
    }
});

// Animation classes
document.querySelectorAll('.service, #about').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
});

