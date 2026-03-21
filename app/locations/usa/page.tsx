import { navLinks } from "@/data";
import { Header, Footer, ScrollProgressBar } from "@/components/lazy";

export default function USAPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Elite Digital Agency USA",
    "description": "Elite digital agency in USA specializing in luxury web design, high-performance software development, and GEO optimization.",
    "url": "https://sitecreation.in/locations/usa",
    "priceRange": "$$$"
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
            Our Global Presence
          </span>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent max-w-4xl">
            Elite Digital Agency <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              In USA
            </span>
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Architecting digital legacies in the United States. We deliver high-performance software, luxury website designs, and Generative Engine Optimization for forward-thinking brands.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition cursor-pointer">
              Get in Touch
            </button>
            <button className="px-6 py-3 rounded-lg border border-neutral-800 hover:border-neutral-700 transition cursor-pointer bg-black/40 backdrop-blur-sm">
              View Our Work
            </button>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="border-t border-neutral-900 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-black hover:border-neutral-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">Local Focus</h3>
              <p className="text-sm text-neutral-400">Tailored digital strategies that resonate with USA's competitive business landscape.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-black hover:border-neutral-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">Luxury Aesthetics</h3>
              <p className="text-sm text-neutral-400">Crafting high-end UI/UX that projects authority and premium brand value.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-black hover:border-neutral-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">Global Tech</h3>
              <p className="text-sm text-neutral-400">Leveraging Next.js and Edge computing for sub-second load times globally.</p>
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
