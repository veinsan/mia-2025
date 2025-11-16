"use client";

import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="w-full max-w-3xl mt-8 relative">
      <Search
        className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C13F14] dark:text-[#EC760D]"
        size={24}
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Cari resto… misal: "Black Romantic", "BWJ"…'
        className="w-full py-4 pl-14 pr-14 rounded-full 
                  bg-white/85 dark:bg-bg-soft 
                  border border-white/60 dark:border-border-default 
                  text-[#2B1B0F] dark:text-[#FFF8F0] 
                  shadow-lg focus:shadow-xl outline-none 
                  focus:ring-2 focus:ring-primary/50
                  transition-all 
                  backdrop-blur-sm placeholder:text-[#2B1B0F]/50 
                  dark:placeholder:text-[#FFF8F0]/50"
        aria-label="Search restaurants"
        aria-describedby="search-description"
      />
      <span id="search-description" className="sr-only">
        Cari berdasarkan nama atau jenis makanan
      </span>

      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClear}
            className="absolute right-6 top-1/2 -translate-y-1/2 
                       text-[#C13F14] dark:text-[#EC760D] 
                       hover:text-[#C13F14]/70 dark:hover:text-[#EC760D]/70 
                       transition-colors"
            aria-label="Clear search"
          >
            <X size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}