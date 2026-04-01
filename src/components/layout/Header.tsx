import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/LogoMark";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/ev-charger-finder", label: "EV Charger Finder" },
    { path: "/mot-predictor", label: "MOT Predictor" },
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
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                isActive(link.path)
                  ? "text-[#00d48a]"
                  : "hover:text-[#f0f6ff]"
              )}
              style={{
                color: isActive(link.path) ? "#00d48a" : "#8899aa",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* BLOG (static HTML) */}
          <a
            href="/blog/index.html"
            className="text-sm font-medium transition-colors whitespace-nowrap hover:text-[#f0f6ff]"
            style={{
              color: location.pathname.startsWith("/blog") ? "#00d48a" : "#8899aa",
            }}
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
            style={{
              backgroundColor: "#00d48a",
              color: "#070f1a",
              padding: "10px 20px",
            }}
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
              {navLinks.map((link) => (
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
                style={{
                  backgroundColor: "#00d48a",
                  color: "#070f1a",
                  padding: "10px 20px",
                }}
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
