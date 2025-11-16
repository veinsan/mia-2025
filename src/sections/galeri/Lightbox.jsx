"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ANIMATION_CONFIG } from "./galeriConfig";

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) {
  const current = photos[currentIndex];
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [onClose, onNavigate]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        variants={ANIMATION_CONFIG.LIGHTBOX.backdrop}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-110"
          whileTap={{ scale: 0.95 }}
        >
          <X size={24} />
        </motion.button>

        <div className="hidden sm:block">
          {currentIndex > 0 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-110"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={28} />
            </motion.button>
          )}

          {currentIndex < photos.length - 1 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-110"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={28} />
            </motion.button>
          )}
        </div>

        <motion.div
          variants={ANIMATION_CONFIG.LIGHTBOX.content}
          initial="hidden"
          animate="show"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
        >
          {!loaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
          )}

          <img
            src={current.src}
            alt={current.text}
            className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-xl shadow-2xl"
            onLoad={() => setLoaded(true)}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-6 w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-white text-center"
          >
            <p className="font-semibold text-sm sm:text-base md:text-lg leading-relaxed mb-2">
              {current.text}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                📍 {current.location}
              </span>

              {current.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/10 px-2 sm:px-3 py-1 rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs sm:text-sm text-white/60 font-mono">
              {currentIndex + 1} / {photos.length}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs flex items-center gap-2"
        >
          <ChevronLeft size={16} />
          <span>Swipe untuk navigate</span>
          <ChevronRight size={16} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}