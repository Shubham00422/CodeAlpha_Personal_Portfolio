document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById('statusMessage');

    // Simple validation
    if (name === '' || email === '' || message === '') {
        statusMessage.style.color = 'red';
        statusMessage.textContent = 'Please fill out all fields!';
    } else if (!validateEmail(email)) {
        statusMessage.style.color = 'red';
        statusMessage.textContent = 'Please enter a valid email!';
    } else {
        statusMessage.style.color = 'green';
        statusMessage.textContent = 'Message sent successfully!';
        // Clear form
        document.getElementById('contactForm').reset();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}