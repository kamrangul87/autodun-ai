import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import {
  ArrowRight,
  AlertTriangle,
  Search,
  ShieldCheck,
  Car,
  AlertOctagon,
  BookOpen,
  Clock,
  PoundSterling,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "All makes and models covered",
    description:
      "From Ford and Vauxhall to BMW and Toyota — every common UK vehicle and dashboard symbol included.",
  },
  {
    icon: AlertOctagon,
    title: "Three-tier severity rating",
    description:
      "Every light is classified: Safe to drive / Caution — check soon / Stop immediately.",
  },
  {
    icon: BookOpen,
    title: "Plain-English explanations",
    description:
      "No owner's manual needed. Get a clear description of what the light means and why it's on.",
  },
  {
    icon: Car,
    title: "Estimated repair cost range",
    description:
      "Understand the likely repair and a realistic UK cost range before you visit a garage.",
  },
];

const steps = [
  {
    n: "1",
    title: "Select Your Warning Light",
    description: "Choose the symbol from a visual library or describe the colour and shape in plain English.",
  },
  {
    n: "2",
    title: "AI Identifies and Explains",
    description: "The AI matches your light, explains the underlying fault, and classifies the urgency.",
  },
  {
    n: "3",
    title: "Know Exactly What to Do",
    description: "Get clear next steps: drive to a garage, monitor it, or stop the car immediately.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Never ignore a serious warning",
    description: "Instantly know if a light means pull over now or just schedule a service — no guessing.",
  },
  {
    icon: PoundSterling,
    title: "Avoid unnecessary dealership visits",
    description:
      "Many warning lights are minor. Know before you book whether you need a £100 diagnostic visit.",
  },
  {
    icon: Clock,
    title: "Peace of mind on every journey",
    description: "Check any dashboard light in seconds, day or night, from your phone on the roadside.",
  },
];

export default function WarningLights() {
  useEffect(() => {
    setSEO({
      title: "Warning Light Decoder UK | Autodun — Identify Dashboard Lights Instantly",
      description:
        "Identify any car dashboard warning light instantly. Get severity rating, plain-English explanation, and what to do next. Free for all UK makes and models.",
      keywords:
        "car warning light decoder UK, dashboard warning lights, what does warning light mean, car warning light checker, dashboard light identification UK",
      canonical: "https://autodun.com/fix/warning-lights",
      ogUrl: "https://autodun.com/fix/warning-lights",
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
              <AlertOctagon className="h-3.5 w-3.5" />
              Warning Light Decoder
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.15", color: "#ffffff" }}
            >
              Identify Any Dashboard Warning Light Instantly
            </h1>

            <p
              className="text-lg mb-6 leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8899aa" }}
            >
              Know what it means, how urgent it is, and exactly what to do — for every UK make and model.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["All makes & models", "Severity rating", "Cost estimate", "Free — no account"].map((badge) => (
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
              href="https://fix.autodun.com/warning-lights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "14px 32px" }}
            >
              Decode My Warning Light
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
              No Owner's Manual Required
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              Clear, instant answers for every dashboard warning light on every UK vehicle.
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
              Three Steps to a Clear Answer
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
              Why Use the Warning Light Decoder?
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
                  "A red warning light always means stop the vehicle safely as soon as possible",
                  "AI guidance is informational — always have faults confirmed by a qualified mechanic",
                  "Warning light meanings can vary slightly by model year and trim level",
                  "Autodun is not affiliated with any vehicle manufacturer",
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
          src="https://fix.autodun.com/warning-lights"
          title="Autodun Warning Light Decoder"
          style={{ border: "none", display: "block", width: "100%", height: "85vh" }}
        />
      </section>
    </Layout>
  );
}
