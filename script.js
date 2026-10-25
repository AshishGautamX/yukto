// ==========================================================================
// YUKTO — MASTER APPLICATION ENTRY POINT
// ==========================================================================

import { initNavbar } from './js/navbar.js';
import { initSmoothScroll } from './js/smooth-scroll.js';
import { initContactForm } from './js/contact.js';
import { initScrollTop } from './js/scroll-top.js';
import { initServicesTabs } from './js/services.js';
import { initStatsCounter } from './js/counter.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initServicesTabs();
    initStatsCounter();
    initContactForm();
    initScrollTop();
});
