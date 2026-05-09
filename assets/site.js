const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = contactForm.querySelector(".form-message");

    if (message) {
      message.textContent = "Sample note ready. This test form does not send anywhere yet.";
    }

    contactForm.reset();
  });
}

const flavorToggles = document.querySelectorAll(".flavor-toggle");

flavorToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const item = toggle.closest(".flavor-item");

    if (!item) {
      return;
    }

    const isOpen = item.classList.toggle("is-open");
    const panel = document.getElementById(toggle.getAttribute("aria-controls"));

    toggle.setAttribute("aria-expanded", String(isOpen));

    if (panel) {
      panel.setAttribute("aria-hidden", String(!isOpen));
    }
  });
});
