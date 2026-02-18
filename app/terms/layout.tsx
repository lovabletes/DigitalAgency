import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | SiteCreation.in",
    description: "SiteCreation.in's terms of service. Understand the legal framework governing your use of our elite digital services and professional engagements.",
    keywords: ["SiteCreation Terms of Service", "Legal Terms", "Service Agreement", "Digital Agency Terms"],
    alternates: {
        canonical: "/terms",
    },
    openGraph: {
        title: "Terms of Service | SiteCreation.in",
        description: "Legal framework governing your use of SiteCreation.in's elite digital services.",
        url: "https://sitecreation.in/terms",
        siteName: "SiteCreation.in",
        images: [{ url: "/Banner.avif", width: 1200, height: 630, alt: "SiteCreation.in Terms of Service" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | SiteCreation.in",
        description: "Legal framework governing your use of SiteCreation.in's elite digital services.",
        images: ["/Banner.avif"],
    },
    robots: {
        index: true,
        follow: false,
    },
};

export default function TermsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
