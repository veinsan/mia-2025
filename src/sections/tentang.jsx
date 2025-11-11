"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/* ============================================
   ANIMATION CONFIGURATION
   ============================================ */

const ANIMATION_CONFIG = {
  CONTAINER: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  },
  ITEM: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  },
  WAVE: {
    DURATION: 12,
  },
  GLOW_TEXT: {
    DURATION: 3,
    REPEAT: Infinity,
    EASE: "easeInOut",
  },
  BLOB: {
    DURATIONS: [6, 7, 6.5],
  },
  CARD_HOVER: {
    SCALE: 1.04,
    TRANSLATE_Y: -6,
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
   CARD & VISUAL CONFIGURATION
   ============================================ */

const CARDS_DATA = [
  {
    id: "rumahan",
    title: "Rasa Autentik",
    desc: "Setiap sajian di Gelap Nyawang dibuat dengan cita rasa rumahan khas Bandung — sederhana tapi ngangenin.",
    img: "/assets/about/t1.jpg",
    badgeLabel: "Rasa",
  },
  {
    id: "lokal",
    title: "Dari Komunitas Lokal",
    desc: "UMKM di sekitar Gelap Nyawang tumbuh bareng, mendukung satu sama lain demi kuliner yang tetap hidup dan autentik.",
    img: "/assets/about/t2.jpg",
    badgeLabel: "Komunitas",
  },
  {
    id: "cepat",
    title: "Cepat & Nyaman",
    desc: "Mau nongkrong, nugas, atau sekadar makan cepat — suasana di sini selalu bikin betah dan produktif.",
    img: "/assets/about/t3.jpg",
    badgeLabel: "Praktis",
  },
];

const IMAGE_EFFECT = {
  brightness: 0.75,
  hoverBrightness: 1.1,
};

const BADGE_COLORS = [
  "bg-primary dark:bg-accent",
  "bg-secondary dark:bg-secondary/80",
  "bg-accent/80 dark:bg-accent",
];

const CARD_SHADOW = [
  "0 6px 20px rgba(229, 118, 33, 0.18)",
  "0 6px 20px rgba(193, 63, 20, 0.14)",
  "0 6px 20px rgba(252, 187, 101, 0.14)",
];

const HOVER_SHADOW =
  "0 6px 16px rgba(0, 0, 0, 0.12), 0 0 0 2px rgba(229, 118, 33, 0.18)";

/* ============================================
   CARD COMPONENT
   ============================================ */

const AboutCard = ({ card, index, isMobile, onHoverChange }) => {
  const reduceMotion = prefersReducedMotion();

  return (
    <motion.article
      variants={ANIMATION_CONFIG.ITEM}
      whileHover={
        !isMobile
          ? {
              scale: ANIMATION_CONFIG.CARD_HOVER.SCALE,
              translateY: -ANIMATION_CONFIG.CARD_HOVER.TRANSLATE_Y,
              boxShadow: HOVER_SHADOW,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 16,
        ...(reduceMotion && { duration: 0.2 }),
      }}
      onHoverStart={() => !isMobile && onHoverChange(index, true)}
      onHoverEnd={() => !isMobile && onHoverChange(index, false)}
      className="relative rounded-3xl overflow-hidden shadow-xl bg-bg-base dark:bg-bg-soft transition-all duration-300 group"
    >
      {/* Background Image */}
      <div
        className="w-full h-[320px] sm:h-[360px] md:h-[420px] bg-cover bg-center transition-all duration-300 group-hover:brightness-110"
        style={{
          backgroundImage: `url(${card.img})`,
          filter: `brightness(${IMAGE_EFFECT.brightness})`,
        }}
        role="img"
        aria-label={`${card.title} image`}
      />

      {/* Content Overlay */}
      <div className="absolute left-6 right-6 bottom-6 p-4 rounded-xl bg-gradient-to-t from-black/85 to-transparent backdrop-blur-sm">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
          {card.title}
        </h3>
        <p className="text-sm md:text-base text-gray-200 mb-3 line-clamp-4">
          {card.desc}
        </p>

        {/* Badge */}
        <motion.div
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-white ${BADGE_COLORS[index]}`}
          style={{
            boxShadow: CARD_SHADOW[index],
          }}
          whileHover={!isMobile ? { scale: 1.08 } : {}}
          transition={{
            duration: 0.2,
            ...(reduceMotion && { duration: 0.1 }),
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/90" />
          <span>{card.badgeLabel}</span>
        </motion.div>
      </div>
    </motion.article>
  );
};

/* ============================================
   MAIN TENTANG COMPONENT
   ============================================ */

export default function Tentang() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.25, once: false });
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  /* Mobile detection */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Reduced motion preference */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    const handleChange = (e) => setReduceMotion(e.matches);
    
    // Set initial value via callback to avoid cascading
    handleChange({ matches: mq.matches });
    
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  /* Animation trigger on scroll */
  useEffect(() => {
    if (reduceMotion) {
      controls.set("visible");
    } else if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls, reduceMotion]);

  return (
    <section
      id="tentang"
      ref={ref}
      className="relative overflow-hidden transition-colors duration-500"
      aria-labelledby="tentang-title"
    >
      {/* Wave SVG Top */}
      <div className="absolute inset-x-0 -top-[2px] pointer-events-none z-20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-18%", "0%"] }}
          transition={{
            duration: reduceMotion
              ? 0.1
              : ANIMATION_CONFIG.WAVE.DURATION,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[200%]"
        >
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-[80px]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="waveGradLight" x1="0" x2="1">
                <stop offset="0%" stopColor="#E7C49D" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#F5B66E" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FFF3E0" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="waveGradDark" x1="0" x2="1">
                <stop offset="0%" stopColor="#3A0E00" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#B54B22" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F9B04E" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 C200,80 400,0 720,40 C1040,80 1240,0 1440,40 L1440,0 L0,0 Z"
              className="fill-[url(#waveGradLight)] dark:fill-[url(#waveGradDark)]"
            />
          </svg>
        </motion.div>
      </div>

      {/* Ambient Blobs - Decorative */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: reduceMotion
              ? 0.1
              : ANIMATION_CONFIG.BLOB.DURATIONS[0],
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-6 top-10 w-36 h-36 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{
            duration: reduceMotion
              ? 0.1
              : ANIMATION_CONFIG.BLOB.DURATIONS[1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-8 top-24 w-44 h-44 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [5, -7, 5] }}
          transition={{
            duration: reduceMotion
              ? 0.1
              : ANIMATION_CONFIG.BLOB.DURATIONS[2],
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-b from-bg-base via-bg-soft to-bg-warm dark:from-bg-base dark:via-bg-soft dark:to-bg-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          {/* Header Section */}
          <motion.div
            variants={ANIMATION_CONFIG.CONTAINER}
            initial="hidden"
            animate={controls}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h4
              variants={ANIMATION_CONFIG.ITEM}
              className="text-primary font-semibold tracking-wide mb-2"
            >
              Keunggulan Kami
            </motion.h4>

            <motion.h2
              variants={ANIMATION_CONFIG.ITEM}
              id="tentang-title"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-secondary leading-tight"
            >
              Kenapa Makan{" "}
              <motion.span
                className="text-primary"
                animate={{
                  textShadow: [
                    "0 0 0 rgb(229, 118, 33)",
                    "0 0 10px rgba(229, 118, 33, 0.4)",
                    "0 0 0 rgb(229, 118, 33)",
                  ],
                }}
                transition={{
                  duration: reduceMotion
                    ? 0.1
                    : ANIMATION_CONFIG.GLOW_TEXT.DURATION,
                  repeat: ANIMATION_CONFIG.GLOW_TEXT.REPEAT,
                  ease: ANIMATION_CONFIG.GLOW_TEXT.EASE,
                }}
              >
                di Gelap Nyawang?
              </motion.span>
            </motion.h2>

            <motion.p
              variants={ANIMATION_CONFIG.ITEM}
              className="mt-4 text-base md:text-lg text-text-muted dark:text-text-secondary/80 leading-relaxed"
            >
              Di kawasan Gelap Nyawang, setiap warung dan kafe punya kisah unik —
              dari resep turun-temurun sampai inovasi anak muda Bandung yang penuh semangat.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={ANIMATION_CONFIG.CONTAINER}
            initial="hidden"
            animate={controls}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {CARDS_DATA.map((card, idx) => (
              <AboutCard
                key={card.id}
                card={card}
                index={idx}
                isMobile={isMobile}
                onHoverChange={setHoveredCardIndex}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}