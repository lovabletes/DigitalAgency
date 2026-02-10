import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KeepAlive from "@/components/KeepAlive";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SiteCreation.in | Bespoke Web Design & Luxury Digital Solutions",
    template: "%s | SiteCreation.in"
  },
  description: "Experience elite digital craftsmanship. SiteCreation.in architects high-performance, visually stunning web and mobile experiences for ambitious brands globally.",
  keywords: ["Web Design", "Digital Agency", "Luxury Web Development", "Next.js Development", "Chandigarh Web Agency", "Bespoke Digital Solutions"],
  authors: [{ name: "SiteCreation.in Team" }],
  creator: "SiteCreation.in",
  publisher: "SiteCreation.in",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sitecreation.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SiteCreation.in | Bespoke Web Design & Luxury Digital Solutions",
    description: "Architecting the future of digital luxury. High-performance web and mobile experiences tailored for excellence.",
    url: "https://sitecreation.in",
    siteName: "SiteCreation.in",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SiteCreation.in - Luxury Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteCreation.in | Luxury Digital Solutions",
    description: "Transform your vision into a digital legacy. Elite web design and development.",
    images: ["/images/og-image.png"],
  },
  category: "Technology",
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <KeepAlive />
        {children}
      </body>
    </html>
  );
}
