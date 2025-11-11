"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================
   TESTIMONIAL DATA (Static)
   ============================================ */

const TESTIMONIALS_TOP = [
  {
    text: "Tempat terbaik buat ngobrol santai abis kelas. Makanannya murah tapi enak banget!",
    name: "Ibnas",
  },
  {
    text: "Memorable banget — tiap hari ke Tamgan, kalau rame ya lanjut ke Ganyang. Hehe.",
    name: "Fira",
  },
  {
    text: "Suasananya khas banget, apalagi pas malam. Lampu-lampunya bikin nyaman.",
    name: "Apay",
  },
];

const TESTIMONIALS_BOTTOM = [
  {
    text: "Tempat yang gak pernah gagal buat nongkrong dan curhat random.",
    name: "Raharjo",
  },
  {
    text: "Makanannya enak, pelayannya ramah. Feels like home!",
    name: "Paijo",
  },
  {
    text: "Tempat favorit buat nugas bareng temen. Kopinya mantap!",
    name: "Athan",
  },
];

/* ============================================
   ANIMATION CONFIGURATION
   ============================================ */

const ANIMATION_CONFIG = {
  MARQUEE_LEFT: 55,
  MARQUEE_RIGHT: 60,
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
   ANIMATION STYLES (Global)
   ============================================ */

const getMarqueeStyles = () => `
  @keyframes marquee-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .marquee-left {
    animation: marquee-left ${ANIMATION_CONFIG.MARQUEE_LEFT}s linear infinite;
  }
  .marquee-right {
    animation: marquee-right ${ANIMATION_CONFIG.MARQUEE_RIGHT}s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .marquee-left,
    .marquee-right {
      animation: none;
    }
  }
`;

/* ============================================
   INJECT STYLES (Once)
   ============================================ */

const useMarqueeStyles = () => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (!document.getElementById("testimoni-styles")) {
      const style = document.createElement("style");
      style.id = "testimoni-styles";
      style.textContent = getMarqueeStyles();
      document.head.appendChild(style);
    }
  }, []);
};

/* ============================================
   TESTIMONIAL CARD
   ============================================ */

const TestimonialCard = ({ text, name }) => (
  <div
    className="bg-bg-soft dark:bg-bg-warm rounded-2xl p-6 md:p-8 shadow-card w-[85vw] sm:w-[400px] md:w-[480px] min-h-[260px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    role="article"
    aria-label={`Testimoni dari ${name}`}
  >
    <div>
      <div className="text-primary text-4xl mb-4" aria-hidden="true">
        ❝
      </div>
      <p className="text-base md:text-lg leading-relaxed text-text-primary dark:text-text-secondary text-center">
        {text}
      </p>
    </div>

    <div className="flex items-center justify-center gap-3 mt-6">
      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
        {name[0]}
      </div>
      <p className="text-sm font-medium text-text-muted dark:text-text-secondary/80">
        {name}
      </p>
    </div>
  </div>
);

/* ============================================
   MARQUEE ROW
   ============================================ */

const MarqueeRow = ({ testimonials, direction = "left" }) => {
  const marqueeClass =
    direction === "left" ? "marquee-left" : "marquee-right";

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div
      className="overflow-hidden"
      role="region"
      aria-label={`Testimoni deretan ${direction === "left" ? "atas" : "bawah"}`}
    >
      <div className={`flex gap-6 w-max ${marqueeClass}`}>
        {/* First set */}
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={`${direction}-first-${i}`}
              text={t.text}
              name={t.name}
            />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-6" aria-hidden="true">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={`${direction}-duplicate-${i}`}
              text={t.text}
              name={t.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================
   MAIN TESTIMONI COMPONENT
   ============================================ */

export default function Testimoni() {
  const sectionRef = useRef(null);

  /* Inject marquee styles */
  useMarqueeStyles();

  return (
    <section
      ref={sectionRef}
      id="testimoni"
      className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold transition-colors duration-500"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(229, 118, 33, 0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
            Apa Kata Mereka?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary">
            Testimoni dari{" "}
            <span className="text-primary">Mahasiswa</span>
          </h2>
        </div>

        {/* Top Marquee */}
        <div className="mb-10">
          <MarqueeRow testimonials={TESTIMONIALS_TOP} direction="left" />
        </div>

        {/* Bottom Marquee */}
        <div className="mb-10">
          <MarqueeRow testimonials={TESTIMONIALS_BOTTOM} direction="right" />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-16" />
      </div>

      {/* Gradient Fade Edges */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-gold to-transparent pointer-events-none dark:from-bg-gold"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-gold to-transparent pointer-events-none dark:from-bg-gold"
        aria-hidden="true"
      />
    </section>
  );
}