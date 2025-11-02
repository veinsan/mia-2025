"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FooterDirektori() {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const hasMounted = useRef(false);
  const [showScrollTop, setShowScrollTop] = useState(false); // 🔹 kontrol visibilitas tombol

  // Pastikan animasi baru aktif setelah komponen benar-benar mounted
  useLayoutEffect(() => {
    hasMounted.current = true;
    controls.start("visible"); // langsung tampil waktu mount pertama
    return () => {
      hasMounted.current = false;
    };
  }, [controls]);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!hasMounted.current) return; // cegah sebelum mount
      if (entry.isIntersecting) {
        controls.start("visible");
      }
    }, { threshold: 0.2 });

    observer.observe(footer);
    return () => observer.disconnect();
  }, [controls]);

  // 🔹 handle muncul/ngilang tombol scroll-top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowScrollTop(true);
      else setShowScrollTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // panggil sekali waktu mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#B35924] text-[#FFF9F0] py-16 px-6 md:px-20 font-sans overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-25 pointer-events-none"></div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-12 gap-10">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/5">
            <img
              src="/assets/logo.png"
              alt="Gelap Nyawang Logo"
              className="w-28 md:w-36 object-contain mb-3"
            />
          </div>

          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-base leading-relaxed text-[#FFF9F0] text-opacity-95 max-w-lg tracking-wide">
              Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. Dari
              warkop sederhana sampai kafe ber-wifi, semua hadir buat nemenin
              ngobrol, nugas, atau sekadar nyari suasana tenang.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end w-full md:w-1/5 mt-4 md:mt-8">
            <img
              src="/assets/mia2025.png"
              alt="MIA 2025 Logo"
              className="w-32 md:w-40 scale-[1.25] object-contain mb-3"
            />
          </div>
        </div>

        <hr className="border-[#FFF3E0]/30 mb-12" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-base md:text-lg mb-12 text-center md:text-left">
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

          <div>
            <h4 className="font-bold mb-3 text-[#FFF0E0]">Jam Buka</h4>
            <p>06.00 AM – 01.00 AM</p>
          </div>

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

        <div className="max-w-7xl mx-auto text-center text-sm md:text-base text-[#FFF9F0]/90 tracking-wide leading-relaxed">
          &copy; 2025 Gelap Nyawang Direktori. Website ini dibuat untuk Web Development
          Competition MIA 2025.
          <br />
          Desain & konten dikembangkan oleh tim Gelap Nyawang Creative.
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#FFD699]/0 via-[#FFF3E0]/60 to-[#FFD699]/0 blur-sm opacity-80"
        animate={{ x: ["0%", "20%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 tombol scroll ke atas (auto hide di atas) */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 right-6 bg-[#6A4A2E] hover:bg-[#8B5E3C] text-white p-3 rounded-full shadow-lg transition-all duration-300"
        title="Kembali ke atas"
        style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
      >
        ↑
      </motion.button>
    </footer>
  );
}
