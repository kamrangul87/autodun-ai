import ReactGA from "react-ga4";

export const GA_ID = "G-ZPK0SR60XR";

type Consent = "accepted" | "rejected" | null;

declare global {
  interface Window {
    AutodunConsent?: { get: () => Consent; open: () => void };
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

/** Initialises GA4 only if the visitor has accepted analytics cookies. */
export const initGA = () => {
  if (ReactGA.isInitialized || getConsent() !== "accepted") return;
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
