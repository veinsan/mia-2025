export default function FooterLogos() {
  return (
    <>
      <div className="flex-shrink-0">
        <img
          src="/assets/logo.png"
          alt="Gelap Nyawang Logo"
          className="w-28 md:w-36 object-contain"
        />
      </div>

      <div className="w-full md:w-2/4 flex flex-col items-center md:items-start">
        <p className="text-center md:text-left text-white/90 text-base md:text-lg max-w-md leading-relaxed">
          Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB.
          Dari warkop sampai kafe, semua hadir buat nemenin ngobrol,
          nugas, atau sekadar nyari suasana.
        </p>
      </div>

      <div className="flex-shrink-0">
        <img
          src="/assets/mia2025.png"
          alt="MIA 2025 Logo"
          className="w-32 md:w-40 object-contain"
        />
      </div>
    </>
  );
}