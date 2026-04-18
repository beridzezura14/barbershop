import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const bodyFont = Noto_Sans_Georgian({
  variable: "--font-body",
  subsets: ["latin", "georgian"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Noto_Serif_Georgian({
  variable: "--font-display",
  subsets: ["latin", "georgian"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="bg-[#111111] font-[family:var(--font-body)]">
        <Header />
        <div>
          {children}
        </div>  
      </body>
    </html>
  );
}
