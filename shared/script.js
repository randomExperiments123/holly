/* ===== Holly Matthews Portfolio — Interactive Scripts ===== */

(function () {
  'use strict';

  // --- Nav scroll state ---
  var nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- Keyboard navigation: left/right arrows scroll project images ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      var focused = document.activeElement;
      var gallery = focused && focused.closest('.project-images');
      if (!gallery) return;
      e.preventDefault();
      var slides = gallery.querySelectorAll('.slide');
      var active = gallery.querySelector('.slide.active');
      var idx = Array.prototype.indexOf.call(slides, active);
      if (e.key === 'ArrowRight') {
        idx = (idx + 1) % slides.length;
      } else {
        idx = (idx - 1 + slides.length) % slides.length;
      }
      slides.forEach(function (s) { s.classList.remove('active'); });
      slides[idx].classList.add('active');
      // Update counter
      var counter = gallery.querySelector('.slide-count .current');
      if (counter) counter.textContent = idx + 1;
    }
  });

  // --- Lightbox ---
  var lightbox = document.querySelector('.lightbox');
  var lightboxTrack = lightbox.querySelector('.lightbox-track');
  var lightboxCurrent = lightbox.querySelector('.lightbox-current');
  var lightboxTotal = lightbox.querySelector('.lightbox-total');
  var lightboxCaption = lightbox.querySelector('.lightbox-caption');
  var currentIndex = 0;
  var currentProject = 1;
  var prevDirection = 'next';

  function updateLightboxTotal() {
    lightboxTotal.textContent = lightboxTrack.children.length;
  }

  function showLightboxSlide(idx, direction) {
    var slides = lightboxTrack.querySelectorAll('.lightbox-slide');
    slides.forEach(function (s) {
      s.classList.remove('active', 'prev-slide', 'next-slide');
    });

    var current = slides[idx];
    if (current) {
      // Direction-aware animation
      if (direction === 'next') {
        if (idx > 0) {
          slides[idx - 1].classList.add('prev-slide');
        }
        current.classList.add('active');
      } else if (direction === 'prev') {
        if (idx < slides.length - 1) {
          slides[idx + 1].classList.add('next-slide');
        }
        current.classList.add('active');
      } else {
        current.classList.add('active');
      }
    }

    lightboxCurrent.textContent = idx + 1;

    // Update caption
    var projectEl = document.querySelector('.project[data-project="' + currentProject + '"]');
    if (projectEl) {
      var title = projectEl.querySelector('h3').textContent;
      var desc = projectEl.querySelector('.project-desc').textContent;
      lightboxCaption.textContent = title + ' — ' + desc;
      lightboxCaption.classList.remove('visible');
      requestAnimationFrame(function () {
        lightboxCaption.classList.add('visible');
      });
    }
  }

  function openLightbox(projectNum, slideIdx) {
    currentProject = projectNum;
    currentIndex = slideIdx || 0;
    prevDirection = 'next';

    // Clone slides from project into lightbox
    var projectEl = document.querySelector('.project[data-project="' + projectNum + '"]');
    var sourceSlides = projectEl.querySelectorAll('.slide');
    lightboxTrack.innerHTML = '';
    sourceSlides.forEach(function (src, i) {
      var clone = src.cloneNode(true);
      clone.classList.remove('slide');
      clone.classList.add('lightbox-slide');
      if (i === currentIndex) clone.classList.add('active');
      lightboxTrack.appendChild(clone);
    });
    updateLightboxTotal();
    showLightboxSlide(currentIndex, 'none');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    prevDirection = dir;
    if (dir === 'next') {
      currentIndex = (currentIndex + 1) % lightboxTrack.children.length;
    } else {
      currentIndex = (currentIndex - 1 + lightboxTrack.children.length) % lightboxTrack.children.length;
    }
    showLightboxSlide(currentIndex, dir);
  }

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { navigateLightbox('prev'); });
  lightbox.querySelector('.lightbox-next').addEventListener('click', function () { navigateLightbox('next'); });

  // Keyboard in lightbox
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') { closeLightbox(); }
    if (e.key === 'ArrowRight') { navigateLightbox('next'); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { navigateLightbox('prev'); e.preventDefault(); }
  });

  // Open lightbox on card click — event delegation on parent
  document.querySelector('.projects').addEventListener('click', function (e) {
    var card = e.target.closest('.project');
    if (!card) return;
    var projectNum = card.getAttribute('data-project');
    openLightbox(parseInt(projectNum, 10));
  });

  // Touch swipe support for lightbox
  var touchStartX = 0;
  lightboxTrack.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightboxTrack.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      navigateLightbox(diff > 0 ? 'next' : 'prev');
    }
  }, { passive: true });

  // --- Ripple effect on buttons ---
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-primary, .btn-ghost');
    if (!btn) return;
    var ripple = document.createElement('span');
    ripple.classList.add('ripple');
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', function () {
      ripple.remove();
    });
  });

  // --- Scroll-triggered animations ---
  function revealOnScroll() {
    var elements = document.querySelectorAll(
      '.section-eyebrow, .intro h2, .intro p, ' +
      '.project-number, .project-info h3, .project-desc, ' +
      '.about h2, .about-text, .footer'
    );

    elements.forEach(function (el) {
      if (el.classList.contains('visible')) return;
      var rect = el.getBoundingClientRect();
      var windowH = window.innerHeight;
      if (rect.top < windowH * 0.88) {
        el.classList.add('visible');
      }
    });
  }

  // IntersectionObserver for project cards
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

  // Scroll listener for staggered content reveals
  window.addEventListener('scroll', function () {
    revealOnScroll();
  }, { passive: true });

  // Trigger initial reveal
  revealOnScroll();

})();