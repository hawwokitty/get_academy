document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.getElementById('signInForm');
    const errorMessage = document.getElementById('error-message');

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill out all fields.';
        } else {
            // Here you can add your code to handle sign-in logic, such as sending data to a server.
            // For demonstration purposes, we're just logging the username and password.
            console.log('Username:', username);
            console.log('Password:', password);
            errorMessage.textContent = ''; // Clear error message
        }
    });
});
