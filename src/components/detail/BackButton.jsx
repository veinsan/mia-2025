"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Link
        href="/direktori"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-text-secondary dark:bg-primary text-white font-semibold shadow-lg hover:opacity-90 transition-opacity"
      >
        <span>←</span>
        Kembali ke Direktori
      </Link>
    </motion.div>
  );
}