"use client";
import { motion } from "framer-motion";

export default function TopResto() {
  const restos = [
    {
      slug: "black-romantic",
      name: "Black Romantic",
      desc: "ini kata faizi enak juga",
      img: "/assets/resto/resto1.webp",
    },
    {
      slug: "kedai-bwj",
      name: "Kedai BWJ",
      desc: "ini kata faizi enak",
      img: "/assets/resto/resto2.webp",
    },
    {
      slug: "bebek-stallone",
      name: "Bebek Stallone",
      desc: "ini kata faizi enak juga kali",
      img: "/assets/resto/resto3.jpg",
    },
    {
      slug: "ayam-cola",
      name: "Ayam Cola Kabita HC",
      desc: "ini kata faizi enak juga kali mungkin",
      img: "/assets/resto/resto4.webp",
    },
    {
      slug: "ayam-bebek-besthal",
      name: "Ayam & Bebek Besthal",
      desc: "ini kata faizi enak juga kali mungkin asumsi",
      img: "/assets/resto/resto5.webp",
    },
    {
      slug: "rumah-makan",
      name: "Rumah Makan Pak Datuak",
      desc: "ini kata faizi enak juga kali mungkin asumsi harusnya",
      img: "/assets/resto/resto6.webp",
    },
  ];

  // Motion variants
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
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#FFF3E0] via-[#FFD9A3] to-[#F9B04E]/20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* === KIRI: Judul + Foto besar bawah === */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Teks bagian atas */}
          <motion.div
            variants={entrance("left", 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="drop-shadow-sm"
          >
            <p className="text-[#E87524] font-semibold mb-2">Tempat Andalan</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4 text-[#4A1E0E]">
              Rekomendasi{" "}
              <span className="bg-gradient-to-r from-[#E87524] to-[#B94519] bg-clip-text text-transparent">
                Paijo
              </span>
            </h2>
            <p className="text-[#4A1E0E]/80 text-base md:text-lg max-w-md">
              Kumpulan tempat makan yang sering paijo datengin di ganyang, intinya yang enak kita masukin ygy
            </p>
          </motion.div>

          {/* Foto besar di bawah teks */}
          <motion.div
            variants={entrance("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[465px] hover:shadow-[0_0_25px_rgba(232,117,36,0.3)] transition-shadow duration-500"
          >
            <motion.img
              src={restos[1].img}
              alt={restos[1].name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">{restos[1].name}</h3>
              <p className="text-sm md:text-base opacity-90 max-w-xl">{restos[1].desc}</p>
            </div>
          </motion.div>
        </div>

        {/* === KANAN: Foto panjang atas + 4 kecil di bawah === */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Foto panjang atas */}
          <motion.div
            variants={entrance("right", 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl h-[220px] md:h-[260px] hover:shadow-[0_0_25px_rgba(232,117,36,0.3)] transition-shadow duration-500"
          >
            <motion.img
              src={restos[0].img}
              alt={restos[0].name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-1">{restos[0].name}</h3>
              <p className="text-sm md:text-base opacity-90 max-w-md">{restos[0].desc}</p>
            </div>
          </motion.div>

          {/* Grid 4 kecil bawah */}
          <div className="grid grid-cols-2 gap-6 snap-y snap-mandatory md:snap-none">
            {restos.slice(2, 6).map((r, i) => (
              <motion.div
                key={r.slug}
                variants={entrance(i % 2 === 0 ? "left" : "right", i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="relative group rounded-2xl overflow-hidden shadow-xl h-[160px] md:h-[180px] hover:shadow-[0_0_20px_rgba(232,117,36,0.25)] transition-shadow duration-500 snap-start"
              >
                <motion.img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-md">
                  <h4 className="text-base md:text-lg font-semibold mb-1">{r.name}</h4>
                  <p className="text-xs md:text-sm opacity-90 line-clamp-2">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* subtle gradient bottom biar transisi halus */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#FFF3E0] via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
