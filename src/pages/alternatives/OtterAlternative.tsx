import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FileText,
  BarChart2,
  DollarSign,
  Brain,
  Check,
  X,
  Zap,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/alternatives/otter-alternative`;
const ogImage = `${siteUrl}/og-image.jpg`;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Otter.ai Alternative for Sales Teams 2026 — Nimitai AI Meeting Intelligence',
  description:
    'Looking for an Otter.ai alternative? Nimitai goes beyond transcription to deliver real AI sales intelligence — deal risk scoring, objection patterns, coaching insights, talk-ratio analysis. $149/month for your whole team.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${siteUrl}/alternatives` },
      { '@type': 'ListItem', position: 3, name: 'Best Otter.ai Alternative 2026', item: pageUrl },
    ],
  },
};

const faqs = [
  {
    question: 'Is Nimitai a good Otter.ai alternative for sales teams?',
    answer:
      'Yes. Nimitai is the best Otter.ai alternative specifically for B2B sales teams. While Otter.ai provides transcription, Nimitai delivers full AI sales intelligence — deal risk scoring, objection pattern detection, talk-ratio analysis, and rep coaching. For any team that needs more than notes, Nimitai is the clear Otter.ai alternative.',
  },
  {
    question: "What does Nimitai offer that Otter.ai doesn't?",
    answer:
      "Nimitai offers everything Otter.ai doesn't: deal risk detection, objection pattern analysis, talk/listen ratio tracking, real-time coaching cues, automatic CRM sync to Salesforce and HubSpot, and rep performance scorecards. Otter.ai transcribes. Nimitai analyzes.",
  },
  {
    question: 'Is Nimitai cheaper than Otter.ai?',
    answer:
      'For sales teams, yes. Otter.ai charges $10–$20 per user per month. A 5-person sales team pays $50–$100/month for basic transcription. Nimitai costs $149/month total — covering your whole team with full AI sales intelligence. At 5+ reps, Nimitai is both cheaper and dramatically more capable.',
  },
  {
    question: 'Does Nimitai integrate with Salesforce and HubSpot?',
    answer:
      'Yes. Nimitai automatically syncs call recordings, AI summaries, deal risk scores, and action items to Salesforce and HubSpot after every call. Otter.ai has no native CRM integration — you have to copy notes manually.',
  },
  {
    question: 'How long does it take to switch from Otter.ai to Nimitai?',
    answer:
      'Nimitai connects to your Zoom, Google Meet, or Microsoft Teams account in under 30 minutes. No IT support required, no data migration needed. Your team starts getting sales intelligence from their very next call.',
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
  { feature: 'Call recording & transcription', otter: true, nimitai: true },
  { feature: 'AI meeting summaries', otter: true, nimitai: true },
  { feature: 'Deal risk detection', otter: false, nimitai: true },
  { feature: 'Objection pattern analysis', otter: false, nimitai: true },
  { feature: 'Talk/listen ratio tracking', otter: false, nimitai: true },
  { feature: 'Real-time sales coaching', otter: false, nimitai: true },
  { feature: 'CRM auto-sync (Salesforce/HubSpot)', otter: false, nimitai: true },
  { feature: 'Rep performance scorecards', otter: false, nimitai: true },
  { feature: 'Win/loss pattern analysis', otter: false, nimitai: true },
  { feature: 'Flat team pricing', otter: false, nimitai: true },
  { feature: 'Setup time', otter: '< 10 min', nimitai: '< 30 min' },
  { feature: 'Price', otter: '$10–$20/user/mo', nimitai: '$149/mo (whole team)' },
];

const painPoints = [
  {
    icon: FileText,
    title: 'Otter.ai Just Takes Notes',
    body: "Otter.ai is a transcription tool. It records and transcribes your sales calls, but stops there — no deal intelligence, no objection analysis, no rep coaching, no CRM sync. You get a wall of text, not insights.",
  },
  {
    icon: BarChart2,
    title: 'No Sales Intelligence Whatsoever',
    body: "Otter.ai has no concept of deal risk, talk ratios, or objection patterns. It cannot tell you why you're losing deals, which reps are underperforming, or what your ICP's top objections are.",
  },
  {
    icon: DollarSign,
    title: 'Per-Seat Pricing That Adds Up Fast',
    body: "Otter.ai charges per user per month. For a 5-person sales team, you're paying for 5 seats to get basic transcription. Nimitai covers your whole team for $149/month — flat, no per-seat fees.",
  },
  {
    icon: Brain,
    title: 'No CRM Integration for Sales Workflows',
    body: "Otter.ai doesn't auto-sync to Salesforce or HubSpot. Your reps still manually copy notes. Nimitai writes call summaries, next steps, and deal risks directly to your CRM after every call.",
  },
];

const whyCards = [
  {
    icon: Brain,
    title: 'Sales intelligence, not just notes',
    body: 'Nimitai is built specifically for B2B sales teams. Every call is analyzed for deal health, competitor mentions, objection clusters, and coaching opportunities — not just transcribed.',
  },
  {
    icon: TrendingUp,
    title: 'Know exactly why you\'re losing deals',
    body: "Otter.ai shows you what was said. Nimitai shows you what it means. Surface the exact phrases, objection types, and conversation patterns linked to lost deals across your entire pipeline.",
  },
  {
    icon: Zap,
    title: 'One price, whole team',
    body: "Otter.ai scales your cost with every rep you hire. Nimitai is $149/month for your entire sales team — 1 rep or 25 reps. No per-seat pricing. No surprise invoices.",
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

export function OtterAlternative() {
  return (
    <>
      <Helmet>
        <title>Best Otter.ai Alternative for Sales Teams 2026 — Nimitai</title>
        <meta
          name="description"
          content="Looking for an Otter.ai alternative? Nimitai goes beyond transcription to deliver real AI sales intelligence — deal risk scoring, objection patterns, coaching insights, talk-ratio analysis. $149/month for your whole team."
        />
        <meta
          name="keywords"
          content="otter ai alternative, otter.ai alternative, otter alternative for sales, best otter ai alternative, otter ai alternatives 2026, AI meeting assistant alternative to otter"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Best Otter.ai Alternative for Sales Teams 2026 — Nimitai AI Meeting Intelligence" />
        <meta
          property="og:description"
          content="Looking for an Otter.ai alternative? Nimitai goes beyond transcription to deliver real AI sales intelligence — deal risk scoring, objection patterns, coaching insights, talk-ratio analysis. $149/month for your whole team."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Best Otter.ai Alternative for Sales Teams 2026 — Nimitai AI Meeting Intelligence" />
        <meta
          name="twitter:description"
          content="Looking for an Otter.ai alternative? Nimitai goes beyond transcription to deliver real AI sales intelligence — deal risk scoring, objection patterns, coaching insights, talk-ratio analysis. $149/month for your whole team."
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
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">Best Otter.ai Alternative 2026</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              The Best Otter.ai Alternative for B2B Sales Teams
            </h1>

            <p
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Otter.ai transcribes your calls. Nimitai analyzes them. Get deal risk scoring, objection pattern detection, and real-time coaching — everything Otter.ai can't do — at{' '}
              <strong className="text-gray-900 dark:text-white">$149/month</strong> with no per-seat pricing.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://nilanshgupta.typeform.com/to/UNvZIrgu" target="_blank" rel="noopener noreferrer"
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

      {/* ── 2. WHY TEAMS LEAVE OTTER.AI ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Why Sales Teams Look for an Otter.ai Alternative
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Otter.ai is a solid transcription tool. Here is why it does not work for B2B sales teams that need actual intelligence.
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
              Nimitai vs Otter.ai: Full Feature Comparison
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              See exactly what you get — and what Otter.ai cannot give you.
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
                    Otter.ai
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
                    className="border-t border-gray-100 dark:border-gray-800 transition-colors"
                  >
                    <td className="p-5 text-gray-800 dark:text-gray-200 font-medium text-sm">{row.feature}</td>
                    <td className="p-5 text-center">
                      {typeof row.otter === 'boolean' ? (
                        row.otter ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full">
                            <Check className="text-green-600 dark:text-green-400" size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 dark:bg-red-900/30 rounded-full">
                            <X className="text-red-500 dark:text-red-400" size={14} />
                          </span>
                        )
                      ) : (
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{row.otter}</span>
                      )}
                    </td>
                    <td className="p-5 text-center bg-[#E89422]/5 dark:bg-[#F5B040]/5">
                      {typeof row.nimitai === 'boolean' ? (
                        row.nimitai ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full">
                            <Check className="text-green-600 dark:text-green-400" size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 dark:bg-red-900/30 rounded-full">
                            <X className="text-red-500 dark:text-red-400" size={14} />
                          </span>
                        )
                      ) : (
                        <span className="text-sm font-medium text-[#C47010] dark:text-[#F5B040]">{row.nimitai}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. WHY NIMITAI ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Why Nimitai Is the Better Otter.ai Alternative
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Built from the ground up for B2B sales teams — not retrofitted from a general transcription tool.
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
              Pricing That Makes Sense for Sales Teams
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Otter.ai charges per seat. Nimitai charges per team — and delivers far more value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Otter.ai card */}
            <div
              className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                Otter.ai
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-6">$10–$20/user/month</div>
              <ul className="space-y-3">
                {[
                  'Per-seat pricing',
                  'Transcription only',
                  'No sales intelligence',
                  'Manual CRM workflow',
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
                <div className="text-4xl font-bold text-white mb-6">$149/month (whole team)</div>
                <ul className="space-y-3">
                  {[
                    'No per-seat pricing',
                    'Full AI sales intelligence',
                    'CRM auto-sync',
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
              Everything you need to know before switching from Otter.ai to Nimitai.
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
                Switch to the Otter.ai Alternative Built for Sales
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Get deal intelligence, coaching insights, and CRM sync — everything Otter.ai can't do. $149/month, 30-minute setup, 14-day free trial.
            </p>

            <a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu" target="_blank" rel="noopener noreferrer"
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
