"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import GalleryThumbnails from "./GalleryThumbnails";
import GalleryLightbox from "./GalleryLightbox";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function GalleryMain({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { loaded, error } = useImageLoader(images[activeIndex], true);

  const activeImage = images[activeIndex];

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-4">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden 
                     shadow-xl bg-bg-soft group cursor-zoom-in"
          onClick={() => openLightbox(activeIndex)}
        >
          {!loaded && !error && (
            <div className="absolute inset-0 bg-gradient-to-r from-bg-soft via-bg-warm to-bg-soft animate-pulse" />
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-soft">
              <span className="text-6xl mb-3">📸</span>
              <p className="text-text-muted">Gambar tidak dapat dimuat</p>
            </div>
          )}

          <img
            src={activeImage}
            alt={`${name} - Photo ${activeIndex + 1}`}
            className={`w-full h-full object-cover transition-all duration-500 
                       ${loaded ? "opacity-100" : "opacity-0"}
                       group-hover:scale-105`}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            fetchPriority={activeIndex === 0 ? "high" : "auto"}
          />

          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm 
                          text-white px-3 py-2 rounded-full opacity-0 
                          group-hover:opacity-100 transition-opacity">
            <ZoomIn size={18} />
          </div>

          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm 
                          text-white px-3 py-1 rounded-full text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div>
        </motion.div>

        <GalleryThumbnails
          images={images}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        <p className="text-center text-sm text-text-muted md:hidden">
          👆 Tap foto untuk melihat ukuran penuh
        </p>
      </div>

      <GalleryLightbox
        isOpen={lightboxOpen}
        images={images}
        activeIndex={activeIndex}
        name={name}
        onClose={() => setLightboxOpen(false)}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}