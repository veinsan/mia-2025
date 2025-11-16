"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { ANIMATION_CONFIG } from "./galeriConfig";

export default function GalleryCard({ item, index, onClick, isMobile }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      variants={ANIMATION_CONFIG.CARD}
      onClick={onClick}
      onMouseEnter={() => !isMobile && setHover(true)}
      onMouseLeave={() => !isMobile && setHover(false)}
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ aspectRatio: "4/3" }}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src={item.src}
        alt={`${item.location} - ${item.text}`}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading={index < 3 ? "eager" : "lazy"}
        priority={index < 2}
        quality={85}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 pointer-events-none" />

      <motion.div
        animate={{
          opacity: hover && !isMobile ? 0 : 1,
          y: hover && !isMobile ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10"
      >
        <span className="text-white font-semibold text-xs sm:text-sm bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-white/20 truncate max-w-[75%]">
          📍 {item.location}
        </span>

        <Maximize2 size={18} className="text-white drop-shadow-lg" />
      </motion.div>

      <AnimatePresence>
        {hover && !isMobile && (
          <motion.div
            variants={ANIMATION_CONFIG.OVERLAY}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-dark/95 backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 pointer-events-none opacity-30"
          >
            <motion.img
              src="/assets/logo.png"
              alt=""
              width={80}
              height={80}
              className="w-14 sm:w-16 md:w-20 mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            />

            <motion.p
              className="font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-2 line-clamp-3 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {item.text}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-1 sm:gap-2 justify-center mt-2 max-w-full px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/30 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}