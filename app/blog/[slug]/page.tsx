import React from "react";
import { blogPosts } from "@/data/blog";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { navLinks } from "@/data";
import { ScrollProgressBar } from "@/components/home/ScrollProgressBar";
import { CTABanner } from "@/components/home/CTABanner";
import { Calendar, User, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WebPageSchema } from "@/components/ui/WebPageSchema";
import { KeyInsights } from "@/components/ui/KeyInsights";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import Image from "next/image";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | SiteCreation.in Insights`,
        description: post.excerpt,
        keywords: [post.title, post.category, ...post.keywords, "SiteCreation Blog", "Chandigarh Digital Insights"],
        alternates: {
            canonical: `/blog/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
            },
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url: `https://sitecreation.in/blog/${slug}`,
            siteName: "SiteCreation.in",
            locale: "en_IN",
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

const ContentRenderer = ({ para }: { para: string }) => {
    // 1. Headers
    if (para.startsWith('# ')) {
        return <h1 className="text-4xl font-black text-foreground mt-12 mb-6">{para.replaceAll("# ", "")}</h1>;
    }
    if (para.startsWith('## ')) {
        return <h2 className="text-3xl font-black text-foreground mt-10 mb-5">{para.replaceAll("## ", "")}</h2>;
    }
    if (para.startsWith('### ')) {
        return <h3 className="text-2xl font-black text-foreground mt-8 mb-4">{para.replaceAll("### ", "")}</h3>;
    }

    // 2. Tables (Starts with |)
    if (para.startsWith('|')) {
        const rows = para.split('\n').filter(r => r.trim());
        const tableRows = rows.map((row) => row.split('|').map(c => c.trim()).filter((c, i, a) => i > 0 && i < a.length - 1));
        
        // Find separators row (| :--- |) to remove
        const contentRows = tableRows.filter(r => !r.every(c => c.includes('---') || c.includes(':')));
        
        if (contentRows.length > 0) {
            const header = contentRows[0];
            const body = contentRows.slice(1);
            return (
                <div className="overflow-x-auto my-8 border border-border/50 rounded-2xl bg-secondary/10">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-secondary/30">
                            <tr>
                                {header.map((cell) => <th key={cell} className="p-4 text-foreground font-black uppercase text-sm border-b border-border/50">{cell}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {body.map((row) => (
                                <tr key={row[0]} className="border-b border-border/30 last:border-0 hover:bg-secondary/5 transition-colors">
                                    {row.map((cell, i) => <td key={`${row[0]}-${header[i]}`} className="p-4 text-foreground/90 font-semibold text-sm">{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    // 3. Bullet Lists (Starts with * or -)
    if (para.startsWith('* ') || para.includes('\n* ') || para.startsWith('- ') || para.includes('\n- ')) {
        const items = para.split('\n').filter(i => i.trim());
        return (
            <ul className="space-y-3 my-6 list-disc list-inside">
                {items.map((item) => {
                    const cleanItem = item.replace(/^[\*\-]\s+/, "");
                    const formatted = cleanItem
                        .replaceAll(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                        .replaceAll(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-accent font-bold hover:underline">$1</a>');
                    return <li key={cleanItem.substring(0, 30)} className="text-muted-foreground font-medium" dangerouslySetInnerHTML={{ __html: formatted }} />
                })}
            </ul>
        );
    }

    // 4. Action/Quote Blocks
    if (para.startsWith('> ')) {
        return (
            <div className="border-l-4 border-accent pl-6 py-3 my-6 italic text-foreground font-medium bg-accent/5 rounded-r-xl">
                {para.replaceAll("> ", "")}
            </div>
        );
    }

    // 5. Dividers (Starts with ---)
    if (para.trim() === '---') {
        return <hr className="border-border/50 my-8" />;
    }

    // 6. Default: Handle Links and Bolds together
    let html = para;
    // Replace Bold: **text**
    html = html.replaceAll(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
    // Replace Links: [text](url)
    html = html.replaceAll(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="inline-flex items-center gap-1 text-accent hover:text-accent/80 font-black underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-all">$1</a>');

    if (html !== para) {
        return <p dangerouslySetInnerHTML={{ __html: html }} className="text-muted-foreground font-medium" />;
    }

    return <p className="text-muted-foreground font-medium">{para}</p>;
};

export default async function BlogPostPage({ params }: Readonly<PageProps>) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    return (
        <div className="flex min-h-screen flex-col bg-background">
            {/* Structured Data for SEO */}
            <ArticleJsonLd
                headline={post.title}
                description={post.excerpt}
                image={`https://sitecreation.in${post.image}`}
                datePublished={post.date}
                authorName={post.author}
                authorUrl={post.authorProfile}
            />

            <WebPageSchema
                title={`${post.title} | SiteCreation.in Insights`}
                description={post.excerpt}
                url={`/blog/${slug}`}
                datePublished={post.date}
                breadcrumbs={[{ name: "Blog", url: "/blog" }, { name: post.title }]}
            />

            <ScrollProgressBar />
            <Header navLinks={navLinks} />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="bg-secondary/20 border-b border-border/50">
                    <div className="container-custom px-6 py-4">
                        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
                    </div>
                </div>

                {/* Article Header */}
                <article className="py-24">
                    <div className="container-custom px-6">
                        <div className="space-y-8">
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <span className="text-accent font-black uppercase tracking-widest py-1 px-4 border border-accent/20 rounded-full bg-accent/5">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-2 text-muted-foreground font-bold uppercase tracking-wider">
                                    <Calendar size={14} className="text-accent" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground font-bold uppercase tracking-wider">
                                    <User size={14} className="text-accent" />
                                    {post.authorProfile ? (
                                        <a href={post.authorProfile} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4">
                                            {post.author}
                                        </a>
                                    ) : (
                                        post.author
                                    )}
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-tight">
                                {post.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground font-medium italic border-l-4 border-accent pl-8 py-2">
                                {post.excerpt}
                            </p>

                            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-border/50 shadow-lux my-12 relative group">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </div>

                            {/* GEO Optimized Key Insights */}
                            {post.keyInsights && (
                                <KeyInsights insights={post.keyInsights} />
                            )}

                            <div className="prose dark:prose-invert prose-lux max-w-none">
                                <div className="space-y-8 text-lg leading-relaxed text-muted-foreground font-medium">
                                    {post.content.split('\n\n').filter(p => p.trim()).map((para, index) => (
                                        <div key={`${para.substring(0, 30)}-${index}`}>
                                            <ContentRenderer para={para} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="pt-12 mt-12 border-t border-border/50 flex flex-wrap gap-4">
                                {post.keywords.map(tag => (
                                    <div key={tag} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground bg-secondary/30 px-4 py-2 rounded-xl border border-border/50">
                                        <Tag size={12} className="text-accent" />
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* Related Content Section */}
                            <div className="mt-24 pt-12 border-t border-border/50">
                                <h3 className="text-2xl font-black text-foreground mb-8 uppercase tracking-wider">Related Insights</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(relatedPost => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="group block p-6 rounded-3xl bg-secondary/20 border border-border/50 hover:border-accent/30 transition-all duration-500"
                                        >
                                            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-2">{relatedPost.category}</span>
                                            <h4 className="text-lg font-black text-foreground group-hover:text-accent transition-colors leading-tight mb-2">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {relatedPost.excerpt}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <CTABanner />
            </main>

            <Footer />
        </div >
    );
}
