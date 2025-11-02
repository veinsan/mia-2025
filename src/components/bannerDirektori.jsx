"use client";
import { motion } from "framer-motion";

export default function BannerDirektori() {
  return (
    <section
      id="kontak"
      className="relative bg-gradient-to-r from-[#F7B04E] via-[#E87524] to-[#D45B09] text-white rounded-2xl mx-6 md:mx-10 lg:mx-20 my-20 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
    >
      {/* Ilustrasi kiri */}
      <img
        src="/assets/banner/left.png"
        alt="Ilustrasi kiri"
        className="absolute -left-16 bottom-0 w-[380px] md:w-[460px] lg:w-[520px] object-contain z-0 opacity-90 pointer-events-none"
      />

      {/* Ilustrasi kanan */}
      <img
        src="/assets/banner/right.png"
        alt="Ilustrasi kanan"
        className="absolute -right-16 bottom-0 w-[380px] md:w-[460px] lg:w-[520px] object-contain z-0 opacity-90 pointer-events-none"
      />

      {/* Konten tengah */}
      <div className="relative z-10 py-20 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 drop-shadow-md"
        >
          Mager Bukan Alasan, <br className="hidden md:block" />
          <span className="text-[#FFF3E0]">Makan Tetap Jalan</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 text-[#FFF9F0]/90 leading-relaxed"
        >
          Lagi rebahan atau sibuk nugas? Tenang, kamu tetap bisa makan enak tanpa harus keluar kosan.
          Pilih menu favoritmu, pesan, dan kami yang antar langsung ke pintu.
        </motion.p>

        <div className="flex justify-center flex-wrap gap-4">
          <motion.a
            href="https://wa.me/6282117918498"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white text-[#E87524] font-semibold px-8 py-3 rounded-full text-base md:text-lg shadow-md hover:bg-[#FFF9F0] transition-all"
          >
            Order Sekarang
          </motion.a>

          <motion.a
            href="https://drive.google.com/drive/folders/1xVMhgAdlWnsdOLiTX5J3_2M4aM0EYCDT?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="border border-white text-white font-semibold px-8 py-3 rounded-full text-base md:text-lg hover:bg-white hover:text-[#E87524] transition-all"
          >
            Lihat Menu
          </motion.a>
        </div>
      </div>
    </section>
  );
}
