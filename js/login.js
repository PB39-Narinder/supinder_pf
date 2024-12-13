document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Predefined credentials (in real app, this would be server-side)
    const CREDENTIALS = {
        username: '27/11/2024', // Wedding date
        password: 'Supinder & Priyanka ❤'    // Secret word
    };

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.innerHTML = type === 'password' ? 
            '<i class="fas fa-eye"></i>' : 
            '<i class="fas fa-eye-slash"></i>';
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateInput = document.getElementById('username').value;
        // Convert YYYY-MM-DD to DD/MM/YYYY format
        const dateParts = dateInput.split('-');
        const username = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
        const password = document.getElementById('password').value;

        if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
            // Set authentication status
            localStorage.setItem('isAuthenticated', 'true');
            // Redirect to partner page
            window.location.href = 'partner.html';
        } else {
            errorMessage.textContent = 'Incorrect date or secret word. Try again! 💕';
            loginForm.reset();
        }
    });
}); 