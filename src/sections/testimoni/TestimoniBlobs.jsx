"use client";

import { motion } from "framer-motion";

export default function TestimoniBlobs() {
  return (
    <>
      <motion.div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl" animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true" />
      <motion.div className="absolute top-1/3 right-1/6 w-40 h-40 sm:w-56 sm:h-56 bg-accent/5 rounded-full blur-3xl" animate={{ y: [0, 20, 0], x: [0, -10, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true" />
    </>
  );
}