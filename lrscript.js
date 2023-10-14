// Login Form
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Validate and handle login here (e.g., check credentials)
    // Redirect to the user's dashboard on successful login.
    window.location.href = 'dashboard.html';
});

// Registration Form
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    // Validate and handle registration here (e.g., save to a database)
    // Redirect to a login page on successful registration.
    window.location.href = 'login.html';
});
