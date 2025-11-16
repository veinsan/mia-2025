"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "./motionConfig";
import IconToggle from "./IconToggle";
import MobileDrawer from "./MobileDrawer";
import NavLinks from "./NavLinks";
import CategoryDropdown from "./CategoryDropdown";

export default function NavDirektori({ onCategoryClick }) {
  const [darkMode, setDarkMode] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [iconChanging, setIconChanging] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("list");
  const [catOpen, setCatOpen] = useState(false);

  const catButtonRef = useRef(null);
  const catMenuRef = useRef(null);

  const navLinks = [
    { id: "home", label: "Beranda", href: "/" },
    { id: "list", label: "Direktori", href: "/direktori#top-direktori" },
    { id: "trending", label: "Trending", href: "#trending" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    function onDocClick(e) {
      if (!catOpen) return;
      if (catMenuRef.current?.contains(e.target) || catButtonRef.current?.contains(e.target)) return;
      setCatOpen(false);
    }

    function onKey(e) {
      if (e.key === "Escape") setCatOpen(false);
    }

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [catOpen]);

  const handleToggleMode = () => {
    if (iconChanging) return;
    setIconChanging(true);
    setRotation((r) => r + 360);
    setTimeout(() => {
      setDarkMode((p) => !p);
      setIconChanging(false);
    }, 500);
  };

  const backgroundColor = scrolled ? (darkMode ? "rgba(10,10,10,0.75)" : "rgba(255,255,255,0.75)") : "rgba(0,0,0,0)";
  const blurLevel = scrolled ? 14 : 0;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        animate={{
          backgroundColor,
          backdropFilter: `blur(${blurLevel}px)`,
          WebkitBackdropFilter: `blur(${blurLevel}px)`,
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        }}
        transition={MOTION_CONFIG.navContainer}
        className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 w-full"
      >
        <a href="/" className="flex items-center select-none" aria-label="Kembali ke beranda">
          <img
            src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
            alt="Gelap Nyawang Logo"
            className="h-8 md:h-10 transition-opacity duration-500"
            draggable="false"
          />
        </a>

        <nav
          className="hidden md:flex items-center gap-8 font-medium"
          role="navigation"
          aria-label="Main navigation"
        >
          <NavLinks
            navLinks={navLinks}
            active={active}
            setActive={setActive}
            darkMode={darkMode}
          />

          <CategoryDropdown
            darkMode={darkMode}
            catOpen={catOpen}
            setCatOpen={setCatOpen}
            onCategoryClick={onCategoryClick}
            catMenuRef={catMenuRef}
            catButtonRef={catButtonRef}
          />
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <IconToggle darkMode={darkMode} rotation={rotation} onToggle={handleToggleMode} />

          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} className={darkMode ? "text-white" : "text-text-primary"} />
          </button>
        </div>
      </motion.div>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navLinks={navLinks}
        darkMode={darkMode}
        onCategoryClick={onCategoryClick}
      />
    </header>
  );
}