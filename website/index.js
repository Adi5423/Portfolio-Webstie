// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Here you can add your form submission logic (e.g., sending data to a server)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Message sent! Thank you for contacting me.');
    form.reset(); // Reset the form after submission
});
