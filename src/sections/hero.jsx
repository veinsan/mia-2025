"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center overflow-hidden min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10"
    >
      {/* Background gradient dengan animasi halus */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#FFA94D] via-[#E87524] to-[#D35400]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating “uap makanan” blob */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-60 h-60 bg-[#FFF5E0]/20 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFD29D]/15 rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Konten utama */}
      <div className="max-w-5xl mx-auto relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl leading-tight font-[Righteous] mb-6"
        >
          Ganyang Lapar di{" "}
          <motion.span
            className="text-[#4A1E0E] inline-block"
            animate={{
              textShadow: [
                "0px 0px 0px #4A1E0E",
                "0px 0px 20px #4A1E0EAA",
                "0px 0px 0px #4A1E0E",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Gelap Nyawang
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[#FFF0E0] text-base md:text-lg mt-4 max-w-2xl mx-auto"
        >
          Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#topResto"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 20px rgba(74, 30, 14, 0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#4A1E0E] text-white font-semibold px-10 py-4 rounded-full transition text-base md:text-lg shadow-md"
          >
            Jelajahi Sekarang
          </motion.a>
        </motion.div>
      </div>

      {/* Lapisan gradient lembut di bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#4A1E0E]/20 to-transparent pointer-events-none" />
    </section>
  );
}
