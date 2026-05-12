/* ===== Holly Matthews Portfolio — Interactive Scripts ===== */

(function () {
  'use strict';

  // --- Cursor glow follow ---
  var glow = document.querySelector('.cursor-glow');
  if (glow) {
    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // --- Nav scroll state ---
  var nav = document.querySelector('.nav');
  var lastScroll = 0;

  window.addEventListener('scroll', function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = st;
  }, { passive: true });

  // --- Keyboard navigation: left/right arrows scroll project images ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      var focused = document.activeElement;
      var gallery = focused && focused.closest('.project-images');
      if (!gallery) return;
      e.preventDefault();
      var scrollAmt = gallery.clientWidth * 0.8;
      gallery.scrollBy({
        left: e.key === 'ArrowRight' ? scrollAmt : -scrollAmt,
        behavior: 'smooth'
      });
    }
  });

  // --- Image indicator tracking ---
  var allGalleries = document.querySelectorAll('.project-images');
  allGalleries.forEach(function (gallery) {
    var indicators = gallery.querySelector('.image-indicators');
    if (!indicators) return;
    var slides = indicators.querySelectorAll('span');

    // Intersection observer to track which slide is visible
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var idx = Array.prototype.indexOf.call(gallery.querySelectorAll('picture'), entry.target);
          if (idx < 0) return;
          slides.forEach(function (s) {
            s.classList.remove('active', 'has-viewed');
            s.textContent = parseInt(s.textContent);
          });
          if (entry.isIntersecting) {
            slides[idx].classList.add('active');
          }
          // Mark viewed
          var viewIdx = entry.isIntersecting ? idx : idx - 1;
          for (var i = 0; i < Math.min(viewIdx + 1, slides.length); i++) {
            if (i !== idx || !entry.isIntersecting) {
              slides[i].classList.add('has-viewed');
            }
          }
        });
      },
      {
        root: gallery,
        threshold: 0.6
      }
    );

    gallery.querySelectorAll('picture').forEach(function (pic) {
      observer.observe(pic);
    });
  });

  // --- Intersection observer for fade-in on scroll ---
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.project').forEach(function (card) {
      card.classList.add('fade-in');
      observer.observe(card);
    });
  }
})();