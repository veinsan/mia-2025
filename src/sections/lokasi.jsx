export default function Lokasi() {
  return (
    <section className="py-20 bg-white text-center px-8">
      <h2 className="text-4xl font-heading text-primary mb-8">Kunjungi Lokasi Kami</h2>
      <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto">
        <iframe
          src="https://www.google.com/maps?q=Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}