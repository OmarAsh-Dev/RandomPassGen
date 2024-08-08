const passwordBox = document.getElementById("generatedpass")
const length = 12;
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

function createPassword() {
    let password = "";
    password += charset[Math.floor(Math.random()*charset.length)]
    while (length > password.length) {
        password += charset[Math.floor(Math.random()*charset.length)]
    }
    passwordBox.value = password;
}
function copyPass() {
    const passwordInput = document.getElementById('generatedpass');
    const alert = document.getElementById('alert');

    // Copy the password to the clipboard
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');

    // Show the alert with fade-in effect
    alert.classList.add('show');

    // Hide the alert after 3 seconds with fade-out effect
    setTimeout(function(){
        alert.classList.remove('show');
    }, 3000);
}
