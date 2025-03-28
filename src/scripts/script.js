// Define initHeader in the global scope so include.js can call it later
function initHeader() {
    // Toggle dark theme
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    if (themeToggle && themeIcon) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            themeIcon.textContent = document.body.classList.contains("dark-theme")
                ? "☀️"  // light mode icon
                : "🌙"; // dark mode icon
        });
    }
    // Toggle mobile navigation with animation
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
            // Stagger link animations
            document.querySelectorAll('.nav-links li').forEach((link, index) => {
                if (navLinks.classList.contains('active')) {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                } else {
                    link.style.animation = '';
                }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Your fullscreen/gallery code remains unchanged...
    
    // Add fullscreen overlay to body...
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    document.body.appendChild(overlay);

    const galleryCards = document.querySelectorAll('.gallery-card');
    let activeCard = null;
    let cardClone = null;

    galleryCards.forEach(card => {
        card.addEventListener('click', () => {
            if (activeCard === card) {
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
                cardClone = card.cloneNode(true);
                cardClone.style.visibility = 'hidden';
                cardClone.classList.add('gallery-card-clone');
                card.insertAdjacentElement('afterend', cardClone);
                const rect = card.getBoundingClientRect();
                card.setAttribute('data-original-rect', `${rect.top},${rect.left},${rect.width},${rect.height}`);
                const originalTop = rect.top;
                const originalLeft = rect.left;
                card.classList.add('fullscreen');
                card.style.top = originalTop + 'px';
                card.style.left = originalLeft + 'px';
                card.style.width = rect.width + 'px';
                card.style.height = rect.height + 'px';
                card.offsetHeight; // Force reflow
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

    overlay.addEventListener('click', () => {
        if (activeCard) {
            activeCard.classList.remove('fullscreen');
            overlay.classList.remove('active');
            activeCard = null;
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeCard) {
            activeCard.classList.remove('fullscreen');
            overlay.classList.remove('active');
            activeCard = null;
        }
    });
});