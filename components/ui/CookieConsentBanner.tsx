"use client";
// Cache bust: 2024

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

export function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        globalThis.dispatchEvent(new Event("cookieConsentAccepted"));
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-[99999]"
                >
                    <div className="bg-[#0a0f1d] border-t border-white/10 p-4 md:p-6 shadow-2xl">
                        <div className="container-custom flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-3 md:gap-4 flex-1">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h3 className="text-base font-black tracking-tight text-white">Privacy Excellence</h3>
                                    <p className="text-sm text-zinc-400">
                                        We use cookies to orchestrate premium digital experiences. By continuing, you agree to our 
                                        <a href="/cookies" className="text-accent underline underline-offset-2 hover:text-accent/80">Cookie Policy</a>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                                <button
                                    onClick={handleDecline}
                                    className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/20 active:scale-95"
                                >
                                    Necessary Only
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="rounded-lg bg-accent px-5 py-2.5 text-sm font-black text-[#0a0f1d] transition-all hover:bg-accent/80 active:scale-95"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-2 text-zinc-400 hover:text-white"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

