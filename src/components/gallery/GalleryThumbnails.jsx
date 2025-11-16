"use client";

import { motion } from "framer-motion";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function GalleryThumbnails({ images, activeIndex, onSelect }) {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 scroll-smooth"
         style={{ scrollSnapType: "x mandatory" }}>
      {images.map((img, index) => (
        <ThumbnailItem
          key={index}
          img={img}
          index={index}
          isActive={index === activeIndex}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function ThumbnailItem({ img, index, isActive, onSelect }) {
  const { loaded } = useImageLoader(img, index < 6);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(index)}
      className={`relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden 
                 cursor-pointer shadow-md transition-all ${
                   isActive
                     ? "ring-4 ring-primary"
                     : "opacity-70 hover:opacity-100"
                 }`}
      style={{ scrollSnapAlign: "start" }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-bg-soft animate-pulse" />
      )}

      <img
        src={img}
        alt={`Thumbnail ${index + 1}`}
        className={`w-full h-full object-cover transition-opacity ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
    </motion.div>
  );
}