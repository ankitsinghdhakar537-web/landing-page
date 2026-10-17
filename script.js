

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
        menuToggle.textContent = isExpanded ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// Name field: allow only letters, spaces and dots
const nameInput = document.querySelector('input[name="name"]');

if (nameInput) {
    nameInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z\s.]/g, "");
    });
}

// Contact form success message
const contactForm = document.querySelector("#contact form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formStatus.textContent = "✓ Message sent successfully!";
        formStatus.style.color = "#4ade80";
        formStatus.style.background = "rgba(74, 222, 128, 0.1)";
        formStatus.style.padding = "12px";
        formStatus.style.borderRadius = "8px";
        formStatus.style.marginTop = "15px";
        formStatus.style.textAlign = "center";

        contactForm.reset();
    });
}
