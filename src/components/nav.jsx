"use client";
import { useState, useEffect, useRef } from "react";
import { Search, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [iconChanging, setIconChanging] = useState(false);
  const searchRef = useRef(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode global sync
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Search bar: ESC / click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Beranda", href: "#hero" },
    { id: "tentang", label: "Tentang", href: "#tentang" },
    { id: "resto", label: "Rekomendasi", href: "#resto" },
    { id: "testimoni", label: "Testimoni", href: "#testimoni" },
    { id: "suasana", label: "Suasana", href: "#suasana" },
    { id: "lokasi", label: "Lokasi", href: "#lokasi" },
  ];

  const accent = "#E75A24";

  // Fungsi toggle dark/light mode
  const handleToggleMode = () => {
    if (iconChanging) return; // biar gak bisa spam klik
    setIconChanging(true);
    setRotation((r) => r + 360);
    // Ganti mode setelah rotasi selesai
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIconChanging(false);
    }, 600);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        animate={{
          background: scrolled
            ? // KEBALIK: light mode = gelap, dark mode = terang
              darkMode
              ? "linear-gradient(to right, rgba(255,255,255,0.18), rgba(255,255,255,0.12))"
              : "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.3))"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-between px-6 md:px-10 py-4 w-full"
      >
        {/* LOGO */}
        <a href="#hero" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Logo Gelap Nyawang"
            className="h-10 md:h-12 select-none"
            draggable="false"
          />
        </a>

        {/* NAV LINKS + ICONS */}
        <div className="flex items-center gap-5">
          {/* NAV LINKS */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <motion.li key={link.id} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActive(link.id)}
                  className={`transition-colors duration-300 ${
                    active === link.id
                      ? "text-[#E75A24]"
                      : darkMode
                      ? "text-white hover:text-[#E75A24]"
                      : "text-[#2C2C2C] hover:text-[#E75A24]"
                  }`}
                >
                  {link.label}
                </a>
                {active === link.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#E75A24]"
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>

          {/* SEARCH */}
          <motion.div
            ref={searchRef}
            className="relative flex items-center justify-center"
            animate={{
              width: searchOpen ? 200 : 42,
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.12)"
                : "rgba(0,0,0,0.12)",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            style={{
              borderRadius: 9999,
              height: 42,
              padding: searchOpen ? "0.4rem 0.8rem" : "0.45rem",
            }}
          >
            <Search
              size={18}
              className={`cursor-pointer transition-colors ${
                darkMode ? "text-white" : "text-black"
              }`}
              onClick={() => setSearchOpen((prev) => !prev)}
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
                  exit={{
                    opacity: 0,
                    width: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`ml-2 bg-transparent outline-none text-sm placeholder-gray-400 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                  autoFocus
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* DARK/LIGHT MODE TOGGLE */}
          <motion.button
            onClick={handleToggleMode}
            className={`flex items-center justify-center rounded-full w-[42px] h-[42px] transition-all duration-300 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Delay perubahan ikon biar ganti pas selesai muter */}
            {iconChanging ? (
              darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )
            ) : darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
}
