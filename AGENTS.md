# AGENTS.md - Coding Guidelines for kokessel.github.io

## Project Overview

Interactive 3D business card personal landing page. Single HTML file with inline CSS and minimal JavaScript for 3D parallax effects. Directs traffic to email and LinkedIn.

## Project Structure

```
├── index.html        # Single self-contained HTML file (CSS/JS inlined)
├── fonts/            # Custom font files
│   └── FiraCodeNerdFont-Regular.ttf
├── favicon.ico       # Site favicon
├── CNAME             # GitHub Pages custom domain config
├── robots.txt        # Search engine directives
├── AGENTS.md         # This file
└── acoupleofkessels/ # Separate legacy project (do not modify)
```

## Build Commands

**No build required.** This is a single static HTML file with inline CSS and JavaScript.

To preview locally:
```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`

## Code Style Guidelines

### HTML

- Single self-contained `index.html` file
- CSS and JavaScript are **inlined** (no external files)
- Semantic HTML5 elements
- Accessibility attributes on links (`aria-label`, `target="_blank"`)

### CSS

- All styles inlined in `<style>` block
- Uses CSS custom properties for dynamic values (e.g., `--mouse-x`, `--mouse-y`)
- Mobile-first responsive design with `@media` queries
- **Local custom font**: Fira Code Nerd Font (monospace with ligatures)
- `transform-style: preserve-3d` for 3D effects
- `backdrop-filter: blur()` for glassmorphism

**Key CSS Features:**
```css
.card {
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
    backdrop-filter: blur(20px);
}
```

### JavaScript

- **Minimal JavaScript** for 3D parallax tilt effect only
- Mouse tracking for dynamic card rotation
- Glare effect positioned based on mouse coordinates
- No external dependencies or libraries

**Key JavaScript Pattern:**
```javascript
document.addEventListener('mousemove', (e) => {
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
```

### Naming Conventions

- **CSS classes**: kebab-case (e.g., `card-content`, `corner-tl`)
- **IDs**: camelCase (e.g., `card`)
- **CSS custom properties**: kebab-case with double-dash prefix

### Design System

- **Background**: Animated gradient (navy blues cycling)
- **Card**: Glassmorphism with `backdrop-filter: blur()`
- **Primary accent**: Coral/salmon (#e94560)
- **Text primary**: White (#ffffff)
- **Text secondary**: Light gray (#b8b8b8)
- **Labels**: Muted gray (#7a7a7a)
- **Border radius**: 24px (card), 12px (buttons)
- **Font**: Fira Code Nerd Font (monospace with developer ligatures)
- **3D Depth**: Multiple `translateZ()` layers for parallax

## Legacy Files

- `acoupleofkessels/` - Separate legacy project, do not modify

## Notes

- **3D Tilt**: Card follows mouse cursor with subtle rotation (X/Y axis)
- **Glare Effect**: Dynamic light reflection follows mouse position
- **Depth Layers**: Content elements at different Z-depths for parallax
- **Animated Background**: CSS gradient animation cycles through navy blues
- **Responsive**: Mobile-optimized with reduced padding and font sizes
- **No external dependencies** or CDNs required (except local font file)
- **Fully self-contained** single-file website
- **GitHub Pages** deployment ready
- **Font**: Fira Code Nerd Font must be present in `fonts/` directory
