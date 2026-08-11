# Real data, real photo, light mode default

Replace the invented content with the details from your CV, use your own photo, switch the default theme to light, set the exact skill percentages you listed, and add your Vercel link everywhere.

## 1. Your photo
- Upload `Sohrab_Malikzada_Profile.png` as a CDN asset and use it in the hero portrait (replacing the generated image) and in the PDF export.
- Update the alt text to describe you.

## 2. Content from the CV
- Title: "Aspiring Full-Stack Developer".
- Summary/intro and About text rewritten from the CV: Software Engineering student, three-month internship at Top In Town Technology, experience with React.js, JavaScript, Node.js, Express.js, MongoDB; currently learning Next.js and React Native.
- Stats reworked to honest values (e.g. internship months, projects, certifications) instead of "2+ years".
- Experience: keep only the CV entry — Software Engineering Intern, Top In Town Technology, Kabul, Jul 2025 – Oct 2025, with the four CV bullets. The invented "training program" and "freelance" entries are removed.
- Education: Bachelor of Computer Science, field Software Engineering, Rana University, Kabul, May 2025 – Present.
- New Languages block (Dari — Native, Pashto — Beginner, English — Intermediate) placed in the Education section.
- Contact: phone +93 783 473 212, email sohrabmalikzada2003@gmail.com, GitHub, LinkedIn, Vercel, Kabul.

## 3. Skills — exact percentages
Categories become **Frontend**, **Backend**, **Other**.

Frontend: Git/GitHub 70, HTML 90, CSS 80, Tailwind CSS 80, Bootstrap 80, jQuery 75, JavaScript 70, React.js 75, Next.js 35, React Native 30, Flutter 45, Dart 60, Figma 60, WordPress 50.

Backend: Node.js 70, Express.js 70, MongoDB 75, Python 30, Firebase 40, Supabase 35, PHP 75, MySQL 70, Laravel 60, Oracle SQL 70.

Other: Vibe Coding 80.

## 4. Light mode by default
- The inline script in `index.html` and the toggle state in the navigation currently default to dark; both flip so a first-time visitor sees light mode, with the choice still saved for return visits.

## 5. Vercel link
Added as: a contact channel (`sohrabmalikzada.vercel.app`), a footer social icon, a hero social icon, and a line in the PDF contact page — pointing to https://vercel.com/sohrabmalikzada2003-8136s-projects

## 6. PDF export
Regenerated with the updated profile, photo, skills, experience, education, languages and contact links, then checked page by page.

## Open item
The four projects (E-Commerce Platform, Task Management App, Analytics Dashboard, Mobile Delivery App) and the six certificates are placeholders I wrote earlier — your CV lists none. For now I will keep the section structure but mark them clearly as personal/practice projects; send me the real project names, GitHub links and live URLs (and real certificate names/links) whenever ready and I will swap them in.

## Technical notes
- Nearly all changes land in `src/data/portfolio.ts`; components read from it.
- `SkillCategory` type and category list change from 4 to 3 categories; `SkillsSection` default tab updates.
- Photo added via `lovable-assets` pointer in `src/assets/`, imported in `HeroSection` and fetched in `src/lib/generatePortfolioPdf.ts`.
- Education section gains a small languages card; contact icon map gains a `phone` and `globe` entry.
