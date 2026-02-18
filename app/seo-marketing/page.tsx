import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceSchema } from "@/components/ui/ServiceSchema";
import { WebPageSchema } from "@/components/ui/WebPageSchema";

export const metadata: Metadata = {
    title: "Mastering GEO & SEO Ranking | SiteCreation.in",
    description: "Drive elite organic traffic and maximize ROI with advanced SEO and Generative Engine Optimization (GEO). Rank in search and LLMs.",
    keywords: ["SEO Services Chandigarh", "GEO Optimization India", "Generative Engine Optimization", "Digital Marketing Chandigarh", "Technical SEO Agency", "LLM SEO Strategy"],
    alternates: {
        canonical: "/seo-marketing",
    },
    openGraph: {
        title: "Mastering GEO & SEO Ranking | SiteCreation.in",
        description: "Drive elite organic traffic and maximize ROI with advanced SEO and Generative Engine Optimization (GEO). Rank in search and LLMs.",
        url: "https://sitecreation.in/seo-marketing",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/seo_marketing.avif", width: 1200, height: 630, alt: "SEO & GEO Marketing by SiteCreation.in" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mastering GEO & SEO Ranking | SiteCreation.in",
        description: "Advanced SEO and Generative Engine Optimization (GEO) to dominate AI and traditional search results.",
        images: ["/images/seo_marketing.avif"],
    },
};

export default function SeoMarketingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="SEO & Digital Ranking"
                description="Strategic SEO ranking and Generative Engine Optimization (GEO) for modern search and AI discovery."
                url="/seo-marketing"
            />

            <WebPageSchema
                title="Mastering GEO & SEO Ranking | SiteCreation.in"
                description="Drive elite organic traffic and maximize ROI with advanced SEO and Generative Engine Optimization (GEO). Rank in search and LLMs."
                url="/seo-marketing"
                breadcrumbs={[{ name: "Services", url: "/#services" }, { name: "SEO & Ranking" }]}
                faqs={[
                    { question: "What is Generative Engine Optimization (GEO) and why does it matter?", answer: "GEO is the practice of optimizing your website and content to be cited and recommended by AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews. SiteCreation.in is one of the first agencies in India offering dedicated GEO services." },
                    { question: "How long does SEO take to show results in India?", answer: "SEO is a long-term investment. Most websites see measurable improvements in 3–6 months. Competitive keywords in markets like Chandigarh and Delhi typically take 6–12 months to reach page 1. We provide monthly progress reports." },
                    { question: "Do you offer local SEO for Chandigarh businesses?", answer: "Yes. We specialize in local SEO for Chandigarh, Mohali, and Panchkula businesses including Google Business Profile optimization, local citations, and geo-targeted content strategies." },
                    { question: "What is included in your SEO service package?", answer: "Our SEO packages include technical SEO audit, on-page optimization, content strategy, backlink building, Core Web Vitals optimization, schema markup, and monthly reporting. GEO optimization is available as an add-on." }
                ]}
            />

            <main className="flex-1 relative">
                <div className="pt-24 pb-8 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "SEO & Ranking" }]} />
                </div>
                <PageHero
                    title="SEO &"
                    subtitle="Marketing"
                    description="Generative Engine Optimization (GEO) and technical SEO strategies to dominate AI search results."
                    image="/images/seo_marketing.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Market Dominance</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                    Visible & <span className="text-accent italic">Impactful</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                In an era of atmospheric noise, visibility is the ultimate currency. Our SEO and marketing collective leverage deep analytics and proprietary strategies to elevate your brand above the competition. We don't just chase clicks; we curate high-value connections.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    { title: "Advanced Technical SEO", desc: "For flawless crawlability and search engine affinity." },
                                    { title: "Elite Content Strategy", desc: "Crafting narratives that resonate and convert." },
                                    { title: "Performance Marketing", desc: "Precision-targeted campaigns for maximum ROI." },
                                    { title: "Authority Building", desc: "Establishing your brand as the definitive voice in your niche." }
                                ].map((item) => (
                                    <li key={item.title} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 bg-accent rounded-full" />
                                            <span className="text-foreground font-black uppercase tracking-wider text-sm">{item.title}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm ml-5">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                                <img
                                    src="/images/seo_marketing.avif"
                                    alt="Expert Digital Marketing Analysis"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                                            <span className="text-accent text-xl">📈</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-sm uppercase tracking-widest">Growth Focused</p>
                                            <p className="text-white/60 text-xs font-medium">Data-driven decision making</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
