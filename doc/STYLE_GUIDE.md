# UX Course — Visual Style Guide

This guide helps developers add features that stay consistent with the app’s visual language: **light, minimal, strong hierarchy**, with a **blue accent palette** (Deep Twilight → Light Cyan) and a **diagonal background stripe** that runs across the screen. Use the tokens and patterns below instead of hard-coding values.

---

## 1. Design principles

- **One saturated accent:** Use the blue palette (`--color-accent` = Bright Teal Blue) only for primary CTAs and key emphasis so it stays the main attention magnet.
- **Clear hierarchy:** Display font (Sora) for headlines; body font (Inter) for copy. Use kickers (small caps) and muted text for secondary info.
- **Generous space:** Use the 8px-based spacing scale. Avoid cramped layouts.
- **Soft surfaces:** White cards on light cyan (`#CAF0F8`). Borders use Frosted Blue tones; shadows are subtle.
- **Pill-shaped actions:** Primary buttons and tab-like controls use `border-radius: 999px`.

---

## 2. Design tokens

All tokens live in **`src/styles/variables.css`**. Reference them in CSS; do not hard-code hex values for color, spacing, or radius.

### Colors

Palette: **Deep Twilight** `#03045E`, **Bright Teal Blue** `#0077B6`, **Turquoise Surf** `#00B4D8`, **Frosted Blue** `#90E0EF`, **Light Cyan** `#CAF0F8`.

| Token | Value | Use for |
|-------|--------|---------|
| `--color-bg` | `#CAF0F8` | Page background (Light Cyan) |
| `--color-bg-soft` | `#ffffff` | Gradient end, soft areas |
| `--color-surface` | `#ffffff` | Cards, panels |
| `--color-surface-hover` | `#E6F7FB` | Hover states |
| `--color-border` | `#B8E8F0` | Borders, dividers |
| `--color-text` | `#03045E` | Primary text (Deep Twilight) |
| `--color-text-muted` | `#4a6b7c` | Secondary text, labels |
| `--color-accent` | `#0077B6` | Primary CTA, focus ring (Bright Teal Blue) |
| `--color-accent-hover` | `#00B4D8` | CTA hover (Turquoise Surf) |
| `--color-accent-2` | `#03045E` | Dark UI (active tab, progress bar) (Deep Twilight) |
| `--color-success` | `#28a35e` | Success state |
| `--color-warn` | `#f2aa2a` | Warning / amber state |
| `--color-focus` | `#0077B6` | Focus outline |

### Typography

| Token | Value | Use for |
|-------|--------|---------|
| `--font-sans` | Inter, system fallbacks | Body, labels, UI |
| `--font-display` | Sora, fallbacks | Headlines, section titles |
| `--font-mono` | JetBrains Mono | Code, monospace |
| `--text-xs` | `0.75rem` | Kickers, badges, meta |
| `--text-sm` | `0.875rem` | Secondary copy, tabs |
| `--text-base` | `1rem` | Body, inputs |
| `--text-lg` | `1.125rem` | Lead copy |
| `--text-xl` | `1.25rem` | Section headings |
| `--text-2xl` | `1.75rem` | Page-level headings |

### Spacing (8px base)

