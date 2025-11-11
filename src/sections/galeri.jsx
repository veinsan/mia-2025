"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ============================================
   BALIK DAPUR STORIES DATA
   ============================================ */

const GALERI_PHOTOS = [
  {
    src: "/assets/galeri/1.jpeg",
    caption: "Jawa Tidur",
  },
  {
    src: "/assets/galeri/2.jpeg",
    caption: "Orkay Tidur",
  },
  {
    src: "/assets/galeri/3.jpeg",
    caption: "Cepak Tidur",
  },
  {
    src: "/assets/galeri/4.jpeg",
    caption: "Galfish Tidur",
  },
  {
    src: "/assets/galeri/5.jpeg",
    caption: "Kadies Tidur",
  },
  {
    src: "/assets/galeri/6.jpeg",
    caption: "Irgay Tidur",
  },
];

/* ============================================
   ANIMATION CONFIGURATION
   ============================================ */

const ANIMATION_CONFIG = {
  CARD: {
    DURATION: 0.5,
    SCALE: 1.05,
  },
  OVERLAY: {
    DURATION: 0.4,
  },
  TEXT: {
    DURATION: 0.5,
    DELAY: 0.05,
  },
};

/* ============================================
   REDUCED MOTION DETECTION
   ============================================ */

const prefersReducedMotion = () => {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
};

/* ============================================
   STORY CARD COMPONENT
   ============================================ */

const StoryCard = ({ story, index, reduceMotion }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  if (imageError) {
    return (
      <div
        className="
          relative overflow-hidden rounded-xl shadow-card
          bg-bg-base dark:bg-bg-soft
          flex items-center justify-center h-full
        "
      >
        <p className="text-text-muted dark:text-text-secondary/50 text-sm">
          Image not available
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0.1 : 0.6,
        delay: index * 0.05,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="
        relative overflow-hidden rounded-xl shadow-card group
        cursor-pointer bg-bg-base dark:bg-bg-soft h-full
        will-change-transform
      "
    >
      {/* Image */}
      <Image
        src={story.src}
        alt={`Cerita ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
        loading="lazy"
        onError={() => setImageError(true)}
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0.1 : ANIMATION_CONFIG.OVERLAY.DURATION,
        }}
        className="
          absolute inset-0 flex flex-col justify-center items-center
          bg-black/60 dark:bg-black/70 backdrop-blur-sm p-4 md:p-6
        "
      >
        {/* Story Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={
            isHovering ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          transition={{
            duration: reduceMotion ? 0.1 : ANIMATION_CONFIG.TEXT.DURATION,
            delay: ANIMATION_CONFIG.TEXT.DELAY,
          }}
          className="text-white text-center text-sm md:text-base font-medium leading-relaxed"
          role="caption"
        >
          {story.story}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

/* ============================================
   MAIN BALIK DAPUR COMPONENT
   ============================================ */

export default function BafikDapur() {
  const [reduceMotion, setReduceMotion] = useState(false);

  /* Reduced motion preference */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e) => setReduceMotion(e.matches);

    handleChange({ matches: mq.matches });

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      id="balikDapur"
      className="
        relative py-20 md:py-28 overflow-hidden
        bg-gradient-to-b from-bg-warm via-bg-gold to-bg-soft
        dark:from-bg-warm dark:via-bg-gold dark:to-bg-soft
        transition-colors duration-500
      "
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(252, 187, 101, 0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0.1 : 0.6,
          }}
          className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm"
        >
          Dibalik Dapur
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0.1 : 0.8,
            delay: 0.1,
          }}
          className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-secondary mb-12"
        >
          Cerita dari{" "}
          <span className="text-primary">Dapur Gelap Nyawang</span>
        </motion.h2>

        {/* Gallery Grid - 2x3 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {GALERI_PHOTOS .map((item, index) => (
            <StoryCard
              key={`story-${index}`}
              story={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}