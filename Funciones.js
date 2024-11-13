document.addEventListener("DOMContentLoaded", function() {
    // Asignamos los elementos de cambio de vista
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");

    // Formulario de Login y Registro
    const loginSection = document.querySelector(".login");
    const registerSection = document.querySelector(".register");

    if (showRegister && showLogin && loginSection && registerSection) {
        showRegister.addEventListener("click", function() {
            loginSection.style.display = "none";
            registerSection.style.display = "flex";
        });

        showLogin.addEventListener("click", function() {
            registerSection.style.display = "none";
            loginSection.style.display = "flex";
        });
    }
});