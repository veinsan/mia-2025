"use client";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const footer = document.querySelector("footer");

    // Set initial state
    footer.classList.add("opacity-0", "translate-y-10");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Muncul halus pas scroll down
          footer.classList.add(
            "opacity-100",
            "translate-y-0",
            "transition-all",
            "duration-[1000ms]",
            "ease-out"
          );
          footer.classList.remove("opacity-0", "translate-y-10");
        } else {
          // Hilang halus pas scroll up
          footer.classList.remove("opacity-100", "translate-y-0");
          footer.classList.add("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#E87524] to-[#B94519] text-[#FFF9F0] py-16 px-6 md:px-20 font-sans overflow-hidden">
      {/* subtle texture biar gak flat */}
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-15 pointer-events-none"></div>

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
                  className="relative group hover:text-[#FFD699] transition-colors duration-200"
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
                  className="relative group hover:text-[#FFD699] transition-colors duration-200"
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
            className="relative group hover:text-[#FFD699] transition-colors duration-200"
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
        &copy; 2025 Gelap Nyawang. Website ini dibuat khusus untuk Web Development
        Competition dalam rangka Multimedia In Action (MIA) 2025.
        <br />
        Desain dan konten dikembangkan sepenuhnya oleh tim Gelap Nyawang
        Creative.
      </div>

      {/* Overlay Gradient Soft */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00000020] via-transparent to-transparent pointer-events-none"></div>

      {/* Ambient Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#FFD699]/0 via-[#FFF3E0]/50 to-[#FFD699]/0 blur-sm opacity-70"></div>
    </footer>
  );
}
