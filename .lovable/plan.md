# Colored Tech Icons + Modern Bold Headings

## 1. Colored, high-quality icons
- `TechIcon` already supports a `colored` prop (renders the official brand hex). Enable it everywhere icons appear:
  - `TechStrip` (MERN + Next.js strip under the hero)
  - `SkillsSection`: core cards, additional-technology chips, currently-learning pills
- Add a depth/3D feel with CSS only (no image assets): soft brand-tinted glow behind each icon, subtle drop-shadow, slight scale + lift on hover, and crisp SVG rendering so they stay sharp at any size.

## 2. Professional, bold headings
Restyle these labels with strong weight, tighter tracking and semantic gradient/accent tokens (no hardcoded colors):
- "Available for opportunities" badge (hero)
- "// connect" (hero socials)
- "// Core stack I build with" (tech strip)
- Hero floating stats: "7 Months Internship", "3 Certifications", "Languages Spoken"
- "Core Skills", "// Frontend", "// Backend", "// Additional Technologies", "// Currently Learning"
- "View certificate" + credential ID (`TTT-003463`) in Experience
- "// Professional & Training" (Certificates)

Treatment: mono micro-labels get uppercase, wider tracking, gradient text or accent color with a small leading marker; section sub-headings become bold with a gradient accent word; stat numbers become large gradient numerals.

## 3. Typewriter roles
Reduce the hero typewriter list in `src/data/portfolio.ts` to exactly:
- Aspiring Full-Stack Developer
- MERN Stack Developer

(removing React.js Developer, Node.js & Express Developer, Software Engineering Student)

## Technical notes
- Files: `src/components/TechIcon.tsx` (optional glow wrapper), `src/components/TechStrip.tsx`, `src/components/sections/SkillsSection.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/sections/ExperienceSection.tsx`, `src/components/sections/CertificatesSection.tsx`, `src/data/portfolio.ts`, plus new tokens/utilities in `src/index.css`.
- All colors via design tokens; brand hex only inside the SVG fill for logos. Verified in both light and dark mode.
