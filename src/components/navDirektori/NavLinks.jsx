"use client";

import { motion } from "framer-motion";

export default function NavLinks({ navLinks, active, setActive, darkMode }) {
  return (
    <nav className="hidden md:flex items-center gap-8 font-medium" role="navigation" aria-label="Main navigation">
      {navLinks.map((link) => (
        <div key={link.id} className="relative">
          <a
            href={link.href}
            onClick={() => setActive(link.id)}
            className={`relative group transition-colors duration-300 ${
              darkMode ? "text-white" : "text-text-primary"
            } ${active === link.id ? "text-primary" : ""}`}
          >
            {link.label}
            <motion.span
              layoutId={active === link.id ? "underline" : undefined}
              className={`absolute left-0 right-0 bottom-[-6px] h-[2px] rounded-full ${
                active === link.id
                  ? "bg-primary"
                  : "bg-primary/0 group-hover:bg-primary/80 transition-all duration-300"
              }`}
            />
          </a>
        </div>
      ))}
    </nav>
  );
}