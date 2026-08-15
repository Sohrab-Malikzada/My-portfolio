import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/portfolio";

export const ExperienceSection = () => {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="04"
          label="Experience"
          title="Work"
          highlight="Experience"
          subtitle="Professional experience building real-world software applications."
        />

        <div className="relative pl-6 md:pl-10">
          <span className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass-card hover-lift relative p-6 md:p-7"
              >
                <span className="absolute -left-6 top-8 h-3 w-3 rounded-full border-2 border-background bg-primary md:-left-[2.35rem] md:shadow-[0_0_16px_hsl(var(--primary))]" />

                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] text-primary">
                      {job.type}
                    </span>
                    <p className="mt-2 flex items-center justify-end gap-1.5 font-mono text-[11px] text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {job.period}
                    </p>
                    <p className="mt-1 flex items-center justify-end gap-1.5 font-mono text-[11px] text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mb-5 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-5 border-l-2 border-primary bg-primary/5 py-2 pl-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Impact: </span>
                  {job.impact}
                </p>

                {job.certificateImage && (
                  <button
                    type="button"
                    onClick={() =>
                      setActive({
                        src: job.certificateImage,
                        alt: `${job.role} certificate from ${job.company}`,
                      })
                    }
                    className="mb-5 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary/20"
                  >
                    <Award className="h-3.5 w-3.5" /> View certificate
                    {job.certificateId && (
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {job.certificateId}
                      </span>
                    )}
                  </button>
                )}

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        src={active?.src ?? null}
        alt={active?.alt ?? ""}
        onClose={() => setActive(null)}
      />
    </section>
  );
};
