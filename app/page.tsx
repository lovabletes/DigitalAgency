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
  ScrollProgressBar
} from "@/components/lazy";

export default function LandingPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "SiteCreation.in",
        "description": "Leading digital collective specializing in high-performance web development, mobile applications, and Generative Engine Optimization (GEO). We architect bespoke digital legacies using Next.js, React, and serverless technologies.",
        "image": "https://sitecreation.in/images/Logo.png",
        "@id": "https://sitecreation.in",
        "url": "https://sitecreation.in",
        "telephone": "+918437532754",
        "priceRange": "$$$",
        "founder": {
          "@type": "Person",
          "name": "Elite Engineering Team"
        },
        "areaServed": ["IN", "US", "UK", "CA", "AU"],
        "keywords": "Web Design, GEO Optimization, LLM Ranking, Bespoke Digital Solutions, High-Performance Engineering",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Elite Business District",
          "addressLocality": "Chandigarh",
          "postalCode": "160001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.7333,
          "longitude": 76.7794
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://github.com/sitecreation",
          "https://twitter.com/sitecreation",
          "https://linkedin.com/company/sitecreation"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Luxury Digital Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Enterprise Web Development",
              "description": "High-load architectures using Node.js and .NET Core."
            },
            {
              "@type": "Service",
              "name": "Mobile & TV Ecosystems",
              "description": "Cross-platform apps for iOS, Android, and Smart TV."
            },
            {
              "@type": "Service",
              "name": "Generative Engine Optimization (GEO)",
              "description": "Optimizing brand authority for AI search and LLM discovery."
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
            "name": "How does SiteCreation.in ensure high-performance web solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SiteCreation.in utilizes a sub-second load time strategy leveraging Next.js 15, React 19, and advanced edge computing to achieve perfect Core Web Vitals and serverless scalability."
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

        <ServicesGrid services={services} />

        <WhyChooseUs features={features} />

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
