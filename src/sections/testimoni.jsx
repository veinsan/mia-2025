"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star, Verified, Quote, TrendingUp } from "lucide-react";

/* =========================================================
   DATA - Enhanced dengan verified badge & category
   ========================================================= */
const TESTIMONIALS_TOP = [
  {
    text: "Tempat terbaik buat ngobrol santai abis kelas. Makanannya murah tapi enak banget!",
    name: "Ibnes",
    role: "Mahasiswa IF '22",
    rating: 5,
    date: "2 minggu lalu",
    avatar: "/assets/avatar/a1.webp",
    verified: true,
    category: "Makanan",
  },
  {
    text: "Memorable banget! tiap hari ke Tamgan, kalau rame ya lanjut ke Ganyang.",
    name: "Fira",
    role: "Mahasiswa STEI '23",
    rating: 5,
    date: "1 bulan lalu",
    avatar: "/assets/avatar/a2.webp",
    verified: true,
    category: "Suasana",
  },
  {
    text: "Suasananya khas banget, apalagi pas malam. Lampu-lampunya bikin nyaman.",
    name: "Apay",
    role: "Mahasiswa Minyak '21",
    rating: 4,
    date: "3 hari lalu",
    avatar: "/assets/avatar/a3.jpeg",
    verified: true,
    category: "Suasana",
  },
];

const TESTIMONIALS_BOTTOM = [
  {
    text: "Tempat yang gak pernah gagal buat nongkrong dan curhat random.",
    name: "Raharjo",
    role: "Mahasiswa Sipil '20",
    rating: 5,
    date: "1 minggu lalu",
    avatar: "/assets/avatar/a4.gif",
    verified: true,
    category: "Hangout",
  },
  {
    text: "Makanannya enak, pelayannya ramah. Feels like home!",
    name: "Paijo",
    role: "Mahasiswa Mesin '21",
    rating: 4,
    date: "5 hari lalu",
    avatar: "/assets/avatar/a5.jpg",
    verified: true,
    category: "Pelayanan",
  },
  {
    text: "Tempat favorit buat nugas bareng temen. Kopinya mantap!",
    name: "Athan",
    role: "Mahasiswa Tambang '23",
    rating: 5,
    date: "2 minggu lalu",
    avatar: "/assets/avatar/a6.jpg",
    verified: true,
    category: "Kafe",
  },
];

/* =========================================================
   ANIMATION CONFIG - Optimized dengan spring physics
   ========================================================= */
const ANIMATION_CONFIG = {
  FADE_UP: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  STAGGER: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  },
  CARD_HOVER: {
    scale: 1.03,
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  STAT_NUMBER: {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  },
};

/* =========================================================
   STATS DATA - Social proof enhancement
   ========================================================= */
const STATS = [
  { label: "Review Positif", value: "500+", icon: TrendingUp },
  { label: "Rating Rata-rata", value: "4.8", icon: Star },
  { label: "Mahasiswa Setia", value: "1.2K+", icon: Verified },
];

/* =========================================================
   MARQUEE STYLES - Enhanced dengan will-change
   ========================================================= */
const useMarqueeStyles = () => {
  const styleContent = useMemo(
    () => `
    @keyframes marquee-left { 
      0% { transform: translateX(0%); } 
      100% { transform: translateX(-50%); } 
    }
    @keyframes marquee-right { 
      0% { transform: translateX(-50%); } 
      100% { transform: translateX(0%); } 
    }

    .marquee-left { 
      animation: marquee-left 55s linear infinite;
      will-change: transform;
    }
    .marquee-right { 
      animation: marquee-right 55s linear infinite;
      will-change: transform;
    }

    /* Pause on hover for accessibility */
    .marquee-container:hover .marquee-left,
    .marquee-container:hover .marquee-right {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      .marquee-left, .marquee-right {
        animation: none !important;
        transform: translateX(0) !important;
      }
    }

    /* Smooth edge fade */
    .marquee-fade::before,
    .marquee-fade::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px;
      z-index: 2;
      pointer-events: none;
    }
    .marquee-fade::before {
      left: 0;
      background: linear-gradient(to right, var(--bg-soft) 0%, transparent 100%);
    }
    .marquee-fade::after {
      right: 0;
      background: linear-gradient(to left, var(--bg-soft) 0%, transparent 100%);
    }

    @media (max-width: 640px) {
      .marquee-fade::before,
      .marquee-fade::after {
        width: 40px;
      }
    }
  `,
    []
  );

  useEffect(() => {
    if (document.getElementById("testimoni-styles")) return;

    const style = document.createElement("style");
    style.id = "testimoni-styles";
    style.textContent = styleContent;

    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById("testimoni-styles");
      if (existingStyle) existingStyle.remove();
    };
  }, [styleContent]);
};

/* =========================================================
   TESTIMONIAL CARD - Enhanced dengan microinteractions
   ========================================================= */
