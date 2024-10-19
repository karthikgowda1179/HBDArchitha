function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = "Architha";
    const errorMessage = document.getElementById('errorMessage');
    
    if (password === correctPassword) {
        window.location.href = 'page.html'; // Redirect to the main page
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
}
