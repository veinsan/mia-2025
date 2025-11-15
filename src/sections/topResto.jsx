"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UMKM_DATA } from "@/data/umkmData";

/*
  Konfigurasi animasi standar untuk fade + slide-up.
  Dipakai untuk item yang muncul satu per satu.
*/
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

/*
  Efek glow lembut pada teks — dipakai untuk highlight nama “Paijo”.
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

/*
  Cek prefensi accessibility user.
  Jika reduce motion aktif, animasi dibuat minimal.
*/
const prefersReducedMotion = () => {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
};

/*
  Slug UMKM rekomendasi yang ditampilkan di section ini.
  Urutannya menentukan layout kartu.
*/
const FEATURED_SLUGS = ["bwj", "blackromantic", "stallone", "cola", "besthal", "datuak"];

/*
  Ambil data UMKM berdasarkan slug dan filter yang kosong.
*/
const RESTOS_DATA = FEATURED_SLUGS.map(slug =>
  UMKM_DATA.find(item => item.slug === slug)
).filter(Boolean);

/*
  Satu kartu resto individual dalam berbagai ukuran:
  - large (utama)
  - medium (kanan atas)
  - small (grid kecil)
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
      {/* Seluruh kartu bisa diklik */}
      <Link href={`/direktori/${resto.slug}`} className="block h-full group">
        {/* Background image resto */}
        <div className="absolute inset-0">
          <img
            src={resto.img}
            alt={`${resto.name} - ${resto.short}`}
            loading="lazy"
            onError={(e) => {
              // fallback jika gambar gagal load
              e.target.style.backgroundColor = "#f5f5f5";
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient overlay untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Konten text */}
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

          {/* Deskripsi yang muncul saat hover */}
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

            {/* CTA kecil dengan animasi geser */}
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
  Susunan rekomendasi:
  1 (besar kiri), 1 (medium kanan), 4 (grid kecil)
  Data diambil berurutan sesuai FEATURED_SLUGS
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
        
        {/* Kolom kiri – Heading + Resto besar */}
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

          <RestoCard resto={mainResto} variant="large" index={1} />
        </div>

        {/* Kolom kanan – 1 medium + 4 small */}
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