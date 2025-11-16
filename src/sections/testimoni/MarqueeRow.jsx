"use client";

import { useReducedMotion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

export default function MarqueeRow({ testimonials, direction = "left", isMobile }) {
  const cls = direction === "left" ? "marquee-left" : "marquee-right";
  const shouldReduce = useReducedMotion();

  const repeated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative marquee-container marquee-fade">
      <div className={`flex gap-6 ${shouldReduce ? "" : cls}`} style={{ width: shouldReduce ? "fit-content" : "max-content" }}>
        {repeated.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
}