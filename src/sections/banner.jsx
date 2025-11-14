"use client";

import { motion } from "framer-motion";

/* ============================================
   ANIMATION CONFIG
   ============================================ */

const ANIMATION_CONFIG = {
  FADE_UP: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  FADE_UP_DELAY: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  BUTTON_DELAY: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.2 },
  },
};

const CONTACT_URL = "https://wa.me/6289656054453";

/* ============================================
   BANNER COMPONENT
   ============================================ */

export default function Banner() {
  return (
    <section
      id="kontak"
      className="
        relative my-20 md:my-28 mx-6 md:mx-16 lg:mx-24 overflow-hidden
        bg-gradient-to-b from-bg-gold via-accent/30 to-bg-soft
        dark:from-bg-soft dark:via-accent/20 dark:to-bg-base
        rounded-3xl shadow-card transition-colors duration-500
      "
      aria-labelledby="banner-title"
    >
      {/* Decorative Images - Left */}
      <motion.img
        src="/assets/banner/left.png"
        alt=""
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 0.8 }}
        className="
          absolute -left-16 bottom-0 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px]
          object-contain pointer-events-none select-none
        "
        aria-hidden="true"
      />

      {/* Decorative Images - Right */}
      <motion.img
        src="/assets/banner/right.png"
        alt=""
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 0.8 }}
        className="
          absolute -right-16 bottom-0 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px]
          object-contain pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          id="banner-title"
          {...ANIMATION_CONFIG.FADE_UP}
          whileInView={{ ...ANIMATION_CONFIG.FADE_UP.animate }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold text-text-primary dark:text-text-secondary
            mb-6 leading-tight
          "
        >
          Nikmati{" "}
          <span className="text-primary">Cita Rasa Lokal</span>
          <br className="hidden sm:block" />
          di <span className="text-secondary">Gelap Nyawang</span>
        </motion.h2>

        <motion.p
          {...ANIMATION_CONFIG.FADE_UP_DELAY}
          whileInView={{ ...ANIMATION_CONFIG.FADE_UP_DELAY.animate }}
          viewport={{ once: true }}
          className="
            text-base md:text-lg max-w-2xl mx-auto mb-10
            text-text-muted dark:text-text-secondary/85
            leading-relaxed tracking-wide
          "
        >
          Temukan pengalaman kuliner yang memadukan rasa autentik, suasana hangat,
          dan keramahan khas Bandung — hanya di kawasan legendaris Gelap Nyawang.
        </motion.p>

        <motion.div
          {...ANIMATION_CONFIG.BUTTON_DELAY}
          whileInView={{ ...ANIMATION_CONFIG.BUTTON_DELAY.animate }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex items-center gap-2
              bg-primary hover:bg-primary/90 text-white
              font-semibold px-8 md:px-10 py-3 md:py-4
              rounded-full text-base md:text-lg
              shadow-glow focus:ring-4 focus:ring-primary/40 focus:outline-none
              transition-all cursor-pointer
              group
            "
            aria-label="Hubungi kami melalui WhatsApp"
          >
            <span>Hubungi Kami</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:scale-110 transition-transform"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Gradient Transition */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-20 md:h-32
          bg-gradient-to-b from-transparent via-primary/25 to-secondary/40
          dark:via-accent/20 dark:to-primary/30
          pointer-events-none transition-colors duration-500
        "
        aria-hidden="true"
      />
    </section>
  );
}