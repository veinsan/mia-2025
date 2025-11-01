"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Galeri() {
  const photos = [
    { src: "/assets/galeri/1.jpeg", caption: "Jawa Tidur" },
    { src: "/assets/galeri/2.jpeg", caption: "Orkay Tidur" },
    { src: "/assets/galeri/3.jpeg", caption: "Cepak Tidur" },
    { src: "/assets/galeri/4.jpeg", caption: "Galfish Tidur" },
    { src: "/assets/galeri/5.jpeg", caption: "Kadies Tidur" },
    { src: "/assets/galeri/6.jpeg", caption: "Irgay Tidur" },
  ];

  // Animasi muncul halus untuk tiap foto
  const fadeZoom = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay, duration: 0.8, ease: [0.22, 0.8, 0.22, 1] },
    },
  });

  return (
    <section
      id="galeri"
      className="relative py-20 bg-gradient-to-b from-[#FFCF80] via-[#FFE5B3] to-[#FFF3E0] overflow-hidden"
    >
      {/* ambient soft blob background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[10%] w-40 h-40 bg-[rgba(232,106,30,0.06)] blur-3xl rounded-full"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] bottom-[8%] w-48 h-48 bg-[rgba(249,176,78,0.05)] blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ false: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading font-bold text-[#4A1E0E] mb-3"
        >
          Galeri <span className="text-[#E87524]">Suasana</span>
        </motion.h2>
        <p className="text-[#4A1E0E]/80 mb-12 max-w-xl mx-auto">
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
              viewport={{ false: false, amount: 0.25 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group h-[260px] md:h-[320px] cursor-pointer"
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/assets/blur-placeholder.jpg"
              />

              {/* Overlay muncul halus */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-5 backdrop-blur-[1px]">
                <motion.p
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white text-lg font-medium"
                >
                  {p.caption}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* mobile hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 text-sm text-[#4A1E0E]/70 md:hidden"
        >
          ✦ Tap gambar untuk lihat caption ✦
        </motion.p>
      </div>
    </section>
  );
}
