import * as icons from "simple-icons";
import { Database } from "lucide-react";

type SimpleIcon = { title: string; path: string; hex: string };

const registry = icons as unknown as Record<string, SimpleIcon>;

export const getTechIcon = (slug: string | null): SimpleIcon | null => {
  if (!slug) return null;
  return registry[`si${slug}`] ?? null;
};

interface TechIconProps {
  slug: string | null;
  name: string;
  className?: string;
  /** Render in brand color instead of currentColor */
  colored?: boolean;
}

export const TechIcon = ({ slug, name, className, colored }: TechIconProps) => {
  const icon = getTechIcon(slug);

  if (!icon) {
    return <Database className={className} aria-hidden />;
  }

  return (
    <svg
      role="img"
      aria-label={name}
      viewBox="0 0 24 24"
      className={className}
      fill={colored ? `#${icon.hex}` : "currentColor"}
    >
      <path d={icon.path} />
    </svg>
  );
};
