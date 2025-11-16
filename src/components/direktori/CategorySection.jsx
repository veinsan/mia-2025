"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { UMKM_DATA, CATEGORIES } from "@/data/umkmData";
import SmallCard from "./SmallCard";
import ScrollControls from "./ScrollControls";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function CategorySection({ title, subtitle, categoryId, maxItems = 8 }) {
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();
  
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
      animate={{ opacity: 1, y: 0 }}
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
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory"
          }}
        >
          {displayItems.map((item, index) => (
            <SmallCard 
              key={`${categoryId}-${item.id}`}
              item={item}
              index={index}
            />
          ))}
        </div>

        <ScrollControls scrollRef={scrollRef} itemCount={displayItems.length} />
        
        {isMobile && displayItems.length > 2 && (
          <p className="text-center text-xs text-text-muted mt-3 opacity-60">
            ← Geser untuk melihat lebih banyak →
          </p>
        )}
      </div>
    </motion.section>
  );
}