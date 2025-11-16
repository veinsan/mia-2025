"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Info, MapPin, CheckCircle2 } from "lucide-react";

/* =========================================================
   ANIMATION CONFIG - Optimized untuk smooth 60fps
   ========================================================= */
const ANIMATION_CONFIG = {
  FADE_UP: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  },
  STAGGER: {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.12,
        delayChildren: 0.1 
      } 
    },
  },
  STEP_ITEM: {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      },
    },
  },
  CHECKMARK: {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      },
    },
  },
};

/* =========================================================
   STEPS DATA - Enhanced with better copy
   ========================================================= */
const STEPS = [
  {
    number: 1,
    icon: Search,
    title: "Jelajahi Rekomendasi",
    subtitle: "Filter budget & suasana",
    tip: "💡 Pakai search bar cari makanan spesifik",
    color: "bg-orange-500",
  },
  {
    number: 2,
    icon: Info,
    title: "Lihat Detail UMKM",
    subtitle: "Cek menu, harga & review",
    tip: "💡 Scroll bawah lihat jam buka & lokasi",
    color: "bg-orange-600",
  },
  {
    number: 3,
    icon: MapPin,
    title: "Datang ke Lokasi",
    subtitle: "Navigate via Maps",
    tip: "💡 Aktifkan GPS untuk rute akurat",
    color: "bg-orange-700",
  },
];

/* =========================================================
   STEP ITEM COMPONENT - Fully Responsive
   ========================================================= */
const StepItem = ({ step, completed, toggle, isMobile }) => {
  const Icon = step.icon;

  return (
    <motion.article
      variants={ANIMATION_CONFIG.STEP_ITEM}
      onClick={() => toggle(step.number)}
      className={`
        relative cursor-pointer select-none
        transition-all duration-300
        ${completed ? "opacity-50" : "opacity-100"}
      `}
      whileTap={{ scale: 0.98 }}
      aria-label={`Step ${step.number}: ${step.title}`}
    >
      {/* Number Badge - Responsive Size */}
      <div className="absolute -left-3 sm:-left-4 md:-left-5 top-4 sm:top-5 md:top-6 z-10">
        <motion.div
          className={`
            ${step.color} text-white font-extrabold
            w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
            rounded-full flex items-center justify-center
            text-xs sm:text-sm md:text-lg
            shadow-lg ring-2 ring-white/20
          `}
          whileHover={!isMobile ? { scale: 1.1 } : {}}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {completed ? (
            <motion.div
              variants={ANIMATION_CONFIG.CHECKMARK}
              initial="hidden"
              animate="show"
            >
              <CheckCircle2 size={isMobile ? 16 : 20} />
            </motion.div>
          ) : (
            step.number
          )}
        </motion.div>
      </div>

      {/* Content Card - Fixed Overflow */}
      <div
        className={`
          bg-white/95 dark:bg-bg-base/95 backdrop-blur-sm
          pl-10 sm:pl-12 md:pl-16 pr-3 sm:pr-4 md:pr-6
          py-3 sm:py-4 md:py-5
          rounded-2xl sm:rounded-3xl shadow-xl
          transition-all duration-300
          hover:shadow-2xl hover:bg-white dark:hover:bg-bg-soft
          border border-orange-100 dark:border-orange-900/20
        `}
      >
        {/* Title Row - Responsive Flex */}
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-0">
          <Icon 
            className="text-primary shrink-0 mt-0.5 sm:mt-0" 
            size={isMobile ? 16 : 20} 
          />
          <div className="flex-1 min-w-0">
            <h3 className="
              font-bold text-primary
              text-sm sm:text-base md:text-lg lg:text-xl
              leading-tight
              truncate sm:whitespace-normal
            ">
              {step.title}
            </h3>
            <p className="
              text-text-secondary dark:text-white/70
              text-xs sm:text-sm md:text-base
              leading-snug
              line-clamp-2 sm:line-clamp-1
            ">
              {step.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Tip Text - Better Contrast */}
      <motion.p 
        className="
          pl-10 sm:pl-12 md:pl-16 mt-2
          text-xs sm:text-sm
          text-white/90 dark:text-white/80
          leading-relaxed
          drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]
        "
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {step.tip}
      </motion.p>
    </motion.article>
  );
};

/* =========================================================
   MAIN SECTION COMPONENT
   ========================================================= */
