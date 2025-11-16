export const ANIMATION_CONFIG = {
  FADE_UP: {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  },
  STEP_ITEM: {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  CHECKMARK: {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
};

export const STEPS = [
  {
    number: 1,
    icon: "Search",
    title: "Jelajahi Rekomendasi",
    subtitle: "Filter budget & suasana",
    tip: "💡 Pakai search bar cari makanan spesifik",
    color: "bg-orange-500",
  },
  {
    number: 2,
    icon: "Info",
    title: "Lihat Detail UMKM",
    subtitle: "Cek menu, harga & review",
    tip: "💡 Scroll bawah lihat jam buka & lokasi",
    color: "bg-orange-600",
  },
  {
    number: 3,
    icon: "MapPin",
    title: "Datang ke Lokasi",
    subtitle: "Navigate via Maps",
    tip: "💡 Aktifkan GPS untuk rute akurat",
    color: "bg-orange-700",
  },
];