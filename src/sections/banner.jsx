"use client";

import { motion } from "framer-motion";

export default function BannerDirektori() {
  return (
    <section className="w-full pt-6 pb-32 md:pb-40 px-10 bg-bg-gold dark:bg-bg-gold relative overflow-hidden">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-primary text-white rounded-2xl p-10 md:p-16 overflow-hidden min-h-[500px] flex items-center justify-center"
      >
        <motion.img
          src="/assets/banner/left.png"
          alt=""
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -left-[100px] bottom-0 w-[460px] md:w-[500px] lg:w-[540px] object-contain pointer-events-none"
          aria-hidden="true"
        />

        <motion.img
          src="/assets/banner/right.png"
          alt=""
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -right-[100px] bottom-0 w-[460px] md:w-[500px] lg:w-[540px] object-contain pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-20 text-center w-full max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Nikmati Rekomendasi Kuliner  
            <br />di <span className="text-white/95">Gelap Nyawang</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-base md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Cari tempat makan yang pas, lihat detail UMKM, dan temukan suasana 
            khas Gelap Nyawang yang nggak bakal lu temuin di tempat lain.
          </motion.p>

          <motion.a
            href="/direktori"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="inline-block bg-white text-primary font-semibold text-base md:text-lg px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Lihat Direktori
          </motion.a>
        </div>
      </motion.article>

      <div
        className="absolute bottom-0 left-0 w-full h-40 md:h-56 bg-gradient-to-b from-transparent via-bg-warm/70 to-bg-gold dark:via-bg-warm/70 dark:to-bg-gold pointer-events-none z-0"
        aria-hidden="true"
      />
    </section>
  );
}