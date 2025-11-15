/*
  Konfigurasi PostCSS untuk project ini.
  Dipakai oleh build system Next.js untuk memproses Tailwind
  dan menambahkan prefix CSS otomatis demi kompatibilitas browser.
*/

module.exports = {
  plugins: {
    tailwindcss: {},   // memproses utility Tailwind
    autoprefixer: {},  // menambah vendor prefix otomatis (Safari, Firefox, dll)
  },
};