"use client";

import React from "react";
import Link from "next/link";
import { Check, Globe, MonitorSmartphone, Smartphone, Tv, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { useGeoLocation } from "@/hooks/useGeoLocation";

const options = [
    { id: "web", label: "Professional Website", basePrice: 449, icon: MonitorSmartphone, sub: "Dynamic, up to 5 pages" },
    { id: "mobile", label: "Mobile Apps", basePrice: 749, icon: Smartphone, sub: "Native iOS & Android" },
    { id: "tv", label: "Smart TV App", basePrice: 649, icon: Tv, sub: "Apple & Android TV" },
    { id: "seo", label: "Search Optimization", basePrice: 249, icon: Globe, sub: "Google + AI Search" }
];

// Format large numbers compactly for INR
function formatCompactPrice(price: number, symbol: string, currency: string): string {
    if (currency === 'INR' && price >= 1000) {
        const lakhs = price / 100000;
        if (lakhs >= 1) return `${symbol}${lakhs.toFixed(2)}L`;
        const thousands = price / 1000;
        return `${symbol}${thousands.toFixed(0)}K`;
    }
    return `${symbol}${price.toLocaleString()}`;
}

export function BudgetEstimator() {
    const { currency: detectedCurrency } = useGeoLocation();
    const [selected, setSelected] = React.useState<string[]>(["web"]);
    const [mounted, setMounted] = React.useState(false);

    // Always start with USD to match SSR, then switch after mount
    const displayCurrency = mounted ? detectedCurrency : 'USD';

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const rates: Record<string, number> = { USD: 1, EUR: 0.92, GBP: 0.78, INR: 82.5 };
    const symbols: Record<string, string> = { USD: "$", EUR: "€", GBP: "£", INR: "₹" };
    
    const currentRate = rates[displayCurrency] || 1;
    const currentSymbol = symbols[displayCurrency] || "$";

    const selectedOptions = options.filter((option) => selected.includes(option.id));
    const total = selectedOptions.reduce((acc, option) => acc + (option.basePrice * currentRate), 0);
    const selectedServices = selectedOptions.map((option) => option.label).join(", ");
    const strategyLink = `/contact?service=${encodeURIComponent(selectedServices || "web-development")}`;

    const toggle = (id: string) => {
        setSelected((prev) => {
            if (prev.includes(id)) {
                if (prev.length === 1) return prev;
                return prev.filter((i) => i !== id);
            }
            return [...prev, id];
        });
    };

    return (
        <section className="relative overflow-hidden py-20 lg:py-28 bg-[#0a0f1d]" id="estimator">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Zap size={14} className="text-accent" />
                        <span className="text-accent text-xs font-black uppercase tracking-widest">Investment Blueprint</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        Interactive <span className="text-accent italic">Estimator</span>
                    </h2>
                    
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        Blueprint your technical ecosystem and receive an instantaneous strategic investment range tailored to your global vision.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
                    {/* Options Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-4">
                        {options.map((opt) => {
                            const Icon = opt.icon;
                            const isSelected = selected.includes(opt.id);
                            const convertedPrice = Math.round(opt.basePrice * currentRate);
                            const displayPrice = formatCompactPrice(convertedPrice, currentSymbol, displayCurrency);
                            const fullPrice = `${currentSymbol}${convertedPrice.toLocaleString()}`;

                            return (
                                <button
                                    key={opt.id}
                                    onClick={() => toggle(opt.id)}
                                    className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-300 text-left ${
                                        isSelected
                                            ? "bg-accent/10 border-accent"
                                            : "bg-white/5 border-white/10 hover:border-white/20"
                                    }`}
                                >
                                    {/* Check indicator */}
                                    <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                        isSelected ? "bg-accent border-accent" : "border-white/30"
                                    }`}>
                                        {isSelected && <Check size={12} className="text-[#0a0f1d]" />}
                                    </div>

                                    {/* Icon */}
                                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-3 ${
                                        isSelected ? "bg-accent text-[#0a0f1d]" : "bg-white/10 text-white/60"
                                    }`}>
                                        <Icon size={20} />
                                    </div>

                                    {/* Price */}
                                    <p className="text-white font-black text-lg mb-1">{displayPrice}</p>
                                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Est. Start</p>
                                    
                                    {/* Title */}
                                    <h3 className="text-white font-black text-sm leading-tight">{opt.label}</h3>
                                    <p className="text-accent/60 text-[10px] uppercase tracking-wider mt-1">{opt.sub}</p>
                                    
                                    {/* Full price tooltip for INR */}
                                    {displayCurrency === 'INR' && (
                                        <p className="text-white/25 text-[9px] mt-1" title={fullPrice}>{fullPrice}</p>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Summary Panel */}
                    <div
                        className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 lg:p-8"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                            <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                                <ShieldCheck size={20} className="text-accent" />
                            </div>
                            <div>
                                <h4 className="text-white/60 text-xs font-black uppercase tracking-widest">Strategic Review</h4>
                                <p className="text-white text-sm font-bold">{selectedOptions.length} Service{selectedOptions.length > 1 ? "s" : ""} Active</p>
                            </div>
                        </div>

                        {/* Selected Items */}
                        <div className="space-y-2 mb-6 max-h-[140px] overflow-y-auto pr-2 selected-items-scroll">
                            {selectedOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className="flex items-center justify-between py-2 px-3 rounded-xl bg-white/5"
                                >
                                    <span className="text-white/80 text-sm font-medium truncate pr-2">{option.label}</span>
                                    <span className="text-accent font-black text-sm whitespace-nowrap">
                                        {formatCompactPrice(Math.round(option.basePrice * currentRate), currentSymbol, displayCurrency)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="bg-[#0f1429] rounded-2xl p-5 border border-accent/30 mb-5">
                            <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Total Investment</p>
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span suppressHydrationWarning className="text-3xl lg:text-4xl font-black text-white">
                                    {formatCompactPrice(Math.round(total), currentSymbol, displayCurrency)}
                                </span>
                                {displayCurrency === 'INR' && total >= 1000 && (
                                    <span className="text-white/40 text-xs">({currentSymbol}{Math.round(total).toLocaleString()})</span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{displayCurrency} • Global Partner Rates</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            href={strategyLink}
                            className="group relative w-full py-4 rounded-xl bg-accent text-[#0a0f1d] font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                        >
                            <span className="relative z-10">Lock Design Strategy</span>
                            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
