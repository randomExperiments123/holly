# PRD: Holly Matthews Portfolio

## 1. Overview

Single-page portfolio for Holly Matthews, a graphic design student. Showcases 5 design projects with image galleries and a lightbox viewer. Dark-themed, minimal, typography-driven.

**URL:** hollymatthews.co.uk  
**Stack:** Vanilla HTML / CSS / JS — zero dependencies or build tools  
**Hosting:** Static (GitHub Pages or equivalent)  
**Approach:** Mobile-first — base styles target small screens, `min-width` breakpoints enhance upward. Touch interactions are primary; desktop hover/ keyboard are progressive enhancements.  
**SEO:** High priority — semantic HTML, structured data, meta tags, performance optimization, accessibility all serve search visibility.  
**Architecture:** Vertical Slice — each project is an independent slice containing its own assets (images). CSS and JS use feature-prefixed class names scoped to their slice. Shared layout/behaviour lives in global styles and scripts.

---

## 2. Layout & Sections

| Section | Contents |
|---|---|
| **Hero** | Full-viewport header. Sticky nav (HM logo, Work/About/Contact links). Eyebrow, name, tagline, 2 full-width CTA buttons (stacked on mobile, inline on desktop). Bottom marquee ticker. |
| **Intro** | Section eyebrow + heading: "A curated collection of projects..." |
| **Projects** | Single-column stack on mobile. Multi-column CSS grid (`auto-fill, min 360px`) at wider viewports. Max 1280px wrapper. |
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
- Site padding: 1.25rem sides on mobile, 2.5rem on wider viewports

### Cursor
- Custom gold (`#e8a838`) SVG arrow cursor on all elements
- Interactive elements (buttons, links, cards) use `cursor: pointer` fallback
- Hotspot at arrow tip (`1 1`)

---

## 4. Components

### Navigation
- Sticky, compact padding on mobile, larger padding on desktop
- 40% opaque bg + backdrop-blur initially
- `.scrolled` class at scroll >80px: 85% opaque bg + border-bottom
- Logo: Playfair Display
- Links: uppercase, tap target minimum 44×44px on mobile, underline animation via `::after` on hover

### Project Card
- Tap/click anywhere → opens lightbox
- Single column full-width on mobile; grid layout on wider screens
- 3 slides per project (AVIF, 1650×1275)
- Slide counter badge (top-right, blurred bg, accent current number)
- Touch swipe on image area cycles slides
- Keyboard: Left/Right arrows cycle slides when focused
- Staggered fade-in via IntersectionObserver (threshold 0.08)
- Desktop hover enhancement: translateY(-4px), glow border, image scale 1.03x

### Buttons (`.btn-primary`, `.btn-ghost`)
- Full-width on mobile, inline on desktop
- Pill-shaped (50px radius), inline-flex with icon gap
- Minimum tap target 44×44px
- Primary: gradient gold/orange, hover lift + stronger shadow (desktop)
- Ghost: bordered, hover fills accent glow (desktop)
- Tap/click ripple effect (`.ripple` span with scale-out animation)
- Active state: scale(0.97)

### Lightbox
| Aspect | Detail |
|---|---|
| Open | Click any `.project` card |
| Close | × button (top-right, 44×44px min target), backdrop tap, Escape key |
| Navigate | Prev/Next buttons, Left/Right arrow keys, touch swipe (>50px delta). Nav buttons larger on mobile for easy tapping. |
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
| Naming | `{1-3}.avif` inside each `projectN/` |
| Count | 15 images (5 projects × 3 slides) |
| Dimensions | 1650 × 1275 |
| Loading | Eager (no `loading` attribute) |
| Preload | `projects/project1/1.avif` only |
| Object-fit | `cover` in cards, `contain` in lightbox |

---

## 7. SEO Strategy

