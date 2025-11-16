"use client";

import FooterContent from "./FooterContent";
import ScrollToTopButton from "./ScrollToTopButton";
import GlowLine from "./GlowLine";

export default function FooterDirektori() {
  return (
    <>
      <footer className="w-full bg-[#E57621] dark:bg-[#B55610] text-white py-16 px-6 md:px-20 font-sans relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-10 pointer-events-none"
          aria-hidden="true"
        />

        <FooterContent />

        <GlowLine />
      </footer>

      <ScrollToTopButton />
    </>
  );
}