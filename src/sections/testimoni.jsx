"use client";

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

/* ==========================
   DATA (improved per review)
   ========================== */

const TESTIMONIALS_TOP = [
  {
    text: "Tempat terbaik buat ngobrol santai abis kelas. Makanannya murah tapi enak banget!",
    name: "Ibnes",
    role: "Mahasiswa IF '22",
    rating: 5,
    date: "2 minggu lalu",
    avatar: "/assets/avatar/a1.webp"
  },
  {
    text: "Memorable banget! tiap hari ke Tamgan, kalau rame ya lanjut ke Ganyang.",
    name: "Fira",
    role: "Mahasiswa STEI '23",
    rating: 5,
    date: "1 bulan lalu",
    avatar: "/assets/avatar/a2.webp"
  },
  {
    text: "Suasananya khas banget, apalagi pas malam. Lampu-lampunya bikin nyaman.",
    name: "Apay",
    role: "Mahasiswa Minyak '21",
    rating: 4,
    date: "3 hari lalu",
    avatar: "/assets/avatar/a3.jpeg"
  }
];

const TESTIMONIALS_BOTTOM = [
  {
    text: "Tempat yang gak pernah gagal buat nongkrong dan curhat random.",
    name: "Raharjo",
    role: "Mahasiswa Sipil '20",
    rating: 5,
    date: "1 minggu lalu",
    avatar: "/assets/avatar/a4.gif"
  },
  {
    text: "Makanannya enak, pelayannya ramah. Feels like home!",
    name: "Paijo",
    role: "Mahasiswa Mesin '21",
    rating: 4,
    date: "5 hari lalu",
    avatar: "/assets/avatar/a5.jpg"
  },
  {
    text: "Tempat favorit buat nugas bareng temen. Kopinya mantap!",
    name: "Athan",
    role: "Mahasiswa Tambang '23",
    rating: 5,
    date: "2 minggu lalu",
    avatar: "/assets/avatar/a6.jpg"
  }
];

/* ==========================
   ANIMATION
   ========================== */

const ANIMATION = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ==========================
   CSS Marquee (Same logic as original)
   ========================== */

const useMarqueeStyles = () => {
  const styleContent = useMemo(
    () => `
    @keyframes marquee-left { 
      0% { transform: translateX(0%); } 
      100% { transform: translateX(-50%); } 
    }
    @keyframes marquee-right { 
      0% { transform: translateX(-50%); } 
      100% { transform: translateX(0%); } 
    }

    .marquee-left { 
      animation: marquee-left 55s linear infinite;
    }
    .marquee-right { 
      animation: marquee-right 55s linear infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .marquee-left, .marquee-right {
        animation: none !important;
      }
    }
  `,
    []
  );

  useEffect(() => {
    if (document.getElementById("testimoni-styles")) return;

    const style = document.createElement("style");
    style.id = "testimoni-styles";
    style.textContent = styleContent;

    document.head.appendChild(style);
  }, [styleContent]);
};

/* ==========================
   CARD COMPONENT
   ========================== */

const TestimonialCard = ({ text, name, role, rating, date, avatar }) => (
  <article
    className="bg-bg-soft dark:bg-bg-warm rounded-2xl p-6 md:p-8 shadow-card 
               w-[85vw] sm:w-[400px] md:w-[480px] min-h-[260px]
               flex flex-col justify-between transition-all duration-300 
               hover:shadow-xl hover:-translate-y-1"
  >
    <div>
      <div className="text-primary text-4xl mb-4">❝</div>

      <p className="text-base md:text-lg leading-relaxed text-text-primary dark:text-text-secondary text-center">
        {text}
      </p>
    </div>

    <div className="flex flex-col items-center gap-2 mt-6">
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border border-primary/40"
      />

      <p className="text-sm font-semibold text-text-primary dark:text-text-secondary">
        {name}
      </p>

      <p className="text-xs text-text-muted dark:text-text-secondary/70">{role}</p>

      <div className="flex gap-1 text-primary text-sm">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      <p className="text-[11px] text-text-muted dark:text-text-secondary/70">{date}</p>
    </div>
  </article>
);

/* ==========================
   MARQUEE ROW (NONSTOP)
   ========================== */

const MarqueeRow = ({ testimonials, direction }) => {
  const cls = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-6 w-max ${cls}`}>
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

/* ==========================
   MAIN COMPONENT
   ========================== */

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
            "radial-gradient(circle at 20% 50%, rgba(229,118,33,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10">

        <motion.header
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
            Apa Kata Mereka?
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary">
            Testimoni dari <span className="text-primary">Mahasiswa</span> ITB
          </h2>
        </motion.header>

        <motion.div
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          className="mb-10"
        >
          <MarqueeRow testimonials={TESTIMONIALS_TOP} direction="left" />
        </motion.div>

        <motion.div
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          className="mb-10"
        >
          <MarqueeRow testimonials={TESTIMONIALS_BOTTOM} direction="right" />
        </motion.div>

        <motion.div
          variants={ANIMATION}
          initial="hidden"
          whileInView="show"
          className="w-full h-[1px] bg-gradient-to-r from-transparent 
                     via-primary/40 to-transparent mt-16"
        />
      </div>
    </section>
  );
}