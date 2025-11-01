"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Lokasi() {
  const sectionRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(
            "opacity-100",
            "translate-y-0",
            "transition-all",
            "duration-[1000ms]",
            "ease-[cubic-bezier(0.22,1,0.36,1)]"
          );
          section.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(section); // animasi hanya sekali
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
      className="opacity-0 translate-y-10 py-20 bg-gradient-to-b from-[#FFF3E0] via-[#FFE5B3] to-[#FFD699] text-center px-8 relative overflow-hidden"
    >
      {/* ambient soft light */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-gradient-to-b from-[#FFF9E6]/60 to-transparent rounded-full blur-3xl"
      />

      {/* heading */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-heading text-primary mb-6"
        >
          Kunjungi Lokasi Kami
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral mb-10 text-lg max-w-2xl mx-auto opacity-80 leading-relaxed"
        >
          Langsung datang dan nikmati suasana kuliner khas Gelap Nyawang —
          tempat nongkrong favorit mahasiswa ITB.
        </motion.p>
      </div>

      {/* MAP CONTAINER */}
      <div className="relative max-w-6xl mx-auto">
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#FFF8ED] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
            <div className="animate-pulse text-[#E87524]/70">
              <div className="w-12 h-12 border-4 border-[#E87524]/40 border-t-[#E87524] rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-sm font-medium">Memuat peta...</p>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full h-[450px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-shadow duration-500"
        >
          <iframe
            src="https://www.google.com/maps?q=Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Lokasi Gelap Nyawang Bandung"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsMapLoaded(true)}
          ></iframe>
        </motion.div>
      </div>

      {/* link */}
      <motion.a
        href="https://maps.app.goo.gl/kAUnsipvPasm7YzT9"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.06,
          textShadow: "0 0 8px rgba(232,117,36,0.4)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="inline-block mt-10 text-primary font-semibold hover:text-secondary transition-colors text-lg relative z-10"
      >
        📍 Buka di Google Maps
      </motion.a>

    {/* gradient ke footer */}
    <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-b from-transparent via-[#E39D55]/70 to-[#D17B39]/90 pointer-events-none" />

    {/* glow separator */}
    <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#E9A860]/60 to-transparent blur-sm opacity-70" />
    </section>
  );
}
