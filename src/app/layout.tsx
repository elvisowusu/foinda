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
    "Foinda empowers African creators, freelancers, and digital entrepreneurs with borderless payment solutions, instant funding, and comprehensive financial tools. Transform your creativity into capital.",
  keywords: [
    "African creators",
    "borderless payments",
    "creator finance",
    "mobile money",
    "cross-border payments",
    "digital wallet",
    "freelancer payments",
    "Africa fintech",
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
      "Transform your creativity into capital with Foinda's borderless payment solutions and instant funding for African creators.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Foinda - Empowering African Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foinda - Infrastructure for economic visibility",
    description:
      "Transform your creativity into capital with Foinda's borderless payment solutions and instant funding for African creators.",
    images: ["/coin.avif"],
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
