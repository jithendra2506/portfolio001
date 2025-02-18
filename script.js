document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Function to show section with transition
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        window.scrollTo({
            top: document.getElementById(sectionId).offsetTop - 50,
            behavior: "smooth"
        });
    }

    // Click event for navigation
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    // Show first section on page load
    showSection("home");
});