"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS_TOP = [
  { text: "Tempat terbaik buat ngobrol santai abis kelas. Makanannya murah tapi enak banget!", name: "Ibnas" },
  { text: "Memorable banget — tiap hari ke Tamgan, kalau rame ya lanjut ke Ganyang. Hehe.", name: "Fira" },
  { text: "Suasananya khas banget, apalagi pas malam. Lampu-lampunya bikin nyaman.", name: "Apay" },
];

const TESTIMONIALS_BOTTOM = [
  { text: "Tempat yang gak pernah gagal buat nongkrong dan curhat random.", name: "Raharjo" },
  { text: "Makanannya enak, pelayannya ramah. Feels like home!", name: "Paijo" },
  { text: "Tempat favorit buat nugas bareng temen. Kopinya mantap!", name: "Athan" },
];

const ANIMATION = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const useMarqueeStyles = () => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (!document.getElementById("testimoni-styles")) {
      const style = document.createElement("style");
      style.id = "testimoni-styles";
      style.textContent = `
        @keyframes marquee-left { 0% {transform:translateX(0%)} 100% {transform:translateX(-50%)} }
        @keyframes marquee-right { 0% {transform:translateX(-50%)} 100% {transform:translateX(0%)} }

        .marquee-left { animation: marquee-left 55s linear infinite; }
        .marquee-right { animation: marquee-right 60s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .marquee-left, .marquee-right { animation: none; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
};

const TestimonialCard = ({ text, name }) => (
  <article
    className="bg-bg-soft dark:bg-bg-warm rounded-2xl p-6 md:p-8 shadow-card 
               w-[85vw] sm:w-[400px] md:w-[480px] min-h-[260px]
               flex flex-col justify-between transition-all duration-300 
               hover:shadow-xl hover:-translate-y-1"
  >
    <div>
      <div className="text-primary text-4xl mb-4" aria-hidden="true">❝</div>
      <p className="text-base md:text-lg leading-relaxed text-text-primary 
                    dark:text-text-secondary text-center">
        {text}
      </p>
    </div>

    <div className="flex items-center justify-center gap-3 mt-6">
      <div 
        className="w-10 h-10 rounded-full bg-primary/15 flex items-center 
                   justify-center text-primary font-bold"
        aria-hidden="true"
      >
        {name[0]}
      </div>
      <p className="text-sm font-medium text-text-muted dark:text-text-secondary/80">
        {name}
      </p>
    </div>
  </article>
);

const MarqueeRow = ({ testimonials, direction }) => {
  const marqueeClass = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-6 w-max ${marqueeClass}`}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`${direction}-${i}`} text={t.text} name={t.name} />
          ))}
        </div>
        <div className="flex gap-6" aria-hidden="true">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`${direction}-dup-${i}`} text={t.text} name={t.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Testimoni() {
  useMarqueeStyles();

  return (
    <section
      id="testimoni"
      className="relative w-full py-20 md:py-28 overflow-hidden
                 bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold
                 dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold"
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(229, 118, 33, 0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <motion.header
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
            Apa Kata Mereka?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary">
            Testimoni dari <span className="text-primary">Mahasiswa</span>
          </h2>
        </motion.header>

        <motion.div
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-10"
        >
          <MarqueeRow testimonials={TESTIMONIALS_TOP} direction="left" />
        </motion.div>

        <motion.div
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-10"
        >
          <MarqueeRow testimonials={TESTIMONIALS_BOTTOM} direction="right" />
        </motion.div>

        <motion.div
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent 
                     via-primary/40 to-transparent mt-16"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}