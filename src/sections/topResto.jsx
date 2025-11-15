"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ============================================
   ANIMATION CONFIGURATION
   ============================================ */

const ANIMATION_CONFIG = {
  ITEM: {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: custom * 0.05,
        ease: "easeOut",
      },
    }),
  },
};

const TEXT_GLOW = {
  textShadow: [
    "0 0 0px rgba(229,118,33,0)",
    "0 0 12px rgba(229,118,33,0.35)",
    "0 0 0px rgba(229,118,33,0)",
  ],
  transition: {
    duration: 2.2,
    repeat: Infinity,
    ease: "easeInOut",
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
   RESTO DATA (HARDCODED - Specific to this section)
   ============================================ */

const RESTOS_DATA = [
  {
    slug: "blackromantic",
    name: "Black Romantic",
    desc: "Restoran dengan cita rasa iga bakar autentik yang memanjakan lidah, sempurna untuk makan bersama teman-teman.",
    img: "/assets/resto/blackromantic.webp",
  },
  {
    slug: "bwj",
    name: "Kedai BWJ",
    desc: "Butterfly Wings Java menyajikan masakan nusantara berkualitas dengan harga terjangkau dan pelayanan ramah.",
    img: "/assets/resto/bwj.webp",
  },
  {
    slug: "stallone",
    name: "Bebek Stallone",
    desc: "Bebek goreng renyah dengan bumbu yang menggugah selera, pilihan favorit para pecinta kuliner lokal.",
    img: "/assets/resto/stallone.jpg",
  },
  {
    slug: "cola",
    name: "Ayam Cola Kabita HC",
    desc: "Ayam bakar dengan racikan bumbu istimewa yang bikin ketagihan, cocok untuk lunch maupun dinner.",
    img: "/assets/resto/cola.webp",
  },
  {
    slug: "besthal",
    name: "Ayam & Bebek Besthal",
    desc: "Kombinasi ayam dan bebek berkualitas dengan bumbu rahasia turun temurun yang luar biasa lezat.",
    img: "/assets/resto/besthal.webp",
  },
  {
    slug: "datuak",
    name: "Rumah Makan Pak Datuak",
    desc: "Rumah makan autentik dengan masakan tradisional yang membawa cita rasa kampung ke hadapan Anda.",
    img: "/assets/resto/datuak.webp",
  },
];

/* ============================================
   RESTO CARD COMPONENT
   ============================================ */

const RestoCard = ({ resto, variant = "large", index = 0 }) => {
  const isLarge = variant === "large";
  const isMedium = variant === "medium";
  const reduceMotion = prefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.5,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
      className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        isLarge
          ? "h-[360px] md:h-[420px]"
          : isMedium
            ? "h-[220px] md:h-[240px]"
            : "h-[170px] md:h-[180px]"
      }`}
    >
      <Link href={`/direktori/${resto.slug}`} className="block h-full group">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={resto.img}
            alt={resto.name}
            loading="lazy"
            onError={(e) => {
              e.target.style.backgroundColor = "#f5f5f5";
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          {/* Title - Always visible */}
          <h3 className={`font-semibold text-white mb-2 transition-all duration-300 ${
            isLarge ? "text-2xl md:text-3xl" : isMedium ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          }`}>
            {resto.name}
          </h3>

          {/* Description - Shows on hover */}
          <div className={`overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 ${reduceMotion ? "!duration-200" : ""}`}>
            <p className={`text-white/90 mb-3 ${
              isLarge ? "text-sm md:text-base line-clamp-3" : "text-xs md:text-sm line-clamp-2"
            }`}>
              {resto.desc}
            </p>
            
            {/* CTA Link */}
            <motion.span
              className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-primary/80 transition-colors"
              whileHover={reduceMotion ? {} : { x: 4 }}
              transition={{ duration: 0.2 }}
              aria-label={`Lihat detail ${resto.name}`}
            >
              Lihat Detail →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ============================================
   MAIN TOPRESO COMPONENT
   ============================================ */

export default function TopResto() {
  const mainResto = RESTOS_DATA[1];
  const topResto = RESTOS_DATA[0];
  const gridRestos = RESTOS_DATA.slice(2, 6);

  return (
    <section
      id="topResto"
className="
  relative py-24 md:py-32 overflow-hidden bg-gradient-to-b
  from-[#E5D2BD] via-[#DCCBB5] to-[#D5C1A8]
  dark:from-[#3C2E25] dark:via-[#2E241D] dark:to-[#1F1814]
  transition-colors duration-500
"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* === LEFT: Title + Large Image === */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
              Tempat Andalan
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-text-primary dark:text-text-secondary">
              Rekomendasi{" "}
              <motion.span
                className="text-primary inline-block"
                animate={TEXT_GLOW}
              >
                Paijo
              </motion.span>
            </h2>
            <p className="text-text-muted dark:text-text-secondary/80 text-base md:text-lg max-w-md leading-relaxed">
              Kumpulan tempat makan terbaik di Gelap Nyawang yang telah teruji kelezatannya. Pilihan yang tepat untuk memuaskan selera kuliner kamu!
            </p>
          </motion.div>

          {/* Large Featured Image */}
          <RestoCard resto={mainResto} variant="large" index={1} />
        </div>

        {/* === RIGHT: Top Image + 4 Grid === */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Top Medium Image */}
          <RestoCard resto={topResto} variant="medium" index={2} />

          {/* Grid 4 Small Images */}
          <div className="grid grid-cols-2 gap-6">
            {gridRestos.map((resto, i) => (
              <RestoCard
                key={resto.slug}
                resto={resto}
                variant="small"
                index={3 + i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}