import type { Metadata } from "next";
import { Comfortaa, Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can adjust the weights as needed
});

export const metadata: Metadata = {
  title: "Foinda",
  description: "Embark on a journey beyond borders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${comfortaa.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
