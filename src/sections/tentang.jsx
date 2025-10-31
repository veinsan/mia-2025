"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Tentang / Why choose us section
 * - Responsive grid (1 / 2 / 3 cols)
 * - Framer Motion: staggered entrance when in viewport
 * - Uses Tailwind dark: utilities so it follows global dark mode (html.dark)
 * - 3 creative cards with distinct micro-interactions
 */

export default function Tentang() {
  // Respect user reduced motion preference
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Motion variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
  };

  // creative card data
  const cards = [
    {
      id: "rumahan",
      title: "Rasa Rumahan",
      subtitle: "Resep Otentik Lokal",
      desc: "Masakan dimasak pakai resep turun-temurun, aroma dan rasa yang mengingatkan rumah.",
      accent: "primary",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 11c1.5-4 4-7 9-7s7.5 3 9 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 21v-6h10v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "lokal",
      title: "Dukung UMKM Lokal",
      subtitle: "Pemberdayaan Komunitas",
      desc: "Setiap pesanan membantu mitra lokal — dari petani hingga tukang masak di sekitar kita.",
      accent: "accent",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6h.01M6 18h.01M12 6h.01M12 18h.01M18 6h.01M18 18h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "cepat",
      title: "Cepat & Praktis",
      subtitle: "Dari Kasur ke Piring",
      desc: "Proses pemesanan cepat, pengiriman handal — makanan datang hangat tanpa drama.",
      accent: "secondary",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 12h14l4 4v2H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tentang" className="py-16 px-6 md:px-10 bg-white dark:bg-[#070707] transition-colors">
      <div className="max-w-[90rem] mx-auto text-center mb-12 md:mb-16">
        <h4 className="font-delius text-xl md:text-2xl font-bold text-primary dark:text-light mb-3">Keunggulan Kami</h4>

        <h2 className="font-daysone text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-primary dark:text-light">Kenapa Harus</span>{" "}
          <span className="text-[#1F1F1F] dark:text-[#E6E6E6]">Ganyang?</span>
        </h2>

        <p className="mx-auto mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-manrope">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatum laborum eaque eligendi facere dolores, rem, quae, quidem assumenda qui quas?
        </p>
      </div>

      {/* content container */}
      <motion.div
        className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((c, idx) => (
          <motion.article
            key={c.id}
            variants={item}
            className="w-full max-w-[440px] h-[480px] sm:h-[540px] lg:h-[600px] mx-auto rounded-3xl overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105"
            style={{ perspective: 1200 }}
            aria-labelledby={`card-${c.id}-title`}
            role="article"
          >
            {/* Background image / decorative gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-b from-[#00000000] via-transparent to-[#00000000] pointer-events-none`}
              aria-hidden
            />

            {/* Image area (use different visual treatment per card) */}
            <div className="absolute inset-0">
              {/* Creative visual: semi-hero image clipped with overlay */}
              <div className="w-full h-full">
                {/* Replace with real images in /public/assets if available */}
                <div
                  className={`w-full h-full object-cover bg-cover bg-center ${
                    c.id === "rumahan"
                      ? "bg-[url('/assets/about/t1.jpg')]"
                      : c.id === "lokal"
                      ? "bg-[url('/assets/about/t2.jpg')]"
                      : "bg-[url('/assets/about/t3.jpg')]"
                  }`}
                  style={{ filter: "brightness(0.74) saturate(1.05)" }}
                />
              </div>
              {/* color overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] via-[#00000066] to-transparent" />
            </div>

            {/* Content card bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="backdrop-blur-sm bg-white/6 dark:bg-black/30 rounded-xl p-4 md:p-6">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div
                    className={`flex items-center justify-center rounded-lg w-14 h-14 ${
                      c.accent === "primary"
                        ? "bg-primary/90 text-white"
                        : c.accent === "accent"
                        ? "bg-accent/90 text-black"
                        : "bg-secondary/90 text-white"
                    }`}
                    aria-hidden
                  >
                    {c.icon}
                  </div>
                </div>

                <h3 id={`card-${c.id}-title`} className="text-2xl md:text-3xl font-mansalva font-bold text-white text-center mb-2">
                  {c.title}
                </h3>

                <p className="text-sm md:text-base text-gray-200 text-center mb-4">{c.subtitle}</p>

                <p className="text-sm md:text-base text-gray-200 text-center leading-relaxed">{c.desc}</p>

                {/* animated sweep line like sample */}
                <motion.div
                  initial={{ x: "-110%" }}
                  whileHover={{ x: "110%" }}
                  transition={{ duration: 0.9, ease: "linear" }}
                  className="pointer-events-none"
                >
                  <div
                    aria-hidden
                    className="absolute -top-10 left-0 w-[350%] h-3 rounded-full transform -rotate-12"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.0) 100%)",
                      boxShadow: "0 0 6px rgba(255,255,255,0.18)",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* subtle hover tilt */}
            <motion.div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              whileHover={{ rotate: idx % 2 === 0 ? 2 : -2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
