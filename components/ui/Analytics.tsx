"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

export function Analytics() {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        const consent = getCookieConsentValue();
        if (consent === "true") {
            setHasConsent(true);
        }
        
        // Listen for custom event that we can dispatch when the user clicks 'Accept'
        const handleConsent = () => setHasConsent(true);
        globalThis.addEventListener("cookieConsentAccepted", handleConsent);
        return () => globalThis.removeEventListener("cookieConsentAccepted", handleConsent);
    }, []);

    if (!hasConsent) return null;

    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-DXCZF3VKS6"
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-DXCZF3VKS6');
                `}
            </Script>
            <Script id="tawk-to" strategy="lazyOnload">
                {`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/69a573dc6f7a6f1c35439427/1jin4p5e5';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                `}
            </Script>
        </>
    );
}
