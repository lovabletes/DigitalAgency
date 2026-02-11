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
        "name": "SiteCreation.in | Best Web Design & Development Company in Chandigarh",
        "description": "SiteCreation.in is Chandigarh's premier digital engineering collective. We specialize in luxury web design, high-performance Node.js & .NET development, and Generative Engine Optimization (GEO) for global brands and local businesses in Chandigarh, India.",
        "image": "https://sitecreation.in/images/Logo.png",
        "@id": "https://sitecreation.in",
        "url": "https://sitecreation.in",
        "telephone": "+918437532754",
        "priceRange": "$$$",
        "founder": {
          "@type": "Person",
          "name": "Elite Engineering Team"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Chandigarh"
          },
          {
            "@type": "City",
            "name": "Mohali"
          },
          {
            "@type": "City",
            "name": "Panchkula"
          },
          "IN", "US", "UK"
        ],
        "keywords": "Web Design Chandigarh, Web Development Company Chandigarh, Digital Agency Chandigarh, Next.js Development, SEO Chandigarh, GEO Optimization",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 17, Elite Business District",
          "addressLocality": "Chandigarh",
          "postalCode": "160017",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.7333,
          "longitude": 76.7794
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "sameAs": [
          "https://github.com/sitecreation",
          "https://twitter.com/sitecreation",
          "https://linkedin.com/company/sitecreation",
          "https://instagram.com/sitecreation"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Chandigarh Digital Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Custom Web Design in Chandigarh",
              "description": "Bespoke, high-end website design tailored for luxury and enterprise brands."
            },
            {
              "@type": "Service",
              "name": "E-commerce Development Chandigarh",
              "description": "Scalable online stores built with Next.js and secure payment gateways."
            },
            {
              "@type": "Service",
              "name": "SEO & GEO Optimization",
              "description": "Ranking your brand on Google and AI search engines like ChatGPT."
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
