import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact SiteCreation.in | Start Your Project in Chandigarh",
    description: "Get in touch with SiteCreation.in, elite digital agency in Chandigarh. Start your journey with high-performance web development and cloud engineering today.",
    keywords: ["Contact SiteCreation", "Hire Web Developers Chandigarh", "Digital Agency Inquiry", "Software Consulting India", "Web Development Quote Chandigarh"],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact SiteCreation.in | Start Your Project in Chandigarh",
        description: "Get in touch with SiteCreation.in, elite digital agency in Chandigarh. Start your journey with high-performance web development today.",
        url: "https://sitecreation.in/contact",
        siteName: "SiteCreation.in",
        images: [{ url: "/Banner.avif", width: 1200, height: 630, alt: "Contact SiteCreation.in" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact SiteCreation.in | Start Your Project",
        description: "Reach out to Chandigarh's elite digital agency. We respond to all inquiries within 24 hours.",
        images: ["/Banner.avif"],
    },
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
