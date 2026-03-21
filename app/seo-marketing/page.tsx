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
    title: "SEO Services in Chandigarh | Digital Marketing Agency India | SiteCreation.in",
    description: "Affordable SEO services in Chandigarh & Mohali. SiteCreation.in helps businesses rank on Google with technical SEO, content strategy & AI search optimization (GEO). Get a free audit.",
    keywords: ["SEO services Chandigarh", "digital marketing agency Chandigarh", "SEO company India", "Google ranking services Mohali", "technical SEO India", "local SEO Chandigarh", "affordable SEO services India"],
    alternates: {
        canonical: "/seo-marketing",
    },
    openGraph: {
        title: "SEO Services in Chandigarh | Digital Marketing Agency | SiteCreation.in",
        description: "Affordable SEO & digital marketing in Chandigarh. Rank higher on Google with technical SEO, content strategy & AI search optimization.",
        url: "https://sitecreation.in/seo-marketing",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/seo_marketing.avif", width: 1200, height: 630, alt: "SEO & Digital Marketing by SiteCreation.in" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SEO Services in Chandigarh | SiteCreation.in",
        description: "Rank on Google with our SEO & digital marketing services in Chandigarh. Free SEO audit available.",
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
                reviews={[
                    {
                        author: "Sarah Johnson",
                        datePublished: "2026-02-15",
                        reviewBody: "SiteCreation.in transformed our digital presence with their advanced SEO and GEO strategies. Truly elite results.",
                        reviewRating: 5
                    },
                    {
                        author: "Michael Chen",
                        datePublished: "2026-01-20",
                        reviewBody: "The expertise in Generative Engine Optimization is a game-changer. Our brand is now cited by AI search engines consistently.",
                        reviewRating: 5
                    }
                ]}
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
                    { question: "What is included in your SEO service package?", answer: "Our SEO packages include technical SEO audit, on-page optimization, content strategy, backlink building, Core Web Vitals optimization, schema markup, and monthly reporting. GEO optimization is available as an add-on." },
                    { question: "Why is GEO optimization important for brands in 2026?", answer: "Traditional search is being supplemented by AI answers. If your brand (makemysite.in or similar) isn't optimized for LLMs, you risk losing visibility in the new era of generative search results." },
                    { question: "How does SiteCreation.in ensure ranking in AI search engines?", answer: "We use semantic data injection, structured JSON-LD graphs, and authority-based content that AI models use as primary sources, ensuring your brand is the cited answer." }
                ]}
            />

            <main className="flex-1 relative">
                <div className="py-4 container-custom">
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
                            <div className="relative h-[320px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
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

                {/* Advanced Strategy: Generative Engine Optimization (GEO) */}
                <section className="py-24 bg-muted/30 dark:bg-white/[0.01] border-t border-border/40 relative">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs block mb-4">Search Evolution</span>
                            <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight leading-tight">
                                Generative <span className="text-accent italic">Optimization</span>
                            </h3>
                            <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
                                Standard SEO gets you on Google. **GEO (Generative Engine Optimization)** ensures ChatGPT, Perplexity, and Apple Intelligence cite your brand as the definitive authority.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Semantic Graph Wiring",
                                    desc: "We inject robust JSON-LD structured data linking your services and products. Ensuring AI training datasets understand your brand's authority without ambiguity.",
                                    icon: "🕸️"
                                },
                                {
                                    title: "Citation Benchmarking",
                                    desc: "Placing your brand narrative on highly trusted knowledge bases that Large Language Models use as primary sources for recommendation retrieval lists.",
                                    icon: "🎖️"
                                },
                                {
                                    title: "Core Speed Indexing",
                                    desc: "We optimize Core Web Vitals pushing server paint specs off. Fully efficient payloads ensuring Google crawlers rank rendering paths faster than static platforms.",
                                    icon: "⚡"
                                }
                            ].map((item) => (
                                <div key={item.title} className="p-8 bg-background rounded-3xl border border-border/50 shadow-sm space-y-4 hover:border-accent/40 hover:shadow-md transition-all duration-300 group">
                                    <div className="text-3xl bg-accent/10 w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-accent/20 transition-colors">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-black text-foreground tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section: Visual SEO help */}
                <section className="py-24 bg-background border-t border-border/50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-3 gap-12 items-start">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Knowledge Base</span>
                                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                                    Search <span className="text-accent italic">FAQ</span>
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Everything you need to understand regarding modern organic scaling strategies making brands citation-ready.
                                </p>
                            </div>

                            <div className="md:col-span-2 space-y-4">
                                {[
                                    {
                                        question: "How long until we see measurable ranking growth?",
                                        answer: "Technical foundations often yield results in 4–8 weeks while high-competition keywords typical plateau heights take 4-6 months to mature safely."
                                    },
                                    {
                                        question: "Does technically optimized code influence ranking?",
                                        answer: "Absolutely. Google optimizes crawl budgets for lighter platforms utilizing stable cumulative layout shift specs that Next.js automatically maintains correctly."
                                    },
                                    {
                                        question: "What is the difference between On-Page and Off-Page SEO?",
                                        answer: "On-page focuses on contents structure tagging metadata while off-page builds citation links raising authority streams independently nodes setup."
                                    }
                                ].map((faq, idx) => (
                                    <div key={idx} className="p-6 bg-muted/20 dark:bg-white/[0.01] rounded-2xl border border-border/30 hover:border-accent/30 transition-all duration-300">
                                        <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                            {faq.question}
                                        </h4>
                                        <p className="text-xs text-muted-foreground ml-3.5 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
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
