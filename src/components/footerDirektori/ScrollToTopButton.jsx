"use client";
import { motion } from "framer-motion";
import { scrollToTop } from "./scrollToTop";

export default function ScrollToTopButton() {
  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 bg-white/25 backdrop-blur-md 
                 hover:bg-white/40 text-white p-3 rounded-full shadow-lg 
                 transition-all"
      title="Kembali ke atas"
      aria-label="Scroll to top"
    >
      ↑
    </motion.button>
  );
}