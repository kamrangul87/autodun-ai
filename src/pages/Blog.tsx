import { Layout } from "@/components/layout/Layout";

export default function Blog() {
  return (
    <Layout>
      <section className="section-major">
        <div className="container-main text-center">
          <h1 className="text-3xl font-semibold mb-4">Autodun Blog</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Research articles, insights, and updates on EV infrastructure,
            MOT analytics, and vehicle data science.
          </p>

          <div className="mt-10 text-sm text-muted-foreground">
            Blog content coming soon.
          </div>
        </div>
      </section>
    </Layout>
  );
}
