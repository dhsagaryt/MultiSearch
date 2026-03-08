/**
    <!-- =======================================================
    * I Template Use: Logis by (BootstrapMade)
    * Vendors: 1. Bootstrap v5.3.7, 
    *         2. Bootstrap-Icon v1.13.1, 
    *         3. AOS v2.3.4, 
    *         4. Font Awesome v7, 
    *         5. Swiper v11, 
    *         6. Glightbox (v3.3.1)
    * Author: @dhsagaryt (https://sagarmondaldev.blogspot.com/)
    * License: https://github.com/dhsagaryt/MultiSearch/blob/main/LICENSE
    * Updated: Aug 08 2025 with Bootstrap v5.3.7
    ======================================================== -->
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);


  
  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
      //initSidePanel(); // Run side panel code AFTER preloader gone
    });
  } else {
    document.addEventListener('DOMContentLoaded', initSidePanel);
  }


  /**
   * Side panel function
   */
  // --- Side Panel: init AFTER preloader is gone (or on DOM ready if no preloader) ---
  (function () {
    const PRELOADER_SELECTOR = '#preloader';

    function initMySidePanel() {
      const toggleBtn = document.getElementById('myPanelToggle');
      const panel     = document.getElementById('mySidePanel');
      const overlay   = document.getElementById('mySideOverlay');
      const main      = document.querySelector('main');
      const footer    = document.querySelector('footer');

      if (!toggleBtn || !panel) return;

      const open = () => {
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        overlay?.classList.add('show');
        if (overlay) overlay.hidden = false;
        document.body.classList.add('my-sidepanel-open');
      };

      const close = () => {
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        overlay?.classList.remove('show');
        // keep overlay in DOM for fade-out, hide after transition
        if (overlay) setTimeout(() => { overlay.hidden = true; }, 220);
        document.body.classList.remove('my-sidepanel-open');
      };

      // Toggle with the icon
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.classList.contains('open') ? close() : open();
      });

      // Prevent clicks inside the panel from closing it
      panel.addEventListener('click', (e) => e.stopPropagation());

      // Close when clicking outside (overlay, main, footer)
      overlay?.addEventListener('click', close);
      [main, footer].forEach(el => el && el.addEventListener('click', close));

      // Close on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && panel.classList.contains('open')) close();
      });
    }

    const pre = document.querySelector(PRELOADER_SELECTOR);
    if (pre) {
      // Run after load (when your preloader removal just ran)
      window.addEventListener('load', () => {
        // Ensure we init on the next tick after preloader removal
        setTimeout(initMySidePanel, 0);
      });
    } else if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMySidePanel);
    } else {
      initMySidePanel();
    }
  })();


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();