import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
  description: 'Free UK EV charging MOT guides, MOT history checks & mileage tools for UK drivers. Make smarter car decisions — try Autodun free today.',
  openGraph: {
    title: 'UK EV Charging MOT Guides & Vehicle Tools | Autodun',
    description: 'Free UK EV charging MOT guides, MOT history checks & mileage tools for UK drivers. Make smarter car decisions — try Autodun free today.',
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
          tests. Autodun&apos;s free MOT history tool pulls directly from DVSA records, giving you instant access
          to this data without registration or payment.
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
          For electric vehicles, MOT requirements differ in several important ways. EVs are exempt from the
          exhaust emissions test that applies to petrol and diesel vehicles, but they are subject to additional
          checks specific to high-voltage systems. According to{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            the DVSA MOT inspection manual
          </a>
          , testers must verify that high-voltage warning labels are present and legible, that electrical
          connectors show no signs of damage or insulation failure, and that the vehicle&apos;s 12V auxiliary
          battery — which powers lights, locks, and safety systems — is in serviceable condition. Many EV owners
          are surprised to learn their 12V battery can fail independently of the main traction battery, causing
          an MOT failure or leaving them stranded.
        </p>
        <p>
          Regenerative braking is another area where EV MOT outcomes can differ from conventional vehicles. Because
          regenerative braking recovers energy during deceleration, physical brake pads and discs are used far
          less frequently than on petrol or diesel cars. This means brake components can develop surface corrosion
          even on relatively new EVs. DVSA guidance confirms that corroded discs causing uneven braking force can
          result in an MOT failure. Performing several firm brake applications in the days before your test is a
          widely recommended preparation step, and one we cover in detail in our EV MOT preparation guide below.
        </p>
        <p>
          Autodun&apos;s MOT history tool also lets you track mileage progression across every recorded test.
          This is particularly valuable when assessing a used EV, since battery degradation is closely related
          to total mileage and charging behaviour. A vehicle with a mileage gap of 30,000 miles between two
          consecutive MOT entries warrants further investigation — either it covered an unusually high annual
          distance, or the odometer has been tampered with. Cross-referencing MOT mileage data with service
          history records and any available manufacturer battery health reports gives the most complete picture
          of a used EV&apos;s true condition before you commit to a purchase.
        </p>
      </section>

      <section aria-labelledby="mileage-heading">
        <h2 id="mileage-heading">Mileage Verification &amp; Avoiding Clocked Cars</h2>
        <p>
          Mileage fraud — commonly known as clocking — remains a significant problem in the UK used-car market.
          The{' '}
          <a href="https://www.racfoundation.org/" target="_blank" rel="noopener noreferrer">
            RAC Foundation
          </a>{' '}
          has previously estimated that tens of thousands of clocked vehicles change hands in the UK each year,
          with buyers unknowingly paying a premium for cars that have covered far more miles than displayed.
          Beyond the financial loss, a clocked vehicle presents real safety risks — worn components that appear
          unexpectedly early based on the false odometer reading may not be replaced on schedule, increasing the
          likelihood of brake, tyre, or suspension failures.
        </p>
        <p>
          The most reliable free method for detecting a clocked car is to cross-reference every mileage reading
          recorded across the vehicle&apos;s MOT history. Each MOT test captures the odometer reading at the
          time of the test, and these figures are permanently logged in the DVSA database. A legitimate vehicle
          should show a steady, logical increase in mileage across tests. Any entry where the recorded mileage
          is lower than the previous test — or where a suspiciously large jump occurs in a single year — is a
          red flag that warrants further investigation. Autodun&apos;s mileage checker plots every recorded
          reading on a visual timeline, making inconsistencies immediately visible even to buyers with no
          technical background.
        </p>
        <p>
          For electric vehicles, mileage verification takes on added importance because battery health is
          directly tied to total distance covered and charging cycles. A battery that has powered a vehicle
          for 80,000 genuine miles will have experienced measurably more degradation than one at 40,000 miles,
          and this will be reflected in reduced real-world range. If a seller claims low mileage but the
          vehicle&apos;s MOT history tells a different story, buyers should request a manufacturer battery
          health certificate or independent battery diagnostic report before proceeding. Our guides explain
          exactly what to ask for and how to interpret the results, so you can buy with confidence rather
          than relying solely on a seller&apos;s word.
        </p>
      </section>

      <section aria-labelledby="ev-mot-prep-heading">
        <h2 id="ev-mot-prep-heading">Preparing Your Electric Vehicle for Its MOT in 2026</h2>
        <p>
          With EVs now a common sight on UK roads, understanding how to prepare an electric car for its annual
          MOT has become an essential piece of knowledge for owners. While EVs benefit from the removal of the
          exhaust emissions test, they introduce a new set of checks that can catch unprepared owners off guard.
          The following preparation steps are drawn from{' '}
          <a href="https://www.gov.uk/getting-an-mot/overview" target="_blank" rel="noopener noreferrer">
            DVSA MOT guidance
          </a>{' '}
          and the practical experience of UK EV drivers and independent testers.
        </p>
        <ul>
          <li>
            <strong>Check tyre condition and pressure.</strong> Tyre failures remain the single most common
            reason for MOT failures across all vehicle types. EVs are typically heavier than equivalent
            petrol models due to battery weight, which increases tyre wear rates. Inspect tread depth
            (minimum 1.6 mm across the central three-quarters of the tread), check for sidewall damage, and
            inflate to the manufacturer&apos;s recommended pressure — which for many EVs is higher than
            drivers expect.
          </li>
          <li>
            <strong>Clear brake disc corrosion before the test.</strong> As described above, EV brake discs
            are prone to surface rust due to infrequent use. In the two to three days before your MOT,
            perform several firm, progressive brake applications from moderate speed in a safe environment.
            This will abrade surface corrosion from the disc faces and help ensure even braking force
            during the tester&apos;s brake efficiency check.
          </li>
          <li>
            <strong>Verify all lights are functioning.</strong> Headlights, brake lights, indicators, hazard
            lights, number plate illumination, and reversing lights must all operate correctly. LED lighting
            systems fitted to many EVs can develop individual segment failures that are not immediately
            obvious to the driver but will be identified during the MOT visual inspection.
          </li>
          <li>
            <strong>Check high-voltage warning labels.</strong> DVSA testers are required to verify that
            high-voltage system warning labels are present and legible. These labels are typically located
            under the bonnet, near the charging port, and at other high-voltage system access points.
            Labels that have faded, peeled, or been covered during repairs or modifications must be
            replaced before the test.
          </li>
          <li>
            <strong>Test the 12V auxiliary battery.</strong> The 12V battery powers the vehicle&apos;s
            ancillary systems and is checked during the MOT. A weak or failed 12V battery can cause
            electrical system faults and MOT failures independent of the main traction battery&apos;s
            state of charge. Many EV owners overlook this component — have it tested at a garage or
            using a portable battery tester if the car is more than three years old.
          </li>
          <li>
            <strong>Inspect windscreen and wipers.</strong> Any chip or crack in the driver&apos;s direct
            line of sight will result in an MOT failure. Chips outside the critical zone but larger than
            40 mm will also fail. Wiper blades that leave streaks or fail to clear the screen effectively
            must be replaced before the test.
          </li>
        </ul>
        <p>
          Following these steps does not guarantee a pass, but it significantly reduces the likelihood of a
          preventable failure that wastes your time and money. Autodun&apos;s free MOT history tool also
          allows you to review your vehicle&apos;s previous advisory notices before the test, so you can
          address any recurring issues that have been flagged in prior years but not yet escalated to failures.
        </p>
      </section>

      <section aria-labelledby="fleet-heading">
        <h2 id="fleet-heading">Fleet Management, MOT Compliance &amp; EV Transition Planning</h2>
        <p>
          For UK fleet operators, the transition to electric vehicles introduces both significant opportunities
          and new compliance challenges. MOT due dates must be tracked across an increasingly mixed fleet of
          petrol, diesel, hybrid, and fully electric vehicles, each with subtly different inspection
          requirements. The consequences of a vehicle operating with an expired MOT certificate include
          a fine of up to £1,000, invalidated insurance, and potential prosecution — risks that are
          unacceptable for professionally managed fleets.
        </p>
        <p>
          Autodun&apos;s batch MOT history lookup allows fleet managers to check the MOT status and history
          of multiple vehicles simultaneously, saving significant administrative time compared with running
          individual checks through the DVSA portal. By reviewing the full advisory history of each fleet
          vehicle, maintenance teams can identify patterns of wear across vehicle models and build more
          accurate preventive maintenance schedules.
        </p>
        <p>
          The financial case for EV fleet adoption continues to strengthen in 2026. According to{' '}
          <a href="https://www.gov.uk/government/publications/electric-vehicle-fleet-toolkit" target="_blank" rel="noopener noreferrer">
            the Government&apos;s electric vehicle fleet toolkit
          </a>
          , whole-life costs for many EV models now undercut equivalent petrol vehicles when fuel, servicing,
          and tax savings are considered together. Benefit-in-Kind (BIK) tax rates for zero-emission company
          cars remain substantially lower than for petrol equivalents, making EVs particularly attractive
          for employer-provided vehicles. Our fleet transition guides cover total cost of ownership modelling,
          charging infrastructure planning, driver training, and HMRC reporting obligations in detail.
        </p>
        <p>
          Charging infrastructure is the most common practical barrier to fleet EV adoption. Depot charging
          requirements vary enormously depending on fleet size, vehicle dwell time, and the nature of daily
          routes. For last-mile delivery fleets returning to a depot overnight, overnight slow charging may
          be entirely sufficient. For field service fleets covering unpredictable distances, a mix of home
          charging, workplace top-ups, and access to public rapid chargers may be necessary. Our UK EV
          charging MOT guides include a dedicated fleet charging infrastructure planning section, with
          case studies drawn from real UK fleet deployments across a range of sectors and vehicle types.
        </p>
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>

        <h3>What does an EV MOT check include in the UK?</h3>
        <p>
          An EV MOT in the UK skips the exhaust emissions test but still covers brakes, tyres, lights,
          steering, bodywork, windscreen, horn, and high-voltage warning labels. Regenerative braking
          systems are assessed alongside physical brake pads and discs. The DVSA&apos;s{' '}
          <a href="https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" target="_blank" rel="noopener noreferrer">
            MOT inspection manual
          </a>{' '}
          sets out the full list of items checked for electric and hybrid vehicles.
        </p>

        <h3>How can I check a used car&apos;s MOT history for free?</h3>
        <p>
          You can check a used car&apos;s full MOT history for free using Autodun&apos;s MOT history tool,
          which pulls directly from DVSA records. This shows every test result, advisory notice, and failure
          reason without registration or payment. The official{' '}
          <a href="https://www.gov.uk/check-mot-history" target="_blank" rel="noopener noreferrer">
            DVSA MOT history service
          </a>{' '}
          is also publicly accessible, and Autodun presents the same underlying data in a more readable,
          buyer-focused format.
        </p>

        <h3>How do I detect mileage clocking on a used car?</h3>
        <p>
          Cross-referencing recorded mileage figures across the vehicle&apos;s full MOT history is one of the
          most reliable methods. Autodun&apos;s mileage checker plots every recorded reading on a timeline,
          making inconsistencies immediately visible. Any entry where the mileage decreases between tests, or
          where an implausibly large jump occurs in a single year, should be treated as a serious warning sign
          requiring further investigation before purchase.
        </p>

        <h3>What is the cheapest way to charge an electric car in the UK?</h3>
        <p>
          Home charging with a 7 kW wallbox is typically the most cost-effective option, costing roughly
          £9–£12 per full charge at average domestic electricity rates. Combining overnight home charging
          with opportunistic workplace top-ups can reduce annual fuel costs by several hundred pounds compared
          with relying on public rapid chargers. Smart tariffs from suppliers such as those listed in{' '}
          <a href="https://www.ofgem.gov.uk/information-for-household-consumers/energy-and-the-environment/electric-vehicles" target="_blank" rel="noopener noreferrer">
            Ofgem&apos;s EV consumer guidance
          </a>{' '}
          can reduce costs further by scheduling charging during off-peak overnight periods.
        </p>

        <h3>Why are my EV brake discs corroded even though the car is nearly new?</h3>
        <p>
          Because regenerative braking handles most deceleration in everyday EV driving, the physical brake
          pads and discs see far less use than on petrol or diesel vehicles. This reduced use can cause surface
          corrosion even on nearly new cars. Performing a short session of firm braking in the days before your
          MOT can help clear surface rust and reduce the risk of a brake-related advisory or failure during
          the test.
        </p>
      </section>
    </>
  );
}