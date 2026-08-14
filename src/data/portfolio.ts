const awsMlCert = "/__l5e/assets-v1/25a4b1e4-d80d-4a06-aa03-06e32a0c6615/aws-ml.jpg";
const deeplearningCert =
  "/__l5e/assets-v1/e9d6dcf0-57bb-4256-b95c-247d83b30283/deeplearning-ai.jpg";
const internshipCert =
  "/__l5e/assets-v1/d0a7e1f0-77f3-485d-a29b-f899023f9466/internship-ttt.jpg";
const mernCert = "/__l5e/assets-v1/bb50eda4-2d85-49d2-9458-dd8b8091dddb/mern-ttt.jpg";
const simplilearnAiCert =
  "/__l5e/assets-v1/b20876e9-ecc2-47ea-b153-25bb61973fab/simplilearn-ai.jpg";
const unSdgCert = "/__l5e/assets-v1/63990d30-83ae-4a7a-9b95-b170a1b004c4/un-sdg.jpg";
const wfpRupaniCert =
  "/__l5e/assets-v1/75d94d97-1a45-4ab2-b55b-02938673c238/wfp-rupani.jpg";
const storeDashboardShot =
  "/__l5e/assets-v1/8a9cd319-e3c0-47c3-896c-daa25d5161cd/store-dashboard.png";


