"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Phone, Clock, Wifi, Car, CreditCard, 
  Share2, Bookmark, Navigation, ExternalLink, Star,
  CheckCircle2
} from "lucide-react";
import GalleryClient from "./GalleryClient";
import Link from "next/link";

/* ------------------------------------------------------------------
   DETAIL CONTENT - Client Component dengan Full Data Integration
------------------------------------------------------------------ */
export default function DetailContent({ umkm, gallery }) {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Share functionality
  const handleShare = async (platform) => {
    const url = window.location.href;
    const text = `Check out ${umkm.name} di Gelap Nyawang!`;

    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      alert("Link berhasil disalin!");
      setShowShareMenu(false);
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank");
      setShowShareMenu(false);
    }
  };

  // Get directions
  const handleGetDirections = () => {
    const mapsUrl = umkm.mapEmbed.replace("/embed?", "/dir//");
    window.open(mapsUrl, "_blank");
  };

  // Call phone
  const handleCall = () => {
    if (umkm.noTelp && umkm.noTelp !== "-") {
      window.location.href = `tel:${umkm.noTelp}`;
    }
  };

  return (
    <section className="px-[5%] md:px-[7%] lg:px-[9%] py-12 max-w-7xl mx-auto">
      
      {/* ------------------------------------------------------------
         ACTION BUTTONS (Quick Actions)
      ------------------------------------------------------------ */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSaved(!isSaved)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                     shadow-md transition-all ${
                       isSaved
                         ? "bg-primary text-white"
                         : "bg-white dark:bg-bg-soft text-text-secondary"
                     }`}
        >
          <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
          {isSaved ? "Tersimpan" : "Simpan"}
        </motion.button>

        {/* Share Button */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                       bg-white dark:bg-bg-soft text-text-secondary shadow-md"
          >
            <Share2 size={18} />
            Bagikan
          </motion.button>

          {/* Share Menu Dropdown */}
          {showShareMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 left-0 bg-white dark:bg-bg-soft 
                         rounded-xl shadow-xl p-2 z-20 min-w-[180px]"
            >
              <button
                onClick={() => handleShare("whatsapp")}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-bg-soft 
                           dark:hover:bg-bg-warm transition-colors text-sm"
              >
                📱 WhatsApp
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-bg-soft 
                           dark:hover:bg-bg-warm transition-colors text-sm"
              >
                🐦 Twitter
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-bg-soft 
                           dark:hover:bg-bg-warm transition-colors text-sm"
              >
                👍 Facebook
              </button>
              <hr className="my-1 border-border-light" />
              <button
                onClick={() => handleShare("copy")}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-bg-soft 
                           dark:hover:bg-bg-warm transition-colors text-sm"
              >
                🔗 Salin Link
              </button>
            </motion.div>
          )}
        </div>

        {/* Call Button */}
        {umkm.noTelp && umkm.noTelp !== "-" && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                       bg-green-500 text-white shadow-md"
          >
            <Phone size={18} />
            Hubungi
          </motion.button>
        )}

        {/* Directions Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetDirections}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                     bg-blue-500 text-white shadow-md"
        >
          <Navigation size={18} />
          Petunjuk Arah
        </motion.button>
      </motion.div>

      {/* ------------------------------------------------------------
         GALLERY SECTION
      ------------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-4 flex items-center gap-2">
          📸 Galeri Foto
        </h2>
        <GalleryClient images={gallery} name={umkm.name} />
      </motion.div>

      {/* ------------------------------------------------------------
         INFO GRID (2 Columns: Details + Map)
      ------------------------------------------------------------ */}
      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        
        {/* LEFT COLUMN: Detailed Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-6 flex items-center gap-2">
            ℹ️ Informasi Detail
          </h2>

          <div className="space-y-5">
            {/* Alamat */}
            <div className="flex gap-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="font-semibold text-text-secondary mb-1">Alamat</p>
                <p className="text-text-muted leading-relaxed">{umkm.alamat}</p>
              </div>
            </div>

            {/* No Telepon */}
            {umkm.noTelp && umkm.noTelp !== "-" && (
              <div className="flex gap-4">
                <Phone className="text-primary flex-shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-text-secondary mb-1">No. Telepon</p>
                  <a 
                    href={`tel:${umkm.noTelp}`}
                    className="text-primary hover:underline"
                  >
                    {umkm.noTelp}
                  </a>
                </div>
              </div>
            )}

            {/* ✅ NEW: Jam Buka */}
            {umkm.jamBuka && (
              <div className="flex gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-text-secondary mb-1">Jam Operasional</p>
                  <p className="text-text-muted">{umkm.jamBuka}</p>
                </div>
              </div>
            )}

            {/* Range Harga */}
            <div className="flex gap-4">
              <CreditCard className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="font-semibold text-text-secondary mb-1">Range Harga</p>
                <p className="text-text-muted">{umkm.rangeHarga}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-4">
              <Star className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="font-semibold text-text-secondary mb-1">Rating</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < Math.floor(umkm.rating)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-text-secondary">
                    {umkm.rating} / 5
                  </span>
                </div>
              </div>
            </div>

            {/* ✅ NEW: Fasilitas */}
            {umkm.fasilitas && umkm.fasilitas.length > 0 && (
              <div className="flex gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-text-secondary mb-2">Fasilitas</p>
                  <div className="flex flex-wrap gap-2">
                    {umkm.fasilitas.map((f, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-bg-soft dark:bg-bg-warm rounded-full 
                                   text-xs font-medium text-text-secondary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ✅ NEW: Metode Pembayaran */}
            {umkm.metodePembayaran && umkm.metodePembayaran.length > 0 && (
              <div className="flex gap-4">
                <CreditCard className="text-primary flex-shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-text-secondary mb-1">Metode Pembayaran</p>
                  <p className="text-text-muted">
                    {umkm.metodePembayaran.join(", ")}
                  </p>
                </div>
              </div>
            )}

            {/* Divider */}
            <hr className="border-border-light my-6" />

            {/* Tips Section */}
            <div className="bg-bg-base dark:bg-bg-warm rounded-xl p-5">
              <p className="text-sm text-text-muted leading-relaxed">
                💡 <strong>Tips:</strong> Datang saat jam makan siang atau malam untuk 
                merasakan suasana ramai khas mahasiswa Gelap Nyawang. Jangan lupa coba 
                menu andalan mereka!
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-6 flex items-center gap-2">
            🗺️ Lokasi
          </h2>

          <div className="bg-white dark:bg-bg-soft rounded-2xl shadow-xl p-5 transition-theme">
            {/* Map Embed */}
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

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={umkm.mapEmbed.replace("/embed?", "/")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 
                          rounded-xl bg-primary text-white font-semibold shadow-lg
                          hover:bg-primary/90 transition-all"
              >
                <ExternalLink size={18} />
                Buka di Google Maps
              </a>

              <button
                onClick={handleGetDirections}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 
                           rounded-xl bg-blue-500 text-white font-semibold shadow-lg
                           hover:bg-blue-600 transition-all"
              >
                <Navigation size={18} />
                Dapatkan Petunjuk Arah
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------
         BACK BUTTON
      ------------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/direktori"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                     bg-text-secondary dark:bg-primary text-white font-semibold 
                     shadow-lg hover:opacity-90 transition-all"
        >
          <span>←</span>
          Kembali ke Direktori
        </Link>
      </motion.div>
    </section>
  );
}