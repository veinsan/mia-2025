"use client";

import { useState, useMemo } from "react";
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
        className="
          group relative rounded-[14px] overflow-hidden 
          bg-[var(--bg-base)]
          shadow-[0_6px_20px_rgba(0,0,0,0.06)]
          hover:shadow-[0_14px_40px_rgba(238,118,13,0.12)]
          transition-all duration-300
          will-change-transform
        "
        whileHover={{ y: -6 }}
      >
        <div className="w-full h-44 md:h-48 lg:h-40 bg-[var(--bg-soft)] overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable="false"
          />
        </div>

        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold text-[var(--text-secondary)] line-clamp-1 group-hover:text-primary">
            {item.name}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mt-1 line-clamp-2">{item.short}</p>
        </div>
      </motion.article>
    </Link>
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

      {/* ==========================================================
           WRAPPER
      ========================================================== */}
      <div className="w-full bg-[var(--bg-gold)] min-h-screen pb-16">

        {/* ==========================================================
            HERO SECTION
        ========================================================== */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="w-full bg-transparent pt-0 pb-0"
        >
          <motion.div
            variants={heroItem}
            className="
              w-full mx-auto
              bg-[linear-gradient(180deg,var(--bg-base),#EE760D)]
              min-h-[320px]
              rounded-b-[50px]
              shadow-[inset_0_-25px_40px_rgba(0,0,0,0.06)]
              px-6 py-12
              flex flex-col items-center 
              justify-start
              overflow-hidden
            "
          >
            {/* TITLE */}
            <div className="max-w-3xl text-center mt-10">
              <h1 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight">
                Temukan Makanan Sehabis Kuliah Favoritmu di
                <span className="text-primary"> Gelap Nyawang</span>
              </h1>

              <p className="mt-3 text-base text-[var(--text-secondary)]/90">
                Mau cari tempat makan enak? Jelajahi daftar UMKM pilihan di Gelap Nyawang dan temukan menu favoritmu dengan cepat.
              </p>
            </div>

            {/* SEARCH */}
            <div className="w-full max-w-3xl mt-10 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={24} />

              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Cari Resto, contoh: "Black Romantic", "Kedai BWJ"...'
                className="
                  w-full py-4 pl-14 pr-4
                  rounded-full
                  bg-[var(--bg-base)]
                  border border-[var(--border-default)]
                  text-[var(--text-primary)]
                  shadow-[0_5px_15px_rgba(0,0,0,0.07)]
                  focus:shadow-[0_6px_22px_rgba(238,118,13,0.25)]
                  transition-all outline-none
                "
              />
            </div>

            {/* CATEGORY FILTER */}
            <motion.div variants={categoriesContainer} className="mt-12 flex flex-wrap justify-center gap-6">
              {CATEGORIES.map((cat) => {
                const active = cat.id === activeCat;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCat(cat.id)}
                    onMouseMove={(e) => {
                      const el = e.currentTarget;
                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left - rect.width / 2;
                      const y = e.clientY - rect.top - rect.height / 2;
                      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) scale(1.08)`;
                      el.style.boxShadow = `0 25px 45px rgba(238,118,13,0.45)`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translate(0px, 0px) scale(1)";
                      el.style.boxShadow = "0 6px 12px rgba(0,0,0,0.10)";
                    }}
                    className={`
                      flex flex-col items-center gap-2 
                      w-[95px] py-4
                      bg-[var(--bg-base)]
                      rounded-2xl border
                      transition-all duration-200
                      ${
                        active
                          ? "border-primary text-primary shadow-md"
                          : "border-[var(--border-light)] text-[var(--text-primary)] shadow-sm"
                      }
                    `}
                  >
                    <span className="text-3xl">{cat.icon}</span>
                    <span className="text-sm font-medium">{cat.label}</span>
                  </button>
                );
              })}
            </motion.div>

          </motion.div>
        </motion.section>

        {/* ==========================================================
            GRID SECTION
        ========================================================== */}
        <motion.section
          id="list"
          variants={gridContainer}
          initial="hidden"
          animate="visible"
          className="px-[5%] md:px-[7%] lg:px-[9%] mt-10"
        >
          <motion.div variants={cardVariant} className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[var(--text-secondary)]">
              Tempat-tempat di Gelap Nyawang
            </h2>

            <p className="text-sm text-[var(--text-muted)]/80">
              Menampilkan {mainGrid.length} dari {filtered.length} hasil
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainGrid.length ? (
              mainGrid.map((m) => <UMKMCard key={m.id} item={m} />)
            ) : (
              <div className="col-span-full py-12 text-center text-[var(--text-muted)]">
                Belum ada UMKM yang cocok dengan pencarianmu.
              </div>
            )}
          </div>

          {visibleCount < filtered.length && (
            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setVisibleCount(filtered.length)}
                className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-[#F9B04E] transition-colors"
              >
                See All →
              </motion.button>
            </div>
          )}
        </motion.section>

        {/* ==========================================================
            TRENDING SECTION
        ========================================================== */}
        <motion.section initial="visible" variants={heroContainer} className="px-[5%] md:px-[7%] lg:px-[9%] mt-10">
          <motion.div
            variants={heroItem}
            className="bg-[var(--bg-base)] rounded-2xl p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6">
              Trending di Gelap Nyawang
            </h2>

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
