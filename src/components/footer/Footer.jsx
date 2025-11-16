"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MobileAccordion from "./MobileAccordion";
import DesktopGrid from "./DesktopGrid";
import ScrollToTop from "./ScrollToTop";
import { FADE_UP } from "./footerConfig";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  const [expanded, setExpanded] = useState(null);
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
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-10">
            <img
              src="/assets/logo.png"
              alt="Gelap Nyawang Logo"
              className="w-28 md:w-36"
            />

            <div className="w-full md:w-2/4 text-center md:text-left">
              <p className="text-base md:text-lg leading-relaxed max-w-md text-white/90 mx-auto md:mx-0">
                Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. Dari
                warkop sederhana sampai kafe ber-wifi, semua hadir buat nemenin
                ngobrol, nugas, atau sekadar nyari suasana tenang.
              </p>
            </div>

            <img
              src="/assets/mia2025.png"
              alt="MIA 2025 Logo"
              className="w-32 md:w-40"
            />
          </div>

          <hr className="border-white/30 mb-12" />

          <MobileAccordion expanded={expanded} toggle={toggle} />
          <DesktopGrid />

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

      <ScrollToTop showScrollTop={showScrollTop} onClick={scrollToTop} />
    </>
  );
}