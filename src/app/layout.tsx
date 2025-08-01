import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://djfelicitous.com'),
  title: "DJ Felicitous | Multi-Genre DJ & Producer",
  description: "Experience the electrifying world of DJ Felicitous - from underground techno to vibrant Bollywood beats. Book now for unforgettable performances.",
  keywords: "DJ, electronic music, techno, bollywood, psytrance, music producer, nightclub, festivals",
  authors: [{ name: "DJ Felicitous" }],
  creator: "DJ Felicitous",
  publisher: "DJ Felicitous",
  openGraph: {
    title: "DJ Felicitous | Multi-Genre DJ & Producer",
    description: "Experience the electrifying world of DJ Felicitous - from underground techno to vibrant Bollywood beats.",
    url: "https://djfelicitous.com",
    siteName: "DJ Felicitous",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DJ Felicitous - Electronic Music Producer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Felicitous | Multi-Genre DJ & Producer",
    description: "Experience the electrifying world of DJ Felicitous - from underground techno to vibrant Bollywood beats.",
    images: ["/logo.png"],
    creator: "@djfelicitous",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`overflow-x-hidden ${spaceGrotesk.variable} ${inter.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <div className="fixed inset-0 techno-grid opacity-20 pointer-events-none -z-10" />
      </body>
    </html>
  );
}
