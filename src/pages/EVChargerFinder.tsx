import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import { EVChargerDemo } from "@/components/demos/EVChargerDemo";
import {
  ArrowRight,
  AlertTriangle,
  Zap,
  MapPin,
  SlidersHorizontal,
  Map,
  LocateFixed,
  MessageSquare,
  Users,
  Brain,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI suitability score on every station",
    description:
      "Every charge point is scored by our AI model using real user feedback and reliability data.",
  },
  {
    icon: SlidersHorizontal,
    title: "Filter by connector type and power",
    description:
      "Narrow results by CCS, CHAdeMO, Type 2, rapid, fast, or slow — find exactly what your car needs.",
  },
  {
    icon: Map,
    title: "Heatmap and marker views",
    description:
      "Switch between a density heatmap for coverage gaps and individual markers for station details.",
  },
  {
    icon: LocateFixed,
    title: "Locate me — find chargers near you",
    description:
      "One tap to find all charge points within your chosen radius of your current location.",
  },
];

const aiSteps = [
  { icon: MessageSquare, title: "Feedback Collection", description: "Users rate stations after charging sessions" },
  { icon: Users, title: "Aggregation", description: "Ratings pooled across all users over time" },
  { icon: Brain, title: "Pattern Analysis", description: "AI identifies reliability trends per station" },
  { icon: TrendingUp, title: "Score Update", description: "Stations receive live updated suitability scores" },
];

const stats = [
  { value: "30,000+", label: "UK charge points mapped" },
  { value: "Live", label: "Data updated daily" },
  { value: "AI scored", label: "Every station rated" },
];

export default function EVChargerFinder() {
  useEffect(() => {
    setSEO({
      title: "EV Charging Station Finder UK | Autodun — Find Charge Points Near You",
      description:
        "Find EV charging stations across the UK. Browse 30,000+ charge points by location with AI suitability scoring. Free EV charging map with live data.",
      keywords:
        "EV charging stations UK, EV charger finder, electric vehicle charging map, charge points near me, UK EV map, public charging UK, fast chargers UK, CCS charging UK",
      canonical: "https://www.autodun.com/ev-charger-finder",
      ogUrl: "https://www.autodun.com/ev-charger-finder",
    });
  }, []);

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────── */}
      <section
        className="hero-gradient hero-pattern border-b border-border"
        style={{ paddingTop: "100px", paddingBottom: "80px" }}
      >
        <div className="container-main relative z-10">
          <div className="text-center mx-auto" style={{ maxWidth: "800px" }}>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1.5 mb-6 tracking-wide uppercase"
              style={{ color: "#00d48a", background: "rgba(0,212,138,0.1)" }}
            >
              <Zap className="h-3.5 w-3.5" />
              EV Charging Map
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.15", color: "#ffffff" }}
            >
              Find EV Charging Stations Across the UK
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8899aa" }}
            >
              Browse 30,000+ charge points with AI suitability scoring. Live data updated daily.
            </p>

            <a
              href="https://ev.autodun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#00d48a",
                color: "#070f1a",
                padding: "14px 32px",
              }}
            >
              Open EV Charger Finder
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────── */}
      <section
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)", padding: "20px 0" }}
      >
        <div className="container-main">
          <div
            className="grid grid-cols-3 divide-x"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 py-3 px-4">
                <span className="text-2xl font-bold" style={{ color: "#00d48a" }}>
                  {s.value}
                </span>
                <span className="text-xs text-center" style={{ color: "#8899aa" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00d48a" }}
            >
              What You Get
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff" }}
            >
              Everything You Need to Find Your Next Charge
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              Purpose-built for UK EV drivers — free to use, no account required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-5 rounded-xl"
                style={{
                  backgroundColor: "#111f33",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,212,138,0.1)" }}
                >
                  <f.icon className="h-5 w-5" style={{ color: "#00d48a" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1 text-base"
                    style={{ color: "#ffffff" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://ev.autodun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#00d48a",
                color: "#070f1a",
                padding: "12px 28px",
              }}
            >
              Open EV Charger Finder
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Animated Demo ──────────────────────────── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          backgroundColor: "#0d1b2a",
        }}
      >
        <div className="container-main">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00d48a" }}
            >
              See It In Action
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#ffffff" }}
            >
              How the EV Charger Finder Works
            </h2>
            <p style={{ color: "#8899aa" }}>
              From postcode search to AI-scored station — in seconds.
            </p>
          </div>
          <div className="max-w-3xl mx-auto aspect-[16/10]">
            <EVChargerDemo />
          </div>
        </div>
      </section>

      {/* ── AI Scoring ─────────────────────────────── */}
      <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-main">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00d48a" }}
            >
              AI Features
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#ffffff" }}
            >
              AI-Powered Station Scoring
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "480px", margin: "0 auto" }}>
              Real user feedback feeds our AI to keep suitability scores accurate and up to date.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
            {aiSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "rgba(0,212,138,0.1)",
                    border: "1px solid rgba(0,212,138,0.2)",
                  }}
                >
                  <step.icon className="h-6 w-6" style={{ color: "#00d48a" }} />
                </div>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-bold"
                  style={{ backgroundColor: "#00d48a", color: "#070f1a" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#ffffff" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ─────────────────────────────── */}
      <section
        style={{
          padding: "60px 0",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="container-narrow">
          <div
            className="flex gap-4 items-start p-6 rounded-xl"
            style={{
              background: "rgba(245, 158, 11, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
            }}
          >
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(245, 158, 11, 0.12)" }}
            >
              <AlertTriangle className="h-5 w-5" style={{ color: "#f59e0b" }} />
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "#f0f6ff" }}>
                Important Information
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "#f0f6ff" }}>
                {[
                  "This is a research and decision-support tool, not an official government service",
                  "Data is sourced from public datasets and may not reflect real-time availability",
                  "Always verify charging point status before travel planning",
                  "Autodun is not affiliated with any charging network operator",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: "#f59e0b" }} className="font-medium shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Tool Embed ─────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <iframe
          src="https://ev.autodun.com"
          title="Autodun EV Charger Finder"
          style={{ border: "none", display: "block", width: "100%", height: "85vh" }}
        />
      </section>
    </Layout>
  );
}
