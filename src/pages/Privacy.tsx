import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import { openCookieSettings } from "@/lib/ga";

const h2 = { fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" } as const;
const h3 = { fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" } as const;
const p = { fontSize: "15px", color: "#8899aa", lineHeight: 1.7 } as const;
const pGap = { ...p, marginTop: "12px" } as const;
const ul = { fontSize: "15px", color: "#8899aa", lineHeight: 1.8, paddingLeft: "20px" } as const;
const strong = { color: "#f0f6ff" } as const;
const code = { color: "#00d48a" } as const;
const link = { color: "#00d48a" } as const;

const processors = [
  {
    name: "Vercel",
    purpose:
      "Hosting for autodun.com and its subdomains — receives IP addresses and request logs for every page and API request.",
    url: "https://vercel.com/legal/privacy-policy",
  },
  {
    name: "Formspree",
    purpose: "Contact form processing — receives name, email, subject, message.",
    url: "https://formspree.io/legal/privacy-policy",
  },
  {
    name: "Google Analytics",
    purpose:
      "Usage analytics, only if you accept analytics cookies — receives cookie identifiers, page views, device and browser details, and IP-derived approximate location.",
    url: "https://policies.google.com/privacy",
  },
  {
    name: "Google Fonts",
    purpose:
      "Serves the Inter typeface on autodun.com — receives your IP address and browser details when the font is downloaded.",
    url: "https://policies.google.com/privacy",
  },
  {
    name: "Supabase",
    purpose:
      "Database for the EV Charger Finder (ev.autodun.com) — stores charger feedback you choose to submit (rating, optional comment, station location).",
    url: "https://supabase.com/privacy",
  },
  {
    name: "OpenStreetMap / Nominatim",
    purpose:
      "Map tiles and place search on ev.autodun.com and ai.autodun.com — receives your IP address, the map area viewed and any place name you search for.",
    url: "https://osmfoundation.org/wiki/Privacy_Policy",
  },
  {
    name: "postcodes.io",
    purpose: "Postcode lookup on ev.autodun.com and ai.autodun.com — receives any postcode you search for.",
    url: "https://postcodes.io/about",
  },
  {
    name: "unpkg and cdnjs (Cloudflare)",
    purpose:
      "Public CDNs serving map marker icons (ev.autodun.com) and the PDF report library (mot.autodun.com) — receive your IP address and browser details.",
    url: "https://www.cloudflare.com/privacypolicy/",
  },
  {
    name: "DVSA (MOT History API)",
    purpose:
      "Receives the registration number you enter on mot.autodun.com, solely to return that vehicle's MOT history.",
    url: "https://www.gov.uk/government/organisations/driver-and-vehicle-standards-agency/about/personal-information-charter",
  },
];

const cookies = [
  {
    name: "cookie_consent",
    detail: "Stores your analytics cookie choice (accepted or rejected) for autodun.com and its subdomains. 6 months. Strictly necessary.",
  },
  {
    name: "sidebar:state",
    detail: "Remembers whether the navigation sidebar is open or closed. 7 days. Strictly necessary (UI state, no personal data).",
  },
  {
    name: "_ga, _ga_ZPK0SR60XR",
    detail:
      "Google Analytics identifiers — set only if you accept analytics cookies. Up to 2 months. Analytics (consent).",
  },
];

export default function Privacy() {
  useEffect(() => {
    setSEO({
      title: "Privacy Policy — Autodun",
      description:
        "Autodun privacy policy: what data we collect, why, which third parties receive it, and how to contact us about your data.",
      canonical: "https://autodun.com/privacy",
      ogUrl: "https://autodun.com/privacy",
    });
  }, []);

  return (
    <Layout>
      <section
        style={{
          padding: "80px 24px 64px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "linear-gradient(180deg, #0d1b2a 0%, #070f1a 100%)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: "15px", color: "#8899aa" }}>
            Last updated: October 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

          <div>
            <h2 style={h2}>Overview</h2>
            <p style={p}>
              Autodun operates <strong style={strong}>autodun.com</strong> and related tools including{" "}
              <strong style={strong}>ev.autodun.com</strong>, <strong style={strong}>mot.autodun.com</strong> and{" "}
              <strong style={strong}>ai.autodun.com</strong>. This policy explains what personal data we collect, why we
              collect it, which third parties receive it, and how to contact us about your data.
            </p>
            <p style={pGap}>
              The data controller is <strong style={strong}>Kamran Gul</strong>, operator of autodun.com.
            </p>
          </div>

          <div>
            <h2 style={h2}>What we collect and why</h2>

            <h3 style={h3}>Contact form submissions</h3>
            <p style={p}>
              When you use the contact form at <strong style={strong}>autodun.com/contact</strong>, we collect your{" "}
              <strong style={strong}>name, email address, subject, and message</strong>. This data is submitted to{" "}
              <strong style={strong}>Formspree</strong> (formspree.io), our third-party form processor, solely to allow
              us to respond to your enquiry. Contact form messages are kept for up to 12 months, then deleted.
            </p>
            <p style={pGap}>
              <strong style={strong}>Lawful basis:</strong> legitimate interests (responding to your enquiry).
            </p>

            <h3 style={h3}>Analytics (Google Analytics 4)</h3>
            <p style={p}>
              We use <strong style={strong}>Google Analytics 4</strong> (measurement ID:{" "}
              <code style={code}>G-ZPK0SR60XR</code>) to understand how the site is used. Google Analytics loads only if
              you accept analytics cookies; you can change your choice at any time via Cookie settings in the footer.
              It collects page views, approximate geographic location, device and browser type, and session duration.
              Google Analytics uses cookie identifiers, which are pseudonymous personal data. Google acts as our data
              processor under its standard terms.
            </p>
            <p style={pGap}>
              <strong style={strong}>Lawful basis:</strong> consent. If you reject or never accept analytics cookies,
              Google Analytics is never loaded.
            </p>

            <h3 style={h3}>Vehicle Registration Numbers (VRNs)</h3>
            <p style={p}>
              The MOT Predictor tool (hosted at <strong style={strong}>mot.autodun.com</strong>) processes VRNs you
              enter. Registration numbers may be personal data. We send them to DVSA only to retrieve MOT history and do
              not store them.
            </p>
            <p style={pGap}>
              <strong style={strong}>Lawful basis:</strong> legitimate interests (providing the tool you requested).
            </p>

            <h3 style={h3}>Hosting and server logs</h3>
            <p style={p}>
              Our hosting provider, <strong style={strong}>Vercel</strong>, receives your IP address and standard
              request information (URL, time, browser user agent) whenever you load a page or use a tool, and keeps
              short-lived request logs for security and operation of the service.
            </p>
            <p style={pGap}>
              <strong style={strong}>Lawful basis:</strong> legitimate interests (securely delivering the website).
            </p>
          </div>

          <div>
            <h2 style={h2}>Cookies</h2>
            <ul style={ul}>
              {cookies.map((c) => (
                <li key={c.name}>
                  <code style={code}>{c.name}</code> — {c.detail}
                </li>
              ))}
            </ul>
            <p style={pGap}>
              You can change your analytics choice at any time via{" "}
              <button
                type="button"
                onClick={openCookieSettings}
                style={{ ...link, background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit", textDecoration: "underline" }}
              >
                Cookie settings
              </button>
              .
            </p>
          </div>

          <div>
            <h2 style={h2}>Third parties that receive data (processors and recipients)</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {processors.map((tp) => (
                <div
                  key={tp.name}
                  style={{
                    background: "#111f33",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>{tp.name}</p>
                  <p style={{ fontSize: "14px", color: "#8899aa", margin: "0 0 6px" }}>{tp.purpose}</p>
                  <a href={tp.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#00d48a" }}>
                    Their privacy policy ↗
                  </a>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "#556677", marginTop: "16px", lineHeight: 1.7 }}>
              We do not sell or rent personal data. We do not share data with advertising networks or data brokers.
            </p>
          </div>

          <div>
            <h2 style={h2}>International transfers</h2>
            <p style={p}>
              Formspree, Google and Vercel may process data in the US, covered by the UK–US Data Bridge or the UK
              International Data Transfer Addendum.
            </p>
          </div>

          <div>
            <h2 style={h2}>Data retention</h2>
            <ul style={ul}>
              <li>
                <strong style={strong}>Contact form data:</strong> Up to 12 months, then deleted.
              </li>
              <li>
                <strong style={strong}>Analytics data:</strong> 2 months.
              </li>
              <li>
                <strong style={strong}>VRN queries:</strong> Not stored by Autodun.
              </li>
              <li>
                <strong style={strong}>Cookie choice:</strong> 6 months, after which we ask again.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>Your rights (UK GDPR)</h2>
            <p style={p}>Under UK GDPR you have the right to:</p>
            <ul style={ul}>
              <li>access the personal data we hold about you;</li>
              <li>have inaccurate data corrected;</li>
              <li>have your data erased;</li>
              <li>restrict how we process your data;</li>
              <li>data portability — receive your data in a structured, machine-readable format;</li>
              <li>object to processing based on legitimate interests;</li>
              <li>
                withdraw consent at any time (for analytics, via Cookie settings in the footer) — this does not affect
                processing carried out before you withdrew it;
              </li>
              <li>lodge a complaint with the ICO (ico.org.uk).</li>
            </ul>
            <p style={pGap}>
              To exercise any of these rights, email{" "}
              <a href="mailto:info@autodun.com" style={link}>
                info@autodun.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 style={h2}>Changes to this policy</h2>
            <p style={p}>
              We may update this policy when our services or the law change. The "Last updated" date at the top of this
              page shows when it was last revised; significant changes will be highlighted on this page.
            </p>
          </div>

          <div>
            <h2 style={h2}>Contact</h2>
            <p style={p}>
              For privacy-related enquiries, email{" "}
              <a href="mailto:info@autodun.com" style={link}>
                info@autodun.com
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
}
