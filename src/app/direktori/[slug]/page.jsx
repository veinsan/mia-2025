// UPDATED FILE WITH SCROLL COMPONENTS + CATEGORY SECTIONS

"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";
import Link from "next/link";
import { UMKM_DATA, CATEGORIES } from "@/data/umkmData";

/* =============================
   MOTION VARIANTS
============================= */
const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const heroItem = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const categoriesContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const gridContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

/* =============================
   CARD COMPONENT
============================= */
function UMKMCard({ item }) {
  return (
    <Link href={`/direktori/${item.slug || ""}`} className="block">
      <motion.article
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="group relative rounded-[14px] overflow-hidden bg-[var(--bg-base)] shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(238,118,13,0.12)] transition-all duration-300 will-change-transform"
        whileHover={{ y: -6 }}
      >
        <div className="w-full h-44 md:h-48 lg:h-40 bg-[var(--bg-soft)] overflow-hidden">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" draggable="false" />
        </div>

        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold text-[var(--text-secondary)] line-clamp-1 group-hover:text-primary">{item.name}</h3>
          <p className="text-sm text-[var(--text-muted)] mt-1 line-clamp-2">{item.short}</p>
        </div>
      </motion.article>
    </Link>
  );
}

/* =============================
   HORIZONTAL SCROLL WRAPPER
============================= */
function ScrollRow({ children, scrollRef }) {
  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        onScroll={(e) => {
          const el = e.target;
          const maxScroll = el.scrollWidth - el.clientWidth;

          // biar reactive juga tanpa delay
          if (scrollRef._update) scrollRef._update(el.scrollLeft, maxScroll);
        }}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
      >
        {children}
      </div>
    </div>
  );
}

/* =============================
   NEXT / PREV BUTTONS
============================= */
function ScrollButtons({ scrollRef, itemCount }) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Jika item < 5, tidak perlu tombol sama sekali
  if (itemCount <= 4) return null;

  useEffect(() => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;
    const max = el.scrollWidth - el.clientWidth;

    // fungsi update posisi
    const update = () => {
      setAtStart(el.scrollLeft <= 5);
      setAtEnd(el.scrollLeft >= max - 5);
    };

    // simpan ke ref
    scrollRef.current._update = update;

    // listener scroll
    el.addEventListener("scroll", update);
    update();

    return () => el.removeEventListener("scroll", update);
  }, [scrollRef]);
  
  const scroll = (dir) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "right" ? 340 : -340,
      behavior: "smooth",
    });

    setTimeout(() => {
      scrollRef.current?._update?.();
    }, 280);
  };

  return (
    <>
      {!atStart && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-white dark:bg-[var(--bg-soft)]
          shadow-[0_6px_20px_rgba(0,0,0,0.12)]
          hover:shadow-[0_10px_28px_rgba(228,93,24,0.25)]
          transition-all items-center justify-center
          text-[#C13F14] dark:text-[#EC760D]"
        >
          <span className="text-xl">❮</span>
        </button>
      )}

      {!atEnd && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-white dark:bg-[var(--bg-soft)]
          shadow-[0_6px_20px_rgba(0,0,0,0.12)]
          hover:shadow-[0_10px_28px_rgba(228,93,24,0.25)]
          transition-all items-center justify-center
          text-[#C13F14] dark:text-[#EC760D]"
        >
          <span className="text-xl">❯</span>
        </button>
      )}
    </>
  );
}
function SmallCard({ item }) {
  return (
    <Link href={`/direktori/${item.slug}`} className="block">
      <motion.div
        whileHover={{ y: -6 }}
        className="relative h-[170px] rounded-xl overflow-hidden shadow-md transition-all"
      >
        <img
          src={item.img}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-3 left-3">
          <p className="text-white font-semibold text-lg drop-shadow">
            {item.name}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

/* ==========================================================
   CATEGORY SECTIONS
========================================================== */
function CategorySection({ title, subtitle, items }) {
  const scrollRef = useRef(null);

  return (
    <section className="px-[5%] md:px-[7%] lg:px-[9%] mt-14">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-secondary)]">
            {title}
          </h2>
          <p className="text-[var(--text-muted)] text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="relative mt-4">
        <ScrollRow scrollRef={scrollRef}>
          {items.map((item) => (
            <div key={item.id} className="min-w-[270px]">
              <SmallCard item={item} />
            </div>
          ))}
        </ScrollRow>

        <ScrollButtons scrollRef={scrollRef} itemCount={items.length} />
      </div>
    </section>
  );
}

