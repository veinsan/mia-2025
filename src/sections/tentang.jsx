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

  // animasi lebih cepat, tapi tetap halus
  const container = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: [0.25, 0.8, 0.25, 1] },
    },
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
      className="relative overflow-hidden transition-colors duration-500"
      aria-labelledby="tentang-title"
    >
      {/* flow wave — udah acc */}
      <div className="absolute inset-x-0 -top-[2px] pointer-events-none z-20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-18%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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

      {/* ambient blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-6 top-10 w-36 h-36 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-8 top-24 w-44 h-44 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [5, -7, 5] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      {/* main content */}
      <div className="relative z-10 bg-gradient-to-b from-bg-base via-bg-soft to-bg-warm dark:from-bg-base dark:via-bg-soft dark:to-bg-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h4
              variants={item}
              className="text-primary font-semibold tracking-wide mb-2"
            >
              Keunggulan Kami
            </motion.h4>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-secondary leading-tight"
            >
              Kenapa Makan{" "}
              <motion.span
                className="text-primary dark:text-[#F5B66E]"
                animate={{
                  textShadow: [
                    "0 0 0 var(--primary)",
                    "0 0 10px rgba(245,182,110,0.3)",
                    "0 0 0 var(--primary)",
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                di Gelap Nyawang?
              </motion.span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-4 text-base md:text-lg text-text-muted dark:text-text-secondary/80 leading-relaxed"
            >
              Di kawasan Gelap Nyawang, setiap warung dan kafe punya kisah unik —
              dari resep turun-temurun sampai inovasi anak muda Bandung yang penuh semangat.
            </motion.p>
          </motion.div>

          {/* cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {cards.map((c, idx) => (
              <motion.article
                key={c.id}
                variants={item}
                whileHover={{
                  scale: 1.035,
                  translateY: -4,
                  boxShadow:
                    "0 6px 16px rgba(0,0,0,0.12), 0 0 0 2px rgba(229,93,24,0.18)",
                }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="relative rounded-3xl overflow-hidden shadow-xl bg-bg-base dark:bg-bg-soft transition-all duration-300"
              >
                <div
                  className="w-full h-[420px] sm:h-[460px] md:h-[500px] bg-cover bg-center transition-all duration-300 hover:brightness-110"
                  style={{
                    backgroundImage: `url(${c.img})`,
                    filter: "brightness(0.75)",
                  }}
                />

                <div className="absolute left-6 right-6 bottom-6 p-4 rounded-xl bg-gradient-to-t from-black/85 to-transparent">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 mb-3 line-clamp-4">
                    {c.desc}
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm text-white ${
                      idx === 0
                        ? "bg-[#E86A1E] dark:bg-[#F9B04E]"
                        : idx === 1
                        ? "bg-[#C13F14] dark:bg-[#B54B22]"
                        : "bg-[#E7C49D] dark:bg-[#F5B66E]"
                    }`}
                    style={{
                      boxShadow:
                        idx === 0
                          ? "0 6px 20px rgba(232,106,30,0.18)"
                          : idx === 1
                          ? "0 6px 20px rgba(193,63,20,0.14)"
                          : "0 6px 20px rgba(249,182,110,0.14)",
                    }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-white/90" />
                    <span className="font-medium">
                      {idx === 0 ? "Rasa" : idx === 1 ? "Komunitas" : "Praktis"}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
