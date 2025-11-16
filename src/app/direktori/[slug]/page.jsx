import { UMKM_DATA } from "@/data/umkmData";
import NavDirektori from "@/components/navDirektori/NavDirektori";
import FooterDirektori from "@/components/footerDirektori/FooterDirektori";
import HeroDetail from "@/components/detail/HeroDetail";
import GallerySection from "@/components/detail/GallerySection";
import InfoSection from "@/components/detail/InfoSection";
import MapSection from "@/components/detail/MapSection";
import BackButton from "@/components/detail/BackButton";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return UMKM_DATA.map((umkm) => ({
    slug: umkm.slug,
  }));
}

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

      <HeroDetail umkm={umkm} />

      <section className="px-[5%] md:px-[7%] lg:px-[9%] py-12">
        <GallerySection images={gallery} name={umkm.name} />

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <InfoSection umkm={umkm} />
          <MapSection umkm={umkm} />
        </div>

        <BackButton />
      </section>

      <FooterDirektori />
    </main>
  );
}