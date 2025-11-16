import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Gelap Nyawang Culinary",
  description: "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!",
  openGraph: {
    title: "Gelap Nyawang Culinary",
    description: "Direktori UMKM Kuliner di Gelap Nyawang ITB",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#FFF8F0" },
  { media: "(prefers-color-scheme: dark)", color: "#0A0503" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className="bg-bg-base text-text-primary antialiased"
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