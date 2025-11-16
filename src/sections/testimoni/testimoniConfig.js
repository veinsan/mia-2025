export const TESTIMONIALS_TOP = [
  {
    text: "Tempat terbaik buat ngobrol santai abis kelas. Makanannya murah tapi enak banget!",
    name: "Ibnes",
    role: "Mahasiswa IF '22",
    rating: 5,
    date: "2 minggu lalu",
    avatar: "/assets/avatar/a1.webp",
    verified: true,
    category: "Makanan",
  },
  {
    text: "Memorable banget! tiap hari ke Tamgan, kalau rame ya lanjut ke Ganyang.",
    name: "Fira",
    role: "Mahasiswa STEI '23",
    rating: 5,
    date: "1 bulan lalu",
    avatar: "/assets/avatar/a2.webp",
    verified: true,
    category: "Suasana",
  },
  {
    text: "Suasananya khas banget, apalagi pas malam. Lampu-lampunya bikin nyaman.",
    name: "Apay",
    role: "Mahasiswa Minyak '21",
    rating: 4,
    date: "3 hari lalu",
    avatar: "/assets/avatar/a3.jpeg",
    verified: true,
    category: "Suasana",
  },
];

export const TESTIMONIALS_BOTTOM = [
  {
    text: "Tempat yang gak pernah gagal buat nongkrong dan curhat random.",
    name: "Raharjo",
    role: "Mahasiswa Sipil '20",
    rating: 5,
    date: "1 minggu lalu",
    avatar: "/assets/avatar/a4.gif",
    verified: true,
    category: "Hangout",
  },
  {
    text: "Makanannya enak, pelayannya ramah. Feels like home!",
    name: "Paijo",
    role: "Mahasiswa Mesin '21",
    rating: 4,
    date: "5 hari lalu",
    avatar: "/assets/avatar/a5.jpg",
    verified: true,
    category: "Pelayanan",
  },
  {
    text: "Tempat favorit buat nugas bareng temen. Kopinya mantap!",
    name: "Athan",
    role: "Mahasiswa Tambang '23",
    rating: 5,
    date: "2 minggu lalu",
    avatar: "/assets/avatar/a6.jpg",
    verified: true,
    category: "Kafe",
  },
];

export const ANIMATION_CONFIG = {
  FADE_UP: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  STAGGER: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  },
  CARD_HOVER: {
    scale: 1.03,
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  STAT_NUMBER: {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  },
};

import { TrendingUp, Star, Verified } from "lucide-react";
export const STATS = [
  { label: "Review Positif", value: "500+", icon: TrendingUp },
  { label: "Rating Rata-rata", value: "4.8", icon: Star },
  { label: "Mahasiswa Setia", value: "1.2K+", icon: Verified },
];