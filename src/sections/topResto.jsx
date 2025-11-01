"use client";
import { motion } from "framer-motion";

export default function TopResto() {
  const restos = [
    {
      slug: "black-romantic",
      name: "Black Romantic",
      desc: "Cafe hangat dengan lampu kuning redup, tempat pas buat ngobrol lama sambil nugas.",
      img: "/assets/resto/resto1.jpg",
    },
    {
      slug: "kedai-bwj",
      name: "Kedai BWJ",
      desc: "Favorit mahasiswa Bandung — nasi goreng kornet dan es teh wajib.",
      img: "/assets/resto/resto2.jpg",
    },
    {
      slug: "bebek-stallone",
      name: "Bebek Stallone",
      desc: "Rempah kuat, sambal brutal, daging lembut — comfort food level tinggi.",
      img: "/assets/resto/resto3.jpg",
    },
    {
      slug: "warung-nyemil",
      name: "Warung Nyemil",
      desc: "Roti bakar lumer + playlist galau — sempurna buat malam dingin.",
      img: "/assets/resto/resto4.jpg",
    },
    {
      slug: "kopi-kenang-diri",
      name: "Kopi Kenang Diri",
      desc: "Kopi strong, suasana tenang — cocok buat refleksi (dan nugas).",
      img: "/assets/resto/resto5.jpg",
    },
    {
      slug: "ayam-geprek-galaxy",
      name: "Ayam Geprek Galaxy",
      desc: "Cepat, murah, pedas bisa request — favorit anak kos sebelum ujian.",
      img: "/assets/resto/resto6.jpg",
    },
  ];

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
      transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  });

  return (
    <section
      id="topResto"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#FFF3E0] via-[#FFD9A3] to-[#F9B04E]/20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* === KIRI: Judul + Foto besar bawahnya === */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Teks bagian atas */}
          <motion.div
            variants={entrance("left", 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <p className="text-[#E87524] font-semibold mb-2">Tempat Andalan</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4A1E0E] leading-tight mb-4">
              Rekomendasi <span className="text-[#E87524]">Mahasiswa</span>
            </h2>
            <p className="text-[#4A1E0E]/80 text-base md:text-lg max-w-md">
              Kumpulan tempat makan legendaris sekitar kampus — dari yang murah
              meriah sampai cozy parah.
            </p>
          </motion.div>

          {/* Foto besar di bawah teks */}
          <motion.div
            variants={entrance("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[465px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${restos[1].img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {restos[1].name}
              </h3>
              <p className="text-sm md:text-base opacity-90 max-w-xl">
                {restos[1].desc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* === KANAN: Foto panjang atas + 4 foto kecil bawah === */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Foto panjang atas */}
          <motion.div
            variants={entrance("right", 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl h-[220px] md:h-[260px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${restos[0].img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-1">
                {restos[0].name}
              </h3>
              <p className="text-sm md:text-base opacity-90 max-w-md">
                {restos[0].desc}
              </p>
            </div>
          </motion.div>

          {/* Grid 4 kecil di bawahnya */}
          <div className="grid grid-cols-2 gap-5">
            {restos.slice(2, 6).map((r, i) => (
              <motion.div
                key={r.slug}
                variants={entrance(i % 2 === 0 ? "left" : "right", i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="relative group rounded-2xl overflow-hidden shadow-xl h-[160px] md:h-[180px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${r.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-base md:text-lg font-semibold mb-1">
                    {r.name}
                  </h4>
                  <p className="text-xs md:text-sm opacity-90 line-clamp-2">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
