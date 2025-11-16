"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import { UMKM_DATA } from "@/data/umkmData";

export default function TrendingSection() {
  const trending = useMemo(
    () => [...UMKM_DATA].sort((a, b) => b.rating - a.rating).slice(0, 3),
    []
  );

  return (
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
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-110"
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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
  );
}