### On-Page
| Factor | Implementation |
|---|---|
| **Title tag** | Descriptive, includes name + "Portfolio" |
| **Meta description** | Unique, includes keywords (designer, portfolio, graphic design) |
| **Semantic HTML** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` provide clear document outline |
| **Heading hierarchy** | Single `<h1>`, `<h2>` per section, `<h3>` per project card |
| **Image alt text** | Descriptive, unique per image (overview, detail, final) |
| **Open Graph** | `og:title`, `og:description`, `og:type` set for social share previews |
| **Canonical URL** | Via CNAME + potential `<link rel="canonical">` |
| **Favicon** | Present (inline SVG) |

### Structured Data
- `itemscope itemtype="https://schema.org/VisualArtwork"` on each project card
- Schema markup for name, description, and image per project

### Technical SEO
| Factor | Implementation |
|---|---|
| **Page speed** | Zero dependencies, no render-blocking resources beyond fonts + single CSS, AVIF images, preload on first hero image |
| **Core Web Vitals** | Minimal CLS (explicit image dimensions 1650×1275), fast LCP (preloaded hero image), responsive layout |
| **Mobile-friendliness** | Mobile-first CSS, touch targets ≥44×44px, responsive images |
| **Crawlability** | All content is static HTML — no JS required for indexing. Links are real `<a href>` elements. |
| **Robots** | `robots.txt` should be added to allow crawling |
| **Sitemap** | `sitemap.xml` should be added for single-page site |

### Content
- Keyword-rich headings and body copy (e.g. "brand identity systems", "editorial design", "motion design")
- Footer includes email as visible text (not just an icon)
- Downloadable PDF portfolio adds value for both users and search engines

## 8. Accessibility

- Skip link (hidden, appears on focus)
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA labels on nav, sections, lightbox (toggles `aria-hidden`)
- `prefers-reduced-motion`: all animations/transitions disabled
- Lightbox close button: 44×44px touch target
- Schema.org `VisualArtwork` on project cards
- Meta tags for description, OG, author

---

## 9. Responsive (Mobile-First)

Base styles target the smallest viewport. Enhancements applied via `min-width` breakpoints.

| Breakpoint | Key changes |
|---|---|
| **Base (mobile, <480px)** | Single-column layout, compact padding (1.25rem sides), stacked full-width buttons, smaller hero title (2.5rem), smaller nav text (0.75rem), lightbox nav buttons larger for touch |
| **≥480px** | Hero title scales up (clamp), hero sub scales up (1.1rem), nav text returns to 0.85rem |
| **≥768px (tablet)** | Multi-column grid activates, site padding increases (2.5rem sides), footer row layout, lightbox track returns to original aspect-ratio |
| **Print** | White bg, black text, hide nav/marquee/shimmer |
| **Reduced motion** | All animations off, all reveals visible immediately |

---

## 10. File Structure (Vertical Slices)

```
shared/                          ← Global layout, behaviour, utilities
  style.css                      — Resets, variables, typography, nav, hero, lightbox, responsive
  script.js                      — Lightbox, scroll reveals, ripple, nav state, IntersectionObserver

projects/                        ← One vertical slice per project
  project1/
    1.avif
    2.avif
    3.avif
  project2/
    1.avif
    2.avif
    3.avif
  project3/
    1.avif
    2.avif
    3.avif
  project4/
    1.avif
    2.avif
    3.avif
  project5/
    1.avif
    2.avif
    3.avif

index.html                       — Entry point, composes all slices
HollyMatthewsPortfolio.pdf       — Global asset (downloadable PDF)
CNAME                            — Custom domain: hollymatthews.co.uk
robots.txt                       — Allow crawling
sitemap.xml                      — Sitemap for single-page site
favicon                          — Inline SVG emoji (🎨)
```

---

## 11. Vertical Slice Architecture

Each project is a self-contained vertical slice with its own asset directory. This keeps feature boundaries explicit and makes it easy to add, remove, or reorder projects without touching unrelated code.

### Principles

| Principle | Application |
|---|---|
| **Slice ownership** | All assets for a project live in `projects/projectN/`. No cross-slice file dependencies. |
| **Shared layer** | Global concerns (layout, navigation, lightbox, animations) live in `shared/`. Slices import from shared; shared never imports from slices. |
| **Feature-prefixed classes** | CSS class names use the slice name as a prefix (`.project1`, `.project2`, etc.) to avoid collisions and make ownership clear. |
| **Entry point composes** | `index.html` is the composition root — it references shared assets and each slice's markup. No slice knows about other slices. |
| **Scalability** | Adding a new project means: (1) create `projects/projectN/`, (2) add images, (3) add markup in `index.html`. No CSS or JS changes needed unless new interactions are required. |

### Slice boundary example

```
projects/project3/          ← Entire feature for "Motion & Interaction Design"
  1.avif
  2.avif
  3.avif
```

The slice contains its images only. Its markup lives in `index.html` under a `<article class="project" data-project="3">`. Global lightbox code in `shared/script.js` handles the interaction generically via `data-project` attributes — no project-specific JS needed.

## 12. Mobile-First Considerations

- **Touch targets:** All interactive elements ≥44×44px per WCAG 2.5.5
- **Hover features are progressive:** Card lifts, glow sweeps, underline animations are wrapped in `@media (hover: hover)` to avoid sticky-hover bugs on touch devices
- **Scroll-triggered reveals:** Threshold accounts for mobile viewport; elements reveal earlier (`0.88 * windowH`) to compensate for shorter screens
- **Lightbox swipe:** Native touch handling with 50px delta threshold — no gesture library needed
- **Images:** Eager-loaded (no lazy loading); first project image preloaded for immediate LCP
- **No hamburger menu:** Nav links are few (3 items), fit inline even at the smallest viewport
- **Buttons stack vertically** on mobile (flex-wrap with gap) to avoid overflow

## 13. Edge Cases & States

- **Loading:** Images load immediately with the page; no skeleton/placeholder
- **Empty:** N/A — content is static HTML
- **Error:** No image error handling; no JS error fallbacks
- **JS disabled:** Site is fully static (lightbox won't open, scroll reveals invisible, but content is readable)
- **IntersectionObserver unavailable:** Scroll reveal falls back to nothing (cards stay invisible)
- **Touch:** Swipe left/right on lightbox track (>50px delta)
