import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import {
  ArrowRight,
  AlertTriangle,
  FileText,
  Scale,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Council and private PCNs covered",
    description:
      "Whether it's a council Penalty Charge Notice or a private parking charge, we cover both routes.",
  },
  {
    icon: CheckCircle,
    title: "Grounds checker",
    description:
      "AI analyses your ticket details and identifies the strongest legal grounds for your appeal.",
  },
  {
    icon: FileText,
    title: "AI-generated appeal letter",
    description:
      "Get a professionally worded, legally grounded letter ready to submit in minutes — not hours.",
  },
  {
    icon: Download,
    title: "Download and send instantly",
    description:
      "Export your appeal letter as a PDF or plain text, ready to post or email immediately.",
  },
];

const steps = [
  {
    n: "1",
    title: "Enter Your Ticket Details",
    description: "Input the PCN number, location, date, and reason given — takes under two minutes.",
  },
  {
    n: "2",
    title: "AI Checks Your Grounds",
    description: "The AI identifies which legal grounds apply: signage issues, mitigating circumstances, procedural errors.",
  },
  {
    n: "3",
    title: "Download Your Appeal Letter",
    description: "Receive a clear, well-argued appeal letter ready to submit to the council or private operator.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Over 40% of appeals succeed",
    description:
      "Many fines are overturned on procedural or signage grounds. A well-argued appeal dramatically improves your odds.",
  },
  {
    icon: Clock,
    title: "Takes minutes, not hours",
    description:
      "Writing an appeal from scratch takes time and research. The AI does it in seconds with the right language.",
  },
  {
    icon: Shield,
    title: "Know your rights",
    description:
      "The grounds checker helps you understand whether the fine was lawfully issued — before you pay or appeal.",
  },
];

export default function Appeal() {
  useEffect(() => {
    setSEO({
      title: "Parking Fine Appeal Generator UK | Autodun — Appeal Council and Private PCNs",
      description:
        "Generate a parking fine appeal letter in minutes. AI checks your grounds and writes a legally grounded letter for council or private parking charges. Free for UK drivers.",
      keywords:
        "parking fine appeal UK, PCN appeal letter, how to appeal parking fine UK, council parking fine appeal, private parking charge appeal, parking appeal letter generator",
      canonical: "https://autodun.com/fix/appeal",
      ogUrl: "https://autodun.com/fix/appeal",
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
              <FileText className="h-3.5 w-3.5" />
              Parking Fine Appeal Generator
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.15", color: "#ffffff" }}
            >
              Appeal Your Parking Fine in Minutes
            </h1>

            <p
              className="text-lg mb-6 leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8899aa" }}
            >
              AI checks your grounds and generates a legally sound appeal letter for council or private parking charges. Free for UK drivers.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["Council PCNs", "Private parking", "Grounds checker", "Free — no account"].map((badge) => (
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
              href="https://fix.autodun.com/appeal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "14px 32px" }}
            >
              Appeal My Fine
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
              A Complete Appeal, Built in Seconds
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              Covers both council and private parking charges across the UK.
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
              From Ticket to Appeal Letter in Three Steps
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
              Why Use the Appeal Generator?
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
                  "AI-generated appeal letters are templates — review and personalise before submitting",
                  "This tool does not provide legal advice — consult a solicitor for complex disputes",
                  "Always submit your appeal within the statutory deadline shown on the notice",
                  "Autodun is not affiliated with any local authority or parking operator",
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
          src="https://fix.autodun.com/appeal"
          title="Autodun Parking Fine Appeal Generator"
          style={{ border: "none", display: "block", width: "100%", height: "85vh" }}
        />
      </section>
    </Layout>
  );
}
