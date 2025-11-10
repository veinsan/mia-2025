"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullText =
    "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!";

  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const layerRefs = useRef([]);
  useEffect(() => {
    layerRefs.current = [];
  }, []);
  const addLayerRef = (el) => {
    if (el && !layerRefs.current.includes(el)) layerRefs.current.push(el);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), 500);
      }
    }, 52);
    return () => clearInterval(interval);
  }, []);

  const bgImages = [
    { src: "/assets/hero/bg1.webp", style: "left-[4%] top-[6%] max-w-[520px] w-[70vw]" },
    { src: "/assets/hero/bg2.webp", style: "left-[30%] top-[12%] max-w-[520px] w-[70vw]" },
    { src: "/assets/hero/bg3.webp", style: "right-[8%] top-[8%] max-w-[520px] w-[70vw]" },
    { src: "/assets/hero/bg4.webp", style: "left-[10%] bottom-[8%] max-w-[520px] w-[70vw]" },
    { src: "/assets/hero/bg5.webp", style: "right-[20%] bottom-[10%] max-w-[520px] w-[70vw]" },
    { src: "/assets/hero/bg6.webp", style: "right-[4%] top-[44%] max-w-[420px] w-[60vw]" },
  ];
  const durations = [16, 18, 20, 17, 19, 21];

  useEffect(() => {
    let mounted = true;
    let rafId = null;
    const handle = () => {
      if (!mounted) return;
      if (document.hidden) {
        rafId = requestAnimationFrame(handle);
        return;
      }
      const scrollY = window.scrollY || window.pageYOffset;
      const base = Math.min(window.innerHeight, 1200);
      const visibleRatio = Math.max(0, Math.min(1, scrollY / base));

      layerRefs.current.forEach((el, i) => {
        const speed = (i + 1) * 0.08;
        const translateY = -visibleRatio * 30 * speed;
        const translateX = visibleRatio * 20 * (i % 2 === 0 ? -1 : 1);
        el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });

      rafId = requestAnimationFrame(handle);
    };
    rafId = requestAnimationFrame(handle);
    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="
        relative flex flex-col justify-center items-center text-center overflow-hidden
        min-h-screen pt-28 sm:pt-32 md:pt-40 pb-20 px-6 md:px-10
        bg-[#0A0A0A] text-white
      "
    >
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {bgImages.map((img, i) => (
          <motion.div
            key={i}
            ref={addLayerRef}
            className={`absolute rounded-2xl overflow-hidden shadow-2xl ${img.style}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: [0.9, 1, 0.9],
              y: [0, i % 2 === 0 ? -18 : 18, 0],
              scale: [1, 1.06, 1],
              rotate: [0, i % 2 === 0 ? 1.2 : -1.2, 0],
            }}
            transition={{
              duration: durations[i],
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.img
              src={img.src}
              alt={`Suasana kuliner di Gelap Nyawang ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  "brightness(0.45) blur(1px)",
                  "brightness(0.85) blur(0px)",
                  "brightness(0.45) blur(1px)",
                ],
              }}
              transition={{
                duration: durations[i] + 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 px-3 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-heading mb-6"
        >
          Ganyang Lapar di{" "}
          <motion.span
            className="text-primary inline-block"
            animate={{
              textShadow: [
                "0px 0px 0px #E57621",
                "0px 0px 20px rgba(229,118,33,0.6)",
                "0px 0px 0px #E57621",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Gelap Nyawang
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg mt-4 max-w-2xl mx-auto font-light tracking-wide leading-relaxed text-white/90"
        >
          {displayText}
          <motion.span
            animate={
              typingDone
                ? { opacity: 0 }
                : { opacity: [1, 0, 1] }
            }
            transition={
              typingDone
                ? { duration: 0.4, ease: "easeInOut" }
                : { duration: 0.7, repeat: Infinity, ease: "easeInOut" }
            }
            className="ml-1 text-white/80"
          >
            |
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="/direktori"
            whileHover={{
              scale: typeof window !== "undefined" && window.innerWidth > 640 ? 1.05 : 1,
              boxShadow: "0 8px 28px rgba(229,118,33,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-glow focus:ring-4 focus:ring-primary/40 transition-all"
          >
            Jelajahi Sekarang
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
  