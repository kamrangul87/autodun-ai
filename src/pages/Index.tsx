import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/LogoMark";
import { EVChargerDemo } from "@/components/demos/EVChargerDemo";
import { ArrowRight, Zap, MapPin, BarChart3, Shield } from "lucide-react";


const tools = [
  {
    icon: Zap,
    title: "EV Charger Finder",
    description:
      "Explore UK charging locations with coverage maps and infrastructure analytics.",
    href: "https://ev.autodun.com",
    badge: "Active",
  },
  {
    icon: BarChart3,
    title: "MOT Failure Risk Predictor",
    description:
      "Powered by live DVSA MOT History data with independent risk analytics.",
    href: "https://mot.autodun.com",
    badge: "Active",
  },
  {
    icon: MapPin,
    title: "Council EV Analytics Dashboard",
    description:
      "Local authority insights for EV infrastructure planning and coverage analysis.",
    href: "https://ev.autodun.com/ev-charging-council-dashboard",
    badge: "New",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient border-b border-border section-hero">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <LogoMark
                  size="md"
                  className="opacity-[0.12] max-w-[280px] md:max-w-[320px]"
                />
              </div>

              <h1 className="text-balance mb-5 text-3xl sm:text-4xl lg:text-5xl">
                AI-driven vehicle insights for EV charging and MOT risk
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Independent research platform delivering analytics tools for UK
                vehicle data, EV infrastructure coverage, and MOT failure
                prediction.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 font-medium w-full sm:w-auto"
                >
                  <a
                    href="https://ev.autodun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open EV Charger Finder
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 font-medium w-full sm:w-auto"
                >
                  <a
                    href="https://mot.autodun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open MOT Predictor
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

               
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4" />
                  Live DVSA data
                </span>
                <span className="hidden sm:inline">•</span>
                <span>UK-focused analytics</span>
                <span className="hidden sm:inline">•</span>
                <span>Independent risk analysis</span>
              </div>
            </div>

            {/* Right demo */}
            <div className="w-full aspect-[16/10]">
              <EVChargerDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Core Tools */}
      <section className="section-major">
        <div className="container-main">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Core Tools
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">
              Production-ready analytics platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three purpose-built tools for EV infrastructure, MOT risk analysis,
              and local authority planning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.title} className="card-elevated flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span
                    className={
                      tool.badge === "New"
                        ? "badge-status bg-green-500/10 text-green-600"
                        : "badge-active"
                    }
                  >
                    {tool.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 flex-grow">
                  {tool.description}
                </p>

                <Button asChild className="gap-2 w-full">
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Tool
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
