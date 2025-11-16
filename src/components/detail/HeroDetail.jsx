"use client";

import { motion } from "framer-motion";

export default function HeroDetail({ umkm }) {
  return (
    <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden">
      <div className="absolute inset-0 pt-16 md:pt-20">
        <img
          src={umkm.img}
          alt={umkm.name}
          className="w-full h-full object-cover brightness-75"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8 md:pb-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold uppercase tracking-wide">
              {umkm.category}
            </span>
            
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/90">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-bold text-gray-900">{umkm.rating}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-3 leading-tight">
            {umkm.name}
          </h1>

          <p className="text-white/95 text-base md:text-xl drop-shadow-lg max-w-2xl">
            {umkm.short}
          </p>

          <p className="text-white/90 text-lg md:text-xl font-semibold mt-3">
            💰 {umkm.rangeHarga}
          </p>
        </div>
      </motion.div>
    </section>
  );
}