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

      <h1>Autodun Blog – UK EV Charging MOT Guides &amp; Free Vehicle Tools</h1>

      <p>
        Welcome to the Autodun blog — your trusted destination for in-depth UK EV charging MOT guides, free vehicle
        history checks, mileage verification, and the latest electric vehicle news. Whether you are a private buyer
        researching a used car, a fleet manager tracking MOT compliance, or an EV driver hunting for public charge
        points across Britain, our expert guides are built to help you make safer, smarter decisions on every
        vehicle purchase. Autodun provides completely free tools including MOT history checks, mileage verification,
        and EV charging network comparisons — all designed for UK drivers navigating an increasingly complex vehicle
        landscape in 2026. We draw on official data from the{' '}
        <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
          DVSA MOT history service
        </a>{' '}
        and{' '}
        <a href="https://www.zap-map.com/" target="_blank" rel="noopener noreferrer">
          Zap-Map&apos;s public EV charging network
        </a>{' '}
        to keep every article accurate and up to date. Explore our free tools, understand your vehicle&apos;s full
        MOT record, verify mileage before you buy, and stay ahead of the rapid changes shaping EV adoption across
        the UK. Every guide is written with real drivers in mind — no jargon, just clear and actionable advice
        you can rely on every time. Browse our{' '}
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
          Autodun&apos;s UK EV charging MOT guides help drivers understand public charging networks, MOT history records, and mileage verification in one place.
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
        <figure>
          <img
            src="/images/ev-charger-types-uk-2026.jpg"
            alt="Diagram comparing slow, fast, rapid and ultra-rapid EV charger types available across the UK public charging network in 2026"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            UK EV charger types in 2026: slow (3 kW), fast (7–22 kW), rapid (50 kW), and ultra-rapid (150 kW+) connectors explained for everyday drivers.
          </figcaption>
        </figure>
        <p>
          Home charging remains the most cost-effective option for most drivers. A 7 kW wallbox typically charges
          a 60 kWh battery from near-empty overnight, costing roughly £9–£12 at average domestic electricity
          rates. For landlords and flat owners, the Government&apos;s{' '}
          <a href="https://www.gov.uk/guidance/electric-vehicle-homecharge-scheme" target="_blank" rel="noopener noreferrer">
            EV infrastructure grant programme
          </a>{' '}
          offers financial support to install charge points — a topic we cover in detail in our dedicated guides.
          According to{' '}
          <a href="https://www.ofgem.gov.uk/information-for-household-consumers/energy-and-the-environment/electric-vehicles" target="_blank" rel="noopener noreferrer">
            Ofgem&apos;s electric vehicle consumer guidance
          </a>
          , smart charging tariffs can reduce home charging costs even further by automatically scheduling
          sessions during cheaper overnight periods.
        </p>
        <p>
          Workplace charging is also growing rapidly, driven by both employer incentives and the practical reality
          that commuters can top up during the working day at lower off-peak rates. According to{' '}
          <a href="https://www.energysavingtrust.org.uk/advice/charging-your-electric-vehicle/" target="_blank" rel="noopener noreferrer">
            Energy Saving Trust guidance on EV charging
          </a>
          , combining home overnight charging with opportunistic workplace top-ups can reduce annual fuel costs
          by several hundred pounds compared with relying solely on public rapid chargers. Fleet operators will
          find our dedicated fleet charging guide particularly useful for modelling total cost of ownership
          across mixed EV and hybrid vehicle pools.
        </p>
        <p>
          Public charging reliability is one of the most frequently raised concerns among prospective EV buyers.
          Network uptime data published by{' '}
          <a href="https://www.which.co.uk/reviews/electric-car-charging/article/electric-car-charging-networks-reviewed-aKyyY6g8HBwA" target="_blank" rel="noopener noreferrer">
            Which? electric car charging network reviews
          </a>{' '}
          highlights significant variation between operators, with some networks recording out-of-service rates
          well above industry averages. Our UK EV charging MOT guides include a network reliability comparison
          updated quarterly, helping you choose the most dependable charge points for your regular routes.
        </p>
        <p>
          The{' '}
          <a href="https://www.theaa.com/electric-cars/charging-and-range/" target="_blank" rel="noopener noreferrer">
            AA&apos;s electric car charging and range guidance
          </a>{' '}
          also provides practical advice on managing range across different seasons — an important consideration
          given that cold weather can reduce an EV&apos;s effective range by up to 20–30% compared with
          manufacturer figures measured under standard laboratory conditions. Our seasonal EV charging guide
          covers battery pre-conditioning, optimal charging levels for long-term battery health, and how to
          plan motorway journeys using real-world rather than WLTP range figures.
        </p>
      </section>

      <section aria-labelledby="mot-history-heading">
        <h2 id="mot-history-heading">MOT History Checks &amp; What They Reveal</h2>
        <p>
          A vehicle&apos;s MOT history is one of the most revealing documents available to any used-car buyer. It
          records every test result, advisory notice, and failure reason logged since the car&apos;s first MOT —
          typically from age three. Spotting recurring advisories (such as brake wear or suspension faults) across
          multiple test years can indicate a vehicle that has been poorly maintained or repaired cheaply between
          tests. Autodun&apos;s free MOT history tool pulls directly from{' '}
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
            Autodun&apos;s free MOT history checker displays every DVSA-recorded test result, advisory, and mileage figure — no registration required.
          </figcaption>
        </figure>
        <p>
          When reviewing an MOT history, pay close attention to the gap between test dates. A vehicle that was
          tested significantly later than its annual due date may have been used on public roads without a valid
          MOT — a legal offence under the{' '}
          <a href="https://www.legislation.gov.uk/ukpga/1988/52/section/47" target="_blank" rel="noopener noreferrer">
            Road Traffic Act 1988, Section 47
          </a>
          . Gaps can also suggest a period of SORN (Statutory Off Road Notification), which is entirely legal,
          but worth investigating if no supporting documentation is provided by the seller. Our detailed guide
          on reading MOT histories explains every data field — including what &ldquo;dangerous,&rdquo;
          &ldquo;major,&rdquo; and &ldquo;minor&rdquo; defect categories mean in practice under the post-2018
          MOT testing framework introduced by the{' '}
          <a href="https://www.gov.uk/government/organisations/driver-and-vehicle-standards-agency" target="_blank" rel="noopener noreferrer">
            Driver and Vehicle Standards Agency (DVSA)
          </a>
          .
        </p>
        <p>
          For electric vehicles specifically, MOT history checks carry additional significance. Because EVs do not
          require exhaust emission tests, the MOT record focuses heavily on structural, lighting, and braking
          system integrity. High-voltage system warning labels are also inspected — a requirement unique to
          electric and plug-in hybrid vehicles. If warning labels are missing or damaged, an EV can fail its MOT
          on that point alone. Our UK EV charging MOT guides include a dedicated pre-MOT checklist for electric
          vehicle owners, covering every inspection point unique to battery-electric and plug-in hybrid cars in
          2026.
        </p>
        <p>
          Cross-referencing MOT mileage records against a seller&apos;s stated mileage is one of the simplest and
          most effective ways to identify a potentially clocked car. If the mileage recorded at an MOT test is
          higher than the reading shown on the odometer at the point of sale, the vehicle has almost certainly
          had its mileage tampered with. Use{' '}
          <a href="/blog">Autodun&apos;s free tools</a> to run a combined MOT history and mileage check in
          seconds, and read our full guide on mileage fraud detection for a complete explanation of the red flags
          to look out for.
        </p>
      </section>

      <section aria-labelledby="mileage-heading">
        <h2 id="mileage-heading">Mileage Verification &amp; Avoiding Clocked Cars</h2>
        <p>
          Mileage fraud — commonly known as &ldquo;clocking&rdquo; — remains one of the most widespread forms of
          used-car deception in the UK. According to data published by the{' '}
          <a href="https://www.tradingstandards.uk/consumers/buying-a-used-vehicle" target="_blank" rel="noopener noreferrer">
            Chartered Trading Standards Institute
          </a>
          , tens of thousands of vehicles with tampered odometers enter the used-car market each year, costing
          buyers significant sums through inflated purchase prices and unexpected early mechanical failures caused
          by greater-than-disclosed wear.
        </p>
        <figure>
          <img
            src="/images/mileage-clocking-detection-timeline.jpg"
            alt="Autodun mileage checker timeline graph showing inconsistent odometer readings across a car's MOT history — a common indicator of mileage clocking"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            Autodun&apos;s mileage checker plots every DVSA-recorded odometer reading on a timeline, making clocked mileage drops immediately visible before you buy.
          </figcaption>
        </figure>
        <p>
          Modern digital odometers are more difficult to tamper with than analogue predecessors, but specialist
          equipment available online means clocking remains entirely feasible. The most reliable protection for
          buyers is to cross-reference every mileage figure recorded across the vehicle&apos;s full MOT history.
          Autodun&apos;s mileage checker automatically plots every reading on a visual timeline, flagging any
          reduction between successive MOT tests as a potential tampering event. A legitimate vehicle should show
          a broadly consistent upward trend in mileage, with occasional lower annual increases reflecting reduced
          use during periods of remote working or retirement.
        </p>
        <p>
          Beyond the MOT record, service history stamps, dealer invoices, and insurance renewal documents can
          all provide corroborating mileage data points. Our comprehensive guide to mileage verification explains
          how to triangulate multiple sources of evidence to build a reliable picture of a vehicle&apos;s true
          usage history — even in cases where the MOT record alone is inconclusive. Visit our{' '}
          <a href="/about">about page</a> to understand how Autodun&apos;s data is sourced and kept current, or{' '}
          <a href="/contact">contact our team</a> if you need guidance on a specific vehicle check.
        </p>
      </section>

      <section aria-labelledby="ev-mot-prep-heading">
        <h2 id="ev-mot-prep-heading">Preparing Your Electric Vehicle for Its MOT in 2026</h2>
        <p>
          Electric vehicles are subject to the same annual MOT requirement as petrol and diesel cars once they
          reach three years old, but the inspection criteria differ in several important ways. Understanding these
          differences in advance can help you avoid unexpected failures — and our UK EV charging MOT guides break
          down every inspection point unique to battery-electric vehicles in plain language.
        </p>
        <p>
          The most common MOT failure point for EVs is brake disc corrosion. Because regenerative braking handles
          the majority of deceleration in typical urban and suburban driving, the physical brake discs and pads
          on an electric vehicle see far less use than on a petrol equivalent. Reduced friction contact allows
          surface rust to develop rapidly — particularly if the vehicle has been parked for several days in wet
          conditions. Driving 15–20 miles with several deliberate firm brake applications in the days immediately
          before your MOT test will usually clear surface corrosion without damaging the discs or pads. The{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            DVSA&apos;s MOT inspection manual
          </a>{' '}
          contains the full technical criteria that testers apply when assessing brake performance on all vehicle types.
        </p>
        <p>
          Tyre condition and pressure are assessed identically for EVs and conventional vehicles, but EV owners
          should be aware that electric cars typically weigh significantly more than equivalent petrol models due
          to battery pack mass. This additional weight places greater stress on tyres, often resulting in faster
          wear rates — particularly on the front axle of front-wheel-drive EVs. Checking tyre tread depth and
          sidewall condition more frequently than you might on a petrol car is good practice, and our MOT
          preparation guides include a full tyre inspection checklist aligned with current DVSA standards.
        </p>
        <p>
          High-voltage system labelling is the inspection point most unique to electric and plug-in hybrid
          vehicles. MOT testers are required to check that all mandatory safety labels are present, legible, and
          correctly positioned on high-voltage components. Missing or illegible labels are classified as a major
          defect under current MOT regulations, resulting in an automatic failure. Our EV MOT preparation guide
          lists every required label location for the most popular EV models sold in the UK, cross-referenced
          against{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            DVSA inspection manual requirements
          </a>
          .
        </p>
      </section>

      <section aria-labelledby="fleet-heading">
        <h2 id="fleet-heading">Fleet Management, MOT Compliance &amp; EV Transition Planning</h2>
        <p>
          For fleet managers overseeing mixed vehicle pools, maintaining MOT compliance across dozens or hundreds
          of vehicles simultaneously is a significant administrative challenge. A single MOT expiry oversight can
          expose a business to enforcement action, insurance voidance, and reputational risk — consequences that
          are entirely avoidable with the right monitoring tools and processes in place.
        </p>
        <p>
          Autodun&apos;s free MOT history tool allows fleet operators to check the current MOT status and full
          test history of any UK-registered vehicle instantly. For businesses managing larger pools, our guides
          cover best-practice approaches to building MOT expiry tracking into fleet management workflows — including
          integration with DVSA&apos;s official{' '}
          <a href="https://www.gov.uk/check-vehicle-tax" target="_blank" rel="noopener noreferrer">
            vehicle tax and MOT status API
          </a>{' '}
          for automated compliance monitoring.
        </p>
        <p>
          The transition from internal combustion engine vehicles to electric alternatives presents fleet managers
          with a unique set of challenges around charging infrastructure provisioning, driver range anxiety
          management, and total cost of ownership modelling. Our fleet EV transition guides draw on published
          data from the{' '}
          <a href="https://www.fleet.co.uk/" target="_blank" rel="noopener noreferrer">
            Fleet News industry resource
          </a>{' '}
          and{' '}
          <a href="https://www.bvrla.co.uk/advice/guidance/electric-vehicles.html" target="_blank" rel="noopener noreferrer">
            BVRLA electric vehicle guidance
          </a>{' '}
          to help fleet decision-makers build a phased EV adoption plan that balances operational continuity with
          sustainability targets and Government zero-emission vehicle mandate requirements.
        </p>
        <p>
          Charging infrastructure investment is one of the most capital-intensive aspects of fleet electrification.
          Our dedicated guide to fleet charging depot design covers site assessment, charge point specification,
          load management systems, and the Government grant funding available to businesses installing workplace
          EV infrastructure — including the{' '}
          <a href="https://www.gov.uk/guidance/workplace-charging-scheme" target="_blank" rel="noopener noreferrer">
            Workplace Charging Scheme
          </a>
          , which provides a contribution of up to £350 per socket for eligible businesses. Combined with our
          UK EV charging MOT guides, these resources give fleet operators a comprehensive reference library for
          managing the full vehicle lifecycle from acquisition through to disposal.
        </p>
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>

        <h3>What does an EV MOT check include in the UK?</h3>
        <p>
          An EV MOT in the UK skips the exhaust emissions test but still covers brakes, tyres, lights, steering,
          bodywork, windscreen, horn, and high-voltage warning labels. Regenerative braking systems are assessed
          alongside physical brake pads and discs. The full inspection criteria are published in the{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            DVSA MOT inspection manual
          </a>
          .
        </p>

        <h3>How can I check a used car&apos;s MOT history for free?</h3>
        <p>
          You can check a used car&apos;s full MOT history for free using Autodun&apos;s MOT history tool, which
          pulls directly from DVSA records. This shows every test result, advisory notice, and failure reason
          without registration or payment. The{' '}
          <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
            DVSA&apos;s own MOT history checker
          </a>{' '}
          is also freely available as an official alternative. Visit our{' '}
          <a href="/blog">blog</a> for a full walkthrough of how to interpret your results.
        </p>

        <h3>How do I detect mileage clocking on a used car?</h3>
        <p>
          Cross-referencing recorded mileage figures across the vehicle&apos;s full MOT history is one of the
          most reliable methods. Autodun&apos;s mileage checker plots every recorded reading on a timeline,
          making inconsistencies immediately visible. Any downward movement in recorded mileage between successive
          MOT tests is a serious red flag warranting further investigation before purchase.
        </p>

        <h3>What is the cheapest way to charge an electric car in the UK?</h3>
        <p>
          Home charging with a 7 kW wallbox is typically the most cost-effective option, costing roughly £9–£12
          per full charge at average domestic electricity rates. Combining overnight home charging with
          opportunistic workplace top-ups can reduce annual fuel costs by several hundred pounds. Smart tariffs
          endorsed by{' '}
          <a href="https://www.ofgem.gov.uk/information-for-household-consumers/energy-and-the-environment/electric-vehicles" target="_blank" rel="noopener noreferrer">
            Ofgem
          </a>{' '}
          can reduce costs even further by scheduling charging during off-peak hours automatically.
        </p>

        <h3>Why are my EV brake discs corroded even though the car is nearly new?</h3>
        <p>
          Because regenerative braking handles most deceleration in everyday EV driving, the physical brake pads
          and discs see far less use than on petrol or diesel vehicles. This reduced use can cause surface
          corrosion, particularly after the vehicle has been parked in wet conditions. Performing a short session
          of firm braking in the days before your MOT can help clear surface rust without causing damage. Our
          full EV MOT preparation guide explains this and every other inspection point to check before test day.
        </p>

        <h3>Are electric cars exempt from MOT tests in the UK?</h3>
        <p>
          No. Electric cars registered in the UK are subject to the same annual MOT requirement as petrol and
          diesel vehicles, beginning from the vehicle&apos;s third anniversary of first registration. The only
          meaningful difference is that EVs are exempt from the exhaust emissions element of the test, since they
          produce no tailpipe emissions. All other inspection criteria — including brakes, tyres, lights,
          steering, and bodywork — apply in full. See the{' '}
          <a href="https://www.gov.uk/getting-an-mot/who-needs-an-mot" target="_blank" rel="noopener noreferrer">
            GOV.UK guidance on who needs an MOT
          </a>{' '}
          for the complete list of exemptions and requirements.
        </p>

        <h3>How often should I service my electric car between MOT tests?</h3>
        <p>
          Most EV manufacturers recommend an annual service or one aligned to a mileage threshold — typically
          every 12,000–18,000 miles — whichever comes first. Because EVs have fewer moving parts than petrol or
          diesel vehicles, service intervals can be longer and costs lower, but brake fluid condition, tyre wear,
          cabin air filter replacement, and coolant system integrity still require periodic attention. Consult
          your vehicle&apos;s handbook or contact the manufacturer&apos;s dealer network for model-specific
          service schedule guidance. Our{' '}
          <a href="/about">about page</a> explains how Autodun&apos;s tools complement — rather than replace —
          professional mechanical servicing advice.
        </p>
      </section>
    </>
  );
}