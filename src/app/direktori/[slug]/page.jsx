import { UMKM_DATA } from "@/data/umkmData";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";
import GalleryClient from "./GalleryClient.jsx";
import Link from "next/link";

export default async function DetailUMKM({ params }) {
  const { slug } = await params; 

  const umkm = UMKM_DATA.find((item) => item.slug === slug);

  if (!umkm) {
    return (
      <main className="min-h-screen bg-bg-soft text-text-primary transition-theme flex flex-col">
        <NavDirektori />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">UMKM Tidak Ditemukan</h1>
          <Link
            href="/direktori"
            className="mt-4 px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-primary/80 transition"
          >
            Kembali ke Direktori
          </Link>
        </div>
        <FooterDirektori />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-soft text-text-primary transition-theme">
      <NavDirektori />

      {/* HERO IMAGE */}
      <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden pt-20">
        <img
          src={umkm.img}
          alt={umkm.name}
          className="w-full h-full object-cover brightness-[0.8]"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* TITLE OVER HERO */}
        <div className="absolute bottom-8 left-6 md:left-12">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            {umkm.name}
          </h1>
          <p className="text-white/90 text-lg mt-2 drop-shadow">
            {umkm.short}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-[5%] py-12">

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 rounded-full bg-bg-base dark:bg-bg-warm shadow text-text-secondary text-sm font-medium">
            ⭐ {umkm.rating} / 5
          </span>
          <span className="px-4 py-2 rounded-full bg-bg-base dark:bg-bg-warm shadow text-text-secondary text-sm font-medium">
            💰 {umkm.rangeHarga}
          </span>
          <span className="px-4 py-2 rounded-full bg-bg-base dark:bg-bg-warm shadow text-text-secondary text-sm font-medium capitalize">
            🍽️ {umkm.category}
          </span>
        </div>

        {/* GALLERY */}
        {umkm.gallery && (
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-text-secondary mb-3">Galeri</h2>
            <GalleryClient images={umkm.gallery} />
          </div>
        )}

        {/* INFORMASI DETAIL */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-text-secondary mb-4">Informasi</h2>
            <div className="space-y-3 text-text-primary text-[17px] leading-relaxed">
              <p><strong>Alamat:</strong> {umkm.alamat}</p>
              {umkm.noTelp && <p><strong>No. Telp:</strong> {umkm.noTelp}</p>}
              <p><strong>Harga:</strong> {umkm.rangeHarga}</p>
            </div>
          </div>

          {/* MAP CARD */}
          <div className="bg-bg-base dark:bg-bg-soft rounded-2xl shadow-xl p-4 transition-theme">
            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                src={umkm.mapEmbed}
                width="100%"
                height="250"
                className="rounded-xl"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <a
              href={umkm.mapEmbed.replace("embed?", "")}
              target="_blank"
              className="block mt-4 w-full text-center px-5 py-3 rounded-xl 
              bg-[#E87524] text-white font-semibold shadow hover:bg-[#F79342] transition"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>

        {/* BACK BUTTON */}
        <Link
          href="/direktori"
          className="inline-block px-6 py-3 rounded-xl bg-text-secondary text-white dark:bg-primary font-semibold shadow hover:opacity-90 transition"
        >
          ← Kembali ke Direktori
        </Link>
      </section>

      <FooterDirektori />
    </main>
  );
}
