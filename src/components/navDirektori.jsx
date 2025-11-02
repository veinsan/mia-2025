"use client";
import { useEffect } from "react";

export default function NavDirektori() {
  useEffect(() => {
    const nav = document.querySelector("nav");

    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add(
          "bg-[#FFF9F0]/90",
          "backdrop-blur-md",
          "shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        );
      } else {
        nav.classList.remove(
          "bg-[#FFF9F0]/90",
          "backdrop-blur-md",
          "shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Gelap Nyawang Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-heading text-2xl text-[#4A1E0E]">
            Gelap Nyawang
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-[#4A1E0E] font-medium">
          <a href="/" className="hover:text-primary transition-colors">
            Beranda
          </a>
          <a href="#trending" className="hover:text-primary transition-colors">
            Trending
          </a>
          <a href="#kategori" className="hover:text-primary transition-colors">
            Kategori
          </a>
          <a href="#list" className="hover:text-primary transition-colors">
            Daftar UMKM
          </a>
          <a href="#kontak" className="hover:text-primary transition-colors">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
