"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star } from "lucide-react";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";
import Link from "next/link";
import { UMKM_DATA, CATEGORIES } from "@/data/umkmData";

/* ===========================================
   CUSTOM HOOKS
=========================================== */

// Debounce hook untuk search performance
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Mobile detection hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

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
   CARD COMPONENT WITH IMAGE LOADING
=========================================== */
function UMKMCard({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/direktori/${item.slug || ""}`} className="block">
      <motion.article
        variants={cardVariant}
        className="group relative rounded-2xl overflow-hidden bg-bg-base dark:bg-bg-soft 
                   shadow-md hover:shadow-xl transition-all duration-300 will-change-transform"
        whileHover={{ y: -6 }}
      >
        {/* Image Container with Loading State */}
        <div className="relative w-full h-44 md:h-48 bg-bg-soft overflow-hidden">
          {/* Skeleton Loader */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-bg-soft via-bg-warm to-bg-soft animate-pulse" />
          )}

          {/* Error Fallback */}
          {imageError && (
            <div className="absolute inset-0 bg-bg-soft flex items-center justify-center">
              <span className="text-5xl opacity-30">🍽️</span>
            </div>
          )}

          {/* Actual Image */}
          <img
            src={item.img}
            alt={item.name}
            className={`w-full h-full object-cover transition-all duration-700 
                       ${imageLoaded ? "opacity-100" : "opacity-0"}
                       group-hover:scale-105`}
            draggable="false"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold text-text-secondary 
                         line-clamp-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          
          <p className="text-sm text-text-muted mt-1 line-clamp-2 min-h-[40px]">
            {item.short}
          </p>

          {/* Price & Rating */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-light">
            <span className="text-xs font-medium text-primary">
              {item.rangeHarga}
            </span>
            
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500" fill="currentColor" />
              <span className="text-xs font-semibold text-text-secondary">
                {item.rating}
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

/* ===========================================
   HORIZONTAL SCROLL ROW
=========================================== */
function ScrollRow({ children, scrollRef }) {
  return (
    <div className="relative w-full">
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
   SCROLL BUTTONS (FIXED DYNAMIC CALCULATION)
=========================================== */
function ScrollButtons({ scrollRef, itemCount }) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Jika item <= 5, tidak perlu button di desktop
  // Di mobile/tablet, scroll gesture sudah cukup
  const showButtons = itemCount > 5;

  useEffect(() => {
    if (!scrollRef.current || !showButtons) return;

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
  }, [scrollRef, itemCount, showButtons]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    
    const firstCard = container.querySelector("a");
    if (!firstCard) return;
    
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24; // gap-6 = 24px
    const cardsToScroll = 3;
    
    const scrollAmount = (cardWidth + gap) * cardsToScroll;
    
    container.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  if (!showButtons) return null;

  return (
    <>
      {!atStart && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full bg-white dark:bg-bg-soft
                     shadow-lg hover:shadow-xl
                     transition-all items-center justify-center
                     text-primary z-10 border border-primary/20"
          aria-label="Scroll left"
        >
          <span className="text-xl font-bold">❮</span>
        </motion.button>
      )}

      {!atEnd && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full bg-white dark:bg-bg-soft
                     shadow-lg hover:shadow-xl
                     transition-all items-center justify-center
                     text-primary z-10 border border-primary/20"
          aria-label="Scroll right"
        >
          <span className="text-xl font-bold">❯</span>
        </motion.button>
      )}
    </>
  );
}

/* ===========================================
   SMALL CARD WITH LOADING STATE
=========================================== */
/* ===========================================
   SMALL CARD WITH LOADING STATE (FIXED)
=========================================== */
/* ===========================================
   SMALL CARD WITH LOADING STATE (FIXED)
=========================================== */
function SmallCard({ item, priority = false }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/direktori/${item.slug}`} className="block flex-shrink-0">
      <motion.div
        whileHover={{ y: -6 }}
        className="relative h-[170px] 
                   w-[160px] sm:w-[220px] lg:w-[260px]
                   flex-shrink-0 rounded-xl overflow-hidden 
                   shadow-md hover:shadow-xl transition-all"
        style={{ scrollSnapAlign: "start" }}
      >
        {/* Skeleton Loader */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-bg-soft via-bg-warm to-bg-soft animate-pulse" />
        )}

        {/* Error Fallback */}
        {imageError && (
          <div className="absolute inset-0 bg-bg-soft flex items-center justify-center">
            <span className="text-4xl opacity-30">🍽️</span>
          </div>
        )}

        {/* ✅ CRITICAL: Force eager loading for ALL category section images */}
        <img
          src={item.img}
          alt={item.name}
          className={`w-full h-full object-cover transition-all duration-500
                     ${imageLoaded ? "opacity-100 hover:scale-105" : "opacity-0"}`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-semibold text-sm sm:text-base drop-shadow line-clamp-1">
            {item.name}
          </p>
          
          <div className="flex items-center gap-1 mt-1">
            <Star size={12} className="text-yellow-400" fill="currentColor" />
            <span className="text-xs text-white/90 font-medium">{item.rating}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ===========================================
   CATEGORY SECTION WITH VIEW ALL
=========================================== */
/* ===========================================
   CATEGORY SECTION WITH VIEW ALL (FIXED)
=========================================== */
function CategorySection({ title, subtitle, categoryId, maxItems = 8 }) {
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();
    const [isVisible, setIsVisible] = useState(true);
  
  const allItems = useMemo(
    () => UMKM_DATA.filter((item) => item.category === categoryId),
    [categoryId]
  );
  
  const displayItems = allItems.slice(0, maxItems);
  const hasMore = allItems.length > maxItems;

  if (allItems.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="px-[5%] md:px-[7%] lg:px-[9%] mt-14"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-secondary">{title}</h2>
          <p className="text-text-muted text-sm mt-1">{subtitle}</p>
        </div>

        {hasMore && (
          <Link
            href={`/direktori#filter-${categoryId}`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.dispatchEvent(new CustomEvent("setCategoryFilter", { 
                detail: categoryId 
              }));
            }}
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 
                       font-medium text-sm transition-colors"
          >
            Lihat Semua ({allItems.length})
            <span>→</span>
          </Link>
        )}
      </div>

      <div className="relative">
        <ScrollRow scrollRef={scrollRef}>
          {displayItems.map((item, index) => (
            <SmallCard 
              key={item.id} 
              item={item}
              priority={index < 6}
            />
          ))}
        </ScrollRow>

        <ScrollButtons scrollRef={scrollRef} itemCount={displayItems.length} />
        
        {/* Mobile scroll hint */}
        {isMobile && displayItems.length > 2 && (
          <p className="text-center text-xs text-text-muted mt-3 opacity-60">
            ← Geser untuk melihat lebih banyak →
          </p>
        )}
      </div>
    </motion.section>
  );
}

