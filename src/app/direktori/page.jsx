"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";
import Link from "next/link";
import { UMKM_DATA, CATEGORIES } from "@/data/umkmData";

/* ===========================================
   MOTION VARIANTS
=========================================== */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const categoriesContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ===========================================
   CARD COMPONENT
=========================================== */
function UMKMCard({ item }) {
  return (
    <Link href={`/direktori/${item.slug || ""}`} className="block">
      <motion.article
        variants={cardVariant}
        className="group relative rounded-2xl overflow-hidden bg-bg-base dark:bg-bg-soft shadow-md hover:shadow-xl transition-all duration-300 will-change-transform"
        whileHover={{ y: -6 }}
      >
        <div className="w-full h-44 md:h-48 bg-bg-soft overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable="false"
            loading="lazy"
          />
        </div>

        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold text-text-secondary line-clamp-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-text-muted mt-1 line-clamp-2">{item.short}</p>
        </div>
      </motion.article>
    </Link>
  );
}

/* ===========================================
   HORIZONTAL SCROLL ROW (FIXED WIDTH)
=========================================== */
function ScrollRow({ children, scrollRef }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory"
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ===========================================
   SCROLL BUTTONS (FIXED CALCULATION)
=========================================== */
function ScrollButtons({ scrollRef, itemCount }) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Jika item <= 5, tidak perlu button
  if (itemCount <= 5) return null;

  useEffect(() => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 5);
      setAtEnd(el.scrollLeft >= max - 5);
    };

    el.addEventListener("scroll", update, { passive: true });
    
    // Initial check
    update();

    return () => el.removeEventListener("scroll", update);
  }, [scrollRef, itemCount]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    
    // FIXED: Scroll exactly 5 cards (270px * 5 + 24px gaps * 4 = 1446px)
    // But we do smaller increments for smoother UX: 1 card at a time
    const scrollAmount = 270 + 24; // card width + gap
    
    scrollRef.current.scrollBy({
      left: dir === "right" ? scrollAmount * 5 : -scrollAmount * 5,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!atStart && (
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-white dark:bg-bg-soft
          shadow-lg hover:shadow-xl
          transition-all items-center justify-center
          text-primary z-10"
          aria-label="Scroll left"
        >
          <span className="text-xl">❮</span>
        </button>
      )}

      {!atEnd && (
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-white dark:bg-bg-soft
          shadow-lg hover:shadow-xl
          transition-all items-center justify-center
          text-primary z-10"
          aria-label="Scroll right"
        >
          <span className="text-xl">❯</span>
        </button>
      )}
    </>
  );
}

