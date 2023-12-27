// script.js

function validateForm(event) {
    // Reset previous error messages
    resetErrors();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let hasErrors = false;

    // Validate name
    if (name.trim() === '') {
        showError('name', 'Name is required');
        hasErrors = true;
    }

    // Validate email
    if (!isValidEmail(email)) {
        showError('email', 'Invalid email address');
        hasErrors = true;
    }

    // Validate password
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        hasErrors = true;
    }

    // Prevent form submission if there are validation errors
    if (hasErrors) {
        event.preventDefault();
    }
}

function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;

    const inputField = document.getElementById(field);
    inputField.classList.add('error-input');
    inputField.parentNode.appendChild(errorElement);
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((error) => {
        error.parentNode.removeChild(error);
    });

    const inputFields = document.querySelectorAll('.error-input');
    inputFields.forEach((field) => {
        field.classList.remove('error-input');
    });
}

// Export the functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
    };
}

function displayResult({ name, email, password }) {
    // Redirect to a new page with the entered values
    window.location.href = `result.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
}