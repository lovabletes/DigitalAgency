import React from "react";
import { Zap, Shield, Users, CheckCircle } from "lucide-react";

export const features = [
    {
        title: "Fast Delivery",
        desc: "Agile development with rapid iterations and on-time delivery.",
        icon: <Zap className="h-8 w-8" />
    },
    {
        title: "Secure & Reliable",
        desc: "Enterprise-grade security and 99.9% uptime guarantee.",
        icon: <Shield className="h-8 w-8" />
    },
    {
        title: "Expert Team",
        desc: "Senior developers with 10+ years of experience.",
        icon: <Users className="h-8 w-8" />
    },
    {
        title: "Quality Assured",
        desc: "Rigorous testing and code reviews for every project.",
        icon: <CheckCircle className="h-8 w-8" />
    },
];
