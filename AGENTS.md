# AGENTS.md - Coding Guidelines for kokessel.github.io

## Project Overview

Ultra-minimalist personal landing page. Single HTML file with inline CSS and zero JavaScript. Directs traffic to email and LinkedIn.

## Project Structure

```
├── index.html        # Single self-contained HTML file (CSS inlined)
├── fonts/            # Custom font files
│   └── FiraCodeNerdFont-Regular.ttf
├── favicon.ico       # Site favicon
├── CNAME             # GitHub Pages custom domain config
├── robots.txt        # Search engine directives
├── AGENTS.md         # This file
└── acoupleofkessels/ # Separate legacy project (do not modify)
```

## Build Commands

**No build required.** This is a single static HTML file with inline CSS.

To preview locally:
```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`

## Code Style Guidelines

### HTML

- Single self-contained `index.html` file
- CSS is **inlined** in `<style>` tags in `<head>`
- No external CSS or JS files for the main site
- Semantic HTML5 elements
- Accessibility attributes on links (`aria-label`)

### CSS

- All styles inlined in `<style>` block
- Uses CSS custom properties for colors where helpful
- Mobile-first responsive design
- **Local custom font**: Fira Code Nerd Font (monospace with ligatures)
- CSS animations use `animation-fill-mode: both` for staggered effects

**Example:**
```css
@font-face {
	font-family: 'Fira Code';
	src: url('fonts/FiraCodeNerdFont-Regular.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}

body {
	font-family: 'Fira Code', monospace;
	min-height: 100vh;
	background: #0a0a0a;
}
```

### JavaScript

- **Zero JavaScript** for the main landing page
- All animations are pure CSS (`@keyframes`)
- No external dependencies

### Naming Conventions

- **CSS classes**: kebab-case (e.g., `fade-in`)
- **IDs**: camelCase (e.g., `coming-soon`)

### Design System

- Background: Pure black (`#0a0a0a`) with subtle red gradient orbs
- Card: Glassmorphism with `backdrop-filter: blur()`
- Primary accent: Red gradient (`#dc2626` to `#991b1b`)
- Text primary: `#ffffff` (white)
- Text secondary: `#a1a1a1` (gray)
- Border radius: 24px (card), 14px (buttons)
- Font: Fira Code Nerd Font (monospace with developer ligatures)

## Legacy Files

- `acoupleofkessels/` - Separate legacy project, do not modify

## Notes

- Glassmorphism effect uses `backdrop-filter` (modern browsers only)
- Text links use simple text characters ("in", "@") instead of icon fonts
- No external dependencies or CDNs required (except local font file)
- Fully self-contained single-file website
- GitHub Pages deployment ready
- **Font**: Fira Code Nerd Font must be present in `fonts/` directory
