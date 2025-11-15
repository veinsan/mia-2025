/* ------------------------------------------------------------
   SECTION & COMPONENT IMPORTS
   Setiap bagian landing page dipisahkan sebagai section mandiri
   untuk modularitas dan maintainability.
------------------------------------------------------------ */
import Nav from "@/components/nav";
import Hero from "@/sections/hero";
import Tentang from "@/sections/tentang";
import TopResto from "@/sections/topResto";
import CaraMakan from "@/sections/caraMakan";
import Testimoni from "@/sections/testimoni";
import Galeri from "@/sections/galeri";
import Lokasi from "@/sections/lokasi";
import BannerDirektori from "@/sections/banner";
import Footer from "@/components/footer";

/* Dataset utama UMKM */
import { UMKM_DATA } from "@/data/umkmData";


/* ------------------------------------------------------------
   HOME PAGE
   - Menyusun seluruh section landing page secara berurutan.
   - <main> menggunakan variable background dan transition-theme
     untuk sinkron dengan light/dark mode dan perubahan halus.
------------------------------------------------------------ */
export default function Home() {
  return (
    <main className="bg-bg-base overflow-hidden transition-theme">
      {/* Navigation bar dengan akses data UMKM untuk fitur pencarian */}
      <Nav dataUMKM={UMKM_DATA} />

      {/* Hero section (headline + typing text + CTA) */}
      <Hero />

      {/* Penjelasan singkat tentang Gelap Nyawang */}
      <Tentang />

      {/* Rekomendasi kuliner berdasarkan UMKM yang dipilih */}
      <TopResto />

      {/* Alur atau cara menikmati kuliner di GN */}
      <CaraMakan />

      {/* Testimoni mahasiswa */}
      <Testimoni />

      {/* Galeri foto suasana */}
      <Galeri />

      {/* Peta lokasi GN di Google Maps */}
      <Lokasi />

      {/* Banner ajakan menuju direktori UMKM */}
      <BannerDirektori />

      {/* Footer akhir halaman */}
      <Footer />
    </main>
  );
}