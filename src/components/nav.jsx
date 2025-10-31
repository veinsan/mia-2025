"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { Search, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ dataUMKM = [] }) {
  // ========================
  // STATE & REFS
  // ========================

  // Section aktif (buat underline & highlight nav)
  const [active, setActive] = useState("home");

  // Mode gelap / terang (default: light mode)
  const [darkMode, setDarkMode] = useState(false);

  // Status buka/tutup search bar
  const [searchOpen, setSearchOpen] = useState(false);

  // Input teks di kolom pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Flag apakah user udah scroll (buat efek blur & shadow)
  const [scrolled, setScrolled] = useState(false);

  // Flag apakah navbar masih berada di area hero
  const [navInHero, setNavInHero] = useState(true);

  // State buat rotasi animasi dark/light toggle
  const [rotation, setRotation] = useState(0);

  // Flag untuk mencegah spam klik toggle mode
  const [iconChanging, setIconChanging] = useState(false);

  // Opasitas background navbar (smooth fade)
  const [bgOpacity, setBgOpacity] = useState(0);

  // Ref ke elemen search (buat deteksi klik luar)
  const searchRef = useRef(null);

  // Ref buat nyimpen posisi scroll terakhir
  const lastScrollY = useRef(0);

  // Ref buat target opacity background (animasi dua arah)
  const fadeTarget = useRef(0);

  // ========================
  // SCROLL LISTENER (SMOOTH FADE)
  // ========================
  useEffect(() => {
    let raf;
    const update = () => {
      const y = window.scrollY;
      const isHero = y < window.innerHeight * 0.7; // posisi masih di hero
      const goingUp = y < lastScrollY.current; // deteksi arah scroll (naik/turun)
      lastScrollY.current = y;

      setScrolled(y > 30); // aktifin shadow & blur setelah scroll 30px
      setNavInHero(isHero);

      // Target opacity (0 = transparan, 1 = full visible)
      const target = isHero ? 0 : 1;

      // Biar scroll naik lebih halus → fade-out pelan
      if (goingUp && fadeTarget.current > 0.02) {
        fadeTarget.current -= 0.05; // pelan-pelan turun
      } else if (!goingUp && fadeTarget.current < target) {
        fadeTarget.current += 0.1; // fade-in lebih cepat
      } else {
        fadeTarget.current = target;
      }

      // Clamp nilai antara 0–1
      fadeTarget.current = Math.max(0, Math.min(1, fadeTarget.current));

      // Interpolasi biar gak snap
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
  // SEARCH BAR HANDLER
  // ========================
  useEffect(() => {
    // Tutup search kalau klik di luar
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    // Tutup search kalau tekan ESC
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

  // ========================
  // REAL-TIME SEARCH FILTER
  // ========================
  const filteredUMKM = useMemo(() => {
    if (!searchQuery.trim()) return dataUMKM; // kalau kosong tampil semua
    const query = searchQuery.toLowerCase();
    // Filter berdasarkan nama, kategori, atau deskripsi
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
    if (iconChanging) return; // mencegah spam klik
    setIconChanging(true);
    setRotation((r) => r + 360); // animasi rotasi 360 derajat
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIconChanging(false);
    }, 600);
  };

  // ========================
  // LINK DATA
  // ========================
  const navLinks = [
    { id: "home", label: "Beranda", href: "#hero" },
    { id: "tentang", label: "Tentang", href: "#tentang" },
    { id: "resto", label: "Rekomendasi", href: "#resto" },
    { id: "testimoni", label: "Testimoni", href: "#testimoni" },
    { id: "suasana", label: "Suasana", href: "#suasana" },
    { id: "lokasi", label: "Lokasi", href: "#lokasi" },
  ];

  // Tentukan warna teks & ikon berdasarkan posisi & mode
  const textColor = navInHero ? "text-white" : darkMode ? "text-white" : "text-black";

  // ========================
  // NAVBAR UI
  // ========================
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        // Animasi background & blur mengikuti scroll position
        animate={{
          background: `linear-gradient(to right, rgba(255,255,255,${0.85 * bgOpacity}), rgba(255,255,255,${0.75 * bgOpacity}))`,
          backdropFilter: scrolled && !navInHero ? `blur(${12 * bgOpacity}px)` : "none",
          boxShadow:
            scrolled && !navInHero
              ? `0 4px 20px rgba(0,0,0,${0.08 * bgOpacity})`
              : "none",
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex items-center justify-between px-6 md:px-10 py-4 w-full"
      >
        {/* LOGO KIRI */}
        <a href="#hero" className="flex items-center" aria-label="Kembali ke beranda">
          <motion.img
            key={darkMode ? "black" : "white"}
            src={
              navInHero
                ? "/assets/logo.png" // logo putih pas di hero
                : darkMode
                ? "/assets/logo.png" // logo hitam kalau dark mode
                : "/assets/black.png"
            }
            alt="Logo Gelap Nyawang"
            className="h-10 md:h-12 select-none transition-opacity duration-500"
            draggable="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </a>

        {/* KANAN: LINK + ICONS */}
        <div className="flex items-center gap-5">
          {/* LINK MENU */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <motion.li key={link.id} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActive(link.id)}
                  className={`transition-colors duration-300 ${
                    active === link.id
                      ? "text-[#E75A24]" // warna oranye untuk link aktif
                      : `${textColor} hover:text-[#E75A24]`
                  }`}
                >
                  {link.label}
                </a>
                {/* underline animasi di link aktif */}
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

          {/* SEARCH BAR */}
          <motion.div
            ref={searchRef}
            className="relative flex items-center justify-center"
            animate={{
              width: searchOpen ? 200 : 42, // expand width saat dibuka
              backgroundColor: navInHero
                ? "transparent"
                : darkMode
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
            {/* ICON SEARCH */}
            <Search
              size={18}
              className={`cursor-pointer transition-colors ${
                navInHero ? "text-white" : textColor
              }`}
              onClick={() => setSearchOpen((prev) => !prev)}
            />
            {/* INPUT PENCARIAN */}
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
                  className={`ml-2 bg-transparent outline-none text-sm placeholder-gray-300 ${
                    navInHero ? "text-white" : textColor
                  }`}
                  autoFocus
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* TOGGLE DARK/LIGHT MODE */}
          <motion.button
            onClick={handleToggleMode}
            aria-label={darkMode ? "Ubah ke mode terang" : "Ubah ke mode gelap"}
            className={`flex items-center justify-center rounded-full w-[42px] h-[42px] transition-all duration-300 ${
              navInHero
                ? "bg-white/15 text-white" // transparan di hero
                : darkMode
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Ganti ikon setelah rotasi selesai */}
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

      {/* HASIL PENCARIAN (DROPDOWN) */}
      {searchQuery && searchOpen && filteredUMKM.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 max-h-[300px] overflow-y-auto z-40">
          {filteredUMKM.map((item, i) => (
            <a
              key={i}
              href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-6 py-3 hover:bg-gray-100 transition-colors"
            >
              <p className="font-medium text-black">{item.name}</p>
              <p className="text-sm text-gray-500">{item.category || ""}</p>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
