"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Footer() {
  const controls = useAnimation();

  useEffect(() => {
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        controls.start(entry.isIntersecting ? "visible" : "hidden");
      },
      { threshold: 0.2 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [controls]);

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
      className="
        w-full 
        bg-[#E57621] 
        dark:bg-[#B55610]
        text-white 
        py-16 px-6 md:px-20 
        font-sans 
        relative overflow-hidden
      "
    >

      {/* grain */}
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-10 pointer-events-none"></div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="relative z-10"
      >
        {/* TOP AREA: 3 kolom (kiri-logo, tengah-deskripsi, kanan-logo) */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-10">

          {/* Kiri → Logo Gelap Nyawang */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-auto">
            <img
              src="/assets/logo.png"
              alt="Gelap Nyawang Logo"
              className="w-28 md:w-36 object-contain"
            />
          </div>

          {/* Tengah → Deskripsi */}
          <div className="w-full md:w-2/4 flex flex-col items-center md:items-start">
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left max-w-md text-white/90">
              Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. 
              Dari warkop sederhana sampai kafe ber-wifi, semua hadir buat nemenin 
              ngobrol, nugas, atau sekadar nyari suasana tenang.
            </p>
          </div>

          {/* Kanan → Logo MIA */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-auto">
            <img
              src="/assets/mia2025.png"
              alt="MIA 2025 Logo"
              className="w-32 md:w-40 object-contain"
            />
          </div>
        </div>

        {/* Garis */}
        <hr className="border-white/30 mb-12" />

        {/* GRID 5 kolom */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 text-base md:text-lg mb-12 text-center md:text-left">

          <div>
            <h4 className="font-bold mb-3">Lokasi</h4>
            <p>
              Jl. Gelap Nyawang, Lb. Siliwangi,<br />
              Kecamatan Coblong, Kota Bandung,<br />
              Jawa Barat 40132
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Jam Buka</h4>
            <p>06.00 AM – 01.00 AM</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Navigasi</h4>
            {[
              { name: "Beranda", link: "#" },
              { name: "Rekomendasi", link: "#topResto" },
            ].map((item, i) => (
              <p key={i}>
                <a href={item.link} className="hover:underline">
                  {item.name}
                </a>
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-bold mb-3">Media Sosial</h4>
            {[
              { name: "Instagram", link: "https://www.instagram.com/gelapnyawang.culinary/" },
              { name: "Facebook", link: "https://www.facebook.com" },
              { name: "Tiktok", link: "https://www.tiktok.com" },
            ].map((sos, i) => (
              <p key={i}>
                <a
                  href={sos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {sos.name}
                </a>
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-bold mb-3">Kontak</h4>
            <p>
              <a
                href="https://wa.me/6289656054453"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Whatsapp
              </a>
            </p>
          </div>
        </div>

        <hr className="border-white/30 mb-8" />

        <div className="max-w-7xl mx-auto text-center text-sm md:text-base text-white/80 leading-relaxed">
          &copy; 2025 Gelap Nyawang. Website ini dibuat untuk Web Development Competition MIA 2025.
          <br />
          Desain & konten dikembangkan oleh tim Gelap Nyawang Creative.
        </div>
      </motion.div>

      {/* Glow Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[6px] bg-white/50 blur-sm opacity-70"
        animate={{ x: ["0%", "20%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          fixed bottom-6 right-6 z-40
          bg-white/25 backdrop-blur-md hover:bg-white/40
          text-white p-3 rounded-full shadow-lg
          transition-all duration-300
        "
        title="Kembali ke atas"
      >
        ↑
      </motion.button>

    </footer>
  );
}
