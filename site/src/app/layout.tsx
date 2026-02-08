import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/app/data/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Junk Removal Springfield IL`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "junk removal springfield il",
    "junk removal near me",
    "estate cleanout springfield",
    "garage cleanout",
    "commercial junk removal",
    "furniture removal springfield il",
  ],
  authors: [{ name: siteConfig.owner }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Junk Removal Springfield IL`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/hero-home.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Junk Removal in Springfield IL`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Junk Removal Springfield IL`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/hero-home.jpg`],
  },
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
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
