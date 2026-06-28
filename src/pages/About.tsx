import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Zap, BarChart3, Bot, User } from "lucide-react";
import { setSEO } from "@/lib/seo";

const sections = [
  {
    icon: Zap,
    title: "EV Charging Maps",
    description:
      "We map over 30,000 UK charge points and apply AI suitability scoring to every station — so drivers find the right charger for their vehicle and journey, not just the nearest pin on a map.",
  },
  {
    icon: BarChart3,
    title: "MOT Risk Prediction",
    description:
      "Our MOT Predictor analyses historical DVSA data to estimate failure risk before your test. It flags the categories most likely to fail based on your vehicle's age, mileage, and past results.",
  },
  {
    icon: Bot,
    title: "AI Car Guidance",
    description:
      "The Autodun AI Assistant delivers structured automotive guidance powered by real UK data — covering recalls, running costs, MOT history interpretation, and practical maintenance advice.",
  },
];

const faqs = [
  {
    q: "Who built Autodun?",
    a: "Autodun was founded by Kamran Gul, a UK-based product and data engineer focused on making vehicle intelligence accessible to everyday drivers. All tools are free to use with no account required.",
  },
  {
    q: "Is Autodun affiliated with DVSA or the government?",
    a: "No. Autodun is an independent platform. MOT history data is sourced from public DVSA records, but Autodun is not affiliated with, endorsed by, or connected to DVSA or any UK government agency. Risk predictions are independent analytics.",
  },
  {
    q: "Do I need an account to use Autodun tools?",
    a: "No account is required for any Autodun tool. All features — EV charging maps, MOT predictor, and the AI assistant — are completely free and work without registration.",
  },
  {
    q: "How accurate is the MOT risk prediction?",
    a: "Predictions are based on statistical patterns from DVSA historical data and should be treated as guidance, not a guarantee. They are most useful for identifying categories worth checking before a test, not as a definitive pass/fail forecast.",
  },
];

export default function About() {
  useEffect(() => {
    setSEO({
      title: "About Autodun — Free AI Vehicle Tools for UK Drivers",
      description:
        "Learn about Autodun, the UK platform for EV charging maps, MOT risk prediction and AI car advice. Founded by Kamran Gul.",
      keywords:
        "about Autodun, UK vehicle tools, MOT predictor, EV charging map UK, Kamran Gul, free car tools UK",
      canonical: "https://www.autodun.com/about",
      ogUrl: "https://www.autodun.com/about",
    });

    // Inject FAQ JSON-LD
    const existing = document.getElementById("faq-schema-about");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "faq-schema-about";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById("faq-schema-about")?.remove();
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 64px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "linear-gradient(180deg, #0d1b2a 0%, #070f1a 100%)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: 700,
              color: "#00d48a",
              background: "rgba(0,212,138,0.08)",
              borderRadius: "999px",
              padding: "6px 14px",
              marginBottom: "24px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Zap style={{ width: "13px", height: "13px" }} />
            About Autodun
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            AI Vehicle Intelligence for UK Drivers
          </h1>

          <p style={{ fontSize: "17px", color: "#8899aa", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto" }}>
            Autodun is a free UK platform combining real vehicle data with AI to help drivers make smarter decisions — about their MOT, their EV journey, and their car.
          </p>
        </div>
      </section>

      {/* Three platform sections */}
      <section style={{ padding: "72px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#00d48a",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            What We Build
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 700,
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Three tools, one platform
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {sections.map((s) => (
              <div
                key={s.title}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  background: "#111f33",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(0,212,138,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <s.icon style={{ width: "22px", height: "22px", color: "#00d48a" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.65, margin: 0 }}>
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section
        style={{
          padding: "72px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "#0d1b2a",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(0,212,138,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <User style={{ width: "26px", height: "26px", color: "#00d48a" }} />
          </div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#00d48a",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Founder
          </p>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>
            Built by Kamran Gul
          </h2>
          <p style={{ fontSize: "16px", color: "#8899aa", lineHeight: 1.7, marginBottom: "16px" }}>
            Autodun was founded by Kamran Gul, a UK-based product and data engineer. The platform grew out of a frustration with how hard it is for everyday drivers to access vehicle intelligence that actually helps — not just raw data dumps.
          </p>
          <p style={{ fontSize: "16px", color: "#8899aa", lineHeight: 1.7, margin: 0 }}>
            Every tool on Autodun is free, requires no account, and is built around what UK drivers actually need to know.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: "#111f33",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "15px", color: "#8899aa", lineHeight: 1.65, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
