document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        // Toggle the icon
        if (document.body.classList.contains("dark-theme")) {
            themeIcon.textContent = "☀️"; // Sun icon for light mode
        } else {
            themeIcon.textContent = "🌙"; // Moon icon for dark mode
        }
    });
});