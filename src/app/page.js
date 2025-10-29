import Nav from "@/components/nav";
import Hero from "@/sections/hero";
import Tentang from "@/sections/tentang";
import TopResto from "@/sections/topResto";
import Testimoni from "@/sections/testimoni";
import Galeri from "@/sections/galeri";
import Lokasi from "@/sections/lokasi";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-light overflow-hidden">
      <Nav />
      <Hero />
      <Tentang />
      <TopResto />
      <Testimoni />
      <Galeri />
      <Lokasi />
      <Footer />
    </main>
  );
}