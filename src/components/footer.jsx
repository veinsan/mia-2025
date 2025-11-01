"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  useEffect(() => {
    const footer = document.querySelector("footer");

    // Set awal (fade-in satu kali)
    footer.classList.add("opacity-0", "translate-y-10");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add(
            "opacity-100",
            "translate-y-0",
            "transition-all",
            "duration-[1200ms]",
            "ease-out"
          );
          footer.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(footer); // animasi cuma sekali
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Scroll to top smooth
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#D17B39] via-[#C36D2F] to-[#B35924] text-[#FFF9F0] py-16 px-6 md:px-20 font-sans overflow-hidden">
      {/* grain texture (lebih kelihatan tapi halus) */}
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-25 pointer-events-none"></div>

      {/* container utama */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between mb-12 gap-10">
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
            Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. Dari
            warkop sederhana sampai kafe ber-wifi, semua hadir buat nemenin
            ngobrol, nugas, atau sekadar nyari suasana tenang.
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

      {/* Garis Pemisah */}
      <hr className="border-[#FFF3E0]/30 mb-12" />

      {/* Konten Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-base md:text-lg mb-12 text-center md:text-left">
        {/* Lokasi */}
        <div>
          <h4 className="font-bold mb-3 text-[#FFF0E0]">Lokasi</h4>
          <p>
            Jl. Gelap Nyawang, Lb. Siliwangi,
            <br />
            Kecamatan Coblong, Kota Bandung,
            <br />
            Jawa Barat 40132
          </p>
        </div>

        {/* Jam */}
        <div>
          <h4 className="font-bold mb-3 text-[#FFF0E0]">Jam Buka</h4>
          <p>06.00 AM – 01.00 AM</p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="font-bold mb-3 text-[#FFF0E0]">Navigasi</h4>
          <ul className="space-y-1">
            {[
              { name: "Beranda", link: "#" },
              { name: "Tentang", link: "#tentang" },
              { name: "Rekomendasi", link: "#topResto" },
              { name: "Suasana", link: "#galeri" },
              { name: "Testimoni", link: "#testimoni" },
              { name: "Lokasi", link: "#lokasi" },
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

        {/* Media Sosial */}
        <div>
          <h4 className="font-bold mb-3 text-[#FFF0E0]">Media Sosial</h4>
          <ul className="space-y-1">
            {[
              {
                name: "Instagram",
                link: "https://www.instagram.com/gelapnyawang.culinary/",
              },
              { name: "Facebook", link: "https://www.facebook.com" },
              { name: "Tiktok", link: "https://www.tiktok.com" },
            ].map((sos, i) => (
              <li key={i}>
                <a
                  href={sos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:text-[#FFD699] transition-all duration-300 inline-block"
                >
                  {sos.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FFD699] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
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

      {/* Garis Pemisah */}
      <hr className="border-[#FFF3E0]/30 mb-8" />

      {/* Copyright */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-sm md:text-base text-[#FFF9F0]/90 tracking-wide leading-relaxed">
        &copy; 2025 Gelap Nyawang. Website ini dibuat untuk Web Development
        Competition MIA 2025.
        <br />
        Desain & konten dikembangkan oleh tim Gelap Nyawang Creative.
      </div>

      {/* Ambient Glow Line (bergerak pelan) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#FFD699]/0 via-[#FFF3E0]/60 to-[#FFD699]/0 blur-sm opacity-80"
        animate={{ x: ["0%", "20%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tombol Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-[#FFD699]/30 backdrop-blur-md hover:bg-[#FFD699]/60 text-[#FFF] p-3 rounded-full shadow-lg transition-all duration-300"
        title="Kembali ke atas"
      >
        ↑
      </motion.button>
    </footer>
  );
}
