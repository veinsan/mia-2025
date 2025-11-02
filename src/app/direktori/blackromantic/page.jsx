"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";

export default function BlackRomantic() {
  return (
    <main className="bg-[#FFF9F0] text-[#2B1B0F] min-h-screen">
      {/* NAVBAR */}
      <NavDirektori />

      {/* HERO / DETAIL SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* FOTO */}
          <motion.img
            src="/assets/resto/resto2.webp"
            alt="Black Romantic Coffee"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* DETAIL */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#4A1E0E]">
              Black Romantic Coffee & Space
            </h1>

            <p className="text-sm uppercase text-[#E87524] font-semibold mb-4">
              Kafe • Specialty Coffee
            </p>

            <p className="text-base leading-relaxed mb-6 text-[#5B3A22]">
              Tempat ngopi dengan suasana romantis, pencahayaan temaram, dan aroma kopi yang khas.
              Cocok buat nugas, ngobrol, atau sekadar menikmati sore di Gelap Nyawang.
              Dikenal dengan signature drink “Black Latte” dan “Romantic Cold Brew”.
            </p>

            <ul className="mb-6 space-y-1 text-sm text-[#4A1E0E]/90">
              <li>📍 Jl. Gelap Nyawang No. 12, Bandung</li>
              <li>🕒 10.00 – 23.00 WIB</li>
              <li>📞 0812-3456-7890</li>
              <li>📸 @blackromantic.coffee</li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E87524] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#F9A24B] transition"
              >
                Hubungi via WhatsApp
              </a>

              <Link
                href="/direktori"
                className="bg-[#FFF3E0] text-[#2B1B0F] px-6 py-3 rounded-full font-medium hover:bg-[#FFE1BA] transition"
              >
                ← Kembali
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <FooterDirektori />
    </main>
  );
}
