import Nav from "@/components/Nav";
import Hero from "@/sections/hero";
import Tentang from "@/sections/tentang";
import TopResto from "@/sections/topResto";
import CaraEksplor from "@/sections/caraEksplor";
import Testimoni from "@/sections/testimoni";
import Galeri from "@/sections/galeri";
import Lokasi from "@/sections/lokasi";
import BannerDirektori from "@/sections/banner";
import Footer from "@/components/Footer";
import { UMKM_DATA } from "@/data/umkmData";

export default function Home() {
  return (
    <main className="bg-bg-base overflow-hidden transition-theme">
      <Nav dataUMKM={UMKM_DATA} />
      <Hero />
      <Tentang />
      <TopResto />
      <CaraEksplor />
      <Testimoni />
      <Galeri />
      <Lokasi />
      <BannerDirektori />
      <Footer />
    </main>
  );
}