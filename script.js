// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const revealCards = document.querySelectorAll('.project-card, .skill-card');
    const revealBlocks = document.querySelectorAll('.contact-inner');

    revealCards.forEach((card, index) => {
        card.classList.add('reveal-card');
        card.style.transitionDelay = `${index * 0.18}s`;
        observer.observe(card);
    });

    revealBlocks.forEach((block) => {
        block.classList.add('reveal-block');
        observer.observe(block);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
