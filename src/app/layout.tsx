import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import CookieConsent from "@/components/Common/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hardal.de"),
  title: {
    default: "Hardal Restaurant | Türkische Küche in Hamburg",
    template: "%s | Hardal Restaurant Hamburg",
  },
  description:
    "Erleben Sie authentische türkische Küche im Herzen von Hamburg. Von traditionellem Frühstück bis hin zu eleganten Abendessen-Optionen bringen wir Ihnen die reichhaltigen Aromen der Türkei.",
  keywords: [
    "Türkisches Restaurant Hamburg",
    "Hardal Restaurant",
    "Türkische Küche",
    "Frühstück Hamburg",
    "Brunch Hamburg",
    "Abendessen Hamburg",
    "Catering Hamburg",
    "Türkisches Essen",
    "Restaurant Hamburg",
  ],
  authors: [{ name: "Hardal Restaurant" }],
  creator: "Hardal Restaurant",
  publisher: "Hardal Restaurant",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://hardal.de",
    languages: {
      "de-DE": "https://hardal.de",
      "en-US": "https://hardal.de/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://hardal.de",
    siteName: "Hardal Restaurant",
    title: "Hardal Restaurant | Türkische Küche in Hamburg",
    description:
      "Authentische türkische Küche im Herzen von Hamburg. Erleben Sie traditionelles Frühstück, Brunch und Abendessen in gemütlicher Atmosphäre.",
    images: [
      {
        url: "/images/package6.jpg",
        width: 1200,
        height: 630,
        alt: "Hardal Restaurant Hamburg",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardal Restaurant | Türkische Küche in Hamburg",
    description:
      "Authentische türkische Küche im Herzen von Hamburg. Erleben Sie traditionelles Frühstück, Brunch und Abendessen in gemütlicher Atmosphäre.",
    images: ["/images/package6.jpg"],
    creator: "@HardalRestaurant",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
