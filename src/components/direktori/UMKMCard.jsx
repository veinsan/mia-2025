"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import { cardVariant } from "@/lib/animations";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function UMKMCard({ item }) {
  const { loaded, error } = useImageLoader(item.img, false);

  return (
    <Link href={`/direktori/${item.slug || ""}`} className="block">
      <motion.article
        variants={cardVariant}
        className="group relative rounded-2xl overflow-hidden bg-bg-base dark:bg-bg-soft 
                   shadow-md hover:shadow-xl transition-all duration-300 will-change-transform"
        whileHover={{ y: -6 }}
      >
        <div className="relative w-full h-44 md:h-48 bg-bg-soft overflow-hidden">
          {!loaded && !error && (
            <div className="absolute inset-0 bg-gradient-to-r from-bg-soft via-bg-warm to-bg-soft animate-pulse" />
          )}

          {error && (
            <div className="absolute inset-0 bg-bg-soft flex items-center justify-center">
              <span className="text-5xl opacity-30">🍽️</span>
            </div>
          )}

          <img
            src={item.img}
            alt={item.name}
            className={`w-full h-full object-cover transition-all duration-700 
                      ${loaded ? "opacity-100" : "opacity-0"}
                      group-hover:scale-105`}
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold text-text-secondary 
                         line-clamp-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          
          <p className="text-sm text-text-muted mt-1 line-clamp-2 min-h-[40px]">
            {item.short}
          </p>

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