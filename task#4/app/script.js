// Contact form validation
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Thank you for contacting us!";
        document.getElementById("contactForm").reset();
    }

    return false; // prevent real submission
}

// Scroll to top
window.onscroll = function () {
    let btn = document.getElementById("scrollTopBtn");
    if (btn) {
        btn.style.display = document.documentElement.scrollTop > 100 ? "block" : "none";
    }
};

if (document.getElementById("scrollTopBtn")) {
    document.getElementById("scrollTopBtn").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
