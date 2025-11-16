"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MOTION_CONFIG } from "./motionConfig";
import { CATEGORIES } from "@/data/umkmData";

export default function CategoryDropdown({
  darkMode,
  catOpen,
  setCatOpen,
  onCategoryClick,
  catMenuRef,
  catButtonRef,
}) {
  return (
    <div className="relative hidden md:block">
      <button
        ref={catButtonRef}
        onClick={() => setCatOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={catOpen}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          darkMode ? "text-white" : "text-text-primary"
        } hover:text-primary`}
      >
        <span className="select-none">Kategori</span>
        <ChevronDown size={16} className={`transform transition-transform ${catOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {catOpen && (
          <motion.div
            ref={catMenuRef}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 6, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={MOTION_CONFIG.dropdown}
            role="menu"
            aria-label="Kategori menu"
            className="absolute right-0 mt-2 w-[240px] bg-bg-base dark:bg-bg-warm rounded-2xl shadow-xl ring-1 ring-black/6 p-3 z-40"
          >
            <ul className="flex flex-col gap-1">
              {CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onCategoryClick(c.id);
                      setCatOpen(false);
                    }}
                    role="menuitem"
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-primary/10 transition-colors text-left"
                  >
                    <span className="text-lg">{c.icon}</span>
                    <span className="flex-1 text-text-primary dark:text-text-secondary">{c.label}</span>
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    onCategoryClick("all");
                    setCatOpen(false);
                  }}
                  role="menuitem"
                  className="w-full block mt-1 px-3 py-2 rounded-lg text-sm text-text-muted hover:bg-bg-soft transition-colors text-left"
                >
                  Lihat Semua
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}