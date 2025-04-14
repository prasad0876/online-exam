// Script for handling forms and interactions

document.addEventListener('DOMContentLoaded', function () {

    // Contact Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Message sent successfully!");
            contactForm.reset();
        });
    }

    // Enrollment Form Handling
    const enrollmentForm = document.getElementById('enrollmentForm');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Enrollment successful!");
            enrollmentForm.reset();
        });
    }

    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === "user@example.com" && password === "password123") {
                window.location.href = "courses.html";
            } else {
                alert("Invalid credentials, please try again.");
            }
        });
    }

    // Register Form Validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                alert("Registration successful!");
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// Simulate users for validation (This would normally be on the server-side)
const users = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "password456" }
];

// Function to handle login validation
function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = "index.html"; // Redirect to home page
        return true;
    } else {
        alert('Invalid credentials. Please try again or register.');
        showRegisterPage(); // Redirect to Register Page if login fails
        return false;
    }
}

// Handle user registration
function registerUser() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    // Simulate registration process (add user)
    users.push({ email: email, password: password });
    alert('Registration successful! Please login.');
    showLoginPage(); // Redirect to login page after successful registration
    return false;
}

// Switch to Register Page
function showRegisterPage() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
}

// Switch to Login Page
function showLoginPage() {
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
}

