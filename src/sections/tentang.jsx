"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Tentang() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.25, once: false });
  const controls = useAnimation();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) controls.set("visible");
  }, [controls]);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  // Variants utama
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };

  // Variants card: lebih halus, ada subtle zoom & delay random biar gak kaku
  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.94, rotate: -1 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12,
        ease: [0.22, 0.8, 0.22, 1],
      },
    }),
  };

  const cards = [
    {
      id: "rumahan",
      title: "Rasa Autentik",
      desc: "Setiap sajian di Gelap Nyawang dibuat dengan cita rasa rumahan khas Bandung — sederhana tapi ngangenin.",
      img: "/assets/about/t1.jpg",
    },
    {
      id: "lokal",
      title: "Dari Komunitas Lokal",
      desc: "UMKM di sekitar Gelap Nyawang tumbuh bareng, mendukung satu sama lain demi kuliner yang tetap hidup dan autentik.",
      img: "/assets/about/t2.jpg",
    },
    {
      id: "cepat",
      title: "Cepat & Nyaman",
      desc: "Mau nongkrong, nugas, atau sekadar makan cepat — suasana di sini selalu bikin betah dan produktif.",
      img: "/assets/about/t3.jpg",
    },
  ];

  return (
<section
  id="tentang"
  ref={ref}
  className="relative overflow-hidden transition-colors duration-700 bg-gradient-to-b from-bg-soft to-bg-warm dark:from-bg-base dark:to-bg-soft"
  aria-labelledby="tentang-title"
>
  {/* ===== FLOW WAVE ATAS (BALIK LAGI BRO 🔥) ===== */}
  <div className="absolute inset-x-0 -top-[2px] pointer-events-none z-20 overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-25%", "0%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="w-[200%]"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[80px]"
        aria-hidden="true"
      >
        <defs>
          {/* pake tone dari color palette global lu */}
          <linearGradient id="waveGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.65" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C200,80 400,0 720,40 C1040,80 1240,0 1440,40 L1440,0 L0,0 Z"
          fill="url(#waveGrad)"
        />
      </svg>
    </motion.div>
  </div>

  {/* ===== AMBIENT BLOBS HALUS ===== */}
  <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
    <motion.div
      animate={{ y: [0, -14, 0], opacity: [0.7, 0.9, 0.7] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-[8%] top-[10%] w-48 h-48 bg-primary/10 blur-3xl rounded-full"
    />
    <motion.div
      animate={{ y: [-10, 10, -10], opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-[12%] bottom-[10%] w-56 h-56 bg-accent/10 blur-3xl rounded-full"
    />
  </div>

  {/* ===== MAIN CONTENT ===== */}
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10">
    <motion.div
      variants={container}
      initial="hidden"
      animate={controls}
      className="text-center max-w-3xl mx-auto"
    >
      <motion.h4
        variants={item}
        id="tentang-sub"
        className="text-primary font-semibold tracking-wide mb-2"
      >
        Keunggulan Kami
      </motion.h4>

      <motion.h2
        variants={item}
        id="tentang-title"
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-secondary leading-tight"
      >
        Kenapa Makan{" "}
        <span className="text-primary">di Gelap Nyawang?</span>
      </motion.h2>

      <motion.p
        variants={item}
        className="mt-4 text-base md:text-lg text-text-muted dark:text-text-secondary/80 leading-relaxed"
      >
        Di kawasan Gelap Nyawang, setiap warung dan kafe punya kisah unik —
        dari resep turun-temurun sampai inovasi anak muda Bandung yang penuh semangat.
      </motion.p>
    </motion.div>

    {/* ===== CARD SECTION ===== */}
    <motion.div
      variants={container}
      initial="hidden"
      animate={controls}
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    >
      {cards.map((c, idx) => (
        <motion.article
          key={c.id}
          custom={idx}
          variants={item}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 0 2px rgba(229,118,33,0.5), 0 10px 30px rgba(0,0,0,0.08)",
          }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 18,
          }}
          className="relative rounded-3xl overflow-hidden border border-border-DEFAULT bg-bg-base dark:bg-bg-soft transition-all duration-500"
        >
          <div
            className="w-full aspect-[4/5] bg-cover bg-center brightness-90"
            style={{
              backgroundImage: `url(${c.img})`,
            }}
          />

          <div className="absolute inset-x-6 bottom-6 p-4 rounded-xl bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
              {c.title}
            </h3>
            <p className="text-sm md:text-base text-gray-200 mb-3 line-clamp-4">
              {c.desc}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </div>

  {/* ===== TRANSISI KE BAWAH BIAR NYAMBUNG ===== */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-bg-warm to-transparent dark:from-bg-soft dark:to-transparent" />
</section>

  );
}
