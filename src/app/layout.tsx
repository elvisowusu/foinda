import type { Metadata } from "next";
import { Comfortaa, Poppins, Bodoni_Moda } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodoni_Moda = Bodoni_Moda({
  variable: "--font-bodoni_Moda",
  subsets: ["latin"],
  weight: ["400"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Foinda - Infrastructure for economic visibility",
  description:
    "Foinda builds infrastructure for the future of work, income, and economic participation — unlocking financial access for millions of informal earners globally through real-time income intelligence.",
  keywords: [
    "informal economy",
    "financial inclusion",
    "income intelligence",
    "Africa fintech",
    "economic participation",
    "financial infrastructure",
    "unbanked",
    "fintech API",
  ],
  authors: [{ name: "Foinda Team" }],
  creator: "Foinda",
  publisher: "Foinda",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foinda.com",
    siteName: "Foinda",
    title: "Foinda - Infrastructure for economic visibility",
    description:
      "Building the rails that connect informal earners to banks, fintechs, and government through real-time income intelligence.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Foinda - Infrastructure for economic visibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foinda - Infrastructure for economic visibility",
    description:
      "Building the rails that connect informal earners to banks, fintechs, and government through real-time income intelligence.",
    images: ["/logo.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ Added suppressHydrationWarning to prevent mismatches
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${comfortaa.variable} ${bodoni_Moda.variable} antialiased`}
      >
        {children}
        {/* ✅ Add Speed Insights component */}
        <SpeedInsights />
      </body>
    </html>
  );
}
