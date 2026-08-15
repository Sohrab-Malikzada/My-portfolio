import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Hash, Maximize2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ImageLightbox } from "@/components/ImageLightbox";
import { certificates, type CertificateGroup } from "@/data/portfolio";

const groups: CertificateGroup[] = ["Professional & Training", "Online Courses"];

export const CertificatesSection = () => {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Certificates &"
          highlight="Training"
          subtitle="Verified certificates from professional training programs and online courses."
        />

        {groups.map((group) => {
          const items = certificates.filter((c) => c.group === group);
          if (!items.length) return null;

          return (
            <div key={group} className="mb-14 last:mb-0">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                // {group}
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((cert, i) => (
                  <motion.article
                    key={cert.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    className="glass-card hover-lift flex flex-col overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActive({
                          src: cert.image,
                          alt: `${cert.title} certificate issued by ${cert.issuer}`,
                        })
                      }
                      className="group relative block aspect-[4/3] w-full overflow-hidden bg-secondary/40"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate issued by ${cert.issuer}`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-card px-3 py-1.5 text-xs text-primary">
                          <Maximize2 className="h-3.5 w-3.5" /> View certificate
                        </span>
                      </span>
                    </button>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 inline-flex w-fit rounded-xl bg-primary/10 p-2.5 text-primary">
                        <Award className="h-4 w-4" />
                      </div>
                      <h4 className="mb-2 text-base font-bold leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-sm font-medium text-primary">
                        {cert.issuer}
                      </p>
                      <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {cert.year}
                      </p>
                      {cert.credentialId && (
                        <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                          <Hash className="h-3 w-3" /> {cert.credentialId}
                        </p>
                      )}
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
                          <ExternalLink className="h-3.5 w-3.5" /> Verify credential
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ImageLightbox
        src={active?.src ?? null}
        alt={active?.alt ?? ""}
        onClose={() => setActive(null)}
      />
    </section>
  );
};
