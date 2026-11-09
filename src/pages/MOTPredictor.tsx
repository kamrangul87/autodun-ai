import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import { MOTDemo } from "@/components/demos/MOTDemo";
import {
  ArrowRight,
  AlertTriangle,
  Gauge,
  BarChart3,
  Wrench,
  CircleDollarSign,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Instant risk score based on age and mileage",
    description:
      "Input your vehicle's age and mileage to get an immediate Low / Medium / High failure risk estimate.",
  },
  {
    icon: BarChart3,
    title: "Historical MOT data analysis",
    description:
      "Powered by live DVSA MOT History records — the same data used by official testers.",
  },
  {
    icon: Wrench,
    title: "Fix now vs monitor guidance",
    description:
      "Receive clear guidance on which issues are worth addressing before your test to reduce failure risk.",
  },
  {
    icon: CircleDollarSign,
    title: "No account needed — completely free",
    description:
      "Run as many predictions as you like. No sign-up, no subscription, no hidden costs.",
  },
];

const inputs = [
  { label: "Vehicle Age", detail: "Years since first registration" },
  { label: "Mileage", detail: "Current odometer reading" },
  { label: "Fuel Type", detail: "Petrol, diesel, electric, or hybrid" },
  { label: "Previous Failures", detail: "Historical MOT failure count" },
];

export default function MOTPredictor() {
  useEffect(() => {
    setSEO({
      title: "Free MOT Risk Predictor | Autodun — Estimate MOT Failure Risk Before Your Test",
      description:
        "Estimate your MOT failure risk for free. Enter your vehicle age, mileage and history to get an instant AI risk score. Powered by DVSA data. No account needed.",
      keywords:
        "MOT risk predictor, MOT failure risk, free MOT check, MOT history checker, DVSA MOT data, MOT prediction UK, car MOT checker",
      canonical: "https://autodun.com/mot-predictor",
      ogUrl: "https://autodun.com/mot-predictor",
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
              <Shield className="h-3.5 w-3.5" />
              DVSA Data — Free Tool
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.15", color: "#ffffff" }}
            >
              Predict Your MOT Failure Risk — Free
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8899aa" }}
            >
              Enter your vehicle details and get an instant AI risk score powered by DVSA data.
            </p>

            <a
              href="https://mot.autodun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#00d48a",
                color: "#070f1a",
                padding: "14px 32px",
              }}
            >
              Open MOT Predictor
              <ArrowRight className="h-5 w-5" />
            </a>
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
              Know Your Risk Before the Test
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              Use real DVSA data to understand where your vehicle stands — and act before it's too late.
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
              href="https://mot.autodun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#00d48a",
                color: "#070f1a",
                padding: "12px 28px",
              }}
            >
              Open MOT Predictor
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── What the Model Uses ────────────────────── */}
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
              Inputs
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#ffffff" }}
            >
              What the Model Uses
            </h2>
            <p style={{ color: "#8899aa" }}>
              Four data points — that's all it takes for an accurate risk estimate.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {inputs.map((inp, i) => (
              <div
                key={inp.label}
                className="text-center p-5 rounded-xl"
                style={{
                  backgroundColor: "#111f33",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold"
                  style={{ backgroundColor: "#00d48a", color: "#070f1a" }}
                >
                  {i + 1}
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#ffffff" }}>
                  {inp.label}
                </p>
                <p className="text-xs" style={{ color: "#8899aa" }}>
                  {inp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Animated Demo ──────────────────────────── */}
      <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
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
              From Details to Risk Score in Seconds
            </h2>
            <p style={{ color: "#8899aa" }}>
              The tool analyses your vehicle against thousands of historical MOT records.
            </p>
          </div>
          <div className="max-w-3xl mx-auto aspect-[16/10]">
            <MOTDemo />
          </div>
        </div>
      </section>

      {/* ── DVSA Banner ────────────────────────────── */}
      <section
        style={{
          padding: "24px 0",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backgroundColor: "rgba(0,212,138,0.05)",
        }}
      >
        <div className="container-main">
          <div className="flex items-center justify-center gap-3 text-center flex-wrap">
            <Shield className="h-5 w-5 shrink-0" style={{ color: "#00d48a" }} />
            <p className="text-sm" style={{ color: "#8899aa" }}>
              <span className="font-semibold" style={{ color: "#f0f6ff" }}>
                Live DVSA Integration
              </span>{" "}
              — MOT history sourced directly from DVSA records. Risk predictions are independent analytics.
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ─────────────────────────────── */}
      <section style={{ padding: "60px 0" }}>
        <div className="container-narrow">
          <div
            className="flex gap-4 items-start p-6 rounded-xl"
            style={{
              background: "rgba(245, 158, 11, 0.10)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
            }}
          >
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(245, 158, 11, 0.15)" }}
            >
              <AlertTriangle className="h-5 w-5" style={{ color: "#f59e0b" }} />
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "#f0f6ff" }}>
                Important Information
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "#f0f6ff" }}>
                {[
                  "MOT history is sourced from live DVSA records",
                  "Risk predictions are independent analytics and do not constitute DVSA advice",
                  "Predictions are not an official MOT result or guarantee of test outcome",
                  "Always rely on official DVSA MOT testing for vehicle roadworthiness certification",
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
          src="https://mot.autodun.com"
          title="Autodun MOT Predictor"
          style={{ border: "none", display: "block", width: "100%", height: "85vh" }}
        />
      </section>
    </Layout>
  );
}
