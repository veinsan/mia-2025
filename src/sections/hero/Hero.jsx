"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import HeroBackground from "./HeroBackground";
import HeroHeading from "./HeroHeading";
import HeroTyping from "./HeroTyping";
import HeroCTA from "./HeroCTA";
import HeroScrollHint from "./HeroScrollHint";
import { ANIMATION_CONFIG } from "./heroConfig";

export default function Hero() {
  const fullText =
    "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!";

  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const layerRefs = useRef([]);
  const rafIdRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const setLayerRef = useCallback((el, index) => {
    if (el) layerRefs.current[index] = el;
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), ANIMATION_CONFIG.TYPING.COMPLETION_DELAY);
      }
    }, ANIMATION_CONFIG.TYPING.INTERVAL);
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const handleParallax = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const base = Math.min(window.innerHeight, 1200 / ANIMATION_CONFIG.PARALLAX.VIEWPORT_RATIO_BASE);
      const ratio = Math.max(0, Math.min(1, scrollY / base));
      const baseY = -ratio * ANIMATION_CONFIG.PARALLAX.TRANSLATE_MULTIPLIER;
      const baseX = ratio * ANIMATION_CONFIG.PARALLAX.HORIZONTAL_OFFSET;

      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const speed = (i + 1) * ANIMATION_CONFIG.PARALLAX.BASE_SPEED;
        const y = baseY * speed;
        const x = baseX * (i % 2 === 0 ? -1 : 1);
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      if (document.visibilityState === "visible") {
        rafIdRef.current = requestAnimationFrame(handleParallax);
      }
    };

    rafIdRef.current = requestAnimationFrame(handleParallax);

    const heroEl = document.getElementById("hero");
    if (heroEl) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
          } else if (entry.isIntersecting && !rafIdRef.current) {
            rafIdRef.current = requestAnimationFrame(handleParallax);
          }
        },
        { threshold: 0 }
      );
      observerRef.current.observe(heroEl);
    }

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center overflow-hidden min-h-screen pt-28 sm:pt-32 md:pt-40 pb-32 px-6 md:px-10 bg-[#0A0A0A] text-white"
    >
      <HeroBackground setLayerRef={setLayerRef} />

      <div className="max-w-4xl mx-auto relative z-10 px-3 sm:px-6">
        <HeroHeading />
        <HeroTyping displayText={displayText} typingDone={typingDone} />
        <HeroCTA isMobile={isMobile} />
      </div>

      <HeroScrollHint />

      <div className="absolute bottom-0 left-0 w-full h-[240px] bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />
    </section>
  );
}