"use client";

import { ChevronDown, Phone } from "lucide-react";
import LinkSection from "./LinkSection";
import { NAV_LINKS, SOCIAL_LINKS } from "./footerConfig";

export default function MobileAccordion({ expanded, toggle }) {
  return (
    <div className="md:hidden space-y-6">
      <div>
        <button
          onClick={() => toggle("lokasi")}
          className="flex justify-between w-full font-bold text-left"
        >
          Lokasi
          <ChevronDown
            className={`transition-transform ${
              expanded === "lokasi" ? "rotate-180" : ""
            }`}
          />
        </button>
        {expanded === "lokasi" && (
          <div className="mt-2 text-white/90">
            Jl. Gelap Nyawang, Lb. Siliwangi,
            <br />
            Kota Bandung, Jawa Barat
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggle("jam")}
          className="flex justify-between w-full font-bold text-left"
        >
          Jam Buka
          <ChevronDown
            className={`transition-transform ${
              expanded === "jam" ? "rotate-180" : ""
            }`}
          />
        </button>
        {expanded === "jam" && <p className="mt-2 text-white/90">06.00 - 01.00</p>}
      </div>

      <div>
        <button
          onClick={() => toggle("nav")}
          className="flex justify-between w-full font-bold text-left"
        >
          Navigasi
          <ChevronDown
            className={`transition-transform ${
              expanded === "nav" ? "rotate-180" : ""
            }`}
          />
        </button>
        {expanded === "nav" && (
          <div className="mt-2">
            <LinkSection
              title=""
              links={NAV_LINKS}
              ariaLabel="Footer navigation mobile"
            />
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggle("sosmed")}
          className="flex justify-between w-full font-bold text-left"
        >
          Media Sosial
          <ChevronDown
            className={`transition-transform ${
              expanded === "sosmed" ? "rotate-180" : ""
            }`}
          />
        </button>
        {expanded === "sosmed" && (
          <div className="mt-2">
            <LinkSection title="" links={SOCIAL_LINKS} ariaLabel="Social media mobile" />
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggle("kontak")}
          className="flex justify-between w-full font-bold text-left"
        >
          Kontak
          <ChevronDown
            className={`transition-transform ${
              expanded === "kontak" ? "rotate-180" : ""
            }`}
          />
        </button>
        {expanded === "kontak" && (
          <p className="mt-2 flex items-center gap-2">
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
        )}
      </div>
    </div>
  );
}