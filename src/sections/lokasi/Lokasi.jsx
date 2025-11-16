"use client";

import { AnimatePresence, motion } from "framer-motion";
import useUserDistance from "./useUserDistance";
import useToast from "./useToast";

import LocationHeader from "./LocationHeader";
import LocationMap from "./LocationMap";
import LocationActions from "./LocationActions";
import LocationInfoGrid from "./LocationInfoGrid";

export default function Lokasi() {
  const distance = useUserDistance();
  const { toast, showToast } = useToast();

  return (
    <section
      id="lokasi"
      className="w-full pt-10 md:pt-12 pb-20 md:pb-28 px-6 md:px-10 relative overflow-hidden bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold"
    >
      <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-b from-bg-gold via-bg-warm to-bg-soft dark:from-bg-gold dark:via-bg-warm dark:to-bg-soft pointer-events-none" />

      <LocationHeader distance={distance} />

      <LocationMap />

      <LocationActions showToast={showToast} />

      <LocationInfoGrid />

      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-transparent via-bg-warm/50 to-bg-gold pointer-events-none" />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}