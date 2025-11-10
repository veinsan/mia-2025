import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Gelap Nyawang Culinary",
  description: "Jelajahi kuliner di kawasan Gelap Nyawang Bandung",
};

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