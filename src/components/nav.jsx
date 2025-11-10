"use client";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [iconChanging, setIconChanging] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [inHero, setInHero] = useState(true);
  const [bgVisible, setBgVisible] = useState(false);

  const sections = useRef([]);

  useEffect(() => {
    sections.current = [
      "hero",
      "tentang",
      "topResto",
      "testimoni",
      "galeri",
      "lokasi",
    ].map((id) => document.getElementById(id));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const heroHeight = window.innerHeight * 0.8;
      setInHero(y < heroHeight);
      setBgVisible(y > heroHeight * 0.6);

      let current = "home";
      sections.current.forEach((sec) => {
        if (sec && y >= sec.offsetTop - 150) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

  const handleToggleMode = () => {
    if (iconChanging) return;
    setIconChanging(true);
    setRotation((r) => r + 360);
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIconChanging(false);
    }, 500);
  };

  const navLinks = [
    { id: "hero", label: "Beranda", href: "#hero" },
    { id: "tentang", label: "Tentang", href: "#tentang" },
    { id: "topResto", label: "Rekomendasi", href: "#topResto" },
    { id: "testimoni", label: "Testimoni", href: "#testimoni" },
    { id: "galeri", label: "Galeri", href: "#galeri" },
    { id: "lokasi", label: "Lokasi", href: "#lokasi" },
  ];

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
          backdropFilter: `blur(${blurLevel}px)`,
          WebkitBackdropFilter: `blur(${blurLevel}px)`,
          boxShadow:
            bgVisible && !inHero ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 w-full"
      >
        {/* LOGO */}
        <a href="#hero" className="flex items-center select-none">
          <motion.img
            key={darkMode ? "logo-dark" : "logo-light"}
            src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
            alt="Logo Gelap Nyawang"
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
        <nav className="hidden md:flex items-center gap-8 font-medium relative">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              onClick={() => setActive(link.id)}
              className={`relative group transition-colors duration-300 ${
                inHero
                  ? "text-white"
                  : darkMode
                  ? "text-white"
                  : "text-text-primary"
              } ${active === link.id ? "text-primary" : ""}`}
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
          ))}
        </nav>

        {/* TOGGLE & MENU */}
        <div className="flex items-center gap-3 md:gap-5">
          <motion.button
            onClick={handleToggleMode}
            className={`flex items-center justify-center rounded-full w-[42px] h-[42px] transition-all duration-300 ${
              inHero
                ? "bg-white/20 text-white"
                : darkMode
                ? "bg-bg-soft text-white"
                : "bg-bg-base text-text-primary"
            }`}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* MOBILE MENU */}
          <button
            className="md:hidden p-2 rounded-full ml-1"
            onClick={() => setOverlayOpen(true)}
          >
            <Menu
              size={22}
              className={
                inHero
                  ? "text-white"
                  : darkMode
                  ? "text-white"
                  : "text-text-primary"
              }
            />
          </button>
        </div>
      </motion.div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end"
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="w-[80%] sm:w-[400px] bg-bg-base text-text-primary h-full shadow-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <a href="#hero" onClick={() => setOverlayOpen(false)}>
                  <img
                    src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
                    alt="Logo"
                    className="h-9"
                  />
                </a>
                <button onClick={() => setOverlayOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setOverlayOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      active === link.id ? "text-primary" : "hover:text-primary"
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
    </header>
  );
}