class Lightbox {
  constructor() {
    this.el = document.querySelector('.lightbox');
    this.track = this.el.querySelector('.lightbox-track');
    this.counter = this.el.querySelector('.lightbox-counter');
    this.caption = this.el.querySelector('.lightbox-caption');
    this.currentSlide = 0;
    this.totalSlides = 3;
    this.isOpen = false;
    this.touchStartX = 0;

    this.el.querySelector('.lightbox-close')
      .addEventListener('click', () => this.close());
    this.el.querySelector('.lightbox-backdrop')
      .addEventListener('click', () => this.close());
    this.el.querySelector('.lightbox-prev')
      .addEventListener('click', () => this.prev());
    this.el.querySelector('.lightbox-next')
      .addEventListener('click', () => this.next());

    document.addEventListener('keydown', e => this._onKeyDown(e));
    this.el.addEventListener('touchstart', e => this._onTouchStart(e), { passive: true });
    this.el.addEventListener('touchend', e => this._onTouchEnd(e));
  }

  open(projectEl, slideIndex) {
    this.currentSlide = slideIndex || 0;
    this.totalSlides = 3;

    const title = projectEl.querySelector('.project-title');
    const desc = projectEl.querySelector('.project-desc');
    const caption = [title?.textContent, desc?.textContent]
      .filter(Boolean)
      .join(' — ');

    this.track.innerHTML = '';
    projectEl.querySelectorAll('.project-slide').forEach(img => {
      const el = img.cloneNode(true);
      el.removeAttribute('loading');
      el.removeAttribute('class');
      this.track.appendChild(el);
    });

    this.caption.textContent = caption;
    this.el.setAttribute('data-state', 'open');
    this.el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;

    this.updateSlide(this.currentSlide);

    setTimeout(() => { this.caption.style.opacity = '1'; }, 300);
  }

  close() {
    this.el.setAttribute('data-state', 'closed');
    this.el.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.caption.style.opacity = '0';
    this.isOpen = false;
  }

  next() {
    this.updateSlide(this.currentSlide + 1, 1);
  }

  prev() {
    this.updateSlide(this.currentSlide - 1, -1);
  }

  updateSlide(index, direction) {
    if (index < 0) index = this.totalSlides - 1;
    if (index >= this.totalSlides) index = 0;

    const targetOffset = -index * 100;

    if (direction) {
      const startOffset = direction === -1 ? targetOffset - 8 : targetOffset + 8;
      this.track.style.transition = 'none';
      this.track.style.transform = `translateX(${startOffset}%)`;
      this.track.offsetHeight;
      this.track.style.transition = 'transform 0.35s ease';
      this.track.style.transform = `translateX(${targetOffset}%)`;
    } else {
      this.track.style.transition = 'none';
      this.track.style.transform = `translateX(${targetOffset}%)`;
    }

    this.currentSlide = index;
    this.counter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
  }

  _onKeyDown(e) {
    if (!this.isOpen) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }

  _onTouchStart(e) {
    if (!this.isOpen) return;
    this.touchStartX = e.changedTouches[0].screenX;
  }

  _onTouchEnd(e) {
    if (!this.isOpen) return;
    const dx = e.changedTouches[0].screenX - this.touchStartX;
    if (dx > 50) this.prev();
    else if (dx < -50) this.next();
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // --- Nav scroll state ---
  const nav = document.querySelector('.nav');
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Ripple effect (delegated) ---
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-primary, .btn-ghost');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });

  // --- Scroll reveals ---
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll('.project').forEach(el => revealObserver.observe(el));

  document.querySelectorAll(
    '.section-eyebrow, .intro h2, .intro p, ' +
    '.project-number, .project-info h3, .project-desc, ' +
    '.about h2, .about-text, .footer'
  ).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // --- Card slide cycling ---
  const grid = document.querySelector('.projects-grid');

  const goToSlide = (area, index) => {
    const slides = area.querySelector('.project-slides');
    const counter = area.parentElement.querySelector('.project-counter-current');
    if (index < 0) index = 2;
    if (index > 2) index = 0;
    area.dataset.currentSlide = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    if (counter) counter.textContent = index + 1;
  };

  grid.addEventListener('touchstart', e => {
    const area = e.target.closest('.project-image-area');
    if (!area) return;
    area.dataset.touchStartX = e.changedTouches[0].screenX;
    area.dataset.swiping = '';
  }, { passive: true });

  grid.addEventListener('touchmove', e => {
    const area = e.target.closest('.project-image-area');
    if (!area || area.dataset.touchStartX === undefined) return;
    const dx = e.changedTouches[0].screenX - Number(area.dataset.touchStartX);
    if (Math.abs(dx) > 10) area.dataset.swiping = 'true';
  }, { passive: true });

  grid.addEventListener('touchend', e => {
    const area = e.target.closest('.project-image-area');
    if (!area || area.dataset.touchStartX === undefined) return;
    const dx = e.changedTouches[0].screenX - Number(area.dataset.touchStartX);
    const current = Number(area.dataset.currentSlide || 0);
    if (area.dataset.swiping && Math.abs(dx) > 50) {
      goToSlide(area, dx > 0 ? current - 1 : current + 1);
    }
    delete area.dataset.touchStartX;
    delete area.dataset.swiping;
  });

  grid.addEventListener('click', e => {
    const area = e.target.closest('.project-image-area');
    if (!area) return;
    if (area.dataset.swiping) {
      delete area.dataset.swiping;
      return;
    }
    lightbox.open(area.parentElement, Number(area.dataset.currentSlide || 0));
  });

  document.querySelectorAll('.project-image-area').forEach(area => {
    area.dataset.currentSlide = 0;
    area.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const current = Number(area.dataset.currentSlide || 0);
        goToSlide(area, e.key === 'ArrowLeft' ? current - 1 : current + 1);
      }
    });
  });

  // --- Lightbox ---
  const lightbox = new Lightbox();

});
