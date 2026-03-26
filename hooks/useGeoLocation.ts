"use client";

import { useState, useEffect } from "react";

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'INR';

// Detect currency from browser timezone - works instantly on client
function detectCurrencyFromTimezone(): CurrencyCode {
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Indian timezone
        if (timeZone === 'Asia/Kolkata' || timeZone === 'Asia/Calcutta') {
            return 'INR';
        }
        // UK timezone
        if (timeZone === 'Europe/London') {
            return 'GBP';
        }
        // Eurozone timezones
        const euroZones = ['Europe/Berlin', 'Europe/Paris', 'Europe/Madrid', 'Europe/Rome', 
                          'Europe/Amsterdam', 'Europe/Vienna', 'Europe/Brussels'];
        if (euroZones.includes(timeZone)) {
            return 'EUR';
        }
    } catch {
        // Fallback to USD if timezone detection fails
    }
    
    return 'USD';
}

export function useGeoLocation() {
    // Default to USD for SSR, then detect on client immediately
    const [currency, setCurrency] = useState<CurrencyCode>('USD');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Immediate detection on mount - no delay, no API call
        const detected = detectCurrencyFromTimezone();
        setCurrency(detected);
        setIsLoading(false);
    }, []);

    return { currency, isLoading };
}
