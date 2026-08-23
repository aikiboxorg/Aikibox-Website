import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  IBM_Plex_Mono,
  Caveat,
  Space_Grotesk,
  IBM_Plex_Sans,
} from "next/font/google";
import "./globals.css";

// Vita (product) type
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600"],
  display: "swap",
});

// AIKIBOX (parent company) type
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIKIBOX LLC — Field IT & Network Infrastructure",
  description:
    "AIKIBOX LLC delivers field IT deployment and network infrastructure services, and builds Vita, a product for genuine social connection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} ${caveat.variable} ${spaceGrotesk.variable} ${plexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
