"use client";
import { useState, useEffect, useRef } from "react";

export default function TopResto() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef([]);

  const restoList = [
    {
      name: "Black Romantic",
      desc: "Dyto Romantis",
      img: "/assets/bg1.jpg",
      tag: "ok zi",
    },
    {
      name: "Kedai BWJ",
      desc: "kata faizi enak",
      img: "/assets/bg2.jpg",
      tag: "mantap zi",
    },
    {
      name: "Bebek Stallone",
      desc: "kata faizi enak(2)",
      img: "/assets/bg4.jpg",
      tag: "atur atur zi",
    },
    {
      name: "tes",
      desc: "ya",
      img: "/assets/bg3.jpg",
      tag: "siap zi",
    },
  ];

  //button
  const lefts = ["0px", "120px", "240px", "360px"];
  const zIndexes = [30, 20, 10, 0];
  const rotates = ["-2deg", "1deg", "-1deg", "2deg"];

  useEffect(() => {
    const total = restoList.length;
    for (let i = 0; i < total; i++) {
      const idx = (currentIndex + i) % total;
      const card = cardsRef.current[idx];
      if (card) {
        card.style.zIndex = zIndexes[i];
        card.style.left = lefts[i];
        card.style.transform = `rotate(${rotates[i]})`;
      }
    }
  }, [currentIndex]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % restoList.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + restoList.length) % restoList.length);

  return (
    <section
      id="topResto"
      className="relative py-24 bg-gradient-to-b from-[#F5A623] to-[#D35400] text-white px-4 overflow-hidden rounded-tl-[32px] rounded-tr-[32px] md:rounded-tl-[100px] md:rounded-tr-[100px]"
    >
      <div className="absolute left-0 top-0 w-[40%] h-full z-0 overflow-hidden pointer-events-none opacity-15">
        <img src="/assets/frame-pattern.svg" className="w-full h-full object-cover" alt="Background Pattern" />
      </div>

      <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left section */}
        <div className="text-left flex flex-col items-start justify-center">
          <img src="/assets/logo.png" alt="Gelap Nyawang Logo" className="w-32 mb-8" />
          <h2 className="font-[Righteous] text-4xl md:text-6xl font-bold text-[#4A1E0E]">Rekomendasi Faizi</h2>
          <p className="text-lg mt-4 text-[#FFF0E0] font-[Inter]">Kata Faizi suruh cobain</p>
        </div>

        {/* Right section */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-[270px] h-[340px] mx-auto md:w-[1200px] md:h-[520px] md:max-w-[1400px]">
            {restoList.map((r, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="menu-card absolute top-0 bg-white rounded-2xl shadow-xl p-5 md:w-[600px] md:min-h-[480px] transition-all duration-300 ease-in-out"
              >
                <div className="flex justify-between items-start">
                  <img
                    src="/assets/wle.jpeg"
                    alt="Icon"
                    className="w-10 md:w-14 max-h-14 object-contain rounded-md"
                  />
                  <span className="bg-[#D35400] text-white px-3 py-1 rounded-full text-xs md:text-xl font-bold">
                    {r.tag}
                  </span>
                </div>
                <h3 className="font-[Righteous] text-base md:text-2xl font-bold mt-3 text-[#4A1E0E]">{r.name}</h3>
                <p className="text-gray-700 mt-1 text-xs md:text-sm font-[Inter]">{r.desc}</p>
                <img
                  src={r.img}
                  alt={r.name}
                  className="absolute left-0 bottom-0 w-[100%] max-h-[260px] md:max-h-[320px] object-cover rounded-bl-2xl"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              id="menu-prev"
              onClick={prev}
              className="w-14 h-14 bg-white text-[#D35400] rounded-full flex items-center justify-center shadow hover:bg-orange-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M22 27L13 18L22 9" stroke="#D35400" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              id="menu-next"
              onClick={next}
              className="w-14 h-14 bg-white text-[#D35400] rounded-full flex items-center justify-center shadow hover:bg-orange-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M14 9L23 18L14 27" stroke="#D35400" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
