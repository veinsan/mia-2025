"use client";

import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const STEPS = [
  { number: 1, title: "Jelajahi Rekomendasi", subtitle: "Cari tempat makan" },
  { number: 2, title: "Lihat Detail UMKM", subtitle: "Cek menu & harga" },
  { number: 3, title: "Datang ke Lokasi", subtitle: "Navigate via Maps" },
];

const StepItem = ({ step }) => (
  <motion.article variants={FADE_UP} className="relative">
    {/* NUMBER BUBBLE */}
    <div className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-10">
      <div
        className="
          bg-primary text-white font-bold
          w-10 h-10 sm:w-12 sm:h-12
          rounded-full flex items-center justify-center
          text-sm sm:text-base md:text-xl shadow-lg
        "
        aria-label={`Step ${step.number}`}
      >
        {step.number}
      </div>
    </div>

    {/* STEP BUBBLE */}
    <div
      className="
        bg-white text-black
        dark:bg-bg-base dark:text-text-secondary
        pl-14 sm:pl-16 pr-6
        py-4 sm:py-5 md:py-6
        rounded-full shadow-xl w-full
        flex items-center justify-between
        text-base sm:text-xl md:text-2xl
        transition-colors duration-300
      "
    >
      <span className="font-bold text-primary whitespace-nowrap mr-4 sm:mr-10">
        {step.title}
      </span>

      {/* Subtitle — ✔ dark mode fix */}
      <span className="text-black/90 dark:text-white/80 whitespace-nowrap">
        {step.subtitle}
      </span>
    </div>
  </motion.article>
);

export default function CaraMakan() {
  return (
    <section
      id="caraMakan"
      className="
        w-full 
        bg-bg-warm 
        dark:bg-bg-warm
        text-text-primary dark:text-text-secondary 
        transition-colors duration-500
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-screen">
        
        {/* LEFT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={FADE_UP}
          className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 z-10"
        >
          <div
            className="text-primary text-6xl sm:text-8xl md:text-9xl mb-10 md:mb-20"
            aria-hidden="true"
          >
            ❝
          </div>

          <p
            className="
              text-2xl sm:text-3xl md:text-4xl
              leading-relaxed font-semibold
              max-w-full sm:max-w-xl md:max-w-2xl
              text-text-primary dark:text-text-secondary
            "
          >
            Makan di Gelap Nyawang itu bukan cuma soal rasa.
            Ini soal suasana malam, obrolan, dan cerita yang selalu berulang.
          </p>

          {/* LOGO — LIGHT & DARK */}
          <img
            src="/assets/black.png"
            alt="Gelap Nyawang Logo"
            className="w-24 sm:w-28 md:w-32 mt-12 md:mt-20 opacity-90 block dark:hidden"
          />

          <img
            src="/assets/logo.png"
            alt="Gelap Nyawang Logo Dark"
            className="w-24 sm:w-28 md:w-32 mt-12 md:mt-20 opacity-90 hidden dark:block"
          />
        </motion.div>

        {/* RIGHT SECTION */}
        <div className="relative w-full h-[600px] md:h-full">
          
          {/* BACKGROUND IMAGE */}
          <img
            src="/assets/about/t1.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* DARK OVERLAY */}
          <div
            className="
              relative z-10 h-full w-full 
              flex flex-col items-center justify-center 
              px-4 sm:px-6 md:px-12 py-10 
              bg-black/40 backdrop-blur-sm 
              text-white
            "
          >
            {/* TITLE */}
            <motion.header
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="w-full max-w-2xl mb-8 text-left"
            >
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-2">
                Cara Explore
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-white/90">
                Biar gak bingung, ikutin alurnya ya!
              </p>
            </motion.header>

            {/* STEP LIST */}
            <motion.div
              variants={STAGGER}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6 w-full max-w-2xl"
            >
              {STEPS.map((step) => (
                <StepItem key={step.number} step={step} />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
