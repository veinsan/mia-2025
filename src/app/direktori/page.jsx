"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavDirektori from "@/components/navDirektori/NavDirektori";
import FooterDirektori from "@/components/footerDirektori/FooterDirektori";
import HeroSection from "@/components/direktori/HeroSection";
import SearchBar from "@/components/direktori/SearchBar";
import CategoryButtons from "@/components/direktori/CategoryButtons";
import UMKMCard from "@/components/direktori/UMKMCard";
import CategorySection from "@/components/direktori/CategorySection";
import EmptyState from "@/components/direktori/EmptyState";
import TrendingSection from "@/components/direktori/TrendingSection";
import { UMKM_DATA, CATEGORIES } from "@/data/umkmData";
import { useDebounce } from "@/hooks/useDebounce";
import { gridContainer } from "@/lib/animations";

export default function DirektoriPage() {
  const [searchInput, setSearchInput] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  
  const debouncedQuery = useDebounce(searchInput, 300);

  useEffect(() => {
    const handler = (e) => {
      setActiveCat(e.detail);
      setSearchInput("");
    };
    
    window.addEventListener("setCategoryFilter", handler);
    return () => window.removeEventListener("setCategoryFilter", handler);
  }, []);

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

  const resetFilters = () => {
    setSearchInput("");
    setActiveCat("all");
  };

  return (
    <main className="bg-transparent transition-theme">
      <NavDirektori onCategoryClick={(cat) => setActiveCat(cat)} />

      <div className="w-full bg-bg-gold dark:bg-bg-gold min-h-screen pb-16">
        <HeroSection>
          <SearchBar
            value={searchInput}
            onChange={setSearchInput}
            onClear={() => setSearchInput("")}
          />
          <CategoryButtons
            activeCategory={activeCat}
            onCategoryChange={setActiveCat}
          />
        </HeroSection>

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

        <TrendingSection />
      </div>

      <FooterDirektori />
    </main>
  );
}