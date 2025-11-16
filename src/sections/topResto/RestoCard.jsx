"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const prefersReducedMotion = () => {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
};

export default function RestoCard({ resto, variant = "large", index = 0 }) {
  const isLarge = variant === "large";
  const isMedium = variant === "medium";
  const reduceMotion = prefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.5,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
      className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        isLarge
          ? "h-[360px] md:h-[420px]"
          : isMedium
          ? "h-[220px] md:h-[240px]"
          : "h-[170px] md:h-[180px]"
      }`}
    >
      <Link href={`/direktori/${resto.slug}`} className="block h-full group">
        {resto.badge && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
            {resto.badge}
          </div>
        )}

        <div className="absolute inset-0">
          <img
            src={resto.img}
            alt={resto.name}
            loading={isLarge ? "eager" : "lazy"}
            fetchPriority={isLarge ? "high" : "auto"}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg,#ddd,#bbb)";
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3
            className={`font-semibold text-white mb-2 transition-all duration-300 ${
              isLarge
                ? "text-2xl md:text-3xl"
                : isMedium
                ? "text-xl md:text-2xl"
                : "text-lg md:text-xl"
            }`}
          >
            {resto.name}
          </h3>

          {resto.priceRange && resto.category && (
            <div className="flex items-center gap-2 text-white/85 text-xs md:text-sm mb-1">
              <span>💰 {resto.priceRange}</span>
              <span>•</span>
              <span>{resto.category}</span>
            </div>
          )}

          <div
            className={`overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 ${
              reduceMotion ? "!duration-200" : ""
            }`}
          >
            <p
              className={`text-white/90 mb-3 ${
                isLarge
                  ? "text-sm md:text-base line-clamp-3"
                  : "text-xs md:text-sm line-clamp-2"
              }`}
            >
              {resto.short}
            </p>

            <motion.span
              className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-primary/80 transition-colors"
              whileHover={reduceMotion ? {} : { x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Lihat Detail →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}