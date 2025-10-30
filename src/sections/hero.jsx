"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-32 md:pt-40 pb-24 px-6 md:px-10 text-center relative overflow-hidden bg-gradient-to-b from-[#F5A623] to-[#D35400] flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-6xl mx-auto relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-[Righteous] mb-6">
          Temui Kami Pada Pukul 23.00 di{" "}
          <span className="text-[#4A1E0E]">Gelap Nyawang</span>
        </h1>

        <p className="text-[#FFF0E0] text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Wisata kuliner baru di Bandung, mulai dari jajanan 
        </p>

        <p className="text-[#FFF0E0] text-base md:text-lg mt-4 max-w-2xl mx-auto">
          sederhana sampai kafe ber-wifi!
        </p>



        <div className="mt-10 flex justify-center">
          <a
            href="#topResto"
            className="bg-[#4A1E0E] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#70310F] transition text-base md:text-lg shadow-md"
          >
            Jelajahi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
