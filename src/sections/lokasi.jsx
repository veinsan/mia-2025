"use client";
import { useEffect } from "react";

export default function Lokasi() {
  useEffect(() => {
    const section = document.querySelector("#lokasi-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(
            "opacity-100",
            "translate-y-0",
            "transition-all",
            "duration-[1200ms]",
            "ease-out"
          );
          section.classList.remove("opacity-0", "translate-y-10");
        } else {
          // Saat discroll ke atas (section keluar dari viewport)
          section.classList.add("opacity-0", "translate-y-10");
          section.classList.remove("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 } // aktif kalau 20% section kelihatan
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="lokasi-section"
      className="opacity-0 translate-y-10 py-20 bg-gradient-to-b from-[#FFF3E0] to-white text-center px-8"
    >
      <h2 className="text-4xl font-heading text-primary mb-6">
        Kunjungi Lokasi Kami
      </h2>
      <p className="text-neutral mb-10 text-lg max-w-2xl mx-auto opacity-80">
        Langsung datang dan nikmati suasana kuliner khas Gelap Nyawang — tempat
        nongkrong favorit mahasiswa ITB.
      </p>

      <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-shadow duration-500 max-w-6xl mx-auto">
        <iframe
          src="https://www.google.com/maps?q=Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <a
        href="https://maps.app.goo.gl/kAUnsipvPasm7YzT9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 text-primary font-semibold hover:text-secondary transition-colors"
      >
        📍 Buka di Google Maps
      </a>
    </section>
  );
}
