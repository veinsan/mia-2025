import FooterNavigation from "./FooterNavigation";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterContact from "./FooterContact";

export default function FooterGrid() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 text-base md:text-lg mb-12 text-center md:text-left">

      <div>
        <h3 className="font-bold mb-3">Lokasi</h3>
        <address className="not-italic">
          Jl. Gelap Nyawang, Lb. Siliwangi,
          <br />
          Kecamatan Coblong, Bandung
          <br />
          Jawa Barat 40132
        </address>
      </div>

      <div>
        <h3 className="font-bold mb-3">Jam Buka</h3>
        <p>06.00 AM - 01.00 AM</p>
      </div>

      <FooterNavigation />
      <FooterSocialLinks />
      <FooterContact />
    </div>
  );
}