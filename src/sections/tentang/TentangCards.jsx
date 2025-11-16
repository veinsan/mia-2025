"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { ANIMATION_CONFIG, CARDS_DATA } from "./tentangConfig";

export default function TentangCards({ controls, isMobile }) {
  return (
    <motion.div
      variants={ANIMATION_CONFIG.CONTAINER}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {CARDS_DATA.map((card) => (
        <AboutCard key={card.id} card={card} isMobile={isMobile} />
      ))}
    </motion.div>
  );
}