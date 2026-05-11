/* =========================================================================
   COVET & MANE — TABS
   Used on portal.html. Markup pattern:

     <div class="tabs" data-tabs>
       <div class="tabs__triggers" role="tablist">
         <button class="tabs__trigger is-active" data-tab="overview" role="tab">Overview</button>
         <button class="tabs__trigger" data-tab="orders" role="tab">Orders</button>
         ...
       </div>
       <div class="tabs__panel is-active" data-panel="overview" role="tabpanel">…</div>
       <div class="tabs__panel" data-panel="orders" role="tabpanel" hidden>…</div>
       ...
     </div>
   ========================================================================= */

(function () {
  'use strict';

  function init() {
    document.querySelectorAll('[data-tabs]').forEach(wrap => {
      wrap.addEventListener('click', e => {
        const trigger = e.target.closest('.tabs__trigger');
        if (!trigger) return;

        const target = trigger.dataset.tab;
        if (!target) return;

        // Update triggers
        wrap.querySelectorAll('.tabs__trigger').forEach(t => {
          const active = t === trigger;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', String(active));
        });

        // Update panels
        wrap.querySelectorAll('.tabs__panel').forEach(p => {
          const active = p.dataset.panel === target;
          p.classList.toggle('is-active', active);
          p.hidden = !active;
        });

        // Smooth scroll the tab strip into view on mobile if it's sticky
        if (window.innerWidth < 768) {
          wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
