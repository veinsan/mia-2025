"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* MOTION & ANIMATION CONFIGURATIONS */

const MOTION_CONFIG = {
  navContainer: {
    duration: 0.4,
    ease: "easeInOut",
  },
  iconToggle: {
    duration: 0.6,
    ease: "easeInOut",
  },
  drawer: {
    type: "spring",
    stiffness: 260,
    damping: 25,
  },
  fadeIcon: {
    duration: 0.3,
  },
};

/* STYLE HELPER FUNCTIONS */

const getNavTextColor = (inHero, darkMode) => {
  if (inHero) return "text-white";
  return darkMode ? "text-white" : "text-text-primary";
};

const getNavButtonStyles = (inHero, darkMode) => {
  const baseClasses = "rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center";

  if (inHero) return `${baseClasses} bg-white/20 text-white`;
  if (darkMode) return `${baseClasses} bg-bg-soft text-white`;
  return `${baseClasses} bg-bg-base text-text-primary`;
};

const getMenuIconColor = (inHero, darkMode) => {
  if (inHero) return "text-white";
  return darkMode ? "text-white" : "text-text-primary";
};

const getBlurFilterStyle = (blurLevel) => ({
  backdropFilter: `blur(${blurLevel}px)`,
  WebkitBackdropFilter: `blur(${blurLevel}px)`,
});

/* SUB-COMPONENTS */

const IconToggle = ({ darkMode, rotation, onToggle, inHero }) => (
  <motion.button
    onClick={onToggle}
    className={getNavButtonStyles(inHero, darkMode)}
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

const NavLink = ({ link, active, inHero, darkMode, onClick }) => (
  <motion.a
    href={link.href}
    onClick={onClick}
    className={`relative group transition-colors duration-300 ${getNavTextColor(
      inHero,
      darkMode
    )} ${active === link.id ? "text-primary" : ""}`}
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

const MobileDrawer = ({
  isOpen,
  onClose,
  navLinks,
  active,
  darkMode,
  onLinkClick,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
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
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-6">
            <a href="#hero" onClick={onClose} aria-label="Go to home">
              <motion.img
                src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
                alt="Gelap Nyawang Logo"
                className="h-9 transition-opacity duration-300"
                draggable="false"
              />
            </a>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              type="button"
              className="p-2 rounded-lg hover:bg-bg-soft transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => onLinkClick(link.id)}
                className={`text-lg font-medium transition-colors py-2 px-3 rounded-lg ${
                  active === link.id
                    ? "text-primary bg-bg-soft"
                    : "hover:text-primary hover:bg-bg-soft"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.aside>
      </motion.div>
    )}
  </AnimatePresence>
);

/* MAIN NAVIGATION COMPONENT */

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [iconChanging, setIconChanging] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [inHero, setInHero] = useState(true);
  const [bgVisible, setBgVisible] = useState(false);

  const sections = useRef([]);

  /* Initialize sections references */
  useEffect(() => {
    const sectionIds = [
      "hero",
      "tentang",
      "topResto",
      "testimoni",
      "galeri",
      "lokasi",
    ];

    sections.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);
  }, []);

  /* Handle scroll detection */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const heroHeight = window.innerHeight * 0.8;
      setInHero(y < heroHeight);
      setBgVisible(y > heroHeight * 0.6);

      let current = "hero";
      sections.current.forEach((sec) => {
        if (sec && y >= sec.offsetTop - 150) {
          current = sec.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Handle dark mode class toggle */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  /* Handle body overflow for mobile drawer */
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayOpen]);

  /* Handle dark mode toggle */
  const handleToggleMode = () => {
    if (iconChanging) return;
    setIconChanging(true);
    setRotation((r) => r + 360);

    const timer = setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIconChanging(false);
    }, 500);

    return () => clearTimeout(timer);
  };

  /* Handle mobile menu close */
  const handleDrawerClose = () => {
    setOverlayOpen(false);
  };

  /* Handle mobile nav link click */
  const handleMobileLinkClick = (linkId) => {
    setActive(linkId);
    setOverlayOpen(false);
  };

  const navLinks = [
    { id: "hero", label: "Beranda", href: "#hero" },
    { id: "tentang", label: "Tentang", href: "#tentang" },
    { id: "topResto", label: "Rekomendasi", href: "#topResto" },
    { id: "testimoni", label: "Testimoni", href: "#testimoni" },
    { id: "galeri", label: "Galeri", href: "#galeri" },
    { id: "lokasi", label: "Lokasi", href: "#lokasi" },
  ];

  /* Compute dynamic background */
  const backgroundColor = inHero
    ? "rgba(0,0,0,0)"
    : bgVisible
      ? darkMode
        ? "rgba(10,10,10,0.75)"
        : "rgba(255,255,255,0.75)"
      : "rgba(0,0,0,0.25)";

  const blurLevel = inHero ? 0 : bgVisible ? 14 : 8;

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      role="banner"
    >
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
        {/* LOGO */}
        <a href="#hero" className="flex items-center select-none" aria-label="Go to home">
          <motion.img
            src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
            alt="Gelap Nyawang Culinary Logo"
            className={`h-8 md:h-10 transition-opacity duration-500 ${
              inHero ? "brightness-0 invert" : ""
            }`}
            draggable="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>

        {/* DESKTOP NAV */}
        <nav
          className="hidden md:flex items-center gap-8 font-medium relative"
          role="navigation"
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

        {/* CONTROLS: TOGGLE & MOBILE MENU */}
        <div className="flex items-center gap-3 md:gap-5">
          <IconToggle
            darkMode={darkMode}
            rotation={rotation}
            onToggle={handleToggleMode}
            inHero={inHero}
          />

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-full ml-1 hover:bg-white/10 transition-colors"
            onClick={() => setOverlayOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={overlayOpen}
            type="button"
          >
            <Menu size={22} className={getMenuIconColor(inHero, darkMode)} />
          </button>
        </div>
      </motion.div>

      {/* MOBILE DRAWER */}
      <MobileDrawer
        isOpen={overlayOpen}
        onClose={handleDrawerClose}
        navLinks={navLinks}
        active={active}
        darkMode={darkMode}
        onLinkClick={handleMobileLinkClick}
      />
    </header>
  );
}