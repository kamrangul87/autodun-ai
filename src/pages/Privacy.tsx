import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";

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
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Overview</h2>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              Autodun operates <strong style={{ color: "#f0f6ff" }}>autodun.com</strong> and related tools including{" "}
              <strong style={{ color: "#f0f6ff" }}>ev.autodun.com</strong> and{" "}
              <strong style={{ color: "#f0f6ff" }}>mot.autodun.com</strong>. This policy explains what personal data we
              collect, why we collect it, which third parties receive it, and how to contact us about your data.
            </p>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7, marginTop: "12px" }}>
              The data controller is <strong style={{ color: "#f0f6ff" }}>Kamran Gul</strong>, operator of autodun.com.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>What we collect and why</h2>

            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" }}>
              Contact form submissions
            </h3>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              When you use the contact form at <strong style={{ color: "#f0f6ff" }}>autodun.com/contact</strong>, we
              collect your <strong style={{ color: "#f0f6ff" }}>name, email address, subject, and message</strong>. This
              data is submitted to{" "}
              <strong style={{ color: "#f0f6ff" }}>Formspree</strong> (formspree.io), our third-party form processor,
              solely to allow us to respond to your enquiry. Contact form messages are kept for up to 12 months, then
              deleted.
            </p>

            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" }}>
              Analytics (Google Analytics 4)
            </h3>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              <strong style={{ color: "#f0f6ff" }}>Google Analytics 4</strong> (tracking ID:{" "}
              <code style={{ color: "#00d48a" }}>G-ZPK0SR60XR</code>) is loaded on all pages of this site — both the
              SPA (via the site's root HTML shell and the react-ga4 library) and on each static blog page. It collects
              aggregated, pseudonymous data including page views, approximate geographic location, browser type, and
              session duration. Google acts as a data processor under its standard terms. No cookie-consent banner is
              currently implemented.
            </p>

            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" }}>
              Vehicle Registration Numbers (VRNs)
            </h3>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              The MOT Predictor tool (hosted at{" "}
              <strong style={{ color: "#f0f6ff" }}>mot.autodun.com</strong>) may process VRNs entered by users. VRNs are
              used solely to query publicly available DVSA MOT history data and are not linked to personal identities.
              VRNs are sent to the DVSA service to retrieve MOT history and are not retained by Autodun.
            </p>

            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" }}>
              Functional cookie (sidebar state)
            </h3>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              The site sets a first-party cookie (<code style={{ color: "#00d48a" }}>sidebar:state</code>) to remember
              whether the navigation sidebar is open or closed. This cookie contains no personal data, is used solely for
              UI state persistence, and has a max-age of 7 days (604,800 seconds).
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Third parties that receive data</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Formspree", purpose: "Contact form processing — receives name, email, subject, message.", url: "https://formspree.io/legal/privacy-policy" },
                { name: "Google Analytics", purpose: "Usage analytics — receives pseudonymous page-view and session data from all pages of this site.", url: "https://policies.google.com/privacy" },
              ].map((tp) => (
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
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Data retention</h2>
            <ul style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.8, paddingLeft: "20px" }}>
              <li>
                <strong style={{ color: "#f0f6ff" }}>Contact form data:</strong>{" "}
                Up to 12 months, then deleted.
              </li>
              <li>
                <strong style={{ color: "#f0f6ff" }}>Analytics data:</strong> Aggregated; Google's default retention
                applies (typically 14 months). No individual is identifiable from our analytics.
              </li>
              <li>
                <strong style={{ color: "#f0f6ff" }}>VRN queries:</strong>{" "}
                Not retained by Autodun.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Your rights (UK GDPR)</h2>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              Under UK GDPR you have the right to access, correct, or erase personal data we hold about you, to object
              to processing, and to lodge a complaint with the ICO (ico.org.uk). To exercise any of these rights, email{" "}
              <a href="mailto:info@autodun.com" style={{ color: "#00d48a" }}>
                info@autodun.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Contact</h2>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              For privacy-related enquiries, email{" "}
              <a href="mailto:info@autodun.com" style={{ color: "#00d48a" }}>
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
