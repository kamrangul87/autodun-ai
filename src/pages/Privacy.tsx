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
              The data controller is <strong style={{ color: "#f0f6ff" }}>Kamran Gul</strong>, operator of autodun.com.{" "}
              <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: Registered address and ICO registration number to be confirmed.]</strong>
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
              solely to allow us to respond to your enquiry.{" "}
              <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: Retention period for form submissions — e.g.
              "deleted within 90 days of response".]</strong>
            </p>

            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" }}>
              Analytics (Google Analytics 4)
            </h3>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              Our blog pages load{" "}
              <strong style={{ color: "#f0f6ff" }}>Google Analytics 4</strong> (tracking ID:{" "}
              <code style={{ color: "#00d48a" }}>G-ZPK0SR60XR</code>) via Google's gtag.js script. This collects
              aggregated, pseudonymous data including page views, approximate geographic location, browser type, and
              session duration. Google acts as a data processor under its standard terms.{" "}
              <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: Whether GA4 is also loaded on SPA pages (not
              only static blog HTML), and whether a GDPR consent banner is implemented.]</strong>
            </p>

            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" }}>
              Vehicle Registration Numbers (VRNs)
            </h3>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              The MOT Predictor tool (hosted at{" "}
              <strong style={{ color: "#f0f6ff" }}>mot.autodun.com</strong>) may process VRNs entered by users. VRNs are
              used solely to query publicly available DVSA MOT history data and are not linked to personal identities.
              DVSA is the source of this data, not a recipient of user data.{" "}
              <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: Whether VRNs are logged server-side, and for how
              long.]</strong>
            </p>

            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2eaf4", marginBottom: "8px", marginTop: "20px" }}>
              Functional cookie (sidebar state)
            </h3>
            <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.7 }}>
              The site sets a first-party cookie to remember whether the navigation sidebar is open or closed. This
              cookie contains no personal data and is used solely for UI state persistence.{" "}
              <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: Cookie name and max-age value to be confirmed from
              production config.]</strong>
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Third parties that receive data</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Formspree", purpose: "Contact form processing — receives name, email, subject, message.", url: "https://formspree.io/legal/privacy-policy" },
                { name: "Google Analytics", purpose: "Usage analytics — receives pseudonymous page-view and session data from blog pages.", url: "https://policies.google.com/privacy" },
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
                <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: retention period]</strong>
              </li>
              <li>
                <strong style={{ color: "#f0f6ff" }}>Analytics data:</strong> Aggregated; Google's default retention
                applies (typically 14 months). No individual is identifiable from our analytics.
              </li>
              <li>
                <strong style={{ color: "#f0f6ff" }}>VRN queries:</strong>{" "}
                <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: whether queries are logged and for how long]</strong>
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
              .{" "}
              <strong style={{ color: "#f0f6ff" }}>[OWNER TO CONFIRM: postal address for formal data requests, if
              required.]</strong>
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
}
