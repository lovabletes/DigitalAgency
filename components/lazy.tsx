/**
 * Lazy-loaded component imports for better performance
 * These components are loaded on-demand to reduce initial bundle size
 */

import dynamic from 'next/dynamic';

// Critical above-the-fold components - load immediately (NO lazy loading)
export { Header } from './home/Header';
export { Footer } from './home/Footer';
export { ScrollProgressBar } from './home/ScrollProgressBar';
export { Hero } from './home/Hero'; // ← NOT lazy loaded! Above the fold!

// Below-the-fold components - lazy load when scrolled into view
export const ServicesGrid = dynamic(() => import('./home/ServicesGrid').then(mod => ({ default: mod.ServicesGrid })), {
    loading: () => <div className="min-h-[400px] animate-pulse bg-secondary/20" />
});

export const WhyChooseUs = dynamic(() => import('./home/WhyChooseUs').then(mod => ({ default: mod.WhyChooseUs })), {
    loading: () => <div className="min-h-[500px] animate-pulse bg-secondary/20" />
});

export const ProjectsGallery = dynamic(() => import('./home/ProjectsGallery').then(mod => ({ default: mod.ProjectsGallery })), {
    loading: () => <div className="min-h-[600px] animate-pulse bg-secondary/20" />
});

export const Manifesto = dynamic(() => import('./home/Manifesto').then(mod => ({ default: mod.Manifesto })), {
    loading: () => <div className="min-h-[500px] animate-pulse bg-secondary/20" />
});

export const Pricing = dynamic(() => import('./home/Pricing').then(mod => ({ default: mod.Pricing })), {
    loading: () => <div className="min-h-[600px] animate-pulse bg-secondary/20" />
});

export const Testimonials = dynamic(() => import('./home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
    loading: () => <div className="min-h-[500px] animate-pulse bg-secondary/20" />
});

export const FaqSection = dynamic(() => import('./home/FAQ').then(mod => ({ default: mod.FaqSection })), {
    loading: () => <div className="min-h-[400px] animate-pulse bg-secondary/20" />
});
