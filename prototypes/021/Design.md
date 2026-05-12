# Design Document — Prototype 021

## Concept
A vibrant, flowing gradient mesh that animates behind glass-frosted content cards. The background is the hero — a living, breathing color field that shifts through warm and cool tones, creating an immersive, modern feel.

## Color Palette
- Gradient mesh cycling through: #667eea → #764ba2 → #f093fb → #f5576c → #4facfe → #00f2fe
- Cards: rgba(255,255,255,0.12) with backdrop blur
- Text: #ffffff on dark sections, #1a1a2e on light
- Accent: rgba(255,255,255,0.25) for borders

## Typography
- Headings & Body: 'Inter', sans-serif (all weights)
- Clean, modern, highly readable
- Font weights: 300 for body, 500 for labels, 700 for headings
- Letter-spacing variations for hierarchy

## Layout
- Full-bleed animated gradient background
- Centered max-width container (1100px)
- Two-column grid on desktop, single on mobile
- Transparent fixed header with blur
- Glass cards with subtle white border and strong blur
- Rounded corners (16px) on cards
- Shimmer hover effect on project images

## Key Interactions
- Background gradient animates continuously (CSS @keyframes)
- Card hover: slight scale with glow
- Inline lightbox for project images
- Smooth scroll navigation
