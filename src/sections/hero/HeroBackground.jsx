"use client";

import { motion } from "framer-motion";
import { BG_IMAGES, ANIMATION_CONFIG } from "./heroConfig";

export default function HeroBackground({ setLayerRef }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {BG_IMAGES.map((img, i) => (
        <motion.div
          key={`layer-${i}`}
          ref={(el) => setLayerRef(el, i)}
          className={`absolute rounded-2xl overflow-hidden shadow-2xl ${img.style}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: [0.9, 1, 0.9],
            y: [0, i % 2 === 0 ? -18 : 18, 0],
            scale: [1, ANIMATION_CONFIG.LAYERS.OSCILLATE.SCALE_MAX, 1],
            rotate: [
              0,
              i % 2 === 0
                ? ANIMATION_CONFIG.LAYERS.OSCILLATE.ROTATE_MAX
                : -ANIMATION_CONFIG.LAYERS.OSCILLATE.ROTATE_MAX,
              0,
            ],
          }}
          transition={{
            duration: ANIMATION_CONFIG.LAYERS.DURATIONS[i],
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.img
            src={img.src}
            alt=""
            loading={img.priority ? "eager" : "lazy"}
            fetchPriority={img.priority ? "high" : "auto"}
            decoding="async"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.08, 1],
              filter: [
                `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MIN}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MIN}px)`,
                `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MAX}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MAX}px)`,
                `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MIN}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MIN}px)`,
              ],
            }}
            transition={{
              duration: ANIMATION_CONFIG.LAYERS.DURATIONS[i] + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/90" />
    </div>
  );
}