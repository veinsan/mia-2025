"use client";

import { Navigation, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { MAPS_DIRECT_URL } from "./lokasiConfig";

export default function LocationActions({ showToast }) {
  const shareLocation = () => {
    if (navigator.share) {
      navigator.share({ title: "Gelap Nyawang, Bandung", url: MAPS_DIRECT_URL });
    } else {
      showToast("Share tidak didukung di perangkat ini.");
    }
  };

  const saveLocation = () => {
    navigator.clipboard.writeText(MAPS_DIRECT_URL);
    showToast("✓ Lokasi disimpan ke clipboard!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 mt-8"
    >
      <a
        href={MAPS_DIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full shadow-lg font-semibold hover:bg-primary/90"
      >
        <Navigation size={18} />
        Petunjuk Arah
      </a>

      <button
        onClick={shareLocation}
        className="inline-flex items-center gap-2 px-6 py-3 bg-bg-base dark:bg-bg-soft text-text-primary dark:text-text-secondary rounded-full shadow-md hover:bg-bg-soft dark:hover:bg-bg-warm"
      >
        <Share2 size={18} />
        Bagikan Lokasi
      </button>

      <button
        onClick={saveLocation}
        className="inline-flex items-center gap-2 px-6 py-3 bg-bg-base dark:bg-bg-soft text-text-primary dark:text-text-secondary rounded-full shadow-md hover:bg-bg-soft dark:hover:bg-bg-warm"
      >
        <Bookmark size={18} />
        Simpan
      </button>
    </motion.div>
  );
}