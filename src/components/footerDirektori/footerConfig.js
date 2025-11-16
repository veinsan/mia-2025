// Animasi fade-up
export const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// Static navigasi
export const NAV_LINKS = [
  { name: "Beranda", link: "/" },
  { name: "Direktori", link: "/direktori" },
];

// Static sosial media
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/gelapnyawang.culinary/",
  },
  { name: "Facebook", link: "https://www.facebook.com" },
  { name: "Tiktok", link: "https://www.tiktok.com" },
];