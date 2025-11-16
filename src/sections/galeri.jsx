"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

/* =========================================================
   GALERI DATA - Enhanced dengan better metadata
   ========================================================= */
const GALERI_PHOTOS = [
  {
    src: "/assets/galeri/1.jpeg",
    text: "Warung kecil yang nyimpen cerita anak kos tiap malam.",
    location: "Black Romantic",
    tags: ["#GelapNyawang", "#KulinerMalam"],
    aspectRatio: "4/3",
  },
  {
    src: "/assets/galeri/2.jpeg",
    text: "Dari gelas kopi sampai suara gerobak, semuanya punya nostalgia",
    location: "Dapur Laut",
    tags: ["#Nongkrong", "#KopiMalam"],
    aspectRatio: "4/3",
  },
  {
    src: "/assets/galeri/3.jpeg",
    text: "Setiap foto punya suasana; meriah, hangat, dan penuh tawa",
    location: "Kedai BWJ",
    tags: ["#Mahasiswa", "#LateNight"],
    aspectRatio: "4/3",
  },
  {
    src: "/assets/galeri/4.jpeg",
    text: "Dapur sederhana yang hidup dari obrolan dan pesanan yang gak pernah berhenti",
    location: "Ayam Besthal",
    tags: ["#DapurPanas", "#StreetFood"],
    aspectRatio: "4/3",
  },
  {
    src: "/assets/galeri/5.jpeg",
    text: "Rasa yang nempel karena dibuat pelan-pelan, bukan buru-buru",
    location: "Angkringan Mas Jo",
    tags: ["#MasakanRumahan"],
    aspectRatio: "4/3",
  },
  {
    src: "/assets/galeri/6.jpeg",
    text: "Suasana malam Gelap Nyawang itu beda—hangat, riuh, dan ngangenin",
    location: "Warnas Doa Mande",
    tags: ["#NightVibes", "#Bandung"],
    aspectRatio: "4/3",
  },
  {
    src: "/assets/galeri/7.jpeg",
    text: "Tempat singgah pas lagi capek kuliah. Ayamnya unik, suasananya bikin betah",
    location: "Ayam Cola Kabita HC",
    tags: ["#Nongkies", "#GenZ"],
    aspectRatio: "4/3",
  },
  {
    src: "/assets/galeri/8.jpeg",
    text: "SDari wangi bebek gorengnya aja udah bikin lapar lagi. Suasana malamnya ngeblend sama obrolan ringan",
    location: "Bebek Stallone",
    tags: ["#Makan", "#Lapar"],
    aspectRatio: "4/3",
  },
];

/* =========================================================
   ANIMATION CONFIG
   ========================================================= */
const ANIMATION_CONFIG = {
  CARD: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  STAGGER: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  },
  OVERLAY: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
  LIGHTBOX: {
    backdrop: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    },
    content: {
      hidden: { opacity: 0, scale: 0.95, y: 20 },
      show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      },
    },
  },
};

/* =========================================================
   GALLERY CARD - Fully Responsive dengan better hover
   ========================================================= */
