/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Production optimizations
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;