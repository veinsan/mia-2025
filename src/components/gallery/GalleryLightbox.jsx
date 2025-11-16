"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";

export default function GalleryLightbox({ 
  isOpen, 
  images, 
  activeIndex, 
  name, 
  onClose, 
  onPrevious, 
  onNext 
}) {
  useKeyboardNav(isOpen, onClose, onPrevious, onNext);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 
                       text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                       bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                       bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 
                          bg-white/10 backdrop-blur-sm text-white px-4 py-2 
                          rounded-full text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div>

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
              src={images[activeIndex]}
              alt={`${name} - Full view ${activeIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 
                          text-white/70 text-sm flex gap-6">
            <span className="hidden md:inline">← → Navigate</span>
            <span className="hidden md:inline">ESC Close</span>
            <span className="md:hidden">Swipe to navigate</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}