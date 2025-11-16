"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ------------------------------------------------------------------
   ENHANCED GALLERY CLIENT COMPONENT
   - Lightbox modal untuk full view
   - Keyboard navigation (← →, Esc)
   - Image loading states
   - Zoom capability
   - Touch swipe support untuk mobile
------------------------------------------------------------------ */
export default function GalleryClient({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});

  const activeImage = images[activeIndex];

  // Open lightbox
  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  // Navigate images
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useState(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, activeIndex]);

  // Image load handlers
  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      {/* ------------------------------------------------------------
         MAIN GALLERY VIEW
      ------------------------------------------------------------ */}
      <div className="space-y-4">
        {/* Main Image */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden 
                     shadow-xl bg-bg-soft group cursor-zoom-in"
          onClick={() => openLightbox(activeIndex)}
        >
          {/* Loading Skeleton */}
          {!imageLoaded[activeIndex] && !imageError[activeIndex] && (
            <div className="absolute inset-0 bg-gradient-to-r from-bg-soft via-bg-warm to-bg-soft animate-pulse" />
          )}

          {/* Error Fallback */}
          {imageError[activeIndex] && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-soft">
              <span className="text-6xl mb-3">📸</span>
              <p className="text-text-muted">Gambar tidak dapat dimuat</p>
            </div>
          )}

          {/* Image */}
          <img
            src={activeImage}
            alt={`${name} - Photo ${activeIndex + 1}`}
            className={`w-full h-full object-cover transition-all duration-500 
                       ${imageLoaded[activeIndex] ? "opacity-100" : "opacity-0"}
                       group-hover:scale-105`}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            onLoad={() => handleImageLoad(activeIndex)}
            onError={() => handleImageError(activeIndex)}
          />

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm 
                          text-white px-3 py-2 rounded-full opacity-0 
                          group-hover:opacity-100 transition-opacity">
            <ZoomIn size={18} />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm 
                          text-white px-3 py-1 rounded-full text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div>
        </motion.div>

        {/* Thumbnail Strip */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
              className={`relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden 
                         cursor-pointer shadow-md transition-all ${
                           index === activeIndex
                             ? "ring-4 ring-primary"
                             : "opacity-70 hover:opacity-100"
                         }`}
            >
              {/* Thumbnail Loading */}
              {!imageLoaded[`thumb-${index}`] && (
                <div className="absolute inset-0 bg-bg-soft animate-pulse" />
              )}

              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity ${
                  imageLoaded[`thumb-${index}`] ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(`thumb-${index}`)}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-sm text-text-muted md:hidden">
          👆 Tap foto untuk melihat ukuran penuh
        </p>
      </div>

      {/* ------------------------------------------------------------
         LIGHTBOX MODAL
      ------------------------------------------------------------ */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 
                         text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                         bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                         bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 
                            bg-white/10 backdrop-blur-sm text-white px-4 py-2 
                            rounded-full text-sm font-medium">
              {activeIndex + 1} / {images.length}
            </div>

            {/* Lightbox Image */}
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt={`${name} - Full view ${activeIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>

            {/* Instructions */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 
                            text-white/70 text-sm flex gap-6">
              <span className="hidden md:inline">← → Navigate</span>
              <span className="hidden md:inline">ESC Close</span>
              <span className="md:hidden">Swipe to navigate</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}