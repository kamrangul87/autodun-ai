import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
  description: 'Free UK EV charging MOT guides, MOT history checks & mileage tools. Make smarter car decisions — try Autodun free today.',
  openGraph: {
    title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
    description: 'Free UK EV charging MOT guides, MOT history checks & mileage tools. Make smarter car decisions — try Autodun free today.',
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
                name: 'How do I find the nearest public EV charging point in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can use Autodun\'s EV charging checker to locate nearby public charge points across the UK. The tool draws on live network data so you can see charger availability, connector types, and operator details before you travel.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do electric cars need an MOT in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Electric cars registered in the UK require an MOT from their third year, the same as petrol and diesel vehicles. The test follows the same schedule but excludes exhaust emissions testing. High-voltage system safety labels are inspected instead.',
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
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.speakable-intro'],
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
          <li><a href="#buying-guide-heading">Used EV Buying Guide: What to Check Before You Buy</a></li>
          <li><a href="#charging-costs-heading">Understanding EV Charging Costs in 2026</a></li>
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
          , smart charging tariffs can reduce home charging costs further. They do this by automatically
          scheduling sessions during cheaper overnight periods.
        </p>
        <p>
          Workplace charging is also growing rapidly. This growth is driven by employer incentives. It is also
          driven by the practical reality that commuters can top up during the working day at lower off-peak
          rates. According to{' '}
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
          Every test result is recorded centrally by the{' '}
          <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
            DVSA MOT history service
          </a>
          . Records include pass and fail outcomes, advisory notices, specific failure reasons, and mileage
          readings at the time of each test. These records stretch back years for most vehicles. They give you
          a clear picture of how a car has been maintained and used over its lifetime.
        </p>
        <figure>
          <img
            src="/images/mot-history-check-dvsa-2026.jpg"
            alt="Screenshot of a DVSA MOT history report showing pass, fail and advisory results for a used car in 2026"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            A DVSA MOT history report reveals every test outcome, advisory notice, and mileage reading. Use
            Autodun&apos;s free MOT history checker to access this data instantly.
          </figcaption>
        </figure>
        <p>
          Autodun&apos;s free MOT history checker pulls directly from DVSA records. You simply enter a vehicle
          registration number. No account is required and there is no charge. The tool returns every recorded
          test instantly. You can see whether a car has recurring advisories — such as brake wear or tyre
          deterioration — that suggest neglect or deferred maintenance. This information is especially valuable
          when assessing a used EV, where service history documentation is sometimes incomplete.
        </p>
        <p>
          For electric vehicles specifically, MOT history checks reveal whether high-voltage system warning
          labels were intact at previous tests. They also show whether tyre condition was flagged as an
          advisory. EV tyres wear faster than those on equivalent petrol cars. This is because of the
          additional torque delivered instantly from the electric motor. Checking tyre-related advisories
          across multiple MOT records gives you a useful indication of how conscientiously an EV has been
          maintained between tests.
        </p>
        <p>
          Brake advisories are another area worth scrutinising on used EVs. Because regenerative braking
          handles most deceleration in normal driving, the physical brake components see less use. This can
          lead to surface corrosion on discs. If a used EV has repeated brake corrosion advisories, it may
          indicate the car spent long periods parked without use — a detail worth raising with any seller.
          According to{' '}
          <a href="https://www.racfoundation.org/data/uk-mot-testing-data-analysis" target="_blank" rel="noopener noreferrer">
            RAC Foundation analysis of UK MOT testing data
          </a>
          , brake-related failures and advisories remain among the most common reasons for MOT outcomes across
          all vehicle types, including electric cars.
        </p>
        <p>
          You can access a full MOT history check for any UK-registered vehicle using our free tool. Browse our{' '}
          <a href="/blog">MOT guides</a> for step-by-step advice on interpreting results, or{' '}
          <a href="/contact">contact us</a> if you need help understanding a specific record. Our{' '}
          <a href="/about">about page</a> explains how Autodun sources and presents DVSA data.
        </p>
      </section>

      <section aria-labelledby="mileage-heading">
        <h2 id="mileage-heading">Mileage Verification &amp; Avoiding Clocked Cars</h2>
        <p>
          Mileage fraud — commonly called clocking — remains a serious problem in the UK used-car market.
          The{' '}
          <a href="https://www.nfib.police.uk/content/fraud-prevention/fraud-prevention/buying-a-vehicle/" target="_blank" rel="noopener noreferrer">
            National Fraud Intelligence Bureau guidance on vehicle fraud
          </a>{' '}
          estimates that tens of thousands of clocked vehicles are sold each year. Buyers who unknowingly
          purchase a clocked car face higher servicing costs, unpredictable component failures, and vehicles
          worth significantly less than the purchase price.
        </p>
        <figure>
          <img
            src="/images/mileage-checker-clocked-car-uk.jpg"
            alt="Autodun mileage checker tool showing a timeline graph of recorded MOT mileage readings for a UK used car, with an anomaly highlighted"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            Autodun&apos;s mileage checker plots every DVSA-recorded mileage reading on a timeline. Sudden
            drops or flat periods indicate potential clocking.
          </figcaption>
        </figure>
        <p>
          Autodun&apos;s free mileage checker cross-references every mileage figure recorded at MOT tests. It
          plots these readings on a clear timeline. Any sudden drop in recorded mileage is immediately visible.
          So is any suspiciously flat period where mileage barely increased between tests. These patterns are
          the clearest warning signs of a clocked vehicle.
        </p>
        <p>
          For electric vehicles, mileage verification carries additional significance. Battery degradation is
          closely linked to total miles driven and total charging cycles completed. A used EV with unusually
          low mileage relative to its age may have been clocked. It may also have spent long periods idle.
          Neither scenario is ideal for battery health. Combining a mileage check with a professional battery
          health assessment is the most thorough approach when evaluating a used EV purchase.
        </p>
        <p>
          Our dedicated mileage verification guide explains exactly what to look for in a mileage timeline.
          It covers the legal position for private sellers who knowingly misrepresent mileage under the{' '}
          <a href="https://www.legislation.gov.uk/ukpga/2006/46/contents" target="_blank" rel="noopener noreferrer">
            Fraud Act 2006
          </a>
          . It also explains the protections available to buyers under the{' '}
          <a href="https://www.legislation.gov.uk/ukpga/2015/15/contents" target="_blank" rel="noopener noreferrer">
            Consumer Rights Act 2015
          </a>{' '}
          when purchasing from a dealer. Understanding your rights before you buy is as important as checking
          the vehicle itself.
        </p>
      </section>

      <section aria-labelledby="ev-mot-prep-heading">
        <h2 id="ev-mot-prep-heading">Preparing Your Electric Vehicle for Its MOT in 2026</h2>
        <p>
          Electric vehicles follow the same MOT schedule as petrol and diesel cars. They require a first test
          three years after registration. Tests then occur annually thereafter. However, the content of an EV
          MOT differs in several important ways. Knowing these differences helps you prepare effectively and
          avoid avoidable failures.
        </p>
        <figure>
          <img
            src="/images/ev-mot-preparation-checklist-2026.jpg"
            alt="Checklist illustration showing key areas inspected during a UK electric vehicle MOT in 2026, including tyres, brakes, lights and high-voltage labels"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            Key areas inspected during a UK EV MOT in 2026. Prepare your electric vehicle with this checklist
            to reduce the risk of avoidable failures.
          </figcaption>
        </figure>
        <p>
          The exhaust emissions test does not apply to battery electric vehicles. This removes one common
          failure category. However, EVs are subject to additional checks that do not apply to conventional
          vehicles. These include inspection of high-voltage warning labels, safety cut-off switches, and
          high-voltage cable routing. According to{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            DVSA MOT inspection manual guidance
          </a>
          , testers must verify that all high-voltage system warning labels are present, legible, and correctly
          positioned.
        </p>
        <p>
          Tyre condition is a particularly important area for EV owners to check before a test. EV tyres wear
          faster than those on petrol or diesel equivalents. The minimum legal tread depth across the central
          three-quarters of the tyre is 1.6 mm. However, many tyre safety organisations recommend replacing
          tyres before they reach this level. The{' '}
          <a href="https://www.tyresafe.org/tyre-safety/tyre-safety-information/tyre-depth/" target="_blank" rel="noopener noreferrer">
            TyreSafe guidance on tread depth
          </a>{' '}
          recommends changing tyres at 3 mm to maintain safe stopping distances. Checking all four tyres
          carefully before your MOT appointment can prevent a straightforward failure.
        </p>
        <p>
          Brake performance is also tested during an EV MOT. The test uses a roller brake tester to measure
          braking force at each wheel. Because EV brake components are used less frequently due to regenerative
          braking, surface corrosion can develop on discs. Performing several firm brake applications in the
          days before your MOT appointment can help clear surface rust and restore full contact between pads
          and discs. This is one of the simplest and most effective preparation steps available to EV owners.
        </p>
        <p>
          Lights, horn, steering, windscreen condition, and bodywork are all assessed in the same way as any
          other vehicle. Checking all exterior lights before your appointment takes only a few minutes. It is
          one of the easiest ways to avoid a minor failure. Our full EV MOT preparation checklist is available
          in our{' '}
          <a href="/blog">blog guides section</a>. It covers every inspection item relevant to battery electric
          vehicles in plain, straightforward language.
        </p>
      </section>

      <section aria-labelledby="fleet-heading">
        <h2 id="fleet-heading">Fleet Management, MOT Compliance &amp; EV Transition Planning</h2>
        <p>
          Fleet operators face a unique combination of challenges as the UK transitions toward electric
          vehicles. MOT compliance tracking across large, mixed vehicle pools requires systematic processes.
          Charge point infrastructure planning requires capital investment and careful modelling. Staff
          training on EV operation and charging etiquette requires time and resource. Our fleet-focused guides
          address each of these areas in practical detail.
        </p>
        <figure>
          <img
            src="/images/fleet-ev-mot-compliance-uk-2026.jpg"
            alt="Fleet manager reviewing an EV MOT compliance dashboard on a laptop, with multiple vehicles listed alongside their MOT expiry dates"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            Autodun&apos;s free tools help fleet managers track MOT compliance and mileage across mixed EV
            and petrol vehicle pools in 2026.
          </figcaption>
        </figure>
        <p>
          Autodun&apos;s free MOT history tool is particularly useful for fleet managers inheriting a vehicle
          pool with incomplete service records. Running each registration through the DVSA-connected checker
          quickly reveals any vehicles with outstanding advisories, imminent MOT expiry dates, or mileage
          anomalies that warrant investigation. This process takes minutes per vehicle. It creates a clear
          baseline from which to manage ongoing compliance.
        </p>
        <p>
          The UK Government&apos;s Zero Emission Vehicle mandate requires manufacturers to meet increasing
          targets for zero emission vehicle sales each year. This mandate is driving rapid growth in fleet EV
          availability and reducing lease costs for fleet operators. The{' '}
          <a href="https://www.gov.uk/government/publications/zero-emission-vehicle-zev-mandate" target="_blank" rel="noopener noreferrer">
            GOV.UK Zero Emission Vehicle mandate documentation
          </a>{' '}
          provides detail on compliance timelines and manufacturer obligations. Fleet operators planning EV
          transitions can use this framework to align their procurement cycles with availability and pricing
          trends.
        </p>
        <p>
          Charge point infrastructure is often the most complex element of a fleet EV transition. Depot
          charging requirements depend on vehicle duty cycles, overnight dwell times, and available electrical
          capacity at each site. The{' '}
          <a href="https://www.fleetpoint.org/electric-vehicles/" target="_blank" rel="noopener noreferrer">
            Fleet Point electric vehicle guidance
          </a>{' '}
          provides operator-focused advice on infrastructure planning, including smart charging integration
          and load management strategies that reduce peak demand charges. Our fleet charging guide draws on
          this and other industry sources to give operators a clear starting framework.
        </p>
      </section>

      <section aria-labelledby="buying-guide-heading">
        <h2 id="buying-guide-heading">Used EV Buying Guide: What to Check Before You Buy</h2>
        <p>
          Buying a used electric vehicle requires a different approach to buying a used petrol or diesel car.
          The vehicle&apos;s mechanical simplicity works in your favour. EVs have far fewer moving parts than
          combustion engine vehicles. There is no gearbox, exhaust system, or complex engine management to
          worry about. However, the battery pack is the single most expensive component in any electric
          vehicle. Assessing battery health before purchase is essential.
        </p>
        <figure>
          <img
            src="/images/used-ev-buying-guide-uk-2026.jpg"
            alt="Person inspecting a used electric car at a dealership in the UK, with a tablet showing Autodun MOT history and mileage check results"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            Use Autodun&apos;s free MOT history and mileage checker before buying a used EV. Access full DVSA
            records instantly with just the vehicle registration number.
          </figcaption>
        </figure>
        <p>
          Before viewing any used EV, run the registration through Autodun&apos;s free MOT history checker.
          Review every recorded test result. Look for recurring advisories related to tyres, brakes, or
          bodywork condition. Cross-check mileage readings across tests using our mileage timeline tool.
          These two checks together give you a solid factual foundation before you spend time viewing the
          vehicle in person.
        </p>
        <p>
          Battery state of health (SoH) is the most important technical indicator for any used EV. A battery
          at 100% SoH delivers its full rated range. A battery at 80% SoH delivers only 80% of that range.
          Most modern EVs display SoH information through their onboard diagnostic systems. You can access
          this data using a compatible OBD-II reader and a smartphone app. The{' '}
          <a href="https://www.theaa.com/electric-cars/buying-used-electric-car/" target="_blank" rel="noopener noreferrer">
            AA&apos;s used electric car buying guide
          </a>{' '}
          recommends requesting a battery health report from the manufacturer or an independent specialist
          before committing to any purchase above a low threshold value.
        </p>
        <p>
          Charging history and connector condition are also worth inspecting physically. Check the charging
          port for signs of physical damage or burning. Verify that the vehicle charges correctly on both
          slow AC and rapid DC charge points if the model supports both. A vehicle that hesitates to accept
          a rapid charge, or that charges significantly more slowly than its specification suggests, may have
          a battery management system issue that will be expensive to diagnose and repair.
        </p>
        <p>
          Warranty transfer is an important consideration specific to electric vehicles. Many manufacturers
          offer separate, longer warranties for the battery pack than for the rest of the vehicle. Check
          whether any remaining battery warranty is transferable to a new private owner. Some manufacturers
          restrict warranty transfer to authorised dealer sales only. This information should be confirmed in
          writing before any purchase is completed.
        </p>
      </section>

      <section aria-labelledby="charging-costs-heading">
        <h2 id="charging-costs-heading">Understanding EV Charging Costs in 2026</h2>
        <p>
          Charging costs vary significantly depending on where and when you charge. Home charging is almost
          always the cheapest option for drivers with access to off-street parking. Public rapid charging is
          the most expensive. Understanding the difference is essential for calculating whether an EV suits
          your lifestyle and budget before you commit to a purchase.
        </p>
        <figure>
          <img
            src="/images/ev-charging-cost-comparison-uk-2026.jpg"
            alt="Bar chart comparing the cost per mile of home charging, workplace charging and public rapid charging for electric cars in the UK in 2026"
            width={800}
            height={450}
            loading="lazy"
          />
          <figcaption>
            EV charging cost per mile comparison for 2026: home charging, workplace top-ups, and public rapid
            charging compared for UK drivers.
          </figcaption>
        </figure>
        <p>
          At average UK domestic electricity rates in 2026, home charging a 60 kWh battery from 10% to 80%
          costs approximately £7–£10. The exact figure depends on your energy tariff and whether you use a
          smart charging schedule to access cheaper overnight rates. Drivers on time-of-use tariffs — such as
          those offered by Octopus Energy and other suppliers — can charge for significantly less per kWh
          during off-peak hours. According to{' '}
          <a href="https://www.ofgem.gov.uk/information-for-household-consumers/energy-and-the-environment/electric-vehicles" target="_blank" rel="noopener noreferrer">
            Ofgem&apos;s EV consumer guidance
          </a>
          , smart tariffs represent one of the most effective ways to reduce the total running cost of an
          electric vehicle.
        </p>
        <p>
          Public rapid charging (50–150 kW) typically costs between 60p and 85p per kWh at major UK networks
          in 2026. This is considerably more expensive than home charging. However, rapid chargers are
          essential for longer journeys where a single charge is insufficient to complete the route. Planning
          rapid charging stops using real-time network availability data — available through apps such as
          Zap-Map and individual network apps — reduces the risk of arriving at an out-of-service charger.
        </p>
        <p>
          Ultra-rapid charging (150 kW+) is available at an increasing number of motorway service areas and
          dedicated charging hubs. These chargers can add 100 miles of range in approximately 15–20 minutes
          for compatible vehicles. Cost per kWh is typically at the higher end of the public charging range.
          However, the time saving on long-distance journeys makes them the preferred choice for many drivers.
          Our motorway charging guide covers the most reliable ultra-rapid networks on major UK routes.
        </p>
        <p>
          Workplace charging is frequently overlooked as a cost-saving opportunity. Many employers now offer
          free or subsidised charging as an employee benefit. If your employer has charge points installed,
          using them during the working day effectively eliminates your daily charging cost. The{' '}
          <a href="https://www.gov.uk/guidance/workplace-charging-scheme" target="_blank" rel="noopener noreferrer">
            GOV.UK Workplace Charging Scheme guidance
          </a>{' '}
          explains the grant support available to employers installing charge points. It is worth sharing
          this information with your employer if workplace charging is not yet available at your site.
        </p>
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>

        <h3>What does an EV MOT check include in the UK?</h3>
        <p>
          An EV MOT in the UK skips the exhaust emissions test. It still covers brakes, tyres, lights,
          steering, bodywork, windscreen, and horn. High-voltage warning labels are also inspected.
          Regenerative braking systems are assessed alongside physical brake pads and discs.
        </p>

        <h3>How can I check a used car&apos;s MOT history for free?</h3>
        <p>
          You can check a used car&apos;s full MOT history for free using Autodun&apos;s MOT history tool.
          It pulls directly from DVSA records. The tool shows every test result, advisory notice, and failure
          reason. No registration or payment is required.
        </p>

        <h3>How do I detect mileage clocking on a used car?</h3>
        <p>
          Cross-referencing recorded mileage figures across a vehicle&apos;s full MOT history is one of
          the most reliable methods. Autodun&apos;s mileage checker plots every recorded reading on a
          timeline. Inconsistencies and sudden drops are immediately visible.
        </p>

        <h3>What is the cheapest way to charge an electric car in the UK?</h3>
        <p>
          Home charging with a 7 kW wallbox is typically the most cost-effective option. It costs roughly
          £9–£12 per full charge at average domestic electricity rates. Combining overnight home charging
          with opportunistic workplace top-ups can reduce annual fuel costs by several hundred pounds.
        </p>

        <h3>Why are my EV brake discs corroded even though the car is nearly new?</h3>
        <p>
          Regenerative braking handles most deceleration in everyday EV driving. The physical brake pads
          and discs see far less use than on petrol or diesel vehicles. This reduced use causes surface
          corrosion. Performing firm braking in the days before your MOT can help clear surface rust.
        </p>

        <h3>How do I find the nearest public EV charging point in the UK?</h3>
        <p>
          Use Autodun&apos;s EV charging checker to locate nearby public charge points across the UK. The
          tool draws on live network data. You can see charger availability, connector types, and operator
          details before you travel.
        </p>

        <h3>Do electric cars need an MOT in the UK?</h3>
        <p>
          Yes. Electric cars registered in the UK require an MOT from their third year. The schedule is the
          same as petrol and diesel vehicles. The test excludes exhaust emissions testing. High-voltage system
          safety labels are inspected instead.
        </p>
      </section>

      <section>
        <h2>Explore Autodun&apos;s Free UK Vehicle Tools</h2>
        <p>
          Autodun provides free, instant access to DVSA-connected vehicle data for UK drivers, private buyers,
          and fleet managers. Our tools are built around official data sources. They are designed to be fast,
          clear, and genuinely useful for real purchase and compliance decisions.
        </p>
        <ul>
          <li>
            <a href="/blog">Browse all UK EV charging MOT guides and vehicle advice articles</a>
          </li>
          <li>
            <a href="/about">Learn about Autodun — our data sources, team, and mission</a>
          </li>
          <li>
            <a href="/contact">Contact Autodun — questions, feedback, or partnership enquiries</a>
          </li>
        </ul>
        <p>
          Every guide published on the Autodun blog is written by{' '}
          <a href="/about">Kamran Gul</a>, drawing on official DVSA, DVLA, GOV.UK, and Ofgem data sources.
          We update our guides regularly to reflect changes in MOT testing standards, EV charging
          infrastructure, and UK consumer protection legislation. Last updated: 24 June 2026.
        </p>
      </section>
    </>
  );
}