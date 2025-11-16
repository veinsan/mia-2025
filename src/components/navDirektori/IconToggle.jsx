"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { MOTION_CONFIG } from "./motionConfig";
import { getNavButtonStyles } from "./navHelpers";

export default function IconToggle({ darkMode, rotation, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className={getNavButtonStyles(darkMode)}
      animate={{ rotate: rotation }}
      transition={MOTION_CONFIG.iconToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
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