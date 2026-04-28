import { Link } from "react-router-dom";

export const Footer = () => {
  const toolLinks = [
    { href: "https://ev.autodun.com", label: "EV Charger Finder", external: true },
    { href: "https://mot.autodun.com", label: "MOT Predictor", external: true },
    { href: "https://ai.autodun.com", label: "AI Assistant", external: true },
  ];

  const fixLinks = [
    { href: "https://fix.autodun.com#breakdown", label: "Breakdown Assistant" },
    { href: "https://fix.autodun.com#warning-lights", label: "Warning Lights" },
    { href: "https://fix.autodun.com#appeal", label: "Parking Fine Appeal" },
    { href: "https://fix.autodun.com#price", label: "Fair Price Checker" },
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

  const linkStyle = {
    color: "#8899aa",
    transition: "color 0.15s",
  };

  return (
    <footer
      style={{
        backgroundColor: "#050c15",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-main py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl tracking-tight" style={{ color: "#ffffff" }}>
              <span style={{ color: "#00d48a" }}>⚡</span> AUTODUN
            </span>
            <p className="text-xs max-w-[220px] leading-relaxed" style={{ color: "#556677" }}>
              AI automotive intelligence for UK drivers.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            {/* Tools */}
            <div className="flex flex-col gap-3">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#8899aa", letterSpacing: "1px" }}
              >
                Tools
              </p>
              {toolLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-[#00d48a]"
                  style={linkStyle}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Fix Tools */}
            <div className="flex flex-col gap-3">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#8899aa", letterSpacing: "1px" }}
              >
                Fix My Car
              </p>
              {fixLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-[#00d48a]"
                  style={linkStyle}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#8899aa", letterSpacing: "1px" }}
              >
                Company
              </p>
              {internalLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-sm transition-colors hover:text-[#00d48a]"
                  style={linkStyle}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-10 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs" style={{ color: "#556677" }}>
              © {new Date().getFullYear()} Autodun. All rights reserved.
            </p>
            <div className="flex gap-4 flex-wrap">
              {policyLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-xs transition-colors hover:text-[#00d48a]"
                  style={{ color: "#556677" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://ai.autodun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors hover:text-[#00d48a]"
                style={{ color: "#556677" }}
              >
                About AI
              </a>
            </div>
          </div>

          <p className="text-xs" style={{ color: "#556677" }}>
            MOT data sourced from DVSA. Risk predictions are independent analytics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
