import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Elite Digital Masterpieces by SiteCreation.in",
    description: "Explore our curated showcase of high-performance web and mobile projects. SiteCreation.in delivers bespoke digital experiences for global and local Chandigarh brands.",
    keywords: ["SiteCreation Portfolio", "Web Development Projects", "Luxury Digital Design Case Studies", "Chandigarh App Development"],
};

export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
