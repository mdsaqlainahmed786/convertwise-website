import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Check,
  X,
  Zap,
  Mic,
  Brain,
  BarChart2,
  Database,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/pricing`;
const ogImage = `${siteUrl}/og-image.png`;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Nimitai Pricing — $149/Seat/Month | AI Meeting Intelligence for B2B Sales Teams',
  description:
    'Nimitai is in private beta. Founding teams get $149/seat/month, private onboarding, and direct access to the founders. Join the waitlist to apply for early access.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: pageUrl },
    ],
  },
};

const faqs = [
  {
    question: 'How much does Nimitai cost?',
    answer:
      'Nimitai is $149/seat/month during early access. Each seat covers one team member with full access to all AI features — recordings, coaching, deal risk scoring, CRM sync, and more. An annual plan is also available at a discounted rate.',
  },
  {
    question: 'Is there a free trial during private beta?',
    answer:
      'Yes, accepted founding teams get a 14-day trial with full feature access.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. Nimitai is month-to-month with no minimum commitment. Cancel anytime from your account settings — no penalties, no questions, no sales calls to exit. Your data remains accessible for 30 days after cancellation.',
  },
  {
    question: 'How does Nimitai compare to Gong pricing?',
    answer:
      'Gong pricing starts at approximately $1,200–$1,600 per seat per year with a 15-seat minimum — meaning $18,000–$24,000 minimum annual spend. Nimitai is $149/seat/month during early access. For a 5-person sales team, Nimitai is roughly 90% cheaper than Gong with no enterprise contract or seat minimums.',
  },
  {
    question: 'Does Nimitai charge per meeting or per minute?',
    answer:
      'No. Nimitai charges $149/seat/month with no per-meeting or per-minute charges. Analyze every sales conversation your team has — discovery calls, demos, follow-ups, QBRs — all included.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Nimitai AI Meeting Intelligence',
  description: 'AI conversation intelligence software for B2B sales teams. Records sales calls, provides real-time coaching, detects objection patterns, and surfaces deal risks. The Gong alternative built for startup teams.',
  url: pageUrl,
  brand: {
    '@type': 'Brand',
    name: 'Nimitai',
  },
  offers: {
    '@type': 'Offer',
    name: 'Founding Monthly Plan — $149/seat/month',
    price: '149',
    priceCurrency: 'USD',
    availability: 'https://schema.org/LimitedAvailability',
    url: pageUrl,
    seller: {
      '@type': 'Organization',
      name: 'Nimitai',
      url: siteUrl,
    },
  },
  category: 'AI Sales Intelligence Software',
};

const monthlyFeatures = [
  'Unlimited sales call recordings',
  'AI conversation intelligence',
  'Deal risk scoring on every call',
  'Objection pattern detection',
  'Talk/listen ratio analysis',
  'Real-time coaching cues',
  'Salesforce + HubSpot CRM sync',
  'Rep performance scorecards',
  'Win/loss pattern analysis',
  'Unlimited team members',
  '30-minute setup',
  '14-day trial for founding teams',
];

const annualFeatures = [
  'Everything in Monthly, plus:',
  'Priority support',
  'Dedicated onboarding session',
  'Custom integration support',
  'Early access to new features',
];

const comparisonRows = [
  { tool: 'Gong', price: '$1,200–$1,600/seat/year', seats: '15 seat minimum', contract: 'Annual required', intelligence: 'Enterprise', hasIntelligence: true, isNimitai: false },
  { tool: 'Chorus.ai', price: '$1,000+/seat/year', seats: '10 seat minimum', contract: 'Annual required', intelligence: 'Enterprise', hasIntelligence: true, isNimitai: false },
  { tool: 'Clari', price: '$700+/seat/year', seats: '10 seat minimum', contract: 'Annual required', intelligence: 'Enterprise', hasIntelligence: true, isNimitai: false },
  { tool: 'Fathom', price: 'Free–$19/seat/mo', seats: 'Per seat', contract: 'Monthly', intelligence: 'Notes only', hasIntelligence: false, isNimitai: false },
  { tool: 'Fireflies', price: 'Free–$18/seat/mo', seats: 'Per seat', contract: 'Monthly', intelligence: 'Basic', hasIntelligence: false, isNimitai: false },
  { tool: 'Nimitai', price: '$149/seat/mo', seats: 'Per seat', contract: 'Month-to-month', intelligence: 'Full AI', hasIntelligence: true, isNimitai: true },
];

const featureCards = [
  {
    icon: Mic,
    title: 'Every Call Recorded & Analyzed',
    body: 'Nimitai joins every scheduled sales call automatically. Records, transcribes, and analyzes in real time. No per-call limits, no storage caps.',
  },
  {
    icon: Brain,
    title: 'Full AI Sales Intelligence',
    body: 'Deal risk scores, objection pattern clusters, talk-ratio reports, buyer sentiment analysis, competitive mention detection — all included for every call your team takes.',
  },
  {
    icon: BarChart2,
    title: 'Real-Time Coaching',
    body: 'Live alerts during calls when your rep is talking too much, when the prospect shows buying signals, or when the conversation is heading toward a stall.',
  },
  {
    icon: Database,
    title: 'Automatic CRM Updates',
    body: 'Call summaries, next steps, deal risk scores, and action items sync to Salesforce or HubSpot immediately after every call. Zero manual CRM work.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white/95 dark:bg-gray-800/60 rounded-3xl shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between gap-4 p-8 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
              {isOpen ? (
                <ChevronUp className="shrink-0 text-[#E89422] dark:text-[#F5B040]" size={20} />
              ) : (
                <ChevronDown className="shrink-0 text-gray-400 dark:text-gray-500" size={20} />
              )}
            </button>
            {isOpen && (
              <div className="px-8 pb-8 text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Pricing() {
  return (
    <>
      <Helmet>
        <title>Nimitai Pricing — $149/Seat/Month | AI Meeting Intelligence</title>
        <meta
          name="description"
          content="Nimitai pricing: from $149/seat/month. No annual contract, no seat minimums. Private beta — founding teams get direct onboarding. Join the waitlist for early access."
        />
        <meta
          name="keywords"
          content="nimitai pricing, AI meeting intelligence pricing, sales call recording software pricing, gong alternative pricing, conversation intelligence software cost"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Nimitai Pricing — $149/Seat/Month | AI Meeting Intelligence for B2B Sales Teams" />
        <meta
          property="og:description"
          content="Nimitai pricing: from $149/seat/month. No annual contract, no seat minimums. Private beta — founding teams get direct onboarding. Join the waitlist for early access."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Nimitai Pricing — $149/Seat/Month | AI Meeting Intelligence for B2B Sales Teams" />
        <meta
          name="twitter:description"
          content="Nimitai pricing: from $149/seat/month. No annual contract, no seat minimums. Private beta — founding teams get direct onboarding. Join the waitlist for early access."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@Nimit_ai" />
        <meta name="twitter:site" content="@Nimit_ai" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#E89422" />

        {/* JSON-LD WebPage */}
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        {/* JSON-LD Product + Offer */}
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(232,148,34,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,148,34,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Gradient orbs */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/95 dark:bg-gray-800/70 border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
            >
              <TrendingUp className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">Simple, Founder-Friendly Pricing</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              $149/Seat/Month. No Enterprise Contracts. No Surprises.
            </h1>

            <p
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Nimitai is <strong className="text-gray-900 dark:text-white">$149/seat/month</strong> — built for B2B SaaS sales teams. Currently in private beta. Founding teams get locked pricing, private onboarding, and direct access to the founders.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Apply for Founding Access
                <Zap size={18} />
              </a>
              <a
                href="#compare"
                className="px-8 py-4 bg-white/95 dark:bg-gray-800/70 border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                See Pricing Comparison
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PRICING CARDS ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly card — highlighted */}
            <div
              className="relative bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl p-8 shadow-2xl shadow-[#E89422]/30 border border-[#E89422]/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/20 rounded-full">
                  <span className="text-white text-xs font-semibold uppercase tracking-widest">Most Popular</span>
                </div>
                <div className="text-5xl font-bold text-white mb-1">$149</div>
                <div className="text-[#F5B040] text-lg mb-1">/seat/month</div>
                <div className="text-[#F5B040] text-sm mb-8">Early access — private beta</div>
                <ul className="space-y-3 mb-8">
                  {monthlyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-amber-100">
                      <span className="inline-flex items-center justify-center w-5 h-5 bg-green-400/20 rounded-full shrink-0">
                        <Check className="text-green-400" size={12} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-white text-[#C47010] font-semibold rounded-2xl hover:bg-amber-50 transition-colors transform hover:scale-[1.02] shadow-lg"
                >
                  Join the Waitlist
                </a>
                <p className="text-center text-[#F5B040] text-sm mt-3">Founding teams only — limited spots</p>
              </div>
            </div>

            {/* Annual card */}
            <div
              className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <span className="text-gray-600 dark:text-gray-300 text-xs font-semibold uppercase tracking-widest">Annual Plan</span>
              </div>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-1">$119</div>
              <div className="text-gray-500 dark:text-gray-400 text-lg mb-1">/seat/month (annual)</div>
              <div className="text-green-600 dark:text-green-400 text-sm font-semibold mb-8">Save $360/year</div>
              <ul className="space-y-3 mb-8">
                {annualFeatures.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 ${i === 0 ? 'text-gray-500 dark:text-gray-400 font-medium text-sm' : 'text-gray-700 dark:text-gray-300'}`}>
                    {i === 0 ? null : (
                      <span className="inline-flex items-center justify-center w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full shrink-0">
                        <Check className="text-green-600 dark:text-green-400" size={12} />
                      </span>
                    )}
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://nilanshgupta.typeform.com/to/UNvZIrgu" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors transform hover:scale-[1.02] shadow-lg"
              >
                Contact Us for Annual
              </a>
              <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-3">Talk to us about your team's needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. COMPARISON TABLE ──────────────────────────────────────── */}
      <section
        id="compare"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              The Real Cost of Conversation Intelligence
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              How Nimitai pricing compares against every major competitor.
            </p>
          </div>

          <div
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-5 text-gray-500 dark:text-gray-400 font-medium text-sm">Tool</th>
                  <th className="text-left p-5 text-gray-500 dark:text-gray-400 font-medium text-sm">Price</th>
                  <th className="text-left p-5 text-gray-500 dark:text-gray-400 font-medium text-sm">Seats</th>
                  <th className="text-left p-5 text-gray-500 dark:text-gray-400 font-medium text-sm">Contract</th>
                  <th className="text-left p-5 text-gray-500 dark:text-gray-400 font-medium text-sm">Intelligence Level</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 dark:border-gray-800 transition-colors ${
                      row.isNimitai ? 'bg-amber-50/60 dark:bg-amber-900/20' : ''
                    }`}
                  >
                    <td className={`p-5 font-semibold text-sm ${row.isNimitai ? 'text-[#C47010] dark:text-[#F5B040]' : 'text-gray-800 dark:text-gray-200'}`}>
                      {row.tool}
                      {row.isNimitai && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-[#E89422] text-white text-xs rounded-full">You</span>
                      )}
                    </td>
                    <td className={`p-5 text-sm ${row.isNimitai ? 'text-[#C47010] dark:text-[#F5B040] font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                      {row.price}
                    </td>
                    <td className={`p-5 text-sm ${row.isNimitai ? 'text-[#C47010] dark:text-[#F5B040] font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                      {row.seats}
                    </td>
                    <td className={`p-5 text-sm ${row.isNimitai ? 'text-[#C47010] dark:text-[#F5B040] font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                      {row.contract}
                    </td>
                    <td className="p-5 text-sm">
                      <span className={`inline-flex items-center gap-1.5 font-medium ${row.hasIntelligence ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {row.hasIntelligence ? (
                          <Check size={14} className="shrink-0" />
                        ) : (
                          <X size={14} className="shrink-0" />
                        )}
                        {row.intelligence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT $149/MONTH INCLUDES ────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What $149/Seat/Month Includes
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Everything your sales team needs to win more deals — all in one per-seat price.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#E89422]/20">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Pricing Questions Answered
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Everything you need to know before applying for founding access.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ── 6. FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center"
          >
            <div className="relative inline-block mb-10">
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
                Apply for Founding Access
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              $149/seat/month. Private beta — founding teams get a 14-day trial with full feature access.
            </p>

            <a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Join the Waitlist
              <Zap size={18} />
            </a>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Join 47+ B2B sales teams already using Nimitai
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
