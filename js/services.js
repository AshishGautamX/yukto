// ==========================================================================
// YUKTO — SERVICES TAB FILTER COMPONENT
// ==========================================================================

export function initServicesTabs() {
    const tabButtons = document.querySelectorAll('.services-tabs .tab-btn');
    const serviceCards = document.querySelectorAll('.services-grid .service-card');

    if (!tabButtons.length || !serviceCards.length) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCategory = btn.getAttribute('data-tab');

            // Update active state on tab buttons
            tabButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            // Filter cards with smooth fade
            serviceCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const isMatch = targetCategory === 'all' || cardCategory === targetCategory;

                if (isMatch) {
                    card.classList.remove('is-hidden');
                    // Trigger reflow for animation
                    requestAnimationFrame(() => {
                        card.classList.add('is-visible');
                    });
                } else {
                    card.classList.remove('is-visible');
                    card.classList.add('is-hidden');
                }
            });
        });
    });
}
