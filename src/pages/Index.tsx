import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Zap, BarChart3, Bot, ArrowRight } from "lucide-react";

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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient border-b border-border section-hero">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1.5 mb-6 tracking-wide uppercase">
              <Zap className="h-3.5 w-3.5" />
              AI Vehicle Intelligence
            </div>

            <h1 className="text-balance mb-5 text-3xl sm:text-4xl lg:text-5xl">
              AI-Powered Vehicle Intelligence for UK Drivers
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Free tools to understand MOT risk, find EV charging, and make smarter car decisions
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
      <section className="border-b border-border section-compact">
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

      {/* SEO Text Section */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow">
          <h2 className="text-xl font-semibold mb-5">
            AI Automotive Intelligence for UK Drivers
          </h2>
          <div className="prose-body space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Autodun is an AI automotive intelligence platform built for UK drivers. We combine
              real UK vehicle data with artificial intelligence to help you make smarter decisions
              about your car — whether you're planning a long EV journey, preparing for your next
              MOT, or simply looking for reliable vehicle guidance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our <strong className="text-foreground">EV charging UK</strong> tool maps over 30,000
              charge points across the country, with AI suitability scoring on every station so you
              find the right charger for your vehicle and journey. The{" "}
              <strong className="text-foreground">MOT predictor</strong> analyses historical DVSA
              data to estimate your vehicle's failure risk before your test, giving you time to
              address issues early. Our <strong className="text-foreground">AI car assistant</strong>{" "}
              delivers structured automotive guidance powered by real UK data — covering everything
              from recalls to running costs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All <strong className="text-foreground">UK charging stations</strong> data and MOT
              risk analytics are available completely free, with no account required. Autodun is
              the smarter way for UK drivers to stay informed and prepared.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
