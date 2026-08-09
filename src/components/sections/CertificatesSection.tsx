import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certificates } from "@/data/portfolio";

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Certifications"
          subtitle="Continuous learning across the full stack, from databases to mobile."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card hover-lift flex flex-col p-6"
            >
              <div className="mb-5 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-bold leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-primary">{cert.issuer}</p>
              <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <Calendar className="h-3 w-3" /> {cert.year}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
              {cert.url && cert.url !== "#" && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> View Credential
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