/* =============================
   PAGE COMPONENT
============================= */
export default function DirektoriPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return UMKM_DATA.filter((u) => {
      const matchesCat = activeCat === "all" ? true : u.category === activeCat;
      const matchesQuery = !q ? true : u.name.toLowerCase().includes(q) || u.short.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat]);

  const trending = UMKM_DATA.slice(0, 4);
  const mainGrid = filtered.slice(0, visibleCount);

  return (
    <main className="bg-transparent transition-theme">
      <NavDirektori />

      <div className="w-full bg-[var(--bg-gold)] min-h-screen pb-16">
        {/* HERO SECTION (unchanged) */}
        <motion.section id="top-direktori" initial="hidden" animate="visible" variants={heroContainer} className="w-full pt-0 pb-0">
          <motion.div variants={heroItem} className="w-full mx-auto min-h-[420px] rounded-b-[40px] px-6 pt-24 pb-16 flex flex-col items-center justify-start overflow-hidden transition-theme bg-gradient-to-b from-[#FCBB65] to-[#E45D18] dark:from-[var(--bg-warm)] dark:to-[var(--bg-base)]">
            <div className="max-w-3xl text-center mt-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#2B1B0F] dark:text-[#FFF8F0] leading-snug tracking-tight">
                Cari Tempat Makan Favoritmu
                <br /> di <span className="text-[#C13F14]">Gelap Nyawang</span>
              </h1>
              <p className="mt-3 text-base md:text-lg text-[#2B1B0F]/80 dark:text-[#FFE5CC]/90">Mulai dari ayam bakar, warmindo, sampai kopi buat nugas. Semua ada di satu tempat.</p>
            </div>

            <div className="w-full max-w-3xl mt-8 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C13F14] dark:text-[#EC760D]" size={24} />
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Cari resto… misal: “Black Romantic”, “BWJ”…' className="w-full py-4 pl-14 pr-6 rounded-full bg-white/85 dark:bg-[var(--bg-soft)] border border-white/60 dark:border-[var(--border-default)] text-[#2B1B0F] dark:text-[#FFF8F0] shadow-[0_4px_18px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.35)] focus:shadow-[0_6px_26px_rgba(226,115,10,0.25)] outline-none transition-all backdrop-blur-sm" />
            </div>

            <motion.div variants={categoriesContainer} className="mt-10 flex flex-wrap md:flex-nowrap justify-center gap-4 w-full max-w-4xl">
              {CATEGORIES.map((cat) => {
                const active = cat.id === activeCat;
                return (
                  <button key={cat.id} onClick={() => setActiveCat(cat.id)} className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl min-w-[95px] bg-white/75 dark:bg-[var(--bg-soft)] border dark:border-[var(--border-default)] transition-all ${active ? "border-[#EB7610] text-[#EB7610] dark:border-[#EC760D] dark:text-[#EC760D]" : "text-[#2B1B0F] dark:text-[#FFF8F0]"}`}>
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="text-sm font-medium">{cat.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ==========================================================
            NEW CATEGORY BLOCKS
        ========================================================== */}

        <CategorySection title="Resto Pilihan" subtitle="Makan enak tanpa ribet. Dari ayam bakar sampai warmindo favorit mahasiswa." items={UMKM_DATA.filter((item) => item.category === "resto").slice(0, 8)} />

        <CategorySection title="Kafe Nyaman" subtitle="Tempat ideal buat nugas, nongkrong, atau sekadar cari suasana tenang." items={UMKM_DATA.filter((item) => item.category === "cafe").slice(0, 8)} />

        <CategorySection title="Cemilan Enak" subtitle="Pilihan ringan buat ganjel lapar sambil nunggu kelas berikutnya." items={UMKM_DATA.filter((item) => item.category === "cemilan").slice(0, 8)} />

        <CategorySection title="Minuman Segar" subtitle="Thai tea, kopi, mocktail—temeni hari panjang di kampus." items={UMKM_DATA.filter((item) => item.category === "minuman").slice(0, 8)} />

        <CategorySection title="Layanan Lain" subtitle="Pilihan tempat yang mendukung kebutuhan mahasiswa di sekitar kampus." items={UMKM_DATA.filter((item) => item.category === "lain").slice(0, 8)} />


        {/* ==========================================================
            TRENDING SECTION (kept as reference or optional)
        ========================================================== */}
        <motion.section initial="visible" variants={heroContainer} className="px-[5%] md:px-[7%] lg:px-[9%] mt-10">
          <motion.div variants={heroItem} className="bg-[var(--bg-base)] rounded-2xl p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6">Trending di Gelap Nyawang</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trending.map((t) => (
                <UMKMCard key={t.id} item={t} />
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>

      <FooterDirektori />
    </main>
  );
}
