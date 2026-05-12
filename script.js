/* ===== Holly Matthews Portfolio — Minimal JS ===== */

(function () {
  'use strict';

  // Keyboard navigation: left/right arrows scroll project images
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

  // Simple intersection observer for fade-in on scroll
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project').forEach(function (card) {
      card.classList.add('fade-in');
      observer.observe(card);
    });
  }
})();