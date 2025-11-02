"use client";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function NavDirektori() {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [iconChanging, setIconChanging] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);
  const lastScrollY = useRef(0);
  const fadeTarget = useRef(0);

  // efek smooth transisi background saat scroll
  useEffect(() => {
    let raf;
    const update = () => {
      const y = window.scrollY;
      const goingUp = y < lastScrollY.current;
      lastScrollY.current = y;
      setScrolled(y > 30);

      const target = y < 80 ? 0.2 : 1; // semi transparan di atas, solid pas turun
      if (goingUp && fadeTarget.current > 0.05) fadeTarget.current -= 0.05;
      else if (!goingUp && fadeTarget.current < target) fadeTarget.current += 0.08;
      else fadeTarget.current = target;

      fadeTarget.current = Math.max(0, Math.min(1, fadeTarget.current));
      setBgOpacity((prev) => prev + (fadeTarget.current - prev) * 0.12);

      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  // default light mode
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  // global dark mode sync
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // toggle dark/light animasi
  const handleToggleMode = () => {
    if (iconChanging) return;
    setIconChanging(true);
    setRotation((r) => r + 360);
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIconChanging(false);
    }, 600);
  };

  // link direktori
  const navLinks = [
    { id: "home", label: "Beranda", href: "/" },
    { id: "trending", label: "Trending", href: "#trending" },
    { id: "kategori", label: "Kategori", href: "#kategori" },
    { id: "list", label: "Daftar UMKM", href: "#list" },
    { id: "kontak", label: "Kontak", href: "#kontak" },
  ];

  // warna text & background
  const textColor = darkMode ? "text-white" : "text-[#2B1B0F]";
  const bgLight = `rgba(255,255,255,${bgOpacity})`;
  const bgDark = `rgba(43,27,15,${bgOpacity})`;
  const shadow = `0 4px 20px rgba(0,0,0,${0.08 * bgOpacity})`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        animate={{
          background: darkMode ? bgDark : bgLight,
          boxShadow: scrolled ? shadow : "none",
          backdropFilter: `blur(${10 * bgOpacity}px)`,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex items-center justify-between px-6 md:px-10 py-4 w-full"
      >
        {/* LOGO */}
        <a href="/" className="flex items-center" aria-label="Kembali ke beranda">
          <motion.img
            key={darkMode ? "dark" : "light"}
            src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
            alt="Logo Gelap Nyawang"
            className="h-10 md:h-12 select-none transition-opacity duration-500"
            draggable="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </a>

        {/* NAV LINK + TOGGLE */}
        <div className="flex items-center gap-5">
          <ul className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <motion.li key={link.id} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActive(link.id)}
                  className={`transition-colors duration-300 ${
                    active === link.id
                      ? "text-[#E75A24]"
                      : `${textColor} hover:text-[#E75A24]`
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

          {/* TOGGLE MODE */}
          <motion.button
            onClick={handleToggleMode}
            aria-label={darkMode ? "Ubah ke mode terang" : "Ubah ke mode gelap"}
            className={`flex items-center justify-center rounded-full w-[42px] h-[42px] transition-all duration-300 ${
              darkMode
                ? "bg-white text-[#2B1B0F] hover:bg-[#FFF4E7]"
                : "bg-[#2B1B0F] text-white hover:bg-[#3C2514]"
            }`}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {iconChanging ? (
              darkMode ? <Sun size={20} /> : <Moon size={20} />
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
