"use client";

import { motion } from "framer-motion";
import { ExternalLink, Navigation } from "lucide-react";

export default function MapSection({ umkm }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-6">
        🗺️ Lokasi
      </h2>

      <div className="bg-white dark:bg-bg-soft rounded-2xl shadow-xl p-5">
        <div className="w-full overflow-hidden rounded-xl mb-4">
          <iframe
            src={umkm.mapEmbed}
            width="100%"
            height="320"
            className="rounded-xl"
            loading="lazy"
            allowFullScreen
            title={`Peta lokasi ${umkm.name}`}
          />
        </div>

        <div className="space-y-3">

          {/* LINK 1 */}
          <a
            href={umkm.mapEmbed.replace("/embed?", "/")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={18} />
            Buka di Google Maps
          </a>

          {/* LINK 2 */}
          <a
            href={umkm.mapEmbed.replace("/embed?", "/dir//")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors"
          >
            <Navigation size={18} />
            Dapatkan Petunjuk Arah
          </a>

        </div>
      </div>
    </motion.div>
  );
}