"use client";
import { motion } from "framer-motion";

export default function Galeri() {
  const photos = [
    { src: "/assets/galeri/1.jpeg", caption: "Jawa Tidur" },
    { src: "/assets/galeri/2.jpeg", caption: "Orkay tidur" },
    { src: "/assets/galeri/3.jpeg", caption: "Cepak tidur" },
    { src: "/assets/galeri/4.jpeg", caption: "Galfish tidur" },
    { src: "/assets/galeri/5.jpeg", caption: "Kadies tidur" },
    { src: "/assets/galeri/6.jpeg", caption: "Irgay tidur" },
  ];

  const fadeZoom = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  });

  return (
    <section
      id="galeri"
      className="relative py-20 bg-gradient-to-b from-[#FFF3E0] via-[#FFD9A3]/60 to-[#F9B04E]/20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading font-bold text-[#4A1E0E] mb-3"
        >
          Galeri <span className="text-[#E87524]">Suasana</span>
        </motion.h2>
        <p className="text-[#4A1E0E]/80 mb-10 max-w-xl mx-auto">
          Beberapa momen dan sudut favorit pengunjung yang bikin betah berlama-lama di Gelap Nyawang.
        </p>

        {/* GRID FOTO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeZoom(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group h-[260px] md:h-[320px]"
            >
              <img
                src={p.src}
                alt={p.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-white text-lg font-medium">{p.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
