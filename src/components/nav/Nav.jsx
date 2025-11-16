"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import IconToggle from "./IconToggle";
import NavLink from "./NavLink";
import MobileDrawer from "./MobileDrawer";
import { NAV_LINKS, MOTION_CONFIG, getBlurFilterStyle } from "./navConfig";

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

  useEffect(() => {
    const ids = ["hero", "tentang", "topResto", "testimoni"];
    sections.current = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  }, []);

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

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

        <nav
          className="hidden md:flex items-center gap-8 font-medium"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
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

        <div className="flex items-center gap-3 md:gap-5">
          <IconToggle
            darkMode={darkMode}
            rotation={rotation}
            onToggle={handleToggleMode}
            inHero={inHero}
            disabled={iconChanging}
          />

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

      <MobileDrawer
        isOpen={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        navLinks={NAV_LINKS}
        active={active}
        darkMode={darkMode}
        onLinkClick={handleMobileLinkClick}
        visitedSections={visitedSections}
      />
    </header>
  );
}