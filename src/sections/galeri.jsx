"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/*
  Kumpulan foto yang ditampilkan di grid Galeri.
  Masing-masing item punya deskripsi singkat untuk overlay hover.
*/
const GALERI_PHOTOS = [
  {
    src: "/assets/galeri/1.jpeg",
    text: "Warung kecil yang nyimpen cerita anak kos tiap malam.",
  },
  {
    src: "/assets/galeri/2.jpeg",
    text: "Dari gelas kopi sampai suara gerobak, semuanya punya nostalgia.",
  },
  {
    src: "/assets/galeri/3.jpeg",
    text: "Setiap foto punya suasana; meriah, hangat, dan penuh tawa.",
  },
  {
    src: "/assets/galeri/4.jpeg",
    text: "Dapur sederhana yang hidup dari obrolan dan pesanan yang gak pernah berhenti.",
  },
  {
    src: "/assets/galeri/5.jpeg",
    text: "Rasa yang nempel karena dibuat pelan-pelan, bukan buru-buru.",
  },
  {
    src: "/assets/galeri/6.jpeg",
    text: "Suasana malam Gelap Nyawang itu beda—hangat, riuh, dan ngangenin.",
  },
];

/*
  Kartu individual untuk satu item galeri.
  Ada animasi fade-up saat masuk viewport, dan overlay saat hover.
*/
const GalleryCard = ({ item, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer
                 transition-all duration-500 ease-in-out will-change-transform
                 aspect-square"
    >
      {/* Foto utama */}
      <Image
        src={item.src}
        alt={`Foto ${index + 1} Gelap Nyawang`}
        fill
        className="object-cover transition-transform duration-500 ease-in-out
                   group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
        loading={index < 2 ? "eager" : "lazy"} // percepat load foto pertama
      />

      {/* Overlay info saat hover */}
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

        <p className="font-medium text-sm md:text-lg leading-relaxed">
          {item.text}
        </p>
      </div>
    </motion.article>
  );
};

/*
  Section Galeri berisi heading + grid foto.
  Grid responsif otomatis menyesuaikan device (2 kolom → 3 kolom).
*/
export default function Galeri() {
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
          Dibalik Dapur Gelap Nyawang
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary"
        >
          Cerita dari <span className="text-primary">Dapur Kami</span>
        </motion.h2>
      </header>

      {/* --------- Grid Galeri --------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-16">
        {GALERI_PHOTOS.map((item, i) => (
          <GalleryCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* Gradient transisi ke section berikutnya */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 md:h-32
                   bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold
                   dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold
                   pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}