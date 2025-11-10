"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { UMKM_DATA } from "@/data/umkmData";

export default function TopResto() {
  // Ambil 6 data pertama dari UMKM_DATA
  const restos = UMKM_DATA.slice(0, 6);

  const entrance = (dir = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      y: dir === "up" ? 60 : 0,
      x: dir === "left" ? 60 : dir === "right" ? -60 : 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  });

  return (
    <section
      id="topResto"
      className="
        relative overflow-hidden py-24 md:py-32
        bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold
        dark:from-bg-base dark:via-bg-soft dark:to-bg-warm
        transition-colors duration-500
      "
      aria-labelledby="topResto-title"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
        {/* === KIRI: Title & Big Feature === */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <motion.div
            variants={entrance("left", 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-primary font-semibold mb-2">Tempat Andalan</p>
            <h2
              id="topResto-title"
              className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4 text-text-primary dark:text-text-secondary"
            >
              Rekomendasi{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kuliner Pilihan
              </span>
            </h2>
            <p className="text-text-muted dark:text-text-secondary/80 text-base md:text-lg max-w-md leading-relaxed">
              Daftar kuliner favorit mahasiswa ITB dan warga Bandung yang wajib
              lu cobain saat mampir ke Gelap Nyawang.
            </p>
          </motion.div>

          {/* Big Feature Card */}
          <Link href={`/direktori/${restos[1]?.slug || "#"}`} passHref>
            <motion.div
              variants={entrance("up", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                relative group rounded-3xl overflow-hidden shadow-card
                h-[380px] md:h-[460px] cursor-pointer
                hover:shadow-glow transition-shadow duration-500
              "
            >
              <motion.img
                src={restos[1]?.gambar?.[0] || "/assets/placeholder.jpg"}
                alt={restos[1]?.nama || "UMKM"}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-md">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  {restos[1]?.nama}
                </h3>
                <p className="text-sm md:text-base opacity-90 max-w-xl line-clamp-2">
                  {restos[1]?.deskripsi}
                </p>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* === KANAN: Secondary & Grid === */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Foto panjang atas */}
          <Link href={`/direktori/${restos[0]?.slug || "#"}`} passHref>
            <motion.div
              variants={entrance("right", 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                relative group rounded-3xl overflow-hidden shadow-card
                h-[220px] md:h-[260px] cursor-pointer
                hover:shadow-glow transition-shadow duration-500
              "
            >
              <motion.img
                src={restos[0]?.gambar?.[0] || "/assets/placeholder.jpg"}
                alt={restos[0]?.nama || "UMKM"}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-md">
                <h3 className="text-xl md:text-2xl font-semibold mb-1">
                  {restos[0]?.nama}
                </h3>
                <p className="text-sm md:text-base opacity-90 max-w-md line-clamp-2">
                  {restos[0]?.deskripsi}
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Grid kecil */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {restos.slice(2, 6).map((r, i) => (
              <Link key={r.slug} href={`/direktori/${r.slug}`} passHref>
                <motion.div
                  variants={entrance(i % 2 === 0 ? "left" : "right", i * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="
                    relative group rounded-2xl overflow-hidden shadow-card
                    h-[160px] sm:h-[180px] cursor-pointer
                    hover:shadow-glow transition-shadow duration-500
                  "
                >
                  <motion.img
                    src={r.gambar?.[0] || "/assets/placeholder.jpg"}
                    alt={r.nama}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-md">
                    <h4 className="text-base md:text-lg font-semibold mb-1">
                      {r.nama}
                    </h4>
                    <p className="text-xs md:text-sm opacity-90 line-clamp-2">
                      {r.deskripsi}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient transition biar nyambung ke section berikut */}
      <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-t from-bg-gold/40 via-transparent to-transparent pointer-events-none dark:from-bg-warm/40" />
    </section>
  );
}
