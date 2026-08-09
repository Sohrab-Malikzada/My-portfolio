export const profile = {
  name: "Sohrab Malikzada",
  firstName: "Sohrab",
  lastName: "Malikzada",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "MERN Stack Engineer",
  ],
  availability: "Available for opportunities",
  intro:
    "Full Stack Developer with 2+ years of professional experience building scalable, high-performance web and mobile applications. Specializing in the MERN stack with a focus on clean architecture and exceptional user experience.",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Built" },
    { value: "6", label: "Certifications" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a full stack developer based in Kabul, Afghanistan, currently pursuing a Bachelor of Science in Computer Science at Rana University while building real-world products for clients and teams.",
    "My work sits where engineering discipline meets product craft: type-safe React front-ends, well-structured Node.js APIs, and databases modeled for the way people actually use software. I care about clean architecture, accessible interfaces, and shipping features that hold up in production.",
  ],
  highlights: [
    {
      title: "Clean Architecture",
      description:
        "Modular, testable code with clear boundaries between UI, domain logic, and data access.",
    },
    {
      title: "Performance First",
      description:
        "Fast loads, lean bundles, and smooth interactions measured with real metrics — not guesses.",
    },
    {
      title: "Product Mindset",
      description:
        "I ask why before how, and design flows around the person on the other side of the screen.",
    },
    {
      title: "Team Collaboration",
      description:
        "Code reviews, agile sprints, and Git workflows that keep a team moving in the same direction.",
    },
  ],
};

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export const skills: Array<{
  name: string;
  level: number;
  category: SkillCategory;
}> = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "React Router", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Shadcn UI", level: 80, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },

  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Express.js", level: 86, category: "Backend" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "JWT & Auth", level: 84, category: "Backend" },
  { name: "Socket.IO", level: 72, category: "Backend" },
  { name: "React Native", level: 75, category: "Backend" },

  { name: "MongoDB", level: 88, category: "Database" },
  { name: "Mongoose", level: 85, category: "Database" },
  { name: "PostgreSQL", level: 72, category: "Database" },
  { name: "Firebase", level: 78, category: "Database" },

  { name: "Git & GitHub", level: 92, category: "Tools" },
  { name: "Vite", level: 84, category: "Tools" },
  { name: "Postman", level: 88, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
  { name: "Vercel", level: 82, category: "Tools" },
];

// NOTE: each project has its OWN GitHub + live demo URL.
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    summary: "MERN marketplace with payments and admin analytics",
    description:
      "A full-featured online marketplace with real-time inventory management, secure Stripe payments, order tracking, and a role-based admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe"],
    features: ["Real-time inventory", "Secure checkout", "Admin analytics"],
    github: "https://github.com/Sohrab-Malikzada/ecommerce-platform",
    demo: "https://ecommerce-platform.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    summary: "Realtime kanban collaboration for small teams",
    description:
      "Collaborative project management tool with drag-and-drop boards, team assignments, comments, and live progress tracking across devices.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    tech: ["React", "Socket.IO", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["Kanban boards", "Real-time sync", "Team collaboration"],
    github: "https://github.com/Sohrab-Malikzada/task-management-app",
    demo: "https://task-manager.example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    summary: "Business intelligence with custom widgets",
    description:
      "Data visualization platform for business intelligence with customizable widgets, scheduled reports, and REST integrations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["React", "Recharts", "Express", "PostgreSQL", "Redis"],
    features: ["Custom dashboards", "Export reports", "API integrations"],
    github: "https://github.com/Sohrab-Malikzada/analytics-dashboard",
    demo: "https://analytics-dashboard.example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Mobile Delivery App",
    summary: "Cross-platform ordering app in React Native",
    description:
      "Cross-platform food delivery application with live order status, map tracking, push notifications, and Firebase authentication.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tech: ["React Native", "Firebase", "Expo", "Node.js"],
    features: ["Live tracking", "Push notifications", "Firebase auth"],
    github: "https://github.com/Sohrab-Malikzada/delivery-app",
    demo: "https://delivery-app.example.com",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Top In Town Technology",
    type: "Internship",
    period: "July 2025 — October 2025",
    location: "Kabul, Afghanistan",
    points: [
      "Developed and optimized front-end solutions using React.js, JavaScript (ES6+), and Tailwind CSS",
      "Implemented fully responsive web designs and interactive user interfaces",
      "Collaborated with the development team in code reviews and agile sprints",
      "Debugged complex UI issues and optimized component performance",
      "Managed version control workflows using Git and GitHub",
    ],
    impact:
      "Contributed to successful delivery of multiple web projects; optimized UI components for better performance",
    tech: ["React.js", "JavaScript (ES6+)", "Bootstrap", "Tailwind CSS", "Git", "GitHub"],
  },
  {
    id: 2,
    role: "Full Stack Development Training",
    company: "Top In Town Technology",
    type: "Training Program",
    period: "January 2025 — June 2025",
    location: "Kabul, Afghanistan",
    points: [
      "Completed an intensive MERN stack program covering React, Node.js, Express, and MongoDB",
      "Built and deployed multiple full-stack applications from scratch",
      "Practiced REST API design, authentication with JWT, and database modeling",
      "Learned mobile development fundamentals with Flutter and React Native",
    ],
    impact:
      "Graduated with a portfolio of production-style projects covering the full development lifecycle",
    tech: ["MongoDB", "Express", "React", "Node.js", "React Native"],
  },
  {
    id: 3,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    type: "Freelance",
    period: "2024 — Present",
    location: "Remote",
    points: [
      "Designed and delivered marketing sites and dashboards for small businesses",
      "Handled the full cycle: requirements, design, development, deployment, and support",
      "Improved client site performance and SEO scores with modern build tooling",
    ],
    impact: "Delivered 10+ client projects with on-time launches and repeat engagements",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Vercel"],
  },
];

