"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { MOTION_CONFIG } from "./motionConfig";
import { CATEGORIES } from "@/data/umkmData";

export default function MobileDrawer({ open, onClose, navLinks, darkMode, onCategoryClick }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end"
          onClick={onClose}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={MOTION_CONFIG.drawer}
            className="w-[80%] sm:w-[400px] bg-bg-base dark:bg-bg-soft text-text-primary h-full shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between mb-6">
              <a href="/" onClick={onClose} aria-label="Go to home">
                <img
                  src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
                  alt="Gelap Nyawang Logo"
                  className="h-9"
                  draggable="false"
                />
              </a>

              <button onClick={onClose} className="p-2 rounded-lg hover:bg-bg-soft transition-colors" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={onClose}
                  className="py-2 px-3 rounded-md text-lg hover:bg-bg-soft transition-colors"
                >
                  {l.label}
                </a>
              ))}

              <hr className="my-4 border-border-light dark:border-border-default" />

              <div>
                <h4 className="text-sm font-medium mb-3 text-text-muted">Kategori</h4>

                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onCategoryClick(c.id);
                        onClose();
                      }}
                      className="py-3 px-3 rounded-lg text-sm bg-bg-soft hover:bg-primary/10 hover:text-primary transition-colors text-left flex items-center gap-2 min-h-[60px]"
                    >
                      <span className="text-base">{c.icon}</span>
                      <span className="leading-tight">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}