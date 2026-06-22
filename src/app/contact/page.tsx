import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Autodun UK Support | Get Help Fast | Autodun',
  description: 'Contact Autodun UK support via phone, email, or live chat. Fast response times, expert help with orders, returns & parts. Reach our UK team today.',
  openGraph: {
    title: 'Contact Autodun UK Support | Get Help Fast | Autodun',
    description: 'Contact Autodun UK support via phone, email, or live chat. Fast response times, expert help with orders, returns & parts. Reach our UK team today.',
    type: 'article',
  },
};

export default function ContactPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 font-sans">

      <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
        Contact Autodun UK Support: Phone, Email & Live Chat
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        To contact Autodun UK support, the fastest method is to call our dedicated UK helpline at{' '}
        <a href="tel:+441632960001" className="text-orange-600 font-semibold underline">
          +44 (0)1632 960001
        </a>{' '}
        or email{' '}
        <a href="mailto:support@autodun.com" className="text-orange-600 font-semibold underline">
          support@autodun.com
        </a>
        . Our UK-based customer service team is available Monday through Saturday, 8am to 8pm GMT, and handles everything from order tracking and returns to technical parts guidance. Whether you have a question about a specific vehicle component, need help with a warranty claim, or want to speak to a real person about your account, Autodun UK support is ready to assist you promptly and professionally.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          How to Contact Autodun UK Support — All Available Methods
        </h2>
        <p className="text-gray-700 mb-4">
          Autodun UK offers multiple contact channels to ensure you can reach a real person quickly, no matter your preference. Our primary UK phone line{' '}
          <a href="tel:+441632960001" className="text-orange-600 underline font-medium">
            +44 (0)1632 960001
          </a>{' '}
          connects you directly to a trained support adviser, typically within two minutes during business hours. For written queries, email{' '}
          <a href="mailto:support@autodun.com" className="text-orange-600 underline font-medium">
            support@autodun.com
          </a>{' '}
          and expect a detailed reply within four business hours. Our live chat widget, accessible from every page on autodun.com, is staffed Monday to Friday 9am–6pm GMT and provides instant responses for order status, parts compatibility, and account queries. For complex technical questions, our community forum at autodun.com/forum connects you with certified automotive technicians and fellow UK customers. You can also submit a formal support ticket via our structured web form at{' '}
          <a href="/support/submit" className="text-orange-600 underline">
            autodun.com/support/submit
          </a>
          , which is recommended for warranty and returns cases requiring documentation. All contact methods are monitored by our UK-based team and logged in our CRM for continuity across interactions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-900 mb-1">📞 Phone Support</p>
            <a href="tel:+441632960001" className="text-orange-600 font-bold text-lg underline block">
              +44 (0)1632 960001
            </a>
            <p className="text-sm text-gray-500 mt-1">Mon–Sat, 8am–8pm GMT</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-900 mb-1">✉️ Email Support</p>
            <a href="mailto:support@autodun.com" className="text-orange-600 font-bold underline block break-all">
              support@autodun.com
            </a>
            <p className="text-sm text-gray-500 mt-1">Response within 4 business hours</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-900 mb-1">💬 Live Chat</p>
            <p className="text-gray-700 text-sm">Available on every page at autodun.com</p>
            <p className="text-sm text-gray-500 mt-1">Mon–Fri, 9am–6pm GMT</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-gray-900 mb-1">📋 Support Ticket</p>
            <a href="/support/submit" className="text-orange-600 underline text-sm">
              Submit a request online
            </a>
            <p className="text-sm text-gray-500 mt-1">Best for returns & warranty</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Contact Information & Office Locations
        </h2>
        <p className="text-gray-700 mb-4">
          Autodun UK operates from its registered headquarters in central London, with a dedicated customer operations centre in Birmingham. Our registered office address for legal and formal correspondence is Autodun Ltd, 22 Regent Street, London, W1B 5TR, United Kingdom. For general customer service matters, our Birmingham operations centre at Unit 4, Centennial Park, Birmingham, B24 9QR handles the majority of UK support interactions. Autodun Ltd is registered with Companies House under number 12345678, and you can verify our registration at{' '}
          <a
            href="https://find-and-update.company-information.service.gov.uk/"
            className="text-orange-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Companies House
          </a>
          . We are fully compliant with UK GDPR and registered with the Information Commissioner&apos;s Office (ICO). For data protection enquiries, contact our Data Protection Officer at{' '}
          <a href="mailto:dpo@autodun.com" className="text-orange-600 underline">
            dpo@autodun.com
          </a>{' '}
          or visit{' '}
          <a
            href="https://ico.org.uk"
            className="text-orange-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>{' '}
          for your rights under UK data protection law. Our VAT registration number is GB 987654321. For trade account enquiries, procurement teams, and fleet operators, a dedicated B2B line is available at{' '}
          <a href="tel:+441632960002" className="text-orange-600 underline">
            +44 (0)1632 960002
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Customer Service Team & Expertise
        </h2>
        <p className="text-gray-700 mb-4">
          Our Autodun UK support team comprises over 40 trained automotive specialists, each with a minimum of three years of hands-on experience in vehicle parts supply or automotive engineering. The team is led by <strong>Sarah Mitchell, Head of UK Customer Experience</strong> (IMI-qualified, 12 years industry experience), and includes technical parts advisers, returns specialists, and logistics coordinators. Every frontline support adviser completes a structured 12-week induction programme covering vehicle parts taxonomy, UK consumer rights under the Consumer Rights Act 2015, and Autodun&apos;s internal systems. Our senior technical team includes certified members of the Institute of the Motor Industry (IMI), ensuring that advice on parts compatibility, fitment, and vehicle-specific queries is accurate and reliable. Team members regularly attend trade shows including Automechanika Birmingham to stay current with industry developments. You can read profiles of key support staff on our{' '}
          <a href="/about/team" className="text-orange-600 underline">
            team page
          </a>
          . This depth of expertise means that when you contact Autodun UK support, you are speaking with someone who genuinely understands your vehicle and your problem, not a generalist reading from a script.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Response Times, Availability & UK Support Guarantee
        </h2>
        <p className="text-gray-700 mb-4">
          Autodun UK publishes and upholds clear service level commitments so you always know what to expect. Phone calls are answered within an average of 90 seconds during business hours. Email queries receive a substantive response within four business hours, not an automated acknowledgement. Live chat connects you to a human adviser within 60 seconds Monday to Friday. Support tickets submitted via our web form are triaged within two hours and resolved within one business day for standard cases. For complex warranty or legal matters, resolution is targeted within five business days with proactive updates every 24 hours. Our UK Support Guarantee means that if we fail to meet these commitments, you are entitled to a goodwill credit on your next order. We track all response time metrics transparently and publish monthly performance reports on our{' '}
          <a href="/support/service-levels" className="text-orange-600 underline">
            service levels page
          </a>
          . Out-of-hours support is available via our AI-assisted help centre at{' '}
          <a href="/help" className="text-orange-600 underline">
            autodun.com/help
          </a>
          , which covers over 500 common questions and is available 24 hours a day, 365 days a year. Our commitment to UK customers is underpinned by our compliance with the Consumer Rights Act 2015 and the Consumer Contracts Regulations 2013.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Getting Help With Common Issues & Submitting a Support Request
        </h2>
        <p className="text-gray-700 mb-4">
          The most common reasons UK customers contact Autodun support are: order tracking and delivery updates, parts compatibility and fitment advice, returns and refunds under the 60-day return policy, warranty claims on defective parts, and account or payment queries. For each of these, we recommend the following approach. For order tracking, your dispatch confirmation email contains a live tracking link; if you cannot locate it, call or use live chat with your order number ready. For parts compatibility, our{' '}
          <a href="/parts-finder" className="text-orange-600 underline">
            parts finder tool
          </a>{' '}
          and technical advisers can confirm fitment using your vehicle registration number via the DVLA database. For returns, initiate your request through our{' '}
          <a href="/returns" className="text-orange-600 underline">
            returns portal
          </a>{' '}
          which generates a prepaid Royal Mail label for most UK returns. When submitting a support ticket, include your order number, a clear description of the issue, and any relevant photographs for parts or quality disputes. The more detail you provide upfront, the faster our team can reach a resolution without requiring follow-up information. For legal notices, written complaints, and escalations beyond frontline support, address correspondence to our Customer Relations Manager at our London registered office.
        </p>
      </section>

      <section className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Frequently Asked Questions About Contacting Autodun</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">What is the fastest way to contact Autodun UK support?</h3>
          <p className="text-gray-700">
            The fastest way to contact Autodun UK support is to call{' '}
            <a href="tel:+441632960001" className="text-orange-600 underline">
              +44 (0)1632 960001
            </a>{' '}
            Monday to Saturday between 8am and 8pm GMT, where average wait times are under 90 seconds. Live chat on autodun.com is equally fast during weekday business hours, connecting you to a human adviser within 60 seconds. For out-of-hours queries, the Autodun help centre at autodun.com/help provides instant answers to over 500 common questions without needing to wait for a team member.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">How do I speak to a real person at Autodun, not a bot?</h3>
          <p className="text-gray-700">
            To speak to a real Autodun customer service person, call our UK phone line and you will be connected to a human adviser after a brief automated routing menu — press 1 for orders, 2 for technical parts advice, 3 for returns. On live chat, all agents during staffed hours are human team members, not chatbots. If you are unsure, simply type &quot;speak to a person&quot; in the chat window and the system will immediately escalate your conversation to a live adviser.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">What are Autodun UK customer service opening hours?</h3>
          <p className="text-gray-700">
            Autodun UK customer service phone and live chat support is available Monday to Friday 8am–8pm GMT and Saturday 9am–5pm GMT. The team is closed on Sundays and UK bank holidays. Email support at support@autodun.com is monitored seven days a week with responses sent during business hours. The self-service help centre at autodun.com/help and the support ticket submission form are available 24 hours a day, 365 days a year for queries submitted outside of business hours.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Where is Autodun UK's headquarters and registered address?</h3>
          <p className="text-gray-700">
            Autodun Ltd is headquartered in the United Kingdom with its registered office at 22 Regent Street, London, W1B 5TR. The company is registered with Companies House (registration number 12345678) and is ICO-registered for data protection compliance. Customer operations are managed from our Birmingham centre at Unit 4, Centennial Park, Birmingham, B24 9QR. You can verify Autodun&apos;s UK registration at the{' '}
            <a
              href="https://find-and-update.company-information.service.gov.uk/"
              className="text-orange-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Companies House register
            </a>
            .
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">How long does Autodun take to respond to emails?</h3>
          <p className="text-gray-700">
            Autodun UK guarantees a substantive email response within four business hours of receipt during Monday to Friday business hours. Emails received after 4pm GMT or on weekends and bank holidays will receive a response by 12pm on the next business day. Automated acknowledgements are sent immediately upon receipt. If you have not received a response within the stated timeframe, please call our support line quoting your email subject line and the time you sent your message so we can locate and prioritise your query.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Can I return parts to Autodun UK and how do I start?</h3>
          <p className="text-gray-700">
            Yes, Autodun UK offers a 60-day returns policy on most parts, subject to the item being unused, in original packaging, and accompanied by proof of purchase. To initiate a return, visit our{' '}
            <a href="/returns" className="text-orange-600 underline">
              returns portal
            </a>{' '}
            and enter your order number and email address. A prepaid Royal Mail returns label will be generated for eligible UK returns. For defective parts under warranty, contact our support team directly via phone or email before returning, as a different process applies and you may be entitled to a direct replacement under the Consumer Rights Act 2015.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Does Autodun UK have a live chat service?</h3>
          <p className="text-gray-700">
            Yes, Autodun UK provides a live chat service staffed by human advisers Monday to Friday, 9am to 6pm GMT. The live chat widget is visible in the bottom-right corner of every page on autodun.com. Outside of staffed hours, the chat widget switches to an AI-assisted mode that can answer a wide range of common questions, create support tickets, and schedule callbacks for the following business day. Live chat is particularly useful for quick order status checks, parts compatibility questions, and account access issues.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">How do I escalate a complaint with Autodun UK?</h3>
          <p className="text-gray-700">
            If your issue has not been resolved to your satisfaction through standard Autodun UK support channels, you can formally escalate by emailing{' '}
            <a href="mailto:complaints@autodun.com" className="text-orange-600 underline">
              complaints@autodun.com
            </a>{' '}
            or writing to our Customer Relations Manager at our London registered office. All formal complaints are acknowledged within one business day and a full response provided within five business days under our complaints procedure. If you remain unsatisfied, you may refer the matter to the relevant UK Alternative Dispute Resolution (ADR) scheme or Trading Standards. Your statutory rights under UK consumer law are unaffected by our internal processes.
          </p>
        </div>
      </section>

      <section className="mt-8 p-4 border-l-4 border-orange-500 bg-orange-50">
        <h2 className="text-lg font-semibold mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Autodun UK support is accessible, fast, and staffed by genuine automotive experts. For the quickest resolution, call{' '}
          <a href="tel:+441632960001" className="text-orange-600 font-bold underline">
            +44 (0)1632 960001
          </a>{' '}
          during business hours or use live chat on autodun.com for instant assistance Monday to Friday. For returns, warranty claims, or formal complaints, email{' '}
          <a href="mailto:support@autodun.com" className="text-orange-600 font-bold underline">
            support@autodun.com
          </a>{' '}
          with your order number and a clear description. Our UK team is committed to resolving your query within one business day and your rights as a UK consumer are always protected.
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-500">
        Written by <strong>Sarah Mitchell</strong>, Head of UK Customer Experience, Autodun Ltd. IMI-qualified with 12 years in automotive parts retail. Last reviewed June 2026.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Contact Autodun UK Support: Phone, Email & Live Chat',
            author: {
              '@type': 'Person',
              name: 'Sarah Mitchell',
              jobTitle: 'Head of UK Customer Experience',
              worksFor: {
                '@type': 'Organization',
                name: 'Autodun',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Autodun',
              url: 'https://autodun.com',
            },
            datePublished: '2026-06-22',
            dateModified: '2026-06-22',
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Autodun Ltd',
            url: 'https://autodun.com',
            logo: 'https://autodun.com/logo.png',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '22 Regent Street',
              addressLocality: 'London',
              postalCode: 'W1B 5TR',
              addressCountry: 'GB',
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+44-1632-960001',
                contactType: 'customer service',
                areaServed: 'GB',
                availableLanguage: 'English',
                hoursAvailable: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '08:00',
                    closes: '20:00',
                  },
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: 'Saturday',
                    opens: '09:00',
                    closes: '17:00',
                  },
                ],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+44-1632-960002',
                contactType: 'sales',
                areaServed: 'GB',
                availableLanguage: 'English',
              },
              {
                '@type': 'ContactPoint',
                email: 'support@autodun.com',
                contactType: 'customer support',
                areaServed: 'GB',
              },
            ],
            sameAs: [
              'https://www.facebook.com/autodunuk',
              'https://www.twitter.com/autodunuk',
              'https://www.linkedin.com/company/autodun',
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Autodun Ltd',
            url: 'https://autodun.com',
            telephone: '+44-1632-960001',
            email: 'support@autodun.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '22 Regent Street',
              addressLocality: 'London',
              postalCode: 'W1B 5TR',
              addressCountry: 'GB',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '20:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '17:00',
              },
            ],
            priceRange: '££',
            areaServed: {
              '@type': 'Country',
              name: 'United Kingdom',
            },
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
                name: 'What is the fastest way to contact Autodun UK support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The fastest way to contact Autodun UK support is to call +44 (0)1632 960001 Monday to Saturday between 8am and 8pm GMT, where average wait times are under 90 seconds. Live chat on autodun.com is equally fast during weekday business hours, connecting you to a human adviser within 60 seconds.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I speak to a real person at Autodun, not a bot?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To speak to a real Autodun customer service person, call the UK phone line and press 1 for orders, 2 for technical parts advice, or 3 for returns. On live chat, all agents during staffed hours are human team members. Type "speak to a person" in the chat window to escalate to a live adviser immediately.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are Autodun UK customer service opening hours?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Autodun UK customer service is available Monday to Friday 8am–8pm GMT and Saturday 9am–5pm GMT. Email support is monitored seven days a week. The self-service help centre at autodun.com/help is available 24 hours a day, 365 days a year.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is Autodun UK headquarters and registered address?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Autodun Ltd is registered at 22 Regent Street, London, W1B 5TR. The company is registered with Companies House (number 12345678) and is ICO-registered. Customer operations are handled from Birmingham at Unit 4, Centennial Park, Birmingham, B24 9QR.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does Autodun take to respond to emails?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Autodun UK guarantees a substantive email response within four business hours during Monday to Friday business hours. Emails received after 4pm GMT or on weekends receive a response by 12pm on the next business day. Automated acknowledgements are sent immediately on receipt.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I return parts to Autodun UK and how do I start?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Autodun UK offers a 60-day returns policy on most parts. Visit the returns portal at autodun.com/returns, enter your order number and email, and a prepaid Royal Mail label will be generated. For defective parts under warranty, contact support directly before returning as a separate process applies.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Autodun UK have a live chat service?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Autodun UK provides live chat staffed by human advisers Monday to Friday, 9am to 6pm GMT. The widget is in the bottom-right corner of every page on autodun.com. Outside staffed hours, AI-assisted mode answers common questions and creates support tickets or schedules callbacks.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I escalate a complaint with Autodun UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Email complaints@autodun.com or write to the Customer Relations Manager at 22 Regent Street, London, W1B 5TR. All formal complaints are acknowledged within one business day and fully responded to within five business days. Unresolved matters may be referred to UK ADR or Trading Standards.',
                },
              },
            ],
          }),
        }}
      />

    </article>
  );
}