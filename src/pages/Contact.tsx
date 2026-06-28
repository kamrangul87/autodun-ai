import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Mail, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { setSEO } from "@/lib/seo";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "Contact Autodun — Get in Touch",
      description:
        "Contact the Autodun team for questions about our free UK vehicle tools.",
      canonical: "https://www.autodun.com/contact",
      ogUrl: "https://www.autodun.com/contact",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_gotcha")) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mgvggyyk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please email us directly at info@autodun.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 64px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "linear-gradient(180deg, #0d1b2a 0%, #070f1a 100%)",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Get in Touch
          </h1>
          <p style={{ fontSize: "17px", color: "#8899aa", lineHeight: 1.7 }}>
            Questions about our tools, partnerships, or feedback — we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: "72px 24px" }}>
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
          }}
        >
          {/* Email card */}
          <div
            style={{
              background: "#111f33",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(0,212,138,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Mail style={{ width: "24px", height: "24px", color: "#00d48a" }} />
            </div>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#8899aa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                Email us directly
              </p>
              <a
                href="mailto:info@autodun.com"
                style={{ fontSize: "18px", fontWeight: 700, color: "#00d48a", textDecoration: "none" }}
              >
                info@autodun.com
              </a>
              <p style={{ fontSize: "14px", color: "#556677", marginTop: "4px" }}>
                We usually reply within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <MessageSquare style={{ width: "20px", height: "20px", color: "#00d48a" }} />
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>
                Send a message
              </h2>
            </div>

            {isSubmitted ? (
              <div
                style={{
                  background: "#111f33",
                  border: "1px solid rgba(0,212,138,0.2)",
                  borderRadius: "16px",
                  padding: "48px 32px",
                  textAlign: "center",
                }}
              >
                <CheckCircle style={{ width: "44px", height: "44px", color: "#00d48a", margin: "0 auto 16px" }} />
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                  Message received
                </h3>
                <p style={{ fontSize: "15px", color: "#8899aa" }}>
                  We'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" type="text" required placeholder="Your name" maxLength={100} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="your@email.com" maxLength={255} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" type="text" required placeholder="What is this about?" maxLength={200} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" required placeholder="Your message…" rows={5} maxLength={2000} />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#00d48a",
                    color: "#070f1a",
                    fontWeight: 700,
                    padding: "12px 28px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
