"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG, BLOB_CONFIG } from "./tentangConfig";

export default function TentangVisuals() {
  return (
    <>
      <div className="absolute inset-x-0 -top-px z-20 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: ANIMATION_CONFIG.WAVE.duration,
            repeat: Infinity,
            ease: ANIMATION_CONFIG.WAVE.ease,
          }}
          className="w-[200%]"
        >
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px]">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="[stop-color:theme(colors.primary.DEFAULT)] [stop-opacity:0.4]" />
                <stop offset="50%" className="[stop-color:theme(colors.accent.DEFAULT)] [stop-opacity:0.6]" />
                <stop offset="100%" className="[stop-color:theme(colors.primary.hover)] [stop-opacity:0.5]" />
              </linearGradient>
            </defs>

            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {BLOB_CONFIG.map((blob, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, i % 2 === 0 ? -15 : 15, 0] }}
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute rounded-full blur-3xl ${blob.class} ${blob.size} ${blob.color}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[200%] md:w-[300%] h-[40px] sm:h-[60px] z-40 overflow-hidden">
        <div className="marquee-right flex h-full">
          <img src="/assets/Banner.svg" alt="Dekorasi banner bawah" className="w-full h-full object-cover" />
          <img src="/assets/Banner.svg" alt="Dekorasi banner bawah" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}