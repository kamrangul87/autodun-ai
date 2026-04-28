import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Wrench, AlertTriangle, FileText, CircleDollarSign } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/LogoMark";

const fixTools = [
  { path: "/fix/breakdown", label: "Breakdown Assistant", icon: Wrench },
  { path: "/fix/warning-lights", label: "Warning Light Decoder", icon: AlertTriangle },
  { path: "/fix/appeal", label: "Parking Fine Appeal", icon: FileText },
  { path: "/fix/price", label: "Fair Price Checker", icon: CircleDollarSign },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fixDropdownOpen, setFixDropdownOpen] = useState(false);
  const [mobileFixOpen, setMobileFixOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isFixActive = location.pathname.startsWith("/fix");

  const navLinksBefore = [
    { path: "/", label: "Home" },
    { path: "/ev-charger-finder", label: "EV Charger Finder" },
    { path: "/mot-predictor", label: "MOT Predictor" },
  ];

  const navLinksAfter = [
    { path: "/data-usage", label: "Data Usage" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const AI_ASSISTANT_URL = "https://ai.autodun.com/ai-assistant";

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur"
      style={{
        backgroundColor: "rgba(7, 15, 26, 0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-main flex h-16 items-center">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Autodun Home"
          className="-ml-2 flex items-center shrink-0"
        >
          <LogoMark size="header" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {navLinksBefore.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                isActive(link.path) ? "text-[#00d48a]" : "hover:text-[#f0f6ff]"
              )}
              style={{ color: isActive(link.path) ? "#00d48a" : "#8899aa" }}
            >
              {link.label}
            </Link>
          ))}

          {/* FIX DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setFixDropdownOpen(true)}
            onMouseLeave={() => setFixDropdownOpen(false)}
          >
            <Link
              to="/fix"
              className="flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap hover:text-[#f0f6ff]"
              style={{ color: isFixActive ? "#00d48a" : "#8899aa" }}
            >
              Fix
              <ChevronDown
                className="h-3.5 w-3.5 transition-transform"
                style={{ transform: fixDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </Link>

            {fixDropdownOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl overflow-hidden shadow-xl"
                style={{
                  backgroundColor: "#111f33",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {fixTools.map((tool) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    className="flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-white/5"
                    style={{ color: isActive(tool.path) ? "#00d48a" : "#8899aa" }}
                  >
                    <tool.icon className="h-4 w-4 shrink-0" style={{ color: "#00d48a" }} />
                    {tool.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinksAfter.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                isActive(link.path) ? "text-[#00d48a]" : "hover:text-[#f0f6ff]"
              )}
              style={{ color: isActive(link.path) ? "#00d48a" : "#8899aa" }}
            >
              {link.label}
            </Link>
          ))}

          {/* BLOG (static HTML) */}
          <a
            href="/blog/index.html"
            className="text-sm font-medium transition-colors whitespace-nowrap hover:text-[#f0f6ff]"
            style={{ color: location.pathname.startsWith("/blog") ? "#00d48a" : "#8899aa" }}
          >
            Blog
          </a>
        </nav>

        {/* RIGHT CTA */}
        <div className="hidden md:flex items-center ml-auto">
          <a
            href={AI_ASSISTANT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg text-sm font-bold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "10px 20px" }}
          >
            Ask Autodun AI
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
            style={{ color: "#f0f6ff" }}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileMenuOpen && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="md:hidden">
          <div className="container-main py-3">
            <div className="flex flex-col gap-1">
              {navLinksBefore.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: isActive(link.path) ? "#00d48a" : "#8899aa",
                    backgroundColor: isActive(link.path) ? "rgba(0,212,138,0.08)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* FIX — mobile accordion */}
              <button
                onClick={() => setMobileFixOpen((v) => !v)}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors text-left w-full"
                style={{
                  color: isFixActive ? "#00d48a" : "#8899aa",
                  backgroundColor: isFixActive ? "rgba(0,212,138,0.08)" : "transparent",
                }}
              >
                Fix
                <ChevronDown
                  className="h-4 w-4 transition-transform"
                  style={{ transform: mobileFixOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {mobileFixOpen && (
                <div className="ml-3 flex flex-col gap-1">
                  <Link
                    to="/fix"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium"
                    style={{ color: isActive("/fix") ? "#00d48a" : "#8899aa" }}
                  >
                    All Fix Tools
                  </Link>
                  {fixTools.map((tool) => (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-md px-3 py-2 text-sm transition-colors"
                      style={{ color: isActive(tool.path) ? "#00d48a" : "#8899aa" }}
                    >
                      {tool.label}
                    </Link>
                  ))}
                </div>
              )}

              {navLinksAfter.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: isActive(link.path) ? "#00d48a" : "#8899aa",
                    backgroundColor: isActive(link.path) ? "rgba(0,212,138,0.08)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="/blog/index.html"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: "#8899aa" }}
              >
                Blog
              </a>

              <a
                href={AI_ASSISTANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#00d48a", color: "#070f1a", padding: "10px 20px" }}
              >
                Ask Autodun AI
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
