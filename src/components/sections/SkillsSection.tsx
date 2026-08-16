import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TechIcon } from "@/components/TechIcon";
import {
  additionalSkills,
  coreSkills,
  learningSkills,
  type Tech,
} from "@/data/portfolio";

const CoreCard = ({ tech, delay }: { tech: Tech; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay }}
    whileHover={{ y: -6 }}
    className="glass-card group flex flex-col items-center gap-3 p-6"
  >
    <span className="icon-pedestal">
      <TechIcon
        slug={tech.icon}
        name={tech.name}
        colored
        className="icon-3d h-9 w-9"
      />
    </span>
    <span className="text-center text-sm font-bold tracking-tight">{tech.name}</span>
  </motion.div>
);

const SmallCard = ({ tech, delay }: { tech: Tech; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.35, delay }}
    whileHover={{ y: -4 }}
    className="glass-card group flex items-center gap-2.5 px-4 py-3"
  >
    <TechIcon
      slug={tech.icon}
      name={tech.name}
      colored
      className="icon-3d h-[18px] w-[18px] shrink-0"
    />
    <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
      {tech.name}
    </span>
  </motion.div>
);


export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72 bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6">
        <SectionHeading
          index="02"
          label="Skills"
          title="Technical"
          highlight="Skills"
          subtitle="My core expertise is the MERN stack, supported by a broader set of technologies I use in real projects."
        />

        {/* Core skills */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
            <h3 className="text-lg font-bold">
              Core <span className="text-gradient">Skills</span>
            </h3>
            <span className="h-px flex-1 bg-gradient-to-l from-primary/60 to-transparent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {coreSkills.map((group, gi) => (
              <div
                key={group.group}
                className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6"
              >
                <p className="mb-5 font-mono text-xs uppercase tracking-widest text-primary">
                  // {group.group}
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {group.items.map((tech, i) => (
                    <CoreCard
                      key={tech.name}
                      tech={tech}
                      delay={gi * 0.05 + i * 0.05}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional */}
        <div className="mb-16">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // Additional Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((tech, i) => (
              <SmallCard key={tech.name} tech={tech} delay={i * 0.03} />
            ))}
          </div>
        </div>

        {/* Learning */}
        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {learningSkills.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm text-accent-foreground"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <TechIcon
                  slug={tech.icon}
                  name={tech.name}
                  className="h-[16px] w-[16px]"
                />
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
