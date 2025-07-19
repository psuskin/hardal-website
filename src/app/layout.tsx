import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import CookieConsent from "@/components/Common/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hardal Restaurant | Türkische Küche in Hamburg",
  description:
    "Erleben Sie authentische türkische Küche im Herzen von Hamburg. Von traditionellem Frühstück bis hin zu eleganten Abendessen-Optionen bringen wir Ihnen die reichhaltigen Aromen der Türkei.",
  keywords:
    "Türkisches Restaurant, Hamburg, Türkische Küche, Frühstück, Brunch, Abendessen, Catering",
  authors: [{ name: "Hardal Restaurant" }],
  creator: "Hardal Restaurant",
  publisher: "Hardal Restaurant",
  robots: "index, follow",
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
      },
    ],
  },
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
