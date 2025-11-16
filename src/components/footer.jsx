"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";   // 🔥 Tambah Phone icon
import { useEffect, useState } from "react";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ==========================================================
   FIX B — Social links now include external:true flag
========================================================== */
const NAV_LINKS = [
  { name: "Beranda", link: "#" },
  { name: "Rekomendasi", link: "#topResto" },
];

const SOCIAL_LINKS = [
  { name: "Instagram", link: "https://www.instagram.com/gelapnyawang.culinary/", external: true },
  { name: "Facebook", link: "https://www.facebook.com", external: true },
  { name: "Tiktok", link: "https://www.tiktok.com", external: true },
];

/* ==========================================================
   FIX B — LinkSection now adds rel noopener when external
========================================================== */
const LinkSection = ({ title, links, ariaLabel }) => (
  <nav aria-label={ariaLabel}>
    {title && <h3 className="font-bold mb-3">{title}</h3>}
    {links.map((item) => (
      <p key={item.name}>
        <a
          href={item.link}
          className="hover:underline"
          {...(item.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          {item.name}
        </a>
      </p>
    ))}
  </nav>
);

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  const [expanded, setExpanded] = useState(null);

  /* ==========================================================
     FIX C — Scroll to top visibility logic
  =========================================================== */
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = (name) => setExpanded(expanded === name ? null : name);

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
          {/* TOP SECTION */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-10">
            <img src="/assets/logo.png" alt="Gelap Nyawang Logo" className="w-28 md:w-36" />

            <div className="w-full md:w-2/4 text-center md:text-left">
              <p className="text-base md:text-lg leading-relaxed max-w-md text-white/90 mx-auto md:mx-0">
                Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB.
                Dari warkop sederhana sampai kafe ber-wifi, semua hadir buat nemenin
                ngobrol, nugas, atau sekadar nyari suasana tenang.
              </p>
            </div>

            <img src="/assets/mia2025.png" alt="MIA 2025 Logo" className="w-32 md:w-40" />
          </div>

          <hr className="border-white/30 mb-12" />

          {/* MOBILE ACCORDION */}
          <div className="md:hidden space-y-6">

            {/* Lokasi */}
            <div>
              <button
                onClick={() => toggle("lokasi")}
                className="flex justify-between w-full font-bold text-left"
              >
                Lokasi
                <ChevronDown className={`transition-transform ${expanded === "lokasi" ? "rotate-180" : ""}`} />
              </button>
              {expanded === "lokasi" && (
                <div className="mt-2 text-white/90">
                  Jl. Gelap Nyawang, Lb. Siliwangi,<br />
                  Kota Bandung, Jawa Barat
                </div>
              )}
            </div>

            {/* Jam Buka */}
            <div>
              <button
                onClick={() => toggle("jam")}
                className="flex justify-between w-full font-bold text-left"
              >
                Jam Buka
                <ChevronDown className={`transition-transform ${expanded === "jam" ? "rotate-180" : ""}`} />
              </button>
              {expanded === "jam" && (
                <p className="mt-2 text-white/90">06.00 - 01.00</p>
              )}
            </div>

            {/* Navigasi */}
            <div>
              <button
                onClick={() => toggle("nav")}
                className="flex justify-between w-full font-bold text-left"
              >
                Navigasi
                <ChevronDown className={`transition-transform ${expanded === "nav" ? "rotate-180" : ""}`} />
              </button>
              {expanded === "nav" && (
                <div className="mt-2">
                  <LinkSection title="" links={NAV_LINKS} ariaLabel="Footer navigation mobile" />
                </div>
              )}
            </div>

            {/* Sosmed */}
            <div>
              <button
                onClick={() => toggle("sosmed")}
                className="flex justify-between w-full font-bold text-left"
              >
                Media Sosial
                <ChevronDown className={`transition-transform ${expanded === "sosmed" ? "rotate-180" : ""}`} />
              </button>
              {expanded === "sosmed" && (
                <div className="mt-2">
                  <LinkSection title="" links={SOCIAL_LINKS} ariaLabel="Social media mobile" />
                </div>
              )}
            </div>

            {/* Kontak */}
            <div>
              <button
                onClick={() => toggle("kontak")}
                className="flex justify-between w-full font-bold text-left"
              >
                Kontak
                <ChevronDown className={`transition-transform ${expanded === "kontak" ? "rotate-180" : ""}`} />
              </button>
              {expanded === "kontak" && (
                <p className="mt-2 flex items-center gap-2">
                  {/* FIX A — Whatsapp icon + proper link */}
                  <Phone size={16} />
                  <a
                    href="https://wa.me/6289656054453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +62 896-5605-4453
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid max-w-7xl mx-auto grid-cols-5 gap-16 mb-12 text-base">

            <div>
              <h3 className="font-bold mb-3">Lokasi</h3>
              <address className="not-italic">
                Jl. Gelap Nyawang, Lb. Siliwangi,<br />
                Kota Bandung, Jawa Barat
              </address>
            </div>

            <div>
              <h3 className="font-bold mb-3">Jam Buka</h3>
              <p>06.00 - 01.00</p>
            </div>

            <LinkSection title="Navigasi" links={NAV_LINKS} ariaLabel="Footer navigation" />
            <LinkSection title="Media Sosial" links={SOCIAL_LINKS} ariaLabel="Social media" />

            {/* FIX A — Icon WhatsApp juga tampil di desktop */}
            <div>
              <h3 className="font-bold mb-3">Kontak</h3>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="https://wa.me/6289656054453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +62 896-5605-4453
                </a>
              </p>
            </div>
          </div>

          <hr className="border-white/30 mb-8" />

          <div className="text-center text-white/80 text-sm leading-relaxed">
            © 2025 Gelap Nyawang • Website untuk MIA 2025
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-[6px] bg-white/50 blur-sm opacity-70"
          animate={{ x: ["0%", "20%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </footer>

      {/* ==========================================================
          FIX C — Smooth entrance scroll-to-top with AnimatePresence
      =========================================================== */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              fixed bottom-6 right-6 z-40 
              bg-white/25 backdrop-blur-md hover:bg-white/40 
              text-white p-3 rounded-full shadow-lg 
              transition-all duration-300
            "
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}