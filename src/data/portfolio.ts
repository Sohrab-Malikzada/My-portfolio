export const profile = {
  name: "Sohrab Malikzada",
  tagline: "Creative Professional",
  roles: ["Front-end Developer", "Graphic Designer", "Professional Painter"],
  intro:
    "Bridging the gap between technical precision and artistic expression. I craft digital experiences, visual identities, and fine art that resonate with purpose and beauty.",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", value: "github.com/username" },
    { label: "LinkedIn", value: "linkedin.com/in/username" },
    { label: "Instagram", value: "instagram.com/username" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a multidisciplinary creative who believes that the best work happens at the intersection of technology and art. With over a decade of experience across software development, graphic design, and fine art, I bring a unique perspective to every project.",
    "My journey began with a paintbrush, evolved through design studios, and expanded into the world of code. This diverse background allows me to approach problems holistically\u2014whether I'm architecting a scalable application, crafting a brand identity, or expressing emotion through paint.",
  ],
  disciplines: [
    {
      title: "Development",
      skills: "React, TypeScript, Node.js, PostgreSQL, Cloud Architecture",
    },
    {
      title: "Design",
      skills: "UI/UX, Branding, Typography, Figma, Adobe Creative Suite",
    },
    {
      title: "Fine Art",
      skills: "Oil, Acrylic, Watercolor, Mixed Media, Gallery Exhibitions",
    },
  ],
};

// NOTE: each project has its OWN GitHub + live demo URL.
// Replace the placeholder URLs below with the real ones per project.
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online marketplace with real-time inventory management, secure payments, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      tools: ["Docker", "AWS", "Stripe"],
    },
    features: ["Real-time inventory", "Secure checkout", "Admin analytics"],
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://ecommerce-platform.example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop boards, team assignments, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    techStack: {
      frontend: ["Next.js", "React Query", "Framer Motion"],
      backend: ["Supabase", "Edge Functions"],
      tools: ["Vercel", "GitHub Actions"],
    },
    features: ["Kanban boards", "Real-time sync", "Team collaboration"],
    github: "https://github.com/username/task-management-app",
    demo: "https://task-manager.example.com",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Data visualization platform for business intelligence with customizable widgets and automated reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    techStack: {
      frontend: ["React", "D3.js", "Recharts"],
      backend: ["Python", "FastAPI", "Redis"],
      tools: ["Docker", "GCP", "BigQuery"],
    },
    features: ["Custom dashboards", "Export reports", "API integrations"],
    github: "https://github.com/username/analytics-dashboard",
    demo: "https://analytics-dashboard.example.com",
  },
];

export const designProjects = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop",
    tools: ["Figma", "Illustrator"],
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "Fintech App UI",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tools: ["Figma", "Protopie"],
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Music Festival Poster",
    category: "Print",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    tools: ["Photoshop", "Illustrator"],
    span: "col-span-1",
  },
  {
    id: 4,
    title: "E-Commerce Redesign",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tools: ["Figma", "After Effects"],
    span: "col-span-2",
  },
  {
    id: 5,
    title: "Organic Food Packaging",
    category: "Packaging",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=800&fit=crop",
    tools: ["Illustrator", "Dimension"],
    span: "col-span-1 row-span-2",
  },
  {
    id: 6,
    title: "Tech Startup Logo",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=400&fit=crop",
    tools: ["Illustrator"],
    span: "col-span-1",
  },
  {
    id: 7,
    title: "Magazine Layout",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    tools: ["InDesign", "Photoshop"],
    span: "col-span-1",
  },
];

export const artworks = [
  {
    id: 1,
    title: "Golden Hour",
    medium: "Oil on Canvas",
    year: 2024,
    dimensions: '36" \u00d7 48"',
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    title: "Urban Solitude",
    medium: "Acrylic on Canvas",
    year: 2024,
    dimensions: '24" \u00d7 36"',
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    title: "Abstract Emotions",
    medium: "Mixed Media",
    year: 2023,
    dimensions: '30" \u00d7 40"',
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    title: "Morning Mist",
    medium: "Watercolor on Paper",
    year: 2023,
    dimensions: '18" \u00d7 24"',
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    title: "Depths of Blue",
    medium: "Oil on Canvas",
    year: 2023,
    dimensions: '40" \u00d7 30"',
    image:
      "https://images.unsplash.com/photo-1545989253-02cc26577f88?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    title: "Eternal Flow",
    medium: "Acrylic on Canvas",
    year: 2022,
    dimensions: '48" \u00d7 36"',
    image:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&h=1000&fit=crop",
  },
];
