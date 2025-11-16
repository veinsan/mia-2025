"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "./tentangConfig";

export default function TentangHeading({ controls }) {
  return (
    <motion.div
      variants={ANIMATION_CONFIG.CONTAINER}
      initial="hidden"
      animate={controls}
      className="text-center max-w-3xl mx-auto mb-10"
    >
      <motion.span
        variants={ANIMATION_CONFIG.ITEM}
        className="inline-block text-primary font-semibold text-sm sm:text-base tracking-wider uppercase mb-3"
      >
        Keunggulan Kami
      </motion.span>

      <motion.h2
        variants={ANIMATION_CONFIG.ITEM}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-3"
      >
        Kenapa Makan{" "}
        <motion.span animate={ANIMATION_CONFIG.TEXT_GLOW} className="text-primary inline-block">
          di Gelap Nyawang?
        </motion.span>
      </motion.h2>

      <motion.p
        variants={ANIMATION_CONFIG.ITEM}
        className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto"
      >
        Tiap sudut Gelap Nyawang punya cerita: dari resep keluarga,
        inovasi anak muda Bandung, sampai rasa hangat yang susah dilupain.
      </motion.p>
    </motion.div>
  );
}