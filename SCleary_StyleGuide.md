# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## What This Repository Is

A single-file HTML personal brand style guide for **stephenjcleary**. Open `index.html` directly in a browser — no build step, no package manager, no server required.

## Running & Developing

```
open index.html
```

## File Conventions

Single file: inline `<style>` block → HTML markup → inline `<script>` block at the bottom. All CSS, markup, and JS live in `index.html`. External dependencies are limited to Google Fonts (loaded via `<link>`).

**Do not introduce** bundlers, npm, external JS libraries, or multi-file structures.

## Brand Tokens

```css
--cream:       #EDE0C4;  /* warm ecru — primary background */
--cream-light: #F7F2EA;  /* lighter cream — section backgrounds, cards */
--red:         #C8102E;  /* deep crimson — primary accent */
--red-deep:    #A00E24;  /* darker red — hover states, emphasis */
--dark:        #1C1C1C;  /* near-black — primary text */
--mid:         #5C5247;  /* warm brown-grey — muted/secondary text */
--font:        'Inter', 'Segoe UI', sans-serif;
```

## Tone of Voice

Full tone of voice guidance — voice characteristics, sentence patterns, vocabulary, format rules, and annotated real examples — is in `SCleary_ToneOfVoice.md`.

## Typography Rules

- **Typeface**: Inter (Google Fonts), weights 400 / 500 / 600 / 700
- **Headlines & titles**: Title Case — First Letter Of Each Word Is Capitalised
- **Body copy**: Sentence case — only the first word is capitalised
- **Never** use all-caps anywhere in the brand

## Iconography

### Style
- **Bold geometric** — solid filled shapes, no thin lines, no decorative detail
- **Red on cream** — `#C8102E` on `#EDE0C4` background, consistent with card borders and accent elements
- **One icon per context** — each icon signals a specific topic, not decoration
- **Inline SVG only** — no image files, no external requests; scales perfectly at every resolution

### Specs
- **Viewbox**: `0 0 160 120` (4:3 ratio, consistent across all icons)
- **Fill colour**: `#C8102E` on `#EDE0C4` background
- **Stroke weight**: `stroke-width="5"` for primary strokes, `2–2.5` for secondary detail
- **Corner radius**: `rx="6"` on rectangular shapes; `stroke-linecap="round"` on all strokes
- **Accessibility**: `aria-hidden="true"` — icons are decorative; the text label carries the meaning

### Current icon set

| Icon | SVG shape description | Usage context |
|---|---|---|
| Speech bubble | Filled rect (rx 8) with triangle tail; three cream lines inside | Social copy & communications |
| Attention graph | Rounded polyline with dashed vertical marker and filled circle at intersection; faint baseline | Data, analysis & attention work |
| Upload arrow | Vertical line + chevron pointing up + filled rect tray at base | Tools, builds & inputs |
| Colour swatches | Three filled rects (rx 6) in crimson, crimson-deep, dark; cream tick marks at base | Brand, design & identity work |

### Usage on cards
- **Desktop featured card**: icon on a `#1C1C1C` dark background, left panel, `width: 140px`
- **Desktop archive cards**: icon on `#EDE0C4` cream background, `height: 160px`, `width: 100px`
- **Mobile (≤720px)**: compact icon banner replaces photo — `height: 80px` on featured, `64px` on archive; icon `width: 72px` / `56px` respectively
- **Photo thumbnails** show on desktop; icons show on mobile via CSS (`display: none` swap)