Use the scale for margin and padding. Don’t invent one-off values (e.g. `13px`).

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
```

### Border radius

| Token | Value | Use for |
|-------|--------|---------|
| `--radius-sm` | `8px` | Small chips, tags |
| `--radius-md` | `14px` | Inputs, checkboxes, small cards |
| `--radius-lg` | `20px` | Cards, form groups |
| `--radius-xl` | `26px` | Hero card, content sections, reference panel |

Pills (tabs, primary buttons): `border-radius: 999px`.

### Shadows

```css
--shadow-glow: 0 12px 24px rgba(0, 119, 182, 0.22);   /* Accent CTA */
--shadow-deep: 0 14px 40px rgba(3, 4, 94, 0.08);       /* Cards, nav */
```

Content sections use a lighter shadow: `0 2px 6px rgba(3, 4, 94, 0.03)`.

---

## 3. Layout patterns

### Shell width

Header and main content are constrained for readability:

```css
width: min(1120px, 100%);   /* Header shell */
width: min(980px, 100%);     /* Main content */
margin: 0 auto;
```

Use these for any full-width container that should align with the app chrome.

### Hero: split row

The hero is a two-column grid: message (left) and action card (right). Keep this pattern for above-the-fold blocks.

```css
.layout-hero-row {
  display: grid;
  grid-template-columns: 1fr minmax(320px, 400px);
  gap: var(--space-8);
  align-items: start;
}
```

At `max-width: 900px`, switch to a single column so the card stacks under the message.

### Content sections

Each logical block (study, deliverable, tasks, artifacts) is a **section** with consistent card styling:

```css
.day-content > section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: 0 2px 6px rgba(3, 4, 94, 0.03);
}
```

When adding a new section in `DayContent`, use a `<section>` and optionally the `section-heading` class for the title.

---

## 4. Typography usage

### Kicker (eyebrow)

Small, uppercase, muted. Use for category or context above a headline.

```html
<p class="layout-eyebrow">7-day designer growth system</p>
```

```css
font-size: var(--text-xs);
text-transform: uppercase;
letter-spacing: 0.14em;
color: var(--color-text-muted);
font-weight: 700;
```

### Page headline (hero)

Display font, tight line-height, left-aligned in the hero.

```html
<h1 class="layout-title">Build sharper UX judgment in one focused week.</h1>
```

```css
font-family: var(--font-display);
font-size: clamp(2.1rem, 5.2vw, 4rem);
line-height: 1.04;
letter-spacing: -0.03em;
/* In hero: max-width: 42ch; text-align: left; */
```

### Subtitle / body lead

Muted, readable line length (~42ch in hero).

```css
color: var(--color-text-muted);
font-size: 1.05rem;
max-width: 42ch;
```

### Section heading

Use the `SectionHeading` component so semantics and styles stay consistent.

```tsx
import { SectionHeading } from './SectionHeading';

<SectionHeading>Study</SectionHeading>
<SectionHeading level={3}>Your artifacts</SectionHeading>
```

Rendered as `h2` or `h3` with:

```css
.section-heading {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  letter-spacing: -0.01em;
  margin: 0 0 var(--space-4);
}
```

---

## 5. Components and patterns

### Card

Use for grouped content (e.g. critique block, test card).

```tsx
import { Card } from './Card';

<Card>
  <h4>Critique 1: Linear</h4>
  {/* ... */}
</Card>

<Card className="my-extra-class">
  {/* ... */}
</Card>
```

Styles: white background, `--color-border`, `--radius-lg`, `padding: var(--space-6)`.

### Primary CTA button

Single prominent action (e.g. “Start next action”). Use sparingly.

```html
<button type="button" class="hero-action-cta">
  Start next action
</button>
```

```css
display: block;
width: 100%; /* or inline as needed */
padding: 12px 20px;
border: 0;
border-radius: 999px;
background: var(--color-accent);
color: #fff;
font-weight: 600;
box-shadow: var(--shadow-glow);
```

Hover: `background: var(--color-accent-hover)` (Turquoise Surf).

### Secondary / ghost button

For “Add issue”, “Cancel”, or less prominent actions.

```css
border: 1px solid var(--color-border);
border-radius: 999px;
background: var(--color-surface-hover);
color: var(--color-text);
font-weight: 600;
padding: 10px 16px;
```

Hover: `background: var(--color-border)`.

### Status chips

Small pill labels (e.g. “Action pending”, “Day complete”). Use semantic colors.

```html
<span class="hero-action-chip amber">Action pending</span>
<span class="hero-action-chip green">Day complete</span>
```

```css
.hero-action-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: var(--text-xs);
  font-weight: 600;
}
.hero-action-chip.amber {
  color: #8c5a07;
  background: #fff2dc;
}
.hero-action-chip.green {
  color: #1f7a42;
  background: #e6f6ed;
}
```

### Day-style tabs

Pill tabs with optional badge. Active state is dark, not accent.

```html
<button class="day-tab active" type="button">
  Day 1 <span class="day-tab-badge">2/4</span>
</button>
<button class="day-tab" type="button">Day 2</button>
```

Active: `background: var(--color-accent-2); border-color: var(--color-accent); color: #fff`. Inactive: `--color-surface` background, `--color-border`.

### Form inputs and labels

Keep labels and inputs in a single system: block label, then control.

```html
<label>
  <span>Primary User Goal</span>
  <input type="text" />
</label>
```

```css
.artifact-form label span {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 600;
}
.artifact-form input[type='text'],
.artifact-form textarea,
.artifact-form select {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  font: inherit;
}
```

Focus: `border-color: var(--color-accent-hover); box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.15); outline: none`.

### Checkbox / task row

Tasks use the `Checkbox` component. The row has a light background and border.

