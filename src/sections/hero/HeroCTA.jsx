"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "./heroConfig";

export default function HeroCTA({ isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: ANIMATION_CONFIG.ENTRANCE.BUTTON_DURATION,
        delay: ANIMATION_CONFIG.ENTRANCE.BUTTON_DELAY,
      }}
      className="mt-10 flex justify-center"
    >
      <motion.a
        href="/direktori#top-direktori"
        whileHover={
          !isMobile
            ? { scale: 1.05, boxShadow: "0 8px 28px rgba(229, 118, 33, 0.35)" }
            : {}
        }
        whileTap={{ scale: 0.97 }}
        className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-glow focus:ring-4 focus:ring-primary/40 transition-all cursor-pointer"
      >
        Jelajahi Sekarang
      </motion.a>
    </motion.div>
  );
}