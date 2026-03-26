import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KeepAlive from "@/components/KeepAlive";
import { siteConfig } from "@/data/site";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import { Analytics } from "@/components/ui/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Software Solutions Agency | Mobile, Web & TV Apps | SiteCreation",
    template: "%s | SiteCreation"
  },
  description: "SiteCreation is a premium software engineering agency building high-performance mobile apps, websites, and Smart TV interfaces for enterprises globally.",
  authors: [{ name: "SiteCreation Team", url: "https://sitecreation.in" }],
  creator: "SiteCreation",
  publisher: "SiteCreation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sitecreation.in"),
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
    title: "Software Solutions Agency | Mobile, Web & TV Apps | SiteCreation",
    description: "Premium digital agency architecting high-performance mobile apps, websites & Smart TV apps for enterprises globally.",
    url: "https://sitecreation.in",
    siteName: "SiteCreation",
    images: [
      {
        url: "/Banner.avif",
        width: 1200,
        height: 630,
        alt: "SiteCreation - Luxury Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Solutions Agency | Mobile, Web & TV Apps | SiteCreation",
    description: "Premium global digital agency focused on elite software engineering for apps and platforms.",
    images: ["/Banner.avif"],
  },
  category: "Technology",
  verification: {
    // Add your Google Search Console verification token here when ready
    // google: "your-google-verification-token",
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
  "name": siteConfig.name,
  "alternateName": siteConfig.alternateName,
  "url": siteConfig.url,
  "logo": siteConfig.logo,
  "sameAs": [
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.contact.phoneSchema,
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <CookieConsentBanner />
        <KeepAlive />
        {children}
      </body>
    </html>
  );
}
