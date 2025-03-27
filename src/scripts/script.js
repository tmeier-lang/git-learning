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

    // Add fullscreen overlay to body
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    document.body.appendChild(overlay);

    // Handle gallery card clicks
    const galleryCards = document.querySelectorAll('.gallery-card');
    let activeCard = null;

    galleryCards.forEach(card => {
        card.addEventListener('click', () => {
            if (activeCard === card) {
                // Close fullscreen
                const clone = document.querySelector('.gallery-card-clone');
                if (clone) clone.remove();
                
                card.classList.remove('fullscreen');
                overlay.classList.remove('active');
                document.body.classList.remove('has-fullscreen');
                activeCard = null;
            } else {
                // Open fullscreen
                if (activeCard) {
                    const clone = document.querySelector('.gallery-card-clone');
                    if (clone) clone.remove();
                    activeCard.classList.remove('fullscreen');
                }
                
                // Create clone to maintain space
                const clone = card.cloneNode(true);
                clone.classList.add('gallery-card-clone');
                clone.style.visibility = 'hidden';
                card.parentNode.insertBefore(clone, card);
                
                card.classList.add('fullscreen');
                overlay.classList.add('active');
                document.body.classList.add('has-fullscreen');
                activeCard = card;
            }
        });
    });

    // Close fullscreen when clicking overlay
    overlay.addEventListener('click', () => {
        if (activeCard) {
            activeCard.classList.remove('fullscreen');
            overlay.classList.remove('active');
            activeCard = null;
        }
    });

    // Close fullscreen when pressing escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeCard) {
            activeCard.classList.remove('fullscreen');
            overlay.classList.remove('active');
            activeCard = null;
        }
    });
});