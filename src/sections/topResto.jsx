"use client";
import { motion } from "framer-motion";

export default function TopResto() {
  const restos = [
    {
      name: "Black Romantic",
      desc: "Cafe hangat dengan lampu kuning redup, tempat paling pas buat ngobrol lama sambil nugas.",
      img: "/assets/resto/resto1.jpg",
    },
    {
      name: "Kedai BWJ",
      desc: "Favorit mahasiswa Bandung, nasi goreng kornet dan es tehnya udah jadi menu wajib.",
      img: "/assets/resto/resto2.jpg",
    },
    {
      name: "Bebek Stallone",
      desc: "Bumbu rempahnya kuat, sambelnya brutal, bebeknya lembut. The real comfort food.",
      img: "/assets/resto/resto3.jpg",
    },
    {
      name: "Warung Nyemil",
      desc: "Roti bakar lumer dan playlist galau, trio sempurna buat malam dingin.",
      img: "/assets/resto/resto4.jpg",
    },
    {
      name: "Kopi Kenang Diri",
      desc: "Kopi strong, suasana tenang. Cocok buat refleksi hidup (dan nugas).",
      img: "/assets/resto/resto5.jpg",
    },
    {
      name: "Ayam Geprek Galaxy",
      desc: "Cepat, murah, dan pedasnya bisa request. Favorit anak kos sebelum ujian.",
      img: "/assets/resto/resto6.jpg",
    },
  ];

  // Animation like AOS direction-based
  const anim = (dir = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      x: dir === "left" ? 100 : dir === "right" ? -100 : 0,
      y: dir === "up" ? 100 : dir === "down" ? -100 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay,
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  });

  return (
    <section
      id="topResto"
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#FFF3E0] via-[#FFD9A3] to-[#F9B04E]/40 text-dark overflow-hidden"
    >
      <div className="max-w-[95rem] mx-auto px-6 md:px-12 grid grid-cols-4 grid-rows-6 gap-6 auto-rows-[minmax(150px,auto)]">
        {/* TITLE */}
        <motion.div
          variants={anim("left", 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-2 row-span-2 flex flex-col justify-center"
        >
          <h4 className="text-[#E86A1E] font-semibold mb-3 text-lg">
            Tempat Andalan
          </h4>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#4A1E0E] mb-4 leading-tight">
            Rekomendasi <span className="text-[#E86A1E]">Mahasiswa</span>
          </h2>
          <p className="text-lg text-[#4A1E0E]/70 font-light max-w-xl">
            Kumpulan tempat makan legendaris sekitar kampus — dari yang murah
            meriah sampai cozy parah.
          </p>
        </motion.div>

        {/* RESTO CARDS */}
        {restos.map((r, i) => {
          const dir =
            i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"; // arah animasi per kolom
          const delay = 0.15 + i * 0.1;

          return (
            <motion.div
              key={i}
              variants={anim(dir, delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-[28px] overflow-hidden shadow-xl group transition-all duration-700 bg-[#FFF9F3] ${
                i === 0
                  ? "col-span-2 row-span-2 col-start-3 row-start-1"
                  : i === 1
                  ? "col-span-2 row-span-2 col-start-1 row-start-3"
                  : i === 2
                  ? "col-span-2 row-span-2 col-start-3 row-start-3"
                  : i === 3
                  ? "col-span-2 row-span-2 col-start-1 row-start-5"
                  : i === 4
                  ? "col-span-2 row-span-2 col-start-3 row-start-5"
                  : "col-span-4 row-span-1 row-start-7"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${r.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000AA] via-[#00000050] to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 drop-shadow-md">
                  {r.name}
                </h3>
                <p className="text-sm text-gray-200 leading-snug mb-3 max-w-sm">
                  {r.desc}
                </p>
                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#E86A1E",
                    color: "#FFF3E0",
                  }}
                  className="inline-flex items-center gap-2 border border-[#FFF3E0]/70 text-sm px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md transition-all"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
