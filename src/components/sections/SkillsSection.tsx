import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillCategories, skills, type SkillCategory } from "@/data/portfolio";

export const SkillsSection = () => {
  const [active, setActive] = useState<SkillCategory>("Frontend");
  const visible = skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72 bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6">
        <SectionHeading
          index="02"
          label="Skills"
          title="Technical"
          highlight="Skills"
          subtitle="A comprehensive toolkit for building modern full-stack applications."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "text-primary-foreground"
                  : "border border-border bg-card/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card hover-lift p-5"
              >
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="font-mono text-xs text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
