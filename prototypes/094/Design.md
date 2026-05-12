# Design Document: 094 — Neon Sign

## Core Concept
An electrified portfolio that mimics the glow of neon tube signage against the night. Typography appears illuminated from within, with glass-like reflections and a buzzing urban energy.

## Key Design Decisions

### Color System
- **Background**: Deep black (#0a0a0a) — the night sky for neon to glow against
- **Hot Pink (#ff2d95)**: Hero neon color — warm, energetic, attention-grabbing
- **Electric Blue (#00d4ff)**: Secondary neon — cool counterpoint for headings and accents
- **Neon Green (#39ff14)**: Tertiary accent for interactive elements and buttons
- **Ultraviolet (#8b5cf6)**: Subtle background ambient glow

### Typography
- **Pacifico** (Google Font) for hero display — cursive, flowing, reminiscent of script neon signs
- **Inter** for clean sans-serif body — provides contrast and readability against glowing elements
- Text-shadow stacks (4-6 layers) create the neon tube glow effect

### Decorative Elements
- **Neon glow**: Multiple layered text-shadows with increasing blur radius (2px → 20px) in neon colors
- **Glass reflection**: Diagonal linear-gradient pseudo-elements over cards simulate glass/plastic sheen
- **Flicker animation**: Subtle opacity oscillation on hero text suggests a buzzing/flickering neon tube
- **Bloom effect**: Box-shadows on buttons and borders extend beyond element bounds
- **Wire/cable details**: Thin line decorative borders suggest the physical "wiring" of signs

### Layout
- Grid-based layout with dark negative space allowing glow to breathe
- Project cards framed with subtle neon border glow on hover
- Nav uses thin neon underline indicators

### Accessibility
- High contrast between glowing elements and dark backgrounds
- Flicker animations respect prefers-reduced-motion
- ARIA labels on all interactive elements
