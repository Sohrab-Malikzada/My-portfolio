import { motion } from "framer-motion";
import { TechIcon } from "@/components/TechIcon";
import type { Tech } from "@/data/portfolio";

const stack: Tech[] = [
  { name: "React.js", icon: "React" },
  { name: "Node.js", icon: "Nodedotjs" },
  { name: "Express.js", icon: "Express" },
  { name: "Next.js", icon: "Nextdotjs" },
  { name: "MongoDB", icon: "Mongodb" },
];

export const TechStrip = () => (
  <section aria-label="Core technology stack" className="relative border-y border-border/60 bg-card/30 py-10">
    <div className="container mx-auto px-6">
      <p className="mb-7 text-center label-eyebrow">
        // Core stack I build with
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16">
        {stack.map((tech, i) => (
          <motion.li
            key={tech.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-2.5"
          >
            <span className="icon-pedestal">
              <TechIcon
                slug={tech.icon}
                name={tech.name}
                colored
                className="icon-3d h-9 w-9 sm:h-11 sm:w-11"
              />
            </span>
            <span className="text-xs font-bold tracking-tight text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm">
              {tech.name}
            </span>

          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);
