import Nav from "@/components/nav";
import Hero from "@/sections/hero";
import Tentang from "@/sections/tentang";
import TopResto from "@/sections/topResto";
import Testimoni from "@/sections/testimoni";
import Galeri from "@/sections/galeri";
import Lokasi from "@/sections/lokasi";
import Footer from "@/components/footer";
import BannerDirektori from "@/components/bannerDirektori";
import { UMKM_DATA } from "@/data/umkmData";

// Metadata SEO (override dari layout)
export const metadata = {
  title: "Beranda",
  description: "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi - Gelap Nyawang Culinary",
};

export default function Home() {
  return (
    <main className="bg-bg-base overflow-hidden">
      <Nav dataUMKM={UMKM_DATA} />
      
      <Hero />
      <Tentang />
      <TopResto />
      <Testimoni />
      <Galeri />
      <Lokasi />
      <BannerDirektori />
      <Footer />
    </main>
  );
}