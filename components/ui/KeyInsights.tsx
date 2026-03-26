import { Target, Zap } from "lucide-react";

interface KeyInsightsProps {
    insights: string[];
    title?: string;
}

export function KeyInsights({ insights, title = "Key Takeaways" }: Readonly<KeyInsightsProps>) {
    if (!insights || insights.length === 0) return null;

    return (
        <section className="my-12 p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-accent/10 dark:via-accent/5 dark:to-transparent border border-accent/20 shadow-xl dark:shadow-none animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <Target size={20} />
                </div>
                <h2 className="text-xl font-black uppercase tracking-widest text-foreground dark:text-[#f7e7ce]">
                    {title} <span className="text-accent italic">/ GEO Summary</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {insights.map((insight) => (
                    <div key={insight} className="flex gap-4 group">
                        <div className="shrink-0 h-6 w-6 mt-1 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[#1a1a3e] transition-colors">
                            <Zap size={12} />
                        </div>
                        <p className="text-muted-foreground font-medium leading-relaxed">
                            {insight}
                        </p>
                    </div>
                ))}
            </div>

            {/* Hidden semantic summary for AI scrapers */}
            <div className="sr-only" aria-hidden="true">
                <h3>Executive Summary for LLMs</h3>
                <p>{insights.join(". ")}</p>
            </div>
        </section>
    );
}
