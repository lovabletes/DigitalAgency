import { Metadata } from "next";
import { navLinks } from "@/data";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
    title: "Careers | Join the SiteCreation.in Engineering Collective",
    description: "Build the future of digital luxury. We are looking for elite engineers, designers, and strategists to join our remote-first collective.",
    keywords: ["Tech Careers India", "Remote Engineering Jobs", "Luxury Brand Design Jobs", "Next.js Developer Jobs", "Software Engineer Jobs Chandigarh", "Remote Tech Jobs India"],
    alternates: {
        canonical: "/careers",
    },
    openGraph: {
        title: "Careers | Join the SiteCreation.in Engineering Collective",
        description: "Build the future of digital luxury. Elite engineers, designers, and strategists wanted for our remote-first collective.",
        url: "https://sitecreation.in/careers",
        siteName: "SiteCreation.in",
        images: [{ url: "/Banner.avif", width: 1200, height: 630, alt: "Careers at SiteCreation.in" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at SiteCreation.in | Join Our Elite Collective",
        description: "Elite engineering and design roles at Chandigarh's premier digital agency. Remote-first culture.",
        images: ["/Banner.avif"],
    },
};


const openings = [
    {
        role: "Senior Full-Stack Engineer",
        department: "Engineering",
        type: "Remote / Full-time",
    },
    {
        role: "Luxury Brand Designer",
        department: "Design",
        type: "Remote / Full-time",
    },
    {
        role: "Product Strategist",
        department: "Strategy",
        type: "Hybrid / Part-time",
    },
    {
        role: "Cloud Architect",
        department: "Cloud Solutions",
        type: "Remote / Full-time",
    }
];

export default function CareersPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header navLinks={navLinks} />

            <main className="flex-1 relative">
                <PageHero
                    title="Shape The"
                    subtitle="Future"
                    description="We are always looking for exceptional talent to join our collective of digital artisans. If you're passionate about excellence, we want to hear from you."
                />

                <section className="py-24 bg-background container-custom">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Culture</span>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                            Where Vision Meets <span className="text-accent italic">Execution</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Join a team that values innovation over imitation. We provide the tools, the trust, and the luxury of focus so you can do your best work.
                        </p>
                    </div>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {openings.map((job) => (
                            <div
                                key={job.role}
                                className="group p-8 rounded-3xl border border-border/50 bg-card hover:border-accent/40 transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-6"
                            >
                                <div className="space-y-1 text-center md:text-left">
                                    <span className="text-accent font-black uppercase tracking-widest text-xs">{job.department}</span>
                                    <h3 className="text-2xl font-black text-foreground">{job.role}</h3>
                                    <p className="text-muted-foreground font-medium">{job.type}</p>
                                </div>
                                <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-black uppercase tracking-widest text-xs hover:bg-accent hover:text-[#1a1a3e] transition-all duration-300">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] border border-accent/20 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
                        <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Don't See a <span className="text-accent italic">Perfect Fit?</span></h3>
                        <p className="max-w-xl mx-auto text-white/70 mb-10 text-lg relative z-10 font-medium">
                            We're always scouting for extraordinary humans. Drop us your portfolio or CV and let's start a conversation about what we could build together.
                        </p>
                        <button className="btn-lux-primary relative z-10">
                            General Inquiry
                        </button>
                    </div>
                </section>

                <CTABanner />
            </main>

            <Footer />
        </div>
    );
}
