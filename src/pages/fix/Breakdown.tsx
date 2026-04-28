import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import {
  ArrowRight,
  AlertTriangle,
  Wrench,
  MessageSquare,
  Brain,
  CheckCircle,
  Clock,
  PoundSterling,
  PhoneCall,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Plain-English symptom input",
    description:
      "Describe what's wrong in your own words — no technical knowledge required.",
  },
  {
    icon: Brain,
    title: "AI fault diagnosis",
    description:
      "AI cross-references your symptoms against thousands of real UK vehicle fault records.",
  },
  {
    icon: AlertTriangle,
    title: "Urgency rating",
    description:
      "Know immediately whether it's safe to drive, needs monitoring, or requires immediate attention.",
  },
  {
    icon: Wrench,
    title: "DIY vs call-out guidance",
    description:
      "Understand whether you can fix it yourself or need a garage — saving you unnecessary callout fees.",
  },
];

const steps = [
  {
    n: "1",
    title: "Describe Your Symptoms",
    description: "Type what you're experiencing — noise, warning light, handling issue, or anything unusual.",
  },
  {
    n: "2",
    title: "AI Diagnoses the Fault",
    description: "The AI analyses your description against real fault patterns to identify the most likely cause.",
  },
  {
    n: "3",
    title: "Get Your Action Plan",
    description: "Receive clear guidance: urgency level, likely repair, estimated cost range, and next steps.",
  },
];

const benefits = [
  {
    icon: PoundSterling,
    title: "Avoid unnecessary callout fees",
    description: "Know before you call whether it's a simple fix or genuinely needs a breakdown service.",
  },
  {
    icon: Clock,
    title: "Instant diagnosis, any time",
    description: "Get answers at 2am on the motorway or in a car park — no waiting for a mechanic.",
  },
  {
    icon: PhoneCall,
    title: "Know exactly what to tell the garage",
    description: "Walk in informed. Knowing the likely fault stops garages over-diagnosing or over-charging.",
  },
];

export default function Breakdown() {
  useEffect(() => {
    setSEO({
      title: "AI Breakdown Assistant UK | Autodun — Diagnose Car Problems Instantly",
      description:
        "Describe your car symptoms and get an instant AI diagnosis. Find the likely fault, urgency level, and what to do next. Free for UK drivers, no account needed.",
      keywords:
        "car breakdown diagnosis UK, car fault finder, what's wrong with my car, AI car diagnosis, breakdown assistant, car problem checker UK",
      canonical: "https://autodun.com/fix/breakdown",
      ogUrl: "https://autodun.com/fix/breakdown",
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
              <Wrench className="h-3.5 w-3.5" />
              AI Breakdown Assistant
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.15", color: "#ffffff" }}
            >
              Diagnose Your Car Problem Instantly
            </h1>

            <p
              className="text-lg mb-6 leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8899aa" }}
            >
              Describe what's wrong and get an AI diagnosis — likely fault, urgency, and what to do next. Free for UK drivers.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["Plain-English input", "Urgency rating", "DIY vs garage guidance", "Free — no account"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium rounded-full px-3 py-1"
                  style={{ background: "rgba(255,255,255,0.07)", color: "#c8d8e8" }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <a
              href="https://fix.autodun.com/breakdown"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "14px 32px" }}
            >
              Diagnose My Car
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d48a" }}>
              What You Get
            </p>
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff" }}>
              From Symptom to Action Plan in Seconds
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              No jargon. No guesswork. Just a clear answer about what's wrong and what to do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-5 rounded-xl"
                style={{ backgroundColor: "#111f33", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,212,138,0.1)" }}
                >
                  <f.icon className="h-5 w-5" style={{ color: "#00d48a" }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base" style={{ color: "#ffffff" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────── */}
      <section
        style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.07)", backgroundColor: "#0d1b2a" }}
      >
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d48a" }}>
              How It Works
            </p>
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#ffffff" }}>
              Three Steps to a Diagnosis
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6" style={{ maxWidth: "860px", margin: "0 auto" }}>
            {steps.map((s) => (
              <div key={s.title} className="text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
                  style={{ backgroundColor: "#00d48a", color: "#070f1a" }}
                >
                  {s.n}
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#ffffff" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Use This Tool ──────────────────────── */}
      <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d48a" }}>
              Why Autodun
            </p>
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#ffffff" }}>
              Why Use the Breakdown Assistant?
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-xl text-center"
                style={{ backgroundColor: "#111f33", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(0,212,138,0.1)" }}
                >
                  <b.icon className="h-6 w-6" style={{ color: "#00d48a" }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#ffffff" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ─────────────────────────────── */}
      <section style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-narrow">
          <div
            className="flex gap-4 items-start p-6 rounded-xl"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(245,158,11,0.12)" }}
            >
              <AlertTriangle className="h-5 w-5" style={{ color: "#f59e0b" }} />
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "#f0f6ff" }}>
                Important Information
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "#f0f6ff" }}>
                {[
                  "AI diagnoses are guidance only — not a substitute for professional inspection",
                  "If your warning light is red or you smell burning, stop the vehicle safely and call for help",
                  "Always consult a qualified mechanic before attempting complex repairs",
                  "Autodun is not liable for decisions made based on AI output",
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
          src="https://fix.autodun.com/breakdown"
          title="Autodun Breakdown Assistant"
          style={{ border: "none", display: "block", width: "100%", height: "85vh" }}
        />
      </section>
    </Layout>
  );
}