const GalleryCard = ({ item, index, onClick, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      variants={ANIMATION_CONFIG.CARD}
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      className="
        group relative overflow-hidden 
        rounded-xl sm:rounded-2xl
        cursor-pointer
        bg-gray-100 dark:bg-gray-800
        transition-all duration-300
        hover:shadow-2xl hover:-translate-y-1
      "
      style={{
        aspectRatio: "4/3", // FIXED: tidak lagi square
      }}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
      aria-label={`Lihat foto ${item.location}`}
    >
      {/* Image dengan lazy loading */}
      <Image
        src={item.src}
        alt={`${item.location} - ${item.text}`}
        fill
        className="
          object-cover 
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading={index < 3 ? "eager" : "lazy"}
        priority={index < 2}
        quality={85}
      />

      {/* Gradient overlay subtle (always visible) */}
      <div className="
        absolute inset-0 
        bg-gradient-to-t from-black/60 via-black/0 to-black/0
        pointer-events-none
      " />

      {/* Location badge (hilang saat hover) */}
      <motion.div
        animate={{
          opacity: isHovered && !isMobile ? 0 : 1,
          y: isHovered && !isMobile ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="
          absolute bottom-3 left-3 right-3
          flex items-center justify-between
          pointer-events-none
          z-10
        "
      >
        <span className="
          text-white font-semibold 
          text-xs sm:text-sm
          bg-black/40 backdrop-blur-sm
          px-2 sm:px-3 py-1 rounded-full
          border border-white/20
          truncate
          max-w-[75%]
        ">
          📍 {item.location}
        </span>

        <Maximize2 
          size={18} 
          className="text-white drop-shadow-lg" 
        />
      </motion.div>

      {/* Hover overlay (full info) - Desktop only */}
      <AnimatePresence>
        {(isHovered && !isMobile) && (
          <motion.div
            variants={ANIMATION_CONFIG.OVERLAY}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="
              absolute inset-0 
              bg-gradient-to-br from-primary/95 via-primary/90 to-primary-dark/95
              backdrop-blur-sm
              flex flex-col justify-center items-center 
              text-white text-center 
              px-4 sm:px-6
              pointer-events-none
              opacity-30
            "
          >
            {/* Logo */}
            <motion.img
              src="/assets/logo.png"
              alt=""
              width={80}
              height={80}
              className="w-14 sm:w-16 md:w-20 mb-3 drop-shadow-lg"
              aria-hidden="true"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            />

            {/* Text content */}
            <motion.p 
              className="
                font-medium 
                text-xs sm:text-sm md:text-base
                leading-relaxed 
                mb-2
                line-clamp-3
                drop-shadow-md
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {item.text}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-1 sm:gap-2 justify-center mt-2 max-w-full px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {item.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="
                    text-[10px] sm:text-xs 
                    bg-white/20 backdrop-blur-sm
                    px-2 py-0.5 rounded-full
                    border border-white/30
                    whitespace-nowrap
                  "
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

/* =========================================================
   LIGHTBOX MODAL - Production-grade dengan navigation
   ========================================================= */
const Lightbox = ({ 
  photos, 
  currentIndex, 
  onClose, 
  onNavigate 
}) => {
  const current = photos[currentIndex];
  const [imageLoaded, setImageLoaded] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNavigate]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        variants={ANIMATION_CONFIG.LIGHTBOX.backdrop}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="
          fixed inset-0 z-[100] 
          bg-black/95 backdrop-blur-md
          flex items-center justify-center
          p-4 sm:p-6
        "
        onClick={onClose}
      >
        {/* Close button - Prominent */}
        <motion.button
          onClick={onClose}
          className="
            absolute top-4 right-4 sm:top-6 sm:right-6
            z-10
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            bg-white/10 hover:bg-white/20
            backdrop-blur-md
            rounded-full
            text-white
            transition-all duration-200
            hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-white/50
          "
          whileTap={{ scale: 0.95 }}
          aria-label="Close gallery"
        >
          <X size={24} />
        </motion.button>

        {/* Navigation buttons - Desktop only */}
        <div className="hidden sm:block">
          {currentIndex > 0 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("prev");
              }}
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                w-12 h-12
                flex items-center justify-center
                bg-white/10 hover:bg-white/20
                backdrop-blur-md
                rounded-full
                text-white
                transition-all duration-200
                hover:scale-110
              "
              whileTap={{ scale: 0.95 }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </motion.button>
          )}

          {currentIndex < photos.length - 1 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("next");
              }}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                w-12 h-12
                flex items-center justify-center
                bg-white/10 hover:bg-white/20
                backdrop-blur-md
                rounded-full
                text-white
                transition-all duration-200
                hover:scale-110
              "
              whileTap={{ scale: 0.95 }}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </motion.button>
          )}
        </div>

        {/* Image container */}
        <motion.div
          variants={ANIMATION_CONFIG.LIGHTBOX.content}
          initial="hidden"
          animate="show"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
          className="
            relative w-full 
            max-w-5xl max-h-[85vh]
            flex flex-col items-center
          "
        >
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="
              absolute inset-0 
              bg-gray-800 animate-pulse 
              rounded-xl
            " />
          )}

          {/* Main image */}
          <img
            src={current.src}
            alt={current.text}
            className="
              max-w-full max-h-[70vh] sm:max-h-[75vh]
              object-contain 
              rounded-xl
              shadow-2xl
            "
            onLoad={() => setImageLoaded(true)}
          />

          {/* Caption card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              mt-4 sm:mt-6 
              w-full max-w-2xl
              bg-white/10 backdrop-blur-md
              border border-white/20
              rounded-xl
              p-4 sm:p-6
              text-white text-center
            "
          >
            <p className="
              font-semibold 
              text-sm sm:text-base md:text-lg
              leading-relaxed 
              mb-2
            ">
              {current.text}
            </p>

            <div className="
              flex flex-wrap items-center justify-center 
              gap-2 sm:gap-3
              text-xs sm:text-sm
              text-white/80
            ">
              <span className="
                bg-white/10 
                px-3 py-1 
                rounded-full
                border border-white/20
              ">
                📍 {current.location}
              </span>

              {current.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="
                    bg-white/10 
                    px-2 sm:px-3 py-1 
                    rounded-full
                    border border-white/20
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Counter */}
            <p className="
              mt-3 
              text-xs sm:text-sm 
              text-white/60
              font-mono
            ">
              {currentIndex + 1} / {photos.length}
            </p>
          </motion.div>
        </motion.div>

        {/* Mobile swipe hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            sm:hidden
            absolute bottom-6 left-1/2 -translate-x-1/2
            text-white/60 text-xs
            flex items-center gap-2
          "
        >
          <ChevronLeft size={16} />
          <span>Swipe untuk navigate</span>
          <ChevronRight size={16} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* =========================================================
   MAIN SECTION
   ========================================================= */
export default function Galeri() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lightbox navigation
  const handleNavigate = useCallback((direction) => {
    setLightboxIndex((prev) => {
      if (direction === "prev") {
        return Math.max(0, prev - 1);
      }
      return Math.min(GALERI_PHOTOS.length - 1, prev + 1);
    });
  }, []);

  // Touch swipe for mobile lightbox
  useEffect(() => {
    if (lightboxIndex === null || !isMobile) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) handleNavigate("next");
      if (touchEndX - touchStartX > 50) handleNavigate("prev");
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [lightboxIndex, isMobile, handleNavigate]);

  return (
    <section
      id="galeri"
      className="
        w-full 
        pt-16 sm:pt-20 md:pt-24
        pb-24 sm:pb-32 md:pb-40 
        relative overflow-hidden
        bg-gradient-to-b from-bg-gold via-bg-warm to-bg-soft
        dark:from-bg-gold dark:via-bg-warm dark:to-bg-soft
        transition-colors duration-500
      "
    >
      {/* Decorative blob */}
      <motion.div
        className="
          absolute top-1/4 right-1/4
          w-64 h-64 sm:w-96 sm:h-96
          bg-primary/5 rounded-full blur-3xl
        "
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={ANIMATION_CONFIG.STAGGER}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6"
        >
          <motion.p
            variants={ANIMATION_CONFIG.CARD}
            className="
              text-primary dark:text-accent
              font-semibold mb-2 sm:mb-3
              text-xs sm:text-sm 
              tracking-wider uppercase
            "
          >
            Dibalik Gelap Nyawang
          </motion.p>

          <motion.h2
            variants={ANIMATION_CONFIG.CARD}
            className="
              text-3xl sm:text-4xl md:text-5xl 
              font-extrabold 
              text-text-primary dark:text-text-secondary
              leading-tight
            "
          >
            Cerita dari{" "}
            <span className="text-primary dark:text-accent">
              Kehangatan
            </span>
          </motion.h2>

          <motion.p
            variants={ANIMATION_CONFIG.CARD}
            className="
              mt-3 sm:mt-4 
              text-sm sm:text-base md:text-lg
              text-text-muted dark:text-text-secondary/80
              max-w-2xl mx-auto
            "
          >
            Setiap sudut punya cerita. Dari selfie rame-rame sampai
            senyum penjual yang tulus.
          </motion.p>
        </motion.header>

        {/* Photo Grid - FIXED: Better sizing & spacing */}
        <motion.div
          variants={ANIMATION_CONFIG.STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid 
            grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            gap-3 sm:gap-4 md:gap-6
            px-4 sm:px-6 md:px-10 lg:px-16
            max-w-[1400px] mx-auto
          "
        >
          {GALERI_PHOTOS.map((item, i) => (
            <GalleryCard
              key={i}
              item={item}
              index={i}
              onClick={() => setLightboxIndex(i)}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={GALERI_PHOTOS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={handleNavigate}
        />
      )}
      
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 md:h-32
                   bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold
                   dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold
                   pointer-events-none"
      />
    </section>
  );
}