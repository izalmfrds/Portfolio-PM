# Project Archive — Design System & Styling

## When to apply
Use this rule when styling any Archive page component, defining layout rules, or applying responsive behavior.

## Visual Consistency
The Archive page **must** use the same design system as the rest of the portfolio:
- Same typography scale (`--font-size-*` tokens from `variables.scss`)
- Same spacing scale (`--space-*` tokens)
- Same border radius scale (`--radius-*` tokens)
- Same color palette (`colors.scss`)
- Same stroke widths (`--stroke-*` tokens)
- Same breakpoint mixin (`@include mixins.mq("sm" | "md" | "lg" | "xl")`)

## Container Styling
- Outer container: `border-radius: var(--radius-xl)` (24px, matches spec)
- Background: `var(--color-background-400)` or `var(--color-grayscale-400)` for cards
- Border: `var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent)`

## Archive Header
```
┌─────────────────────────────────────────────────────────────┐
│ PROJECT ARCHIVE                          (section badge)    │
│ Explore all projects, case studies and experiments.         │
│                                                             │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│ │ 24       │  │ 6        │  │ 5        │                   │
│ │ Projects │  │Categories│  │ Years    │                   │
│ └──────────┘  └──────────┘  └──────────┘                   │
└─────────────────────────────────────────────────────────────┘
```
- Section badge: same style as "SELECTED PROJECTS" badge elsewhere
- Stats displayed as metric cards in a row

## Split Layout (Desktop ≥1024px)
```css
.archive-layout {
  display: flex;
  gap: var(--space-lg);
}
.archive-explorer {
  width: 320px;
  flex-shrink: 0;
}
.archive-detail {
  flex: 1;
  min-width: 0; /* prevent overflow */
}
```

## Responsive Breakpoints

| Breakpoint | Explorer | Detail | Layout |
|---|---|---|---|
| `< 840px` (mobile) | Full width accordion | Full width below | Single column |
| `840px–1023px` (tablet) | Full width | Full width below | Stacked |
| `≥ 1024px` (desktop) | 320px fixed | flex: 1 | Split side-by-side |

## Status Badge Colors
| Status | Color |
|---|---|
| Production | `#22c55e` (green) |
| Active Development | `var(--color-cyan-500)` |
| Maintenance | `var(--color-orange-400)` |
| Completed | `var(--color-gray-500)` |
| Archived | `var(--color-gray-400)` |

## Typography Scale for Archive
- Section title: `--font-size-title-md` (44px)
- Project name (detail header): `--font-size-title-sm` (28px)
- Card titles: `--font-size-xl` (20px)
- Body text: `--font-size-md` (16px)
- Labels / meta: `--font-size-sm` (14px)
- Small / captions: `--font-size-xs` (12px)

## Hover & Interaction Patterns
- Cards: subtle lift on hover (`transform: translateY(-2px)` + background brighten)
- Explorer items: background highlight on hover
- Buttons: use existing `Button.vue` and `ButtonRound.vue` components
- Accordion: smooth `max-height` or GSAP animation
- Carousel: arrow buttons using `ButtonRound.vue`, keyboard nav with `@keydown.left/right`

## Animation Guidelines
- Use GSAP for complex orchestrated animations (page enter, project switch)
- Use CSS transitions for simple hover/active states (`transition: all 0.2s ease`)
- Use `var(--ease-smooth)` and `var(--ease-power2-out)` for easing curves
- Keep all animations under 300ms for snappy feel

## Accessibility
- All interactive elements must have visible focus states
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels for icon-only buttons
- Keyboard navigable explorer (arrow keys + enter)
- Sufficient color contrast (WCAG AA)
