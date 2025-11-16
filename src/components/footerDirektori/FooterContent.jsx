"use client";
import { motion } from "framer-motion";
import { FADE_UP } from "./footerConfig";
import FooterLogos from "./FooterLogos";
import FooterGrid from "./FooterGrid";

export default function FooterContent() {
  return (
    <motion.div
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-10">
        <FooterLogos />
      </div>

      <hr className="border-white/30 mb-12" />

      <FooterGrid />

      <hr className="border-white/30 mb-8" />

      <div className="max-w-7xl mx-auto text-center text-sm md:text-base text-white/80 leading-relaxed">
        © 2025 Gelap Nyawang. Website ini dibuat untuk Web Development Competition
        MIA 2025.
      </div>
    </motion.div>
  );
}