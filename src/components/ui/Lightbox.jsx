import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Lightbox({ photos, index, onClose, onNavigate }) {
  const prev = useCallback(
    () => onNavigate((index - 1 + photos.length) % photos.length),
    [index, photos.length, onNavigate],
  );
  const next = useCallback(
    () => onNavigate((index + 1) % photos.length),
    [index, photos.length, onNavigate],
  );

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, prev, next]);

  const photo = photos[index];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Photo ${index + 1} of ${photos.length}`}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-cream/80 transition-colors hover:text-gold"
          aria-label="Close gallery"
        >
          <X className="h-8 w-8" />
        </button>

        {photos.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            className="absolute left-2 text-cream/80 transition-colors hover:text-gold md:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
        )}

        <motion.img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
        />

        {photos.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-2 text-cream/80 transition-colors hover:text-gold md:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        )}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-cream/60">
          {index + 1} / {photos.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
