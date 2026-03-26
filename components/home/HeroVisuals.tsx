"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function HeroVisuals() {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/10 rounded-full" />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Orbital Ring */}
            <motion.div 
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/10 rounded-full"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 bg-accent rounded-full blur-[2px]" />
            </motion.div>

            {/* Floating Glass Cards */}
            <div className="container-custom relative h-full w-full">


                {/* Tech Bubbles (Left Side) */}
                <TechBubble delay={0.8} top="20%" left="10%" size="w-16 h-16" icon="N" />
                <TechBubble delay={1.2} top="60%" left="15%" size="w-12 h-12" icon="A" />
                <TechBubble delay={1.4} bottom="15%" right="20%" size="w-20 h-20" icon="." />
            </div>
        </div>
    );
}

function TechBubble({ delay, top, left, bottom, right, size, icon }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: 0.4, 
                scale: 1,
                y: [0, -40, 0]
            }}
            transition={{ 
                opacity: { duration: 0.8, delay },
                scale: { duration: 0.8, delay },
                y: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute hidden md:flex items-center justify-center p-0.5"
            style={{ top, left, bottom, right }}
        >
            <div className={`${size} rounded-full bg-gradient-to-br from-accent/20 to-transparent border border-accent/10 backdrop-blur-md flex items-center justify-center shadow-lg`}>
                <span className="text-accent font-black text-xs opacity-50">{icon}</span>
            </div>
        </motion.div>
    );
}
