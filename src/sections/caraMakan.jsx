"use client";

import { motion } from "framer-motion";

export default function CaraMakan() {
  return (
    <section
      id="caraMakan"
      className="w-full bg-bg-base dark:bg-bg-base text-text-primary dark:text-text-secondary transition-colors duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[90vh]">
        
        {/* ===========================
            LEFT TEXT + QUOTE
        ============================ */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 z-10">
          <div className="text-primary text-6xl sm:text-8xl md:text-9xl mb-10 md:mb-20">
            ❝
          </div>

          <p className="
            text-2xl sm:text-3xl md:text-4xl 
            leading-relaxed 
            max-w-full sm:max-w-xl md:max-w-2xl
            font-semibold
            text-text-primary dark:text-text-secondary
          ">
            Makan di Gelap Nyawang itu bukan cuma soal rasa.  
            Ini soal suasana malam, obrolan, dan cerita yang selalu berulang.
          </p>

            <img
            src="/assets/logo/black.png"
            alt="Gelap Nyawang Logo"
            className="w-20 sm:w-24 md:w-28 mt-12 md:mt-20 opacity-90 block dark:hidden"
            />

            <img
            src="/assets/logo/logo.png"
            alt="Gelap Nyawang Logo Dark"
            className="w-20 sm:w-24 md:w-28 mt-12 md:mt-20 opacity-90 hidden dark:block"
            />

        </div>

        {/* ===========================
            RIGHT SIDE (BG IMAGE + STEPS)
        ============================ */}
        <div className="relative w-full h-[600px] md:h-full">
          
          {/* Background Image */}
          <img
            src="/assets/about/t1.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="
            relative z-10 h-full w-full 
            flex flex-col items-center justify-center 
            px-4 sm:px-6 md:px-12 py-10 
            bg-black/40 backdrop-blur-sm 
            text-white
          ">

            {/* Title */}
            <div className="w-full max-w-2xl mb-8 text-left">
              <h2 className="
                text-3xl sm:text-5xl md:text-7xl 
                font-extrabold 
                mb-2
              ">
                Cara Makan
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-white/90">
                Biar gak bingung, ikutin alurnya ya.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 w-full max-w-2xl">

              {/* STEP 1 */}
              <div className="relative">
                <div className="
                  absolute -left-5 sm:-left-6 
                  top-1/2 -translate-y-1/2 z-10
                ">
                  <div className="
                    bg-primary text-white font-bold 
                    w-10 h-10 sm:w-12 sm:h-12 
                    rounded-full flex items-center justify-center 
                    text-sm sm:text-base md:text-xl shadow-lg
                  ">
                    1
                  </div>
                </div>

                <div className="
                  bg-white text-black 
                  pl-12 sm:pl-14 pr-6 
                  py-4 sm:py-5 md:py-6 
                  rounded-full shadow-xl w-full 
                  text-sm sm:text-base md:text-lg 
                  flex items-center
                ">
                  <span className="font-bold text-primary mr-4 sm:mr-6 whitespace-nowrap">
                    Jelajahi Rekomendasi
                  </span>
                  Liat tempat makan favorit malam ini.
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative">
                <div className="
                  absolute -left-5 sm:-left-6 
                  top-1/2 -translate-y-1/2 z-10
                ">
                  <div className="
                    bg-primary text-white font-bold 
                    w-10 h-10 sm:w-12 sm:h-12 
                    rounded-full flex items-center justify-center 
                    text-sm sm:text-base md:text-xl shadow-lg
                  ">
                    2
                  </div>
                </div>

                <div className="
                  bg-white text-black 
                  pl-12 sm:pl-14 pr-6 
                  py-4 sm:py-5 md:py-6 
                  rounded-full shadow-xl w-full 
                  text-sm sm:text-base md:text-lg 
                  flex items-center
                ">
                  <span className="font-bold text-primary mr-4 sm:mr-6 whitespace-nowrap">
                    Lihat Detail UMKM
                  </span>
                  Menu, harga, jam buka, vibes.
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative">
                <div className="
                  absolute -left-5 sm:-left-6 
                  top-1/2 -translate-y-1/2 z-10
                ">
                  <div className="
                    bg-primary text-white font-bold 
                    w-10 h-10 sm:w-12 sm:h-12 
                    rounded-full flex items-center justify-center 
                    text-sm sm:text-base md:text-xl shadow-lg
                  ">
                    3
                  </div>
                </div>

                <div className="
                  bg-white text-black 
                  pl-12 sm:pl-14 pr-6 
                  py-4 sm:py-5 md:py-6 
                  rounded-full shadow-xl w-full 
                  text-sm sm:text-base md:text-lg 
                  flex items-center
                ">
                  <span className="font-bold text-primary mr-4 sm:mr-6 whitespace-nowrap">
                    Datang ke Lokasi
                  </span>
                  Klik navigate, Maps langsung kebuka.
                </div>
              </div>

              {/* STEP 4 */}
              <div className="relative">
                <div className="
                  absolute -left-5 sm:-left-6 
                  top-1/2 -translate-y-1/2 z-10
                ">
                  <div className="
                    bg-primary text-white font-bold 
                    w-10 h-10 sm:w-12 sm:h-12 
                    rounded-full flex items-center justify-center 
                    text-sm sm:text-base md:text-xl shadow-lg
                  ">
                    4
                  </div>
                </div>

                <div className="
                  bg-white text-black 
                  pl-12 sm:pl-14 pr-6 
                  py-4 sm:py-5 md:py-6 
                  rounded-full shadow-xl w-full 
                  text-sm sm:text-base md:text-lg 
                  flex items-center
                ">
                  <span className="font-bold text-primary mr-4 sm:mr-6 whitespace-nowrap">
                    Nikmati Kulineran Malam
                  </span>
                  Rasain vibes Gelap Nyawang yang hidup.
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
