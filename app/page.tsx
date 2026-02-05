
"use client";

import React from "react";
import {
  ChevronRightIcon,
  MenuIcon,
  CloseIcon,
  HomeIcon,
  AnalyticsIcon,
  LockIcon,
  PlusIcon
} from "@/components/icons/icons";
import { Zap, Shield, Users, CheckCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { classNames } from "@/utils/class-names";
import { ProjectsGallery } from "@/components/home/ProjectsGallery";
import { Footer } from "@/components/home/Footer";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  // Scroll progress and sticky nav
  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3); // 3 testimonials
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Custom hook for count-up animation
  const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = React.useState(0);
    const [hasStarted, setHasStarted] = React.useState(false);
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasStarted) {
            setHasStarted(true);
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              setCount(Math.floor(progress * end));
              if (progress < 1) requestAnimationFrame(animate);
            };
            animate();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [end, duration, hasStarted]);

    return { count, elementRef };
  };

  // Custom hook for scroll-triggered animations
  const useScrollReveal = () => {
    const elementRef = React.useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, []);

    return { elementRef, isVisible };
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const stats = [
    { id: "stat-1", val: "8+", label: "Years Experience" },
    { id: "stat-2", val: "200+", label: "Projects Delivered" },
    { id: "stat-3", val: "50+", label: "Happy Clients" },
    { id: "stat-4", val: "24/7", label: "Support Available" },
  ];

  const features = [
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

  const testimonials = [
    {
      quote: "SiteCreation transformed our idea into a stunning mobile app. Their attention to detail and commitment to quality exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
      quote: "Working with the team was a game-changer. They delivered our web platform on time and the performance improvements were incredible.",
      name: "Michael Chen",
      role: "Founder, DataFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
      quote: "The teams expertise in both web and mobile development helped us launch across all platforms seamlessly. Highly recommended!",
      name: "Emily Rodriguez",
      role: "CTO, HealthPlus",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80"
    }
  ];

  const services = [
    {
      id: "ser-1",
      title: "Elite Web Architectures",
      desc: "Precision-engineered websites utilizing Next.js 15 and sophisticated React paradigms for unrivaled speed and SEO dominance.",
      tags: ["Atomic Design", "Edge Runtime", "Global CDN"],
      accent: "from-primary/20",
      icon: <HomeIcon size={40} />
    },
    {
      id: "ser-2",
      title: "Prestige Mobile Apps",
      desc: "Fluid, high-performance mobile experiences for iOS and Android that bridge the gap between native and web with elegance.",
      tags: ["Biometric Auth", "Offline First", "60 FPS Animation"],
      accent: "from-gold/20",
      icon: <PlusIcon size={40} className="rotate-45" />
    },
    {
      id: "ser-3",
      title: "Strategic Software",
      desc: "Tailored enterprise solutions designed to orchestrate complex business logic into seamless, scalable cloud operations.",
      tags: ["Microservices", "Event-Driven", "AI Integration"],
      accent: "from-indigo-500/20",
      icon: <LockIcon size={40} />
    },
    {
      id: "ser-4",
      title: "Rapid MVP Forge",
      desc: "Conceptualize, validate, and launch your vision in record time without sacrificing the premium quality your users demand.",
      tags: ["Market Fit", "Rapid Prototyping", "User Analytics"],
      accent: "from-emerald-500/20",
      icon: <AnalyticsIcon size={40} />
    }
  ];

  const packages = [
    {
      id: "pkg-1",
      name: "Starter",
      tagline: "Perfect for launching your digital presence",
      price: "₹49,999",
      duration: "one-time",
      featured: false,
      features: [
        "5-Page Responsive Website",
        "Mobile-First Design",
        "SEO Foundation Setup",
        "Contact Form Integration",
        "3 Months Support",
        "Hosting Setup Assistance"
      ],
      cta: "Start Building"
    },
    {
      id: "pkg-2",
      name: "Professional",
      tagline: "Comprehensive solution for growing businesses",
      price: "₹1,49,999",
      duration: "one-time",
      featured: true,
      features: [
        "15-Page Custom Website",
        "Advanced Animations & Interactions",
        "CMS Integration (Contentful/Sanity)",
        "E-commerce Ready (up to 50 products)",
        "Advanced SEO & Analytics",
        "6 Months Priority Support",
        "Performance Optimization",
        "SSL & Security Setup"
      ],
      cta: "Go Professional"
    },
    {
      id: "pkg-3",
      name: "Enterprise",
      tagline: "Full-scale digital transformation",
      price: "Custom",
      duration: "based on scope",
      featured: false,
      features: [
        "Unlimited Pages & Features",
        "Custom Web + Mobile App",
        "Dedicated Development Team",
        "Cloud Infrastructure Setup",
        "Advanced Security & Compliance",
        "API & Third-Party Integrations",
        "12 Months Premium Support",
        "Monthly Performance Reports",
        "Priority Feature Requests"
      ],
      cta: "Discuss Enterprise"
    }
  ];

  const projects = [
    {
      id: "proj-1",
      title: "Horizon E-Commerce",
      cat: "Luxury Fashion",
      color: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
      id: "proj-2",
      title: "Quantum Fitness",
      cat: "AI Healthcare",
      color: "bg-emerald-600",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80"
    },
    {
      id: "proj-3",
      title: "Zenith SaaS",
      cat: "Financial Tech",
      color: "bg-indigo-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: "proj-4",
      title: "Lumina Real Estate",
      cat: "Property Tech",
      color: "bg-amber-600",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
    },
    {
      id: "proj-5",
      title: "Aura Mobile",
      cat: "Luxury Lifestyle",
      color: "bg-rose-600",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      id: "proj-6",
      title: "Apex Banking",
      cat: "Digital Finance",
      color: "bg-cyan-600",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    }
  ];

  // Scroll reveal hooks for sections
  const servicesReveal = useScrollReveal();
  const packagesReveal = useScrollReveal();

  // Count-up hooks for stats
  const stat1Count = useCountUp(8, 2500);
  const stat2Count = useCountUp(200, 2500);
  const stat3Count = useCountUp(50, 2500);
  const stat4Count = useCountUp(24, 2500);
  const statCounts = [stat1Count, stat2Count, stat3Count, stat4Count];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[100]">
        <div
          className="h-full bg-gradient-to-r from-accent via-[#f7ef8a] to-accent shadow-lg shadow-accent/50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Luxury Navigation - Enhanced with Scroll Effects */}
      <header className={classNames(
        "sticky top-0 z-50 w-full border-b border-accent/30 backdrop-blur-xl transition-all duration-500",
        isScrolled
          ? "bg-[#1a1a3e]/95 dark:bg-[#0f1429]/95 shadow-2xl shadow-accent/10"
          : "bg-gradient-to-r from-[#1a1a3e] via-[#1a1a3e] to-[#2a2a4e] dark:from-[#0f1429] dark:to-[#1a1a3e] shadow-lg"
      )}>
        <div className="container-custom flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-gold shadow-lux group-hover:scale-105 transition-transform duration-300">
              <span className="text-lg font-black text-[#1a1a3e] tracking-tighter">S</span>
            </div>
            <span className="text-xl font-black tracking-tight text-white dark:text-[#f7e7ce]">
              SiteCreation<span className="text-accent italic">.in</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#f7e7ce]/80 hover:text-accent transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button className="btn-lux-primary group">
              Get Started
              <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon size={20} className="text-accent" /> : <MenuIcon size={20} className="text-accent" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-full z-50 animate-in fade-in slide-in-from-top-4 border-b border-accent/30 bg-[#1a1a3e]/98 dark:bg-[#0f1429]/98 p-8 backdrop-blur-3xl md:hidden">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-widest text-[#f7e7ce]/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button className="btn-lux-primary w-full py-8 text-xl">Get Started</Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 relative">
        <div className="bg-noise" />
        {/* Luxury Home Banner Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-20 pt-32">
          {/* Immersive Background Banner */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
              alt="Luxury Abstract Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Luxury Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f1429]/90 via-[#1a1a3e]/80 to-[#faf8f3] dark:to-[#0f1429] mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/40" />

            {/* Animated Ambient Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          </div>

          <div className="container-custom relative z-10 pt-0">
            <div className="max-w-6xl mx-auto text-center">
              {/* Decorative Top Ornament */}
              <div className="flex items-center justify-center gap-3 mb-4 animate-slide-up delay-100">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
                <span className="text-accent text-xl">◆</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
              </div>

              {/* Main Heading - Enhanced Horizontal Layout */}
              <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl animate-slide-up delay-150">
                <span className="relative inline-block text-white">
                  Crafting{" "}
                  <span className="relative inline-block">
                    <span className="text-accent italic relative z-10">Luxury</span>
                    {/* Subtle glow effect */}
                    <span className="absolute inset-0 blur-xl bg-accent/30 -z-10" />
                  </span>
                </span>
                {" "}
                <br className="md:hidden" />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                    Legacies
                  </span>
                  {/* Shimmer overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent animate-shimmer" />
                </span>
              </h1>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-3 mb-10 animate-slide-up delay-200">
                <div className="flex items-center gap-1">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
                  <div className="h-1 w-1 rounded-full bg-accent/60" />
                </div>
                <div className="h-2 w-2 rotate-45 border border-accent bg-accent/20 shadow-lg shadow-accent/50" />
                <div className="flex items-center gap-1">
                  <div className="h-1 w-1 rounded-full bg-accent/60" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="mx-auto max-w-3xl text-lg md:text-2xl text-white/90 mb-12 font-medium leading-relaxed drop-shadow-lg animate-slide-up delay-250">
                We transform{" "}
                <span className="relative inline-block font-bold text-white">
                  ambitious visions
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0" />
                </span>{" "}
                into{" "}
                <span className="relative inline-block font-bold bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent">
                  high-performance realities
                </span>
                .
                <span className="block mt-3 text-base md:text-xl text-white/60 font-normal">
                  Experience the pinnacle of web & mobile craftsmanship.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-slide-up delay-300">
                <Button className="btn-lux-primary shadow-lux scale-110 border-none text-white hover-3d-tilt group">
                  <span>Secure Your Project</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Button>
                <Button variant="outline" className="h-14 px-10 rounded-full border-2 border-white/30 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-[#1a1a3e] font-bold text-sm uppercase tracking-wider transition-all duration-300 hover-3d-tilt group">
                  <span>View Masterpieces</span>
                  <span className="ml-2 group-hover:scale-110 transition-transform inline-block">◆</span>
                </Button>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">Scroll</span>
                  <div className="h-8 w-[2px] bg-gradient-to-b from-accent/60 to-transparent" />
                </div>
              </div>
            </div>

            {/* Performance Metrics - Floating Gold Dividers */}
            <div className="relative z-20 mt-28 w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 relative">
                {stats.map((stat, idx) => (
                  <div key={stat.id} ref={statCounts[idx].elementRef} className="relative flex flex-col items-center justify-center py-6 group">
                    {/* Vertical Gold Divider (Not on first item) */}
                    {idx !== 0 && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden md:block" />
                    )}
                    {/* Horizontal Divider for Mobile (Not on first two items) */}
                    {idx > 1 && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent md:hidden" />
                    )}

                    <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-white via-[#f7e7ce] to-[#d4af37] bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-2xl scale-100 group-hover:scale-110 transition-transform duration-500">
                      {statCounts[idx].count}{stat.val.replace(/\d/g, '')}
                    </span>
                    <span className="text-xs font-bold text-accent/80 uppercase tracking-[0.25em] group-hover:text-accent transition-colors shadow-black drop-shadow-md">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trusted By Marquee */}
            <div className="mt-20 -mb-10 overflow-hidden relative w-screen -ml-[calc(50vw-50%)]">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0f1429] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f1429] to-transparent z-10" />
              <div className="flex animate-marquee whitespace-nowrap py-10">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-24 mx-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {["Vogue", "Forbes", "TechCrunch", "Bloomberg", "Wired", "Fortune", "Quartz"].map((brand) => (
                      <span key={brand} className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase font-serif cursor-default hover:text-accent transition-colors">{brand}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Services Section - Redesigned */}
        <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-[#faf8f3] to-white dark:from-[#0f1429] dark:via-[#1a1a3e]/30 dark:to-[#0f1429]">
          {/* Decorative Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

          <div className="container-custom relative z-10">
            {/* Section Header - Centered & Enhanced */}
            <div
              ref={servicesReveal.elementRef}
              className={classNames(
                "text-center max-w-3xl mx-auto mb-20 fade-in-up",
                servicesReveal.isVisible ? "is-visible" : ""
              )}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">Our Craft</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6 leading-tight">
                Bespoke Digital <span className="text-accent italic">Solutions</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                Every project is a unique collaboration. We deliver uncompromising quality across every digital frontier.
              </p>
            </div>

            {/* Services Grid - Enhanced Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
              {services.map((service, idx) => (
                <div
                  key={service.id}
                  className="group relative animate-slide-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Card with gradient border effect */}
                  <div className="relative h-full">
                    {/* Gradient Border Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                    {/* Main Card */}
                    <div className="relative h-full bg-white dark:bg-[#1a1a3e]/60 backdrop-blur-xl rounded-[2rem] p-10 border-2 border-border/50 dark:border-white/10 group-hover:border-accent/30 overflow-hidden transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/10">
                      {/* Animated Background Gradient */}
                      <div className={classNames("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700", service.accent)} />

                      {/* Number Watermark */}
                      <div className="absolute top-4 right-6 text-[8rem] font-black text-foreground/[0.03] dark:text-white/[0.03] group-hover:text-accent/[0.12] transition-all duration-700 font-serif leading-none pointer-events-none select-none group-hover:scale-110">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent border border-accent/30 group-hover:scale-110 group-hover:rotate-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-500 shadow-lg shadow-accent/10">
                          {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-black text-foreground dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Decorative underline */}
                        <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/30 mb-6 group-hover:w-24 transition-all duration-500" />

                        {/* Description */}
                        <p className="text-base text-muted-foreground dark:text-[#f7e7ce]/70 mb-8 leading-relaxed font-medium">
                          {service.desc}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2.5 mb-10">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-lg bg-accent/5 dark:bg-accent/10 border border-accent/20 text-xs font-bold text-accent/80 tracking-wide uppercase group-hover:bg-accent/10 group-hover:border-accent/40 group-hover:text-accent dark:group-hover:text-accent transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA - Enhanced */}
                        <a
                          href="/"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/5 border border-accent/30 text-accent font-bold text-sm uppercase tracking-wider group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300"
                        >
                          <span>Explore Service</span>
                          <ChevronRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us Section - Luxury Dark */}
            <div className="bg-[#1a1a3e] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-lux group mt-32">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3e] to-[#0f1429] z-0" />
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />

              <div className="relative z-10 transition-transform duration-700 hover:scale-[1.01]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">The Advantage</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">We Turn Ideas Into <span className="text-shimmer italic">Digital Reality</span></h2>
                  <p className="text-lg text-[#f7e7ce]/80 leading-relaxed font-medium">
                    With years of experience building web and mobile applications, weve perfected a process that ensures success for every project.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm card-3d">
                      <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                      <p className="text-sm text-[#f7e7ce]/70 leading-relaxed font-medium">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Masterpieces - Using Component */}
        <ProjectsGallery projects={projects} />

        {/* Premium Packages Section */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-[#faf8f3] to-white dark:from-[#0f1429] dark:via-[#1a1a3e] dark:to-[#0f1429]">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">Investment Plans</span>
              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6">
                Packages Designed For <span className="text-accent italic">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Transparent pricing for world-class digital solutions. No hidden fees, just premium quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  className={classNames(
                    "relative glass-card p-10 rounded-[2rem] card-3d animate-slide-up transition-all duration-700 group",
                    pkg.featured
                      ? "md:-mt-8 md:mb-8 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent shadow-2xl shadow-accent/20 hover:shadow-accent/30"
                      : "hover:shadow-xl hover:shadow-accent/10"
                  )}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Featured Badge */}
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                      Most Popular
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="mb-8 pb-8 border-b border-border dark:border-white/10">
                    <h3 className="text-2xl font-black text-foreground mb-2 tracking-tight">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-6">{pkg.tagline}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black bg-gradient-to-br from-accent via-accent to-accent/70 bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-muted-foreground font-bold">/ {pkg.duration}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent transition-colors">
                          <CheckCircle size={12} className="text-accent group-hover/item:text-accent-foreground" />
                        </div>
                        <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={classNames(
                      "w-full py-6 text-base font-black uppercase tracking-wider transition-all duration-300",
                      pkg.featured
                        ? "btn-lux-primary shadow-xl hover:shadow-2xl"
                        : "btn-lux-outline"
                    )}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground font-medium mb-6">
                Need a custom solution? <span className="text-accent font-black">Let's discuss your vision.</span>
              </p>
              <Button variant="outline" className="btn-lux-outline px-10 py-6">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding relative">
          <div className="container-custom">
            <div className="max-w-2xl mb-12 mx-auto text-center">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
              {testimonials.map((t, idx) => (
                <div key={idx} className="glass-card p-10 rounded-3xl relative card-3d group hover:bg-[#faf8f3] dark:hover:bg-[#1f1f3a] transition-colors">
                  <div className="absolute -top-6 -left-2 text-accent/20 rotate-12">
                    <Quote size={80} />
                  </div>
                  <div className="relative z-10 card-inner-3d">
                    <div className="flex items-center gap-1 mb-6 text-accent">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-lg text-foreground/80 italic font-medium mb-8 leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover border-2 border-accent" />
                      <div>
                        <h4 className="text-sm font-black text-foreground uppercase tracking-wider">{t.name}</h4>
                        <p className="text-xs font-bold text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury CTA Banner */}
        <section className="section-padding relative">
          <div className="container-custom">
            {/* Light Mode: Royal Gold Gradient with Dark Text */}
            <div className="relative rounded-3xl p-10 md:p-16 overflow-hidden shadow-lux bg-gradient-to-br from-[#d4af37] via-[#e9c46a] to-[#cd7f32] dark:from-[#1a1a3e] dark:via-[#7f1d1d] dark:to-[#1a1a3e]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3)_0%,transparent_50%)]" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-[#1a1a3e] dark:text-white tracking-tight mb-8 leading-[1.15]">
                  Elevate Your Brand To The <span className="italic">Elite Level</span>
                </h2>
                <p className="text-lg md:text-xl text-[#1a1a3e]/90 dark:text-white/90 font-semibold mb-10 leading-relaxed">
                  Partner with SiteCreation.in and redefine what's possible for your digital presence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="px-8 py-3 rounded-full bg-[#1a1a3e] dark:bg-white text-white dark:text-[#1a1a3e] hover:bg-[#0f1429] dark:hover:bg-white/90 text-sm font-bold shadow-xl">
                    Consult Elite Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Luxury Footer with Newsletter */}
      <Footer />
    </div>
  );
}
