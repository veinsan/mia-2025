import { useEffect, useMemo } from "react";

export default function useMarqueeStyles() {
  const styleContent = useMemo(
    () => `
    @keyframes marquee-left { 0% { transform: translateX(0%);} 100% { transform: translateX(-50%);} }
    @keyframes marquee-right { 0% { transform: translateX(-50%);} 100% { transform: translateX(0%);} }

    .marquee-left { animation: marquee-left 55s linear infinite; will-change: transform; }
    .marquee-right { animation: marquee-right 55s linear infinite; will-change: transform; }

    .marquee-container:hover .marquee-left,
    .marquee-container:hover .marquee-right { animation-play-state: paused; }

    @media (prefers-reduced-motion: reduce) {
      .marquee-left, .marquee-right { animation: none !important; transform: translateX(0) !important; }
    }

    .marquee-fade::before, .marquee-fade::after {
      content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2; pointer-events: none;
    }
    .marquee-fade::before { left: 0; background: linear-gradient(to right, var(--bg-soft) 0%, transparent 100%); }
    .marquee-fade::after { right: 0; background: linear-gradient(to left, var(--bg-soft) 0%, transparent 100%); }

    @media (max-width: 640px) {
      .marquee-fade::before, .marquee-fade::after { width: 40px; }
    }
  `,
    []
  );

  useEffect(() => {
    if (document.getElementById("testimoni-styles")) return;
    const style = document.createElement("style");
    style.id = "testimoni-styles";
    style.textContent = styleContent;
    document.head.appendChild(style);
    return () => {
      const existing = document.getElementById("testimoni-styles");
      if (existing) existing.remove();
    };
  }, [styleContent]);
}