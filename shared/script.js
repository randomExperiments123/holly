document.addEventListener('DOMContentLoaded', function () {

  // --- Nav scroll state ---
  var nav = document.querySelector('.nav');
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Ripple effect ---
  function createRipple(e) {
    var btn = e.currentTarget;
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    var x = e.clientX - rect.left - size / 2;
    var y = e.clientY - rect.top - size / 2;
    var ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', function () {
      ripple.remove();
    });
  }
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(function (btn) {
    btn.addEventListener('click', createRipple);
  });

  // --- Scroll reveals ---
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.project').forEach(function (el) {
    revealObserver.observe(el);
  });

  document.querySelectorAll('.section-eyebrow, .intro h2, .intro p, ' +
    '.project-number, .project-info h3, .project-desc, ' +
    '.about h2, .about-text, .footer').forEach(function (el) {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Card slide cycling (touch swipe)
  var touchStartX = 0;
  var touchStartY = 0;
  var swiping = false;

  document.querySelectorAll('.project-image-area').forEach(function (area) {
    var slides = area.querySelector('.project-slides');
    var counterCurrent = area.parentElement.querySelector('.project-counter-current');
    var totalSlides = 3;
    var currentSlide = 0;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentSlide = index;
      slides.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      if (counterCurrent) counterCurrent.textContent = currentSlide + 1;
    }

    area.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      swiping = false;
    }, { passive: true });

    area.addEventListener('touchmove', function (e) {
      var dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 10) swiping = true;
    }, { passive: true });

    area.addEventListener('touchend', function (e) {
      if (!swiping) return;
      var dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 50) {
        if (dx > 0) goToSlide(currentSlide - 1);
        else goToSlide(currentSlide + 1);
      }
    });

    // Keyboard navigation on card focus
    area.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { goToSlide(currentSlide - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { goToSlide(currentSlide + 1); e.preventDefault(); }
    });

    // Store current slide for lightbox
    area.addEventListener('click', function (e) {
      if (swiping) { swiping = false; return; }
      openLightbox(area.parentElement, currentSlide);
    });

    area._goToSlide = goToSlide;
    area._getCurrentSlide = function () { return currentSlide; };
  });

  // --- Lightbox ---
  var lightbox = document.querySelector('.lightbox');
  var lightboxTrack = lightbox.querySelector('.lightbox-track');
  var lightboxClose = lightbox.querySelector('.lightbox-close');
  var lightboxPrev = lightbox.querySelector('.lightbox-prev');
  var lightboxNext = lightbox.querySelector('.lightbox-next');
  var lightboxCounter = lightbox.querySelector('.lightbox-counter');
  var lightboxCaption = lightbox.querySelector('.lightbox-caption');
  var lightboxBackdrop = lightbox.querySelector('.lightbox-backdrop');

  var lbCurrentSlide = 0;
  var lbTotalSlides = 3;
  var lbProject = null;
  var lbIsOpen = false;
  var lbTouchStartX = 0;

  function openLightbox(projectEl, slideIndex) {
    lbProject = projectEl;
    lbCurrentSlide = slideIndex || 0;
    lbTotalSlides = 3;

    var title = projectEl.querySelector('.project-title');
    var desc = projectEl.querySelector('.project-desc');
    var caption = '';
    if (title) caption = title.textContent;
    if (desc) caption += ' — ' + desc.textContent;

    var imgs = projectEl.querySelectorAll('.project-slide');
    lightboxTrack.innerHTML = '';
    imgs.forEach(function (img) {
      var el = img.cloneNode(true);
      el.removeAttribute('loading');
      el.removeAttribute('class');
      lightboxTrack.appendChild(el);
    });

    lightboxCaption.textContent = caption;
    lightbox.setAttribute('data-state', 'open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbIsOpen = true;

    updateLightboxSlide(lbCurrentSlide, 0);

    // Fade in caption
    setTimeout(function () {
      lightboxCaption.style.opacity = '1';
    }, 300);
  }

  function closeLightbox() {
    lightbox.setAttribute('data-state', 'closed');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbIsOpen = false;
    lightboxCaption.style.opacity = '0';
    lbProject = null;
  }

  function updateLightboxSlide(index, direction) {
    if (index < 0) index = lbTotalSlides - 1;
    if (index >= lbTotalSlides) index = 0;

    var targetOffset = -index * 100;

    if (direction) {
      var startOffset = direction === -1 ? targetOffset - 8 : targetOffset + 8;
      lightboxTrack.style.transition = 'none';
      lightboxTrack.style.transform = 'translateX(' + startOffset + '%)';
      lightboxTrack.offsetHeight;
      lightboxTrack.style.transition = 'transform 0.35s ease';
      lightboxTrack.style.transform = 'translateX(' + targetOffset + '%)';
    } else {
      lightboxTrack.style.transition = 'none';
      lightboxTrack.style.transform = 'translateX(' + targetOffset + '%)';
    }

    lbCurrentSlide = index;
    lightboxCounter.textContent = (lbCurrentSlide + 1) + ' / ' + lbTotalSlides;
  }

  function lbPrev() {
    updateLightboxSlide(lbCurrentSlide - 1, -1);
  }
  function lbNext() {
    updateLightboxSlide(lbCurrentSlide + 1, 1);
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', lbPrev);
  lightboxNext.addEventListener('click', lbNext);

  document.addEventListener('keydown', function (e) {
    if (!lbIsOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbPrev();
    if (e.key === 'ArrowRight') lbNext();
  });

  // Lightbox touch swipe
  lightbox.addEventListener('touchstart', function (e) {
    if (!lbIsOpen) return;
    lbTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    if (!lbIsOpen) return;
    var dx = e.changedTouches[0].screenX - lbTouchStartX;
    if (dx > 50) lbPrev();
    else if (dx < -50) lbNext();
  });

});
