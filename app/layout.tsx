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
  description: "Architecting elite digital legacies. SiteCreation.in is a premier digital agency serving Chandigarh, Mohali, and Panchkula, specializing in high-performance web development, mobile apps, and Generative Engine Optimization (GEO).",
  keywords: [
    "SiteCreation",
    "SiteCreation.in",
    "Site Creation",
    "Web Design Chandigarh",
    "Website Designing Chandigarh",
    "Best Web Development Company in Chandigarh",
    "Digital Marketing Agency Chandigarh",
    "Next.js Development Agency India",
    "Luxury Web Design",
    "Enterprise Software Solutions",
    "Mobile App Development Chandigarh",
    "Web Design Mohali",
    "Website Development Panchkula",
    "Digital Marketing Tricity",
    "Best Web Agency Mohali",
    "Panchkula Web Designers",
    "SEO Services Mohali",
    "GEO Optimization",
    "Search Mastery",
    "make my site",
    "create website",
    "dotnet solutions",
    "custom software development",
    "mobile applications",
    "websites in node",
    "graphic designing",
    "poster making"

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
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: ["/favicon.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SiteCreation",
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
    google: "G-3P14UK5hsFyLhSjFY0THujhYMhFAZSdo-ZmRR5LenPo", // Replace with actual Google Search Console verification code
    yandex: "yandex-XXXXXXXXXX",
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
  "alternateName": "Site Creation",
  "url": "https://sitecreation.in",
  "logo": "https://sitecreation.in/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/sitecreation",
    "https://twitter.com/sitecreation"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-84375-32754",
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
