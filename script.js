function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
}
function closeNav() {
    document.getElementById('navLinks').classList.remove('open');
}

// Scroll-triggered fade-in for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.edu-card, .skill-group, .project-card, .hack-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// EmailJS Configuration
try {
    emailjs.init('ubLJjt8VGb2fM2c3s');

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            formStatus.textContent = 'Sending...';
            formStatus.style.color = 'var(--neon)';

            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                to_email: 'saideepmali162@gmail.com'
            };

            emailjs.send('service_xatd198', 'template_4d84fqv', templateParams)
                .then(function(response) {
                    formStatus.textContent = '✓ Message sent successfully!';
                    formStatus.style.color = 'var(--neon)';
                    contactForm.reset();
                    setTimeout(() => {
                        formStatus.textContent = '';
                    }, 5000);
                }, function(error) {
                    formStatus.textContent = '✗ Error sending message. Please try again.';
                    formStatus.style.color = 'var(--neon3)';
                    console.error('EmailJS error:', error);
                });
        });
    }
} catch (error) {
    console.warn('EmailJS not available:', error);
}



