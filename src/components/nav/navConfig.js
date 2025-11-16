export const MOTION_CONFIG = {
  navContainer: { duration: 0.4, ease: "easeInOut" },
  iconToggle: { duration: 0.6, ease: "easeInOut" },
  drawer: { type: "spring", stiffness: 260, damping: 25 },
  fadeIcon: { duration: 0.3 },
};

export const NAV_LINKS = [
  { id: "hero", label: "Beranda", href: "#hero" },
  { id: "tentang", label: "Tentang", href: "#tentang" },
  { id: "topResto", label: "Rekomendasi", href: "#topResto" },
  { id: "testimoni", label: "Testimoni", href: "#testimoni" },
];

export const getTextColor = (inHero, darkMode) =>
  inHero || darkMode ? "text-white" : "text-text-primary";

export const getButtonBase = (inHero, darkMode) => {
  const base =
    "rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center";
  if (inHero) return `${base} bg-white/20 text-white`;
  if (darkMode) return `${base} bg-bg-soft text-white`;
  return `${base} bg-bg-base text-text-primary`;
};

export const getBlurFilterStyle = (blurLevel) => ({
  backdropFilter: `blur(${blurLevel}px)`,
  WebkitBackdropFilter: `blur(${blurLevel}px)`,
});