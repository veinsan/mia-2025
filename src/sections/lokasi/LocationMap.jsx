"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MAPS_LOCATION } from "./lokasiConfig";

export default function LocationMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-bg-soft dark:bg-bg-base"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-soft dark:bg-bg-base z-10">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
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
        allowFullScreen
      />
    </motion.div>
  );
}