import {
  navLinks,
  stats,
  features,
  testimonials,
  services,
  packages,
  projects,
  brands
} from "@/data";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProjectsGallery } from "@/components/home/ProjectsGallery";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { Footer } from "@/components/home/Footer";
import { ScrollProgressBar } from "@/components/home/ScrollProgressBar";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgressBar />
      <Header navLinks={navLinks} />

      <main className="flex-1 relative">
        <div className="bg-noise" />

        <Hero stats={stats} brands={brands} />

        <ServicesGrid services={services} />

        <WhyChooseUs features={features} />

        <ProjectsGallery projects={projects} />

        <Pricing packages={packages} />

        <Testimonials testimonials={testimonials} />

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}

