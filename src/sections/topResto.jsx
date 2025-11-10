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

const RestoCard = ({ resto, variant = "large", custom = 0 }) => {
  const isLarge = variant === "large";
  const isMedium = variant === "medium";

  return (
    <motion.div
      custom={custom}
      variants={ANIMATION_CONFIG.ITEM}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      className={`relative group rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
        isLarge
          ? "h-[280px] sm:h-[350px] md:h-[400px]"
          : isMedium
            ? "h-[180px] sm:h-[220px] md:h-[260px]"
            : "h-[140px] sm:h-[160px] md:h-[180px]"
      }`}
      whileHover={{
        boxShadow: "0 0 30px rgba(229, 118, 33, 0.25)",
      }}
    >
      {/* Image */}
      <motion.img
        src={resto.img}
        alt={resto.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Content - Semi Transparent */}
      <Link href={`/direktori/${resto.slug}`}>
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8 text-white backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className={`font-semibold mb-2 line-clamp-2 ${isLarge ? "text-2xl md:text-3xl" : isMedium ? "text-lg md:text-xl" : "text-base md:text-lg"}`}>
            {resto.name}
          </h3>

          <p className={`text-white/90 line-clamp-3 mb-4 ${isLarge ? "text-sm md:text-base" : isMedium ? "text-xs md:text-sm" : "text-xs"}`}>
            {resto.desc}
          </p>

          {/* Subtle "Lihat Detail" Text Link */}
          <motion.span
            className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-primary/90 transition-colors"
            whileHover={{ x: 2 }}
          >
            Lihat Detail →
          </motion.span>
        </div>
      </Link>

      {/* Default State - Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white drop-shadow-md group-hover:opacity-0 transition-opacity duration-300">
        <h3 className={`font-semibold line-clamp-2 ${isLarge ? "text-2xl md:text-3xl" : isMedium ? "text-lg md:text-xl" : "text-base md:text-lg"}`}>
          {resto.name}
        </h3>
      </div>
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
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-bg-warm via-bg-soft to-bg-base dark:from-bg-warm dark:via-bg-soft dark:to-bg-base transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* === LEFT: Title + Large Image === */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Header Section */}
          <motion.div
            custom={0}
            variants={ANIMATION_CONFIG.ITEM}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
              Tempat Andalan
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-text-primary dark:text-text-secondary">
              Rekomendasi{" "}
              <motion.span
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Paijo
              </motion.span>
            </h2>
            <p className="text-text-muted dark:text-text-secondary/80 text-base md:text-lg max-w-md leading-relaxed">
              Kumpulan tempat makan terbaik di Gelap Nyawang yang telah teruji kelezatannya. Pilihan yang tepat untuk memuaskan selera kuliner kamu!
            </p>
          </motion.div>

          {/* Large Featured Image */}
          <RestoCard resto={mainResto} variant="large" custom={1} />
        </div>

        {/* === RIGHT: Top Image + 4 Grid === */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Top Medium Image */}
          <RestoCard resto={topResto} variant="medium" custom={2} />

          {/* Grid 4 Small Images */}
          <div className="grid grid-cols-2 gap-6">
            {gridRestos.map((resto, i) => (
              <RestoCard
                key={resto.slug}
                resto={resto}
                variant="small"
                custom={3 + i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-bg-base to-transparent dark:from-bg-base pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}