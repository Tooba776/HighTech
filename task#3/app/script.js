function validateForm() {
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let fullNameError = document.getElementById('fullNameError');
    let emailError = document.getElementById('emailError');
    let messageError = document.getElementById('messageError');
    let successMessage = document.getElementById('successMessage');
    let isValid = true;

    // Reset error messages
    fullNameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate Full Name
    if (fullName === '') {
        fullNameError.textContent = 'Please enter your full name';
        isValid = false;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate Message
    if (message === '') {
        messageError.textContent = 'Please enter your message';
        isValid = false;
    }

    // If all fields are valid, show success message
    if (isValid) {
        successMessage.textContent = 'Thank you for contacting us!';
        document.getElementById('contactForm').reset(); // Reset form fields
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
