"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

/* ===========================
   GALERI DATA (improved)
   =========================== */

const GALERI_PHOTOS = [
  {
    src: "/assets/galeri/1.jpeg",
    text: "Warung kecil yang nyimpen cerita anak kos tiap malam.",
    location: "Black Romantic",
    tags: ["#GelapNyawang", "#KulinerMalam"],
  },
  {
    src: "/assets/galeri/2.jpeg",
    text: "Dari gelas kopi sampai suara gerobak, semuanya punya nostalgia.",
    location: "Dapur Laut",
    tags: ["#Nongkrong", "#KopiMalam"],
  },
  {
    src: "/assets/galeri/3.jpeg",
    text: "Setiap foto punya suasana; meriah, hangat, dan penuh tawa.",
    location: "Kedai BWJ",
    tags: ["#Mahasiswa", "#LateNight"],
  },
  {
    src: "/assets/galeri/4.jpeg",
    text: "Dapur sederhana yang hidup dari obrolan dan pesanan yang gak pernah berhenti.",
    location: "Ayam Besthal",
    tags: ["#DapurPanas", "#StreetFood"],
  },
  {
    src: "/assets/galeri/5.jpeg",
    text: "Rasa yang nempel karena dibuat pelan-pelan, bukan buru-buru.",
    location: "Angkringan Mas Jo",
    tags: ["#MasakanRumahan"],
  },
  {
    src: "/assets/galeri/6.jpeg",
    text: "Suasana malam Gelap Nyawang itu beda—hangat, riuh, dan ngangenin.",
    location: "Warnas Doa Mande",
    tags: ["#NightVibes", "#Bandung"],
  },
];

/* ===========================
   GALLERY CARD
   =========================== */

const GalleryCard = ({ item, index, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl cursor-pointer
                 transition-all duration-500 ease-in-out will-change-transform
                 aspect-square"
    >
      {/* Foto utama */}
      <Image
        src={item.src}
        alt={`Foto ${index + 1} Gelap Nyawang`}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
        loading={index < 2 ? "eager" : "lazy"}
      />

      {/* Overlay hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-primary/70 flex flex-col justify-center items-center 
                    text-white text-center px-4 transition-opacity duration-300"
      >
        <img
          src="/assets/logo.png"
          alt=""
          width={112}
          height={112}
          className="w-20 md:w-28 mb-3"
          aria-hidden="true"
        />

        <p className="font-medium text-sm md:text-lg leading-relaxed mb-2">
          {item.text}
        </p>

        {/* Metadata */}
        <p className="text-xs md:text-sm opacity-90">{item.location}</p>
        <p className="text-[10px] md:text-xs opacity-80 mt-1">
          {item.tags.join("  ")}
        </p>
      </div>
    </motion.article>
  );
};

/* ===========================
   MAIN SECTION
   =========================== */

export default function Galeri() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      id="galeri"
      className="w-full pt-0 pb-32 md:pb-40 relative overflow-visible
                 bg-gradient-to-b from-bg-gold via-bg-warm to-bg-soft
                 dark:from-bg-gold dark:via-bg-warm dark:to-bg-soft
                 transition-colors duration-500"
    >
      {/* --------- Heading --------- */}
      <header className="text-center mb-12 px-6">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold mb-3 text-sm tracking-wide uppercase"
        >
          Dibalik Gelap Nyawang
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary"
        >
          Cerita dari <span className="text-primary">Kehangatan</span>
        </motion.h2>
      </header>

      {/* --------- Grid Photos --------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-16">
        {GALERI_PHOTOS.map((item, i) => (
          <GalleryCard
            key={i}
            item={item}
            index={i}
            onClick={() => setLightbox(item)}
          />
        ))}
      </div>

      {/* --------- Lightbox --------- */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm 
                     flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={lightbox.src}
            alt={lightbox.text}
            className="max-w-full max-h-full object-contain rounded-xl"
          />

          {/* lightbox caption */}
          <div className="absolute bottom-10 text-center text-white text-sm opacity-90 px-4">
            <p className="font-medium mb-1">{lightbox.text}</p>
            <p className="text-xs opacity-80">{lightbox.location}</p>
            <p className="text-xs opacity-60 mt-1">{lightbox.tags.join("  ")}</p>
          </div>
        </motion.div>
      )}

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 md:h-32
                   bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold
                   dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold
                   pointer-events-none"
      />
    </section>
  );
}
