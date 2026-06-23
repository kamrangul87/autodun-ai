import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Autodun – Vehicle Support UK Contact & Help',
  description: 'Reach Autodun UK support by phone, email or live chat. Fast response times for vehicle history, MOT & data queries. Contact us now.',
  openGraph: {
    title: 'Contact Autodun – Vehicle Support UK Contact & Help',
    description: 'Reach Autodun UK support by phone, email or live chat. Fast response times for vehicle history, MOT & data queries. Contact us now.',
    type: 'website',
    url: 'https://autodun.com/contact',
    siteName: 'Autodun',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Autodun – Vehicle Support UK Contact & Help',
    description: 'Reach Autodun UK support by phone, email or live chat. Fast response times for vehicle history, MOT & data queries. Contact us now.',
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
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
        name: 'Contact',
        item: 'https://autodun.com/contact',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Autodun',
    url: 'https://autodun.com',
    description: 'Free UK vehicle tools — MOT history, EV charging checker, mileage verification',
    founder: { '@type': 'Person', name: 'Kamran Gul' },
    dateModified: '2026-06-23',
  };

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
        Autodun provides free UK vehicle tools including MOT history checks, EV charging compatibility, and mileage verification — all designed to help drivers and dealerships make informed decisions. Our dedicated vehicle support UK contact team is available by phone, email, live chat, and contact form to assist with any query. Whether you need help with a vehicle history report, API integration, or account management, our UK-based specialists are ready to respond quickly. Explore our <a href="/about" className="text-orange-600 underline hover:text-orange-700">About page</a> to learn more about who we are, visit our <a href="/blog" className="text-orange-600 underline hover:text-orange-700">Blog</a> for automotive data guides, or continue reading below to find the right contact channel for your needs.
      </p>

      <div className="mb-8 rounded-lg overflow-hidden border border-gray-200">
        <img
          src="/images/autodun-uk-support-team.jpg"
          alt="Autodun UK vehicle support team ready to help with MOT history and automotive data queries"
          width={768}
          height={320}
          className="w-full object-cover"
          loading="eager"
        />
      </div>

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

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Explore More from Autodun</h2>
        <p className="text-gray-700 mb-4">
          While you are here, discover everything Autodun has to offer. Our free UK vehicle tools, guides, and resources are available to all users.
        </p>
        <ul className="list-none space-y-3">
          <li>
            <a href="/about" className="text-orange-600 underline hover:text-orange-700 font-medium">About Autodun</a>
            <span className="text-gray-600 text-sm"> — Learn about our mission to make vehicle data free and accessible across the UK.</span>
          </li>
          <li>
            <a href="/blog" className="text-orange-600 underline hover:text-orange-700 font-medium">Autodun Blog</a>
            <span className="text-gray-600 text-sm"> — Read expert guides on MOT history, EV charging, mileage checks, and more.</span>
          </li>
          <li>
            <a href="/contact" className="text-orange-600 underline hover:text-orange-700 font-medium">Contact Us</a>
            <span className="text-gray-600 text-sm"> — You are here — reach our vehicle support UK contact team directly.</span>
          </li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </article>
  );
}