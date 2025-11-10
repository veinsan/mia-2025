"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/* ANIMATION & PARALLAX CONFIGURATION */

const ANIMATION_CONFIG = {
  TYPING: {
    INTERVAL: 52, // ms per karakter
    COMPLETION_DELAY: 500, // ms sebelum sembunyiin kursor
  },
  PARALLAX: {
    BASE_SPEED: 0.08,
    TRANSLATE_MULTIPLIER: 30,
    HORIZONTAL_OFFSET: 20,
    VIEWPORT_RATIO_BASE: 0.8, // rasio dari tinggi viewport
  },
  LAYERS: {
    DURATIONS: [16, 18, 20, 17, 19, 21], // sec per loop
    OSCILLATE: {
      Y: 18,
      SCALE_MAX: 1.06,
      ROTATE_MAX: 1.2,
    },
    BRIGHTNESS: {
      MIN: 0.45,
      MAX: 0.85,
    },
    BLUR_MIN: 1,
    BLUR_MAX: 0,
  },
  ENTRANCE: {
    H1_DURATION: 1,
    P_DURATION: 1,
    P_DELAY: 0.3,
    BUTTON_DURATION: 1.2,
    BUTTON_DELAY: 0.5,
  },
  GLOW: {
    DURATION: 3,
    REPEAT: Infinity,
    EASE: "easeInOut",
  },
};

/* BACKGROUND IMAGES CONFIGURATION */

const BG_IMAGES = [
  {
    src: "/assets/hero/bg1.webp",
    style: "left-[4%] top-[6%] max-w-[520px] w-[70vw]",
  },
  {
    src: "/assets/hero/bg2.webp",
    style: "left-[30%] top-[12%] max-w-[520px] w-[70vw]",
  },
  {
    src: "/assets/hero/bg3.webp",
    style: "right-[8%] top-[8%] max-w-[520px] w-[70vw]",
  },
  {
    src: "/assets/hero/bg4.webp",
    style: "left-[10%] bottom-[8%] max-w-[520px] w-[70vw]",
  },
  {
    src: "/assets/hero/bg5.webp",
    style: "right-[20%] bottom-[10%] max-w-[520px] w-[70vw]",
  },
  {
    src: "/assets/hero/bg6.webp",
    style: "right-[4%] top-[44%] max-w-[420px] w-[60vw]",
  },
];

/* GLOW EFFECT CONFIGURATION */

const TEXT_GLOW_EFFECT = {
  textShadow: [
    "0px 0px 0px rgb(229, 118, 33)",
    "0px 0px 20px rgba(229, 118, 33, 0.6)",
    "0px 0px 0px rgb(229, 118, 33)",
  ],
};

/* HERO COMPONENT */

