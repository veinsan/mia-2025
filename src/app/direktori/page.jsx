"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";
import BannerDirektori from "@/components/bannerDirektori";
import Link from "next/link";

// =============================
// DATA UMKM (12 item total)
// =============================
const UMKM_DATA = [
  { id: 1, slug: "blackromantic", name: "Black Romantic", category: "makanan", img: "/assets/resto/resto1.webp", short: "ini kata faizi enak" },
  { id: 2, slug: "kedaibwj", name: "Kedai BWJ", category: "makanan", img: "/assets/resto/resto2.webp", short: "ini kata faizi enak juga" },
  { id: 3, slug: "bebekstallone", name: "Bebek Stallone", category: "makanan", img: "/assets/resto/resto3.jpg", short: "ini kata faizi enak juga kali" },
  { id: 4, slug: "ayamcola", name: "Ayam Cola Kabita HC", category: "makanan", img: "/assets/resto/resto4.webp", short: "ini kata faizi enak juga kali mungkin" },
  { id: 5, slug: "ayambebekbesthal", name: "Ayam & Bebek Besthal", category: "makanan", img: "/assets/resto/resto5.webp", short: "ini kata faizi enak juga kali mungkin asumsi" },
  { id: 6, slug: "rmpakdatuak", name: "Rumah Makan Pak Datuak", category: "makanan", img: "/assets/resto/resto6.webp", short: "ini kata faizi enak juga kali mungkin asumsi harusnya" },
  { id: 7, name: "Lorem Ipsum", category: "cemilan", img: "/assets/resto/resto7.webp", short: "lorem ipsum" },
  { id: 8, name: "Lorem Ipsum", category: "makanan", img: "/assets/resto/resto8.webp", short: "lorem ipsum" },
  { id: 9, name: "Lorem Ipsum", category: "makanan", img: "/assets/resto/resto9.webp", short: "lorem ipsum" },
  { id: 10, name: "Lorem Ipsum", category: "makanan", img: "/assets/resto/resto10.webp", short: "lorem ipsum" },
  { id: 11, name: "Lorem Ipsum", category: "cemilan", img: "/assets/resto/resto11.webp", short: "lorem ipsum" },
  { id: 12, name: "Lorem Ipsum", category: "minuman", img: "/assets/resto/resto12.webp", short: "lorem ipsum" },
];

const CATEGORIES = [
  { id: "all", label: "Semua", icon: "🍽️" },
  { id: "makanan", label: "Makanan", icon: "🍜" },
  { id: "minuman", label: "Minuman", icon: "🥤" },
  { id: "cemilan", label: "Cemilan", icon: "🍪" },
];

// =============================
// MOTION VARIANTS
// =============================
const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const heroItem = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const categoriesContainer = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.08 } } };
const categoryItem = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const gridContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const cardVariant = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

// =============================
// KOMPONEN CARD
// =============================
function UMKMCard({ item }) {
  return (
    <Link href={`/direktori/${item.slug || ""}`} className="block">
      <motion.article
        layout
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="group relative rounded-[14px] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(232,117,36,0.12)] transition-all duration-300"
        style={{ willChange: 'transform, box-shadow' }}
      >
        <div className="w-full h-44 md:h-48 lg:h-40 bg-gray-100 overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable="false"
          />
        </div>
        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold text-[#4A1E0E] line-clamp-1 transition-colors duration-200 group-hover:text-primary">
            {item.name}
          </h3>
          <p className="text-sm text-[#7B4F2D] mt-1 line-clamp-2">{item.short}</p>
        </div>
      </motion.article>
    </Link>
  );
}

// =============================
// HALAMAN UTAMA DIREKTORI
// =============================
export default function DirektoriPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6); // default 6 dulu

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
    <main className="bg-[linear-gradient(180deg,#FFF3E0,white)]">
      <NavDirektori />

      {/* HERO */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={heroContainer} className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div variants={heroItem} className="bg-gradient-to-r from-[#FFF3E0] via-[#FFEFD8] to-[#FFFDF8] rounded-2xl p-8 md:p-12 shadow-[0_12px_40px_rgba(232,117,36,0.06)]">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 variants={heroItem} className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A1E0E] leading-tight">
                Temukan Makanan Sehabis Kuliah Favoritmu di <span className="text-primary">Gelap Nyawang</span>
              </motion.h1>
              <motion.p variants={heroItem} className="mt-3 text-[#4A1E0E]/80">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              </motion.p>
              <motion.div variants={heroItem} className="mt-8">
                <div className="mx-auto max-w-2xl">
                  <label className="relative block">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E87524]">
                      <Search size={18} />
                    </span>
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Cari Resto, contoh: Black Romantic, Kedai BWJ, ..."
                      className="w-full pl-12 pr-4 py-4 rounded-full bg-[#FFFDF8] border border-[#F0D8BE] shadow-sm focus:shadow-[0_8px_30px_rgba(232,117,36,0.08)] focus:outline-none transition-all duration-200"
                    />
                  </label>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CATEGORY FILTER */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={categoriesContainer} className="pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div className="flex items-center justify-center gap-4 md:gap-6 -mt-6" layout>
            {CATEGORIES.map((cat) => {
              const active = cat.id === activeCat;
              return (
                <motion.button
                  key={cat.id}
                  layout
                  variants={categoryItem}
                  onClick={() => setActiveCat(cat.id)}
                  whileHover={{ translateY: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`flex flex-col items-center gap-2 py-3 px-5 rounded-xl transition-all duration-250 ${
                    active ? "bg-primary text-white shadow-md" : "bg-[#FFF9F0] text-primary"
                  }`}
                >
                  <div className="text-xl">{cat.icon}</div>
                  <div className="text-sm font-medium">{cat.label}</div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

        {/* TRENDING */}
        <div className="w-full px-[5%] md:px-[7%] lg:px-[9%]">
        <motion.section
            id="trending"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.18 }}
            className="mb-10"
        >
            <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-between mb-6"
            >
            <h2 className="text-2xl font-semibold text-[#4A1E0E]">
                Trending di Gelap Nyawang
            </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trending.map((t) => (
                <UMKMCard key={t.id} item={t} />
            ))}
            </div>
        </motion.section>

        {/* MAIN GRID */}
        <motion.section
            id="list"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.18 }}
            className="mb-12"
        >
            <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-between mb-6"
            >
            <h2 className="text-2xl font-semibold text-[#4A1E0E]">
                Tempat-tempat di Gelap Nyawang
            </h2>
            <p className="text-sm text-[#7B4F2D]/80">
                Menampilkan {mainGrid.length} dari {filtered.length} hasil
            </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainGrid.length ? (
                mainGrid.map((m) => <UMKMCard key={m.id} item={m} />)
            ) : (
                <div className="col-span-full py-12 text-center text-[#7B4F2D]">
                Belum ada UMKM yang cocok dengan pencarianmu.
                </div>
            )}
            </div>

            {visibleCount < filtered.length && (
            <div className="flex justify-center mt-8">
                <motion.button
                onClick={() => setVisibleCount(filtered.length)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-[#F9B04E] transition-colors"
                >
                See All →
                </motion.button>
            </div>
            )}
        </motion.section>
        </div>

      {/* BANNER CTA */}
      <BannerDirektori />

      {/* FOOTER */}
      <FooterDirektori />
    </main>
  );
}
