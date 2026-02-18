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
    title: "Elite UI/UX Design & Craftsmanship | SiteCreation.in",
    description: "Architecting immersive digital interfaces. We blend psychology with aesthetics to create intuitive, high-conversion design systems.",
    keywords: ["UI UX Design Chandigarh", "UX Design Agency India", "Luxury Web Design", "Design Systems Agency", "High-Fidelity Prototyping", "Atomic Design Chandigarh"],
    alternates: {
        canonical: "/ui-ux-design",
    },
    openGraph: {
        title: "Elite UI/UX Design & Craftsmanship | SiteCreation.in",
        description: "Immersive digital interfaces that blend psychology with aesthetics to create intuitive, high-conversion design systems.",
        url: "https://sitecreation.in/ui-ux-design",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/ui_ux_design.avif", width: 1200, height: 630, alt: "UI/UX Design by SiteCreation.in" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Elite UI/UX Design & Craftsmanship | SiteCreation.in",
        description: "Immersive interfaces blending luxury aesthetics with intuitive functionality from Chandigarh's elite design agency.",
        images: ["/images/ui_ux_design.avif"],
    },
};

export default function UiUxDesignPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="UI/UX Design"
                description="Immersive interfaces that blend luxury aesthetics with intuitive functionality and high-conversion design systems."
                url="/ui-ux-design"
            />

            <WebPageSchema
                title="Elite UI/UX Design & Craftsmanship | SiteCreation.in"
                description="Architecting immersive digital interfaces. We blend psychology with aesthetics to create intuitive, high-conversion design systems."
                url="/ui-ux-design"
                breadcrumbs={[{ name: "Services", url: "/#services" }, { name: "UI/UX Design" }]}
                faqs={[
                    { question: "What is the difference between UI and UX design?", answer: "UI (User Interface) design focuses on the visual elements — colors, typography, and layout. UX (User Experience) design focuses on the overall feel and usability of the product. SiteCreation.in delivers both as an integrated discipline for maximum conversion and delight." },
                    { question: "Does SiteCreation.in create design systems?", answer: "Yes. We build comprehensive atomic design systems including component libraries, style guides, and Figma design tokens that ensure brand consistency across all digital touchpoints." },
                    { question: "What tools do you use for UI/UX design?", answer: "We use Figma for design and prototyping, FigJam for user journey mapping, and Framer for interactive prototypes. All deliverables are handed off in developer-ready Figma files." },
                    { question: "How much does UI/UX design cost in Chandigarh?", answer: "UI/UX design projects at SiteCreation.in start from ₹30,000 for landing pages and scale to ₹3,00,000+ for full product design systems. We offer fixed-price packages based on scope." }
                ]}
            />

            <main className="flex-1 relative">
                <div className="pt-24 pb-8 container-custom">
                    <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "UI/UX Design" }]} />
                </div>
                <PageHero
                    title="UI/UX"
                    subtitle="Design"
                    description="Immersive interfaces that blend luxury aesthetics with intuitive functionality."
                    image="/images/ui_ux_design.avif"
                />

                <section className="py-24 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Human Centric</span>
                                <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                                    Design That <span className="text-accent italic">Resonates</span>
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Elite design is felt, not just seen. It guides the user with invisible hands toward a meaningful objective. Our UI/UX collective employs psychological research, emotive wireframing, and rigorous user testing to ensure every interaction feels like a natural extension of the user's thought process.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    { title: "Psychological Research", desc: "Understanding the human element behind every session." },
                                    { title: "Immersive Motion Design", desc: "Elevating the experience with fluid, purposeful animation." },
                                    { title: "Atomic Design Systems", desc: "Ensuring scalability and brand consistency at every level." },
                                    { title: "High-Fidelity Prototyping", desc: "Experiencing the future of your brand before it's built." }
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
                                    src="/images/ui_ux_design.avif"
                                    alt="Luxury UI/UX Design Process"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-400" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <div className="h-3 w-3 rounded-full bg-green-400" />
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
