import type { Metadata, Viewport } from "next";
import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";
import AnimationObserver from "./components/AnimationObserver";
import Header from "./components/Header";
import { LanguageProvider } from "./components/LanguageProvider";
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

export const metadata: Metadata = {
  title: "BarberShop | Premium Barber Studio in Tbilisi",
  icons: {
    icon: "/tab-logo.jpeg",
  },
  description:
    "Premium barber studio in Tbilisi offering sharp haircuts, beard grooming, and refined booking-focused service in Georgian and English.",
  keywords: [
    "barber shop",
    "barber Tbilisi",
    "haircut Tbilisi",
    "beard grooming",
    "barbershop Georgia",
  ],
  openGraph: {
    title: "BarberShop | Premium Barber Studio in Tbilisi",
    description:
      "Sharp cuts, beard care, and a premium barber experience in Tbilisi.",
    type: "website",
    locale: "ka_GE",
  },
  twitter: {
    card: "summary_large_image",
    title: "BarberShop | Premium Barber Studio in Tbilisi",
    description:
      "Sharp cuts, beard care, and a premium barber experience in Tbilisi.",
  },
  alternates: {
    languages: {
      ka: "/",
      en: "/?lang=en",
    },
  },
  category: "beauty",
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="bg-[#111111] font-[family:var(--font-body)]">
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-md focus:bg-[#b89563] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
          >
            Skip to content
          </a>
          <AnimationObserver />
          <Header />
          <div>{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