```css
.checkbox {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface-hover);
}
.checkbox-label.done {
  color: var(--color-text-muted);
  text-decoration: line-through;
}
```

---

## 6. Background stripe

A **diagonal stripe** runs across the screen (top-left to bottom-right) to add depth without competing with content. It is implemented in **`src/App.tsx`** as an SVG with two paths and diagonal gradients, and positioned in **`src/styles/components.css`** via `.app-stripe`.

### Behavior

- **Direction:** The stripe is drawn in the SVG as a band from top-left to bottom-right (viewBox `0 0 1200 1200`). The container is rotated **-12°** (desktop) or **-14°** (mobile) so the band crosses the viewport diagonally.
- **Size and position:** The stripe container is `140vw × 140vh` (desktop) or `120vw × 120vh` (≤640px), with `top: -20%`, `left: -15%`, so the band sweeps across the screen. `.app` has `overflow-x: hidden` to avoid horizontal scroll.
- **Layers:** Two paths create a main band and a slightly offset inner band (class `app-stripe-path--soft`, opacity 0.88) for a more dynamic, layered look.
- **Non-interactive:** `pointer-events: none`, `z-index: -1`.

### Palette and gradients

The stripe uses the **same blue palette** as the rest of the app:

- **Primary gradient** (`stripe-gradient`): `#0077B6` → `#00B4D8` → `#90E0EF` → `#03045E`, with stop opacity ~0.18–0.5. Gradient vector `x1="0%" y1="0%" x2="100%" y2="100%"` so the fill runs diagonally with the band.
- **Soft layer** (`stripe-gradient-soft`): Turquoise Surf, Frosted Blue, and Deep Twilight at lower opacity (~0.14–0.28).

### CSS (components.css)

```css
.app { overflow-x: hidden; }

.app-stripe {
  position: fixed;
  top: -20%;
  left: -15%;
  width: 140vw;
  height: 140vh;
  pointer-events: none;
  z-index: -1;
  transform: rotate(-12deg);
  transform-origin: center center;
}
```

At `max-width: 640px`, `.app-stripe` uses `120vw`, `120vh`, `top: -15%`, `left: -10%`, and `transform: rotate(-14deg)`.

### Extending or changing the stripe

1. Keep the same blue palette hex values from `variables.css` (or map them to gradient stops: Deep Twilight, Bright Teal, Turquoise Surf, Frosted Blue, Light Cyan) so the stripe stays on-palette.
2. Keep stop opacities in a readable range so text and UI remain clear.
3. To add another band or shape: add a new `<path>` in the SVG and, if needed, a new gradient in `<defs>` with `url(#id)` for the fill. Adjust the path `d` so the shape follows the diagonal if you want a consistent direction.
4. To change the angle: adjust the `transform: rotate(...)` value on `.app-stripe` (and the mobile override). To make the stripe wider or narrower on screen, change the path coordinates in the SVG or the container `width`/`height`.

---

## 7. Do’s and don’ts

**Do:**

- Use design tokens for color, spacing, radius, and shadow.
- Use `SectionHeading` and `Card` for section structure.
- Use the spacing scale (`--space-*`) for margins and padding.
- Use display font only for headlines; keep body and UI in sans.
- Reserve the blue accent for one primary CTA per view when possible.

**Don’t:**

- Introduce new accent colors (e.g. orange or purple buttons) without aligning with the team.
- Hard-code hex values that already exist as tokens.
- Use centered hero text; the established pattern is left-aligned message + right card.
- Use heavy shadows or overly saturated backgrounds; keep the page light and minimal.
- Add more than one “hero-level” CTA in the same row.

---

## 8. File map

| File | Purpose |
|------|---------|
| `src/styles/variables.css` | Design tokens (colors, type, space, radius, shadows). |
| `src/styles/global.css` | Resets, body, focus, font import. |
| `src/styles/components.css` | Layout, hero, tabs, cards, forms, checkbox, reference panel, stripe container. |
| `src/components/Layout.tsx` | Shell, hero row, next-action card, progress, day tabs. |
| `src/components/SectionHeading.tsx` | Section title (h2/h3) with shared style. |
| `src/components/Card.tsx` | Wrapper for card-style blocks. |
| `src/App.tsx` | App shell and background stripe SVG. |

When adding a new feature:

1. Reuse existing components and class names where possible.
2. Add new classes in `components.css` and use tokens from `variables.css`.
3. If you need a new token (e.g. a new semantic color), add it to `variables.css` and document it in this guide.
