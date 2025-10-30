"use client";
import { useState, useEffect, useRef } from "react";
import { Search, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  // efek scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // tutup search bar kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  // efek brightness logo
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    const logo = document.getElementById("nav-logo");
    if (logo) {
      const rect = logo.getBoundingClientRect();
      setLogoPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getDistance = () => {
    const dx = mousePos.x - logoPos.x;
    const dy = mousePos.y - logoPos.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getBrightness = () => {
    const distance = getDistance();
    if (distance < 30) return darkMode ? 1.4 : 0.7;
    if (distance < 80) return darkMode ? 1.2 : 0.85;
    return 1;
  };

  const navLinks = [
    { id: "home", label: "Beranda", href: "#hero" },
    { id: "tentang", label: "Tentang", href: "#tentang" },
    { id: "resto", label: "Rekomendasi", href: "#resto" },
    { id: "testimoni", label: "Testimoni", href: "#testimoni" },
    { id: "suasana", label: "Suasana", href: "#suasana" },
    { id: "lokasi", label: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 md:px-10 overflow-visible">
      <motion.div
        animate={{
          width: searchOpen ? "90%" : "85%",
          backgroundColor: darkMode
            ? scrolled
              ? "rgba(28,28,28,0.9)"
              : "rgba(28,28,28,0.6)"
            : scrolled
            ? "rgba(255,248,240,0.95)"
            : "rgba(255,248,240,0.65)",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0,0,0,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="mx-auto flex items-center justify-between rounded-full px-6 py-4 backdrop-blur-md border border-[#E75A24]/20 overflow-visible"
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center"
        >
          <motion.img
            id="nav-logo"
            src="/assets/logo.png"
            alt="Logo"
            animate={{ filter: `brightness(${getBrightness()})` }}
            transition={{ duration: 0.2 }}
            className="h-10 md:h-12 select-none mix-blend-multiply"
          />
        </motion.a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-4 text-[0.95rem] font-medium">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              onClick={() => setActive(link.id)}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 250 }}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                active === link.id
                  ? "border-[#E75A24] text-[#E75A24]"
                  : darkMode
                  ? "border-[#E75A24]/20 text-[#FFF8F0] hover:border-[#E75A24]/50 hover:text-[#E75A24]"
                  : "border-[#E75A24]/20 text-[#2C2C2C] hover:border-[#E75A24]/50 hover:text-[#E75A24]"
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right side: Search + Toggle */}
        <div ref={searchRef} className="flex items-center gap-3 overflow-visible">
          {/* Search Icon */}
          <motion.button
            onClick={() => setSearchOpen((prev) => !prev)}
            onMouseEnter={() => setHoveredIcon("search")}
            onMouseLeave={() => setHoveredIcon(null)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className={`relative p-2 rounded-full ${
              darkMode ? "text-[#FFF8F0]" : "text-[#2C2C2C]"
            }`}
          >
            {hoveredIcon === "search" && (
              <motion.span
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 0.6 }}
                className={`absolute inset-0 rounded-full ${
                  darkMode ? "bg-[#FFF8F0]/15" : "bg-[#E75A24]/15"
                }`}
              />
            )}
            <Search size={21} />
          </motion.button>

          {/* Search Input */}
          <AnimatePresence>
            {searchOpen && (
              <motion.input
                key="searchBar"
                type="text"
                placeholder="Cari kuliner..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "9rem", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`text-sm rounded-full px-4 py-1.5 outline-none border transition-all duration-300 focus:ring-2 ${
                  darkMode
                    ? "bg-transparent text-[#FFF8F0] border-[#E75A24]/40 focus:ring-[#E75A24]/40 placeholder-gray-400"
                    : "bg-transparent text-[#2C2C2C] border-[#E75A24]/40 focus:ring-[#E75A24]/40 placeholder-gray-500"
                }`}
                autoFocus
              />
            )}
          </AnimatePresence>

          {/* Dark / Light Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            onMouseEnter={() => setHoveredIcon("theme")}
            onMouseLeave={() => setHoveredIcon(null)}
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative p-2 rounded-full ${
              darkMode ? "text-[#FFF8F0]" : "text-[#2C2C2C]"
            }`}
          >
            {hoveredIcon === "theme" && (
              <motion.span
                key="pulse"
                initial={{ opacity: 0.3, scale: 1 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`absolute inset-0 rounded-full ${
                  darkMode ? "bg-[#FFF8F0]/25" : "bg-[#E75A24]/25"
                }`}
              />
            )}
            <motion.div
              animate={{
                rotate: darkMode ? 360 : 0,
                color: darkMode ? "#FFF8F0" : "#E75A24",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {darkMode ? <Moon size={21} /> : <Sun size={21} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
}
