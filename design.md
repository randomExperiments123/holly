# Design — Holly Matthews Portfolio

## 1. Design System

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



## 2. Component Visuals

### Navigation

- Sticky, compact padding on mobile, larger padding on desktop
- 40% opaque bg + backdrop-blur initially
- `.scrolled` class at scroll >80px: 85% opaque bg + border-bottom
- Logo: Playfair Display
- Links: uppercase, underline animation via `::after` on hover

### Project Card

- 3 slides per project (AVIF, 1650×1275)
- Slide counter badge (top-right, blurred bg, accent current number)
- Staggered fade-in via IntersectionObserver (threshold 0.08)
- Desktop hover: translateY(-4px), glow border, image scale 1.03x
- Shimmer effect on hover

### Buttons (`.btn-primary`, `.btn-ghost`)

- Pill-shaped (50px radius), inline-flex with icon gap
- Minimum tap target 44×44px
- Primary: gradient gold/orange, hover lift + stronger shadow (desktop)
- Ghost: bordered, hover fills accent glow (desktop)
- Tap/click ripple effect (`.ripple` span with scale-out animation)
- Active state: scale(0.97)

### Lightbox

- Backdrop: 92% black + blur(12px)
- Close button: top-right, 44×44px min target
- Nav buttons: circular, larger on mobile
- Counter: bottom-center pill
- Caption: fades in
- Animation: direction-aware (prev offset -8%, next +8%)

---

## 3. Image Specs

| Property | Value |
|---|---|
| Format | AVIF only |
| Naming | `{1-3}.avif` inside each `projectN/` |
| Count | 15 images (5 projects × 3 slides) |
| Dimensions | 1650 × 1275 |
| Object-fit | `cover` in cards, `contain` in lightbox |

---

## 4. Responsive Visual Specs

| Breakpoint | Changes |
|---|---|
| **Base (<480px)** | Single-column layout, compact padding (1.25rem sides), stacked full-width buttons, hero title 2.5rem, nav text 0.75rem, lightbox nav buttons larger |
| **≥480px** | Hero title scales up (clamp), hero sub 1.1rem, nav text 0.85rem |
| **≥768px** | Multi-column grid, site padding 2.5rem, footer row layout, lightbox track original aspect-ratio |
| **Print** | White bg, black text, hide nav/marquee/shimmer |

---

## 5. Animation & Interaction Visuals

| Interaction | Visual |
|---|---|
| Nav `.scrolled` | 85% opaque bg + border-bottom |
| Card fade-in | IntersectionObserver adds `.visible` (opacity 0→1, translateY 30px→0) |
| Element reveal | `.visible` class added when in view (opacity 0→1, translateY 20px→0) |
| Image hover | scale 1.03, shimmer sweep left→right |
| Button hover | translateY(-2px), shadow deepens |
| Button click | Ripple wave (scale 0→4, opacity→0, 600ms) |
| Lightbox open | Fade in overlay + blur backdrop |
| Lightbox slide | Direction-aware: prev offset -8%, next +8%, 350ms ease |
| Lightbox close | Fade out, restore scroll |
| Marquee ticker | Infinite horizontal scroll, 30s linear |
| prefers-reduced-motion | All animations/transitions disabled, reveals visible immediately |
