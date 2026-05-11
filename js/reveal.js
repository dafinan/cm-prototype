/* =========================================================================
   COVET & MANE — SCROLL REVEAL
   Apply class="reveal" to any element. IntersectionObserver adds
   .is-visible when it enters the viewport — CSS handles the actual
   fade/translate transition. Add reveal-delay-1..4 for staggered effects.
   ========================================================================= */

(function () {
  'use strict';

  // Respect reduced motion — make everything immediately visible
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(el => observer.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
