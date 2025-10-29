"use client";
import { useState, useEffect } from "react";
import { Search, Sun, Moon } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode with <html> tag
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-6 md:px-10 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto backdrop-blur-md border rounded-full shadow-md px-6 py-4 flex items-center justify-between transition-all duration-300
        ${
          darkMode
            ? "bg-[#1C1C1C]/70 border-[#E75A24]/30 text-[#FFF8F0]"
            : "bg-[#FFF8F0]/70 border-[#E75A24]/30 text-[#2C2C2C]"
        }`}
      >
        {/* Kiri - Logo */}
        <a href="#hero" className="flex-shrink-0">
          <img
            src="/assets/logo.png"
            alt="Logo Gelap Nyawang"
            className="h-12 md:h-14"
          />
        </a>

        {/* Tengah - Navigasi */}
        <nav className="hidden md:flex items-center gap-6 text-[1.05rem] font-medium">
          <a href="#hero" className="hover:text-[#E75A24] transition">
            Beranda
          </a>
          <a href="#tentang" className="hover:text-[#E75A24] transition">
            Tentang
          </a>
          <a href="#resto" className="hover:text-[#E75A24] transition">
            Rekomendasi
          </a>
          <a href="#testimoni" className="hover:text-[#E75A24] transition">
            Testimoni
          </a>
          <a href="#suasana" className="hover:text-[#E75A24] transition">
            Suasana
          </a>
          <a href="#lokasi" className="hover:text-[#E75A24] transition">
            Lokasi
          </a>
        </nav>

        {/* Kanan - Search & Theme */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search Button */}
          <button
            className={`p-2 rounded-full transition ${
              darkMode
                ? "hover:bg-[#E75A24]/20 text-[#FFF8F0]"
                : "hover:bg-[#E75A24]/10 text-[#2C2C2C]"
            }`}
          >
            <Search size={20} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-[#E75A24]/30 text-[#FFF8F0] hover:bg-[#E75A24]/50"
                : "bg-[#E75A24]/10 text-[#2C2C2C] hover:bg-[#E75A24]/20"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#E75A24] text-3xl focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`absolute top-full left-0 mt-4 w-full rounded-2xl shadow-lg p-6 text-center space-y-4 backdrop-blur-md border
            ${
              darkMode
                ? "bg-[#1C1C1C]/80 border-[#E75A24]/30 text-[#FFF8F0]"
                : "bg-[#FFF8F0]/90 border-[#E75A24]/30 text-[#2C2C2C]"
            }`}
          >
            <a href="#hero" className="block hover:text-[#E75A24]">
              Beranda
            </a>
            <a href="#tentang" className="block hover:text-[#E75A24]">
              Tentang
            </a>
            <a href="#resto" className="block hover:text-[#E75A24]">
              Rekomendasi
            </a>
            <a href="#testimoni" className="block hover:text-[#E75A24]">
              Testimoni
            </a>
            <a href="#suasana" className="block hover:text-[#E75A24]">
              Suasana
            </a>
            <a href="#lokasi" className="block hover:text-[#E75A24]">
              Lokasi
            </a>

            <div className="flex justify-center gap-3 pt-3 border-t border-[#E75A24]/20">
              <button
                className={`p-2 rounded-full transition ${
                  darkMode
                    ? "hover:bg-[#E75A24]/20 text-[#FFF8F0]"
                    : "hover:bg-[#E75A24]/10 text-[#2C2C2C]"
                }`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition ${
                  darkMode
                    ? "bg-[#E75A24]/30 text-[#FFF8F0] hover:bg-[#E75A24]/50"
                    : "bg-[#E75A24]/10 text-[#2C2C2C] hover:bg-[#E75A24]/20"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
