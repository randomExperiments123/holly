# Product Requirements Document — Prototype 076: Circus

## Overview
A portfolio page with a vibrant circus / big-top theme. Designed to feel playful, energetic, and nostalgic — evoking the spectacle of a traditional carnival.

## Requirements
- **Theme**: Circus — red, yellow, blue color palette; striped patterns; dotted borders; carnival typography
- **Layout**: Single-page portfolio with hero, intro, projects grid, about, contact, footer
- **Projects**: 5 project cards, each with 3 AVIF images, hover animation, and slide counter
- **Lightbox**: Inline lightbox with prev/next navigation, keyboard support, backdrop click to close
- **Responsive**: Mobile-first; single-column on small screens, two-column on larger
- **Accessibility**: Skip link, ARIA labels, semantic HTML, keyboard navigation
- **SEO**: Meta tags, Open Graph, Schema.org VisualArtwork markup per project
- **Self-contained**: No external dependencies — pure HTML + CSS + inline JS

## Success Criteria
- All 5 projects display correctly with image hover slideshows
- Lightbox opens/closes smoothly with full keyboard support
- Circus theme is immediately recognizable and visually cohesive
- Mobile layout is clean and functional
- No external file loads
