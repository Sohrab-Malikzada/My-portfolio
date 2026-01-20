import { motion } from "framer-motion";
import { Brush } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Golden Hour",
    medium: "Oil on Canvas",
    year: 2024,
    dimensions: "36\" × 48\"",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    title: "Urban Solitude",
    medium: "Acrylic on Canvas",
    year: 2024,
    dimensions: "24\" × 36\"",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    title: "Abstract Emotions",
    medium: "Mixed Media",
    year: 2023,
    dimensions: "30\" × 40\"",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    title: "Morning Mist",
    medium: "Watercolor on Paper",
    year: 2023,
    dimensions: "18\" × 24\"",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    title: "Depths of Blue",
    medium: "Oil on Canvas",
    year: 2023,
    dimensions: "40\" × 30\"",
    image: "https://images.unsplash.com/photo-1545989253-02cc26577f88?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    title: "Eternal Flow",
    medium: "Acrylic on Canvas",
    year: 2022,
    dimensions: "48\" × 36\"",
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&h=1000&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export const ArtSection = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-art-muted text-art mb-6">
          <Brush className="h-4 w-4" />
          <span className="text-sm font-medium">Fine Art</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
          Gallery
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Original paintings exploring emotion, nature, and the human experience. 
          Each piece is a meditation on color, light, and form.
        </p>
      </motion.div>

      {/* Gallery Grid - Museum Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {artworks.map((artwork) => (
          <motion.article
            key={artwork.id}
            variants={itemVariants}
            className="group"
          >
            {/* Frame Container */}
            <div className="relative mb-6">
              {/* Shadow/Depth effect */}
              <div className="absolute -inset-3 bg-gradient-to-b from-transparent via-art/5 to-art/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Image Frame */}
              <div className="relative bg-card p-3 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]" />
                </div>
              </div>

              {/* Gold accent line on hover */}
              <motion.div 
                className="absolute -bottom-2 left-1/2 h-0.5 bg-art"
                initial={{ width: 0, x: "-50%" }}
                whileHover={{ width: "60%" }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Artwork Info - Museum Placard Style */}
            <div className="text-center space-y-1">
              <h3 className="font-serif text-xl font-semibold">
                {artwork.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {artwork.medium}
              </p>
              <p className="text-xs text-muted-foreground/70">
                {artwork.year} · {artwork.dimensions}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Statement */}
      <motion.div 
        variants={itemVariants}
        className="mt-24 max-w-3xl mx-auto text-center"
      >
        <blockquote className="font-serif text-2xl md:text-3xl italic text-muted-foreground leading-relaxed">
          "Art is not what you see, but what you make others see."
        </blockquote>
        <cite className="block mt-4 text-sm text-muted-foreground/70 not-italic">
          — Edgar Degas
        </cite>
      </motion.div>
    </motion.div>
  );
};
