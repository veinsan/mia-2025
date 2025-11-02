"use client";
import { motion } from "framer-motion";

export default function FooterDirektori() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#FFD699] via-[#F6C37F] to-[#E87524] text-[#FFF9F0] py-16 px-6 md:px-20 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-12 gap-10">
        {/* Logo kiri */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/5">
          <img
            src="/assets/logo.png"
            alt="Gelap Nyawang Logo"
            className="w-28 md:w-36 object-contain mb-3"
          />
        </div>

        {/* Deskripsi tengah */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-base leading-relaxed text-[#FFF9F0] text-opacity-95 max-w-lg tracking-wide">
            Direktori UMKM Gelap Nyawang — temukan berbagai usaha kuliner,
            minuman, dan cemilan favorit mahasiswa ITB di satu tempat.
          </p>
        </div>

        {/* Logo kanan */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/5 mt-4 md:mt-8">
          <img
            src="/assets/mia2025.png"
            alt="MIA 2025 Logo"
            className="w-32 md:w-40 scale-[1.25] object-contain mb-3"
          />
        </div>
      </div>

      <hr className="border-[#FFF3E0]/30 mb-12" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-base md:text-lg mb-12 text-center md:text-left">
        <div>
          <h4 className="font-bold mb-3 text-[#FFF0E0]">Navigasi</h4>
          <ul className="space-y-1">
            {[
              { name: "Beranda", link: "/" },
              { name: "Trending", link: "#trending" },
              { name: "Kategori", link: "#kategori" },
              { name: "Daftar UMKM", link: "#list" },
              { name: "Kontak", link: "#kontak" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="relative group hover:text-[#FFD699] transition-all duration-300 inline-block"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FFD699] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-[#FFF0E0]">Kontak</h4>
          <a
            href="https://wa.me/6289656054453"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group hover:text-[#FFD699] transition-all duration-300 inline-block"
          >
            Whatsapp
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FFD699] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      <hr className="border-[#FFF3E0]/30 mb-8" />

      <div className="relative z-10 max-w-7xl mx-auto text-center text-sm md:text-base text-[#FFF9F0]/90 tracking-wide leading-relaxed">
        &copy; 2025 Gelap Nyawang Direktori. Dibuat untuk kompetisi Web Development MIA 2025.
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#FFD699]/0 via-[#FFF3E0]/60 to-[#FFD699]/0 blur-sm opacity-80"
        animate={{ x: ["0%", "20%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
}
