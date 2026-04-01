import { Link } from "react-router-dom";

export const Footer = () => {
  const toolLinks = [
    { href: "https://ev.autodun.com", label: "EV Charger Finder" },
    { href: "https://mot.autodun.com", label: "MOT Predictor" },
    { href: "https://ai.autodun.com", label: "AI Assistant" },
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
    <footer
      style={{
        backgroundColor: "#060d18",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container-main py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-lg tracking-tight">
              ⚡ Autodun
            </span>
            <p style={{ color: "#94a3b8" }} className="text-xs max-w-[220px] leading-relaxed">
              AI automotive intelligence for UK drivers.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            {/* Tools */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#64748b" }}>
                Tools
              </p>
              {toolLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-[#00e5a0]"
                  style={{ color: "#94a3b8" }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#64748b" }}>
                Company
              </p>
              {internalLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-sm transition-colors hover:text-[#00e5a0]"
                  style={{ color: "#94a3b8" }}
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
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs" style={{ color: "#64748b" }}>
              © {new Date().getFullYear()} Autodun. All rights reserved.
            </p>
            <div className="flex gap-4 flex-wrap">
              {policyLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-xs transition-colors hover:text-[#00e5a0]"
                  style={{ color: "#64748b" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://ai.autodun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors hover:text-[#00e5a0]"
                style={{ color: "#64748b" }}
              >
                About AI
              </a>
            </div>
          </div>

          <p className="text-xs" style={{ color: "#64748b" }}>
            MOT data sourced from DVSA. Risk predictions are independent analytics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
