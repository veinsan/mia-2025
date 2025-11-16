export default function NavLogo({ darkMode }) {
  return (
    <a href="/" className="flex items-center select-none" aria-label="Kembali ke beranda">
      <img
        src={darkMode ? "/assets/logo.png" : "/assets/black.png"}
        alt="Gelap Nyawang Logo"
        className="h-8 md:h-10 transition-opacity duration-500"
      />
    </a>
  );
}