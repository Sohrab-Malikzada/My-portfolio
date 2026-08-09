import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/portfolio";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="03"
          label="Projects"
          title="Featured"
          highlight="Projects"
          subtitle="Selected work spanning web platforms, real-time tools, and mobile apps."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className="glass-card hover-lift group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-md border border-primary/40 bg-background/80 px-2 py-1 font-mono text-[10px] text-primary backdrop-blur">
                    featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 font-mono text-[11px] text-muted-foreground">
                  // {project.summary}
                </p>
                <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-primary link-underline"
                  >
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
