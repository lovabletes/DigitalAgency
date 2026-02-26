import { Metadata } from "next";
import { navLinks, blogPosts } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog & Insights | SiteCreation.in Digital Collective",
    description: "Expert insights into web performance, luxury design, and cloud engineering. Stay ahead of the curve with our technical thought leadership.",
    keywords: ["Digital Strategy", "Next.js Insights", "Luxury Design Blog", "Software Engineering Chandigarh", "Web Development Blog India", "GEO SEO Insights"],
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog & Insights | SiteCreation.in Digital Collective",
        description: "Expert insights into web performance, luxury design, and cloud engineering. Technical thought leadership from Chandigarh's elite agency.",
        url: "https://sitecreation.in/blog",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/web_development.avif", width: 1200, height: 630, alt: "SiteCreation.in Blog & Insights" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog & Insights | SiteCreation.in",
        description: "Expert insights into web performance, luxury design, and cloud engineering from Chandigarh's elite digital agency.",
        images: ["/images/web_development.avif"],
    },
};


// Static posts moved to @/data/blog.ts

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <main className="flex-1 relative">
                <PageHero
                    title="Insights &"
                    subtitle="Innovation"
                    description="Thought leadership in design, technology, and the future of digital experiences. Curated by our team of expert artisans."
                    image="/images/web_development.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group cursor-pointer">
                                <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-8 border border-border/50 shadow-lg group-hover:shadow-accent/5 transition-all duration-500">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-accent font-black uppercase tracking-widest text-[10px] py-1 px-3 border border-accent/30 rounded-full">{post.category}</span>
                                        <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-foreground group-hover:text-accent transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground font-medium leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="text-foreground font-black uppercase tracking-widest text-xs flex items-center gap-2 group/btn">
                                        Read Insight <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
