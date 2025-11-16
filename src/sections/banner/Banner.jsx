"use client";

import { motion } from "framer-motion";
import DecorativeImage from "./DecorativeImage";

export default function Banner() {
  return (
    <section
      className="
        w-full pt-6 pb-32 md:pb-40 px-10 
        bg-bg-gold dark:bg-bg-gold 
        relative overflow-hidden
      "
    >
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 
          bg-primary text-white 
          rounded-2xl p-10 md:p-16 
          overflow-hidden 
          min-h-[400px] md:min-h-[500px]
          flex items-center justify-center
        "
      >
        <DecorativeImage src="/assets/banner/left.png" side="left" />
        <DecorativeImage src="/assets/banner/right.png" side="right" />

        <div className="relative z-20 text-center w-full max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="
              text-sm bg-white/20 backdrop-blur-sm 
              px-4 py-2 rounded-full inline-block 
              mb-5 font-medium
            "
          >
            🔥 10+ UMKM baru ditambahkan minggu ini!
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Nikmati Rekomendasi Kuliner  
            <br />
            di <span className="text-white/95">Gelap Nyawang</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="
              text-base md:text-xl 
              text-white/90 mb-8 
              max-w-4xl mx-auto leading-relaxed
            "
          >
            Cari tempat makan yang pas, lihat detail UMKM, dan temukan suasana
            khas Gelap Nyawang yang nggak bakal lu temuin di tempat lain.
          </motion.p>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="/direktori"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                inline-block bg-white text-primary 
                font-semibold text-base md:text-lg 
                px-8 py-3 rounded-full 
                hover:bg-white/90 transition-colors
              "
            >
              Lihat Direktori
            </motion.a>

            <motion.a
              href="#topResto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                inline-block bg-white/20 text-white 
                font-semibold text-base md:text-lg 
                px-8 py-3 rounded-full 
                backdrop-blur-sm
                hover:bg-white/30 transition-colors
              "
            >
              Lihat Top 5 Pilihan
            </motion.a>
          </div>
        </div>
      </motion.article>

      <div
        className="
          absolute bottom-0 left-0 w-full 
          h-40 md:h-56 
          bg-gradient-to-b 
          from-transparent via-bg-warm/70 to-bg-gold 
          dark:via-bg-warm/70 dark:to-bg-gold 
          pointer-events-none z-0
        "
        aria-hidden="true"
      />
    </section>
  );
}