# Architecture of `thomasltran.github.io`

The portfolio website is a static site generated using SvelteKit (`adapter-static`), styled with Tailwind CSS v4 and the Skeleton UI framework. It is designed to be modern, incredibly responsive, and performant.

## Tech Stack
- **Framework:** SvelteKit (Svelte 5)
- **Adapter:** `@sveltejs/adapter-static` (renders pages into static HTML for GitHub Pages)
- **Styling:** Tailwind CSS 4 + Skeleton UI (`cerberus` theme)
- **Typography:** Custom Google Fonts (`Inter` for sans-serif text, `Outfit` for headings)
- **3D Graphics & Animations:** Three.js with `@threlte/core` and `@threlte/extras`. Svelte-motion for text reveal logic.
- **Markdown Processing:** MDSvex (Allows using Svelte components inside Markdown and compiling `.md` files into pages)

## Application Structure

```text
src/
├── app.html              # Entry HTML point, injecting fonts and layout bases
├── lib/                  # Reusable components and library utilities
│   ├── assets/           # Static assets like favicons and SVGs 
│   ├── components/       # UI Components
│   │   ├── Pagination.svelte
│   │   ├── PostCard.svelte            # Reusable blog post preview card
│   │   ├── Dumbbell3D.svelte          # Custom 3D interactive dumbbell using Threlte primitives
│   │   ├── DumbbellCanvas.svelte      # Canvas wrapper and background glow for the 3D element
│   │   └── TextGenerateEffect.svelte  # Terminal-style text reveal animation for headers
│   ├── styles/           # Global styles
│   │   └── markdown.css  # Typography rules for rendered MDSvex Markdown content
│   └── blog.js           # Server-side glob utilities to parse and load .md posts
├── routes/               # SvelteKit App Router
│   ├── +layout.svelte    # The global layout, includes the Sticky navbar and Footer
│   ├── +page.svelte      # Homepage `/` (Hero section and reading widget)
│   ├── layout.css        # Base Tailwind and skeleton imports, global themes and gradient background settings
│   ├── gym/              # Gym blog route `/gym`
│   │   ├── +page.js      # Page data loader (loads markdown pages for the gym category and paginates)
│   │   ├── +page.svelte  # Blog list view
│   │   └── [slug]/       # Dynamic route for rendering individual markdown posts
│   └── tech/             # Tech blog route `/tech` (Identical architecture to gym)
```

## Data Flow (Blog System)

The blog utilizes a static site approach, avoiding runtime database operations:
1. Articles are written in Markdown (`.md` files) with YAML frontmatter containing metadata (title, date, summary, tags).
2. They are placed in either `/src/routes/tech/markdown/` or a similar folder (or directly adjacent to routes if ignored by the router).
3. `src/lib/blog.js` utilizes Vite's `import.meta.glob('/src/routes/**/*.md')` to parse the file system at build-time. It separates posts based on directory path (e.g., if it's in the `tech` folder).
4. SvelteKit pages fetch this using `+page.js` loaders and pass it to components for display.

## Design System
- **Layouts & Spacing:** Relies heavily on CSS Grid (`grid-cols-12`) for wide desktop layouts and flexing components on mobile.
- **Statement Pieces:** Custom 3D components (`Dumbbell3D`) built with Threlte utilize dynamic `OrbitControls` and `Float` physics for maximum engagement.
- **Glassmorphism & Depth:** Gradients are largely avoided in favor of sleek, flat surfaces combined with frosted glass (`backdrop-blur-xl`) and subtle radial blurs (`bg-[color]/10 blur-3xl`).
- **Elevations:** Deep shadow layering (`shadow-lg`, `shadow-2xl`) combined with `-translate-y-1` transformations create physical presence and interactive tactility when hovering over blog cards.

## 3D Barbell Component

The interactive barbell on the homepage is built with **Threlte v8** (`@threlte/core`, `@threlte/extras`) and Three.js.

### Weight Configuration
- **Single source of truth:** `BENCH_WEIGHT` constant in `+page.svelte` — change once to update both the 3D model and the display text.
- The `Dumbbell3D` component receives `weight` as a prop and auto-calculates the correct plate breakdown using standard plate denominations (45, 35, 25, 10, 5, 2.5 lb).

### Plate Visuals
- **IPF color coding:** 45lb=Red, 35lb=Yellow, 25lb=Green, 10lb=White, 5lb=Blue, 2.5lb=Silver.
- **Spacing:** 0.04 unit gap between plates for visual separation.
- **Edge rings:** Subtle semi-transparent torus rings at each plate edge for depth.

### Plate Weight Labels (Canvas Texture Pipeline)
Labels are rendered via an imperative Three.js approach rather than Threlte's declarative component props:

1. **Canvas drawing:** An off-screen `<canvas>` (512×512) draws the plate color background, then the weight number + "LB" using `strokeText` + `fillText` (thick strokes required — thin `fillText` alone gets lost in texture sampling).
2. **Texture creation:** `THREE.CanvasTexture` with `generateMipmaps = false` and `LinearFilter` (mipmaps average away thin text).
3. **Mesh construction:** `THREE.CircleGeometry` + `THREE.MeshStandardMaterial` with `side: DoubleSide` and `color: 0xffffff`.
4. **Scene attachment:** Meshes are added imperatively via `group.add()` in the `oncreate` callback — NOT through Threlte's declarative `<T.Mesh>` props (which had issues binding dynamic textures).
5. **Label positioning:** Text is placed at the outer rim (top + inverted bottom), like real powerlifting plates, to avoid being hidden by smaller plates stacked on top.

### Threlte v8 API Notes
- Use `oncreate` (not `on:create`) — Svelte 5 / Threlte v8 syntax.
- The `oncreate` callback receives `ref` directly: `oncreate={(ref) => ...}`, not `on:create={({ ref }) => ...}`.
- `useThrelte()` provides `invalidate()` to force re-renders when imperatively modifying the scene.

### Interactivity
- **Drag to rotate:** `OrbitControls` with damping.
- **Scroll to zoom:** Enabled with `minDistance=4`, `maxDistance=12`.
- **Float animation:** Gentle vertical bobbing via `<Float>`.

