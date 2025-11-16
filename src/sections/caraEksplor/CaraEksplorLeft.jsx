"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "./caraEksplorConfig";

export default function CaraEksplorLeft() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={ANIMATION_CONFIG.FADE_UP}
      className="flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 relative z-10"
    >
      <motion.div
        className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 lg:mb-10 leading-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ❝
      </motion.div>

      <motion.p
        variants={ANIMATION_CONFIG.FADE_UP}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-semibold text-text-primary dark:text-text-secondary max-w-full sm:max-w-xl lg:max-w-2xl"
      >
        Makan di Gelap Nyawang bukan cuma soal rasa.{" "}
        <span className="text-primary">Ini soal suasana malam, obrolan, dan cerita yang berulang.</span>
      </motion.p>

      <motion.img
        src="/assets/black.png"
        alt="Gelap Nyawang Logo"
        className="w-16 sm:w-20 md:w-24 lg:w-28 mt-8 sm:mt-10 lg:mt-16 opacity-80 dark:hidden"
        variants={ANIMATION_CONFIG.FADE_UP}
        loading="lazy"
      />

      <motion.img
        src="/assets/logo.png"
        alt="Gelap Nyawang Logo Dark Mode"
        className="w-16 sm:w-20 md:w-24 lg:w-28 mt-8 sm:mt-10 lg:mt-16 opacity-80 hidden dark:block"
        variants={ANIMATION_CONFIG.FADE_UP}
        loading="lazy"
      />
    </motion.div>
  );
}