/* ===========================================
   EMPTY STATE WITH SUGGESTIONS
=========================================== */
function EmptyState({ onReset, onSuggestionClick }) {
  const suggestions = ["Ayam", "Kopi", "Mie", "Bebek", "Nasi Goreng"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-20 px-6"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="text-8xl mb-6"
      >
        🔍
      </motion.div>

      {/* Heading */}
      <h3 className="text-2xl md:text-3xl font-bold text-text-secondary mb-3">
        Ups, Tidak Ada Hasil
      </h3>

      {/* Description */}
      <p className="text-text-muted mb-8 max-w-md mx-auto leading-relaxed">
        Coba kata kunci lain atau ubah kategori filter untuk menemukan
        tempat makan yang kamu cari.
      </p>

      {/* Suggested Searches */}
      <div className="flex flex-wrap gap-2 justify-center items-center mb-8">
        <span className="text-sm text-text-muted font-medium">Coba cari:</span>
        {suggestions.map((term) => (
          <motion.button
            key={term}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSuggestionClick(term)}
            className="px-4 py-2 rounded-full bg-bg-soft dark:bg-bg-warm text-sm font-medium
                       text-text-secondary hover:bg-primary hover:text-white 
                       transition-all shadow-sm hover:shadow-md"
          >
            {term}
          </motion.button>
        ))}
      </div>

      {/* Reset Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-8 py-3 bg-primary text-white rounded-full font-semibold
                   hover:bg-primary/90 transition-colors shadow-lg"
      >
        Reset Semua Filter
      </motion.button>
    </motion.div>
  );
}

/* ===========================================
   MAIN PAGE COMPONENT
=========================================== */
export default function DirektoriPage() {
  const [searchInput, setSearchInput] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  
  // Debounced search untuk performance
  const debouncedQuery = useDebounce(searchInput, 300);

  // Listen for category filter from "View All" buttons
  useEffect(() => {
    const handler = (e) => {
      setActiveCat(e.detail);
      setSearchInput("");
    };
    
    window.addEventListener("setCategoryFilter", handler);
    return () => window.removeEventListener("setCategoryFilter", handler);
  }, []);

  // Filter logic dengan debounced query
  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    return UMKM_DATA.filter((u) => {
      const matchesCat = activeCat === "all" ? true : u.category === activeCat;
      const matchesQuery =
        !q
          ? true
          : u.name.toLowerCase().includes(q) || 
            u.short.toLowerCase().includes(q) ||
            u.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [debouncedQuery, activeCat]);

  const isFiltering = debouncedQuery.trim() !== "" || activeCat !== "all";

  // Helper untuk reset filter
  const resetFilters = () => {
    setSearchInput("");
    setActiveCat("all");
  };

  // Trending items (top 3 by rating)
  const trending = useMemo(
    () => [...UMKM_DATA].sort((a, b) => b.rating - a.rating).slice(0, 3),
    []
  );

  return (
    <main className="bg-transparent transition-theme">
      <NavDirektori onCategoryClick={(cat) => setActiveCat(cat)} />

      <div className="w-full bg-bg-gold dark:bg-bg-gold min-h-screen pb-16">
        {/* ===========================================
            HERO SECTION
        =========================================== */}
        <motion.section
          id="top-direktori"
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="w-full pt-0 pb-0"
        >
          <motion.div
            variants={heroItem}
            className="w-full mx-auto min-h-[420px] rounded-b-[40px] px-6 pt-24 pb-16 
                       flex flex-col items-center justify-start overflow-hidden 
                       transition-theme bg-gradient-to-b from-[#FCBB65] to-[#E45D18] 
                       dark:from-bg-warm dark:to-bg-base"
          >
            {/* Heading */}
            <div className="max-w-3xl text-center mt-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold 
                             text-[#2B1B0F] dark:text-[#FFF8F0] leading-snug tracking-tight">
                Cari Tempat Makan Favoritmu
                <br /> di <span className="text-[#C13F14]">Gelap Nyawang</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-[#2B1B0F]/80 dark:text-[#FFE5CC]/90">
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder='Cari resto… misal: "Black Romantic", "BWJ"…'
                className="w-full py-4 pl-14 pr-14 rounded-full 
                           bg-white/85 dark:bg-bg-soft 
                           border border-white/60 dark:border-border-default 
                           text-[#2B1B0F] dark:text-[#FFF8F0] 
                           shadow-lg focus:shadow-xl outline-none transition-all 
                           backdrop-blur-sm placeholder:text-[#2B1B0F]/50 
                           dark:placeholder:text-[#FFF8F0]/50"
                aria-label="Search restaurants"
                aria-describedby="search-description"
              />
              <span id="search-description" className="sr-only">
                Cari berdasarkan nama atau jenis makanan
              </span>

              {/* Clear Button */}
              <AnimatePresence>
                {searchInput && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchInput("")}
                    className="absolute right-6 top-1/2 -translate-y-1/2 
                               text-[#C13F14] dark:text-[#EC760D] 
                               hover:text-[#C13F14]/70 dark:hover:text-[#EC760D]/70 
                               transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={20} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* CATEGORY BUTTONS */}
            <motion.div
              variants={categoriesContainer}
              className="mt-10 flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-4 
                         w-full max-w-4xl"
            >
              {CATEGORIES.map((cat) => {
                const active = cat.id === activeCat;
                return (
                  <motion.button
                    key={cat.id}
                    variants={heroItem}
                    onClick={() => setActiveCat(cat.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-2 px-4 md:px-5 py-3 md:py-4 
                                rounded-2xl min-w-[85px] md:min-w-[95px]
                                bg-white/75 dark:bg-bg-soft border transition-all
                                ${
                                  active
                                    ? "border-[#EB7610] dark:border-[#EC760D] shadow-lg scale-105"
                                    : "border-white/40 dark:border-border-default hover:shadow-md"
                                }`}
                    aria-pressed={active}
                    aria-label={`Filter by ${cat.label}`}
                  >
                    <span className="text-xl md:text-2xl">{cat.icon}</span>
                    <span 
                      className={`text-xs md:text-sm font-medium transition-colors ${
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

        {/* ===========================================
            FILTERING STATE: Show Grid Results
        =========================================== */}
        <AnimatePresence mode="wait">
          {isFiltering ? (
            <motion.section
              key={`filter-${activeCat}-${debouncedQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="px-[5%] md:px-[7%] lg:px-[9%] mt-14"
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-text-secondary">
                  Hasil Pencarian
                </h2>
                <p className="text-text-muted text-sm mt-1">
                  {filtered.length} tempat ditemukan
                  {debouncedQuery && ` untuk "${debouncedQuery}"`}
                  {activeCat !== "all" && ` di kategori ${CATEGORIES.find(c => c.id === activeCat)?.label}`}
                </p>
              </div>

              {filtered.length > 0 ? (
                <motion.div
                  key={`grid-${activeCat}-${debouncedQuery}-${filtered.length}`}
                  variants={gridContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
                >
                  {filtered.map((item) => (
                    <UMKMCard key={item.id} item={item} />
                  ))}
                </motion.div>
              ) : (
                <EmptyState
                  onReset={resetFilters}
                  onSuggestionClick={(term) => setSearchInput(term)}
                />
              )}
            </motion.section>
          ) : (
            /* ===========================================
                DEFAULT STATE: Show Category Sections
            =========================================== */
            <motion.div
              key="category-sections"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CategorySection
                title="Resto Pilihan"
                subtitle="Makan enak tanpa ribet. Dari ayam bakar sampai warmindo favorit mahasiswa."
                categoryId="resto"
              />

              <CategorySection
                title="Kafe Nyaman"
                subtitle="Tempat ideal buat nugas, nongkrong, atau sekadar cari suasana tenang."
                categoryId="cafe"
              />

              <CategorySection
                title="Cemilan Enak"
                subtitle="Pilihan ringan buat ganjel lapar sambil nunggu kelas berikutnya."
                categoryId="cemilan"
              />

              <CategorySection
                title="Minuman Segar"
                subtitle="Thai tea, kopi, mocktail. Temeni hari panjang di kampus."
                categoryId="minuman"
              />

              <CategorySection
                title="Layanan Lain"
                subtitle="Pilihan tempat yang mendukung kebutuhan mahasiswa di sekitar kampus."
                categoryId="lain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===========================================
            TRENDING SECTION (Always Visible)
        =========================================== */}
        <motion.section
          id="trending"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="px-[5%] md:px-[7%] lg:px-[9%] mt-20 scroll-mt-24"
        >
          <div className="bg-white dark:bg-bg-soft rounded-3xl p-6 md:p-10 
                          shadow-xl flex flex-col lg:flex-row gap-8 md:gap-10">
            {/* Text Content */}
            <div className="flex-1 max-w-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-secondary mb-4">
                Trending di{" "}
                <span className="bg-gradient-to-r from-[#EC760D] to-[#FCBB65] 
                                 bg-clip-text text-transparent">
                  Gelap Nyawang
                </span>
              </h2>

              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Tempat makan yang lagi sering dibicarakan. Tiga pilihan paling populer 
                berdasarkan rating tertinggi.
              </p>
            </div>

            {/* Trending Cards */}
            <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {trending.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden shadow-md 
                             hover:shadow-xl transition-all duration-300 h-[200px] md:h-[220px]"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover transition-transform duration-500 
                                 group-hover:scale-110"
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <span className="text-white font-semibold text-sm">{item.rating}</span>
                    </div>

                    <h3 className="text-base md:text-lg font-semibold text-white drop-shadow mb-1">
                      {item.name}
                    </h3>

                    <p className="text-white/90 text-xs md:text-sm opacity-0 group-hover:opacity-100 
                                  max-h-0 group-hover:max-h-20 transition-all duration-300 
                                  line-clamp-2 overflow-hidden">
                      {item.short}
                    </p>
                  </div>

                  {/* Link Overlay */}
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