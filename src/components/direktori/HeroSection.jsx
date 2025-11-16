"use client";

import { motion } from "framer-motion";
import { heroContainer, heroItem } from "@/lib/animations";

export default function HeroSection({ children }) {
  return (
    <motion.section
      id="top-direktori"
      initial="hidden"
      animate="visible"
      variants={heroContainer}
      className="w-full pt-0 pb-0"
    >
      <motion.div
        variants={heroItem}
        className="w-full mx-auto min-h-[420px] rounded-b-[40px] px-6 pt-24 pb-16 
                   flex flex-col items-center justify-start overflow-hidden 
                   transition-theme bg-gradient-to-b from-[#FCBB65] to-[#E45D18] 
                   dark:from-bg-warm dark:to-bg-base"
      >
        <div className="max-w-3xl text-center mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold 
                         text-[#2B1B0F] dark:text-[#FFF8F0] leading-snug tracking-tight">
            Cari Tempat Makan Favoritmu
            <br /> di <span className="text-[#C13F14]">Gelap Nyawang</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#2B1B0F]/80 dark:text-[#FFE5CC]/90">
            Mulai dari ayam bakar, warmindo, sampai kopi buat nugas. Semua ada di satu tempat.
          </p>
        </div>

        {children}
      </motion.div>
    </motion.section>
  );
}