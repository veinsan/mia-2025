"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

const MAPS_LOCATION =
  "Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132";

const MAPS_DIRECT_URL = "https://maps.app.goo.gl/kAUnsipvPasm7YzT9";

export default function Lokasi() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="lokasi"
      className="
        w-full 
        pt-10 md:pt-12 
        pb-20 md:pb-28 
        px-6 md:px-10
        relative overflow-hidden
        bg-gradient-to-b 
        from-bg-soft via-bg-warm to-bg-gold
        dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold
      "
    >
      {/* Top Gradient */}
      <div
        className="
          absolute top-0 left-0 w-full h-20 md:h-24
          bg-gradient-to-b from-bg-gold via-bg-warm to-bg-soft
          dark:from-bg-gold dark:via-bg-warm dark:to-bg-soft
          pointer-events-none
          z-0
        "
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative z-10 text-center pt-20 md:pt-24 mb-10 md:mb-12">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm"
        >
          Lokasi Kami
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            text-3xl sm:text-4xl md:text-5xl font-bold 
            text-text-primary dark:text-text-secondary
          "
        >
          Kunjungi <span className="text-primary">Gelap Nyawang</span>
        </motion.h2>
      </header>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative 
          w-full 
          h-[400px] md:h-[500px] 
          rounded-2xl 
          overflow-hidden 
          shadow-xl 
          bg-bg-soft 
          dark:bg-bg-base
        "
      >
        {/* Loading Spinner */}
        {!loaded && (
          <div
            className="
              absolute inset-0 
              flex items-center justify-center 
              bg-bg-soft dark:bg-bg-base 
              z-10
            "
          >
            <div
              className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"
              role="status"
              aria-label="Loading map"
            />
          </div>
        )}

        <iframe
          src={`https://www.google.com/maps?q=${MAPS_LOCATION}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="w-full h-full"
          title="Lokasi Gelap Nyawang di Google Maps"
          allowFullScreen
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 flex justify-center"
      >
        <a
          href={MAPS_DIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            px-6 md:px-8 py-3
            bg-primary text-white
            font-semibold text-base md:text-lg
            rounded-full shadow-lg
            hover:bg-primary/90 transition-colors
          "
        >
          <MapPin size={20} />
          Buka di Google Maps
        </a>
      </motion.div>

      {/* Bottom Gradient */}
      <div
        className="
          absolute bottom-0 left-0 w-full 
          h-24 md:h-32
          bg-gradient-to-b 
          from-transparent via-bg-warm/50 to-bg-gold 
          dark:via-bg-warm/50 dark:to-bg-gold
          pointer-events-none
        "
        aria-hidden="true"
      />
    </section>
  );
}
