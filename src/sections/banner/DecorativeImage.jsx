"use client";

import { motion } from "framer-motion";

export default function DecorativeImage({ src, side }) {
  return (
    <motion.img
      src={src}
      alt=""
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`
        hidden lg:block
        absolute 
        ${side === "left" ? "-left-[285px]" : "-right-[300px]"}
        w-[680px] lg:w-[760px]
        object-contain pointer-events-none
        opacity-80
      `}
      aria-hidden="true"
    />
  );
}