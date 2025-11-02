"use client";
import { motion } from "framer-motion";

export default function BannerDirektori() {
  return (
    <section
      id="kontak"
      className="relative bg-[#FFEED1] text-[#2B1B0F] rounded-2xl mx-6 md:mx-10 lg:mx-20 my-20 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      {/* Foto kiri */}
      <img
        src="/assets/banner/left.png"
        alt="Suasana Gelap Nyawang kiri"
        className="absolute -left-16 bottom-0 w-[360px] md:w-[440px] lg:w-[520px] object-contain opacity-35 pointer-events-none select-none"
      />

      {/* Foto kanan */}
      <img
        src="/assets/banner/right.png"
        alt="Suasana Gelap Nyawang kanan"
        className="absolute -right-16 bottom-0 w-[360px] md:w-[440px] lg:w-[520px] object-contain opacity-35 pointer-events-none select-none"
      />

      {/* Konten utama */}
      <div className="relative z-10 py-20 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
        >
          Nikmati <span className="text-[#E87524]">Cita Rasa Lokal</span> di Gelap Nyawang
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-[#3C1E08]/90"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quisquam eum aliquid veritatis iste excepturi soluta perferendis voluptatibus! Architecto maxime quas exercitationem ipsum, quo porro mollitia vel et explicabo praesentium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://wa.me/6289656054453"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#E87524] text-white font-semibold px-8 py-3 rounded-full text-base md:text-lg shadow-[0_6px_18px_rgba(232,117,36,0.25)] hover:bg-[#F9A24B] transition-all"
          >
            Hubungi Kami
          </motion.a>
        </motion.div>
      </div>

      {/* Transisi halus ke footer */}
      <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-b from-transparent via-[#F7C27D]/40 to-[#E87524]/70 pointer-events-none"></div>
    </section>
  );
}
