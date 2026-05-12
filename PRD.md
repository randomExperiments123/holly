# PRD: Holly Matthews Portfolio

## 1. Overview

Single-page portfolio for Holly Matthews, a graphic design student. Showcases 5 design projects with image galleries and a lightbox viewer. Dark-themed, minimal, typography-driven.

**URL:** hollymatthews.co.uk  
**Stack:** Vanilla HTML / CSS / JS — zero dependencies or build tools  
**Hosting:** Static (GitHub Pages or equivalent)

---

## 2. Layout & Sections

| Section | Contents |
|---|---|
| **Hero** | Full-viewport header. Fixed nav (HM logo, Work/About/Contact links). Eyebrow, name, tagline, 2 CTA buttons. Bottom marquee ticker. |
| **Intro** | Section eyebrow + heading: "A curated collection of projects..." |
| **Projects** | CSS grid of 5 cards (auto-fill, min 360px, max 1280px wrapper). Single column ≤768px. |
| **About** | Centered heading, bio text, CTA button. |
| **Lightbox** | Fixed fullscreen overlay. Opens on card click. Closes on backdrop click, Escape key, or × button. |
| **Footer** | Copyright + email link. |

---

## 3. Design System

### Colors
| Token | Value |
|---|---|
| `--bg` | `#0a0a0a` |
| `--bg-soft` | `#111113` |
| `--surface` | `#161618` |
| `--border` | `#2a2a2e` |
| `--text` | `#ececec` |
| `--text-muted` | `#8a8a8f` |
| `--accent` | `#e8a838` (gold) |

### Typography
| Role | Font | Weights |
|---|---|---|
| Display/headings | Playfair Display | 400, 700, 900 |
| Body | Inter | 300, 400, 500, 600 |

### Spacing
- Border radius: 16px (cards), 10px (small), 50px (buttons)
- Max content width: 1280px (projects), 720px (hero/intro), 680px (about)
- Site padding: 2.5rem sides (1.25rem ≤768px)

### Cursor
- Custom gold (`#e8a838`) SVG arrow cursor on all elements
- Interactive elements (buttons, links, cards) use `cursor: pointer` fallback
- Hotspot at arrow tip (`1 1`)

---

## 4. Components

### Navigation
- Fixed, 40% opaque bg + backdrop-blur initially
- `.scrolled` class at scroll >80px: 85% opaque bg + border-bottom
- Logo: Playfair Display, no hover effect
- Links: uppercase, muted → white on hover, underline animation via `::after`

### Project Card
- Click anywhere → opens lightbox
- Hover: translateY(-4px), glow border via `::after` inset, image scales 1.03x, glow sweep across image
- 3 slides per project (AVIF, 1650×1275, lazy-loaded)
- Slide counter badge (top-right, blurred bg, accent current number)
- Keyboard: Left/Right arrows cycle slides when `.project-images` is focused
- Staggered fade-in via IntersectionObserver (threshold 0.08, rootMargin -40px)

### Buttons (`.btn-primary`, `.btn-ghost`)
- Pill-shaped (50px radius), inline-flex with icon gap
- Primary: gradient gold/orange, hover lift + stronger shadow
- Ghost: bordered, hover fills accent glow
- Click ripple effect (`.ripple` span with scale-out animation)
- Active state: scale(0.97)

### Lightbox
| Aspect | Detail |
|---|---|
| Open | Click any `.project` card |
| Close | × button, backdrop click, Escape key |
| Navigate | Prev/Next buttons, Left/Right arrow keys, touch swipe (>50px delta) |
| Slides | Cloned from source project on open, rebuilt each time |
| Animation | Direction-aware: prev slides offset -8%, next slides +8% |
| Counter | Bottom-center pill: "1 / 3" |
| Caption | Reads project title + description, fades in |
| Scroll lock | `body.style.overflow = 'hidden'` while open |
| Backdrop | 92% black + blur(12px) |

---

## 5. Interactions

| Interaction | Trigger | Behavior |
|---|---|---|
| Nav style | Scroll >80px | `.scrolled` class |
| Card fade-in | Scroll into viewport | IntersectionObserver adds `.visible` |
| Element reveal | Scroll | `revealOnScroll()` adds `.visible` when `rect.top < 0.88 * windowH` |
| Image hover | Card hover | Image scale 1.03, glow sweep left→right |
| Button hover | Hover | Lift 2px, shadow deepens |
| Button click | Click | Ripple wave animation |
| Lightbox | Card click | Fullscreen overlay, slides cloned from card |
| Lightbox nav | Arrow keys / buttons / swipe | Slides transition with direction offset |
| Lightbox close | × / backdrop / Escape | Fade out, restore scroll |

**Revealed elements** (scroll-triggered): `.section-eyebrow`, `.intro h2`, `.intro p`, `.project-number`, `.project-info h3`, `.project-desc`, `.about h2`, `.about-text`, `.footer`

---

## 6. Images

| Property | Value |
|---|---|
| Format | AVIF only |
| Naming | `project-{1-5}-{1-3}.avif` |
| Count | 15 images (5 projects × 3 slides) |
| Dimensions | 1650 × 1275 |
| Loading | `loading="lazy"` |
| Preload | `project-1-1.avif` only |
| Object-fit | `cover` in cards, `contain` in lightbox |

---

## 7. Accessibility

- Skip link (hidden, appears on focus)
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA labels on nav, sections, lightbox (toggles `aria-hidden`)
- `prefers-reduced-motion`: all animations/transitions disabled
- Lightbox close button: 44×44px touch target
- Schema.org `VisualArtwork` on project cards
- Meta tags for description, OG, author

---

## 8. Responsive

| Breakpoint | Key changes |
|---|---|
| ≤768px | Grid → 1 column, reduced padding, footer stacks, lightbox 4:3 |
| ≤480px | Smaller hero title/subtitle, smaller nav text |
| Print | White bg, black text, hide nav/marquee/shimmer |
| Reduced motion | All animations off, all reveals visible immediately |

---

## 9. File Structure

```
index.html           — Single-page HTML
style.css            — All styles (1069 lines, no framework)
script.js            — All JS (230 lines, vanilla, IIFE)
images/              — 15 AVIF images (project-{1-5}-{1-3}.avif)
HollyMatthewsPortfolio.pdf  — Downloadable portfolio PDF
CNAME                — Custom domain: hollymatthews.co.uk
favicon              — Inline SVG emoji (🎨)
```

---

## 10. Edge Cases & States

- **Loading:** Lazy images show nothing until loaded (no skeleton/placeholder)
- **Empty:** N/A — content is static HTML
- **Error:** No image error handling; no JS error fallbacks
- **JS disabled:** Site is fully static (lightbox won't open, scroll reveals invisible, but content is readable)
- **IntersectionObserver unavailable:** Scroll reveal falls back to nothing (cards stay invisible)
- **Touch:** Swipe left/right on lightbox track (>50px delta)
