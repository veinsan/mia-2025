"use client";
import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const NAV_LINKS = [
  { name: "Beranda", link: "/" },
  { name: "Direktori", link: "/direktori" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/gelapnyawang.culinary/",
  },
  { name: "Facebook", link: "https://www.facebook.com" },
  { name: "Tiktok", link: "https://www.tiktok.com" },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function FooterDirektori() {
  return (
    <>
      <footer className="w-full bg-[#E57621] dark:bg-[#B55610] text-white py-16 px-6 md:px-20 font-sans relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-10 pointer-events-none"
          aria-hidden="true"
        />

        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-10">
            <div className="flex-shrink-0">
              <img
                src="/assets/logo.png"
                alt="Gelap Nyawang Logo"
                className="w-28 md:w-36 object-contain"
              />
            </div>

            <div className="w-full md:w-2/4 flex flex-col items-center md:items-start">
              <p className="text-center md:text-left text-white/90 text-base md:text-lg max-w-md leading-relaxed">
                Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. Dari warkop
                sampai kafe, semua hadir buat nemenin ngobrol, nugas, atau sekadar nyari
                suasana.
              </p>
            </div>

            <div className="flex-shrink-0">
              <img
                src="/assets/mia2025.png"
                alt="MIA 2025 Logo"
                className="w-32 md:w-40 object-contain"
              />
            </div>
          </div>

          <hr className="border-white/30 mb-12" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 text-base md:text-lg mb-12 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-3">Lokasi</h3>
              <address className="not-italic">
                Jl. Gelap Nyawang, Lb. Siliwangi,
                <br />
                Kecamatan Coblong, Bandung
                <br />
                Jawa Barat 40132
              </address>
            </div>

            <div>
              <h3 className="font-bold mb-3">Jam Buka</h3>
              <p>06.00 AM - 01.00 AM</p>
            </div>

            <nav aria-label="Footer navigation">
              <h3 className="font-bold mb-3">Navigasi</h3>
              {NAV_LINKS.map((item) => (
                <p key={item.name}>
                  <a href={item.link} className="hover:underline">
                    {item.name}
                  </a>
                </p>
              ))}
            </nav>

<nav aria-label="Social media">
  <h3 className="font-bold mb-3">Media Sosial</h3>
  {SOCIAL_LINKS.map((s) => (
    <p key={s.name}>
      <a
        href={s.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {s.name}
      </a>
    </p>
  ))}
</nav>

<div>
  <h3 className="font-bold mb-3">Kontak</h3>
  <a
    href="https://wa.me/6289656054453"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Whatsapp
  </a>
</div>

</div>   {/* ⬅️ ini yang tadi hilang! */}

<hr className="border-white/30 mb-8" />

          <hr className="border-white/30 mb-8" />

          <div className="max-w-7xl mx-auto text-center text-sm md:text-base text-white/80 leading-relaxed">
            © 2025 Gelap Nyawang. Website ini dibuat untuk Web Development Competition
            MIA 2025.
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-[6px] bg-white/50 blur-sm opacity-70"
          animate={{ x: ["0%", "20%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </footer>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all"
        title="Kembali ke atas"
        aria-label="Scroll to top"
      >
        ↑
      </motion.button>
    </>
  );
}