export const education = {
  school: "Rana University",
  degree: "Bachelor of Science in Computer Science",
  status: "Current",
  period: "Started: September 2023 — Present",
  location: "Kabul, Afghanistan",
  description:
    "Currently pursuing a Computer Science degree with a focus on software engineering, web technologies, and distributed systems. Applying academic knowledge to real-world projects and professional development work.",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering Principles",
    "Object-Oriented Programming",
    "Web Development Technologies",
    "Computer Networks",
    "Operating Systems",
    "Software Architecture",
  ],
};

export const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Top In Town Technology",
    year: "2025",
    description:
      "Comprehensive full-stack development program covering MERN stack, Flutter, React Native, and modern web technologies.",
    url: "#",
  },
  {
    id: 2,
    title: "React.js Development",
    issuer: "Online Learning Platform",
    year: "2024",
    description:
      "Advanced React.js including hooks, context API, state management, React Router, and performance optimization techniques.",
    url: "#",
  },
  {
    id: 3,
    title: "Node.js & Express.js Backend Development",
    issuer: "Self-Directed Learning",
    year: "2024",
    description:
      "Backend development with Node.js, RESTful API design, authentication with JWT, middleware patterns, and MongoDB integration.",
    url: "#",
  },
  {
    id: 4,
    title: "MongoDB & Database Design",
    issuer: "Online Learning Platform",
    year: "2024",
    description:
      "NoSQL database design, Mongoose ODM, aggregation pipelines, indexing strategies, and data modeling best practices.",
    url: "#",
  },
  {
    id: 5,
    title: "Flutter & Dart Mobile Development",
    issuer: "Self-Directed Learning",
    year: "2025",
    description:
      "Cross-platform mobile app development with Flutter and Dart, state management, Firebase integration, and native APIs.",
    url: "#",
  },
  {
    id: 6,
    title: "Git & GitHub Version Control",
    issuer: "Online Learning Platform",
    year: "2023",
    description:
      "Professional version control workflows, branching strategies, pull requests, code reviews, and team collaboration.",
    url: "#",
  },
];

export const contact = {
  headline: "Get In Touch",
  intro:
    "Open to internships, full-time roles, and exciting collaboration opportunities.",
  blurb:
    "Whether you have a project in mind, want to collaborate, or are looking for a dedicated full-stack developer — I'd love to hear from you. I respond within 24 hours.",
  email: "sohrabmalikzada2003@gmail.com",
  channels: [
    {
      label: "Email",
      value: "sohrabmalikzada2003@gmail.com",
      href: "mailto:sohrabmalikzada2003@gmail.com",
      icon: "mail" as const,
    },
    {
      label: "GitHub",
      value: "github.com/Sohrab-Malikzada",
      href: "https://github.com/Sohrab-Malikzada",
      icon: "github" as const,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sohrab-malikzada",
      href: "https://linkedin.com/in/sohrab-malikzada",
      icon: "linkedin" as const,
    },
    {
      label: "Location",
      value: "Kabul, Afghanistan",
      href: "",
      icon: "location" as const,
    },
  ],
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
