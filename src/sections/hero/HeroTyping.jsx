"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "./heroConfig";

export default function HeroTyping({ displayText, typingDone }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: ANIMATION_CONFIG.ENTRANCE.P_DURATION,
        delay: ANIMATION_CONFIG.ENTRANCE.P_DELAY,
      }}
      className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-light tracking-wide leading-relaxed text-white/90"
    >
      {displayText}
      <motion.span
        animate={typingDone ? { opacity: 0 } : { opacity: [1, 0, 1] }}
        transition={
          typingDone
            ? { duration: 0.4 }
            : { duration: 0.7, repeat: Infinity }
        }
        className="ml-1 text-white/80"
      >
        |
      </motion.span>
    </motion.p>
  );
}