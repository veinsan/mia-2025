export const ANIMATION_CONFIG = {
  TYPING: { INTERVAL: 52, COMPLETION_DELAY: 500 },
  PARALLAX: {
    BASE_SPEED: 0.08,
    TRANSLATE_MULTIPLIER: 30,
    HORIZONTAL_OFFSET: 20,
    VIEWPORT_RATIO_BASE: 0.8,
  },
  LAYERS: {
    DURATIONS: [16, 18, 20, 17, 19, 21],
    OSCILLATE: { Y: 18, SCALE_MAX: 1.06, ROTATE_MAX: 1.2 },
    BRIGHTNESS: { MIN: 0.45, MAX: 0.85 },
    BLUR_MIN: 1,
    BLUR_MAX: 0,
  },
  ENTRANCE: {
    H1_DURATION: 1,
    P_DURATION: 1,
    P_DELAY: 0.3,
    BUTTON_DURATION: 1.2,
    BUTTON_DELAY: 0.5,
  },
  GLOW: { DURATION: 3, REPEAT: Infinity, EASE: "easeInOut" },
};

export const BG_IMAGES = [
  { src: "/assets/hero/bg1.webp", style: "left-[4%] top-[6%] max-w-[520px] w-[70vw]", priority: true },
  { src: "/assets/hero/bg2.webp", style: "left-[30%] top-[12%] max-w-[520px] w-[70vw]" },
  { src: "/assets/hero/bg3.webp", style: "right-[8%] top-[8%] max-w-[520px] w-[70vw]" },
  { src: "/assets/hero/bg4.webp", style: "left-[10%] bottom-[8%] max-w-[520px] w-[70vw]" },
  { src: "/assets/hero/bg5.webp", style: "right-[20%] bottom-[10%] max-w-[520px] w-[70vw]" },
  { src: "/assets/hero/bg6.webp", style: "right-[4%] top-[44%] max-w-[420px] w-[60vw]" },
];

export const TEXT_GLOW_EFFECT = {
  textShadow: [
    "0px 0px 0px rgb(229, 118, 33)",
    "0px 0px 20px rgba(229, 118, 33, 0.6)",
    "0px 0px 0px rgb(229, 118, 33)",
  ],
};