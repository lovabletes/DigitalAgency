import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";

const posts = [
    {
        title: "The Evolution of Digital Luxury",
        excerpt: "Exploring why premium brands are shifting towards minimal yet highly immersive web architectures in 2026.",
        date: "Feb 05, 2026",
        category: "Design",
        image: "/images/ui_ux_design.avif"
    },
    {
        title: "Scaling with Next.js 16",
        excerpt: "A deep dive into the latest performance optimizations and server component patterns for high-traffic applications.",
        date: "Jan 28, 2026",
        category: "Technology",
        image: "/images/web_develop.avif"
    },
    {
        title: "The Art of User Psychology",
        excerpt: "How subtle animations and micro-interactions can significantly increase conversion rates for luxury products.",
        date: "Jan 15, 2026",
        category: "UX Research",
        image: "/images/web_dev.avif"
    }
];

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
                        {posts.map((post) => (
                            <div key={post.title} className="group cursor-pointer">
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
                                    <button className="text-foreground font-black uppercase tracking-widest text-xs flex items-center gap-2 group/btn">
                                        Read Insight <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
