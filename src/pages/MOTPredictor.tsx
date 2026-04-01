import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MOTDemo } from "@/components/demos/MOTDemo";
import { setSEO } from "@/lib/seo";
import {
  ArrowRight,
  AlertTriangle,
  Gauge,
  Calendar,
  Fuel,
  History,
  Car,
  Brain,
  BarChart3,
  FileText,
  Shield,
  ExternalLink,
} from "lucide-react";

const inputs = [
  { icon: Calendar, label: "Vehicle Age", description: "Years since first registration" },
  { icon: Gauge, label: "Mileage", description: "Current odometer reading" },
  { icon: Fuel, label: "Fuel Type", description: "Petrol, diesel, electric, or hybrid" },
  { icon: History, label: "Previous MOT Failures", description: "Historical test failure count" },
];

const videoSteps = [
  { icon: Car, label: "Enter Vehicle Details", description: "Input age, mileage, and fuel type" },
  { icon: Brain, label: "AI Processing", description: "Model analyses historical MOT data" },
  { icon: BarChart3, label: "Risk Calculation", description: "Failure probability computed" },
  { icon: FileText, label: "View Results", description: "Risk score and guidance displayed" },
];

export default function MOTPredictor() {
  useEffect(() => {
    setSEO({
      title:
        "Free MOT Risk Predictor | Autodun — Estimate MOT Failure Risk Before Your Test",
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
      {/* Hero */}
      <section className="section-hero border-b border-border hero-gradient">
        <div className="container-narrow text-center">
          <div className="animate-fade-in-up">
            <span className="badge-active mb-5 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Live Data
            </span>

            <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
              MOT Failure Risk Predictor
            </h1>

            <p className="text-lg mb-8 mx-auto leading-relaxed" style={{ color: "#8899aa" }}>
              Powered by live DVSA MOT History data with independent risk analytics. Input your
              vehicle details to receive a risk assessment based on real MOT records.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="gap-2 font-medium animate-fade-in-up w-full sm:w-auto"
            style={{ animationDelay: "100ms" }}
          >
            <a href="https://mot.autodun.com" target="_blank" rel="noopener noreferrer">
              Launch MOT Predictor Tool
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Live Tool Embed */}
      <section className="section-major">
        <div className="container-main">
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Live Tool
            </p>
            <h2 className="mb-3 text-2xl sm:text-3xl">Check Your MOT Risk Now</h2>
            <p className="mb-5" style={{ color: "#8899aa" }}>
              Enter your vehicle details below — powered by real DVSA data.
            </p>
            <a
              href="https://mot.autodun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90 mb-6"
              style={{
                backgroundColor: "#00d48a",
                color: "#070f1a",
                padding: "10px 20px",
              }}
            >
              <ExternalLink className="h-4 w-4" />
              Open Full MOT Predictor
            </a>
          </div>

          <div
            className="rounded-xl overflow-hidden w-full"
            style={{ border: "1px solid rgba(255,255,255,0.07)", height: "600px" }}
          >
            <iframe
              src="https://mot.autodun.com"
              title="MOT Failure Risk Predictor"
              className="w-full h-full"
              style={{ border: "none" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Animated Demo */}
      <section className="section-major border-t border-border">
        <div className="container-main">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Platform Demo
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">How MOT Failure Risk Is Predicted</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#8899aa" }}>
              Understand how our AI model processes vehicle data to estimate MOT failure probability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8 aspect-[16/10]">
            <MOTDemo />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {videoSteps.map((step, index) => (
              <div
                key={step.label}
                className="text-center p-4 rounded-xl border"
                style={{
                  backgroundColor: "#0d1b2a",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="step-number mx-auto mb-2 text-xs">{index + 1}</div>
                <p className="text-sm font-medium mb-1" style={{ color: "#f0f6ff" }}>
                  {step.label}
                </p>
                <p className="text-xs" style={{ color: "#8899aa" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Source Banner */}
      <section
        className="section-compact border-y"
        style={{
          backgroundColor: "rgba(0,212,138,0.05)",
          borderColor: "rgba(0,212,138,0.12)",
        }}
      >
        <div className="container-main">
          <div className="flex items-center justify-center gap-4 text-center">
            <Shield className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm" style={{ color: "#8899aa" }}>
              <span className="font-medium" style={{ color: "#f0f6ff" }}>
                Live DVSA Integration
              </span>{" "}
              — MOT history sourced from live DVSA records. Risk predictions are independent
              analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Model Inputs */}
      <section className="section-major">
        <div className="container-narrow">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Input Parameters
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">What the Model Uses</h2>
            <p style={{ color: "#8899aa" }}>
              The prediction model uses these vehicle characteristics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {inputs.map((input, index) => (
              <div
                key={input.label}
                className="flex gap-4 p-5 rounded-xl border animate-fade-in-up"
                style={{
                  backgroundColor: "#111f33",
                  borderColor: "rgba(255,255,255,0.07)",
                  animationDelay: `${index * 75}ms`,
                }}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <input.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base" style={{ color: "#ffffff" }}>
                    {input.label}
                  </h3>
                  <p className="text-sm" style={{ color: "#8899aa" }}>
                    {input.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Model Works */}
      <section
        className="section-major border-y"
        style={{ backgroundColor: "#0d1b2a", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Methodology
          </p>
          <h2 className="mb-5 text-2xl sm:text-3xl">How the Model Works</h2>
          <div className="space-y-5 mx-auto max-w-2xl text-left">
            <p style={{ color: "#8899aa" }}>
              The MOT Failure Risk Predictor uses machine learning models trained on live DVSA MOT
              History data. The model identifies statistical patterns that correlate with test
              outcomes using real vehicle records.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: "#111f33", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <h4 className="font-medium mb-2 text-sm" style={{ color: "#f0f6ff" }}>
                  Data Source
                </h4>
                <p className="text-sm" style={{ color: "#8899aa" }}>
                  Live DVSA MOT History records for accurate analysis
                </p>
              </div>
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: "#111f33", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <h4 className="font-medium mb-2 text-sm" style={{ color: "#f0f6ff" }}>
                  Output
                </h4>
                <p className="text-sm" style={{ color: "#8899aa" }}>
                  Probability estimate of MOT failure risk (Low / Medium / High)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding">
        <div className="container-narrow">
          <div
            className="flex gap-4 items-start p-5 lg:p-6 rounded-xl"
            style={{
              background: "rgba(245, 158, 11, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              borderRadius: "12px",
            }}
          >
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(245, 158, 11, 0.12)" }}
            >
              <AlertTriangle className="h-5 w-5" style={{ color: "#f59e0b" }} />
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "#f0f6ff" }}>
                Important Information
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "#cbd5e1" }}>
                <li className="flex gap-2">
                  <span style={{ color: "#f59e0b" }} className="font-medium">
                    •
                  </span>
                  MOT history is sourced from live DVSA records
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#f59e0b" }} className="font-medium">
                    •
                  </span>
                  Risk predictions are independent analytics and do not constitute DVSA advice
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#f59e0b" }} className="font-medium">
                    •
                  </span>
                  Predictions are not an official MOT result or guarantee of test outcome
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#f59e0b" }} className="font-medium">
                    •
                  </span>
                  Always rely on official DVSA MOT testing for vehicle roadworthiness certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
