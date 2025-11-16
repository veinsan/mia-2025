import { useEffect, useRef } from "react";

export default function useSwipeNavigation({ active, onPrev, onNext }) {
  const touchStartRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    const handleTouchStart = (e) => {
      touchStartRef.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const delta = touchStartRef.current - touchEndX;
      if (delta > 50 && typeof onNext === "function") onNext();
      if (delta < -50 && typeof onPrev === "function") onPrev();
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [active, onPrev, onNext]);
}