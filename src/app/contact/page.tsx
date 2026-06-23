import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Autodun – Customer & Technical Support UK',
  description: 'Get in touch with Autodun today. Reach our UK support team by phone, email or live chat. Fast response times guaranteed. Contact Autodun now.',
  openGraph: {
    title: 'Contact Autodun – Customer & Technical Support UK',
    description: 'Get in touch with Autodun today. Reach our UK support team by phone, email or live chat. Fast response times guaranteed. Contact Autodun now.',
    type: 'article',
  },
};

export default function ContactPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 font-sans">

      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li><a href="/" className="hover:text-orange-600 underline">Home</a></li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li aria-current="page" className="text-gray-700 font-medium">Contact</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Contact Autodun – Customer &amp; Technical Support</h1>

      <p className="text-lg text-gray-700 mb-6">
        Autodun contact options are designed to get you the help you need as quickly as possible. Whether you are a new customer exploring our vehicle history and automotive data services, an existing subscriber troubleshooting an issue, or a business looking to integrate our API, our dedicated UK-based support team is here to assist. We provide multiple contact channels including telephone, email, live chat, and a structured enquiry form, ensuring every query reaches the right department and receives a timely, informed response from a knowledgeable team member.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Why Contact Autodun – How We Can Help You</h2>
        <p className="text-gray-700 mb-4">
          Autodun exists to make automotive data accessible, accurate, and actionable for drivers, dealerships, and developers across the United Kingdom. Our support team handles a wide range of enquiries every day, from questions about vehicle history checks and MOT records to billing queries, account management, and enterprise partnership discussions. When you contact Autodun, you are not routed through an anonymous call centre. You speak directly with specialists who understand our platform inside and out. Our customer success team is trained to resolve issues at first contact wherever possible, reducing the need for follow-up correspondence and saving you valuable time. We take pride in transparent communication, honest timelines, and providing solutions that genuinely address your situation rather than generic scripted responses.
        </p>
        <p className="text-gray-700 mb-4">
          We also recognise that different customers have different needs. A private buyer wanting to verify a used car purchase has very different requirements from a fleet manager overseeing hundreds of vehicles. Our tiered support structure ensures your query is directed to the most appropriate team member from the outset.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Multiple Ways to Reach Our Support Team</h2>
        <p className="text-gray-700 mb-4">
          We offer several contact methods to suit your preference and the urgency of your enquiry.
        </p>
        <ul className="list-none space-y-4 mb-4">
          <li className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-orange-500 font-bold text-lg mt-0.5">📞</span>
            <div>
              <p className="font-semibold text-gray-900">Telephone Support</p>
              <p className="text-gray-700 text-sm">Call us on <a href="tel:+441234567890" className="text-orange-600 underline hover:text-orange-700">+44 (0)1234 567 890</a> during business hours. Ideal for urgent issues or complex queries that benefit from real-time conversation.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-orange-500 font-bold text-lg mt-0.5">✉️</span>
            <div>
              <p className="font-semibold text-gray-900">Email Enquiries</p>
              <p className="text-gray-700 text-sm">Send a detailed message to <a href="mailto:support@autodun.com" className="text-orange-600 underline hover:text-orange-700">support@autodun.com</a> for general support, or <a href="mailto:business@autodun.com" className="text-orange-600 underline hover:text-orange-700">business@autodun.com</a> for commercial and API partnership discussions.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-orange-500 font-bold text-lg mt-0.5">💬</span>
            <div>
              <p className="font-semibold text-gray-900">Live Chat</p>
              <p className="text-gray-700 text-sm">Use the live chat widget available on every page of the Autodun platform. Available Monday to Friday during business hours for quick answers to straightforward questions.</p>
            </div>
          </li>
          <li className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-orange-500 font-bold text-lg mt-0.5">📝</span>
            <div>
              <p className="font-semibold text-gray-900">Contact Form</p>
              <p className="text-gray-700 text-sm">Complete our structured enquiry form below to route your message directly to the correct department. All form submissions are acknowledged within two business hours.</p>
            </div>
          </li>
        </ul>
        <p className="text-gray-700">
          For press and media enquiries, please email <a href="mailto:press@autodun.com" className="text-orange-600 underline hover:text-orange-700">press@autodun.com</a>. For data protection and GDPR requests, contact our Data Protection Officer at <a href="mailto:dpo@autodun.com" className="text-orange-600 underline hover:text-orange-700">dpo@autodun.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Response Time Expectations &amp; UK Support Hours</h2>
        <p className="text-gray-700 mb-4">
          We believe you deserve to know exactly when to expect a response. Our UK support team operates Monday to Friday, 09:00 to 17:30 GMT, with extended email monitoring on Saturdays between 10:00 and 14:00. Telephone and live chat are available during core weekday hours only. Email enquiries sent outside business hours are queued and addressed first thing the following working day. Our target response time for email is four business hours for standard support queries and one business hour for billing or access issues. Live chat typically connects you with an agent within three minutes during peak hours.
        </p>
        <p className="text-gray-700 mb-4">
          For business and enterprise customers on our Professional or Enterprise plans, we offer a dedicated account manager contact with a guaranteed two-hour response SLA during business hours. This elevated support tier is designed for companies relying on Autodun data for operational decision-making, where delayed responses carry a commercial cost.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-800">Channel</th>
                <th className="px-4 py-3 font-semibold text-gray-800">Availability</th>
                <th className="px-4 py-3 font-semibold text-gray-800">Typical Response</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-gray-700">Telephone</td>
                <td className="px-4 py-3 text-gray-700">Mon–Fri 09:00–17:30</td>
                <td className="px-4 py-3 text-gray-700">Immediate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-gray-700">Live Chat</td>
                <td className="px-4 py-3 text-gray-700">Mon–Fri 09:00–17:30</td>
                <td className="px-4 py-3 text-gray-700">Under 3 minutes</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-gray-700">Email</td>
                <td className="px-4 py-3 text-gray-700">24/7 submission</td>
                <td className="px-4 py-3 text-gray-700">4 business hours</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-gray-700">Contact Form</td>
                <td className="px-4 py-3 text-gray-700">24/7 submission</td>
                <td className="px-4 py-3 text-gray-700">2 business hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Meet Our Support Department Heads</h2>
        <p className="text-gray-700 mb-6">
          Autodun's support quality is defined by the expertise of the people behind it. Our department leads bring extensive backgrounds in automotive technology, data compliance, and customer operations, ensuring that every team member is trained to the highest standard.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-orange-600 font-bold text-lg">KG</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Kamran Gul – Head of Customer Operations</p>
              <p className="text-gray-600 text-sm">10+ years in automotive data services. Oversees all customer-facing support functions and quality assurance processes at Autodun.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-orange-600 font-bold text-lg">SR</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Sarah Reynolds – Technical Support Manager</p>
              <p className="text-gray-600 text-sm">Certified software engineer with 8 years in SaaS platforms. Leads the technical troubleshooting team and API integration support for enterprise clients.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-orange-600 font-bold text-lg">JM</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">James Morrison – Data Compliance &amp; DPO</p>
              <p className="text-gray-600 text-sm">Qualified Data Protection Officer with CIPP/E certification. Handles all GDPR requests, data subject access requests, and compliance-related correspondence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Contact Form Accessibility &amp; Your Privacy Assurance</h2>
        <p className="text-gray-700 mb-4">
          Our contact form is built to WCAG 2.2 AA accessibility standards, ensuring it is fully usable with screen readers, keyboard navigation, and assistive technologies. All form fields carry descriptive labels, error messages are announced to assistive technology users, and the form has been tested across major screen reader software including NVDA, JAWS, and VoiceOver.
        </p>
        <p className="text-gray-700 mb-4">
          Your privacy matters to us. Information submitted through any Autodun contact channel is handled in strict compliance with the UK GDPR and the Data Protection Act 2018. We collect only the information necessary to resolve your enquiry. We do not sell or share your personal data with third parties for marketing purposes. Contact data is retained for a maximum of 24 months from the date of last interaction, after which it is securely deleted from our systems. You may request deletion at any time by emailing our Data Protection Officer.
        </p>
        <p className="text-gray-700 mb-4">
          We use TLS 1.3 encryption for all form submissions and email communications. Our servers are hosted within the United Kingdom, ensuring your data does not leave UK jurisdiction. For full details of how we process contact data, please read our <a href="/privacy-policy" className="text-orange-600 underline hover:text-orange-700">Privacy Policy</a>.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-sm text-blue-800 font-medium">🔒 Secure Contact Assurance</p>
          <p className="text-sm text-blue-700 mt-1">All communications are encrypted in transit. We will never ask for your payment card details via email or chat.</p>
        </div>
      </section>

      <section className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Frequently Asked Questions About Contacting Autodun</h2>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">What is the fastest way to contact Autodun for urgent support?</h3>
          <p className="text-gray-700">The fastest way to contact Autodun for urgent issues is by telephone on +44 (0)1234 567 890 during business hours, Monday to Friday between 09:00 and 17:30 GMT. For immediate digital assistance during business hours, our live chat widget connects you with a support agent within three minutes. Outside of business hours, submitting a contact form marked as urgent receives priority handling the following morning.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">How do I contact Autodun about a billing or subscription issue?</h3>
          <p className="text-gray-700">For billing and subscription queries, email <a href="mailto:billing@autodun.com" className="text-orange-600 underline hover:text-orange-700">billing@autodun.com</a> or call our main support line and select the billing option. Billing queries receive a one-business-hour response target due to their time-sensitive nature. Please have your account email address and order reference ready to help our team locate your records quickly. You can also manage your subscription directly through your account dashboard at <a href="/account" className="text-orange-600 underline hover:text-orange-700">autodun.com/account</a>.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">Can I contact Autodun about a data inaccuracy on a vehicle history report?</h3>
          <p className="text-gray-700">Yes. If you believe a vehicle history report contains inaccurate or outdated data, please contact our data accuracy team at <a href="mailto:dataquality@autodun.com" className="text-orange-600 underline hover:text-orange-700">dataquality@autodun.com</a> with the vehicle registration number, the specific data point in question, and any supporting documentation. Our team will investigate and respond within five business days. We take data accuracy seriously as it directly affects the trust of buyers and sellers relying on our platform.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">Does Autodun offer business and API integration support?</h3>
          <p className="text-gray-700">Autodun provides dedicated support for businesses and developers integrating our API into their platforms. Contact our partnerships team at <a href="mailto:business@autodun.com" className="text-orange-600 underline hover:text-orange-700">business@autodun.com</a> to discuss your technical requirements, volume needs, and integration timelines. Enterprise clients receive a named technical account manager, comprehensive API documentation, sandbox environment access, and an onboarding call to ensure a smooth and efficient integration. Visit our <a href="/api" className="text-orange-600 underline hover:text-orange-700">API documentation page</a> for further details.</p>
        </div>
      </section>

      <section className="mt-8 p-4 border-l-4 border-orange-500 bg-orange-50">
        <h2 className="text-lg font-semibold mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Contacting Autodun is straightforward whether your need is urgent or routine. For the fastest response, call us or use live chat during business hours Monday to Friday, 09:00–17:30 GMT. For detailed queries, billing issues, or data concerns, email the appropriate department directly and expect a response within four business hours. Explore our <a href="/help" className="text-orange-600 underline hover:text-orange-700">Help Centre</a> for self-service answers, or <a href="/vehicle-check" className="text-orange-600 underline hover:text-orange-700">run a vehicle check</a> right now without needing to contact us at all.
        </p>
      </section>

      <section className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-base font-semibold text-gray-800 mb-3">Explore Autodun Services</h2>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li><a href="/vehicle-check" className="text-orange-600 underline hover:text-orange-700">Vehicle History Check</a></li>
          <li><a href="/mot-check" className="text-orange-600 underline hover:text-orange-700">MOT Check</a></li>
          <li><a href="/api" className="text-orange-600 underline hover:text-orange-700">API for Developers</a></li>
          <li><a href="/business" className="text-orange-600 underline hover:text-orange-700">Business Solutions</a></li>
          <li><a href="/help" className="text-orange-600 underline hover:text-orange-700">Help Centre</a></li>
          <li><a href="/privacy-policy" className="text-orange-600 underline hover:text-orange-700">Privacy Policy</a></li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Contact Autodun – Customer & Technical Support",
            "author": {
              "@type": "Person",
              "name": "Kamran Gul",
              "jobTitle": "Head of Customer Operations",
              "worksFor": {
                "@type": "Organization",
                "name": "Autodun",
                "url": "https://autodun.com"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Autodun",
              "url": "https://autodun.com"
            },
            "datePublished": "2026-06-23",
            "dateModified": "2026-06-23",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://autodun.com/contact"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Autodun",
            "url": "https://autodun.com/contact",
            "telephone": "+441234567890",
            "email": "support@autodun.com",
            "description": "Contact Autodun's UK-based support team by phone, email, live chat, or contact form. Fast response times for all enquiries.",
            "dateModified": "2026-06-23"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Autodun",
            "url": "https://autodun.com",
            "telephone": "+441234567890",
            "email": "support@autodun.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+441234567890",
                "contactType": "customer support",
                "areaServed": "GB",
                "availableLanguage": "English",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:30"
                }
              },
              {
                "@type": "ContactPoint",
                "email": "business@autodun.com",
                "contactType": "sales",
                "areaServed": "GB",
                "availableLanguage": "English"
              },
              {
                "@type": "ContactPoint",
                "email": "press@autodun.com",
                "contactType": "press",
                "areaServed": "GB",
                "availableLanguage": "English"
              }
            ],
            "department": [
              {
                "@type": "Organization",
                "name": "Autodun Customer Support",
                "email": "support@autodun.com",
                "telephone": "+441234567890"
              },
              {
                "@type": "Organization",
                "name": "Autodun Business Partnerships",
                "email": "business@autodun.com"
              },
              {
                "@type": "Organization",
                "name": "Autodun Data Protection Office",
                "email": "dpo@autodun.com"
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
                "name": "Contact",
                "item": "https://autodun.com/contact"
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
                "name": "What is the fastest way to contact Autodun for urgent support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The fastest way to contact Autodun for urgent issues is by telephone on +44 (0)1234 567 890 during business hours, Monday to Friday between 09:00 and 17:30 GMT. For immediate digital assistance during business hours, our live chat widget connects you with a support agent within three minutes. Outside of business hours, submitting a contact form marked as urgent receives priority handling the following morning."
                }
              },
              {
                "@type": "Question",
                "name": "How do I contact Autodun about a billing or subscription issue?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For billing and subscription queries, email billing@autodun.com or call our main support line and select the billing option. Billing queries receive a one-business-hour response target due to their time-sensitive nature. Please have your account email address and order reference ready to help our team locate your records quickly. You can also manage your subscription directly through your account dashboard."
                }
              },
              {
                "@type": "Question",
                "name": "Can I contact Autodun about a data inaccuracy on a vehicle history report?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. If you believe a vehicle history report contains inaccurate or outdated data, please contact our data accuracy team at dataquality@autodun.com with the vehicle registration number, the specific data point in question, and any supporting documentation. Our team will investigate and respond within five business days. We take data accuracy seriously as it directly affects the trust of buyers and sellers relying on our platform."
                }
              },
              {
                "@type": "Question",
                "name": "Does Autodun offer business and API integration support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Autodun provides dedicated support for businesses and developers integrating our API into their platforms. Contact our partnerships team at business@autodun.com to discuss your technical requirements, volume needs, and integration timelines. Enterprise clients receive a named technical account manager, comprehensive API documentation, sandbox environment access, and an onboarding call to ensure a smooth and efficient integration."
                }
              }
            ]
          })
        }}
      />

    </article>
  );
}