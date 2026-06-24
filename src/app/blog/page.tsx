import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
  description: 'Free UK EV charging MOT guides, MOT history checks & mileage tools for UK drivers. Make smarter car decisions — try Autodun free.',
  openGraph: {
    title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
    description: 'Free UK EV charging MOT guides, MOT history checks & mileage tools for UK drivers. Make smarter car decisions — try Autodun free.',
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Autodun',
            url: 'https://autodun.com',
            description:
              'Free UK vehicle tools — MOT history, EV charging checker, mileage verification',
            founder: { '@type': 'Person', name: 'Kamran Gul' },
            dateModified: '2026-06-24',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://autodun.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://autodun.com/blog',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does an EV MOT check include in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An EV MOT in the UK skips the exhaust emissions test but still covers brakes, tyres, lights, steering, bodywork, windscreen, horn, and high-voltage warning labels. Regenerative braking systems are assessed alongside physical brake pads and discs.',
                },
              },
              {
                '@type': 'Question',
                name: "How can I check a used car's MOT history for free?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "You can check a used car's full MOT history for free using Autodun's MOT history tool, which pulls directly from DVSA records. This shows every test result, advisory notice, and failure reason without registration or payment.",
                },
              },
              {
                '@type': 'Question',
                name: 'How do I detect mileage clocking on a used car?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Cross-referencing recorded mileage figures across the vehicle's full MOT history is one of the most reliable methods. Autodun's mileage checker plots every recorded reading on a timeline, making inconsistencies immediately visible.",
                },
              },
              {
                '@type': 'Question',
                name: 'What is the cheapest way to charge an electric car in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Home charging with a 7 kW wallbox is typically the most cost-effective option, costing roughly £9–£12 per full charge at average domestic electricity rates. Combining overnight home charging with opportunistic workplace top-ups can reduce annual fuel costs by several hundred pounds.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why are my EV brake discs corroded even though the car is nearly new?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Because regenerative braking handles most deceleration in everyday EV driving, the physical brake pads and discs see far less use than on petrol or diesel vehicles. This reduced use can cause surface corrosion. Performing a short session of firm braking in the days before your MOT can help clear surface rust.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do electric cars need an MOT in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Electric cars registered in the UK require an MOT from their third year onward, exactly like petrol and diesel vehicles. The test is largely the same but excludes exhaust emissions checks. High-voltage system warning labels and insulation are inspected instead.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which public EV charging networks are most reliable in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reliability varies significantly between operators. Independent data from Which? and Zap-Map show that networks such as Pod Point, bp pulse, and Osprey consistently record lower out-of-service rates. Our quarterly network reliability comparison in the UK EV charging MOT guides section tracks uptime across all major operators.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use Autodun tools for free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Autodun\'s MOT history checker, mileage verification tool, and EV charging network finder are all completely free to use. No registration is required. All data is sourced from official DVSA records and publicly available charging network databases.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'UK EV Charging MOT Guides & Free Vehicle Tools | Autodun',
            description:
              'Free UK EV charging MOT guides, MOT history checks and mileage tools for UK drivers. Make smarter car decisions with Autodun.',
            datePublished: '2026-01-01',
            dateModified: '2026-06-24',
            author: {
              '@type': 'Person',
              name: 'Kamran Gul',
              url: 'https://autodun.com/about',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Autodun',
              url: 'https://autodun.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://autodun.com/blog',
            },
            image: {
              '@type': 'ImageObject',
              url: 'https://autodun.com/images/uk-ev-charging-mot-guides-hero.jpg',
              width: 1200,
              height: 630,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Kamran Gul',
            url: 'https://autodun.com/about',
            jobTitle: 'Founder',
            worksFor: {
              '@type': 'Organization',
              name: 'Autodun',
              url: 'https://autodun.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.speakable-intro'],
          }),
        }}
      />

      <h1>Autodun Blog – UK EV Charging MOT Guides &amp; Free Vehicle Tools</h1>

      <p className="speakable-intro">
        Welcome to the Autodun blog. This is your trusted destination for in-depth UK EV charging MOT guides,
        free vehicle history checks, mileage verification, and the latest electric vehicle news. Whether you
        are a private buyer researching a used car, a fleet manager tracking MOT compliance, or an EV driver
        hunting for public charge points across Britain, our expert guides help you make safer, smarter
        decisions. Autodun provides completely free tools — including MOT history checks, mileage verification,
        and EV charging network comparisons — all designed for UK drivers navigating an increasingly complex
        vehicle landscape in 2026. We draw on official data from the{' '}
        <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
          DVSA MOT history service
        </a>{' '}
        and{' '}
        <a href="https://www.zap-map.com/" target="_blank" rel="noopener noreferrer">
          Zap-Map&apos;s public EV charging network
        </a>{' '}
        to keep every article accurate and up to date. Explore our free tools, understand your vehicle&apos;s
        full MOT record, and verify mileage before you buy. Browse our{' '}
        <a href="/blog">latest guides</a>,{' '}
        <a href="/about">learn about Autodun</a>, or{' '}
        <a href="/contact">get in touch</a> if you have a question our tools cannot yet answer.
      </p>

      <figure>
        <img
          src="/images/uk-ev-charging-mot-guides-hero.jpg"
          alt="UK public EV charging point with a car plugged in alongside a DVSA MOT certificate — illustrating Autodun's UK EV charging MOT guides"
          width={1200}
          height={630}
          loading="eager"
        />
        <figcaption>
          Autodun&apos;s UK EV charging MOT guides help drivers understand public charging networks, MOT
          history records, and mileage verification in one place.
        </figcaption>
      </figure>

      <nav aria-label="Blog sections">
        <ul>
          <li><a href="#ev-charging-heading">UK EV Charging Infrastructure Explained</a></li>
          <li><a href="#mot-history-heading">MOT History Checks &amp; What They Reveal</a></li>
          <li><a href="#mileage-heading">Mileage Verification &amp; Avoiding Clocked Cars</a></li>
          <li><a href="#ev-mot-prep-heading">Preparing Your Electric Vehicle for Its MOT in 2026</a></li>
          <li><a href="#fleet-heading">Fleet Management, MOT Compliance &amp; EV Transition Planning</a></li>
          <li><a href="#buying-used-ev-heading">Buying a Used Electric Car: What to Check First</a></li>
          <li><a href="#battery-health-heading">EV Battery Health &amp; Long-Term Range Degradation</a></li>
          <li><a href="#faq-heading">Frequently Asked Questions</a></li>
        </ul>
      </nav>

      <section aria-labelledby="ev-charging-heading">
        <h2 id="ev-charging-heading">UK EV Charging Infrastructure Explained</h2>
        <p>
          The UK public charging network has expanded significantly. Over 60,000 public charge point connectors
          are now live across England, Scotland, Wales, and Northern Ireland. This figure comes from{' '}
          <a href="https://www.gov.uk/guidance/find-and-use-a-public-electric-vehicle-chargepoint" target="_blank" rel="noopener noreferrer">
            GOV.UK guidance on public EV chargepoints
          </a>
          . Understanding the difference between slow (3 kW), fast (7–22 kW), rapid (50 kW), and ultra-rapid
          (150 kW+) chargers is essential. It helps you plan longer journeys without range anxiety. Our UK EV
          charging MOT guides walk you through charger types, payment methods, roaming tariffs, and the most
          reliable networks to use in 2026.
        </p>
        <figure>
          <img
            src="/images/ev-charger-types-uk-2026.jpg"
            alt="Diagram comparing slow, fast, rapid and ultra-rapid EV charger types available across the UK public charging network in 2026"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            UK EV charger types in 2026: slow (3 kW), fast (7–22 kW), rapid (50 kW), and ultra-rapid (150 kW+)
            connectors explained for everyday drivers.
          </figcaption>
        </figure>
        <p>
          Home charging remains the most cost-effective option for most drivers. A 7 kW wallbox typically
          charges a 60 kWh battery from near-empty overnight. This costs roughly £9–£12 at average domestic
          electricity rates. For landlords and flat owners, the Government&apos;s{' '}
          <a href="https://www.gov.uk/guidance/electric-vehicle-homecharge-scheme" target="_blank" rel="noopener noreferrer">
            EV infrastructure grant programme
          </a>{' '}
          offers financial support to install charge points. We cover this topic in detail in our dedicated
          guides. According to{' '}
          <a href="https://www.ofgem.gov.uk/information-for-household-consumers/energy-and-the-environment/electric-vehicles" target="_blank" rel="noopener noreferrer">
            Ofgem&apos;s electric vehicle consumer guidance
          </a>
          , smart charging tariffs can reduce home charging costs even further. They do this by automatically
          scheduling sessions during cheaper overnight periods.
        </p>
        <p>
          Workplace charging is also growing rapidly. This growth is driven by employer incentives and the
          practical reality that commuters can top up during the working day at lower off-peak rates. According
          to{' '}
          <a href="https://www.energysavingtrust.org.uk/advice/charging-your-electric-vehicle/" target="_blank" rel="noopener noreferrer">
            Energy Saving Trust guidance on EV charging
          </a>
          , combining home overnight charging with opportunistic workplace top-ups can reduce annual fuel costs
          by several hundred pounds. This saving applies when compared with relying solely on public rapid
          chargers. Fleet operators will find our dedicated fleet charging guide useful for modelling total cost
          of ownership across mixed EV and hybrid vehicle pools.
        </p>
        <p>
          Public charging reliability is one of the most frequently raised concerns among prospective EV buyers.
          Network uptime data published by{' '}
          <a href="https://www.which.co.uk/reviews/electric-car-charging/article/electric-car-charging-networks-reviewed-aKyyY6g8HBwA" target="_blank" rel="noopener noreferrer">
            Which? electric car charging network reviews
          </a>{' '}
          highlights significant variation between operators. Some networks record out-of-service rates well
          above industry averages. Our UK EV charging MOT guides include a network reliability comparison
          updated quarterly. This helps you choose the most dependable charge points for your regular routes.
        </p>
        <p>
          The{' '}
          <a href="https://www.theaa.com/electric-cars/charging-and-range/" target="_blank" rel="noopener noreferrer">
            AA&apos;s electric car charging and range guidance
          </a>{' '}
          provides practical advice on managing range across different seasons. Cold weather can reduce an
          EV&apos;s effective range by up to 20–30%. That reduction is measured against manufacturer figures
          tested under standard laboratory conditions. Our seasonal EV charging guide covers battery
          pre-conditioning, optimal charging levels for long-term battery health, and how to plan motorway
          journeys using real-world rather than WLTP range figures.
        </p>
      </section>

      <section aria-labelledby="mot-history-heading">
        <h2 id="mot-history-heading">MOT History Checks &amp; What They Reveal</h2>
        <p>
          A vehicle&apos;s MOT history is one of the most revealing documents available to any used-car buyer.
          The{' '}
          <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
            DVSA MOT history service
          </a>{' '}
          records every test outcome, advisory notice, and failure reason since 2005 for most UK-registered
          vehicles. Autodun pulls directly from this official dataset. Our free MOT history tool displays every
          recorded test on a clear timeline. You can see exactly when a car passed, when it failed, and what
          advisories have been flagged year on year.
        </p>
        <p>
          Recurring advisories are particularly telling. A vehicle that has received the same advisory —
          such as brake disc corrosion or suspension wear — across multiple consecutive MOTs without the
          issue being resolved may indicate deferred maintenance. This is a significant red flag. Buyers who
          overlook advisory trends often inherit expensive repair bills shortly after purchase.
        </p>
        <p>
          The gap between MOT tests is also informative. A vehicle with an unexplained gap in its test
          history may have been stored off-road, used abroad, or had its records disrupted for other reasons.
          Any unexplained gap warrants further investigation before you commit to a purchase. The{' '}
          <a href="https://www.citizensadvice.org.uk/consumer/cars/buying-a-used-car/" target="_blank" rel="noopener noreferrer">
            Citizens Advice guide to buying a used car
          </a>{' '}
          recommends checking MOT history as a baseline step in any private used-car purchase. Our tool makes
          that check instant and completely free.
        </p>
        <p>
          For electric vehicles specifically, the MOT history check reveals additional useful information.
          It shows whether high-voltage warning label advisories have been issued and whether any
          regenerative braking system concerns have been flagged by previous testers. These entries appear
          in the same DVSA dataset. They are fully visible through Autodun&apos;s MOT history tool without
          any additional cost.
        </p>
        <figure>
          <img
            src="/images/mot-history-check-screenshot-2026.jpg"
            alt="Screenshot of Autodun's free MOT history checker showing a used car's full DVSA test timeline with pass, fail, and advisory results"
            width={800}
            height={500}
            loading="lazy"
          />
          <figcaption>
            Autodun&apos;s free MOT history checker displays every DVSA test result, advisory notice, and
            mileage reading on a clear timeline — no registration required.
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="mileage-heading">
        <h2 id="mileage-heading">Mileage Verification &amp; Avoiding Clocked Cars</h2>
        <p>
          Mileage fraud — commonly called clocking — remains a persistent problem in the UK used-car market.
          The{' '}
          <a href="https://www.gov.uk/government/organisations/driver-and-vehicle-standards-agency" target="_blank" rel="noopener noreferrer">
            Driver and Vehicle Standards Agency (DVSA)
          </a>{' '}
          records odometer readings at every MOT test. These readings form a chronological mileage record
          that is extremely difficult to falsify retrospectively. Autodun&apos;s mileage checker plots
          every recorded reading on a timeline graph. Significant drops or suspiciously flat periods stand
          out immediately.
        </p>
        <p>
          The{' '}
          <a href="https://www.honestjohn.co.uk/advice/buying/how-to-spot-a-clocked-car/" target="_blank" rel="noopener noreferrer">
            Honest John guide to spotting a clocked car
          </a>{' '}
          lists several physical indicators of tampering. These include worn pedals inconsistent with low
          recorded mileage, scuffed driver&apos;s seat bolsters, and steering wheel wear. Combined with
          Autodun&apos;s digital mileage timeline, buyers have a powerful two-pronged verification method.
          No single check is foolproof. Using both digital history and physical inspection together gives
          you the strongest protection.
        </p>
        <p>
          For electric vehicles, mileage verification carries additional importance. Battery degradation
          is closely correlated with total charge cycles and distance covered. A clocked EV may have
          significantly reduced remaining battery capacity. This directly affects real-world range and
          future resale value. Our UK EV charging MOT guides include a dedicated article on assessing
          battery health before buying a used electric car.
        </p>
      </section>

      <section aria-labelledby="ev-mot-prep-heading">
        <h2 id="ev-mot-prep-heading">Preparing Your Electric Vehicle for Its MOT in 2026</h2>
        <p>
          Electric cars have been subject to standard UK MOT testing since 2018. The test structure is
          almost identical to that applied to petrol and diesel vehicles. The key difference is the
          absence of an exhaust emissions check. In its place, MOT testers inspect high-voltage system
          warning labels, cable routing, and insulation integrity. The{' '}
          <a href="https://www.gov.uk/government/publications/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            DVSA MOT inspection manual for private passenger vehicles
          </a>{' '}
          details every item assessed during an EV test.
        </p>
        <p>
          Brake performance is one of the most common EV MOT failure points. Because regenerative braking
          handles the majority of deceleration, physical brake pads and discs are used infrequently.
          This can lead to surface corrosion building up on the discs. The corrosion itself is not always
          a failure item. However, it can reduce braking effectiveness below the test threshold. Performing
          several firm, controlled braking events in the days before your MOT can clear surface rust.
          This is a simple and cost-free precaution.
        </p>
        <p>
          Tyre condition is assessed identically on EVs and combustion-engine cars. The legal minimum
          tread depth across the central three-quarters of the tyre is 1.6 mm. Electric vehicles are
          often heavier than equivalent petrol models. This additional weight accelerates tyre wear,
          particularly on the front axle. Checking tread depth and tyre pressure before your MOT takes
          only a few minutes. It can prevent an avoidable failure.
        </p>
        <p>
          Windscreen condition, horn operation, lighting function, and bodywork security are all tested
          in exactly the same way for EVs as for any other vehicle. Our pre-MOT checklist article covers
          every item in a simple step-by-step format. It is designed for drivers with no mechanical
          background. Running through the checklist the weekend before your test appointment can identify
          straightforward issues you can address yourself before incurring a tester&apos;s re-examination fee.
        </p>
        <figure>
          <img
            src="/images/ev-mot-preparation-checklist-2026.jpg"
            alt="Illustration of an electric car on a DVSA MOT ramp with a checklist of EV-specific inspection points including brake discs, tyres, lights and high-voltage warning labels"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            Preparing your EV for its annual MOT: key inspection points unique to electric vehicles in
            2026, based on the DVSA inspection manual.
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="fleet-heading">
        <h2 id="fleet-heading">Fleet Management, MOT Compliance &amp; EV Transition Planning</h2>
        <p>
          Fleet operators face a dual challenge in 2026. They must maintain MOT compliance across existing
          combustion-engine vehicles while planning a phased transition to electric. The{' '}
          <a href="https://www.bvrla.co.uk/advice/guidance/electric-vehicles.html" target="_blank" rel="noopener noreferrer">
            British Vehicle Rental and Leasing Association (BVRLA) EV transition guidance
          </a>{' '}
          outlines practical frameworks for mixed-fleet management. Key considerations include charging
          infrastructure at depot and employee home locations, total cost of ownership modelling, and
          driver range anxiety mitigation.
        </p>
        <p>
          Autodun&apos;s bulk MOT history lookup allows fleet managers to check the test status and
          upcoming expiry dates for multiple vehicles simultaneously. Staying ahead of MOT expiry dates
          prevents vehicles from operating illegally and avoids the insurance implications of an
          untested vehicle. Our fleet compliance guide provides a downloadable MOT tracking template
          and a step-by-step guide to integrating Autodun&apos;s tools into existing fleet management
          workflows.
        </p>
        <p>
          For fleets transitioning to EVs, mileage verification at the end of a lease or company car
          cycle is critical. Excess mileage charges and battery degradation assessments both depend on
          accurate odometer records. Autodun&apos;s mileage verification tool provides an independent
          cross-reference against DVSA data. This adds a layer of protection when settling end-of-contract
          disputes. Our UK EV charging MOT guides section includes a dedicated fleet EV article updated
          for 2026 tax year benefit-in-kind rates and charging infrastructure grant eligibility.
        </p>
      </section>

      <section aria-labelledby="buying-used-ev-heading">
        <h2 id="buying-used-ev-heading">Buying a Used Electric Car: What to Check First</h2>
        <p>
          The used EV market has grown substantially since 2023. First-generation electric cars are now
          widely available at accessible price points. However, buying a used EV requires different due
          diligence compared with a used petrol or diesel car. The battery pack is the most expensive
          single component. Its condition determines real-world range, charging speed, and long-term
          reliability. Unlike engine condition, battery health is not assessed during a standard MOT.
          Buyers must take additional steps to verify it.
        </p>
        <p>
          Always request a battery health report from the seller before viewing a used EV. Many franchised
          dealers provide manufacturer diagnostics. Independent specialists can conduct third-party battery
          state-of-health assessments for most major EV models. The{' '}
          <a href="https://www.electriccarscheme.com/blog/buying-used-ev" target="_blank" rel="noopener noreferrer">
            Electric Car Scheme guide to buying a used EV
          </a>{' '}
          recommends a minimum state of health of 80% for any used electric car purchase. Below that
          threshold, real-world range degradation becomes noticeable in everyday use.
        </p>
        <p>
          Beyond battery health, run a full MOT history and mileage check using Autodun before viewing
          any used EV. Look for brake advisory notices, tyre wear patterns, and any lighting or
          electrical system failures. Cross-reference the advertised mileage against every DVSA-recorded
          reading. If the figures do not align, walk away. Our step-by-step used EV buying guide covers
          every check in sequence. It is designed to be used on a smartphone during a forecourt visit.
        </p>
        <p>
          Charging compatibility is another frequently overlooked consideration. Older used EVs may
          support only Type 1 AC charging or early CCS rapid charging standards. The UK public network
          has largely standardised on Type 2 AC and CCS DC. Verify that any used EV you are considering
          is compatible with the charging infrastructure you plan to use most frequently. Our UK EV
          charging MOT guides include a connector compatibility reference updated for 2026 network
          deployments.
        </p>
      </section>

      <section aria-labelledby="battery-health-heading">
        <h2 id="battery-health-heading">EV Battery Health &amp; Long-Term Range Degradation</h2>
        <p>
          Battery degradation is a natural process in all lithium-ion electric vehicle batteries. It
          occurs gradually over time and charge cycles. Most manufacturers design battery packs to
          retain at least 70–80% of original capacity after eight years or 100,000 miles. Real-world
          outcomes vary considerably depending on charging behaviour, climate exposure, and vehicle
          usage patterns.
        </p>
        <p>
          Frequent use of high-power DC rapid charging accelerates degradation compared with regular
          slow AC home charging. Consistently charging to 100% and allowing the battery to deplete
          fully to 0% also increases long-term wear. The{' '}
          <a href="https://www.nrel.gov/transportation/battery-life.html" target="_blank" rel="noopener noreferrer">
            National Renewable Energy Laboratory research on EV battery degradation
          </a>{' '}
          provides detailed modelling of degradation rates across different usage scenarios. Most EV
          manufacturers recommend keeping the battery between 20% and 80% state of charge for daily
          use. This preserves long-term capacity.
        </p>
        <p>
          Temperature management is equally important. Batteries discharge faster in cold weather and
          degrade more rapidly when repeatedly charged in very high ambient temperatures. Many modern
          EVs include active thermal management systems. These systems maintain the battery within an
          optimal temperature range during charging and driving. When assessing a used EV, check whether
          the vehicle has an active thermal management system. Passively cooled batteries in older models
          typically show higher degradation rates in warmer climates.
        </p>
        <p>
          Autodun&apos;s mileage timeline tool provides useful context for interpreting battery health
          figures. A vehicle with 80,000 miles recorded across five years of DVSA MOT entries and a
          reported 85% state of health is a very different proposition from one with the same mileage
          accumulated in just two years. Understanding usage intensity alongside battery health data
          gives buyers a much clearer picture of long-term risk.
        </p>
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>

        <h3>What does an EV MOT check include in the UK?</h3>
        <p>
          An EV MOT in the UK skips the exhaust emissions test. It still covers brakes, tyres, lights,
          steering, bodywork, windscreen, horn, and high-voltage warning labels. Regenerative braking
          systems are assessed alongside physical brake pads and discs.
        </p>

        <h3>How can I check a used car&apos;s MOT history for free?</h3>
        <p>
          You can check a used car&apos;s full MOT history for free using Autodun&apos;s MOT history
          tool. It pulls directly from DVSA records. It shows every test result, advisory notice, and
          failure reason without requiring registration or payment.
        </p>

        <h3>How do I detect mileage clocking on a used car?</h3>
        <p>
          Cross-referencing recorded mileage figures across the vehicle&apos;s full MOT history is one
          of the most reliable methods. Autodun&apos;s mileage checker plots every recorded reading on
          a timeline. This makes inconsistencies immediately visible.
        </p>

        <h3>What is the cheapest way to charge an electric car in the UK?</h3>
        <p>
          Home charging with a 7 kW wallbox is typically the most cost-effective option. It costs
          roughly £9–£12 per full charge at average domestic electricity rates. Combining overnight
          home charging with opportunistic workplace top-ups can reduce annual fuel costs by several
          hundred pounds.
        </p>

        <h3>Why are my EV brake discs corroded even though the car is nearly new?</h3>
        <p>
          Regenerative braking handles most deceleration in everyday EV driving. This means the
          physical brake pads and discs see far less use than on petrol or diesel vehicles. Reduced
          use can cause surface corrosion. Performing firm braking in the days before your MOT can
          help clear surface rust.
        </p>

        <h3>Do electric cars need an MOT in the UK?</h3>
        <p>
          Yes. Electric cars registered in the UK require an MOT from their third year onward. This
          applies exactly like petrol and diesel vehicles. The test is largely the same but excludes
          exhaust emissions checks. High-voltage system warning labels and insulation are inspected
          instead.
        </p>

        <h3>Which public EV charging networks are most reliable in the UK?</h3>
        <p>
          Reliability varies significantly between operators. Independent data from{' '}
          <a href="https://www.which.co.uk/reviews/electric-car-charging/article/electric-car-charging-networks-reviewed-aKyyY6g8HBwA" target="_blank" rel="noopener noreferrer">
            Which?
          </a>{' '}
          and{' '}
          <a href="https://www.zap-map.com/" target="_blank" rel="noopener noreferrer">
            Zap-Map
          </a>{' '}
          show that several established networks consistently record lower out-of-service rates. Our
          quarterly network reliability comparison tracks uptime across all major UK operators.
        </p>

        <h3>Can I use Autodun tools for free?</h3>
        <p>
          Yes. Autodun&apos;s MOT history checker, mileage verification tool, and EV charging network
          finder are all completely free to use. No registration is required. All data is sourced from
          official DVSA records and publicly available charging network databases.
        </p>
      </section>

      <section>
        <h2>Explore More from Autodun</h2>
        <p>
          Autodun&apos;s free vehicle tools are built specifically for UK drivers. Start with our{' '}
          <a href="/mot-history">free MOT history checker</a> to review any UK-registered vehicle&apos;s
          full DVSA test record in seconds. Use our{' '}
          <a href="/mileage-check">mileage verification tool</a> to detect clocking before you buy.
          Read our latest articles on the{' '}
          <a href="/blog">Autodun blog</a>, find out more about the team on our{' '}
          <a href="/about">about page</a>, or{' '}
          <a href="/contact">contact us</a> directly with any questions. Every tool is free. No account
          required.
        </p>
      </section>
    </>
  );
}