"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { UMKM_DATA } from "@/data/umkmData";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";

export default function DetailUMKM({ params }) {
  const umkm = UMKM_DATA.find((item) => item.slug === params.slug);

  if (!umkm) {
    return (
      <main className="bg-[#FFF9F0] text-[#2B1B0F] min-h-screen flex flex-col items-center justify-center">
        <NavDirektori />
        <h1 className="text-3xl font-bold mb-4">UMKM Tidak Ditemukan</h1>
        <Link
          href="/direktori"
          className="text-primary underline hover:text-[#E87524]/80"
        >
          Kembali ke Direktori
        </Link>
        <FooterDirektori />
      </main>
    );
  }

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
            src={umkm.img}
            alt={umkm.name}
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* DETAIL */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#4A1E0E]">
              {umkm.name}
            </h1>

            <p className="text-sm uppercase text-[#E87524] font-semibold mb-4">
              {umkm.category}
            </p>

            <p className="text-base leading-relaxed mb-6 text-[#5B3A22]">
              {umkm.short ||
                "Deskripsi belum tersedia. UMKM ini terdaftar di kawasan Gelap Nyawang, Bandung."}
            </p>

            <ul className="mb-6 space-y-1 text-sm text-[#4A1E0E]/90">
              <li>⭐ {umkm.rating || "N/A"}</li>
              <li>💰 {umkm.rangeHarga || "Tidak diketahui"}</li>
              <li>📍 {umkm.alamat}</li>
              <li>📞 {umkm.noTelp || "Tidak tersedia"}</li>
            </ul>

            {/* EMBED MAP */}
            {umkm.mapEmbed && (
              <div className="my-6 rounded-xl overflow-hidden shadow-md">
                <iframe
                  src={umkm.mapEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {umkm.noTelp && (
                <a
                  href={`https://wa.me/${umkm.noTelp.replace(/^0/, "62")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E87524] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#F9A24B] transition"
                >
                  Hubungi via WhatsApp
                </a>
              )}

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
