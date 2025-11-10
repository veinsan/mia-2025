// components/nav.jsx
"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ dataUMKM = [] }) {
  // ========================
  // STATE & REFS
  // ========================
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [navInHero, setNavInHero] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [iconChanging, setIconChanging] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  const [overlayOpen, setOverlayOpen] = useState(false); // mobile drawer

  const searchRef = useRef(null);
  const lastScrollY = useRef(0);
  const fadeTarget = useRef(0);

  // ========================
  // SCROLL LISTENER (SMOOTH FADE)
  // ========================
  useEffect(() => {
    let raf;
    const update = () => {
      const y = window.scrollY;
      const isHero = y < window.innerHeight * 0.7;
      const goingUp = y < lastScrollY.current;
      lastScrollY.current = y;

      setScrolled(y > 30);
      setNavInHero(isHero);

      const target = isHero ? 0 : 1;

      if (goingUp && fadeTarget.current > 0.02) {
        fadeTarget.current -= 0.05;
      } else if (!goingUp && fadeTarget.current < target) {
        fadeTarget.current += 0.1;
      } else {
        fadeTarget.current = target;
      }

      fadeTarget.current = Math.max(0, Math.min(1, fadeTarget.current));
      setBgOpacity((prev) => prev + (fadeTarget.current - prev) * 0.12);

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ========================
  // DEFAULT LIGHT MODE
  // ========================
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  // Sync global dark mode ke elemen <html>
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // ========================
  // LOCK BODY SCROLL saat overlay open
  // ========================
  useEffect(() => {
    if (overlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayOpen]);

  // ========================
  // SEARCH BAR HANDLER
  // ========================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setOverlayOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // ========================
  // REAL-TIME SEARCH FILTER
  // ========================
  const filteredUMKM = useMemo(() => {
    if (!searchQuery.trim()) return dataUMKM;
    const query = searchQuery.toLowerCase();
    return dataUMKM.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query)
    );
  }, [searchQuery, dataUMKM]);

  // ========================
  // DARK/LIGHT TOGGLE HANDLER
  // ========================
  const handleToggleMode = () => {
    if (iconChanging) return;
    setIconChanging(true);
    setRotation((r) => r + 360);
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIconChanging(false);
    }, 600);
  };

  // ========================
  // NAV LINKS
  // ========================
  const navLinks = [
    { id: "home", label: "Beranda", href: "#hero" },
    { id: "tentang", label: "Tentang", href: "#tentang" },
    { id: "rekomendasi", label: "Rekomendasi", href: "#topResto" },
    { id: "testimoni", label: "Testimoni", href: "#testimoni" },
    { id: "galeri", label: "Galeri", href: "#galeri" },
    { id: "lokasi", label: "Lokasi", href: "#lokasi" },
  ];

  // textColor class for desktop menu (adapts to navInHero & darkMode)
  const textColorClass = navInHero ? "text-white" : darkMode ? "text-text-primary" : "text-text-primary";

  // Small util: accent class comes from Tailwind mapping (primary). Use text-primary for active.
  const activeClass = "text-primary";

  return (
    <header className="fixed top-0 left-0 w-full z-50" role="navigation" aria-label="Main navigation">
      <motion.div
        // Background adapts using CSS variables (globals.css). When navInHero -> transparent.
        animate={{
          backgroundColor: navInHero ? "transparent" : "var(--bg-base)",
          backdropFilter: scrolled && !navInHero ? `blur(${12 * bgOpacity}px)` : "none",
          boxShadow:
            scrolled && !navInHero ? `0 4px 20px rgba(0,0,0,${0.08 * bgOpacity})` : "none",
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 w-full"
      >
        {/* LOGO KIRI */}
        <a href="#hero" className="flex items-center" aria-label="Kembali ke beranda">
          <motion.img
            key={darkMode ? "logo-white" : "logo-black"}
            src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
            alt="Logo Gelap Nyawang"
            className="h-8 md:h-10 select-none transition-opacity duration-500"
            draggable="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </a>

        {/* KANAN: LINK + ICONS */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-medium" aria-label="Desktop menu">
            {navLinks.map((link) => (
              <div key={link.id} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActive(link.id)}
                  className={`transition-colors duration-300 ${active === link.id ? activeClass : textColorClass} hover:text-primary`}
                >
                  {link.label}
                </a>
                {active === link.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* SEARCH (desktop + mobile inside overlay) */}
          <div ref={searchRef} className="relative flex items-center justify-center">
            <motion.div
              className="flex items-center rounded-full"
              animate={{
                width: searchOpen ? 220 : 42,
                backgroundColor: navInHero ? "transparent" : "var(--bg-soft)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{
                height: 42,
                padding: searchOpen ? "0.4rem 0.8rem" : "0.45rem",
                borderRadius: 9999,
              }}
            >
              <Search
                size={18}
                className={`cursor-pointer transition-colors ${navInHero ? "text-white" : "text-text-primary"}`}
                onClick={() => setSearchOpen((prev) => !prev)}
                aria-label="Toggle pencarian"
                aria-expanded={searchOpen}
              />
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    key="search"
                    type="text"
                    placeholder="Cari kuliner..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0, transition: { duration: 0.35 } }}
                    transition={{ duration: 0.4 }}
                    className={`ml-2 bg-transparent outline-none text-sm placeholder:text-muted ${navInHero ? "text-white" : "text-text-primary"}`}
                    autoFocus
                    aria-label="Cari UMKM"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* SEARCH DROPDOWN RESULTS */}
            <AnimatePresence>
              {searchQuery && searchOpen && filteredUMKM.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute top-full left-0 mt-2 w-screen md:w-[420px] max-w-full bg-bg-base border border-border-DEFAULT shadow-lg max-h-[300px] overflow-y-auto z-40 rounded-lg"
                >
                  {filteredUMKM.map((item, i) => (
                    <a
                      key={i}
                      href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-3 hover:bg-[var(--bg-soft)] transition-colors"
                    >
                      <p className="font-medium text-text-primary">{item.name}</p>
                      <p className="text-sm text-text-muted">{item.category || ""}</p>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* THEME TOGGLE */}
          <motion.button
            onClick={handleToggleMode}
            aria-label={darkMode ? "Ubah ke mode terang" : "Ubah ke mode gelap"}
            className={`flex items-center justify-center rounded-full w-[42px] h-[42px] transition-all duration-300 ${navInHero ? "bg-white/15 text-white" : darkMode ? "bg-bg-soft text-text-primary" : "bg-bg-base text-text-primary"}`}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {iconChanging ? (darkMode ? <Sun size={20} /> : <Moon size={20} />) : darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* HAMBURGER (mobile only) */}
          <button
            className="md:hidden p-2 rounded-full ml-1"
            onClick={() => setOverlayOpen(true)}
            aria-label="Buka menu"
            aria-expanded={overlayOpen}
          >
            <Menu size={22} className={navInHero ? "text-white" : "text-text-primary"} />
          </button>
        </div>
      </motion.div>

      {/* MOBILE OVERLAY / DRAWER */}
      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.6))",
              }}
              onClick={() => setOverlayOpen(false)}
              aria-hidden
            />

            {/* panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-bg-base text-text-primary shadow-2xl p-6 overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between mb-6">
                <a href="#hero" onClick={() => setOverlayOpen(false)} aria-label="Kembali ke beranda">
                  <img src={darkMode ? "/assets/logo.png" : "/assets/black.png"} alt="Logo" className="h-9 select-none" />
                </a>
                <button
                  onClick={() => setOverlayOpen(false)}
                  aria-label="Tutup menu"
                  className="p-2 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => {
                      setActive(link.id);
                      setOverlayOpen(false);
                    }}
                    className={`text-lg font-semibold py-3 px-2 rounded-md transition-colors ${active === link.id ? "bg-[var(--bg-soft)] text-primary" : "hover:bg-[var(--bg-soft)]"}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6">
                <div className="mb-3 text-sm text-text-muted">Cari UMKM</div>
                <div className="flex items-center gap-2">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="Cari kuliner..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none placeholder:text-text-muted text-text-primary"
                    aria-label="Cari UMKM di overlay"
                  />
                </div>
                {/* results */}
                {searchQuery && filteredUMKM.length > 0 && (
                  <div className="mt-4 bg-[var(--bg-base)] border border-border-DEFAULT rounded-md overflow-hidden">
                    {filteredUMKM.map((item, i) => (
                      <a
                        key={i}
                        href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setOverlayOpen(false)}
                        className="block px-4 py-3 hover:bg-[var(--bg-soft)]"
                      >
                        <div className="font-medium text-text-primary">{item.name}</div>
                        <div className="text-sm text-text-muted">{item.category || ""}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-border-DEFAULT pt-6 text-sm space-y-3">
                <a href="#lokasi" className="block hover:text-primary">Lokasi</a>
                <a href="#tentang" className="block hover:text-primary">Tentang</a>
                <a href="#topResto" className="block hover:text-primary">Rekomendasi</a>
                <a href="#galeri" className="block hover:text-primary">Galeri</a>
                <a href="#testimoni" className="block hover:text-primary">Testimoni</a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
