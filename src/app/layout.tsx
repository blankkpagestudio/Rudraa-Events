import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "../components/smooth-scroll-provider";

import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rudraa Events",
  description: "Luxury Event Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <SmoothScrollProvider>
    {children}
  </SmoothScrollProvider>
</body>
    </html>
  );
}