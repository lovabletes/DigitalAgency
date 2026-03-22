import { navLinks } from "@/data";
import { Header, Footer, ScrollProgressBar } from "@/components/lazy";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Website Development in Chandigarh | Elite Web Design | SiteCreation.in",
  description: "Top website development company in Chandigarh, Mohali, & Panchkula. Luxury UI/UX design, Next.js setups, and SEO scaling for modern business brands.",
  keywords: ["website development in chandigarh", "web design chandigarh", "best web developer chandigarh", "seo agency chandigarh"],
};

export default function ChandigarhPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${siteConfig.name} - Web Development Chandigarh`,
    "description": "Elite digital agency in Chandigarh specializing in luxury web design, high-performance software development, and GEO optimization.",
    "url": "https://sitecreation.in/locations/chandigarh",
    "telephone": siteConfig.contact.phoneSchema,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollProgressBar />
      <Header navLinks={navLinks} />

      <main className="flex-1 relative pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 -z-10" />
        
        {/* Glow Effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold tracking-wider text-purple-400 mb-6 backdrop-blur-sm">
            Local Digital Experts
          </span>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent max-w-4xl">
            Website Development <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              In Chandigarh
            </span>
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Architecting high-performance digital presence in the Tricity (Chandigarh, Mohali, Panchkula). We deliver Next.js backbones, luxury layout designs, and elite SEO scaling interfaces.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition cursor-pointer">
              Get Free Quote
            </button>
            <button className="px-6 py-3 rounded-lg border border-neutral-800 hover:border-neutral-700 transition cursor-pointer bg-black/40 backdrop-blur-sm">
              Our Chandigarh Projects
            </button>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="border-t border-neutral-900 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-black hover:border-neutral-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">Tricity Impact</h3>
              <p className="text-sm text-neutral-400">Tailored local SEO & content strategies that resonate with Chandigarh's competitive landscape setups.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-black hover:border-neutral-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">Luxury Aesthetics</h3>
              <p className="text-sm text-neutral-400">Crafting high-end luxury UI/UX that projects absolute authority and premium local relevance nodes.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-black hover:border-neutral-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">Sub-second Speed</h3>
              <p className="text-sm text-neutral-400">Leveraging serverless architectures for zero latency on edge caching pipelines globally nodes.</p>
            </div>
          </div>
        </section>
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