const TestimonialCard = ({ 
  text, 
  name, 
  role, 
  rating, 
  date, 
  avatar, 
  verified, 
  category,
  isMobile 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="
        bg-white/90 dark:bg-bg-warm/90 backdrop-blur-sm
        rounded-2xl p-6 md:p-8 
        shadow-card border border-orange-100/50 dark:border-orange-900/20
        w-[85vw] sm:w-[400px] md:w-[480px] 
        min-h-[280px] sm:min-h-[300px]
        flex flex-col justify-between 
        transition-all duration-300 
        hover:shadow-2xl hover:border-primary/30
        cursor-default
        relative overflow-hidden
      "
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      whileHover={!isMobile ? ANIMATION_CONFIG.CARD_HOVER : {}}
      aria-label={`Testimoni dari ${name}, ${role}`}
    >
      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="
            text-xs font-semibold px-3 py-1 rounded-full
            bg-primary/10 text-primary
            dark:bg-accent/20 dark:text-accent
          ">
            {category}
          </span>

          {/* Quote Icon */}
          <Quote className="text-primary/40" size={32} />
        </div>

        {/* Testimonial Text */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-primary dark:text-text-secondary mb-6">
          &quot;{text}&quot;
        </p>

      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 relative z-10">
        {/* Avatar with Loading State */}
        <div className="relative shrink-0">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="
              w-14 h-14 rounded-full object-cover 
              border-2 border-primary/40
              shadow-md
            "
            loading="lazy"
            onError={(e) => {
              e.target.src = "/assets/avatar/default.png";
            }}
          />
          {verified && (
            <motion.div
              className="
                absolute -bottom-1 -right-1 
                bg-green-500 rounded-full p-1
                shadow-lg
              "
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Verified size={12} className="text-white" />
            </motion.div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="
              text-sm sm:text-base font-bold 
              text-text-primary dark:text-text-secondary
              truncate
            ">
              {name}
            </p>
          </div>

          <p className="
            text-xs text-text-muted dark:text-text-secondary/70
            truncate
          ">
            {role}
          </p>

          {/* Rating Stars */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    size={14}
                    className={
                      i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                    }
                  />
                </motion.div>
              ))}
            </div>

            <span className="text-xs text-text-muted dark:text-text-secondary/70">
              {date}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   MARQUEE ROW - Enhanced dengan fade effect
   ========================================================= */
const MarqueeRow = ({ testimonials, direction, isMobile }) => {
  const cls = direction === "left" ? "marquee-left" : "marquee-right";
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative marquee-container marquee-fade">
      <div 
        className={`flex gap-6 ${shouldReduceMotion ? "" : cls}`}
        style={{
          width: shouldReduceMotion ? "fit-content" : "max-content",
        }}
      >
        {/* Duplicate for seamless loop */}
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard 
            key={`${t.name}-${i}`} 
            {...t} 
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   STATS SECTION - Social proof component
   ========================================================= */
const StatsSection = () => (
  <motion.div
    variants={ANIMATION_CONFIG.STAGGER}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className="
      flex flex-wrap justify-center gap-8 sm:gap-12 
      mt-12 mb-16
    "
  >
    {STATS.map((stat, index) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={index}
          variants={ANIMATION_CONFIG.STAT_NUMBER}
          className="text-center"
        >
          <div className="
            flex items-center justify-center 
            w-16 h-16 sm:w-20 sm:h-20
            mx-auto mb-3
            rounded-full 
            bg-primary/10 dark:bg-accent/20
          ">
            <Icon className="text-primary dark:text-accent" size={32} />
          </div>
          <p className="
            text-3xl sm:text-4xl font-extrabold 
            text-primary dark:text-accent
            mb-1
          ">
            {stat.value}
          </p>
          <p className="
            text-sm sm:text-base 
            text-text-muted dark:text-text-secondary
          ">
            {stat.label}
          </p>
        </motion.div>
      );
    })}
  </motion.div>
);

/* =========================================================
   MAIN COMPONENT
   ========================================================= */
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
    <section
      id="testimoni"
      className="
        relative w-full 
        py-16 sm:py-20 md:py-28 
        overflow-hidden
        bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold
        dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold
        transition-colors duration-500
      "
    >
      {/* Decorative Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(229,118,33,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(252,187,101,0.15) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Floating Blobs */}
      <motion.div
        className="
          absolute top-1/4 left-1/4 
          w-48 h-48 sm:w-64 sm:h-64
          bg-primary/5 rounded-full blur-3xl
        "
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          variants={ANIMATION_CONFIG.FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <motion.p 
            className="
              text-primary dark:text-accent
              font-semibold mb-2 
              tracking-wider uppercase 
              text-xs sm:text-sm
            "
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Apa Kata Mereka?
          </motion.p>

          <h2 className="
            text-3xl sm:text-4xl md:text-5xl 
            font-extrabold 
            text-text-primary dark:text-text-secondary
            leading-tight
          ">
            Testimoni dari{" "}
            <span className="text-primary dark:text-accent">
              Mahasiswa
            </span>{" "}
            ITB
          </h2>

          <p className="
            mt-4 text-sm sm:text-base md:text-lg
            text-text-muted dark:text-text-secondary/80
            max-w-2xl mx-auto
          ">
            Dengar langsung pengalaman mereka yang sudah jelajahi
            kuliner Gelap Nyawang
          </p>
        </motion.header>

        {/* Stats Section */}
        <StatsSection />

        {/* Marquee Rows */}
        <motion.div
          variants={ANIMATION_CONFIG.FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 sm:space-y-10"
        >
          <MarqueeRow 
            testimonials={TESTIMONIALS_TOP} 
            direction="left" 
            isMobile={isMobile}
          />
          <MarqueeRow 
            testimonials={TESTIMONIALS_BOTTOM} 
            direction="right" 
            isMobile={isMobile}
          />
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          variants={ANIMATION_CONFIG.FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            w-full h-[1px] 
            bg-gradient-to-r from-transparent via-primary/40 to-transparent 
            mt-16 sm:mt-20
          "
          aria-hidden="true"
        />
      </div>
    </section>
  );
}