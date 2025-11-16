"use client";

import { useRef, useState, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import TentangHeading from "./TentangHeading";
import TentangCards from "./TentangCards";
import TentangVisuals from "./TentangVisuals";

export default function Tentang() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detect = () => setIsMobile(window.innerWidth < 640);
    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      id="tentang"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-bg-base via-bg-soft to-bg-warm pb-[130px] md:pb-[70px]"
    >
      <TentangVisuals />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 md:py-24">
        <TentangHeading controls={controls} />
        <TentangCards controls={controls} isMobile={isMobile} />
      </div>
    </section>
  );
}