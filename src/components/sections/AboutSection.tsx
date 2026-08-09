import { motion } from "framer-motion";
import { Boxes, Gauge, Lightbulb, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { about, profile } from "@/data/portfolio";

const icons = [Boxes, Gauge, Lightbulb, Users];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="01"
          label="About"
          title="About"
          highlight="Me"
          subtitle="Engineer by training, product builder by instinct."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card/60 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-gradient">{s.value}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.highlights.map((h, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.article
                  key={h.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card hover-lift p-5"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
