// Konfigurasi utama Next.js untuk project ini.
// File ini menggunakan format ESM, jadi semua konfigurasi diekspor
// menggunakan `export default`, bukan `module.exports`.

const nextConfig = {
  // Optimasi import package tertentu supaya build lebih efisien.
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Konfigurasi image bawaan Next.js (Image Optimization API).
  images: {
    formats: ['image/avif', 'image/webp'],       // format modern
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // ukuran responsif
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,                          // caching 60 detik
  },

  // Mengaktifkan kompresi untuk performa.
  compress: true,

  // Mode strict React untuk membantu deteksi error saat dev.
  reactStrictMode: true,

  // Menghapus header "X-Powered-By: Next.js" untuk security.
  poweredByHeader: false,

  // Minifikasi dengan SWC (lebih cepat).
  swcMinify: true,

  // Nonaktifkan source maps di production (menghemat ukuran).
  productionBrowserSourceMaps: false,
};

// HARUS pakai `export default` karena ini file ESM.
export default nextConfig;