"use client";

import { motion } from "framer-motion";
import { 
  MapPin, Phone, Clock, CreditCard, 
  Star, CheckCircle2
} from "lucide-react";

export default function InfoSection({ umkm }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-6">
        ℹ️ Informasi Detail
      </h2>

      <div className="space-y-5">
        <InfoItem 
          icon={<MapPin className="text-primary" size={22} />}
          label="Alamat"
          value={umkm.alamat}
        />

        {umkm.noTelp && umkm.noTelp !== "-" && (
          <InfoItem 
            icon={<Phone className="text-primary" size={22} />}
            label="No. Telepon"
            value={
              <a href={`tel:${umkm.noTelp}`} className="text-primary hover:underline">
                {umkm.noTelp}
              </a>
            }
          />
        )}

        {umkm.jamBuka && (
          <InfoItem 
            icon={<Clock className="text-primary" size={22} />}
            label="Jam Operasional"
            value={umkm.jamBuka}
          />
        )}

        <InfoItem 
          icon={<CreditCard className="text-primary" size={22} />}
          label="Range Harga"
          value={umkm.rangeHarga}
        />

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
                    className={
                      i < Math.floor(umkm.rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="font-bold text-text-secondary">{umkm.rating} / 5</span>
            </div>
          </div>
        </div>

        {umkm.fasilitas && umkm.fasilitas.length > 0 && (
          <div className="flex gap-4">
            <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={22} />
            <div>
              <p className="font-semibold text-text-secondary mb-2">Fasilitas</p>
              <div className="flex flex-wrap gap-2">
                {umkm.fasilitas.map((f, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-bg-soft dark:bg-bg-warm rounded-full text-xs font-medium text-text-secondary"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {umkm.metodePembayaran && umkm.metodePembayaran.length > 0 && (
          <InfoItem 
            icon={<CreditCard className="text-primary" size={22} />}
            label="Metode Pembayaran"
            value={umkm.metodePembayaran.join(", ")}
          />
        )}

        <hr className="border-border-light my-6" />

        <div className="bg-bg-base dark:bg-bg-warm rounded-xl p-5">
          <p className="text-sm text-text-muted">
            💡 <strong>Tips:</strong> Datang saat jam makan siang atau malam untuk suasana khas mahasiswa Gelap Nyawang. Jangan lupa coba menu andalan mereka!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <p className="font-semibold text-text-secondary mb-1">{label}</p>
        <div className="text-text-muted">{value}</div>
      </div>
    </div>
  );
}