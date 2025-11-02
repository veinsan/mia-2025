"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Tentang() {
  const ref = useRef(null);
  // Cegah animasi bolak-balik terus → jalan sekali aja pas pertama muncul
  const inView = useInView(ref, { amount: 0.26, once: false });
  const controls = useAnimation();

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) controls.set("visible");
  }, [controls]);

  // Trigger animasi saat section muncul pertama kali
  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  // Motion Variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };

  // Hapus filter blur (berat di GPU), tetap kasih efek depth pakai opacity & y
  const item = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 0.8, 0.22, 1] },
    },
  };

  const cards = [
    {
      id: "rumahan",
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quisquam. Quod ab dolorum ducimus magni libero debitis culpa, porro consequatur amet magnam eveniet a nostrum quia fuga? Asperiores, laboriosam.",
      img: "/assets/about/t1.jpg",
    },
    {
      id: "lokal",
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quisquam. Quod ab dolorum ducimus magni libero debitis culpa, porro consequatur amet magnam eveniet a nostrum quia fuga? Asperiores, laboriosam.",
      img: "/assets/about/t2.jpg",
    },
    {
      id: "cepat",
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quisquam. Quod ab dolorum ducimus magni libero debitis culpa, porro consequatur amet magnam eveniet a nostrum quia fuga? Asperiores, laboriosam.",
      img: "/assets/about/t3.jpg",
    },
  ];

  return (
    <section
      id="tentang"
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="tentang-title"
    >
      {/* Wave Divider */}
      {/* TOP WAVE DIVIDER (optimized static-look but alive) */}
      <div className="absolute inset-x-0 -top-[2px] pointer-events-none z-20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-25%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200%]" // biar bisa digeser halus tanpa ngulang
        >
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-[80px]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="waveGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#E7C49D" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#F5B66E" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FFF3E0" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 C200,80 400,0 720,40 C1040,80 1240,0 1440,40 L1440,0 L0,0 Z"
              fill="url(#waveGrad)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Ambient floating blobs */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-6 top-8 w-36 h-36 rounded-full bg-[rgba(232,106,30,0.06)] dark:bg-[rgba(232,106,30,0.06)] blur-3xl"
        />
        <motion.div
          animate={{ y: [-6, 12, -6] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-8 top-28 w-48 h-48 rounded-full bg-[rgba(57,26,8,0.06)] dark:bg-[rgba(249,176,78,0.05)] blur-3xl"
        />
        <motion.div
          animate={{ y: [6, -12, 6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-24 w-40 h-40 rounded-full bg-[rgba(240,190,120,0.04)] dark:bg-[rgba(232,106,30,0.04)] blur-3xl"
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 bg-gradient-to-b from-white to-[#FFF3E0]/60 dark:from-[#0B0B0B] dark:to-[#1A1A1A] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          {/* Header */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h4
              variants={item}
              id="tentang-sub"
              className="text-primary dark:text-[#F9B04E] font-semibold tracking-wide mb-2"
            >
              Keunggulan Kami
            </motion.h4>

            <motion.h2
              variants={item}
              id="tentang-title"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B1B1B] dark:text-[#F7F3EE] leading-tight"
            >
              Kenapa Makan{" "}
              <span className="text-primary dark:text-[#F9B04E]">Di Ganyang?</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quam commodi, exercitationem facilis nobis, corporis recusandae ipsa amet fugit necessitatibus, nihil iusto hic odio? Dignissimos tempore doloremque incidunt? Voluptate, harum.
            </motion.p>
          </motion.div>

          {/* Cards */}
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
                whileHover={{ scale: 1.03, translateY: -6 }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
                className="relative rounded-3xl overflow-hidden shadow-xl focus-within:ring-4 focus-within:ring-primary/20"
                role="article"
                aria-labelledby={`tentang-card-${c.id}-title`}
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  className="w-full h-[420px] sm:h-[460px] md:h-[500px] bg-cover bg-center transition-all duration-500 hover:brightness-110"
                  style={{
                    backgroundImage: `url(${c.img})`,
                    filter: "brightness(0.75)",
                  }}
                />

                <div className="absolute left-6 right-6 bottom-6 p-4 rounded-xl bg-gradient-to-t from-black/80 to-transparent">
                  <h3
                    id={`tentang-card-${c.id}-title`}
                    className="text-xl md:text-2xl font-semibold text-white mb-1"
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 mb-3 line-clamp-4">
                    {c.desc}
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm ${
                      idx === 0
                        ? "bg-primary text-white"
                        : idx === 1
                        ? "bg-accent text-black"
                        : "bg-secondary text-white"
                    }`}
                    style={{
                      boxShadow:
                        idx === 0
                          ? "0 6px 20px rgba(232,106,30,0.18)"
                          : idx === 1
                          ? "0 6px 20px rgba(249,176,78,0.14)"
                          : "0 6px 20px rgba(185,69,25,0.14)",
                    }}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background:
                          idx === 0 ? "#fff" : idx === 1 ? "#000" : "#fff",
                        opacity: 0.95,
                      }}
                    />
                    <span className="font-medium">
                      {idx === 0
                        ? "Rasa"
                        : idx === 1
                        ? "Komunitas"
                        : "Praktis"}
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
