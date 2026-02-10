"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { classNames } from "@/utils/class-names";

const faqs = [
    {
        id: "faq-1",
        question: "How does SiteCreation.in ensure high-performance web and mobile solutions?",
        answer: "We leverage cutting-edge technologies like Node.js, .NET Core, Next.js 15, and React Native. Our architecture focus is on sub-second load times across web, mobile, and TV applications (Apple TV, Android TV), ensuring your digital platform outperforms competitors in speed and reliability."
    },
    {
        id: "faq-2",
        question: "What makes your cloud infrastructure elite?",
        answer: "Our expertise lies in orchestrating complex Azure ecosystems and executing seamless transitions from Monolith to Microservices. We provide automated CI/CD pipelines and enterprise-grade security protocols that protect your brand's digital legacy while allowing for limitless scalability."
    },
    {
        id: "faq-3",
        question: "How do you help brands rank higher in modern search engines and LLMs?",
        answer: "Our SEO strategy is dual-layered. We optimize for traditional search (JSON-LD, Sitemaps) and Generative Engine Optimization (GEO). This involves structuring authoritative data and maintaining clear semantic architectures, allowing LLMs to easily cite and recommend your services."
    },
    {
        id: "faq-4",
        question: "Does SiteCreation.in offer ongoing support and maintenance?",
        answer: "Yes. We offer proactive elite maintenance and continuous optimization. We ensure your digital infrastructure remains at peak performance 24/7, handling everything from security patches and performance tuning to scaling as your brand grows."
    },
    {
        id: "faq-5",
        question: "Can you handle enterprise-scale digital transformations?",
        answer: "Absolutely. Our 'Elite Sprint' methodology is designed for complex transformations. Whether it's architecting a global TV app ecosystem or migrating an enterprise monolith to microservices on Azure, we deliver precision-engineered solutions that scale with your ambitions."
    }
];

export function FaqSection() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10 px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-6 block">The Knowledge Base</span>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-8">
                        Expert <span className="text-accent italic">Insights</span> & FAQs
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
                        Optimizing for the future of digital discovery. Understand how we architect excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Question Navigation (Desktop) / Accordion (Mobile) */}
                    <div className="lg:col-span-12 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={classNames(
                                    "group relative rounded-[2rem] transition-all duration-500 overflow-hidden",
                                    activeIndex === index
                                        ? "bg-white dark:bg-[#1a1a3e] shadow-2xl shadow-accent/10 border-2 border-accent/30"
                                        : "bg-white/40 dark:bg-white/[0.03] border border-border/50 hover:border-accent/30"
                                )}
                            >
                                <button
                                    onClick={() => setActiveIndex(index)}
                                    className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6"
                                >
                                    <div className="flex items-center gap-6 md:gap-10">
                                        <span className={classNames(
                                            "text-2xl md:text-3xl font-black transition-colors duration-500",
                                            activeIndex === index ? "text-accent" : "text-foreground/35 dark:text-white/15"
                                        )}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className={classNames(
                                            "text-xl md:text-2xl font-black tracking-tight transition-colors duration-500",
                                            activeIndex === index ? "text-foreground dark:text-white" : "text-foreground/60 dark:text-white/40 group-hover:text-foreground dark:group-hover:text-white"
                                        )}>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={classNames(
                                        "h-12 w-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500",
                                        activeIndex === index
                                            ? "bg-accent border-accent text-white rotate-90"
                                            : "border-border/50 text-muted-foreground group-hover:border-accent group-hover:text-accent"
                                    )}>
                                        <ChevronRight size={24} />
                                    </div>
                                </button>

                                {/* Answer Area with smooth expand animation */}
                                <div className={classNames(
                                    "transition-all duration-500 ease-in-out px-8 md:px-10 overflow-hidden",
                                    activeIndex === index ? "max-h-[500px] pb-10 opacity-100" : "max-h-0 opacity-0"
                                )}>
                                    <div className="pl-14 md:pl-20 border-l-2 border-accent/20">
                                        <p className="text-lg md:text-xl text-muted-foreground dark:text-[#f7e7ce]/80 leading-relaxed font-medium">
                                            {faq.answer}
                                        </p>
                                        <div className="mt-8 flex gap-4">
                                            <div className="h-1 w-12 bg-accent rounded-full" />
                                            <div className="h-1 w-4 bg-accent/30 rounded-full" />
                                            <div className="h-1 w-2 bg-accent/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Decorative Banner */}
                <div className="mt-32 p-10 md:p-16 rounded-[3rem] bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-accent/20 transition-colors duration-700" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h4 className="text-2xl md:text-3xl font-black text-foreground mb-2">Still have questions?</h4>
                            <p className="text-muted-foreground font-medium">Our elite strategy team is ready to architect your vision.</p>
                        </div>
                        <button className="btn-lux-primary px-10 py-5 text-base shadow-lux group-hover:scale-105 transition-transform duration-300">
                            Consult Elite Team →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
