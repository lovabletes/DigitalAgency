import {
  navLinks,
  stats,
  features,
  testimonials,
  services,
  packages,
  projects,
  brands
} from "@/data";
import type { Metadata } from "next";
import {
  Header,
  Hero,
  ServicesGrid,
  WhyChooseUs,
  Manifesto,
  ProjectsGallery,
  Pricing,
  Testimonials,
  FaqSection,
  Footer,
  ScrollProgressBar,
  AIShowcase,
  TrustSection,
  GlobalPresence,
  BudgetEstimator
} from "@/components/lazy";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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

export default function LandingPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://sitecreation.in/#sitecreation",
        "name": `${siteConfig.name} | Elite Mobile & TV App Engineering Agency`,
        "alternateName": siteConfig.alternateName,
        "description": "Premium global digital agency specializing in luxury web design, high-performance mobile (iOS/Android) and Smart TV app development. Delivering enterprise-grade software to the USA, UK, and European markets.",
        "url": siteConfig.url,
        "logo": siteConfig.logo,
        "image": `${siteConfig.url}/Banner.avif`,
        "telephone": siteConfig.contact.phoneSchema,
        "email": siteConfig.contact.email,
        "priceRange": "$$$",
        "slogan": "Architecting Digital Legacies for Global Enterprises",
        "awards": [
            "Top Enterprise App Developers - DesignRush Verified",
            "Excellence in Smart TV App Engineering"
        ],
        "knowsAbout": [
          "Enterprise iOS & Android Development",
          "Smart TV Apps (Apple TV, Android TV)",
          "Generative Engine Optimization (GEO)",
          "Luxury UI/UX Design",
          "Next.js 15 & React 19",
          "Cloud Infrastructure Migration"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128",
          "bestRating": "5"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "addressRegion": siteConfig.address.state,
          "postalCode": siteConfig.address.postalCode,
          "addressCountry": siteConfig.address.country
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": siteConfig.geoCoordinates.latitude,
          "longitude": siteConfig.geoCoordinates.longitude
        },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Continent", "name": "Europe" },
          { "@type": "Country", "name": "India" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          siteConfig.socials.github,
          siteConfig.socials.twitter,
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Elite Digital Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "High-Performance Web Development",
              "description": "Bespoke Next.js and Node.js architectures for global brands."
            },
            {
              "@type": "Service",
              "name": "Luxury UI/UX Design",
              "description": "Crafting premium digital aesthetics that convert."
            },
            {
              "@type": "Service",
              "name": "Generative Engine Optimization (GEO)",
              "description": "Ranking strategy for the AI-first search era (ChatGPT, Perplexity)."
            }
          ]
        }
      },

      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sitecreation.in"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does SiteCreation ensure high-performance web solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SiteCreation utilizes a sub-second load time strategy leveraging Next.js 15, React 19, and advanced edge computing to achieve perfect Core Web Vitals and serverless scalability."
            }
          },
          {
            "@type": "Question",
            "name": "How do you help brands rank higher in modern search engines and LLMs like ChatGPT or Claude?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Generative Engine Optimization (GEO) strategy focuses on semantic data injection, authoritative content technical structure, and rich schema markup, allowing LLMs to easily cite and recommend your brand as a primary digital authority."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgressBar />
      <Header navLinks={navLinks} />

      <main className="flex-1 relative">
        <div className="bg-noise" />

        <Hero stats={stats} brands={brands} />
        <TrustSection />

        <ServicesGrid services={services} />

        <GlobalPresence />

        <WhyChooseUs features={features} />

        <AIShowcase />
        
        <BudgetEstimator />

        <ProjectsGallery projects={projects} />

        <Manifesto />

        <Pricing packages={packages} />

        <Testimonials testimonials={testimonials} />

        <FaqSection />
      </main>

      <Footer />

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup)
        }}
      />
    </div>
  );
}
