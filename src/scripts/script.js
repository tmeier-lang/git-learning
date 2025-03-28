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
    let cardClone = null;

    galleryCards.forEach(card => {
        card.addEventListener('click', () => {
            if (activeCard === card) {
                // Close fullscreen - animate back to original position
                const rect = card.getAttribute('data-original-rect').split(',');
                card.style.top = rect[0] + 'px';
                card.style.left = rect[1] + 'px';
                card.style.width = rect[2] + 'px';
                card.style.height = rect[3] + 'px';
                card.style.transform = 'none';
                
                setTimeout(() => {
                    card.classList.remove('fullscreen');
                    card.removeAttribute('style');
                    overlay.classList.remove('active');
                    document.body.classList.remove('has-fullscreen');
                    if (cardClone) {
                        cardClone.remove();
                        cardClone = null;
                    }
                }, 500);
                
                activeCard = null;
            } else {
                // Create invisible clone to maintain layout
                cardClone = card.cloneNode(true);
                cardClone.style.visibility = 'hidden';
                cardClone.classList.add('gallery-card-clone');
                card.insertAdjacentElement('afterend', cardClone); // Changed this line

                // Open fullscreen - animate from current position
                const rect = card.getBoundingClientRect();
                card.setAttribute('data-original-rect', 
                    `${rect.top},${rect.left},${rect.width},${rect.height}`);
                
                // Store original position before adding fullscreen class
                const originalTop = rect.top;
                const originalLeft = rect.left;
                
                card.classList.add('fullscreen');
                card.style.top = originalTop + 'px';
                card.style.left = originalLeft + 'px';
                card.style.width = rect.width + 'px';
                card.style.height = rect.height + 'px';
                
                // Force reflow
                card.offsetHeight;
                
                // Animate to center
                const vh = window.innerHeight;
                const vw = window.innerWidth;
                const finalWidth = Math.min(vw * 0.9, vh * 1.2);
                const finalHeight = finalWidth * 0.75;
                
                card.style.top = `${(vh - finalHeight) / 2}px`;
                card.style.left = `${(vw - finalWidth) / 2}px`;
                card.style.width = `${finalWidth}px`;
                card.style.height = `${finalHeight}px`;
                
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