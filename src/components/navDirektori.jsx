"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "@/data/umkmData";

/* ------------------------------------------------------------
   Animation configuration untuk transition dan efek UI.
   Disusun supaya mudah disesuaikan dari satu tempat.
------------------------------------------------------------ */
const MOTION_CONFIG = {
  navContainer: { duration: 0.4, ease: "easeInOut" },
  iconToggle: { duration: 0.6, ease: "easeInOut" },
  drawer: { type: "spring", stiffness: 260, damping: 25 },
  fadeIcon: { duration: 0.28 },
  dropdown: { duration: 0.22, ease: "easeInOut" },
};

/* ------------------------------------------------------------
   Helper styling untuk tombol mode gelap/terang.
   Menghindari repetisi class utility.
------------------------------------------------------------ */
const getNavButtonStyles = (darkMode) =>
  `rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center ${
    darkMode ? "bg-bg-soft text-white" : "bg-bg-base text-text-primary"
  }`;

/* ------------------------------------------------------------
   Toggle icon (Sun/Moon) dengan animasi rotasi.
   Dipisah agar lebih modular dan mudah dibaca.
------------------------------------------------------------ */
const IconToggle = ({ darkMode, rotation, onToggle }) => (
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

/* ------------------------------------------------------------
   Drawer menu khusus mobile.
   Berisi link navigasi dan kategori untuk filter UMKM.
------------------------------------------------------------ */
function MobileDrawer({ open, onClose, navLinks, darkMode, onCategoryClick }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end"
          onClick={onClose}
        >
          {/* Side drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={MOTION_CONFIG.drawer}
            className="w-[80%] sm:w-[400px] bg-bg-base dark:bg-bg-soft text-text-primary h-full shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            {/* Header drawer */}
            <div className="flex items-center justify-between mb-6">
              <a href="/" onClick={onClose} aria-label="Go to home">
                <img
                  src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
                  alt="Gelap Nyawang Logo"
                  className="h-9"
                  draggable="false"
                />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-bg-soft transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigasi + kategori */}
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={onClose}
                  className="py-2 px-3 rounded-md text-lg hover:bg-bg-soft transition-colors"
                >
                  {l.label}
                </a>
              ))}

              <hr className="my-4 border-border-light dark:border-border-default" />

              {/* Kategori UMKM */}
              <div>
                <h4 className="text-sm font-medium mb-3 text-text-muted">Kategori</h4>

                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onCategoryClick(c.id);
                        onClose();
                      }}
                      className="py-3 px-3 rounded-lg text-sm bg-bg-soft hover:bg-primary/10 hover:text-primary transition-colors text-left flex items-center gap-2"
                    >
                      <span className="text-base">{c.icon}</span>
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------
   NAV DIREKTORI
   Digunakan di halaman direktori UMKM.
   Memiliki:
   - toggle dark mode
   - link navigasi
   - dropdown kategori
   - drawer mobile
   - efek backdrop blur saat scroll
------------------------------------------------------------ */
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

  /* Link navigasi utama */
  const navLinks = [
    { id: "home", label: "Beranda", href: "/" },
    { id: "list", label: "Direktori", href: "/direktori#top-direktori" },
    { id: "trending", label: "Trending", href: "#trending" },
  ];

  /* ------------------------------------------------------------
     State scroll: aktifkan background blur saat navbar dilewati
  ------------------------------------------------------------ */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Sync state dark mode dengan <html> */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* ------------------------------------------------------------
     Handler klik luar untuk menutup dropdown kategori
  ------------------------------------------------------------ */
  useEffect(() => {
    function onDocClick(e) {
      if (!catOpen) return;
      if (
        catMenuRef.current?.contains(e.target) ||
        catButtonRef.current?.contains(e.target)
      )
        return;
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

  /* ------------------------------------------------------------
     Toggle dark mode dengan animasi rotasi icon
  ------------------------------------------------------------ */
  const handleToggleMode = () => {
    if (iconChanging) return;
    setIconChanging(true);
    setRotation((r) => r + 360);

    setTimeout(() => {
      setDarkMode((p) => !p);
      setIconChanging(false);
    }, 500);
  };

  /* Background dinamis navbar sesuai scroll + mode */
  const backgroundColor = scrolled
    ? darkMode
      ? "rgba(10,10,10,0.75)"
      : "rgba(255,255,255,0.75)"
    : "rgba(0,0,0,0)";

  const blurLevel = scrolled ? 14 : 0;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navbar utama */}
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
        {/* Logo kiri */}
        <a href="/" className="flex items-center select-none" aria-label="Kembali ke beranda">
          <img
            src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
            alt="Gelap Nyawang Logo"
            className="h-8 md:h-10 transition-opacity duration-500"
            draggable="false"
          />
        </a>

        {/* Navigasi desktop */}
        <nav
          className="hidden md:flex items-center gap-8 font-medium"
          role="navigation"
          aria-label="Main navigation"
        >
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

          {/* Dropdown kategori */}
          <div className="relative">
            <button
              ref={catButtonRef}
              onClick={() => setCatOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={catOpen}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                darkMode ? "text-white" : "text-text-primary"
              } hover:text-primary`}
            >
              <span className="select-none">Kategori</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${catOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Menu dropdown kategori */}
            <AnimatePresence>
              {catOpen && (
                <motion.div
                  ref={catMenuRef}
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 6, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={MOTION_CONFIG.dropdown}
                  role="menu"
                  aria-label="Kategori menu"
                  className="absolute right-0 mt-2 w-[220px] bg-bg-base dark:bg-bg-warm rounded-2xl shadow-xl ring-1 ring-black/6 p-3 z-40"
                >
                  <ul className="flex flex-col gap-1">
                    {CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                      <li key={c.id}>
                        <button
                          onClick={() => {
                            onCategoryClick(c.id);
                            setCatOpen(false);
                          }}
                          role="menuitem"
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-primary/10 transition-colors text-left"
                        >
                          <span className="text-lg">{c.icon}</span>
                          <span className="flex-1 text-text-primary dark:text-text-secondary">
                            {c.label}
                          </span>
                        </button>
                      </li>
                    ))}

                    {/* Opsi kategori all */}
                    <li>
                      <button
                        onClick={() => {
                          onCategoryClick("all");
                          setCatOpen(false);
                        }}
                        role="menuitem"
                        className="w-full block mt-1 px-3 py-2 rounded-lg text-sm text-text-muted hover:bg-bg-soft transition-colors text-left"
                      >
                        Lihat Semua
                      </button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Tombol toggle + menu mobile */}
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

      {/* Drawer menu untuk mobile */}
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