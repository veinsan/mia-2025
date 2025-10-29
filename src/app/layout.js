import "./globals.css";

export const metadata = {
  title: "Gelap Nyawang",
  description: "Jelajahi kuliner legendaris di kawasan Gelap Nyawang Bandung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}