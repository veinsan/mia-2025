"use client";

import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getButtonBase, MOTION_CONFIG } from "./navConfig";

export default function IconToggle({ darkMode, rotation, onToggle, inHero, disabled }) {
  return (
    <motion.button
      onClick={onToggle}
      className={getButtonBase(inHero, darkMode)}
      animate={{ rotate: rotation }}
      transition={MOTION_CONFIG.iconToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
      whileTap={{ scale: 0.96 }}
      disabled={disabled}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={MOTION_CONFIG.fadeIcon}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}