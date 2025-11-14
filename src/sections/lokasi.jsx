"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

/* ============================================
   ANIMATION CONFIG
   ============================================ */

const ANIMATION_CONFIG = {
  FADE_UP: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  FADE_UP_DELAY: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  },
  MAP_SCALE: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
  BUTTON_HOVER: {
    scale: 1.06,
    textShadow: "0 0 8px rgba(229,118,33,0.4)",
  },
};

const MAPS_LOCATION = "Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132";
const MAPS_DIRECT_URL = "https://maps.app.goo.gl/kAUnsipvPasm7YzT9";

/* ============================================
   LOADING SKELETON COMPONENT
   ============================================ */

const MapSkeleton = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-bg-soft dark:bg-bg-base rounded-2xl overflow-hidden">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full"
      aria-hidden="true"
    />
  </div>
);

/* ============================================
   MAIN LOKASI COMPONENT
   ============================================ */

export default function Lokasi() {
  const sectionRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Mobile Detection */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Scroll Animation Intersection Observer */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("opacity-100", "translate-y-0");
          section.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lokasi"
      className="
        opacity-0 translate-y-10 py-20 md:py-28 px-6 md:px-10 relative overflow-hidden
        bg-gradient-to-b from-bg-gold via-bg-soft to-bg-warm
        dark:from-bg-base dark:via-bg-soft dark:to-bg-warm
        transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
      "
      aria-labelledby="lokasi-title"
    >
      {/* Ambient Glow - Subtle Background */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute top-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[90%] h-[40%] md:h-[50%]
          bg-gradient-to-b from-accent/40 to-transparent
          rounded-full blur-3xl pointer-events-none
        "
      />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h4
            {...ANIMATION_CONFIG.FADE_UP}
            viewport={{ once: true }}
            whileInView={{...ANIMATION_CONFIG.FADE_UP.animate}}
            className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm"
          >
            Lokasi Kami
          </motion.h4>

          <motion.h2
            id="lokasi-title"
            {...ANIMATION_CONFIG.FADE_UP}
            viewport={{ once: true }}
            whileInView={{...ANIMATION_CONFIG.FADE_UP.animate}}
            className="
              text-3xl sm:text-4xl md:text-5xl font-bold
              text-text-primary dark:text-text-secondary mb-4
              leading-tight
            "
          >
            Kunjungi Gelap Nyawang
            <br />
            <span className="text-primary">Bandung</span>
          </motion.h2>

          <motion.p
            {...ANIMATION_CONFIG.FADE_UP_DELAY}
            viewport={{ once: true }}
            whileInView={{...ANIMATION_CONFIG.FADE_UP_DELAY.animate}}
            className="
              text-sm md:text-base text-text-muted dark:text-text-secondary/80
              max-w-2xl mx-auto leading-relaxed
            "
          >
            Langsung kunjungi dan rasakan suasana kuliner autentik — tempat favorit 
            mahasiswa ITB untuk hangout, belajar, atau sekadar santai.
          </motion.p>
        </div>

        {/* Map Container */}
        <motion.div
          {...ANIMATION_CONFIG.MAP_SCALE}
          viewport={{ once: true }}
          whileInView={{...ANIMATION_CONFIG.MAP_SCALE.animate}}
          className="
            relative w-full rounded-2xl overflow-hidden
            shadow-card hover:shadow-glow
            transition-shadow duration-500
            bg-bg-soft dark:bg-bg-base
          "
          style={{
            height: isMobile ? "400px" : "500px",
          }}
        >
          {!isMapLoaded && <MapSkeleton />}

          <iframe
            src={`https://www.google.com/maps?q=${MAPS_LOCATION}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Lokasi Gelap Nyawang, Bandung"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsMapLoaded(true)}
            className="w-full h-full"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <motion.a
            href={MAPS_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={!isMobile ? ANIMATION_CONFIG.BUTTON_HOVER : {}}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center gap-2
              px-6 md:px-8 py-3 md:py-4
              bg-primary hover:bg-primary/90 text-white
              font-semibold text-base md:text-lg
              rounded-full shadow-glow
              focus:ring-4 focus:ring-primary/40 focus:outline-none
              transition-all cursor-pointer
              group
            "
            aria-label="Buka di Google Maps - Gelap Nyawang"
          >
            <MapPin size={20} className="transition-transform group-hover:scale-110" />
            <span>Buka di Maps</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Gradient Transition to Next Section */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-24 md:h-32
          bg-gradient-to-b from-transparent via-primary/30 to-secondary/50
          dark:via-accent/30 dark:to-primary/40
          pointer-events-none transition-colors duration-500
        "
        aria-hidden="true"
      />

      {/* Subtle Glow Separator Line */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-px
          bg-gradient-to-r from-transparent via-primary/40 to-transparent
          opacity-60 blur-sm
        "
        aria-hidden="true"
      />
    </section>
  );
}