# Design Document: 093 — Shadow Box

## Core Concept
A dimensional shadow box / paper-cut diorama aesthetic. Elements feel physically layered — floating panels, drop shadows that mimic depth, and warm theatrical spotlighting that evokes a miniature stage set.

## Key Design Decisions

### Color System
- **Background**: Warm ivory (#faf3e0) for the "backdrop" of the shadow box
- **Dark charcoal (#2c2c2c)**: Text and deep shadow areas
- **Brass (#c5a55a)**: Accents suggesting gilded picture frames and hardware
- **Shadow**: Rich blacks with color tint (rgba(44,44,44,.4)) for dimensional depth

### Typography
- **Playfair Display** (Google Font) for serif headings — classic, dimensional, carved-in-stone feel
- **Inter** for clean body text contrast
- Letter-spacing for all-caps labels adds an engraved quality

### Decorative Elements
- **Multi-layer shadows**: Box-shadows with 4-5 layers at varying offsets create a stacked paper effect
- **Cutout corners**: Pseudo-elements create V-cut notches at card corners
- **Spotlight gradient**: Radial gradients in hero and about sections simulate a stage spotlight
- **Floating effect**: Cards appear to hover above the surface with directional shadows suggesting light from upper-left
- **Theatrical top border**: A "curtain" effect using dark gradient at the top of the page

### Layout
- Cards and sections have pronounced depth with layered shadows
- Hero title uses text-shadow stacking for an embossed/raised letter effect
- Contact section inverses the shadow direction for visual variety

### Accessibility
- Text maintains adequate contrast (dark on light)
- Decorative shadows don't obscure content
- Reduced motion preserves static shadow appearance
