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
    default: "SiteCreation.in | Elite Web Design & Digital Solutions in Chandigarh",
    template: "%s | SiteCreation.in"
  },
  description: "Architecting elite digital legacies. SiteCreation.in is a premier digital agency in Chandigarh specializing in high-performance web development, mobile apps, and Generative Engine Optimization (GEO).",
  keywords: [
    "SiteCreation",
    "SiteCreation.in",
    "Web Design Chandigarh",
    "Digital Agency India",
    "Next.js Development Agency",
    "Luxury Web Design",
    "Enterprise Software Solutions",
    "Mobile App Development Chandigarh",
    "GEO Optimization",
    "Search Mastery"
  ],
  authors: [{ name: "SiteCreation.in Team", url: "https://sitecreation.in" }],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/Logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/Logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "SiteCreation.in | Elite Web Design & Digital Solutions in Chandigarh",
    description: "Transform your vision into a high-performance digital legacy. Bespoke web and mobile engineering for global brands.",
    url: "https://sitecreation.in",
    siteName: "SiteCreation.in",
    images: [
      {
        url: "/Banner.avif",
        width: 1200,
        height: 630,
        alt: "SiteCreation.in - Luxury Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteCreation.in | Luxury Digital Solutions",
    description: "Architecting the future of digital luxury. Elite web design and development in Chandigarh.",
    images: ["/Banner.avif"],
  },
  category: "Technology",
  verification: {
    google: "",
    yandex: "",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SiteCreation.in",
  "url": "https://sitecreation.in",
  "logo": "https://sitecreation.in/images/Logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/sitecreation",
    "https://twitter.com/sitecreation"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <KeepAlive />
        {children}
      </body>
    </html>
  );
}
