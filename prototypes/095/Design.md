# Design Document: 095 — Cartoon

## Core Concept
A comic book-inspired portfolio bursting with primary colors, thick black outlines, Ben-Day dots, and speech bubbles. Fun, bold, unapologetically graphic — like walking into a living comic strip.

## Key Design Decisions

### Color System
- **Background**: Off-white newsprint (#f5f0e0) provides the "comic page" foundation
- **Comic Red (#e23636)**: Hero and primary accent — punches through like a superhero cape
- **Primary Blue (#00aaff)**: Secondary accent — classic comic sky blue
- **Yellow (#ffd700)**: Highlights, speech bubbles, and attention-grabbers
- **Black (#1a1a1a)**: Thick outlines for all elements

### Typography
- **Bangers** (Google Font) — bold, comic-book display font for all headings and titles
- **PT Sans** or body-suitable sans for readable body text
- Text-stroke / -webkit-text-stroke for outlined text effects

### Decorative Elements
- **Thick outlines**: 3-4px solid black borders on all cards, buttons, nav
- **Ben-Day dots**: Repeating radial-gradient background patterns create the comic book halftone dot effect
- **Speech bubbles**: CSS pseudo-elements with rounded borders and tails pointing at content
- **Halftone gradients**: Background patterns in sections using dot density gradients
- **Action lines**: Decorative pseudo-element lines suggesting motion/excitement
- **Highlight**: Bold drop shadows on text (no blur, hard offset) in the comic tradition

### Layout
- Bold, chunky grid with thick separators between sections
- Project cards look like comic panels with black frames
- Hero section resembles a splash page

### Accessibility
- High contrast throughout (black on white + white on black)
- Decorative dots/outlines are purely visual
- Reduced motion disables action line animations
