import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import { ArrowRight, BarChart3, Zap, MapPin } from "lucide-react";

const motArticles = [
  {
    title: "MOT History Check UK: The Complete Guide",
    description:
      "Everything you need to know about checking a vehicle's MOT history online — what it shows, how to read advisories and failures, and red flags when buying used cars.",
    href: "/blog/mot-history-check-uk.html",
    tag: "MOT Guide",
  },
  {
    title: "MOT Advisories Explained",
    description:
      "Understand what MOT advisories mean, which ones to take seriously, whether you can drive with them, and how they affect future tests and resale value.",
    href: "/blog/mot-advisories-explained-uk.html",
    tag: "MOT Guide",
  },
  {
    title: "UK Vehicle Data Tools",
    description:
      "A hub guide to all major UK vehicle data tools and guides — MOT history, advisories, predictors, and EV charging infrastructure resources in one place.",
    href: "/blog/uk-vehicle-data-tools.html",
    tag: "MOT Guide",
  },
];

const evArticles = [
  {
    title: "Electric Car Charger Map UK: What You Need to Know",
    description:
      "How EV charger maps work in the UK, where to find chargers near you, home vs public charging, costs, grants, and how to choose the right charger.",
    href: "/blog/electric-car-charger-map-uk.html",
    tag: "EV Infrastructure",
  },
  {
    title: "EV Charging on UK Motorways: A Practical Guide",
    description:
      "Where motorway chargers are located, compatibility, how to plan charging stops, common failure modes, and a simple motorway charging checklist.",
    href: "/blog/ev-charging-on-uk-motorways.html",
    tag: "EV Infrastructure",
  },
  {
    title: "EV Charging Reliability in UK Cities",
    description:
      "Why charger maps mislead about coverage, what reliability actually means, urban failure modes, and a repeatable process for finding reliable public charging.",
    href: "/blog/ev-charging-reliability-uk.html",
    tag: "EV Infrastructure",
  },
  {
    title: "Why UK Councils Are Flying Blind on EV Charging Infrastructure",
    description:
      "An analysis of the data gaps in UK EV infrastructure planning — the disconnect between datasets and real-world experience, and what better data would look like.",
    href: "/blog/why-uk-councils-are-flying-blind-on-ev-charging-infrastructure.html",
    tag: "EV Infrastructure",
  },
];

const cleanAirArticles = [
  {
    title: "ULEZ Checker UK: The Complete Guide",
    description:
      "How to check if your vehicle is ULEZ compliant, edge cases that catch drivers out, charges and penalties, what to do if you're not compliant, and ULEZ vs Clean Air Zones.",
    href: "/blog/ulez-checker-uk.html",
    tag: "Clean Air Zones",
  },
];

function ArticleCard({
  title,
  description,
  href,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  tag: string;
}) {
  return (
    <a
      href={href}
      className="card-elevated flex flex-col group hover:border-primary/40 transition-colors"
    >
      <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
        {tag}
      </span>
      <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{description}</p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
        Read article <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}

export default function Blog() {
  useEffect(() => {
    setSEO({
      title: "Autodun Blog — EV Infrastructure & MOT Intelligence (UK)",
      description:
        "Research-grade writing from Autodun on UK EV charging infrastructure, real-world data gaps, clean-air rules, and MOT intelligence — built from hands-on product and user feedback.",
      canonical: "https://www.autodun.com/blog/",
      ogUrl: "https://www.autodun.com/blog/",
    });
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient hero-pattern border-b border-border section-hero">
        <div className="container-main relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
              Autodun Blog
            </p>
            <h1 className="text-3xl sm:text-4xl mb-4">
              EV Infrastructure &amp; MOT Intelligence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Research-grade writing on UK EV charging, clean-air rules, and MOT data — built from
              what we see when real datasets meet real journeys.
            </p>
          </div>
        </div>
      </section>

      {/* MOT Section */}
      <section className="section-major border-b border-border">
        <div className="container-main">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">MOT Guides</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {motArticles.map((a) => (
              <ArticleCard key={a.href} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* EV Section */}
      <section className="section-major border-b border-border">
        <div className="container-main">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">EV Infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {evArticles.map((a) => (
              <ArticleCard key={a.href} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Clean Air Section */}
      <section className="section-major">
        <div className="container-main">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Driving Rules &amp; Clean Air Zones</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cleanAirArticles.map((a) => (
              <ArticleCard key={a.href} {...a} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
