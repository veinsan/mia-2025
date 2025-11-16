"use client";

import { motion } from "framer-motion";
import { TEXT_GLOW_EFFECT, ANIMATION_CONFIG } from "./heroConfig";

export default function HeroHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONFIG.ENTRANCE.H1_DURATION }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight"
    >
      Ganyang Lapar di{" "}
      <motion.span
        className="text-primary inline-block"
        animate={TEXT_GLOW_EFFECT}
        transition={ANIMATION_CONFIG.GLOW}
      >
        Gelap Nyawang
      </motion.span>
    </motion.h1>
  );
}