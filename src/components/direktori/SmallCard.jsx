"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function SmallCard({ item, index = 0 }) {
  const priority = index < 8;
  const { loaded, error } = useImageLoader(item.img, priority);

  return (
    <Link href={`/direktori/${item.slug}`} className="block flex-shrink-0">
      <motion.div
        whileHover={{ y: -6 }}
        className="relative h-[170px] 
                   w-[160px] sm:w-[220px] lg:w-[260px]
                   flex-shrink-0 rounded-xl overflow-hidden 
                   shadow-md hover:shadow-xl transition-all group"
        style={{ scrollSnapAlign: "start" }}
      >
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gradient-to-br from-bg-soft via-bg-warm to-bg-soft animate-pulse" />
        )}

        {error && (
          <div className="absolute inset-0 bg-bg-soft flex items-center justify-center">
            <span className="text-4xl opacity-30">🍽️</span>
          </div>
        )}

        <img
          src={item.img}
          alt={item.name}
          className={`w-full h-full object-cover transition-all duration-500
                     ${loaded ? "opacity-100 group-hover:scale-105" : "opacity-0"}`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          draggable="false"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-1 mb-1">
            <Star size={12} className="text-yellow-400" fill="currentColor" />
            <span className="text-xs text-white/90 font-medium">{item.rating}</span>
          </div>

          <p className="text-white font-semibold text-sm sm:text-base drop-shadow line-clamp-1 mb-1">
            {item.name}
          </p>

          <p className="text-white/90 text-xs drop-shadow 
                        line-clamp-2 max-h-0 opacity-0 
                        group-hover:max-h-16 group-hover:opacity-100 
                        transition-all duration-300 overflow-hidden">
            {item.short}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}