"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "./galeriConfig";
import { GALERI_PHOTOS } from "./galeriData";
import useMobileDetect from "./useMobileDetect";
import useSwipeNavigation from "./useSwipeNavigation";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

export default function Galeri() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isMobile = useMobileDetect();

  const handleNavigate = useCallback(
    (direction) => {
      setLightboxIndex((prev) => {
        if (direction === "prev") return Math.max(0, prev - 1);
        return Math.min(GALERI_PHOTOS.length - 1, prev + 1);
      });
    },
    []
  );

  useSwipeNavigation({
    active: lightboxIndex !== null && isMobile,
    onPrev: () => handleNavigate("prev"),
    onNext: () => handleNavigate("next"),
  });

  return (
    <section
      id="galeri"
      className="
        w-full 
        pt-16 sm:pt-20 md:pt-24
        pb-24 sm:pb-32 md:pb-40 
        relative overflow-hidden
        bg-gradient-to-b from-bg-gold via-bg-warm to-bg-soft
        dark:from-bg-gold dark:via-bg-warm dark:to-bg-soft
        transition-colors duration-500
      "
    >
      <motion.div
        className="
          absolute top-1/4 right-1/4
          w-64 h-64 sm:w-96 sm:h-96
          bg-primary/5 rounded-full blur-3xl
        "
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={ANIMATION_CONFIG.STAGGER}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6"
        >
          <motion.p
            variants={ANIMATION_CONFIG.CARD}
            className="
              text-primary dark:text-accent
              font-semibold mb-2 sm:mb-3
              text-xs sm:text-sm 
              tracking-wider uppercase
            "
          >
            Dibalik Gelap Nyawang
          </motion.p>

          <motion.h2
            variants={ANIMATION_CONFIG.CARD}
            className="
              text-3xl sm:text-4xl md:text-5xl 
              font-extrabold 
              text-text-primary dark:text-text-secondary
              leading-tight
            "
          >
            Cerita dari{" "}
            <span className="text-primary dark:text-accent">
              Kehangatan
            </span>
          </motion.h2>

          <motion.p
            variants={ANIMATION_CONFIG.CARD}
            className="
              mt-3 sm:mt-4 
              text-sm sm:text-base md:text-lg
              text-text-muted dark:text-text-secondary/80
              max-w-2xl mx-auto
            "
          >
            Setiap sudut punya cerita. Dari selfie rame-rame sampai
            senyum penjual yang tulus.
          </motion.p>
        </motion.header>

        <motion.div
          variants={ANIMATION_CONFIG.STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid 
            grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            gap-3 sm:gap-4 md:gap-6
            px-4 sm:px-6 md:px-10 lg:px-16
            max-w-[1400px] mx-auto
          "
        >
          {GALERI_PHOTOS.map((item, i) => (
            <GalleryCard
              key={i}
              item={item}
              index={i}
              onClick={() => setLightboxIndex(i)}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={GALERI_PHOTOS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={handleNavigate}
        />
      )}

      <div
        className="
          absolute bottom-0 left-0 w-full h-24 md:h-32
          bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold
          dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold
          pointer-events-none
        "
      />
    </section>
  );
}