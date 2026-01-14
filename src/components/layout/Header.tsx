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

  // ✅ Removed "Blog" from nav links (only keep Blog button on right)
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container-main flex h-16 items-center gap-4">
        {/* LEFT: Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Autodun Home"
        >
          <LogoMark size="header" className="h-8 md:h-9 lg:h-10 w-auto" />
        </Link>

        {/* CENTER: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground whitespace-nowrap",
                isActive(link.path) ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
          {/* ✅ Only Blog button */}
          <Button asChild variant="outline" className="rounded-xl">
            <Link to="/blog">Blog</Link>
          </Button>

          {/* AI Assistant external CTA */}
          <a
            href={AI_ASSISTANT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Ask Autodun AI
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container-main py-3">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    isActive(link.path)
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* ✅ Blog button (mobile) */}
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Blog
              </Link>

              {/* AI Assistant CTA (mobile) */}
              <a
                href={AI_ASSISTANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
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
