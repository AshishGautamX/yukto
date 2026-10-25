// ==========================================================================
// YUKTO — STATS NUMBER COUNTER MICRO-INTERACTION
// ==========================================================================

export function initStatsCounter() {
    const counterElements = document.querySelectorAll('.hero-stat-number[data-target]');
    if (!counterElements.length) return;

    let hasRun = false;

    const animateCounters = () => {
        if (hasRun) return;
        hasRun = true;

        counterElements.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 1200; // ms
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out quad for natural slowing down
                const easeOut = 1 - (1 - progress) * (1 - progress);
                const currentVal = Math.floor(easeOut * target);

                el.textContent = currentVal + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    el.textContent = target + suffix;
                }
            };

            requestAnimationFrame(updateCount);
        });
    };

    // Trigger immediately or via intersection observer
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        const statsContainer = document.querySelector('.hero-stats-strip');
        if (statsContainer) {
            observer.observe(statsContainer);
        } else {
            animateCounters();
        }
    } else {
        animateCounters();
    }
}
