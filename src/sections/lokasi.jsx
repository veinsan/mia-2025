"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Share2, Bookmark, Clock, Car } from "lucide-react";

/* ================================
   LOCATION DATA
   ================================ */

const MAPS_LOCATION =
  "Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132";

const MAPS_DIRECT_URL = "https://maps.app.goo.gl/kAUnsipvPasm7YzT9";

const GN_COORDS = { lat: -6.8915, lng: 107.6107 };

/* ================================
   DISTANCE CALCULATOR (Haversine)
   ================================ */

function calcDistance(coord1, coord2) {
  const R = 6371;
  const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const dLng = ((coord2.lng - coord1.lng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((coord1.lat * Math.PI) / 180) *
      Math.cos((coord2.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function Lokasi() {
  const [loaded, setLoaded] = useState(false);
  const [userDistance, setUserDistance] = useState(null);

  // 🔔 Toast state
  const [toast, setToast] = useState(null);
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  /* ================================
     GET USER LOCATION
     ================================ */
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userCoords = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          const dist = calcDistance(userCoords, GN_COORDS);
          setUserDistance(dist);
        },
        () => {},
        { enableHighAccuracy: true }
      );
    }
  }, []);

  /* ================================
     SHARE / SAVE
     ================================ */
  const shareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: "Gelap Nyawang, Bandung",
        url: MAPS_DIRECT_URL,
      });
    } else {
      showToast("Share tidak didukung di perangkat ini.");
    }
  };

  const saveLocation = () => {
    navigator.clipboard.writeText(MAPS_DIRECT_URL);
    showToast("✓ Lokasi disimpan ke clipboard!");
  };

  return (
    <section
      id="lokasi"
      className="
        w-full 
        pt-10 md:pt-12 
        pb-20 md:pb-28 
        px-6 md:px-10
        relative overflow-hidden
        bg-gradient-to-b 
        from-bg-soft via-bg-warm to-bg-gold
        dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold
      "
    >
      {/* 🔥 FIX: TOP GRADIENT Tidak Overlap */}
      <div
        className="
          absolute top-0 left-0 w-full h-20 md:h-24
          bg-gradient-to-b from-bg-soft via-bg-warm/80 to-transparent
          dark:from-bg-soft dark:via-bg-warm/80 dark:to-transparent
          pointer-events-none z-0
        "
      />

      {/* ================================
          HEADING
      ================================ */}
      <header className="relative z-10 text-center pt-20 md:pt-24 mb-10 md:mb-12">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm"
        >
          Lokasi Kami
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            text-3xl sm:text-4xl md:text-5xl font-bold 
            text-text-primary dark:text-text-secondary
          "
        >
          Kunjungi <span className="text-primary">Gelap Nyawang</span>
        </motion.h2>

        {userDistance && (
          <p className="mt-2 text-sm text-text-muted dark:text-white/70">
            📍 {userDistance.toFixed(1)} km dari lokasi Anda
          </p>
        )}
      </header>

      {/* ================================
          GOOGLE MAPS CARD
      ================================ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative 
          w-full 
          h-[400px] md:h-[500px] 
          rounded-2xl 
          overflow-hidden 
          shadow-xl 
          bg-bg-soft 
          dark:bg-bg-base
        "
      >
        {!loaded && (
          <div
            className="
              absolute inset-0 
              flex items-center justify-center 
              bg-bg-soft dark:bg-bg-base 
              z-10
            "
          >
            <div
              className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"
              role="status"
              aria-label="Loading map"
            />
          </div>
        )}

        <iframe
          src={`https://www.google.com/maps?q=${MAPS_LOCATION}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="w-full h-full"
          title="Lokasi Gelap Nyawang di Google Maps"
          allowFullScreen
        />
      </motion.div>

      {/* ================================
          QUICK ACTION BUTTONS
      ================================ */}
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
          className="
            inline-flex items-center gap-2
            px-6 py-3
            bg-primary text-white
            rounded-full shadow-lg
            font-semibold
            hover:bg-primary/90
          "
        >
          <Navigation size={18} />
          Petunjuk Arah
        </a>

        <button
          onClick={shareLocation}
          className="
            inline-flex items-center gap-2
            px-6 py-3
            bg-bg-base dark:bg-bg-soft
            text-text-primary dark:text-text-secondary
            rounded-full shadow-md
            hover:bg-bg-soft dark:hover:bg-bg-warm
            transition-colors
          "
        >
          <Share2 size={18} />
          Bagikan Lokasi
        </button>

        <button
          onClick={saveLocation}
          className="
            inline-flex items-center gap-2
            px-6 py-3
            bg-bg-base dark:bg-bg-soft
            text-text-primary dark:text-text-secondary
            rounded-full shadow-md
            hover:bg-bg-soft dark:hover:bg-bg-warm
            transition-colors
          "
        >
          <Bookmark size={18} />
          Simpan
        </button>
      </motion.div>

      {/* ================================
          INFO GRID
      ================================ */}
      <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-4xl mx-auto text-center">
        <div>
          <MapPin className="mx-auto mb-2 text-primary" size={26} />
          <p className="font-semibold text-text-primary dark:text-text-secondary">
            Lokasi
          </p>
          <p className="text-sm text-text-muted dark:text-white/70">
            Dekat Gerbang Belakang ITB
          </p>
        </div>

        <div>
          <Clock className="mx-auto mb-2 text-primary" size={26} />
          <p className="font-semibold text-text-primary dark:text-text-secondary">
            Jam Operasional
          </p>
          <p className="text-sm text-text-muted dark:text-white/70">
            06:00 – 01:00
          </p>
        </div>

        <div>
          <Car className="mx-auto mb-2 text-primary" size={26} />
          <p className="font-semibold text-text-primary dark:text-text-secondary">
            Akses
          </p>
          <p className="text-sm text-text-muted dark:text-white/70">
            Parkir Motor Tersedia
          </p>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div
        className="
          absolute bottom-0 left-0 w-full 
          h-24 md:h-32
          bg-gradient-to-b 
          from-transparent via-bg-warm/50 to-bg-gold 
        "
      />

      {/* 🔔 TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="
              fixed top-20 left-1/2 -translate-x-1/2 z-50
              bg-green-500 text-white
              px-6 py-3 rounded-full shadow-lg
              text-sm font-medium
            "
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}