import ReactGA from "react-ga4";

export const GA_ID = "G-ZPK0SR60XR";

type Consent = "accepted" | "rejected" | null;

declare global {
  interface Window {
    AutodunConsent?: { get: () => Consent; open: () => void };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Visitor's choice from the "cookie_consent" cookie (managed by /consent.js). */
export const getConsent = (): Consent => {
  const m = document.cookie.match(/(?:^|;\s*)cookie_consent=(accepted|rejected)/);
  return m ? (m[1] as Consent) : null;
};

export const openCookieSettings = () => {
  window.AutodunConsent?.open();
};

/**
 * Initialises GA4 for Consent Mode v2 (advanced).
 *
 * consent.js has already: set denied defaults, applied a granted update when
 * the visitor previously accepted, and loaded gtag.js. This call must not
 * inject a second copy of gtag.js or send a second page_view.
 */
export const initGA = () => {
  if (ReactGA.isInitialized) return;
  // consent.js already injected gtag.js (id="ga-gtag"). Skip react-ga4's loader
  // so we do not double-load the tag or overwrite the consent queue.
  if (document.getElementById("ga-gtag")) {
    (ReactGA as unknown as { _hasLoadedGA: boolean })._hasLoadedGA = true;
  }
  ReactGA.initialize(GA_ID, { gtagOptions: { send_page_view: false } });
  trackPageView(window.location.pathname + window.location.search);
};

export const trackPageView = (path: string) => {
  if (!ReactGA.isInitialized) return;
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
