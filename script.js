document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let feedback = document.getElementById("feedback");

    if (password.length < 6) {
        feedback.textContent = "Weak - Too Short!";
        feedback.style.color = "red";
    } else if (password.match(/[A-Z]/) && password.match(/\d/) && password.match(/[\W]/)) {
        feedback.textContent = "Strong Password!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Medium - Add UpperCase letters, numbers & symbols!";
        feedback.style.color = "orange";
    }
});

document.getElementById("generate").addEventListener("click", function() {
    let length = 12;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("generated-password").textContent = "Generated Password: " + password;
});