/* ===========================================
   SMALL CARD (FIXED WIDTH - NO CUTTING)
=========================================== */
function SmallCard({ item }) {
  return (
    <Link href={`/direktori/${item.slug}`} className="block">
      <motion.div
        whileHover={{ y: -6 }}
        className="relative h-[170px] 
          w-[160px] sm:w-[220px] lg:w-[260px]
          flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-semibold text-sm sm:text-base drop-shadow line-clamp-1">
            {item.name}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

/* ===========================================
   CATEGORY SECTION (Horizontal Scroll)
=========================================== */
function CategorySection({ title, subtitle, items }) {
  const scrollRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="px-[5%] md:px-[7%] lg:px-[9%] mt-14"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-secondary">{title}</h2>
          <p className="text-text-muted text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="relative">
        <ScrollRow scrollRef={scrollRef}>
          {items.map((item) => (
            <SmallCard key={item.id} item={item} />
          ))}
        </ScrollRow>

        <ScrollButtons scrollRef={scrollRef} itemCount={items.length} />
      </div>
    </motion.section>
  );
}

/* ===========================================
   MAIN PAGE COMPONENT (FIXED ALL ISSUES)
=========================================== */
export default function DirektoriPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  // Filter logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return UMKM_DATA.filter((u) => {
      const matchesCat = activeCat === "all" ? true : u.category === activeCat;
      const matchesQuery =
        !q
          ? true
          : u.name.toLowerCase().includes(q) || u.short.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat]);

  const isFiltering = query.trim() !== "" || activeCat !== "all";

  const trending = UMKM_DATA.slice(0, 3);

  // Category data
  const restoItems = UMKM_DATA.filter((item) => item.category === "resto").slice(0, 8);
  const cafeItems = UMKM_DATA.filter((item) => item.category === "cafe").slice(0, 8);
  const cemilanItems = UMKM_DATA.filter((item) => item.category === "cemilan").slice(0, 8);
  const minumanItems = UMKM_DATA.filter((item) => item.category === "minuman").slice(0, 8);
  const lainItems = UMKM_DATA.filter((item) => item.category === "lain").slice(0, 8);

  return (
    <main className="bg-transparent transition-theme">
      <NavDirektori onCategoryClick={(cat) => setActiveCat(cat)} />

      <div className="w-full bg-bg-gold dark:bg-bg-gold min-h-screen pb-16">
        {/* HERO SECTION */}
        <motion.section
          id="top-direktori"
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="w-full pt-0 pb-0"
        >
          <motion.div
            variants={heroItem}
            className="w-full mx-auto min-h-[420px] rounded-b-[40px] px-6 pt-24 pb-16 flex flex-col items-center justify-start overflow-hidden transition-theme bg-gradient-to-b from-[#FCBB65] to-[#E45D18] dark:from-bg-warm dark:to-bg-base"
          >
            <div className="max-w-3xl text-center mt-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#2B1B0F] dark:text-[#FFF8F0] leading-snug tracking-tight">
                Cari Tempat Makan Favoritmu
                <br /> di <span className="text-[#C13F14]">Gelap Nyawang</span>
              </h1>
              <p className="mt-3 text-base md:text-lg text-[#2B1B0F]/80 dark:text-[#FFE5CC]/90">
                Mulai dari ayam bakar, warmindo, sampai kopi buat nugas. Semua ada di satu tempat.
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="w-full max-w-3xl mt-8 relative">
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C13F14] dark:text-[#EC760D]"
                size={24}
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Cari resto… misal: "Black Romantic", "BWJ"…'
                className="w-full py-4 pl-14 pr-6 rounded-full bg-white/85 dark:bg-bg-soft border border-white/60 dark:border-border-default text-[#2B1B0F] dark:text-[#FFF8F0] shadow-lg focus:shadow-xl outline-none transition-all backdrop-blur-sm"
              />
            </div>

            {/* CATEGORY BUTTONS (ALWAYS VISIBLE - ISSUE #2 FIXED) */}
            <motion.div
              variants={categoriesContainer}
              className="mt-10 flex flex-wrap md:flex-nowrap justify-center gap-4 w-full max-w-4xl"
            >
              {CATEGORIES.map((cat) => {
                const active = cat.id === activeCat;
                return (
                  <motion.button
                    key={cat.id}
                    variants={heroItem}
                    onClick={() => setActiveCat(cat.id)}
                    className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl min-w-[95px] 
                      bg-white/75 dark:bg-bg-soft border transition-all
                      ${
                        active
                          ? "border-[#EB7610] dark:border-[#EC760D] shadow-lg scale-105"
                          : "border-white/40 dark:border-border-default hover:shadow-md hover:scale-102"
                      }`}
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <span 
                      className={`text-sm font-medium transition-colors ${
                        active 
                          ? "text-[#EB7610] dark:text-[#EC760D]" 
                          : "text-[#2B1B0F] dark:text-[#FFF8F0]"
                      }`}
                    >
                      {cat.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* FILTERING STATE: Show Grid Results (ISSUE #1 FIXED) */}
        {isFiltering ? (
          <motion.section
            key={`filter-${activeCat}-${query}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="px-[5%] md:px-[7%] lg:px-[9%] mt-14"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-text-secondary">
                Hasil Pencarian
              </h2>
              <p className="text-text-muted text-sm mt-1">
                {filtered.length} tempat ditemukan
              </p>
            </div>

            {filtered.length > 0 ? (
              <motion.div
                key={`grid-${activeCat}-${query}-${filtered.length}`}
                variants={gridContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
              >
                {filtered.map((item) => (
                  <UMKMCard key={item.id} item={item} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-text-muted">Tidak ada hasil ditemukan</p>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCat("all");
                  }}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </motion.section>
        ) : (
          /* DEFAULT STATE: Show Category Sections */
          <motion.div
            key="category-sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <CategorySection
              title="Resto Pilihan"
              subtitle="Makan enak tanpa ribet. Dari ayam bakar sampai warmindo favorit mahasiswa."
              items={restoItems}
            />

            <CategorySection
              title="Kafe Nyaman"
              subtitle="Tempat ideal buat nugas, nongkrong, atau sekadar cari suasana tenang."
              items={cafeItems}
            />

            <CategorySection
              title="Cemilan Enak"
              subtitle="Pilihan ringan buat ganjel lapar sambil nunggu kelas berikutnya."
              items={cemilanItems}
            />

            <CategorySection
              title="Minuman Segar"
              subtitle="Thai tea, kopi, mocktail—temeni hari panjang di kampus."
              items={minumanItems}
            />

            <CategorySection
              title="Layanan Lain"
              subtitle="Pilihan tempat yang mendukung kebutuhan mahasiswa di sekitar kampus."
              items={lainItems}
            />
          </motion.div>
        )}

        {/* TRENDING SECTION (Always Visible) */}
        <motion.section
          id="trending"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="px-[5%] md:px-[7%] lg:px-[9%] mt-20 scroll-mt-24"
        >
          <div className="bg-white dark:bg-bg-soft rounded-3xl p-10 shadow-xl flex flex-col lg:flex-row gap-10">
            <div className="flex-1 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-text-secondary mb-4">
                Trending di{" "}
                <span className="bg-gradient-to-r from-[#EC760D] to-[#FCBB65] bg-clip-text text-transparent">
                  Gelap Nyawang
                </span>
              </h2>

              <p className="text-text-muted text-base leading-relaxed">
                Tempat makan yang lagi sering dibicarakan. Tiga pilihan paling populer minggu ini.
              </p>
            </div>

            <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trending.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[220px]
"
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white drop-shadow mb-1">
                      {item.name}
                    </h3>

                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-300 line-clamp-2">
                      {item.short}
                    </p>
                  </div>

                  <Link
                    href={`/direktori/${item.slug}`}
                    className="absolute inset-0"
                    aria-label={`View ${item.name}`}
                  >
                    <span className="sr-only">View {item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      <FooterDirektori />
    </main>
  );
}
