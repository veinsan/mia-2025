"use client";

import { MapPin, Clock, Car } from "lucide-react";

export default function LocationInfoGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-4xl mx-auto text-center">
      <div>
        <MapPin className="mx-auto mb-2 text-primary" size={26} />
        <p className="font-semibold text-text-primary dark:text-text-secondary">Lokasi</p>
        <p className="text-sm text-text-muted dark:text-white/70">Dekat Gerbang Belakang ITB</p>
      </div>

      <div>
        <Clock className="mx-auto mb-2 text-primary" size={26} />
        <p className="font-semibold text-text-primary dark:text-text-secondary">Jam Operasional</p>
        <p className="text-sm text-text-muted dark:text-white/70">06:00 – 01:00</p>
      </div>

      <div>
        <Car className="mx-auto mb-2 text-primary" size={26} />
        <p className="font-semibold text-text-primary dark:text-text-secondary">Akses</p>
        <p className="text-sm text-text-muted dark:text-white/70">Parkir Motor Tersedia</p>
      </div>
    </div>
  );
}