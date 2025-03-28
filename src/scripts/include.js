document.addEventListener("DOMContentLoaded", () => {
    const loadInclude = (selector, filePath) => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.text();
            })
            .then(html => {
                document.querySelector(selector).innerHTML = html;
                if (selector === "#header-placeholder" && typeof initHeader === "function") {
                    initHeader();
                }
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    };

    loadInclude("#header-placeholder", "src/styles/includes/header.html");
    loadInclude("#footer-placeholder", "src/styles/includes/footer.html");
});