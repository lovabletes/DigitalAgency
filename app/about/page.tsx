import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { ServiceSchema } from "@/components/ui/ServiceSchema";

export const metadata: Metadata = {
    title: "About SiteCreation.in | Elite Digital Agency in Chandigarh",
    description: "Learn about SiteCreation.in, a premier software development collective in Chandigarh. We architect high-performance .NET, Node.js, and Cloud solutions for global brands.",
    keywords: ["SiteCreation Story", "Digital Agency Chandigarh", "Software Development Team India", "Elite Engineering Collective"],
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <ServiceSchema
                name="About SiteCreation.in"
                description="Elite software engineering and digital craftsmanship collective based in Chandigarh, India."
                url="/about"
            />

            <main className="flex-1 relative">
                <PageHero
                    title="Our"
                    subtitle="Legacy"
                    description="Architecting high-performance digital ecosystems since 2018. Based in Chandigarh, we empower global brands with elite engineering in .NET, Node.js, and Azure Cloud."
                />

                <section className="py-20 bg-background container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-accent/20 bg-muted/30 p-1">
                                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-purple-500/10 flex items-center justify-center relative group">
                                    <span className="text-accent/20 font-black text-8xl absolute transform -rotate-12 transition-transform group-hover:rotate-0 duration-700">ABOUT</span>
                                    <div className="z-10 text-center p-8 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 m-8">
                                        <p className="text-foreground/80 font-medium leading-relaxed italic">
                                            "Design is not just what it looks like and feels like. Design is how it works."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 md:order-2">
                            <div className="space-y-4">
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Our Mission</span>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                                    Architecting <span className="text-accent italic">Digital Brilliance</span>
                                </h2>
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed">
                                At SiteCreation.in, we believe that every brand deserves a digital presence that is as unique and powerful as its vision. We combine artistic flair with technical precision to build websites and applications that don't just exist—they excel.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-accent">100+</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects Delivered</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-accent">50+</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Expert Artisans</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our process is collaborative, transparent, and focused on delivering measurable impact. We partner with ambitious brands to transform their digital landscape and create lasting value.
                            </p>
                        </div>
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
