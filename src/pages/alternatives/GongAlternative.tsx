import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  DollarSign,
  Clock,
  BarChart2,
  Lock,
  Check,
  X,
  Zap,
  Brain,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/alternatives/gong-alternative`;
const ogImage = `${siteUrl}/og-image.jpg`;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Gong Alternative 2026 — Nimitai AI Conversation Intelligence | 80% Cheaper',
  description:
    'Looking for a Gong alternative? Nimitai delivers the same AI conversation intelligence — sales call recording, objection detection, deal risk alerts, talk-ratio analysis — at $149/month with no enterprise contract. The best Gong alternative for startup sales teams.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${siteUrl}/alternatives` },
      { '@type': 'ListItem', position: 3, name: 'Best Gong Alternative 2026', item: pageUrl },
    ],
  },
};

const faqs = [
  {
    question: 'Is Nimitai a good replacement for Gong?',
    answer:
      'Yes. Nimitai is the best Gong alternative for startup and SMB sales teams. It records all your sales calls, provides AI conversation intelligence, detects objection patterns, scores deal risk, and gives real-time coaching — the same core features as Gong at $149/month vs Gong\'s $1,200+/seat/year enterprise pricing.',
  },
  {
    question: 'What does Nimitai offer that Gong doesn\'t?',
    answer:
      'Nimitai offers no per-seat pricing, no annual contract, 30-minute setup, and a startup-friendly $149/month flat fee. Gong requires enterprise negotiations, 90-day implementations, and $1,200+/seat/year. Nimitai also includes real-time AI coaching during calls, not just post-call analysis.',
  },
  {
    question: 'How does Nimitai\'s conversation intelligence compare to Gong?',
    answer:
      'Nimitai matches Gong\'s core conversation intelligence features: automated call recording, AI transcription, talk-ratio analysis, objection detection, deal risk scoring, and coaching insights. The difference is price — $149/month total vs Gong\'s per-seat enterprise pricing — and simplicity.',
  },
  {
    question: 'Can I migrate from Gong to Nimitai easily?',
    answer:
      'Yes. Nimitai connects to your existing Zoom, Google Meet, or Teams account in under 30 minutes. No IT support, no data migration required. Your team can start recording and analyzing sales calls on day one.',
  },
  {
    question: 'Does Nimitai integrate with my CRM?',
    answer:
      'Nimitai integrates with Salesforce, HubSpot, and other major CRMs. Call recordings, transcripts, AI summaries, and deal risk scores sync automatically to your CRM after every sales call.',
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

const comparisonRows = [
  { feature: 'Call recording & transcription', gong: true, cw: true, startup: false },
  { feature: 'AI coaching insights', gong: true, cw: true, startup: false },
  { feature: 'Talk/listen ratio', gong: true, cw: true, startup: false },
  { feature: 'Objection pattern detection', gong: true, cw: true, startup: false },
  { feature: 'Deal risk signals', gong: true, cw: true, startup: false },
  { feature: 'Win/loss analysis', gong: true, cw: true, startup: false },
  { feature: 'Rep coaching scorecards', gong: true, cw: true, startup: false },
  { feature: 'CRM auto-sync', gong: true, cw: true, startup: false },
  { feature: 'Startup-accessible pricing', gong: false, cw: true, startup: true },
  { feature: 'Setup under 1 hour', gong: false, cw: true, startup: true },
  { feature: 'No annual contract required', gong: false, cw: true, startup: true },
  { feature: 'Built for teams under 25 reps', gong: false, cw: true, startup: true },
];

const painPoints = [
  {
    icon: DollarSign,
    title: 'Gong Costs $1,200+/Seat/Year',
    body: "Gong's enterprise pricing forces sales teams to pay $1,200–$1,600 per seat annually. Nimitai delivers the same conversation intelligence at $149/month total — no per-seat pricing.",
  },
  {
    icon: Clock,
    title: 'Gong Requires 3-Month Onboarding',
    body: 'Gong implementations take 90+ days and dedicated IT support. Nimitai connects to Zoom, Google Meet, and Teams in 30 minutes — no IT required.',
  },
  {
    icon: BarChart2,
    title: 'Gong Overwhelms Small Teams With Complexity',
    body: "Gong is built for 200+ rep enterprise teams. Nimitai is purpose-built conversation intelligence for startup and SMB sales teams of 2–50 reps.",
  },
  {
    icon: Lock,
    title: 'Gong Locks You Into Annual Contracts',
    body: 'Gong requires 12-month minimum commitments with enterprise negotiations. Nimitai is month-to-month — cancel anytime, no questions asked.',
  },
];

const whyCards = [
  {
    icon: DollarSign,
    title: 'Gong-level AI, startup price',
    body: 'AI coaching depth was previously only available at $75k+/year. Nimitai brings talk ratios, objection clustering, and deal risk signals to teams with 1–25 reps at $149/month.',
  },
  {
    icon: Zap,
    title: '30 minutes to first insight',
    body: 'Connect your calendar, install the meeting bot, and your next call gets recorded, transcribed, and analysed automatically. No RevOps team needed.',
  },
  {
    icon: Brain,
    title: 'Win/loss built from your calls',
    body: "Nimitai doesn't benchmark you against generic industry data. It finds patterns from your own won and lost deals, so the coaching is specific to your market and ICP.",
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

export function GongAlternative() {
  return (
    <>
      <Helmet>
        <title>Best Gong Alternative 2026 — Nimitai | AI Conversation Intelligence</title>
        <meta
          name="description"
          content="Looking for a Gong alternative? Nimitai delivers the same AI conversation intelligence — sales call recording, objection detection, deal risk alerts, talk-ratio analysis — at $149/month with no enterprise contract. The best Gong alternative for startup sales teams."
        />
        <meta
          name="keywords"
          content="gong alternative, best gong alternative, gong alternative for startups, gong alternative 2026, gong competitors, gong replacement, conversation intelligence software, sales call recording software, AI meeting intelligence, gong io alternative"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Best Gong Alternative 2026 — Nimitai AI Conversation Intelligence | 80% Cheaper" />
        <meta
          property="og:description"
          content="Looking for a Gong alternative? Nimitai delivers the same AI conversation intelligence — sales call recording, objection detection, deal risk alerts, talk-ratio analysis — at $149/month with no enterprise contract. The best Gong alternative for startup sales teams."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Best Gong Alternative 2026 — Nimitai AI Conversation Intelligence | 80% Cheaper" />
        <meta
          name="twitter:description"
          content="Looking for a Gong alternative? Nimitai delivers the same AI conversation intelligence — sales call recording, objection detection, deal risk alerts, talk-ratio analysis — at $149/month with no enterprise contract. The best Gong alternative for startup sales teams."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@Nimitai" />
        <meta name="twitter:site" content="@Nimitai" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#E89422" />

        {/* JSON-LD WebPage */}
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">Best Gong Alternative 2026</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              The Best Gong Alternative for B2B Sales Teams in 2026
            </h1>

            <p
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Nimitai delivers everything Gong offers — AI sales call recording, conversation intelligence, objection pattern detection, deal risk signals, talk-ratio analysis, and coaching insights — at{' '}
              <strong className="text-gray-900 dark:text-white">$149/month</strong> with no annual contract. The Gong alternative startup sales teams actually choose.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Start Free Trial
                <Zap size={18} />
              </a>
              <a
                href="#comparison"
                className="px-8 py-4 bg-white/95 dark:bg-gray-800/70 border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                See Full Comparison
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY FOUNDERS LEAVE GONG ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Why Founders Leave Gong
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Gong is a great product — for enterprise sales orgs. Here is why it does not fit most early-stage teams.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={i}
                  className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-[#1A1000]/40 dark:to-[#963C00]/20 rounded-2xl flex items-center justify-center mb-5 border border-amber-200/50 dark:border-[#C47010]/30">
                    <Icon className="text-[#E89422] dark:text-[#F5B040]" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{point.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{point.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. COMPARISON TABLE ────────────────────────────────────── */}
      <section
        id="comparison"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Nimitai vs Gong: Full Feature Comparison
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              See exactly what you get — and what you do not have to pay for.
            </p>
          </div>

          <div
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-5 text-gray-500 dark:text-gray-400 font-medium text-sm w-1/2">
                    Feature
                  </th>
                  <th className="text-center p-5 font-semibold text-gray-700 dark:text-gray-300 w-1/4">
                    Gong
                  </th>
                  <th className="text-center p-5 font-semibold bg-[#E89422]/10 dark:bg-[#F5B040]/10 rounded-t-xl w-1/4">
                    <span className="bg-gradient-to-br from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-amber-500 bg-clip-text text-transparent">
                      Nimitai
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 dark:border-gray-800 transition-colors ${
                      row.startup ? 'bg-amber-50/40 dark:bg-[#1A1000]/10' : ''
                    }`}
                  >
                    <td className="p-5 text-gray-800 dark:text-gray-200 font-medium text-sm">{row.feature}</td>
                    <td className="p-5 text-center">
                      {row.gong ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full">
                          <Check className="text-green-600 dark:text-green-400" size={14} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 dark:bg-red-900/30 rounded-full">
                          <X className="text-red-500 dark:text-red-400" size={14} />
                        </span>
                      )}
                    </td>
                    <td className="p-5 text-center bg-[#E89422]/5 dark:bg-[#F5B040]/5">
                      {row.cw ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full">
                          <Check className="text-green-600 dark:text-green-400" size={14} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 dark:bg-red-900/30 rounded-full">
                          <X className="text-red-500 dark:text-red-400" size={14} />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CONVERTWISE ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Why Nimitai Works for Startups
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Built for the 1–25 rep org. Not retrofitted from an enterprise product.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#E89422]/20">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. PRICING COMPARISON ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              The Pricing Gap Is Real
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              This is not a slight price difference. It is an order of magnitude.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Gong card */}
            <div
              className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                Gong
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-6">$75,000+/year</div>
              <ul className="space-y-3">
                {[
                  'Annual contract required',
                  '15+ seat minimum',
                  '6-week implementation',
                  'Estimated starting price',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <X className="text-red-400 shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nimitai card */}
            <div
              className="relative bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl p-8 shadow-2xl shadow-[#E89422]/30 border border-[#E89422]/40 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm font-semibold uppercase tracking-widest text-[#F5B040] mb-2">
                  Nimitai
                </div>
                <div className="text-4xl font-bold text-white mb-6">$149/month</div>
                <ul className="space-y-3">
                  {[
                    'No annual contract',
                    'Works for teams of 1–25 reps',
                    '30-minute setup',
                    '14-day free trial',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-amber-100">
                      <Check className="text-green-400 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Everything you need to know before making the switch.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ── 7. FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center"
          >
            <div className="relative inline-block mb-10">
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
                Switch to the Best Gong Alternative Today
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Join 47+ B2B sales teams who replaced Gong with Nimitai. Setup in 30 minutes, $149/month, cancel anytime.
            </p>

            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Start Free Trial
              <Zap size={18} />
            </a>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
