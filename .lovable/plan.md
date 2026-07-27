## Goal

Add a **Download Portfolio** button to the top navigation. Clicking it generates and downloads a complete, professionally designed multi-page PDF (in English) containing all portfolio content.

## PDF Structure

1. **Cover page** — name (Sohrab Malikzada), the three roles (Front-end Developer / Graphic Designer / Professional Painter), the hero tagline, and date.
2. **About** — the two intro paragraphs plus the three discipline cards (Development, Design, Art) with their skill lists.
3. **Development projects** — for each of the 3 projects: screenshot image, title, description, tech stack (frontend / backend / tools), and key features.
4. **Design work** — grid of the design projects with image, title, category, and tools.
5. **Fine art** — gallery of the 6 artworks with image, title, medium, year, and dimensions.
6. **Contact** — email and social links, closing line.

Design matches the site: Cormorant Garamond–style serif headings, clean sans body, warm off-white background, and the three discipline accent colors (blue / orange / gold) used as section markers.

## Behavior

- Button sits in the desktop nav next to the theme toggle, and inside the mobile menu.
- On click: shows a loading state ("Preparing…"), builds the PDF, then downloads as `Sohrab-Malikzada-Portfolio.pdf`.
- Content is pulled from shared data so the PDF always matches what's on the page.

## Technical notes

- Add `jspdf` for PDF generation (vector text, real pages, selectable text — not screenshots).
- Extract the currently-inline project/artwork/design arrays into a shared `src/data/portfolio.ts` module, imported by both the sections and the PDF generator, so there is one source of truth.
- New `src/lib/generatePortfolioPdf.ts` builds the document: page helpers (header, footer with page numbers), text wrapping, and image embedding.
- Images are remote Unsplash URLs; they'll be fetched and converted to data URLs before embedding, with a graceful fallback (colored placeholder block) if a fetch fails, so the download never breaks.
- New `src/components/DownloadPortfolioButton.tsx` handles the click, loading state, and toast on error; used in `Navigation.tsx` for both desktop and mobile.
