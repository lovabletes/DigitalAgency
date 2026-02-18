import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | SiteCreation.in",
    description: "SiteCreation.in's cookie policy. Learn about the cookies we use, why we use them, and how you can manage your preferences.",
    keywords: ["SiteCreation Cookie Policy", "Cookie Consent", "Browser Cookies", "Data Privacy Cookies"],
    alternates: {
        canonical: "/cookies",
    },
    openGraph: {
        title: "Cookie Policy | SiteCreation.in",
        description: "Learn about the cookies SiteCreation.in uses and how to manage your preferences.",
        url: "https://sitecreation.in/cookies",
        siteName: "SiteCreation.in",
        images: [{ url: "/Banner.avif", width: 1200, height: 630, alt: "SiteCreation.in Cookie Policy" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cookie Policy | SiteCreation.in",
        description: "Learn about the cookies SiteCreation.in uses and how to manage your preferences.",
        images: ["/Banner.avif"],
    },
    robots: {
        index: true,
        follow: false,
    },
};

export default function CookiesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
