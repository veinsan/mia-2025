"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "./tentangConfig";

export default function AboutCard({ card, isMobile }) {
  return (
    <motion.article
      variants={ANIMATION_CONFIG.ITEM}
      whileHover={!isMobile ? ANIMATION_CONFIG.CARD_HOVER : undefined}
      className="relative rounded-2xl overflow-hidden shadow-card bg-bg-soft dark:bg-bg-warm group cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={card.img}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[43%] bg-gradient-to-t from-primary/90 via-primary-light/70 to-transparent dark:from-accent/90 dark:via-accent-light/70 dark:to-transparent flex flex-col justify-end p-6 backdrop-blur-[2px]">
        <motion.h3
          animate={ANIMATION_CONFIG.TEXT_GLOW}
          className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-1 tracking-tight"
        >
          {card.title}
        </motion.h3>

        <p className="text-sm sm:text-base text-white/95 leading-relaxed line-clamp-2">
          {card.desc}
        </p>

        <p className="mt-2 text-xs sm:text-sm text-white/80 font-medium">
          {card.stat}
        </p>
      </div>
    </motion.article>
  );
}