import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | SiteCreation.in",
    description: "SiteCreation.in's privacy policy. Learn how we collect, use, and protect your personal data in compliance with applicable data protection laws.",
    keywords: ["SiteCreation Privacy Policy", "Data Protection", "GDPR Compliance", "Personal Data Policy"],
    alternates: {
        canonical: "/privacy",
    },
    openGraph: {
        title: "Privacy Policy | SiteCreation.in",
        description: "How SiteCreation.in collects, uses, and protects your personal data.",
        url: "https://sitecreation.in/privacy",
        siteName: "SiteCreation.in",
        images: [{ url: "/Banner.avif", width: 1200, height: 630, alt: "SiteCreation.in Privacy Policy" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | SiteCreation.in",
        description: "How SiteCreation.in collects, uses, and protects your personal data.",
        images: ["/Banner.avif"],
    },
    robots: {
        index: true,
        follow: false,
    },
};

export default function PrivacyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
