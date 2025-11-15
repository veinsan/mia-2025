"use client";

import { useState } from "react"; 
import { motion } from "framer-motion";
import Link from "next/link";
import { UMKM_DATA } from "@/data/umkmData"; 
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";
import { Star, DollarSign, MapPin, Phone, Clock } from "lucide-react"; 

export default function DetailUMKM() { 
  
  const hardcodedSlug = 'blackromantic';
  const umkm = UMKM_DATA.find((item) => item.slug === hardcodedSlug);

  // Fallback sederhana
  if (!umkm) {
    return (
      <main className="bg-[#FFF9F0] text-[#2B1B0F] min-h-screen flex flex-col items-center justify-center">
        <NavDirektori />
        <h1 className="text-3xl font-bold mb-4">Data UMKM Error</h1>
        <Link href="/direktori" className="text-primary underline hover:text-[#E87524]/80">
          Kembali
        </Link>
        <FooterDirektori />
      </main>
    );
  }

  // Menggunakan data galeri dari umkmData.js
  const galleryImages = (umkm.gallery && umkm.gallery.length > 0)
    ? umkm.gallery
    : [ umkm.img ]; // Fallback jika galeri kosong

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    // Background gradasi
    <main className="bg-[linear-gradient(180deg,#FFF3E0,white)] text-[#2B1B0F] min-h-screen">
      <NavDirektori />

      {/* Kontainer utama di tengah (max-w-7xl) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-32">
        
          {/* Konten (TANPA KARTU PUTIH) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16"
        >
            {/* KOLOM KIRI (Gambar Utama & Carousel Thumbnail) */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={activeImage}
              alt={umkm.name}
              // Diberi rounded, shadow, dan border agar 'pop-up'
              className="w-full h-auto aspect-[16/10] object-cover rounded-xl shadow-lg border border-[#F0D8BE]"
            />

            {/* THUMBNAIL CAROUSEL (Bisa geser) */}
            <div className="flex overflow-x-auto gap-3 mt-4 pb-2 no-scrollbar">
              {galleryImages.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => setActiveImage(img)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-28 md:w-32 flex-shrink-0 
                    aspect-square object-cover rounded-lg cursor-pointer
                    transition-all duration-200 shadow-sm border border-[#F0D8BE]
                    ${activeImage === img
                      ? 'ring-4 ring-[#E87524]' // Cincin oranye
                      : 'ring-2 ring-transparent hover:opacity-70'
                    }
                  `}
                />
              ))}
            </div>
          </motion.div>

            {/* KOLOM KANAN (Info Produk & Tombol) */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A1E0E]">
              {umkm.name}
            </h1>
            
            <h3 className="text-xl font-semibold text-[#E87524] mt-6 mb-2">
              Tentang Kami
            </h3>
            <p className="text-base leading-relaxed text-[#5B3A22]">
              Ini adalah deskripsi hard-coded. {umkm.name} merupakan salah satu
              spot kuliner favorit di kawasan Gelap Nyawang. 
              Kami menyajikan berbagai menu andalan dengan cita rasa otentik
              dan harga yang terjangkau, cocok untuk mahasiswa dan 
              masyarakat umum.
            </p>

            {/* Info detail (layout seperti screenshot) */}
            <div className="mt-8 pt-8 border-t border-[#FFE1BA] space-y-4">
              <div className="flex items-center gap-3">
                <Star size={18} className="text-[#E87524] flex-shrink-0" />
                <span className="text-sm text-[#4A1E0E]">
                  <strong>{umkm.rating || "N/A"}</strong> Rating
                </span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign size={18} className="text-[#E87524] flex-shrink-0" />
                <span className="text-sm text-[#4A1E0E]">
  s               Harga: <strong>{umkm.rangeHarga || "Tidak diketahui"}</strong>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E87524] flex-shrink-0 mt-1" />
                <span className="text-sm text-[#4A1E0E]">{umkm.alamat}</span>
              </div>
              {umkm.noTelp && umkm.noTelp !== "-" && (
                 <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#E87524] flex-shrink-0" />
                    <span className="text-sm text-[#4A1E0E]">{umkm.noTelp}</span>
                 </div>
              )}
               <div className="flex items-center gap-3">
                 <Clock size={18} className="text-[#E87524] flex-shrink-0" />
                 <span className="text-sm text-[#4A1E0E]">Jam Buka: <strong>08.00 - 22.00</strong></span>
              </div>
            </div>

            {/* Tombol (layout seperti screenshot) */}
            <div className="flex flex-col gap-4 mt-8">
              {umkm.noTelp && umkm.noTelp !== "-" && (
                <a
                  href={`https://wa.me/${umkm.noTelp.replace(/^0/, "62")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#E87524] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#F9A24B] transition-all"
                >
                  Hubungi via WhatsApp
                </a>
              )}
              <Link
                href="/direktori"
                className="w-full text-center bg-[#FFF3E0] text-[#2B1B0F] px-6 py-3 rounded-full font-medium hover:bg-[#FFE1BA] transition-all"
              >
                ← Kembali ke Direktori
              </Link>
            </div>
          </div>
        </motion.div> {/* <-- Penutup Grid 2 Kolom */}

        {/* Bagian Peta */}
        <section className="mt-16 md:mt-24 pt-12 border-t border-[#FFE1BA]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A1E0E] mb-6">
            Lokasi Kami di Peta
          </h2>
          {umkm.mapEmbed ? (
            <div className="w-full h-[450px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border-2 border-[#FFE1BA]">
              <iframe
                src={umkm.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
S               loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ) : (
            <p className="text-[#5B3A22]">Peta lokasi untuk UMKM ini belum tersedia.</p>
          )}
        </section>

      </section>

      <FooterDirektori />

      <style jsx>{`
        /* Menyembunyikan scrollbar di carousel */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </main>
  );
}