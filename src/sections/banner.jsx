"use client";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section
      id="kontak"
      className="
        relative bg-bg-gold dark:bg-bg-soft text-text-primary dark:text-text-secondary
        rounded-2xl mx-6 md:mx-16 lg:mx-24 my-20 overflow-hidden shadow-card
        transition-colors duration-500
      "
    >
      {/* Foto kiri */}
      <img
        src="/assets/banner/left.png"
        alt="Suasana Gelap Nyawang kiri"
        className="absolute -left-16 bottom-0 w-[320px] md:w-[420px] lg:w-[480px] object-contain opacity-25 pointer-events-none select-none"
      />

      {/* Foto kanan */}
      <img
        src="/assets/banner/right.png"
        alt="Suasana Gelap Nyawang kanan"
        className="absolute -right-16 bottom-0 w-[320px] md:w-[420px] lg:w-[480px] object-contain opacity-25 pointer-events-none select-none"
      />

      {/* Konten utama */}
      <div className="relative z-10 py-20 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight"
        >
          Nikmati <span className="text-primary">Cita Rasa Lokal</span> di{" "}
          <span className="text-secondary">Gelap Nyawang</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="
            text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10
            leading-relaxed text-text-secondary/90 dark:text-text-secondary
          "
        >
          Temukan pengalaman kuliner yang memadukan rasa autentik, suasana hangat,
          dan keramahan khas Bandung — hanya di kawasan legendaris Gelap Nyawang.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://wa.me/6289656054453"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              bg-primary text-white font-semibold px-8 py-3 rounded-full
              text-base md:text-lg shadow-glow hover:bg-secondary
              transition-all duration-300
            "
          >
            Hubungi Kami
          </motion.a>
        </motion.div>
      </div>

      {/* Transisi halus ke footer */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[140px]
          bg-gradient-to-b from-transparent via-primary/40 to-secondary/70
          dark:via-accent/50 dark:to-primary/60
          pointer-events-none transition-colors duration-500
        "
      />
    </section>
  );
}
