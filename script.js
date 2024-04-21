const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.login form');
const registerForm = document.querySelector('.register form');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Register new user
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Store user data in local storage
    localStorage.setItem(email, JSON.stringify({ username, password }));
    alert('Registration successful!');
    this.reset(); // Reset form fields after registration
});

// Login user
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
        alert('Login successful!');
        // Redirect to another page after successful login
        window.location.href = 'homepage.html'; // Replace 'dashboard.html' with your desired page
    } else {
        alert('Invalid email or password');
    }
    this.reset(); // Reset form fields after login attempt
});