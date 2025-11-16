"use client";
import { motion } from "framer-motion";

export default function GlowLine() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full h-[6px] bg-white/50 blur-sm opacity-70"
      animate={{ x: ["0%", "20%", "0%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}