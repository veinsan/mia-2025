"use client";

import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MOTION_CONFIG } from "./navConfig";

export default function MobileDrawer({
  isOpen,
  onClose,
  navLinks,
  active,
  darkMode,
  onLinkClick,
  visitedSections,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end"
          onClick={onClose}
          role="presentation"
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={MOTION_CONFIG.drawer}
            className="w-[80%] sm:w-[400px] bg-bg-base text-text-primary h-full shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.a
                href="#hero"
                onClick={onClose}
                aria-label="Go to home"
                whileTap={{ scale: 0.96 }}
              >
                <motion.img
                  src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
                  alt="Gelap Nyawang Logo"
                  className="h-9 transition-opacity duration-300"
                  draggable="false"
                />
              </motion.a>

              <motion.button
                onClick={onClose}
                aria-label="Close navigation menu"
                type="button"
                className="p-2 rounded-lg hover:bg-bg-soft transition-colors"
                title="Close menu"
                whileTap={{ scale: 0.96 }}
              >
                <X size={22} />
              </motion.button>
            </div>

            <nav className="flex flex-col gap-3 mt-6" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const visited = visitedSections.has(link.id);
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => onLinkClick(link.id)}
                    className={`text-left w-full text-lg font-medium transition-colors py-3 px-3 rounded-lg flex items-center justify-between ${
                      active === link.id
                        ? "text-primary bg-bg-soft"
                        : "hover:text-primary hover:bg-bg-soft"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{link.label}</span>

                    <span className="ml-3 flex items-center gap-2">
                      {visited ? (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700">
                          <Check size={14} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-800">
                          New
                        </span>
                      )}
                    </span>
                  </motion.button>
                );
              })}
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}