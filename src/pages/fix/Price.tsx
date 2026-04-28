import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import {
  ArrowRight,
  AlertTriangle,
  CircleDollarSign,
  Camera,
  BarChart3,
  Shield,
  TrendingDown,
  Search,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Market rate comparison",
    description:
      "Compare your repair quote against real UK market data for the same job on the same vehicle type.",
  },
  {
    icon: Camera,
    title: "Photo damage assessment",
    description:
      "Upload a photo of damage and get an AI estimate of repair cost based on visible scope.",
  },
  {
    icon: Search,
    title: "Mechanic quote checker",
    description:
      "Enter the repair type and quoted price — AI flags if it's fair, high, or significantly over market rate.",
  },
  {
    icon: Shield,
    title: "All common UK repairs covered",
    description:
      "Brakes, tyres, exhausts, clutches, bodywork, servicing, and hundreds of other repair categories.",
  },
];

const steps = [
  {
    n: "1",
    title: "Enter Your Repair Details",
    description: "Type the repair needed and your quoted price, or upload a photo of the damage for assessment.",
  },
  {
    n: "2",
    title: "AI Analyses the Market",
    description: "The AI benchmarks your quote against real UK labour rates and parts costs for your vehicle.",
  },
  {
    n: "3",
    title: "Get Your Fair Price Range",
    description: "See whether your quote is fair, high, or over the odds — with a realistic market range.",
  },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "Stop overpaying for repairs",
    description:
      "UK drivers overpay for car repairs by an average of 20–30%. Know the fair price before you agree.",
  },
  {
    icon: Camera,
    title: "Photo valuation on the spot",
    description:
      "Got bodywork damage? Upload a photo and get an instant AI assessment — no garage visit needed.",
  },
  {
    icon: Clock,
    title: "Instant benchmark, any time",
    description:
      "Check a quote before you leave the forecourt, not two days later after you've already agreed.",
  },
];

export default function Price() {
  useEffect(() => {
    setSEO({
      title: "Car Repair Price Checker UK | Autodun — Fair Price + Photo Valuation",
      description:
        "Check if your car repair quote is fair. Upload a photo for AI damage assessment. Market rate comparison for all common UK repairs. Free, no account needed.",
      keywords:
        "car repair price checker UK, fair repair price UK, is my car repair quote too high, mechanic quote checker, car bodywork estimate UK, photo car valuation",
      canonical: "https://autodun.com/fix/price",
      ogUrl: "https://autodun.com/fix/price",
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
              <CircleDollarSign className="h-3.5 w-3.5" />
              Fair Price Checker
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.15", color: "#ffffff" }}
            >
              Is Your Repair Quote Fair? Find Out Now.
            </h1>

            <p
              className="text-lg mb-6 leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8899aa" }}
            >
              Market rate comparison and photo-based damage assessment for UK car repairs. Never overpay again.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["Market rate comparison", "Photo valuation", "All repairs covered", "Free — no account"].map((badge) => (
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
              href="https://fix.autodun.com/price"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "14px 32px" }}
            >
              Check My Quote
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
              Know the Fair Price Before You Pay
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              Real UK market data on every common repair — plus photo-based damage estimation.
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
              Three Steps to a Fair Price
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
              Why Use the Fair Price Checker?
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
                  "Price estimates are indicative and based on UK market averages — actual costs vary by region and garage",
                  "Photo assessments cannot detect hidden structural damage — a full garage inspection may be needed",
                  "Always get multiple quotes before authorising major repairs",
                  "Autodun is not affiliated with any garage, repair network, or insurer",
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
          src="https://fix.autodun.com/price"
          title="Autodun Fair Price Checker"
          style={{ border: "none", display: "block", width: "100%", height: "85vh" }}
        />
      </section>
    </Layout>
  );
}
