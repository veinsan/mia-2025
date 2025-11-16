"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Search, Info, MapPin } from "lucide-react";
import { ANIMATION_CONFIG } from "./caraEksplorConfig";

const ICONS = { Search, Info, MapPin };

export default function StepItem({ step, completed, toggle, isMobile }) {
  const Icon = ICONS[step.icon];

  return (
    <motion.article
      variants={ANIMATION_CONFIG.STEP_ITEM}
      onClick={() => toggle(step.number)}
      className={`relative cursor-pointer select-none transition-all duration-300 ${
        completed ? "opacity-50" : "opacity-100"
      }`}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute -left-3 sm:-left-4 md:-left-5 top-4 sm:top-5 md:top-6 z-10">
        <motion.div
          className={`${step.color} text-white font-extrabold w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-lg shadow-lg ring-2 ring-white/20`}
          whileHover={!isMobile ? { scale: 1.1 } : {}}
        >
          {completed ? (
            <motion.div variants={ANIMATION_CONFIG.CHECKMARK} initial="hidden" animate="show">
              <CheckCircle2 size={isMobile ? 16 : 20} />
            </motion.div>
          ) : (
            step.number
          )}
        </motion.div>
      </div>

      <div className="bg-white/95 dark:bg-bg-base/95 backdrop-blur-sm pl-10 sm:pl-12 md:pl-16 pr-3 sm:pr-4 md:pr-6 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 dark:border-orange-900/20">
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-0">
          <Icon className="text-primary shrink-0 mt-0.5 sm:mt-0" size={isMobile ? 16 : 20} />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-primary text-sm sm:text-base md:text-lg lg:text-xl leading-tight truncate sm:whitespace-normal">
              {step.title}
            </h3>
            <p className="text-text-secondary dark:text-white/70 text-xs sm:text-sm md:text-base leading-snug line-clamp-2 sm:line-clamp-1">
              {step.subtitle}
            </p>
          </div>
        </div>
      </div>

      <motion.p
        className="pl-10 sm:pl-12 md:pl-16 mt-2 text-xs sm:text-sm text-white/90 dark:text-white/80 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {step.tip}
      </motion.p>
    </motion.article>
  );
}