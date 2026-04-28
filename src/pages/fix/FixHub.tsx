import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";
import { Wrench, AlertTriangle, FileText, CircleDollarSign, ArrowRight, Zap } from "lucide-react";

const fixTools = [
  {
    icon: Wrench,
    title: "Breakdown Assistant",
    description:
      "Describe your symptoms and get an AI diagnosis — likely causes, urgency, and what to do next.",
    href: "/fix/breakdown",
    cta: "Diagnose My Car",
  },
  {
    icon: AlertTriangle,
    title: "Warning Light Decoder",
    description:
      "Identify any dashboard warning light instantly. Know the severity and exactly what action to take.",
    href: "/fix/warning-lights",
    cta: "Decode Warning Light",
  },
  {
    icon: FileText,
    title: "Parking Fine Appeal",
    description:
      "Check your grounds and generate a legally grounded appeal letter for council or private parking fines.",
    href: "/fix/appeal",
    cta: "Appeal My Fine",
  },
  {
    icon: CircleDollarSign,
    title: "Fair Price Checker",
    description:
      "Check if your repair quote is fair. Upload a photo for AI damage assessment and market rate comparison.",
    href: "/fix/price",
    cta: "Check My Quote",
  },
];

export default function FixHub() {
  useEffect(() => {
    setSEO({
      title: "Fix My Car — AI Tools for UK Drivers | Autodun",
      description:
        "Free AI tools to diagnose breakdowns, decode warning lights, appeal parking fines, and check repair prices. Built for UK drivers. No account needed.",
      keywords:
        "car breakdown diagnosis, warning light decoder, parking fine appeal UK, car repair price checker, AI car tools UK, fix my car",
      canonical: "https://autodun.com/fix",
      ogUrl: "https://autodun.com/fix",
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
              AI Fix Tools
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.15", color: "#ffffff" }}
            >
              Fix My Car — AI-Powered Tools for UK Drivers
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed max-w-xl mx-auto"
              style={{ color: "#8899aa" }}
            >
              Diagnose breakdowns, decode warning lights, appeal parking fines, and check repair prices — free, no account needed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tool Cards ─────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00d48a" }}
            >
              Four Tools
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff" }}
            >
              Everything You Need to Fix, Check, and Appeal
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              Purpose-built AI tools for real problems UK drivers face every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
            {fixTools.map((tool) => (
              <div
                key={tool.title}
                className="flex flex-col p-6 rounded-xl"
                style={{
                  backgroundColor: "#111f33",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,212,138,0.1)" }}
                >
                  <tool.icon className="h-6 w-6" style={{ color: "#00d48a" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#ffffff" }}>
                  {tool.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: "#8899aa" }}>
                  {tool.description}
                </p>
                <Link
                  to={tool.href}
                  className="inline-flex items-center gap-2 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 self-start"
                  style={{
                    backgroundColor: "#00d48a",
                    color: "#070f1a",
                    padding: "10px 20px",
                  }}
                >
                  {tool.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────── */}
      <section
        style={{
          padding: "60px 0",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          backgroundColor: "#0d1b2a",
        }}
      >
        <div className="container-main text-center">
          <h2 className="font-bold mb-3" style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "#ffffff" }}>
            All tools are free. No account needed.
          </h2>
          <p style={{ color: "#8899aa", marginBottom: "24px" }}>
            Built for UK drivers. Powered by AI trained on real UK data.
          </p>
          <Link
            to="/fix/breakdown"
            className="inline-flex items-center gap-2 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "12px 28px" }}
          >
            Start with Breakdown Assistant
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
