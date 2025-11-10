"use client";
import { useEffect, useRef } from "react";

export default function Testimoni() {
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("testimoni-style")) {
      const style = document.createElement("style");
      style.id = "testimoni-style";
      style.textContent = `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left { animation: marquee-left 55s linear infinite; }
        .animate-marquee-right { animation: marquee-right 60s linear infinite; }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
        .glow { box-shadow: 0 0 25px rgba(229,118,33,0.35); transform: translateY(-4px) scale(1.03); }
        .fade-in { opacity: 0; transform: translateY(30px); transition: all 1s ease-out; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
      `;
      document.head.appendChild(style);
    }

    const section = sectionRef.current;
    const handleGlow = () => {
      const cards = section?.querySelectorAll(".review-card");
      if (!cards?.length) return;
      const random = Math.floor(Math.random() * cards.length);
      cards.forEach((c) => c.classList.remove("glow"));
      cards[random].classList.add("glow");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(handleGlow, 6000);
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.4 }
    );
    if (section) observer.observe(section);

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    section?.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));

    return () => {
      clearInterval(intervalRef.current);
      observer.disconnect();
      fadeObserver.disconnect();
    };
  }, []);

  const reviewsTop = [
    { text: "Tempat terbaik buat ngobrol santai abis kelas. Makanannya murah tapi enak banget!", name: "Ibnas" },
    { text: "Memorable banget — tiap hari ke Tamgan, kalau rame ya lanjut ke Ganyang. Hehe.", name: "Fira" },
    { text: "Suasananya khas banget, apalagi pas malam. Lampu-lampunya bikin nyaman.", name: "Apay" },
  ];

  const reviewsBottom = [
    { text: "Tempat yang gak pernah gagal buat nongkrong dan curhat random.", name: "Raharjo" },
    { text: "Makanannya enak, pelayannya ramah. Feels like home!", name: "Paijo" },
    { text: "Tempat favorit buat nugas bareng temen. Kopinya mantap!", name: "Athan" },
  ];

  const Card = ({ text, name }) => (
    <div
      className="
        review-card fade-in bg-bg-soft dark:bg-bg-warm
        border border-border-default rounded-2xl p-6 py-8 shadow-card
        max-w-[85vw] sm:max-w-[380px] md:max-w-[460px] min-h-[250px]
        transform transition-all duration-500 ease-out
        hover:-translate-y-1 hover:scale-[1.04] hover:shadow-glow
      "
    >
      <div className="text-primary text-4xl mb-3">❝</div>
      <p className="text-base md:text-lg leading-relaxed text-text-primary dark:text-text-secondary text-center">
        {text}
      </p>
      <div className="flex items-center justify-center gap-3 mt-5">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">
          {name[0]}
        </div>
        <p className="text-sm text-text-muted dark:text-text-secondary/80">{name}</p>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="testimoni"
      className="
        relative w-full py-20 overflow-hidden
        bg-gradient-to-b from-bg-gold via-bg-soft to-bg-warm
        dark:from-bg-base dark:via-bg-soft dark:to-bg-warm
        transition-colors duration-500
      "
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-20 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative text-center mb-12 z-10 fade-in">
        <h4 className="font-delius text-xl md:text-2xl font-bold text-primary mb-3">
          Apa Kata Mereka?
        </h4>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary">
          TESTIMONI DARI{" "}
          <span className="text-primary">MAHASISWA</span>
        </h2>
      </div>

      {/* Top Row */}
      <div className="relative overflow-hidden z-10 fade-in marquee-container">
        <div className="flex animate-marquee-left w-max space-x-6">
          <div className="flex space-x-6">
            {[...reviewsTop, ...reviewsTop].map((r, i) => (
              <Card key={i} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="overflow-hidden mt-10 z-10 fade-in marquee-container">
        <div className="flex animate-marquee-right w-max space-x-6">
          <div className="flex space-x-6">
            {[...reviewsBottom, ...reviewsBottom].map((r, i) => (
              <Card key={i} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="fade-in w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-16"></div>
    </section>
  );
}
