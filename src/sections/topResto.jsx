"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UMKM_DATA } from "@/data/umkmData";

/*
  Config animasi standar
*/
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

const prefersReducedMotion = () => {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
};

/*
  Slug resto unggulan (urutan menentukan layout)
*/
const FEATURED_SLUGS = ["bwj", "blackromantic", "stallone", "cola", "besthal", "datuak"];

const RESTOS_DATA = FEATURED_SLUGS.map((slug) =>
  UMKM_DATA.find((item) => item.slug === slug)
).filter(Boolean);

/*
  KOMPONEN CARD RESTO (sudah diperbaiki sesuai reviewer)
*/
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

        {/* Badge (reviewer-required) */}
        {resto.badge && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
            {resto.badge}
          </div>
        )}

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={resto.img}
            alt={`${resto.name} - ${resto.short}`}
            loading={isLarge ? "eager" : "lazy"}
            fetchPriority={isLarge ? "high" : "auto"}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg,#ddd,#bbb)";
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">

          <h3
            className={`font-semibold text-white mb-2 transition-all duration-300 ${
              isLarge
                ? "text-2xl md:text-3xl"
                : isMedium
                ? "text-xl md:text-2xl"
                : "text-lg md:text-xl"
            }`}
          >
            {resto.name}
          </h3>

          {/* Price & Category (reviewer-required) */}
          {resto.priceRange && resto.category && (
            <div className="flex items-center gap-2 text-white/85 text-xs md:text-sm mb-1">
              <span>💰 {resto.priceRange}</span>
              <span>•</span>
              <span>{resto.category}</span>
            </div>
          )}

          {/* Description reveal on hover */}
          <div
            className={`overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 ${
              reduceMotion ? "!duration-200" : ""
            }`}
          >
            <p
              className={`text-white/90 mb-3 ${
                isLarge
                  ? "text-sm md:text-base line-clamp-3"
                  : "text-xs md:text-sm line-clamp-2"
              }`}
            >
              {resto.short}
            </p>

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

/*
  MAIN COMPONENT
*/
export default function TopResto() {
  const mainResto = RESTOS_DATA[0];
  const topResto = RESTOS_DATA[1];
  const gridRestos = RESTOS_DATA.slice(2, 6);

  return (
    <section
      id="topResto"
      className="relative pt-20 md:pt-20 pb-20 md:pb-28 overflow-hidden
                 bg-gradient-to-b from-bg-warm via-bg-soft to-bg-base
                 dark:from-bg-warm dark:via-bg-soft dark:to-bg-base
                 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col gap-10">
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
              <motion.span className="text-primary inline-block" animate={TEXT_GLOW}>
                Kami
              </motion.span>
            </h2>

            <p className="text-text-muted dark:text-text-secondary/80 text-base md:text-lg max-w-md leading-relaxed">
              Kumpulan tempat makan terbaik di Gelap Nyawang yang telah teruji kelezatannya. Pilihan yang tepat untuk memuaskan selera kuliner kamu!
            </p>
          </motion.div>

          <RestoCard resto={mainResto} variant="large" index={1} />
        </div>

        {/* Right column */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <RestoCard resto={topResto} variant="medium" index={2} />

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