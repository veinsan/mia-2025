import Nav from "@/components/nav";
import Hero from "@/sections/hero";
import Tentang from "@/sections/tentang";
import TopResto from "@/sections/topResto";
import Testimoni from "@/sections/testimoni";
import Galeri from "@/sections/galeri";
import Lokasi from "@/sections/lokasi";
import BannerDirektori from "@/sections/banner";
import Footer from "@/components/footer";
import { UMKM_DATA } from "@/data/umkmData";

export default function Home() {
  return (
    <main className="bg-bg-base overflow-hidden transition-theme">
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