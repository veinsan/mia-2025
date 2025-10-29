export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#E87722] to-[#A23B00] text-[#F6E1C3] py-16 px-6 md:px-20 font-manrope">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8 md:gap-0">
        {/* Logo Gelap Nyawang */}
        <div className="order-1 md:order-1 flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-auto mb-4 md:mb-0">
          <img src="/assets/logo.png" alt="Gelap Nyawang Logo" className="w-32 md:w-52" />
        </div>

        {/* Deskripsi */}
        <div className="order-3 md:order-2 w-full md:w-2/4 flex flex-col items-center md:items-start md:ml-1">
          <p className="text-base md:text-base leading-relaxed text-center md:text-left max-w-xs md:max-w-md mx-auto md:mx-0 mb-2 md:mb-0 text-[#F6E1C3]">
            Gelap Nyawang Culinary, spot kuliner dekat ITB yang selalu rame anak kampus. Dari jajanan sederhana sampai kafe ber-wifi, semua ada di sini buat nemenin ngobrol, nugas, atau sekadar nongkrong santai.          </p>
        </div>

        {/* Logo MIA 2025 */}
        <div className="order-2 md:order-3 flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-auto mb-4 md:mb-0">
          <img src="/assets/mia2025.png" alt="MIA 2025 Logo" className="w-32 md:w-40 md:ml-1" />
        </div>
      </div>

      {/* Garis */}
      <hr className="border-[#F6E1C3] border-opacity-30 mb-12" />

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 text-base md:text-lg mb-12 text-center md:text-left">
        <div>
          <h4 className="font-bold mb-3 text-[#F6E1C3]">Lokasi</h4>
          <p>
            Jl. Gelap Nyawang, Lb. Siliwangi,
            <br />
            Kecamatan Coblong, Kota Bandung,
            <br />
            Jawa Barat 40132
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-[#F6E1C3]">Jam Buka</h4>
          <p>06.00 AM - 01.00 AM</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-[#F6E1C3]">Navigasi</h4>
          <p>
            <a href="#" className="hover:text-[#F4A261] transition">Beranda</a>
          </p>
          <p>
            <a href="#menu" className="hover:text-[#F4A261] transition">Menu</a>
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-[#F6E1C3]">Media Sosial</h4>
          <p>
            <a href="https://www.instagram.com/gelapnyawang.culinary/"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-[#F4A261] transition">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/gelapnyawang.culinary/"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-[#F4A261] transition">
              Facebook
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/gelapnyawang.culinary/"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-[#F4A261] transition">
              Tiktok
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-[#F6E1C3]">Kontak</h4>
          <p>
            <a href="https://wa.me/6289656054453"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-[#F4A261] transition">
              Whatsapp
            </a>
          </p>
        </div>
      </div>

      <hr className="border-[#F6E1C3] border-opacity-30 mb-8" />

      <div className="max-w-7xl mx-auto text-center text-lg text-[#F6E1C3] text-opacity-90">
        &copy; 2025 Gelap Nyawang. Website ini dibuat khusus untuk Web Development dalam rangkaian Multimedia In Action (MIA) 2025.
        <br />
        Desain, ilustrasi, dan konten dikembangkan sebagai bagian dari karya lomba.
      </div>
    </footer>
  );
}