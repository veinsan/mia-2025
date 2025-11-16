import { UMKM_DATA } from "@/data/umkmData";
import NavDirektori from "@/components/navDirektori";
import FooterDirektori from "@/components/footerDirektori";
import GalleryClient from "./GalleryClient";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, Phone, Clock, CreditCard, 
  Navigation, ExternalLink, Star, CheckCircle2
} from "lucide-react";

/* ------------------------------------------------------------------
   GENERATE STATIC PARAMS
------------------------------------------------------------------ */
export async function generateStaticParams() {
  return UMKM_DATA.map((umkm) => ({
    slug: umkm.slug,
  }));
}

/* ------------------------------------------------------------------
   GENERATE METADATA
------------------------------------------------------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const umkm = UMKM_DATA.find((item) => item.slug === slug);

  if (!umkm) {
    return {
      title: "UMKM Tidak Ditemukan | Gelap Nyawang",
    };
  }

  return {
    title: `${umkm.name} - ${umkm.short} | Gelap Nyawang`,
    description: `${umkm.short} • Rating ${umkm.rating}/5 • ${umkm.rangeHarga} • ${umkm.alamat}`,
  };
}

/* ------------------------------------------------------------------
   HALAMAN DETAIL UMKM
------------------------------------------------------------------ */
export default async function DetailUMKM({ params }) {
  const { slug } = await params;
  const umkm = UMKM_DATA.find((item) => item.slug === slug);

  if (!umkm) {
    notFound();
  }

  const gallery = umkm.gallery && umkm.gallery.length > 0 
    ? umkm.gallery 
    : [umkm.img, umkm.img, umkm.img];

  return (
    <main className="min-h-screen bg-bg-soft dark:bg-bg-base text-text-primary transition-theme">
      <NavDirektori />

      {/* HERO SECTION */}
      <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden">
        <div className="absolute inset-0 pt-16 md:pt-20">
          <img
            src={umkm.img}
            alt={umkm.name}
            className="w-full h-full object-cover brightness-75"
            loading="eager"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold uppercase tracking-wide">
                {umkm.category}
              </span>
              
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/90">
                <span className="text-yellow-500">⭐</span>
                <span className="text-sm font-bold text-gray-900">{umkm.rating}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-3 leading-tight">
              {umkm.name}
            </h1>

            <p className="text-white/95 text-base md:text-xl drop-shadow-lg max-w-2xl">
              {umkm.short}
            </p>

            <p className="text-white/90 text-lg md:text-xl font-semibold mt-3">
              💰 {umkm.rangeHarga}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="px-[5%] md:px-[7%] lg:px-[9%] py-12 max-w-7xl mx-auto">

        {/* GALLERY */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-4 flex items-center gap-2">
            📸 Galeri Foto
          </h2>
          <GalleryClient images={gallery} name={umkm.name} />
        </div>

        {/* INFO GRID */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-6">
              ℹ️ Informasi Detail
            </h2>

            <div className="space-y-5">

              {/* Alamat */}
              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-text-secondary mb-1">Alamat</p>
                  <p className="text-text-muted">{umkm.alamat}</p>
                </div>
              </div>

              {/* Telepon */}
              {umkm.noTelp && umkm.noTelp !== "-" && (
                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-text-secondary mb-1">No. Telepon</p>
                    <a href={`tel:${umkm.noTelp}`} className="text-primary hover:underline">
                      {umkm.noTelp}
                    </a>
                  </div>
                </div>
              )}

              {/* Jam Buka */}
              {umkm.jamBuka && (
                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-text-secondary mb-1">Jam Operasional</p>
                    <p className="text-text-muted">{umkm.jamBuka}</p>
                  </div>
                </div>
              )}

              {/* Harga */}
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

              {/* Fasilitas */}
              {umkm.fasilitas && umkm.fasilitas.length > 0 && (
                <div className="flex gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-text-secondary mb-2">Fasilitas</p>
                    <div className="flex flex-wrap gap-2">
                      {umkm.fasilitas.map((f, idx) => (
                        <span key={idx} className="px-3 py-1 bg-bg-soft dark:bg-bg-warm rounded-full text-xs font-medium text-text-secondary">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Metode Pembayaran */}
              {umkm.metodePembayaran && umkm.metodePembayaran.length > 0 && (
                <div className="flex gap-4">
                  <CreditCard className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-semibold text-text-secondary mb-1">Metode Pembayaran</p>
                    <p className="text-text-muted">{umkm.metodePembayaran.join(", ")}</p>
                  </div>
                </div>
              )}

              <hr className="border-border-light my-6" />

              <div className="bg-bg-base dark:bg-bg-warm rounded-xl p-5">
                <p className="text-sm text-text-muted">
                  💡 <strong>Tips:</strong> Datang saat jam makan siang atau malam untuk suasana khas mahasiswa Gelap Nyawang. Jangan lupa coba menu andalan mereka!
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN - MAPS */}
          <div>
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
                <a
                  href={umkm.mapEmbed.replace("/embed?", "/")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-primary/90"
                >
                  <ExternalLink size={18} />
                  Buka di Google Maps
                </a>

                <a
                  href={umkm.mapEmbed.replace("/embed?", "/dir//")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600"
                >
                  <Navigation size={18} />
                  Dapatkan Petunjuk Arah
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* BACK BUTTON */}
        <Link
          href="/direktori"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-text-secondary dark:bg-primary text-white font-semibold shadow-lg hover:opacity-90"
        >
          <span>←</span>
          Kembali ke Direktori
        </Link>

      </section>

      <FooterDirektori />
    </main>
  );
}
