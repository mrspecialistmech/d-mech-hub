# Design Brief: D PHARCO ENGINEERING + D MECH HUB Services

**Aesthetic**: Industrial minimalism; professional authority through precision typography, controlled negative space, sharp geometric accents.
**Brand Hierarchy**: D PHARCO ENGINEERING (primary) + D MECH HUB Services (secondary page).
**Color Palette**: Primary blue (42/19/253), Secondary blue (55/22/253), Dark near-black (5/2/253), White (100/0/0), Accent teal (60/13/202), Muted grey (92/1/253).
**Typography**: Bricolage Grotesque (display, bold), Plus Jakarta Sans (body, 400/500/600).
**Shape Language**: Minimal border-radius (2–6px), card-based with subtle shadows, hexagonal geometry accent, technical badge accents.

## Palette

| Token | OKLCH | Use |
|---|---|---|
| Primary Blue | 0.42 0.19 253 | Headers, CTAs, primary UI |
| Secondary Blue | 0.55 0.22 253 | Accents, active states, highlights |
| Dark | 0.05 0.02 253 | Text, borders, footer bg |
| White | 1 0 0 | Background, cards |
| Accent Teal | 0.6 0.13 202 | Certification badges, quality marks |
| Muted Grey | 0.92 0.01 253 | Section dividers, subtle backgrounds |

## Structural Zones

| Zone | Background | Treatment |
|---|---|---|
| Header | White | Sticky, subtle border-b |
| Hero | Primary Blue | Full-width, carousel-ready, white text |
| Stats/KPI | Muted Grey | Card-style KPI grid |
| Content | Alternating | White & muted grey sections |
| Cards | White | Subtle shadow-card, hover lift |
| Footer | Dark Near-Black | White text, minimal footer |

## Patterns

- **Certification Badges**: Teal outline, uppercase, 0.75rem font, inline-flex alignment for WHO-GMP, USFDA, ISO standards.
- **Gallery Cards**: 2–3 column grid (mobile-first), shadow-card with hover lift, gradient overlay on hover (dark near-black), white caption text.
- **Lightbox Modal**: Dark overlay (95% opacity), backdrop blur, centered image (80vh max-height), white prev/next arrows, fade-in entry.
- **Gallery Filter Pills**: Light background, blue border, active state fills with secondary blue + white text. Used in combined gallery page.
- **Carousel Navigation**: Dark semi-transparent buttons (prev/left, next/right), positioned absolute, hover to secondary blue.
- **Shadow Hierarchy**: shadow-card (subtle), shadow-card-hover (elevated), shadow-elevated (emphasis).
- **Type Hierarchy**: Display bold for section headings, body 500 for card titles, body 400 for content.
- **Card Grid**: 2–4 columns (mobile-first responsive), consistent spacing (1rem gutters).

## Motion

- **Entrance**: fade-up (0.6s), slide-up (0.5s) for staggered content.
- **Interaction**: Focus states with ring (secondary blue), smooth transitions (0.3s ease-out).
- **Hover**: Card lift via shadow-card-hover, text color shift on links.

## Constraints

- No gradient overlays except hero (industrial minimalism).
- No rounded corners >6px (precision aesthetic).
- No decorative animations (focus on usability).
- Hexagon accent used sparingly (logo, key visual markers only).
- All colors from OKLCH token system; no hex literals or arbitrary Tailwind values.

## Signature Detail

Hexagonal geometric accent echoing D MECH HUB logo; teal certification badges as visual trust markers for pharma/chemical compliance standards (WHO-GMP, USFDA, ISO). Image galleries emphasize precision photography and industrial craftsmanship. Sharp, minimal, unforgettable.
