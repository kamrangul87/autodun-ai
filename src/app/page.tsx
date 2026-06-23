import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autodun | AI Vehicle Tools UK – Free MOT & EV Checks',
  description: 'Free AI vehicle tools UK: MOT history, EV charging & mileage checks. Instant results from DVLA data. Try Autodun free today.',
  openGraph: {
    title: 'Autodun | AI Vehicle Tools UK – Free MOT & EV Checks',
    description: 'Free AI vehicle tools UK: MOT history, EV charging & mileage checks. Instant results from DVLA data. Try Autodun free today.',
  },
};

export default function HomePage() {
  return (
    <>
      <h1>Free AI Vehicle Tools UK – MOT History, EV Charging & Mileage Checks</h1>
      <p>
        Autodun provides free AI-powered vehicle tools built specifically for UK drivers and car buyers.
        Whether you need to verify a used car's MOT history, check EV charging compatibility, or confirm
        mileage authenticity before purchase, Autodun gives you instant, accurate results at no cost.
        Our tools draw on official DVLA and DVSA data sources, helping you make confident, informed decisions.
        From first-time buyers to seasoned traders, Autodun is the trusted companion for anyone navigating
        the UK used-car market in 2026.
      </p>
      <nav aria-label="Site navigation">
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
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
    </>
  );
}