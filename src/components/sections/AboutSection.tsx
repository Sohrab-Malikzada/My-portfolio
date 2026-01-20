import { motion } from "framer-motion";
import { Code2, Palette, Brush } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-12">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground text-center mb-16">
            <p className="text-xl leading-relaxed">
              I'm a multidisciplinary creative who believes that the best work happens at the 
              intersection of technology and art. With over a decade of experience across 
              software development, graphic design, and fine art, I bring a unique perspective 
              to every project.
            </p>
            <p className="leading-relaxed">
              My journey began with a paintbrush, evolved through design studios, and 
              expanded into the world of code. This diverse background allows me to approach 
              problems holistically—whether I'm architecting a scalable application, crafting 
              a brand identity, or expressing emotion through paint.
            </p>
          </div>

          {/* Skills Overview */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <Code2 className="h-8 w-8 text-dev mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground mb-4">React, TypeScript, Node.js, PostgreSQL, Cloud Architecture</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <Palette className="h-8 w-8 text-design mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground mb-4">UI/UX, Branding, Typography, Figma, Adobe Creative Suite</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <Brush className="h-8 w-8 text-art mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">Fine Art</h3>
              <p className="text-sm text-muted-foreground mb-4">Oil, Acrylic, Watercolor, Mixed Media, Gallery Exhibitions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
