"use client";

import { motion } from "framer-motion";

export default function LocationHeader({ distance }) {
  return (
    <header className="relative z-10 text-center pt-20 md:pt-24 mb-10 md:mb-12">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm"
      >
        Lokasi Kami
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary dark:text-text-secondary"
      >
        Kunjungi <span className="text-primary">Gelap Nyawang</span>
      </motion.h2>

      {distance && (
        <p className="mt-2 text-sm text-text-muted dark:text-white/70">
          📍 {distance.toFixed(1)} km dari lokasi Anda
        </p>
      )}
    </header>
  );
}