export const profile = {
  name: "Sohrab Malikzada",
  firstName: "Sohrab",
  lastName: "Malikzada",
  title: "MERN Stack Developer",
  roles: [
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js & Express Developer",
    "Software Engineering Student",
  ],
  availability: "Available for opportunities",
  intro:
    "Software Engineering student specialised in the MERN stack — React.js, Node.js, Express.js and MongoDB. I build responsive interfaces, clean REST APIs and database-driven dashboards, with hands-on industry experience from a three-month software engineering internship.",
  stats: [
    { value: "3", label: "Months Internship" },
    { value: "7", label: "Certifications" },
    { value: "3", label: "Languages Spoken" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a Software Engineering student at Rana University in Kabul, Afghanistan, focused on full-stack web development with the MERN stack. I gained hands-on industry experience through a three-month software engineering internship at Top In Town Technology, and I keep learning by building real projects.",
    "My day-to-day toolkit is React.js, TypeScript, JavaScript and Tailwind CSS on the front end, with Node.js, Express.js, Mongoose and MongoDB on the back end. I enjoy responsive interfaces, clean REST APIs and database integration — and I'm currently expanding my knowledge of Next.js and React Native.",
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

/* ---------------- Skills (no percentages) ----------------
 * `icon` is a simple-icons slug key (without the "si" prefix, camelCase),
 * or null to fall back to a generic icon.
 */
export type Tech = { name: string; icon: string | null };

export const coreStack: Tech[] = [
  { name: "React.js", icon: "React" },
  { name: "Node.js", icon: "Nodedotjs" },
  { name: "Express.js", icon: "Express" },
  { name: "MongoDB", icon: "Mongodb" },
];

export const coreSkills: Array<{ group: string; items: Tech[] }> = [
  {
    group: "Frontend",
    items: [
      { name: "HTML5", icon: "Html5" },
      { name: "CSS3", icon: "Css" },
      { name: "Tailwind CSS", icon: "Tailwindcss" },
      { name: "JavaScript", icon: "Javascript" },
      { name: "React.js", icon: "React" },
      { name: "TypeScript", icon: "Typescript" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: "Nodedotjs" },
      { name: "Express.js", icon: "Express" },
      { name: "MongoDB", icon: "Mongodb" },
      { name: "Mongoose", icon: "Mongoose" },
      { name: "REST APIs", icon: null },
    ],
  },
];

export const additionalSkills: Tech[] = [
  { name: "Bootstrap", icon: "Bootstrap" },
  { name: "jQuery", icon: "Jquery" },
  { name: "Python", icon: "Python" },
  { name: "PHP", icon: "Php" },
  { name: "MySQL", icon: "Mysql" },
  { name: "Laravel", icon: "Laravel" },
  { name: "Oracle SQL", icon: null },
  { name: "Firebase", icon: "Firebase" },
  { name: "Supabase", icon: "Supabase" },
  { name: "Flutter", icon: "Flutter" },
  { name: "Git & GitHub", icon: "Github" },
  { name: "WordPress", icon: "Wordpress" },
  { name: "Figma", icon: "Figma" },
];

export const learningSkills: Tech[] = [
  { name: "Next.js", icon: "Nextdotjs" },
  { name: "React Native", icon: "React" },
];

// NOTE: each project has its OWN GitHub + live demo URL.
export const projects = [
  {
    id: 1,
    title: "Store Management Dashboard",
    summary: "Full store operations dashboard with analytics",
    description:
      "A complete store management system covering inventory, sales, purchases, returns, customers, employees, payroll and debts — with a live analytics dashboard, filterable data tables and printable reports.",
    image: storeDashboardShot,
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Vite"],
    features: [
      "Inventory & sales tracking",
      "Employee & payroll management",
      "Analytics dashboard and reports",
    ],
    github: "https://github.com/Sohrab-Malikzada/Store-Managment_Dashborad",
    demo: "https://template-indol-iota.vercel.app/",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Top In Town Technology",
    type: "Internship",
    period: "Jul 5, 2025 — Oct 5, 2025",
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
    certificateImage: internshipCert,
    certificateId: "TTT-003463",
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

export type CertificateGroup = "Professional & Training" | "Online Courses";

export const certificates: Array<{
  id: number;
  title: string;
  issuer: string;
  year: string;
  group: CertificateGroup;
  credentialId?: string;
  description: string;
  image: string;
  url?: string;
}> = [
  {
    id: 1,
    title: "Develop and Implement STI for SDGs Roadmaps — Level I",
    issuer: "UN DESA & UNITAR",
    year: "Jul 2026",
    group: "Online Courses",
    description:
      "United Nations course on developing and implementing Science, Technology and Innovation roadmaps for the Sustainable Development Goals.",
    image: unSdgCert,
  },
  {
    id: 2,
    title: "Vocational Training: Mobile App Development",
    issuer: "WFP in cooperation with Rupani Foundation",
    year: "Nov 2025 — Apr 2026",
    group: "Professional & Training",
    description:
      "Six-month vocational training program in mobile application development, covering cross-platform app building and practical project work.",
    image: wfpRupaniCert,
  },
  {
    id: 3,
    title: "Software Engineering Internship",
    issuer: "Top In Town Technology",
    year: "Jul 5 — Oct 5, 2025",
    group: "Professional & Training",
    credentialId: "TTT-003463",
    description:
      "Three-month professional internship building production front-end features with React.js, TypeScript and Tailwind CSS in an Agile team.",
    image: internshipCert,
  },
  {
    id: 4,
    title: "AI For Everyone",
    issuer: "DeepLearning.AI — Coursera",
    year: "Sep 2025",
    group: "Online Courses",
    description:
      "Non-technical foundations of artificial intelligence: what AI can and cannot do, AI project workflows and building AI-enabled products.",
    image: deeplearningCert,
    url: "https://coursera.org/verify",
  },
  {
    id: 5,
    title: "AWS Foundations: Machine Learning Basics",
    issuer: "AWS × Simplilearn SkillUp",
    year: "Sep 2025",
    group: "Online Courses",
    credentialId: "8930008",
    description:
      "Foundational machine learning concepts on AWS, including core ML services, model lifecycle and practical use cases.",
    image: awsMlCert,
  },
  {
    id: 6,
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn SkillUp",
    year: "Sep 2025",
    group: "Online Courses",
    credentialId: "8920098",
    description:
      "Introduction to AI concepts, machine learning fundamentals, neural networks and real-world applications of intelligent systems.",
    image: simplilearnAiCert,
  },
  {
    id: 7,
    title: "MERN Stack Development",
    issuer: "Top In Town Technology",
    year: "Jan 4 — Jul 2, 2025",
    group: "Professional & Training",
    credentialId: "TTT-003462",
    description:
      "Six-month intensive MERN stack program: MongoDB, Express.js, React.js and Node.js, REST API design, authentication and deployment.",
    image: mernCert,
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
    "Whether you have a project in mind, want to collaborate, or are looking for a motivated MERN stack developer — I'd love to hear from you. I respond within 24 hours.",
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
