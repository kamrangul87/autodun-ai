import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
  description: 'Expert UK EV charging MOT guides, free MOT history checks & mileage tools. Make smarter car decisions — explore Autodun today.',
  openGraph: {
    title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
    description: 'Expert UK EV charging MOT guides, free MOT history checks & mileage tools. Make smarter car decisions — explore Autodun today.',
  },
};

export default function BlogPage() {
  return (
    <>
      <h1>Autodun Blog – UK EV Charging MOT Guides &amp; Free Vehicle Tools</h1>

      <p>
        Welcome to the Autodun blog — your trusted destination for in-depth UK EV charging MOT guides, free vehicle
        history checks, mileage verification, and the latest electric vehicle news. Whether you are a private buyer
        researching a used car, a fleet manager tracking MOT compliance, or an EV driver hunting for public charge
        points across Britain, our expert guides are built to help you make safer, smarter decisions. We draw on
        official data from the{' '}
        <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
          DVSA MOT history service
        </a>{' '}
        and{' '}
        <a href="https://www.zap-map.com/" target="_blank" rel="noopener noreferrer">
          Zap-Map&apos;s public EV charging network
        </a>{' '}
        to keep every article accurate and up to date. Explore our free tools, understand your vehicle&apos;s full
        MOT record, verify mileage before you buy, and stay ahead of the rapid changes shaping EV adoption in the UK.
        Every guide is written with real drivers in mind — no jargon, just clear and actionable advice you can rely on.
      </p>

      <section aria-labelledby="ev-charging-heading">
        <h2 id="ev-charging-heading">UK EV Charging Infrastructure Explained</h2>
        <p>
          The UK public charging network has expanded significantly in recent years, with over 60,000 public charge
          point connectors now live across England, Scotland, Wales, and Northern Ireland, according to{' '}
          <a href="https://www.gov.uk/guidance/find-and-use-a-public-electric-vehicle-chargepoint" target="_blank" rel="noopener noreferrer">
            GOV.UK guidance on public EV chargepoints
          </a>
          . Understanding the difference between slow (3 kW), fast (7–22 kW), rapid (50 kW), and ultra-rapid
          (150 kW+) chargers is essential for planning longer journeys without range anxiety. Our UK EV charging
          MOT guides walk you through charger types, payment methods, roaming tariffs, and the most reliable
          networks to use in 2026.
        </p>
        <p>
          Home charging remains the most cost-effective option for most drivers. A 7 kW wallbox typically charges
          a 60 kWh battery from near-empty overnight, costing roughly £9–£12 at average domestic electricity
          rates. For landlords and flat owners, the Government&apos;s{' '}
          <a href="https://www.gov.uk/guidance/electric-vehicle-homecharge-scheme" target="_blank" rel="noopener noreferrer">
            EV infrastructure grant programme
          </a>{' '}
          offers financial support to install charge points — a topic we cover in detail in our dedicated guides.
        </p>
      </section>

      <section aria-labelledby="mot-history-heading">
        <h2 id="mot-history-heading">MOT History Checks &amp; What They Reveal</h2>
        <p>
          A vehicle&apos;s MOT history is one of the most revealing documents available to any used-car buyer. It
          records every test result, advisory notice, and failure reason logged since the car&apos;s first MOT —
          typically from age three. Spotting recurring advisories (such as brake wear or suspension faults) across
          multiple test years can indicate a vehicle that has been poorly maintained or repaired cheaply between
          tests. Autodun&apos;s free MOT history tool pulls directly from DVSA records, giving you instant access
          to this data without registration or payment.
        </p>
        <p>
          For electric vehicles, MOT requirements differ slightly. EVs do not require exhaust emission tests, but
          they are still subject to checks on brakes, steering, tyres, lights, and bodywork. Our UK EV charging
          MOT guides include a dedicated section on what EV owners should prepare before their annual test,
          including battery warning light checks and regenerative braking assessments.
        </p>
      </section>

      <section aria-labelledby="mileage-heading">
        <h2 id="mileage-heading">Mileage Verification &amp; Avoiding Clocked Cars</h2>
        <p>
          Mileage fraud — commonly called clocking — remains a persistent problem in the UK used-car market.
          Research from the{' '}
          <a href="https://www.racfoundation.org/" target="_blank" rel="noopener noreferrer">
            RAC Foundation
          </a>{' '}
          suggests that a significant proportion of used vehicles have had their odometers tampered with,
          costing buyers thousands of pounds in unexpected repairs and reducing resale value. Cross-referencing
          recorded mileage figures across a vehicle&apos;s full MOT history is one of the most reliable ways to
          identify inconsistencies. Autodun&apos;s mileage checker plots every recorded reading on a timeline,
          making anomalies immediately visible.
        </p>
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>

        <h3>What is included in Autodun&apos;s free vehicle check?</h3>
        <p>
          Autodun&apos;s free check covers full MOT history, recorded mileage across all test dates, advisory
          notices, failure reasons, and test station details — all sourced directly from DVSA records. No
          registration or payment is required to run a check.
        </p>

        <h3>Are UK EV charging MOT guides suitable for fleet managers?</h3>
        <p>
          Yes. Our guides cover compliance requirements for fleet operators, including bulk MOT tracking,
          understanding advisory thresholds across a vehicle pool, and planning EV charging infrastructure
          for workplace or depot settings.
        </p>

        <h3>How often is the MOT history data updated?</h3>
        <p>
          The DVSA database that Autodun queries is updated in near real-time following each test. Results
          typically appear within minutes of a test being completed at an authorised MOT testing station.
        </p>

        <h3>Do electric vehicles need an MOT in the UK?</h3>
        <p>
          Yes. Electric vehicles registered in the UK require an MOT from their third anniversary, the same
          as petrol and diesel cars. The test is adapted for EVs — no exhaust emissions test is performed —
          but all other standard safety checks apply. Our UK EV charging MOT guides explain the full process
          in plain English.
        </p>

        <h3>Can I use Autodun tools on a mobile device?</h3>
        <p>
          All Autodun tools are fully responsive and optimised for smartphones and tablets. You can run a
          free MOT history check, verify mileage, or read our UK EV charging MOT guides from any device
          without needing to install an app.
        </p>
      </section>

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is included in Autodun's free vehicle check?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Autodun's free check covers full MOT history, recorded mileage across all test dates, advisory notices, failure reasons, and test station details — all sourced directly from DVSA records. No registration or payment is required to run a check."
                }
              },
              {
                "@type": "Question",
                "name": "Are UK EV charging MOT guides suitable for fleet managers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our guides cover compliance requirements for fleet operators, including bulk MOT tracking, understanding advisory thresholds across a vehicle pool, and planning EV charging infrastructure for workplace or depot settings."
                }
              },
              {
                "@type": "Question",
                "name": "How often is the MOT history data updated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The DVSA database that Autodun queries is updated in near real-time following each test. Results typically appear within minutes of a test being completed at an authorised MOT testing station."
                }
              },
              {
                "@type": "Question",
                "name": "Do electric vehicles need an MOT in the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Electric vehicles registered in the UK require an MOT from their third anniversary, the same as petrol and diesel cars. The test is adapted for EVs — no exhaust emissions test is performed — but all other standard safety checks apply."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use Autodun tools on a mobile device?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All Autodun tools are fully responsive and optimised for smartphones and tablets. You can run a free MOT history check, verify mileage, or read our UK EV charging MOT guides from any device without needing to install an app."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}