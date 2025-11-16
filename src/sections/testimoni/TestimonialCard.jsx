"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Verified, Quote } from "lucide-react";
import { ANIMATION_CONFIG } from "./testimoniConfig";

export default function TestimonialCard({
  text,
  name,
  role,
  rating,
  date,
  avatar,
  verified,
  category,
  isMobile,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      whileHover={!isMobile ? ANIMATION_CONFIG.CARD_HOVER : {}}
      className="bg-white/90 dark:bg-bg-warm/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-card border border-orange-100/50 dark:border-orange-900/20 w-[85vw] sm:w-[400px] md:w-[480px] min-h-[280px] sm:min-h-[300px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden"
      aria-label={`Testimoni dari ${name}, ${role}`}
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent">
            {category}
          </span>
          <Quote className="text-primary/40" size={32} />
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-primary dark:text-text-secondary mb-6">
          &quot;{text}&quot;
        </p>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="relative shrink-0">
          <img src={avatar} alt={`${name}'s avatar`} className="w-14 h-14 rounded-full object-cover border-2 border-primary/40 shadow-md" loading="lazy" onError={(e)=>{e.target.src="/assets/avatar/default.png"}} />
          {verified && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 shadow-lg">
              <Verified size={12} className="text-white" />
            </motion.div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-bold text-text-primary dark:text-text-secondary truncate">
            {name}
          </p>
          <p className="text-xs text-text-muted dark:text-text-secondary/70 truncate">{role}</p>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                  <Star size={14} className={i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"} />
                </motion.div>
              ))}
            </div>

            <span className="text-xs text-text-muted dark:text-text-secondary/70">{date}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}