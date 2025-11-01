"use client";
import { useEffect, useRef } from "react";

export default function Testimoni() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // inject animasi & efek CSS
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marquee-left {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
      @keyframes slow-move {
        0% { background-position: 0 0; }
        100% { background-position: -1000px 0; }
      }
      .animate-bg { animation: slow-move 80s linear infinite; }
      .animate-marquee-left { animation: marquee-left 35s linear infinite; }
      .animate-marquee-right { animation: marquee-right 40s linear infinite; }
      .glow {
        box-shadow: 0 0 30px rgba(232,117,36,0.35);
        transform: translateY(-4px) scale(1.03);
      }
      .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s ease-out;
      }
      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // efek glowing random biar natural
    const interval = setInterval(() => {
      const cards = document.querySelectorAll(".review-card");
      if (cards.length === 0) return;
      const random = Math.floor(Math.random() * cards.length);
      cards.forEach((c) => c.classList.remove("glow"));
      cards[random].classList.add("glow");
    }, 5000);

    // efek fade-in pas masuk viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const reviewsTop = [
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tempora in corrupti expedita veniam natus libero. Dolore voluptatum adipisci ab, quam sapiente animi quis necessitatibus nemo aspernatur perspiciatis est laudantium?", name: "Ibnas" },
    { text: "Memorable banget, apalagi masa-masa tiap hari ke Tamgan, kalau diusir dari Tamgan geser ke Ganyang", name: "Fira" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tempora in corrupti expedita veniam natus libero. Dolore voluptatum adipisci ab, quam sapiente animi quis necessitatibus nemo aspernatur perspiciatis est laudantium?", name: "Apay" },
  ];

  const reviewsBottom = [
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tempora in corrupti expedita veniam natus libero. Dolore voluptatum adipisci ab, quam sapiente animi quis necessitatibus nemo aspernatur perspiciatis est laudantium?", name: "Raharjo" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tempora in corrupti expedita veniam natus libero. Dolore voluptatum adipisci ab, quam sapiente animi quis necessitatibus nemo aspernatur perspiciatis est laudantium?", name: "Paijo" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tempora in corrupti expedita veniam natus libero. Dolore voluptatum adipisci ab, quam sapiente animi quis necessitatibus nemo aspernatur perspiciatis est laudantium?", name: "Athan" },
  ];

  const Card = ({ text, name }) => (
    <div
      className="review-card fade-in bg-[#FFFDF8] border border-[#F0D8BE] rounded-2xl p-6 py-8 shadow-md 
      w-[90vw] sm:w-[380px] md:w-[460px] min-h-[260px] 
      transform transition-all duration-500 ease-out hover:translate-y-[-6px] hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(232,117,36,0.4)]">
      <div className="text-[#E87524] text-4xl mb-3">❝</div>
      <p className="text-lg leading-relaxed text-[#4A1E0E]">{text}</p>
      <div className="flex items-center gap-3 mt-5">
        <div className="w-10 h-10 rounded-full bg-[#E87524]/15 flex items-center justify-center text-[#E87524] font-bold">
          {name[0]}
        </div>
        <p className="text-sm text-[#7B4F2D]">{name}</p>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="testimoni"
      className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-[#FFF3E0] via-[#FFE0B2] to-[#FFD699]"
    >
      {/* background texture halus */}
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-20 animate-bg"></div>

      {/* heading */}
      <div className="relative text-center mb-12 z-10 fade-in">
        <h4 className="font-delius text-xl md:text-2xl font-bold text-[#E87524] mb-3">
          Apa Kata Mereka?
        </h4>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#4A1E0E]">
          TESTIMONI DARI <span className="text-[#E87524]">MAHASISWA</span>
        </h2>
      </div>

      {/* row atas */}
      <div className="relative overflow-hidden z-10 fade-in">
        <div className="flex animate-marquee-left w-max space-x-6">
          <div className="flex space-x-6">
            {[...reviewsTop, ...reviewsTop].map((r, i) => (
              <Card key={i} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* row bawah */}
      <div className="overflow-hidden mt-10 z-10 fade-in">
        <div className="flex animate-marquee-right w-max space-x-6">
          <div className="flex space-x-6">
            {[...reviewsBottom, ...reviewsBottom].map((r, i) => (
              <Card key={i} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* separator halus */}
      <div className="fade-in w-full h-[2px] bg-gradient-to-r from-transparent via-[#E87524]/40 to-transparent mt-16"></div>

      {/* credit kecil */}
      <div className="absolute bottom-4 right-4 opacity-0 hover:opacity-100 transition-all duration-500 text-sm text-[#4A1E0E]/80">
        Liat apa hayo wkwk
      </div>
    </section>
  );
}
