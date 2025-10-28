"use client";

import { useState } from "react";
import { Sun, Moon, Search } from "lucide-react";

export default function NavbarHero() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeBg, setActiveBg] = useState("/assets/bg1.jpg");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const bgList = [
    { name: "Black Romantic", img: "/assets/bg1.jpg" },
    { name: "Ayam Penyet Si Joe", img: "/assets/bg2.jpg" },
    { name: "Warung sate Bu Ngantuk", img: "/assets/bg3.jpg" },
    { name: "marikemari.yu", img: "/assets/bg4.jpg" },
  ];

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      style={{
        backgroundImage: `url(${activeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 absolute top-0 left-0 right-0 z-50">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="logo" className="w-10 h-10" />
        </div>

        {/* Menu */}
        <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-full border border-white/40 dark:border-gray-700/50 px-6 py-2 flex gap-6 text-sm font-medium">
          <a href="#beranda" className="hover:text-green-600 transition">Beranda</a>
          <a href="#kategori" className="hover:text-green-600 transition">Kategori</a>
          <a href="#unggulan" className="hover:text-green-600 transition">Unggulan</a>
          <a href="#peta" className="hover:text-green-600 transition">Peta</a>
          <a href="#tentang" className="hover:text-green-600 transition">Tentang Kami</a>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 cursor-pointer hover:text-green-600 transition" />
          {darkMode ? (
            <Sun
              className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition"
              onClick={toggleDarkMode}
            />
          ) : (
            <Moon
              className="w-5 h-5 cursor-pointer hover:text-blue-500 transition"
              onClick={toggleDarkMode}
            />
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-start h-screen px-16 bg-black/40 text-white backdrop-brightness-75">
        <h2 className="text-6xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
        <p className="max-w-lg text-lg mb-6 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend sed urna tincidunt hendrerit.
        </p>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white transition">
          Lorem ipsum
        </button>
      </div>

      {/* Bottom-right Card Selector */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        {bgList.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveBg(item.img)}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition border-2 border-transparent hover:border-green-500"
          >
            <img src={item.img} alt={item.name} className="w-32 h-24 object-cover" />
            <div className="bg-black/40 text-white text-sm py-1 px-2 text-center">
              {item.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
