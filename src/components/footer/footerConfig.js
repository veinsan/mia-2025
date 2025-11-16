export const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const NAV_LINKS = [
  { name: "Beranda", link: "#" },
  { name: "Rekomendasi", link: "#topResto" },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", link: "https://www.instagram.com/gelapnyawang.culinary/", external: true },
  { name: "Facebook", link: "https://www.facebook.com", external: true },
  { name: "Tiktok", link: "https://www.tiktok.com", external: true },
];