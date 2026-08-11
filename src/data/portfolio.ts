export const profile = {
  name: "Sohrab Malikzada",
  firstName: "Sohrab",
  lastName: "Malikzada",
  title: "Aspiring Full-Stack Developer",
  roles: [
    "Aspiring Full-Stack Developer",
    "React.js Developer",
    "Node.js & Express Developer",
    "Software Engineering Student",
  ],
  availability: "Available for opportunities",
  intro:
    "Software Engineering student focused on full-stack web development, with hands-on experience from a three-month software engineering internship and personal projects. I work with React.js, JavaScript, Node.js, Express.js and MongoDB — building user interfaces, REST APIs and database integrations — and I'm currently expanding into Next.js and React Native.",
  stats: [
    { value: "3", label: "Months Internship" },
    { value: "10+", label: "Projects Built" },
    { value: "3", label: "Languages Spoken" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a Software Engineering student at Rana University in Kabul, Afghanistan, focused on full-stack web development. I gained hands-on industry experience through a three-month software engineering internship at Top In Town Technology, and I keep learning by building personal projects.",
    "My day-to-day toolkit is React.js, JavaScript and Tailwind CSS on the front end, with Node.js, Express.js and MongoDB on the back end. I enjoy responsive interfaces, clean REST APIs and database integration — and I'm currently expanding my knowledge of Next.js and React Native.",
  ],
  highlights: [
    {
      title: "Responsive Web Design",
      description:
        "Interfaces that work well on every screen size, with usability and user experience as the starting point.",
    },
    {
      title: "API & Database Integration",
      description:
        "REST APIs with Node.js and Express, connected to MongoDB through Mongoose for real, persistent data.",
    },
    {
      title: "Problem Solving",
      description:
        "Debugging complex UI and logic issues patiently until the root cause — not just the symptom — is fixed.",
    },
    {
      title: "Version Control & Teamwork",
      description:
        "Git and GitHub workflows, code reviews and agile collaboration practiced during my internship.",
    },
  ],
};

export type SkillCategory = "Frontend" | "Backend" | "Other";

export const skillCategories: SkillCategory[] = ["Frontend", "Backend", "Other"];

export const skills: Array<{
  name: string;
  level: number;
  category: SkillCategory;
}> = [
  { name: "Git / GitHub", level: 70, category: "Frontend" },
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "Bootstrap", level: 80, category: "Frontend" },
  { name: "jQuery", level: 75, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React.js", level: 75, category: "Frontend" },
  { name: "Next.js", level: 35, category: "Frontend" },
  { name: "React Native", level: 30, category: "Frontend" },
  { name: "Flutter", level: 45, category: "Frontend" },
  { name: "Dart", level: 60, category: "Frontend" },
  { name: "Figma", level: 60, category: "Frontend" },
  { name: "WordPress", level: 50, category: "Frontend" },

  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "Python", level: 30, category: "Backend" },
  { name: "Firebase", level: 40, category: "Backend" },
  { name: "Supabase", level: 35, category: "Backend" },
  { name: "PHP", level: 75, category: "Backend" },
  { name: "MySQL", level: 70, category: "Backend" },
  { name: "Laravel", level: 60, category: "Backend" },
  { name: "Oracle SQL", level: 70, category: "Backend" },

  { name: "Vibe Coding", level: 80, category: "Other" },
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
    period: "Jul 2025 — Oct 2025",
    location: "Kabul, Afghanistan",
    points: [
      "Developed and optimized front-end interfaces using React.js, TypeScript, JavaScript (ES6) and Tailwind CSS",
      "Built responsive and interactive user interfaces with a focus on usability and user experience",
      "Participated in code reviews and Agile development processes",
      "Used Git and GitHub for version control and team collaboration",
    ],
    impact:
      "Contributed to the delivery of client web projects and improved the performance of shared UI components",
    tech: ["React.js", "TypeScript", "JavaScript (ES6)", "Tailwind CSS", "Git", "GitHub"],
  },
];

export const education = {
  school: "Rana University",
  degree: "Bachelor of Computer Science — Software Engineering",
  status: "Current",
  period: "May 2025 — Present",
  location: "Kabul, Afghanistan",
  description:
    "Studying Computer Science with a field focus on Software Engineering, while applying what I learn to real web development projects and my internship work.",
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

export const languages = [
  { name: "Dari", level: "Native" },
  { name: "Pashto", level: "Beginner" },
  { name: "English", level: "Intermediate" },
];

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

export const vercelUrl = "https://vercel.com/sohrabmalikzada2003-8136s-projects";
export const githubUrl = "https://github.com/Sohrab-Malikzada";
export const linkedinUrl = "https://linkedin.com/in/sohrab-malikzada";

export const contact = {
  headline: "Get In Touch",
  intro:
    "Open to internships, junior roles, and collaboration on interesting projects.",
  blurb:
    "Whether you have a project in mind, want to collaborate, or are looking for a motivated full-stack developer — I'd love to hear from you. I respond within 24 hours.",
  email: "sohrabmalikzada2003@gmail.com",
  phone: "+93 783 473 212",
  location: "Kabul, Afghanistan",
  channels: [
    {
      label: "Email",
      value: "sohrabmalikzada2003@gmail.com",
      href: "mailto:sohrabmalikzada2003@gmail.com",
      icon: "mail" as const,
    },
    {
      label: "Phone",
      value: "+93 783 473 212",
      href: "tel:+93783473212",
      icon: "phone" as const,
    },
    {
      label: "GitHub",
      value: "github.com/Sohrab-Malikzada",
      href: githubUrl,
      icon: "github" as const,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sohrab-malikzada",
      href: linkedinUrl,
      icon: "linkedin" as const,
    },
    {
      label: "Vercel",
      value: "sohrabmalikzada.vercel.app",
      href: vercelUrl,
      icon: "vercel" as const,
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
