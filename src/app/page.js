import Nav from "@/components/nav/Nav";
import Hero from "@/sections/hero/Hero";
import Tentang from "@/sections/tentang/Tentang";
import TopResto from "@/sections/topResto/TopResto";
import CaraEksplor from "@/sections/caraEksplor/CaraEksplor";
import Testimoni from "@/sections/testimoni/Testimoni";
import Galeri from "@/sections/galeri/Galeri";
import Lokasi from "@/sections/lokasi/Lokasi";
import Banner from "@/sections/banner/Banner";
import Footer from "@/components/footer/Footer";
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
      <Banner />
      <Footer />
    </main>
  );
}