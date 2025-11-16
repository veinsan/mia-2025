"use client";

import { Phone } from "lucide-react";
import LinkSection from "./LinkSection";
import { NAV_LINKS, SOCIAL_LINKS } from "./footerConfig";

export default function DesktopGrid() {
  return (
    <div className="hidden md:grid max-w-7xl mx-auto grid-cols-5 gap-16 mb-12 text-base">
      <div>
        <h3 className="font-bold mb-3">Lokasi</h3>
        <address className="not-italic">
          Jl. Gelap Nyawang, Lb. Siliwangi,
          <br />
          Kota Bandung, Jawa Barat
        </address>
      </div>

      <div>
        <h3 className="font-bold mb-3">Jam Buka</h3>
        <p>06.00 - 01.00</p>
      </div>

      <LinkSection title="Navigasi" links={NAV_LINKS} ariaLabel="Footer navigation" />
      <LinkSection title="Media Sosial" links={SOCIAL_LINKS} ariaLabel="Social media" />

      <div>
        <h3 className="font-bold mb-3">Kontak</h3>
        <p className="flex items-center gap-2">
          <Phone size={16} />
          <a
            href="https://wa.me/6289656054453"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            +62 896-5605-4453
          </a>
        </p>
      </div>
    </div>
  );
}