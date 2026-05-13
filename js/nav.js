/* =========================================================================
   COVET & MANE — SHARED NAV + FOOTER INJECTION
   Injects the promo bar, primary nav, mobile drawer, and footer into every
   page. To set the active nav link, give the <body> a data-page attribute:
     - index.html         uses  data-page="home"
     - academy.html       uses  data-page="academy"
     - find-a-stylist.html uses data-page="coveted"
     - portal.html        uses  data-page="portal"
   Active state is computed from data-page. Edit copy in this file once and
   it propagates to all four pages.
   ========================================================================= */

/* ── NOINDEX / NOFOLLOW META TAG ─────────────────────────────────────
   Belt-and-suspenders to robots.txt: injects a meta tag that tells
   Google, Bing, and other compliant crawlers not to index, follow,
   archive, or snippet any page of this prototype. Runs immediately
   so it lands in <head> before crawlers parse the document.
   ──────────────────────────────────────────────────────────────────── */
(function () {
  const m = document.createElement('meta');
  m.name = 'robots';
  m.content = 'noindex, nofollow, noarchive, nosnippet, noimageindex';
  document.head.appendChild(m);
})();


(function () {
  'use strict';

  /* ── PROMO BAR + NAV MARKUP ─────────────────────────────────────────── */

  const promoBar = `
    <div class="promo-bar">
      Education is required to open your account —
      <a href="academy.html">Start with Foundations →</a>
    </div>
  `;

  const navMarkup = `
    <nav class="site-nav" aria-label="Primary">
      <div class="site-nav__inner">

        <a href="index.html" class="site-nav__logo" aria-label="Covet & Mane home">
          Covet &amp; Mane
        </a>

        <ul class="site-nav__links">
          <li><a href="index.html"           data-page="home">Shop</a></li>
          <li><a href="academy.html"         data-page="academy">Academy</a></li>
          <li><a href="find-a-stylist.html"  data-page="coveted">Find a Stylist</a></li>
          <li><a href="about.html"           data-page="about">About</a></li>
        </ul>

        <div class="site-nav__actions">

          <!-- LOGGED-OUT cluster -->
          <a href="find-a-stylist.html"
             class="site-nav__consumer-link logged-out-only">
            Looking for a stylist? ↗
          </a>
          <a href="apply.html" class="btn btn--ghost btn--sm logged-out-only">
            Apply for Account
          </a>
          <a href="portal.html" class="btn btn--primary btn--sm logged-out-only">
            Sign In
          </a>

          <!-- LOGGED-IN cluster -->
          <span class="site-nav__account-badge logged-in-only">
            Advanced &middot; Sarah M.
          </span>
          <a href="orders.html" class="btn btn--ghost btn--sm logged-in-only">
            My Orders
          </a>
          <a href="index.html" class="btn btn--primary btn--sm logged-in-only"
             data-action="sign-out">
            Sign Out
          </a>

        </div>

        <button class="site-nav__hamburger" aria-label="Open menu"
                aria-expanded="false" aria-controls="site-nav-drawer">
          <span></span><span></span><span></span>
        </button>

      </div>
    </nav>

    <aside id="site-nav-drawer" class="site-nav-drawer" aria-hidden="true">
      <a href="index.html"           data-page="home">Shop</a>
      <a href="academy.html"         data-page="academy">Academy</a>
      <a href="find-a-stylist.html"  data-page="coveted">Find a Stylist</a>
      <a href="about.html"           data-page="about">About</a>

      <div class="drawer-actions">
        <a href="apply.html" class="btn btn--ghost logged-out-only">Apply for Account</a>
        <a href="portal.html" class="btn btn--primary logged-out-only">Sign In</a>
        <a href="portal.html" class="btn btn--ghost logged-in-only">My Account</a>
        <a href="index.html"  class="btn btn--primary logged-in-only">Sign Out</a>
      </div>
    </aside>
  `;

  /* ── FOOTER MARKUP ──────────────────────────────────────────────────── */

  const footerMarkup = `
    <footer class="site-footer">
      <div class="container-wide">

        <div class="site-footer__grid">

          <div class="site-footer__brand-block">
            <div class="site-footer__logo">Covet &amp; Mane</div>
            <p class="site-footer__tagline">
              By licensed stylists, for licensed stylists.
            </p>
            <div class="site-footer__newsletter">
              <div class="t-eyebrow-gold mb-4">Free Pro Guide</div>
              <p style="font-size: 13px; line-height: 1.5; color: rgba(247,244,238,0.78); margin-bottom: 12px;">
                <em>How to Double Your Extensions Revenue</em> — sent free to
                licensed stylists. Real numbers from working artists, no fluff.
              </p>
              <input type="email" placeholder="email@yoursalon.com" aria-label="Email address">
              <a href="#" class="link-arrow link-arrow--inverse">Send Me the Guide →</a>
            </div>
          </div>

          <div>
            <h4 class="site-footer__col-title">For Professionals</h4>
            <ul class="site-footer__list">
              <li><a href="apply.html">Apply for Account</a></li>
              <li><a href="portal.html">Sign In</a></li>
              <li><a href="shop.html">Wholesale Catalog</a></li>
              <li><a href="contact.html">Talk to a Rep</a></li>
              <li><a href="contact.html">Chat with Us</a></li>
            </ul>
          </div>

          <div>
            <h4 class="site-footer__col-title">Academy</h4>
            <ul class="site-footer__list">
              <li><a href="academy.html#cert-path">Foundations</a></li>
              <li><a href="academy.html#cert-path">Advanced</a></li>
              <li><a href="academy.html#cert-path">Master Educator</a></li>
              <li><a href="academy.html#events">Upcoming Events</a></li>
              <li><a href="academy.html">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 class="site-footer__col-title">For Clients</h4>
            <ul class="site-footer__list">
              <li><a href="find-a-stylist.html">Find a Stylist</a></li>
              <li><a href="methods.html">Extension Methods</a></li>
              <li><a href="care.html">Care Guide</a></li>
              <li><a href="aftercare.html">Aftercare</a></li>
            </ul>
          </div>

          <div>
            <h4 class="site-footer__col-title">Company</h4>
            <ul class="site-footer__list">
              <li><a href="about.html">About</a></li>
              <li><a href="find-a-stylist.html">The Coveted</a></li>
              <li><a href="press.html">Press</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="careers.html">Careers</a></li>
            </ul>
          </div>

        </div>

        <div class="site-footer__bottom">
          <span>© 2026 Covet &amp; Mane. All rights reserved.</span>
          <div class="site-footer__legal">
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
            <a href="accessibility.html">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  `;

  /* ── INJECTION ──────────────────────────────────────────────────────── */

  function inject() {
    const navMount    = document.getElementById('site-nav-mount');
    const footerMount = document.getElementById('site-footer-mount');

    if (navMount) {
      navMount.innerHTML = promoBar + navMarkup;
    } else {
      // No explicit mount → inject after <body>'s opening
      document.body.insertAdjacentHTML('afterbegin', promoBar + navMarkup);
    }

    if (footerMount) {
      footerMount.innerHTML = footerMarkup;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerMarkup);
    }

    applyActiveState();
    wireDrawer();
  }

  /* ── ACTIVE STATE ───────────────────────────────────────────────────── */

  function applyActiveState() {
    const page = document.body.dataset.page;
    if (!page) return;

    document.querySelectorAll('.site-nav__links a, .site-nav-drawer a').forEach(a => {
      if (a.dataset.page === page) {
        a.classList.add('is-active');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ── MOBILE DRAWER ──────────────────────────────────────────────────── */

  function wireDrawer() {
    const btn    = document.querySelector('.site-nav__hamburger');
    const drawer = document.getElementById('site-nav-drawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', String(open));
      drawer.setAttribute('aria-hidden', String(!open));
    });

    // Close drawer when a link is tapped
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
