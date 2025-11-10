import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: {
    default: "Gelap Nyawang Culinary",
    template: "%s | Gelap Nyawang",
  },
  description: "Jelajahi kuliner legendaris di kawasan Gelap Nyawang Bandung - Direktori UMKM terlengkap untuk mahasiswa ITB dan pengunjung",
  keywords: [
    "Gelap Nyawang",
    "kuliner Bandung",
    "makanan ITB",
    "UMKM Bandung",
    "restoran mahasiswa",
    "warung makan Dago",
    "cafe Bandung",
  ],
  authors: [{ name: "Boss (Riant)" }],
  creator: "Gelap Nyawang Team",
  publisher: "Gelap Nyawang",
  metadataBase: new URL("https://gelap-nyawang.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gelap Nyawang Culinary",
    description: "Direktori kuliner terlengkap di kawasan Gelap Nyawang Bandung",
    url: "https://gelapnyawang.com",
    siteName: "Gelap Nyawang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg", // Buat image ini nanti (1200x630px)
        width: 1200,
        height: 630,
        alt: "Gelap Nyawang Culinary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gelap Nyawang Culinary",
    description: "Direktori kuliner terlengkap di kawasan Gelap Nyawang Bandung",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Isi saat submit ke Google Search Console
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E57621" },
    { media: "(prefers-color-scheme: dark)", color: "#FCBB65" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preconnect ke external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch untuk maps */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </head>
      <body 
        className="bg-bg-base text-text-primary transition-theme antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}