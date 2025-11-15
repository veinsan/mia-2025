"use client";

import { motion } from "framer-motion";

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

export default function Banner() {
  return (
    <section className="w-full py-10 px-6 md:px-16 lg:px-24">
      <div
        className="
          relative overflow-hidden min-h-[480px]
          rounded-2xl flex items-center justify-center
          bg-[#E57621] dark:bg-[#B55610]
          text-white transition-colors duration-500
          p-10 md:p-16
        "
      >
        {/* Left Illustration */}
        <motion.img
          src="/assets/banner/left.png"
          alt=""
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            absolute -left-[120px] bottom-0
            w-[420px] sm:w-[480px] md:w-[520px] lg:w-[560px]
            object-contain pointer-events-none select-none
          "
        />

        {/* Right Illustration */}
        <motion.img
          src="/assets/banner/right.png"
          alt=""
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            absolute -right-[120px] bottom-0
            w-[420px] sm:w-[480px] md:w-[520px] lg:w-[560px]
            object-contain pointer-events-none select-none
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.h2
            {...ANIMATION_CONFIG.FADE_UP}
            whileInView={ANIMATION_CONFIG.FADE_UP.animate}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Nikmati{" "}
            <span className="text-white/95">Cita Rasa Lokal</span>
            <br className="hidden sm:block" />
            di Gelap Nyawang
          </motion.h2>

          <motion.p
            {...ANIMATION_CONFIG.FADE_UP_DELAY}
            whileInView={ANIMATION_CONFIG.FADE_UP_DELAY.animate}
            viewport={{ once: true }}
            className="
              text-base md:text-lg text-white/90 
              mb-8 max-w-3xl mx-auto leading-relaxed
            "
          >
            Temukan pengalaman kuliner yang memadukan rasa autentik, suasana
            hangat, dan keramahan khas Bandung — hanya di kawasan legendaris
            Gelap Nyawang.
          </motion.p>

          <motion.div
            {...ANIMATION_CONFIG.BUTTON_DELAY}
            whileInView={ANIMATION_CONFIG.BUTTON_DELAY.animate}
            viewport={{ once: true }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                bg-white text-[#E57621] font-semibold 
                text-base md:text-lg px-8 py-3 rounded-full
                hover:bg-white/90 transition
              "
            >
              Hubungi Kami
            </motion.a>

            <motion.a
              href="#topResto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                border border-white text-white font-semibold 
                text-base md:text-lg px-8 py-3 rounded-full
                hover:bg-white hover:text-[#E57621] transition
              "
            >
              Lihat Rekomendasi
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
