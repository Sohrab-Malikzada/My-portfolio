import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export const SectionHeading = ({
  index,
  label,
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-medium text-primary">
          {index} // {label.toUpperCase()}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
      <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
};
