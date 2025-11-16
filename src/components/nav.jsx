"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Sun, Moon, Menu, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================
   Motion / timing config (centralized)
   ========================================= */
const MOTION_CONFIG = {
  navContainer: { duration: 0.4, ease: "easeInOut" },
  iconToggle: { duration: 0.6, ease: "easeInOut" },
  drawer: { type: "spring", stiffness: 260, damping: 25 },
  fadeIcon: { duration: 0.3 },
};

/* =========================================
   Helpers simplified (mengurangi redundancy)
   ========================================= */
const getTextColor = (inHero, darkMode) =>
  inHero || darkMode ? "text-white" : "text-text-primary";

const getButtonBase = (inHero, darkMode) => {
  const base =
    "rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center";
  if (inHero) return `${base} bg-white/20 text-white`;
  if (darkMode) return `${base} bg-bg-soft text-white`;
  return `${base} bg-bg-base text-text-primary`;
};

const getBlurFilterStyle = (blurLevel) => ({
  backdropFilter: `blur(${blurLevel}px)`,
  WebkitBackdropFilter: `blur(${blurLevel}px)`,
});

/* =========================================
   Icon Toggle (motion.button)
   ========================================= */
const IconToggle = ({ darkMode, rotation, onToggle, inHero, disabled }) => (
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

/* =========================================
   NavLink desktop
   ========================================= */
const NavLink = ({ link, active, inHero, darkMode, onClick }) => (
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

/* =========================================
   Mobile Drawer (motion.button fix)
   ========================================= */
const MobileDrawer = ({
  isOpen,
  onClose,
  navLinks,
  active,
  darkMode,
  onLinkClick,
  visitedSections,
}) => (
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
          {/* Drawer header */}
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

          {/* Drawer links */}
          <nav
            className="flex flex-col gap-3 mt-6"
            aria-label="Mobile navigation"
          >
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

/* =========================================
   MAIN NAV COMPONENT
   ========================================= */
export default function Nav() {
  const [active, setActive] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [iconChanging, setIconChanging] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [bgVisible, setBgVisible] = useState(false);

  const [visitedSections, setVisitedSections] = useState(new Set(["hero"]));

  const sections = useRef([]);
  const throttleRef = useRef(null);
  const timeoutRef = useRef(null);

  const navLinks = [
    { id: "hero", label: "Beranda", href: "#hero" },
    { id: "tentang", label: "Tentang", href: "#tentang" },
    { id: "topResto", label: "Rekomendasi", href: "#topResto" },
    { id: "testimoni", label: "Testimoni", href: "#testimoni" },
  ];

  /* -------------------------
     Init sections
     ------------------------- */
  useEffect(() => {
    const ids = ["hero", "tentang", "topResto", "testimoni"];
    sections.current = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  }, []);

  /* -------------------------
     Throttle
     ------------------------- */
  const throttle = useCallback((fn, wait = 80) => {
    return (...args) => {
      if (throttleRef.current) return;
      throttleRef.current = setTimeout(() => {
        fn(...args);
        clearTimeout(throttleRef.current);
        throttleRef.current = null;
      }, wait);
    };
  }, []);

  /* -------------------------
     Scroll handler
     ------------------------- */
  useEffect(() => {
    const doScroll = () => {
      const y = window.scrollY || window.pageYOffset;

      const heroHeight = window.innerHeight * 0.8;
      setInHero(y < heroHeight);
      setBgVisible(y > heroHeight * 0.6);

      let current = "hero";
      sections.current.forEach((sec) => {
        if (y >= sec.offsetTop - 150) {
          current = sec.id;
        }
      });

      setActive((prev) => {
        if (prev !== current) {
          setVisitedSections((prevSet) => {
            if (prevSet.has(current)) return prevSet;
            const next = new Set(prevSet);
            next.add(current);
            return next;
          });
        }
        return current;
      });
    };

    const handler = throttle(doScroll);

    window.addEventListener("scroll", handler, { passive: true });
    timeoutRef.current = setTimeout(doScroll, 20);

    return () => {
      window.removeEventListener("scroll", handler);
      if (throttleRef.current) clearTimeout(throttleRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [throttle]);

  /* -------------------------
     Dark mode sync
     ------------------------- */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* -------------------------
     Prevent scroll when drawer open
     ------------------------- */
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

  /* -------------------------
     Dark mode toggle
     ------------------------- */
  const handleToggleMode = () => {
    if (iconChanging) return;
    setIconChanging(true);
    setRotation((r) => r + 360);

    const timeout = setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIconChanging(false);
    }, 500);

    return () => clearTimeout(timeout);
  };

  const handleMobileLinkClick = (sectionId) => {
    setActive(sectionId);
    setVisitedSections((prev) => {
      const next = new Set(prev);
      next.add(sectionId);
      return next;
    });
    setOverlayOpen(false);
  };

  const backgroundColor = inHero
    ? "rgba(0,0,0,0)"
    : bgVisible
    ? darkMode
      ? "rgba(10,10,10,0.75)"
      : "rgba(255,255,255,0.75)"
    : "rgba(0,0,0,0.25)";

  const blurLevel = inHero ? 0 : bgVisible ? 14 : 8;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <motion.div
        animate={{
          backgroundColor,
          ...getBlurFilterStyle(blurLevel),
          boxShadow:
            bgVisible && !inHero ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        }}
        transition={MOTION_CONFIG.navContainer}
        className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 w-full"
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          className="select-none"
          aria-label="Go to home"
          whileTap={{ scale: 0.96 }}
        >
          <motion.img
            src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
            alt="Gelap Nyawang Culinary Logo"
            className={`h-8 md:h-10 transition-opacity duration-500 ${
              inHero ? "brightness-0 invert" : ""
            }`}
            draggable="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8 font-medium"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              link={link}
              active={active}
              inHero={inHero}
              darkMode={darkMode}
              onClick={() => setActive(link.id)}
            />
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3 md:gap-5">
          <IconToggle
            darkMode={darkMode}
            rotation={rotation}
            onToggle={handleToggleMode}
            inHero={inHero}
            disabled={iconChanging}
          />

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-full ml-1 hover:bg-white/10 transition-colors"
            onClick={() => setOverlayOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={overlayOpen}
            title="Open navigation menu"
            type="button"
            whileTap={{ scale: 0.96 }}
          >
            <Menu
              size={22}
              className={inHero || darkMode ? "text-white" : "text-text-primary"}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Drawer */}
      <MobileDrawer
        isOpen={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        navLinks={navLinks}
        active={active}
        darkMode={darkMode}
        onLinkClick={handleMobileLinkClick}
        visitedSections={visitedSections}
      />
    </header>
  );
}