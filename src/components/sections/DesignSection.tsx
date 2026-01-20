import { motion } from "framer-motion";
import { Palette, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const designProjects = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop",
    tools: ["Figma", "Illustrator"],
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "Fintech App UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tools: ["Figma", "Protopie"],
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Music Festival Poster",
    category: "Print",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    tools: ["Photoshop", "Illustrator"],
    span: "col-span-1",
  },
  {
    id: 4,
    title: "E-Commerce Redesign",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tools: ["Figma", "After Effects"],
    span: "col-span-2",
  },
  {
    id: 5,
    title: "Organic Food Packaging",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=800&fit=crop",
    tools: ["Illustrator", "Dimension"],
    span: "col-span-1 row-span-2",
  },
  {
    id: 6,
    title: "Tech Startup Logo",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=400&fit=crop",
    tools: ["Illustrator"],
    span: "col-span-1",
  },
  {
    id: 7,
    title: "Magazine Layout",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    tools: ["InDesign", "Photoshop"],
    span: "col-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const DesignSection = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-design-muted text-design mb-6">
          <Palette className="h-4 w-4" />
          <span className="text-sm font-medium">Design</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
          Visual Works
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Crafting memorable visual experiences through branding, user interfaces, 
          and print design. Every project tells a story.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
        {designProjects.map((project) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-xl cursor-pointer ${project.span}`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <Badge className="w-fit mb-3 bg-design text-design-foreground">
                {project.category}
              </Badge>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-design/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
              <ExternalLink className="h-4 w-4 text-design-foreground" />
            </div>

            {/* Border accent on hover */}
            <div className="absolute inset-0 border-2 border-design rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};
