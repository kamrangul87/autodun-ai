import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import EVChargerFinder from "./pages/EVChargerFinder";
import MOTPredictor from "./pages/MOTPredictor";
import DataUsage from "./pages/DataUsage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";
import FixHub from "./pages/fix/FixHub";
import Breakdown from "./pages/fix/Breakdown";
import WarningLights from "./pages/fix/WarningLights";
import Appeal from "./pages/fix/Appeal";
import Price from "./pages/fix/Price";

import { initGA, trackPageView } from "@/lib/ga";

const queryClient = new QueryClient();

/**
 * Tracks SPA route changes as pageviews in GA4.
 */
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location]);

  return null;
}

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ev-charger-finder" element={<EVChargerFinder />} />
            <Route path="/mot-predictor" element={<MOTPredictor />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/data-usage" element={<DataUsage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/fix" element={<FixHub />} />
            <Route path="/fix/breakdown" element={<Breakdown />} />
            <Route path="/fix/warning-lights" element={<WarningLights />} />
            <Route path="/fix/appeal" element={<Appeal />} />
            <Route path="/fix/price" element={<Price />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
