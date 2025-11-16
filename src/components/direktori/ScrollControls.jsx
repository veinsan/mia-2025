"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollControls({ scrollRef, itemCount }) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const showButtons = itemCount > 5;

  useEffect(() => {
    if (!scrollRef.current || !showButtons) return;

    const el = scrollRef.current;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 5);
      setAtEnd(el.scrollLeft >= max - 5);
    };

    el.addEventListener("scroll", update, { passive: true });
    update();

    return () => el.removeEventListener("scroll", update);
  }, [scrollRef, itemCount, showButtons]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const firstCard = container.querySelector("a");
    if (!firstCard) return;
    
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24;
    const cardsToScroll = 3;
    const scrollAmount = (cardWidth + gap) * cardsToScroll;
    
    container.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  if (!showButtons) return null;

  return (
    <>
      <AnimatePresence>
        {!atStart && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2
                      w-12 h-12 rounded-full bg-white dark:bg-bg-soft
                      shadow-lg hover:shadow-xl
                      transition-all items-center justify-center
                      text-primary z-10 border border-primary/20"
            aria-label="Scroll left"
          >
            <span className="text-xl font-bold">❮</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!atEnd && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2
                       w-12 h-12 rounded-full bg-white dark:bg-bg-soft
                       shadow-lg hover:shadow-xl
                       transition-all items-center justify-center
                       text-primary z-10 border border-primary/20"
            aria-label="Scroll right"
          >
            <span className="text-xl font-bold">❯</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}