export default function CaraEksplor() {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  /* Mobile Detection */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleStep = (n) => {
    setCompletedSteps((prev) =>
      prev.includes(n) ? prev.filter((i) => i !== n) : [...prev, n]
    );
  };

  return (
    <section
      id="caraEksplor"
      className="
        w-full relative overflow-hidden
        bg-gradient-to-br from-bg-warm via-bg-soft to-bg-gold
        dark:from-bg-warm dark:via-bg-base dark:to-bg-soft
        transition-colors duration-500
      "
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="
        grid grid-cols-1 lg:grid-cols-2 
        relative 
        min-h-[800px] sm:min-h-[900px] lg:min-h-screen
      ">

        {/* =====================================================
            LEFT SECTION - Quote & Logo
            ===================================================== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_CONFIG.FADE_UP}
          className="
            flex flex-col justify-center 
            px-6 sm:px-10 md:px-12 lg:px-16 
            py-12 sm:py-16 lg:py-20
            relative z-10
          "
        >
          {/* Quote Mark - Responsive Size */}
          <motion.div
            className="
              text-primary 
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              mb-6 sm:mb-8 lg:mb-10
              leading-none
            "
            aria-hidden="true"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ❝
          </motion.div>

          {/* Quote Text - Better Line Height & Size */}
          <motion.p
            variants={ANIMATION_CONFIG.FADE_UP}
            className="
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              leading-relaxed sm:leading-relaxed
              font-semibold
              text-text-primary dark:text-text-secondary
              max-w-full sm:max-w-xl lg:max-w-2xl
            "
          >
            Makan di Gelap Nyawang bukan cuma soal rasa.{" "}
            <span className="text-primary">
              Ini soal suasana malam, obrolan, dan cerita yang berulang.
            </span>
          </motion.p>

          {/* Logo - Conditional & Responsive */}
          <motion.img
            src="/assets/black.png"
            alt="Gelap Nyawang Logo"
            className="
              w-16 sm:w-20 md:w-24 lg:w-28
              mt-8 sm:mt-10 lg:mt-16
              opacity-80 dark:hidden
            "
            variants={ANIMATION_CONFIG.FADE_UP}
            loading="lazy"
          />
          <motion.img
            src="/assets/logo.png"
            alt="Gelap Nyawang Logo Dark Mode"
            className="
              w-16 sm:w-20 md:w-24 lg:w-28
              mt-8 sm:mt-10 lg:mt-16
              opacity-80 hidden dark:block
            "
            variants={ANIMATION_CONFIG.FADE_UP}
            loading="lazy"
          />
        </motion.div>

        {/* =====================================================
            RIGHT SECTION - Steps with Background Image
            ===================================================== */}
        <div className="
          relative w-full 
          min-h-[600px] sm:min-h-[700px] lg:min-h-full
        ">
          {/* Background Image */}
          <img
            src="/assets/about/t1.jpg"
            alt="Suasana kuliner Gelap Nyawang"
            className="
              absolute inset-0 w-full h-full object-cover
            "
            loading="lazy"
          />

          {/* Gradient Overlay - Better Contrast */}
          <div className="
            absolute inset-0 
            bg-gradient-to-b from-black/60 via-black/50 to-black/70
            lg:bg-gradient-to-r lg:from-black/70 lg:via-black/60 lg:to-black/50
          " />

          {/* Content Container */}
          <div
            className="
              relative z-10 h-full w-full 
              flex flex-col items-center justify-center 
              px-4 sm:px-6 md:px-8 lg:px-12 
              py-10 sm:py-12 lg:py-16
              text-white
            "
          >
            {/* Header */}
            <motion.header
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={ANIMATION_CONFIG.FADE_UP}
              className="w-full max-w-xl lg:max-w-2xl mb-6 sm:mb-8 text-center lg:text-left"
            >
              <h2 className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-extrabold mb-2 sm:mb-3
                drop-shadow-lg
              ">
                Cara Explore
              </h2>
              <p className="
                text-sm sm:text-base md:text-lg lg:text-xl
                text-white/90
                drop-shadow-md
              ">
                Biar gak bingung, ikutin alurnya ya!
              </p>
            </motion.header>

            {/* Steps List */}
            <motion.div
              variants={ANIMATION_CONFIG.STAGGER}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-xl lg:max-w-2xl"
            >
              {STEPS.map((step) => (
                <StepItem
                  key={step.number}
                  step={step}
                  completed={completedSteps.includes(step.number)}
                  toggle={toggleStep}
                  isMobile={isMobile}
                />
              ))}
            </motion.div>

            {/* Completion Message - Gamification */}
            {completedSteps.length === STEPS.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                className="
                  mt-6 sm:mt-8 
                  bg-green-500/20 backdrop-blur-md
                  border-2 border-green-400/50
                  rounded-2xl px-4 sm:px-6 py-3 sm:py-4
                  text-center
                "
              >
                <p className="
                  text-white font-semibold 
                  text-sm sm:text-base md:text-lg
                  flex items-center justify-center gap-2
                ">
                  <CheckCircle2 size={20} className="text-green-400" />
                  Siap explore Gelap Nyawang! 🎉
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}