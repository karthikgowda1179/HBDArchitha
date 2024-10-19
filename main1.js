function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = "Mungaru Male 2";
    const errorMessage = document.getElementById('errorMessage');
    
    if (password === correctPassword) {
        window.location.href = 'page.html'; // Redirect to the main page
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
}
