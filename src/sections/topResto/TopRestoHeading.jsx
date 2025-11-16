"use client";

import { motion } from "framer-motion";
import { TEXT_GLOW } from "./topRestoConfig";

export default function TopRestoHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
        Tempat Andalan
      </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-text-primary dark:text-text-secondary">
        Rekomendasi{" "}
        <motion.span className="text-primary inline-block" animate={TEXT_GLOW}>
          Kami
        </motion.span>
      </h2>

      <p className="text-text-muted dark:text-text-secondary/80 text-base md:text-lg max-w-md leading-relaxed">
        Kumpulan tempat makan terbaik di Gelap Nyawang yang telah teruji
        kelezatannya. Pilihan yang tepat untuk memuaskan selera kuliner kamu!
      </p>
    </motion.div>
  );
}