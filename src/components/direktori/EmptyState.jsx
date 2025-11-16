"use client";

import { motion } from "framer-motion";

export default function EmptyState({ onReset, onSuggestionClick }) {
  const suggestions = ["Ayam", "Kopi", "Mie", "Bebek", "Nasi Goreng"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-20 px-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="text-8xl mb-6"
      >
        🔍
      </motion.div>

      <h3 className="text-2xl md:text-3xl font-bold text-text-secondary mb-3">
        Ups, Tidak Ada Hasil
      </h3>

      <p className="text-text-muted mb-8 max-w-md mx-auto leading-relaxed">
        Coba kata kunci lain atau ubah kategori filter untuk menemukan
        tempat makan yang kamu cari.
      </p>

      <div className="flex flex-wrap gap-2 justify-center items-center mb-8">
        <span className="text-sm text-text-muted font-medium">Coba cari:</span>
        {suggestions.map((term) => (
          <motion.button
            key={term}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSuggestionClick(term)}
            className="px-4 py-2 rounded-full bg-bg-soft dark:bg-bg-warm text-sm font-medium
                       text-text-secondary hover:bg-primary hover:text-white 
                       transition-all shadow-sm hover:shadow-md"
          >
            {term}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-8 py-3 bg-primary text-white rounded-full font-semibold
                   hover:bg-primary/90 transition-colors shadow-lg"
      >
        Reset Semua Filter
      </motion.button>
    </motion.div>
  );
}