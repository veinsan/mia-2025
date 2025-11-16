export const GALERI_PHOTOS = [
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

export const ANIMATION_CONFIG = {
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
    show: { opacity: 1, transition: { duration: 0.3 } },
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