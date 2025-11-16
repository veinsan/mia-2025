"use client";

import { motion } from "framer-motion";
import { categoriesContainer, heroItem } from "@/lib/animations";
import { CATEGORIES } from "@/data/umkmData";

export default function CategoryButtons({ activeCategory, onCategoryChange }) {
  return (
    <motion.div
      variants={categoriesContainer}
      className="mt-10 flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-4 
                 w-full max-w-4xl"
    >
      {CATEGORIES.map((cat) => {
        const active = cat.id === activeCategory;
        return (
          <motion.button
            key={cat.id}
            variants={heroItem}
            onClick={() => onCategoryChange(cat.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center gap-2 px-4 md:px-5 py-3 md:py-4 
                        rounded-2xl min-w-[85px] md:min-w-[95px]
                        bg-white/75 dark:bg-bg-soft border transition-all
                        ${
                          active
                            ? "border-[#EB7610] dark:border-[#EC760D] shadow-lg scale-105"
                            : "border-white/40 dark:border-border-default hover:shadow-md"
                        }`}
            aria-pressed={active}
            aria-label={`Filter by ${cat.label}`}
          >
            <span className="text-xl md:text-2xl">{cat.icon}</span>
            <span 
              className={`text-xs md:text-sm font-medium transition-colors ${
                active 
                  ? "text-[#EB7610] dark:text-[#EC760D]" 
                  : "text-[#2B1B0F] dark:text-[#FFF8F0]"
              }`}
            >
              {cat.label}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}