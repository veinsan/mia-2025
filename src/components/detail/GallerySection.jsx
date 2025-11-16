"use client";

import { motion } from "framer-motion";
import GalleryMain from "@/components/gallery/GalleryMain";

export default function GallerySection({ images, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-4 flex items-center gap-2">
        📸 Galeri Foto
      </h2>
      <GalleryMain images={images} name={name} />
    </motion.div>
  );
}