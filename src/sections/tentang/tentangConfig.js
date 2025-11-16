export const ANIMATION_CONFIG = {
  CONTAINER: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  },
  ITEM: {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  CARD_HOVER: {
    scale: 1.02,
    y: -3,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  TEXT_GLOW: {
    textShadow: [
      "0 0 0px rgb(229 118 33 / 0)",
      "0 0 16px rgb(229 118 33 / 0.4)",
      "0 0 0px rgb(229 118 33 / 0)",
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
  WAVE: { duration: 14, ease: "easeInOut" },
};

export const BLOB_CONFIG = [
  {
    class: "left-[5%] top-[8%]",
    size: "w-40 h-40",
    color: "bg-primary/8",
    duration: 7,
  },
  {
    class: "right-[8%] top-[25%]",
    size: "w-48 h-48",
    color: "bg-accent/8",
    duration: 8,
  },
  {
    class: "left-1/2 bottom-[15%] -translate-x-1/2",
    size: "w-44 h-44",
    color: "bg-secondary/8",
    duration: 7.5,
  },
];

export const CARDS_DATA = [
  {
    id: "rumahan",
    title: "Rasa Autentik",
    desc: "Cita rasa rumahan Bandung yang hangat dan bikin kangen.",
    stat: "4.8/5 dari 500+ pengunjung",
    img: "/assets/tentang/t1.jpg",
  },
  {
    id: "lokal",
    title: "Dari Komunitas Lokal",
    desc: "Kuliner yang tumbuh dari komunitas Gelap Nyawang sendiri.",
    stat: "20+ UMKM terlibat",
    img: "/assets/tentang/t2.jpg",
  },
  {
    id: "cepat",
    title: "Cepat & Nyaman",
    desc: "Tempat singgah yang pas buat makan cepat atau rehat sebentar.",
    stat: "Rata-rata servis < 7 menit",
    img: "/assets/tentang/t3.jpg",
  },
];