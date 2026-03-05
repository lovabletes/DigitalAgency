import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KeepAlive from "@/components/KeepAlive";
import Script from "next/script";
import { siteConfig } from "@/data/site";

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
    default: "Web Design Company in Chandigarh | SiteCreation.in | Website Development Agency India",
    template: "%s | SiteCreation.in"
  },
  description: "SiteCreation.in is a top-rated web design and development company in Chandigarh, Mohali & Panchkula. We build high-performance websites, mobile apps, and SEO strategies for businesses across India. Get a free consultation today.",
  authors: [{ name: "SiteCreation.in Team", url: "https://sitecreation.in" }],
  creator: "SiteCreation.in",
  publisher: "SiteCreation.in",
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
    title: "Web Design Company in Chandigarh | SiteCreation.in",
    description: "Top-rated web design & development company in Chandigarh. We build fast websites, mobile apps & run SEO for businesses across India. Free consultation available.",
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
    title: "Web Design Company in Chandigarh | SiteCreation.in",
    description: "Top-rated web design & development company in Chandigarh, India. Fast websites, mobile apps & SEO. Free consultation.",
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
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DXCZF3VKS6"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DXCZF3VKS6');
          `}
        </Script>
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69a573dc6f7a6f1c35439427/1jin4p5e5';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
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
