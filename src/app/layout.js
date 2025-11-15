/* ------------------------------------------------------------
   GLOBAL STYLES & THEME PROVIDER
   - globals.css: berisi variable warna, utilities, dan base styling
   - next-themes: mengatur light/dark mode dengan class switching
------------------------------------------------------------ */
import "./globals.css";
import { ThemeProvider } from "next-themes";


/* ------------------------------------------------------------
   METADATA — digunakan Next.js untuk SEO dan OpenGraph
------------------------------------------------------------ */
export const metadata = {
  title: "Gelap Nyawang Culinary",
  description:
    "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!",

  openGraph: {
    title: "Gelap Nyawang Culinary",
    description: "Direktori UMKM Kuliner di Gelap Nyawang ITB",
    type: "website",
    locale: "id_ID",
  },
};


/* ------------------------------------------------------------
   VIEWPORT SETTINGS — kontrol scaling pada perangkat mobile
------------------------------------------------------------ */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


/* ------------------------------------------------------------
   THEME COLOR — warna tab browser berdasarkan mode tema
------------------------------------------------------------ */
export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#FFF8F0" },
  { media: "(prefers-color-scheme: dark)", color: "#0A0503" },
];


/* ------------------------------------------------------------
   ROOT LAYOUT
   - Membungkus seluruh halaman dalam ThemeProvider
   - suppressHydrationWarning untuk mencegah mismatch saat theme load
------------------------------------------------------------ */
export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className="bg-bg-base text-text-primary antialiased"
        suppressHydrationWarning
      >
        {/* ThemeProvider mengatur class "light" / "dark" */}
        <ThemeProvider
          attribute="class"          // Mode dark diatur via class .dark
          defaultTheme="light"        // Default: light mode
          enableSystem={false}        // Tidak mengikuti system theme
          disableTransitionOnChange={false}  // Biarkan animasi theme berjalan normal
        >
          {/* Seluruh halaman akan dirender di sini */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}