# Portfolio upgrade: real email, MERN logos, restructured skills, real certificates & project

## 1. Contact form — real email delivery
- Enable Lovable Cloud (backend) for the project.
- Set up the sender email domain (a domain you own) through the email setup dialog.
- Create an app-email template ("New portfolio message") and a send trigger so pressing **Send Message** delivers the message to sohrabmalikzada2003@gmail.com, with the visitor's email as reply-to.
- Client + server validation (name, email, message length), loading state on the button, success/error toast.
- Messages are also stored so nothing is lost if delivery fails.

## 2. Home page — MERN tech strip
- A polished logo strip directly under the hero: React.js, Node.js, Express.js, Next.js, MongoDB (official brand marks, monochrome with color on hover).
- Subtle marquee/fade-in animation, fully responsive, `aria-label`s for accessibility.
- Copy line above it: "Core stack I build with".

## 3. Skills section — no percentages, three tiers
Replace bars with logo + name cards, grouped into three clearly labelled blocks:

```text
Core Skills (highlighted, largest cards)
  Frontend: HTML5, CSS3, Tailwind CSS, JavaScript, React.js, TypeScript
  Backend:  Node.js, Express.js, MongoDB, Mongoose, REST APIs

Additional Technologies (smaller cards)
  Bootstrap, jQuery, Python, PHP, MySQL, Laravel, Oracle SQL,
  Firebase, Supabase, Flutter, Git & GitHub, WordPress, Figma

Currently Learning (badge style)
  Next.js, React Native
```
- All percentage data and progress bars removed from the site and from the PDF export.

## 4. Certificates — your real certificates
Replace all placeholder certificates with the seven uploaded ones, each as a card with a thumbnail that opens the full image in a lightbox:
- Software Engineering Internship — Top In Town Technology (Jul 5 – Oct 5, 2025), ID TTT-003463
- MERN Stack — Top In Town Technology (Jan 4 – Jul 2, 2025), ID TTT-003462
- Introduction to Artificial Intelligence — Simplilearn SkillUp (Sep 2025), code 8920098
- AWS Foundations: Machine Learning Basics — AWS × Simplilearn (Sep 2025), code 8930008
- AI For Everyone — DeepLearning.AI / Coursera (Sep 2025), verify link included
- Develop and Implement STI for SDGs Roadmaps, Level I — UN DESA / UNITAR (Jul 2026)
- Vocational Training: Mobile App Development (6 months) — WFP × Rupani Foundation (Nov 2025 – Apr 2026)

Grouped as "Professional / Training" and "Online Courses", sorted newest first, with issuer, date and credential ID shown.

## 5. Experience — internship certificate
Add the internship completion certificate to the Top In Town Technology timeline entry: a "View certificate" action that opens the same lightbox, plus the exact dates and certificate ID.

## 6. Projects — real project only
Remove all sample projects. Keep one real project:
- **Store Management Dashboard** — inventory, sales, purchases, returns, employees, payroll, debts and analytics dashboard.
- Live: https://template-indol-iota.vercel.app/ · Code: https://github.com/Sohrab-Malikzada/Store-Managment_Dashborad
- Screenshot of the dashboard as the project image, tech tags (React, TypeScript, Tailwind, Recharts).

## 7. PDF export
Update the generated PDF to match: no percentages, three skill tiers, real certificates list, single real project with its links.

## Technical notes
- Cloud backend + email domain, one edge function for sending, React Email template, `contact_messages` table with RLS (insert-only for the public, no public reads).
- Certificate images added via the asset CDN; logos as inline SVG components (no extra dependency).
- Skills data model in `src/data/portfolio.ts` changes from `{name, level, category}` to tiered lists with icon keys.
