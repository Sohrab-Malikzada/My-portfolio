import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RoleSelector, Role } from "./RoleSelector";
import { DevelopmentSection } from "./DevelopmentSection";
import { DesignSection } from "./DesignSection";
import { ArtSection } from "./ArtSection";

export const WorkSection = () => {
  const [activeRole, setActiveRole] = useState<Role>("development");

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Role Selector */}
        <div className="flex justify-center mb-16">
          <RoleSelector activeRole={activeRole} onRoleChange={setActiveRole} />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeRole === "development" && <DevelopmentSection />}
            {activeRole === "design" && <DesignSection />}
            {activeRole === "art" && <ArtSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
