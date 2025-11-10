"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Galeri() {
  const photos = [
    { src: "/assets/galeri/1.jpeg", caption: "Jawa Tidur" },
    { src: "/assets/galeri/2.jpeg", caption: "Orkay Tidur" },
    { src: "/assets/galeri/3.jpeg", caption: "Cepak Tidur" },
    { src: "/assets/galeri/4.jpeg", caption: "Galfish Tidur" },
    { src: "/assets/galeri/5.jpeg", caption: "Kadies Tidur" },
    { src: "/assets/galeri/6.jpeg", caption: "Irgay Tidur" },
  ];

  const fadeZoom = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95, y: 24 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: [0.22, 0.8, 0.22, 1] },
    },
  });

  return (
    <section
      id="galeri"
      className="
        relative py-20 overflow-hidden
        bg-gradient-to-b from-bg-gold via-bg-soft to-bg-warm
        dark:from-bg-base dark:via-bg-soft dark:to-bg-warm
        transition-colors duration-500
      "
    >
      {/* Ambient soft blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[10%] w-40 h-40 bg-primary/10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] bottom-[8%] w-48 h-48 bg-accent/10 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading font-bold text-text-primary dark:text-text-secondary mb-3"
        >
          Galeri <span className="text-primary">Suasana</span>
        </motion.h2>
        <p className="text-text-muted dark:text-text-secondary/80 mb-12 max-w-xl mx-auto leading-relaxed">
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
              viewport={{ once: true, amount: 0.25 }}
              className="
                relative overflow-hidden rounded-2xl shadow-card group 
                aspect-[4/3] cursor-pointer bg-bg-base dark:bg-bg-soft
                hover:shadow-glow transition-all duration-500
              "
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

              {/* Overlay caption */}
              <div
                className="
                  absolute inset-0 flex items-end justify-center p-5
                  bg-text-primary/70 dark:bg-black/50 opacity-0
                  group-hover:opacity-100 backdrop-blur-[1px]
                  transition-opacity duration-500
                "
              >
                <motion.p
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white text-lg font-medium tracking-wide"
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
          className="mt-10 text-sm text-text-muted dark:text-text-secondary/70 md:hidden"
        >
          ✦ Tap gambar untuk lihat caption ✦
        </motion.p>
      </div>
    </section>
  );
}
