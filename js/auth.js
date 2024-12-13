// Check authentication status
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
        window.location.href = 'login.html';
    }
}

// Run on page load
checkAuth();

// Add logout functionality
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'logout-btn';
    logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
    document.body.appendChild(logoutBtn);

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isAuthenticated');
        window.location.href = 'login.html';
    });
}); 