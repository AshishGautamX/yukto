// ==========================================================================
// SCROLL TO TOP INTERACTION
// ==========================================================================

export function initScrollTop() {
    let scrollTopBtn = document.querySelector('.scroll-to-top');

    // Create button dynamically if not present in HTML
    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.className = 'scroll-to-top';
        scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
        scrollTopBtn.setAttribute('title', 'Back to top');
        scrollTopBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        `;
        document.body.appendChild(scrollTopBtn);
    }

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 450) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
