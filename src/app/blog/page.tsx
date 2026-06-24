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
          Home charging remains the most cost-effective option for most drivers. A 7 kW wallbox typically charges
          a 60 kWh battery from near-empty overnight. This costs roughly £9–£12 at average domestic electricity
          rates. For landlords and flat owners, the Government&apos;s{' '}
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
          provides practical advice on managing range across different seasons. This is important because cold
          weather can reduce an EV&apos;s effective range by up to 20–30%. That reduction is measured against
          manufacturer figures tested under standard laboratory conditions. Our seasonal EV charging guide covers
          battery pre-conditioning, optimal charging levels for long-term battery health, and how to plan
          motorway journeys using real-world rather than WLTP range figures.
        </p>
      </section>

      <section aria-labelledby="mot-history-heading">
        <h2 id="mot-history-heading">MOT History Checks &amp; What They Reveal</h2>
        <p>
          A vehicle&apos;s MOT history is one of the most revealing documents available to any used-car buyer.
          It records every test result, advisory notice, and failure reason logged since the car&apos;s first
          MOT — typically from age three. Spotting recurring advisories across multiple test years can indicate
          a vehicle that has been poorly maintained. Examples include brake wear or suspension faults appearing
          repeatedly. Autodun&apos;s free MOT history tool pulls directly from{' '}
          <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
            DVSA records
          </a>
          , giving you instant access to this data without registration or payment.
        </p>
        <figure>
          <img
            src="/images/mot-history-check-screenshot.jpg"
            alt="Screenshot of Autodun's free MOT history checker displaying test results, advisory notices and mileage records for a used car"
            width={800}
            height={500}
            loading="lazy"
          />
          <figcaption>
            Autodun&apos;s free MOT history checker displays every DVSA-recorded test result, advisory, and
            mileage figure — no registration required.
          </figcaption>
        </figure>
        <p>
          Understanding what each MOT outcome means is important for buyers. A pass with advisories does not
          mean the car is problem-free. Advisories note items that are not yet serious enough to fail the test.
          However, they can become costly failures at the next test if ignored. Our MOT history guides explain
          each advisory category in plain English. They also show you which items to prioritise when negotiating
          a used car price with a private seller or dealer.
        </p>
        <p>
          The{' '}
          <a href="https://www.gov.uk/getting-an-mot/what-happens-during-an-mot" target="_blank" rel="noopener noreferrer">
            DVSA&apos;s official MOT test guidance
          </a>{' '}
          outlines exactly what testers check during a standard inspection. For electric vehicles, the process
          differs in important ways. There is no exhaust emissions test. However, high-voltage system warning
          labels, regenerative braking function, and isolation resistance are all assessed. Our UK EV charging
          MOT guides cover these differences in detail, so EV owners know exactly what to expect before booking
          their test.
        </p>
        <p>
          MOT data can also reveal whether a vehicle has had periods of non-use. A gap of two or more years
          between tests often means the car was declared SORN (Statutory Off Road Notification). This is not
          necessarily a problem, but it warrants further investigation. Long SORN periods can indicate
          unresolved mechanical issues or previous accident damage. Autodun&apos;s tool surfaces these gaps
          clearly, saving you time during the buying process.
        </p>
      </section>

      <section aria-labelledby="mileage-heading">
        <h2 id="mileage-heading">Mileage Verification &amp; Avoiding Clocked Cars</h2>
        <p>
          Mileage clocking remains a serious problem in the UK used car market. The{' '}
          <a href="https://www.hpi.co.uk/news/2023/hpi-mileage-fraud/" target="_blank" rel="noopener noreferrer">
            HPI mileage fraud research
          </a>{' '}
          has found that thousands of vehicles sold each year carry incorrect odometer readings. Buyers who
          purchase a clocked car often face accelerated wear, unexpected repair bills, and significantly reduced
          resale value. Autodun&apos;s mileage checker cross-references every recorded odometer reading from
          DVSA MOT tests. It plots these readings on a clear timeline so inconsistencies are immediately
          visible.
        </p>
        <p>
          A legitimate vehicle should show a steady, upward mileage progression over time. Any drop in recorded
          mileage between successive MOT tests is a strong indicator of tampering. Even a suspicious plateau —
          where mileage appears to stall over two or three years — deserves further scrutiny. Our mileage
          verification guides explain how to interpret these patterns. They also advise on what additional checks
          to request from a seller when anomalies appear in the data.
        </p>
        <p>
          For electric vehicles, mileage verification is particularly important. EVs depreciate heavily based
          on battery condition, and battery degradation correlates directly with usage. A clocked EV may have
          experienced far more battery charge cycles than the odometer suggests. This accelerates capacity loss
          and can affect warranty eligibility. Our UK EV charging MOT guides include a dedicated section on EV
          battery health checks and how to interpret manufacturer battery reports alongside DVSA mileage records.
        </p>
      </section>

      <section aria-labelledby="ev-mot-prep-heading">
        <h2 id="ev-mot-prep-heading">Preparing Your Electric Vehicle for Its MOT in 2026</h2>
        <p>
          Electric vehicles have been subject to standard annual MOT tests since 2023. Many EV owners are
          uncertain what the test involves and how to prepare. The good news is that EVs eliminate several
          traditional failure points. There are no exhaust emissions to check and no catalytic converter to
          inspect. However, EVs introduce new inspection areas that petrol and diesel owners never encounter.
        </p>
        <p>
          High-voltage warning labels must be present and legible. The isolation resistance of the high-voltage
          system is checked. Regenerative braking function is assessed alongside conventional brake performance.
          According to{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            DVSA&apos;s MOT inspection manual
          </a>
          , testers follow a specific procedure for electric and hybrid vehicles. Our step-by-step EV MOT
          preparation guide walks you through every item on the checklist.
        </p>
        <p>
          One common and unexpected MOT issue for EV owners is brake disc corrosion. Because regenerative
          braking handles most deceleration, physical brake pads and discs see far less use than on conventional
          vehicles. Reduced use allows surface rust to develop on the discs. This can cause the brakes to feel
          and perform poorly during the MOT test. A simple fix is to perform a short session of firm, repeated
          braking in the days before your test. This clears surface rust and ensures the physical braking system
          performs correctly when assessed.
        </p>
        <p>
          Tyres remain one of the most common MOT failure points for all vehicle types. The legal minimum tread
          depth in the UK is 1.6 mm across the central three-quarters of the tyre. The{' '}
          <a href="https://www.tyresafe.org/tyre-safety/tread-depth/" target="_blank" rel="noopener noreferrer">
            TyreSafe tyre tread depth guidance
          </a>{' '}
          recommends replacing tyres before they reach this limit. EV tyres wear differently from conventional
          tyres due to the instant torque delivery of electric motors. Our EV tyre guide covers recommended
          replacement intervals and the best tyre choices for popular UK electric vehicles in 2026.
        </p>
      </section>

      <section aria-labelledby="fleet-heading">
        <h2 id="fleet-heading">Fleet Management, MOT Compliance &amp; EV Transition Planning</h2>
        <p>
          Fleet managers face unique challenges when transitioning from petrol and diesel vehicles to electric.
          MOT compliance must be maintained across the entire fleet without disruption to operations. Autodun&apos;s
          tools allow fleet operators to run batch MOT history checks across multiple registrations. This
          surfaces upcoming expiry dates, recurring advisories, and mileage anomalies across the whole pool at
          once.
        </p>
        <p>
          EV transition planning also requires careful analysis of charging infrastructure at depots and
          employee home addresses. A fleet that switches to EVs without adequate charging provision will
          experience significant operational disruption. Our fleet EV transition guide covers site surveys,
          charge point grant applications, smart charging software options, and how to model the total cost of
          ownership for mixed fleet scenarios.
        </p>
        <p>
          According to the{' '}
          <a href="https://www.fleetpoint.org/electric-vehicles/fleet-ev-charging-guide/" target="_blank" rel="noopener noreferrer">
            Fleet Point EV charging guide
          </a>
          , successful fleet electrification depends on three factors: right-sizing the charging infrastructure,
          selecting vehicles matched to actual duty cycles, and training drivers to charge efficiently. Our UK
          EV charging MOT guides address all three areas with practical, jargon-free advice aimed at fleet
          decision-makers across the public and private sectors.
        </p>
        <p>
          The Government&apos;s{' '}
          <a href="https://www.gov.uk/guidance/plug-in-vehicle-grants" target="_blank" rel="noopener noreferrer">
            plug-in vehicle grant scheme
          </a>{' '}
          continues to evolve. Fleet operators should check eligibility regularly, as grant thresholds and
          eligible vehicle categories are updated periodically. Our grants and incentives guide is reviewed
          quarterly to ensure the information remains accurate and actionable for fleet buyers in 2026.
        </p>
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>

        <h3>What does an EV MOT check include in the UK?</h3>
        <p>
          An EV MOT in the UK skips the exhaust emissions test. It still covers brakes, tyres, lights,
          steering, bodywork, windscreen, horn, and high-voltage warning labels. Regenerative braking systems
          are assessed alongside physical brake pads and discs. The full inspection criteria are published in
          the{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            DVSA MOT inspection manual
          </a>
          .
        </p>

        <h3>How can I check a used car&apos;s MOT history for free?</h3>
        <p>
          You can check a used car&apos;s full MOT history for free using Autodun&apos;s MOT history tool.
          It pulls directly from DVSA records. This shows every test result, advisory notice, and failure
          reason. No registration or payment is required. You can also use the official{' '}
          <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
            GOV.UK MOT history check
          </a>{' '}
          service directly.
        </p>

        <h3>How do I detect mileage clocking on a used car?</h3>
        <p>
          Cross-referencing recorded mileage figures across the vehicle&apos;s full MOT history is one of
          the most reliable methods. Autodun&apos;s mileage checker plots every recorded reading on a
          timeline. Inconsistencies are immediately visible. Any drop in mileage between successive tests
          is a strong warning sign that the odometer has been tampered with.
        </p>

        <h3>What is the cheapest way to charge an electric car in the UK?</h3>
        <p>
          Home charging with a 7 kW wallbox is typically the most cost-effective option. It costs roughly
          £9–£12 per full charge at average domestic electricity rates. Combining overnight home charging with
          workplace top-ups can reduce annual fuel costs by several hundred pounds. Smart tariffs from
          suppliers such as Octopus Energy can reduce home charging costs further by scheduling sessions
          overnight.
        </p>

        <h3>Why are my EV brake discs corroded even though the car is nearly new?</h3>
        <p>
          Regenerative braking handles most deceleration in everyday EV driving. This means the physical brake
          pads and discs see far less use than on petrol or diesel vehicles. Reduced use allows surface
          corrosion to develop. Performing a short session of firm braking in the days before your MOT can
          help clear surface rust and ensure the brakes perform correctly during the test.
        </p>
      </section>

      <p>
        Have a question our guides have not yet answered? <a href="/contact">Contact the Autodun team</a> or
        browse our <a href="/blog">full guide library</a>. You can also{' '}
        <a href="/about">learn more about Autodun</a> and the free tools we provide to UK drivers every day.
      </p>
    </>
  );
}