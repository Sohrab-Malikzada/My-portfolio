import { motion } from "framer-motion";
import { Code2, Palette, Brush } from "lucide-react";
import { cn } from "@/lib/utils";

export type Role = "development" | "design" | "art";

interface RoleSelectorProps {
  activeRole: Role;
  onRoleChange: (role: Role) => void;
}

const roles = [
  {
    id: "development" as Role,
    label: "Development",
    icon: Code2,
    description: "Full-Stack Web Applications",
  },
  {
    id: "design" as Role,
    label: "Design",
    icon: Palette,
    description: "Visual Identity & UI/UX",
  },
  {
    id: "art" as Role,
    label: "Art",
    icon: Brush,
    description: "Fine Art & Paintings",
  },
];

export const RoleSelector = ({ activeRole, onRoleChange }: RoleSelectorProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 p-2 rounded-lg bg-secondary/50 backdrop-blur-sm">
      {roles.map((role) => {
        const isActive = activeRole === role.id;
        const Icon = role.icon;

        return (
          <button
            key={role.id}
            onClick={() => onRoleChange(role.id)}
            className={cn(
              "relative flex items-center gap-3 px-6 py-4 rounded-md transition-all duration-300 w-full sm:w-auto",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeRole"
                className={cn(
                  "absolute inset-0 rounded-md",
                  role.id === "development" && "bg-dev-muted border border-dev/20",
                  role.id === "design" && "bg-design-muted border border-design/20",
                  role.id === "art" && "bg-art-muted border border-art/20"
                )}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">
              <Icon className={cn(
                "h-5 w-5",
                isActive && role.id === "development" && "text-dev",
                isActive && role.id === "design" && "text-design",
                isActive && role.id === "art" && "text-art"
              )} />
            </span>
            <div className="relative z-10 text-left">
              <p className="font-medium text-sm">{role.label}</p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {role.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
