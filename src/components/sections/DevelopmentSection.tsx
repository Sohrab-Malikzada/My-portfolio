import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online marketplace with real-time inventory management, secure payments, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      tools: ["Docker", "AWS", "Stripe"],
    },
    features: ["Real-time inventory", "Secure checkout", "Admin analytics"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards, team assignments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    techStack: {
      frontend: ["Next.js", "React Query", "Framer Motion"],
      backend: ["Supabase", "Edge Functions"],
      tools: ["Vercel", "GitHub Actions"],
    },
    features: ["Kanban boards", "Real-time sync", "Team collaboration"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence with customizable widgets and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    techStack: {
      frontend: ["React", "D3.js", "Recharts"],
      backend: ["Python", "FastAPI", "Redis"],
      tools: ["Docker", "GCP", "BigQuery"],
    },
    features: ["Custom dashboards", "Export reports", "API integrations"],
    github: "#",
    demo: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const DevelopmentSection = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dev-muted text-dev mb-6">
          <Code2 className="h-4 w-4" />
          <span className="text-sm font-medium">Development</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
          Full-Stack Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Building scalable, performant applications with modern technologies. 
          From concept to deployment, every line of code serves a purpose.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Image */}
            <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-dev/5 rounded-2xl blur-2xl group-hover:bg-dev/10 transition-colors duration-500" />
                <div className="relative overflow-hidden rounded-xl border border-border bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Terminal overlay */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-destructive/80" />
                    <span className="w-3 h-3 rounded-full bg-art/80" />
                    <span className="w-3 h-3 rounded-full bg-dev/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider text-dev font-medium">
                    Frontend:
                  </span>
                  {project.techStack.frontend.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider text-dev font-medium">
                    Backend:
                  </span>
                  {project.techStack.backend.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider text-dev font-medium">
                    Tools:
                  </span>
                  {project.techStack.tools.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dev" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="gap-2 bg-dev hover:bg-dev/90" asChild>
                  <a href={project.demo}>
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};
