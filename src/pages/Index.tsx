import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Zap, BarChart3, Bot, ArrowRight, Wrench, AlertTriangle, FileText, CircleDollarSign } from "lucide-react";
import { setSEO } from "@/lib/seo";

const tools = [
  {
    icon: Zap,
    title: "EV Finder",
    description: "Find UK charging stations with AI suitability scoring",
    href: "https://ev.autodun.com",
    cta: "Find EV Chargers",
  },
  {
    icon: BarChart3,
    title: "MOT Predictor",
    description: "Estimate MOT failure risk before your test",
    href: "https://mot.autodun.com",
    cta: "Check MOT Risk",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Structured automotive guidance powered by AI",
    href: "https://ai.autodun.com",
    cta: "Ask AI Assistant",
  },
];

const stats = [
  { value: "30,000+", label: "UK charge points mapped" },
  { value: "AI scored", label: "Suitability scoring on every station" },
  { value: "Free", label: "No account needed" },
];

export default function Index() {
  useEffect(() => {
    setSEO({
      title:
        "Autodun | Free AI Vehicle Tools for UK Drivers — EV Charging Map & MOT Risk Predictor",
      description:
        "Autodun provides free AI-powered vehicle tools for UK drivers. Find EV charging stations near you, predict MOT failure risk, and get instant vehicle guidance. No account needed.",
      keywords:
        "EV charging UK, EV charging stations, MOT predictor, MOT risk checker, UK EV map, electric vehicle charging, MOT history, AI car assistant, free MOT check, UK charging points",
      canonical: "https://autodun.com",
      ogUrl: "https://autodun.com",
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="hero-gradient hero-pattern border-b border-border"
        style={{ paddingTop: "100px", paddingBottom: "80px" }}
      >
        <div className="container-main relative z-10">
          <div
            className="text-center mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1.5 mb-6 tracking-wide uppercase">
              <Zap className="h-3.5 w-3.5" />
              AI Vehicle Intelligence
            </div>

            <h1
              className="text-balance mb-5 font-bold"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: "1.15" }}
            >
              AI-Powered Vehicle Intelligence for UK Drivers
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Free tools to understand MOT risk, find EV charging, and make smarter car decisions
            </p>

            <div className="flex flex-row gap-3 justify-center flex-wrap">
              <Button asChild size="lg" className="gap-2 font-medium">
                <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                  <Zap className="h-4 w-4" />
                  Find EV Chargers
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 font-medium">
                <a href="https://mot.autodun.com" target="_blank" rel="noopener noreferrer">
                  <BarChart3 className="h-4 w-4" />
                  Check MOT Risk
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border py-4">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 py-4 sm:py-2 px-6">
                <span className="text-2xl font-bold text-primary">{stat.value}</span>
                <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="section-major">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Our Tools
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">Free AI Tools for UK Drivers</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Purpose-built tools powered by real UK data and AI — free to use, no account needed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.title} className="card-elevated flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 flex-grow">
                  {tool.description}
                </p>
                <Button asChild className="gap-2 w-full">
                  <a href={tool.href} target="_blank" rel="noopener noreferrer">
                    {tool.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fix My Car Section */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          backgroundColor: "#0d1b2a",
        }}
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00d48a" }}
            >
              Fix My Car
            </p>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff" }}
            >
              AI Tools to Fix, Check, and Appeal
            </h2>
            <p style={{ color: "#8899aa", maxWidth: "520px", margin: "0 auto" }}>
              Diagnose breakdowns, decode warning lights, appeal parking fines, and check if your repair quote is fair.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Wrench,
                title: "Breakdown Assistant",
                description: "Describe your symptoms and get an instant AI diagnosis with action steps.",
                href: "https://fix.autodun.com#breakdown",
                cta: "Diagnose My Car",
              },
              {
                icon: AlertTriangle,
                title: "Warning Light Decoder",
                description: "Identify any dashboard warning light — severity rating and what to do next.",
                href: "https://fix.autodun.com#warning-lights",
                cta: "Decode Warning Light",
              },
              {
                icon: FileText,
                title: "Parking Fine Appeal",
                description: "Check your grounds and generate a legally sound appeal letter in minutes.",
                href: "https://fix.autodun.com#appeal",
                cta: "Appeal My Fine",
              },
              {
                icon: CircleDollarSign,
                title: "Fair Price Checker",
                description: "Compare your repair quote against UK market rates. Upload a photo for AI valuation.",
                href: "https://fix.autodun.com#price",
                cta: "Check My Quote",
              },
            ].map((tool) => (
              <div
                key={tool.title}
                className="flex flex-col p-5 rounded-xl"
                style={{
                  backgroundColor: "#111f33",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,212,138,0.1)" }}
                >
                  <tool.icon className="h-5 w-5" style={{ color: "#00d48a" }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#ffffff" }}>
                  {tool.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: "#8899aa" }}>
                  {tool.description}
                </p>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: "#00d48a" }}
                >
                  {tool.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://fix.autodun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "12px 28px" }}
            >
              View All Fix Tools
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section
        className="border-t border-border"
        style={{ padding: "60px 24px" }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="text-xl font-semibold mb-5">
            AI Automotive Intelligence for UK Drivers
          </h2>
          <div className="space-y-4 text-left">
            <p className="text-muted-foreground leading-relaxed">
              Autodun is an AI automotive intelligence platform built for UK drivers. We combine
              real UK vehicle data with artificial intelligence to help you make smarter decisions
              about your car — whether you're planning a long EV journey, preparing for your next
              MOT, or simply looking for reliable vehicle guidance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our{" "}
              <strong style={{ color: "#00d48a" }}>EV charging UK</strong>{" "}
              tool maps over 30,000 charge points across the country, with AI suitability scoring
              on every station so you find the right charger for your vehicle and journey. The{" "}
              <strong style={{ color: "#00d48a" }}>MOT predictor</strong> analyses historical DVSA
              data to estimate your vehicle's failure risk before your test, giving you time to
              address issues early. Our{" "}
              <strong style={{ color: "#00d48a" }}>AI car assistant</strong>{" "}
              delivers structured automotive guidance powered by real UK data — covering everything
              from recalls to running costs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All{" "}
              <strong style={{ color: "#00d48a" }}>UK charging stations</strong>{" "}
              data and MOT risk analytics are available completely free, with no account required.
              Autodun is the smarter way for UK drivers to stay informed and prepared.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
