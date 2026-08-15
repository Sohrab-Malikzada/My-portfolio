import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageLightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export const ImageLightbox = ({ src, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-xl border border-border bg-card p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-[95vw] rounded-xl border border-border shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
