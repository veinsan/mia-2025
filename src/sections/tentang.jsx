"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/* =======================================================
   ANIMATION CONFIG ─ perbaikan tetap sesuai reviewer
   ======================================================= */
const ANIMATION_CONFIG = {
  CONTAINER: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  },
  ITEM: {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  CARD_HOVER: {
    scale: 1.02,
    y: -3,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  TEXT_GLOW: {
    textShadow: [
      "0 0 0px rgb(229 118 33 / 0)",
      "0 0 16px rgb(229 118 33 / 0.4)",
      "0 0 0px rgb(229 118 33 / 0)",
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
  WAVE: { duration: 14, ease: "easeInOut" },
  BLOB_OSCILLATE: {
    y: [0, -15, 0],
    transition: { duration: 9, repeat: Infinity, ease: "easeInOut" },
  },
};

/* =======================================================
   BLOB CONFIG (menghilangkan redundancy)
   ======================================================= */
const BLOB_CONFIG = [
  {
    class: "left-[5%] top-[8%]",
    size: "w-40 h-40",
    color: "bg-primary/8",
    duration: 7,
  },
  {
    class: "right-[8%] top-[25%]",
    size: "w-48 h-48",
    color: "bg-accent/8",
    duration: 8,
  },
  {
    class: "left-1/2 bottom-[15%] -translate-x-1/2",
    size: "w-44 h-44",
    color: "bg-secondary/8",
    duration: 7.5,
  },
];

/* =======================================================
   CARD DATA — ditambahkan stat sesuai reviewer
   ======================================================= */
const CARDS_DATA = [
  {
    id: "rumahan",
    title: "Rasa Autentik",
    desc: "Cita rasa rumahan Bandung yang hangat dan bikin kangen.",
    stat: "4.8/5 dari 500+ pengunjung",
    img: "/assets/about/t1.jpg",
  },
  {
    id: "lokal",
    title: "Dari Komunitas Lokal",
    desc: "Kuliner yang tumbuh dari komunitas Gelap Nyawang sendiri.",
    stat: "20+ UMKM terlibat",
    img: "/assets/about/t2.jpg",
  },
  {
    id: "cepat",
    title: "Cepat & Nyaman",
    desc: "Tempat singgah yang pas buat makan cepat atau rehat sebentar.",
    stat: "Rata-rata servis < 7 menit",
    img: "/assets/about/t3.jpg",
  },
];

/* =======================================================
   Reusable Card Component
   ======================================================= */
const AboutCard = ({ card, isMobile }) => (
  <motion.article
    variants={ANIMATION_CONFIG.ITEM}
    whileHover={!isMobile ? ANIMATION_CONFIG.CARD_HOVER : undefined}
    className="relative rounded-2xl overflow-hidden shadow-card bg-bg-soft dark:bg-bg-warm group cursor-pointer"
  >
    {/* Gambar */}
    <div className="relative w-full aspect-[3/4] overflow-hidden">
      <img
        src={card.img}
        alt={`Ilustrasi ${card.title}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover brightness-75 
                   transition-all duration-500 group-hover:scale-110 
                   group-hover:brightness-90"
      />
    </div>

    {/* Overlay teks */}
    <div
      className="absolute inset-x-0 bottom-0 h-[43%]
                 bg-gradient-to-t from-primary/90 via-primary-light/70 to-transparent
                 dark:from-accent/90 dark:via-accent-light/70 dark:to-transparent
                 flex flex-col justify-end p-6 backdrop-blur-[2px]"
    >
      <motion.h3
        animate={ANIMATION_CONFIG.TEXT_GLOW}
        className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-1 tracking-tight"
      >
        {card.title}
      </motion.h3>

      <p className="text-sm sm:text-base text-white/95 leading-relaxed line-clamp-2">
        {card.desc}
      </p>

      {/* Stat tambahan (rekomendasi reviewer) */}
      <p className="mt-2 text-xs sm:text-sm text-white/80 font-medium">
        {card.stat}
      </p>
    </div>
  </motion.article>
);

/* =======================================================
   MAIN SECTION
   ======================================================= */
export default function Tentang() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const controls = useAnimation();

  const [isMobile, setIsMobile] = useState(false);

  /* Mobile detection */
  useEffect(() => {
    const detect = () => setIsMobile(window.innerWidth < 640);
    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  /* Trigger animation */
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      id="tentang"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b 
                 from-bg-base via-bg-soft to-bg-warm transition-colors duration-500 
                 pb-[130px] md:pb-[70px]"
    >
      {/* =======================================================
         TOP WAVE DECORATION
         ======================================================= */}
      <div className="absolute inset-x-0 -top-px z-20 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: ANIMATION_CONFIG.WAVE.duration,
            repeat: Infinity,
            ease: ANIMATION_CONFIG.WAVE.ease,
          }}
          className="w-[200%]"
        >
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-[60px] sm:h-[80px]"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="[stop-color:theme(colors.primary.DEFAULT)] [stop-opacity:0.4]" />
                <stop offset="50%" className="[stop-color:theme(colors.accent.DEFAULT)] [stop-opacity:0.6]" />
                <stop offset="100%" className="[stop-color:theme(colors.primary.hover)] [stop-opacity:0.5]" />
              </linearGradient>
            </defs>

            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </motion.div>
      </div>

      {/* =======================================================
         BLOBS (refactored to BLOB_CONFIG)
         ======================================================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {BLOB_CONFIG.map((blob, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, i % 2 === 0 ? -15 : 15, 0] }}
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute rounded-full blur-3xl ${blob.class} ${blob.size} ${blob.color}`}
          />
        ))}
      </div>

      {/* =======================================================
         CONTENT
         ======================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 md:py-24">

        {/* Heading */}
        <motion.div
          variants={ANIMATION_CONFIG.CONTAINER}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.span
            variants={ANIMATION_CONFIG.ITEM}
            className="inline-block text-primary font-semibold text-sm sm:text-base tracking-wider uppercase mb-3"
          >
            Keunggulan Kami
          </motion.span>

          <motion.h2
            variants={ANIMATION_CONFIG.ITEM}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-3"
          >
            Kenapa Makan{" "}
            <motion.span animate={ANIMATION_CONFIG.TEXT_GLOW} className="text-primary inline-block">
              di Gelap Nyawang?
            </motion.span>
          </motion.h2>

          <motion.p
            variants={ANIMATION_CONFIG.ITEM}
            className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto"
          >
            Tiap sudut Gelap Nyawang punya cerita: dari resep keluarga,
            inovasi anak muda Bandung, sampai rasa hangat yang susah dilupain.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={ANIMATION_CONFIG.CONTAINER}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {CARDS_DATA.map((card) => (
            <AboutCard key={card.id} card={card} isMobile={isMobile} />
          ))}
        </motion.div>
      </div>

      {/* =======================================================
         BOTTOM MARQUEE — diperbaiki agar responsive
         ======================================================= */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[200%] md:w-[300%] h-[40px] sm:h-[60px] z-40 overflow-hidden">
        <div className="marquee-right flex h-full">
          <img src="/assets/Banner.svg" alt="Dekorasi banner bawah" className="w-full h-full object-cover" />
          <img src="/assets/Banner.svg" alt="Dekorasi banner bawah" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
