document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
            navbar.classList.remove("navbar-transparent");
        } else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("navbar-scrolled");
        }
    });
});


function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim().length < 3) {
        nameError.textContent = "El nombre debe tener al menos 3 caracteres.";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
        isValid = false;
    }

    if (message.value.trim().length < 10) {
        messageError.textContent = "El mensaje debe tener al menos 10 caracteres.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("thankYouMessage").style.display = "block";
    }

    return isValid;
}

window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  