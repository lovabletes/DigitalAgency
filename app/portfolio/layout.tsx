import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Elite Digital Masterpieces by SiteCreation.in",
    description: "Explore our curated showcase of high-performance web and mobile projects. SiteCreation.in delivers bespoke digital experiences for global and local Chandigarh brands.",
    keywords: ["SiteCreation Portfolio", "Web Development Projects", "Luxury Digital Design Case Studies", "Chandigarh App Development", "Website Portfolio India"],
    alternates: {
        canonical: "/portfolio",
    },
    openGraph: {
        title: "Portfolio | Elite Digital Masterpieces by SiteCreation.in",
        description: "Curated showcase of high-performance web and mobile projects. Bespoke digital experiences for global and Chandigarh brands.",
        url: "https://sitecreation.in/portfolio",
        siteName: "SiteCreation.in",
        images: [{ url: "/images/Hero-banner.avif", width: 1200, height: 630, alt: "SiteCreation.in Portfolio" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Elite Digital Masterpieces by SiteCreation.in",
        description: "Curated showcase of elite web and mobile engineering projects from Chandigarh's premier digital agency.",
        images: ["/images/Hero-banner.avif"],
    },
};

export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
