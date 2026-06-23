import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | EV Charging Infrastructure UK – Autodun',
  description: 'Explore Autodun\'s blog for expert guides on EV charging infrastructure UK, MOT history & free vehicle tools. Stay informed today.',
  openGraph: {
    title: 'Blog | EV Charging Infrastructure UK – Autodun',
    description: 'Explore Autodun\'s blog for expert guides on EV charging infrastructure UK, MOT history & free vehicle tools. Stay informed today.',
  },
};

export default function BlogPage() {
  return (
    <>
      <h1>Autodun Blog – EV Charging Infrastructure UK &amp; Free Vehicle Tools</h1>

      <p>
        Welcome to the Autodun blog — your go-to resource for everything related to EV charging infrastructure in the UK,
        free vehicle history tools, MOT checks, and mileage verification. Whether you are a private buyer, a fleet manager,
        or simply curious about the latest developments in electric vehicle adoption across Britain, our guides are written
        to help you make smarter, safer decisions. We cover practical topics including how to find public charge points,
        understanding your vehicle&apos;s MOT history, and how to verify a used car&apos;s mileage before you buy.
        Explore our free tools and stay ahead of the curve.
      </p>

      <nav aria-label="Site sections">
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About Autodun</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Autodun",
            "url": "https://autodun.com",
            "description": "Free UK vehicle tools — MOT history, EV charging checker, mileage verification",
            "founder": { "@type": "Person", "name": "Kamran Gul" },
            "dateModified": "2026-06-23"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://autodun.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://autodun.com/blog"
              }
            ]
          })
        }}
      />
    </>
  );
}