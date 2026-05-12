# Design Document: 091 — Kaleidoscope

## Core Concept
A kaleidoscopic visual experience where geometric symmetry meets psychedelic color. Every element radiates from central axes, mimicking the reflective tube of a kaleidoscope.

## Key Design Decisions

### Color System
- **Background**: Deep violet-to-black gradient grounds the page, making bright geometric elements pop
- **Accent**: Magenta (#e91e8c) and cyan (#00e5ff) create a hot/cold contrast throughout
- **Gold (#ffd700)** used sparingly for highlights and decorative borders
- **Card backgrounds**: Semi-transparent dark panels with colorful borders

### Typography
- **Poppins** (Google Font) for clean geometric sans-serif that complements the angular patterns
- Headings use heavier weights with letter-spacing for a decorative feel
- Body text in lighter weight for readability against busy backgrounds

### Decorative Elements
- **Mandala borders**: CSS conic-gradient and radial-gradient patterns create circular decorative frames around hero and sections
- **Rotating geometric ornaments**: Pseudo-elements with rotation animations add the "kaleidoscope in motion" feel
- **Symmetry lines**: Vertical and diagonal pseudo-element lines create mirrored decorative borders
- **Project cards**: Framed with geometric corner ornaments and subtle rainbow borders

### Layout
- Standard single-column mobile-first with 2-column grid on desktop
- Hero centers content with decorative geometric frame
- Cards have ornate geometric borders that animate subtly on hover

### Accessibility
- High contrast where text appears
- Decorative elements are purely visual (aria-hidden)
- Reduced motion media query disables all rotations
