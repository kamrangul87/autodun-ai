import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/LogoMark";

export const Footer = () => {
  const toolLinks = [
    { href: "https://ev.autodun.com", label: "EV Charger Finder", external: true },
    { href: "https://mot.autodun.com", label: "MOT Predictor", external: true },
    { href: "https://ai.autodun.com", label: "AI Assistant", external: true },
  ];

  const internalLinks = [
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/data-usage", label: "Data Usage" },
  ];

  const policyLinks = [
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms", label: "Terms of Use" },
    { path: "/cookies", label: "Cookie Policy" },
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="container-main py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Autodun Home" className="inline-flex items-center">
            <LogoMark className="h-8 md:h-9 lg:h-10 w-auto" />
          </Link>

          {/* Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            {/* Tools */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Tools
              </p>
              {toolLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground transition-colors"
                  )}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Company
              </p>
              {internalLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground transition-colors"
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Autodun. All rights reserved.
            </p>
            <div className="flex gap-4 flex-wrap">
              {policyLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://ai.autodun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                About AI
              </a>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            MOT history sourced from live DVSA records. Risk predictions are independent analytics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
