"use client";

import { motion } from "framer-motion";
import { getTextColor } from "./navConfig";

export default function NavLink({ link, active, inHero, darkMode, onClick }) {
  return (
    <motion.a
      href={link.href}
      onClick={onClick}
      className={`relative group transition-colors duration-300 ${getTextColor(
        inHero,
        darkMode
      )} ${active === link.id ? "text-primary" : ""}`}
      whileTap={{ scale: 0.96 }}
    >
      {link.label}

      <motion.span
        layoutId={active === link.id ? "underline" : undefined}
        className={`absolute left-0 right-0 bottom-[-4px] h-[2px] rounded-full ${
          active === link.id
            ? "bg-primary"
            : "bg-primary/0 group-hover:bg-primary/80 transition-all duration-300"
        }`}
      />
    </motion.a>
  );
}