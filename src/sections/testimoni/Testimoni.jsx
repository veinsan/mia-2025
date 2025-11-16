"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMarqueeStyles from "./useMarqueeStyles";
import TestimoniBlobs from "./TestimoniBlobs";
import MarqueeRow from "./MarqueeRow";
import StatsSection from "./StatsSection";
import { TESTIMONIALS_TOP, TESTIMONIALS_BOTTOM, ANIMATION_CONFIG } from "./testimoniConfig";

export default function Testimoni() {
  useMarqueeStyles();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="testimoni" className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(229,118,33,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(252,187,101,0.15) 0%, transparent 50%)" }} aria-hidden="true" />

      <TestimoniBlobs />

      <div className="relative z-10">
        <motion.header variants={ANIMATION_CONFIG.FADE_UP} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="text-center mb-8 sm:mb-12 px-4">
          <motion.p className="text-primary dark:text-accent font-semibold mb-2 tracking-wider uppercase text-xs sm:text-sm" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
            Apa Kata Mereka?
          </motion.p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-text-secondary leading-tight">
            Testimoni dari <span className="text-primary dark:text-accent">Mahasiswa</span> ITB
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-text-muted dark:text-text-secondary/80 max-w-2xl mx-auto">
            Dengar langsung pengalaman mereka yang sudah jelajahi kuliner Gelap Nyawang
          </p>
        </motion.header>

        <StatsSection />

        <motion.div variants={ANIMATION_CONFIG.FADE_UP} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-8 sm:space-y-10">
          <MarqueeRow testimonials={TESTIMONIALS_TOP} direction="left" isMobile={isMobile} />
          <MarqueeRow testimonials={TESTIMONIALS_BOTTOM} direction="right" isMobile={isMobile} />
        </motion.div>

        <motion.div variants={ANIMATION_CONFIG.FADE_UP} initial="hidden" whileInView="show" viewport={{ once: true }} className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-16 sm:mt-20" aria-hidden="true" />
      </div>
    </section>
  );
}