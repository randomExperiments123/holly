# Design Document: 092 — Morse/Code

## Core Concept
A terminal/hacker aesthetic reimagined as a design portfolio. Morse code dot-dash patterns and binary sequences serve as decorative borders and dividers. Signal-colored accents on a deep dark background create focus and hierarchy.

## Key Design Decisions

### Color System
- **Background**: Near-black (#0a0a0f) with subtle grid overlay suggesting a terminal or oscilloscope
- **Signal Green (#39ff14)**: Primary interactive color, recalls old CRT terminals
- **Amber (#ffb000)**: Warm accent for headings and highlights, like vintage console text
- **Cyan (#00e5ff)**: Cool accent for secondary elements
- **Borders/outlines**: Dim signal colors with reduced opacity

### Typography
- **JetBrains Mono** (Google Font) for monospace throughout, reinforcing the code/terminal feel
- All text in monospace — even body copy — to maintain the hacker aesthetic
- Letter-spacing adjustments for Morse-like rhythm

### Decorative Elements
- **Morse dividers**: Pseudo-elements using `content` with actual Morse patterns (.-.-.) as section dividers
- **Dot grid**: Background pattern simulating a dot matrix or grid
- **Scan lines**: Subtle repeating linear gradient overlay on hero
- **Blinking cursor**: Animated pseudo-element at end of headings
- **Binary sequences**: Decorative `::before`/`::after` content with binary strings

### Layout
- Clean, minimal grid structure with generous whitespace
- Project cards have thin signal-colored borders with dot-dash corner decorations
- Status-bar-style nav with indicator dots

### Accessibility
- All decorative Morse/binary is purely visual (aria-hidden)
- Text contrast ratios maintained against dark background
- Reduced motion disables blink/scan animations
