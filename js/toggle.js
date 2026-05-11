/* =========================================================================
   COVET & MANE — LOGGED-IN/OUT DEV TOGGLE
   Floating button (bottom-right) that flips body.logged-in. Demo-only —
   for working sessions where stakeholders need to compare both states
   without an actual auth flow.

   State is persisted in localStorage('cm-auth') so a refresh keeps the
   choice. Clear with: localStorage.removeItem('cm-auth')
   ========================================================================= */

(function () {
  'use strict';

  const STORAGE_KEY = 'cm-auth';

  function getState() {
    return localStorage.getItem(STORAGE_KEY) === 'in' ? 'in' : 'out';
  }

  function setState(state) {
    localStorage.setItem(STORAGE_KEY, state);
    applyState(state);
    renderLabel(state);
  }

  function applyState(state) {
    if (state === 'in') {
      document.body.classList.add('logged-in');
    } else {
      document.body.classList.remove('logged-in');
    }
  }

  function renderLabel(state) {
    const stateEl = document.querySelector('.dev-toggle__state');
    const iconEl  = document.querySelector('.dev-toggle__icon');
    if (!stateEl || !iconEl) return;
    stateEl.textContent = state === 'in' ? 'Logged In' : 'Logged Out';
    iconEl.textContent  = state === 'in' ? '✦' : '👤';
  }

  function mount() {
    // Apply state first so the page doesn't flash the wrong nav
    applyState(getState());

    const btn = document.createElement('button');
    btn.className = 'dev-toggle';
    btn.setAttribute('aria-label', 'Toggle logged in state — demo only');
    btn.innerHTML = `
      <span class="dev-toggle__icon">👤</span>
      <span>
        <span class="dev-toggle__label">View as</span>
        <span class="dev-toggle__state">Logged Out</span>
      </span>
    `;

    btn.addEventListener('click', () => {
      const next = getState() === 'in' ? 'out' : 'in';
      setState(next);
    });

    document.body.appendChild(btn);
    renderLabel(getState());
  }

  // Run state application immediately to avoid flash; mount button on DOM ready
  applyState(getState());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
