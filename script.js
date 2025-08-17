// script.js

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            button.classList.add("active");

            const category = button.getAttribute("data-filter");
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");
                if (category === "all" || category === itemCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        contactForm.reset();
    });
});