export default function Hero() {
  const fullText =
    "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!";

  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const layerRefs = useRef([]);

  /* SETUP: Mobile Detection */

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* SETUP: Layer Refs Callback */

  const setLayerRef = useCallback((el, index) => {
    if (el) layerRefs.current[index] = el;
  }, []);

  /* EFFECT: Typing Animation */

  useEffect(() => {
    let index = 0;
    let interval;
    let timeoutId;

    interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        timeoutId = setTimeout(
          () => setTypingDone(true),
          ANIMATION_CONFIG.TYPING.COMPLETION_DELAY
        );
      }
    }, ANIMATION_CONFIG.TYPING.INTERVAL);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullText]);

  /* EFFECT: Parallax on Scroll (RAF) */

  useEffect(() => {
    let rafId = null;

    const handleParallax = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const base = Math.min(
        window.innerHeight,
        1200 / ANIMATION_CONFIG.PARALLAX.VIEWPORT_RATIO_BASE
      );
      const visibleRatio = Math.max(0, Math.min(1, scrollY / base));

      // Ngitung dulu di luar loop biar ga ngitung ulang
      const baseTranslateY =
        -visibleRatio * ANIMATION_CONFIG.PARALLAX.TRANSLATE_MULTIPLIER;
      const baseTranslateX =
        visibleRatio * ANIMATION_CONFIG.PARALLAX.HORIZONTAL_OFFSET;

      layerRefs.current.forEach((el, i) => {
        if (!el) return;

        const speed = (i + 1) * ANIMATION_CONFIG.PARALLAX.BASE_SPEED;
        const translateY = baseTranslateY * speed;
        const translateX =
          baseTranslateX * (i % 2 === 0 ? -1 : 1);

        el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });

      if (document.visibilityState === "visible") {
        rafId = requestAnimationFrame(handleParallax);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        rafId = requestAnimationFrame(handleParallax);
      }
    };

    rafId = requestAnimationFrame(handleParallax);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  /* RENDER: Hero Section */

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center overflow-hidden min-h-screen pt-28 sm:pt-32 md:pt-40 pb-20 px-6 md:px-10 bg-[#0A0A0A] text-white"
    >
      {/* Background Layer - Decorative */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        {BG_IMAGES.map((img, i) => (
          <motion.div
            key={`layer-${i}`}
            ref={(el) => setLayerRef(el, i)}
            className={`absolute rounded-2xl overflow-hidden shadow-2xl ${img.style}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: [0.9, 1, 0.9],
              y: [0, i % 2 === 0 ? -18 : 18, 0],
              scale: [1, ANIMATION_CONFIG.LAYERS.OSCILLATE.SCALE_MAX, 1],
              rotate: [
                0,
                i % 2 === 0
                  ? ANIMATION_CONFIG.LAYERS.OSCILLATE.ROTATE_MAX
                  : -ANIMATION_CONFIG.LAYERS.OSCILLATE.ROTATE_MAX,
                0,
              ],
            }}
            transition={{
              duration: ANIMATION_CONFIG.LAYERS.DURATIONS[i],
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.img
              src={img.src}
              alt=""
              loading={i === 0 || i === 1 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover"
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MIN}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MIN}px)`,
                  `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MAX}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MAX}px)`,
                  `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MIN}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MIN}px)`,
                ],
              }}
              transition={{
                duration:
                  ANIMATION_CONFIG.LAYERS.DURATIONS[i] +
                  6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 px-3 sm:px-6">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_CONFIG.ENTRANCE.H1_DURATION }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight"
        >
          Ganyang Lapar di{" "}
          <motion.span
            className="text-primary inline-block"
            animate={TEXT_GLOW_EFFECT}
            transition={ANIMATION_CONFIG.GLOW}
          >
            Gelap Nyawang
          </motion.span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: ANIMATION_CONFIG.ENTRANCE.P_DURATION,
            delay: ANIMATION_CONFIG.ENTRANCE.P_DELAY,
          }}
          className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-light tracking-wide leading-relaxed text-white/90"
        >
          {displayText}
          <motion.span
            animate={
              typingDone
                ? { opacity: 0 }
                : { opacity: [1, 0, 1] }
            }
            transition={
              typingDone
                ? { duration: 0.4, ease: "easeInOut" }
                : {
                    duration: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="ml-1 text-white/80"
            aria-hidden="true"
          >
            |
          </motion.span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.ENTRANCE.BUTTON_DURATION,
            delay: ANIMATION_CONFIG.ENTRANCE.BUTTON_DELAY,
          }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="/direktori"
            whileHover={
              !isMobile
                ? {
                    scale: 1.05,
                    boxShadow: "0 8px 28px rgba(229, 118, 33, 0.35)",
                  }
                : {}
            }
            whileTap={{ scale: 0.97 }}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-glow focus:ring-4 focus:ring-primary/40 focus:outline-none transition-all cursor-pointer"
            aria-label="Explore Gelap Nyawang culinary directory"
          >
            Jelajahi Sekarang
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Fade Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
        aria-hidden="true"
        role="presentation"
      />
    </section>
  );
}