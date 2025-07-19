/**
 * Cookie utility functions
 */

// Cookie consent values
export enum CookieConsent {
    ACCEPTED = 'accepted',
    DECLINED = 'declined',
}

// Cookie consent key
export const COOKIE_CONSENT_KEY = 'cookieConsent';

/**
 * Get cookie consent value from localStorage
 */
export const getCookieConsent = (): CookieConsent | null => {
    if (typeof window === 'undefined') return null;

    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === CookieConsent.ACCEPTED || consent === CookieConsent.DECLINED) {
        return consent as CookieConsent;
    }
    return null;
};

/**
 * Save cookie consent value to localStorage
 */
export const setCookieConsent = (consent: CookieConsent): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
};

/**
 * Check if cookies are accepted
 */
export const areCookiesAccepted = (): boolean => {
    return getCookieConsent() === CookieConsent.ACCEPTED;
};

/**
 * Clear cookie consent from localStorage
 */
export const clearCookieConsent = (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(COOKIE_CONSENT_KEY);
}; 