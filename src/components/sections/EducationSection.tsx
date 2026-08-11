import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, MapPin, Languages } from "lucide-react";
import { education, languages } from "@/data/portfolio";

export const EducationSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-4xl font-extrabold md:text-5xl"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass-card hover-lift p-7"
          >
            <div className="mb-5 flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                  {education.status}
                </span>
                <h3 className="mt-2 text-lg font-bold">{education.school}</h3>
                <p className="text-sm text-muted-foreground">
                  {education.degree}
                </p>
              </div>
            </div>

            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> {education.period}
            </p>
            <p className="mt-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {education.location}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {education.description}
            </p>

            <div className="mt-7 border-t border-border pt-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-accent/10 p-2 text-accent">
                  <Languages className="h-4 w-4" />
                </span>
                <h4 className="text-sm font-bold">Languages</h4>
              </div>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium">{l.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass-card hover-lift p-7"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Relevant Coursework</h3>
                <p className="text-sm text-muted-foreground">
                  Core CS &amp; Software Engineering
                </p>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {education.coursework.map((course, i) => (
                <li key={course} className="flex items-center gap-3 text-sm">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground">{course}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
