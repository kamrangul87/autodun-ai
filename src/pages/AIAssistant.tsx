import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { setSEO } from "@/lib/seo";

export default function AIAssistant() {
  useEffect(() => {
    setSEO({
      title: "Autodun AI Assistant | Free Automotive AI for UK Drivers — MOT, EV & Car Advice",
      description:
        "Get instant AI-powered vehicle guidance. Ask about MOT risk, EV charging near you, or used car buying. Free automotive intelligence powered by real UK data.",
      canonical: "https://www.autodun.com/ai-assistant",
      ogUrl: "https://www.autodun.com/ai-assistant",
    });
  }, []);

  return (
    <Layout>
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <iframe
          src="https://ai.autodun.com"
          title="Autodun AI Assistant"
          style={{ border: "none", display: "block", width: "100%", height: "85vh" }}
        />
      </section>
    </Layout>
  );
}
