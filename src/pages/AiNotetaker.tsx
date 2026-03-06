import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FileText,
  AlertTriangle,
  BarChart2,
  Database,
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
const pageUrl = `${siteUrl}/ai-notetaker`;
const ogImage = `${siteUrl}/og-image.png`;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best AI Notetaker for Sales Teams 2026 — Nimitai | Beyond Notes to Revenue Intelligence',
  description:
    'AI notetaker for B2B sales teams. Beyond notes — deal risks, objections, coaching insights, CRM updates. from $149/user/month. A product of REN AI Technologies.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'AI Notetaker', item: pageUrl },
    ],
  },
};

const faqs = [
  {
    question: 'What is an AI notetaker?',
    answer:
      'An AI notetaker is software that automatically joins your video calls, records the conversation, transcribes speech to text, and generates a meeting summary. Advanced AI notetakers like Nimitai go further — analyzing the conversation for sales insights, deal risk signals, and coaching opportunities, then syncing everything to your CRM.',
  },
  {
    question: "What's the best AI notetaker for sales teams?",
    answer:
      'Nimitai is the best AI notetaker for B2B sales teams because it goes beyond transcription to deliver sales intelligence. Unlike general AI notetakers (Otter.ai, Fathom, Fireflies), Nimitai surfaces deal risk scores, objection patterns, talk-ratio analysis, and coaching insights specific to B2B sales conversations.',
  },
  {
    question: 'How much does an AI notetaker cost?',
    answer:
      'AI notetaker pricing ranges from free (Fathom, Fireflies free tiers with limits) to per-seat pricing ($10–$20/user/month for Otter.ai). Nimitai costs $149/user/month with full sales intelligence included — not just notes.',
  },
  {
    question: 'Can an AI notetaker replace manual CRM updates?',
    answer:
      'Yes, with the right AI notetaker. Nimitai automatically syncs call recordings, AI-generated summaries, deal risk scores, and next steps to Salesforce and HubSpot after every call. Your reps never manually update the CRM again.',
  },
  {
    question: 'Is Nimitai better than Fathom or Fireflies as an AI notetaker?',
    answer:
      'For sales teams, yes. Fathom and Fireflies are excellent AI notetakers for general meeting notes and basic CRM sync. Nimitai adds a full layer of sales intelligence on top — deal risk detection, objection pattern clustering, rep coaching scores, and win/loss analysis — making it the most capable AI notetaker for B2B sales.',
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

const whatMissCards = [
  {
    icon: FileText,
    title: 'They transcribe. They don\'t analyze.',
    body: "Otter.ai, Fathom, and Fireflies are excellent AI notetakers — for transcription. But a transcription is not an insight. Your sales team needs to know WHY deals are stalling, not just WHAT was said.",
  },
  {
    icon: AlertTriangle,
    title: 'No deal risk intelligence',
    body: "The best AI notetaker for sales teams should flag deals at risk. Most AI notetakers don't know what a 'stalled deal' sounds like. Nimitai identifies no-next-step conversations, competitor mentions, and budget hesitations automatically.",
  },
  {
    icon: BarChart2,
    title: 'No rep coaching signals',
    body: "An AI notetaker should make your reps better. Nimitai tracks talk ratios, identifies when reps talk too much about features vs. outcomes, and surfaces which conversation patterns correlate with wins vs. losses.",
  },
  {
    icon: Database,
    title: 'No CRM auto-sync',
    body: "Most AI notetakers generate a summary you still have to copy into Salesforce or HubSpot. Nimitai writes call notes, deal stages, risk flags, and next steps to your CRM automatically — zero manual work.",
  },
];

const steps = [
  {
    num: '01',
    title: 'Connect in 30 minutes',
    body: 'Add Nimitai to your Zoom, Google Meet, or Teams. It automatically joins every sales call your team books.',
  },
  {
    num: '02',
    title: 'Your AI notetaker captures everything',
    body: 'Nimitai records, transcribes, and in real time analyzes: talk ratios, buying signals, competitor mentions, objection patterns, and commitment gaps.',
  },
  {
    num: '03',
    title: 'Get intelligence, not just notes',
    body: 'After every call: deal risk score, rep coaching points, objection summary, auto-updated CRM notes, and a highlight reel of the most important 2 minutes.',
  },
];

const comparisonRows = [
  { feature: 'Call recording', nimitai: true, fathom: true, fireflies: true, otter: true },
  { feature: 'AI transcription', nimitai: true, fathom: true, fireflies: true, otter: true },
  { feature: 'Meeting summaries', nimitai: true, fathom: true, fireflies: true, otter: true },
  { feature: 'Deal risk scoring', nimitai: true, fathom: false, fireflies: false, otter: false },
  { feature: 'Objection pattern detection', nimitai: true, fathom: false, fireflies: false, otter: false },
  { feature: 'Talk-ratio analysis', nimitai: true, fathom: false, fireflies: true, otter: false },
  { feature: 'Real-time coaching cues', nimitai: true, fathom: false, fireflies: false, otter: false },
  { feature: 'CRM auto-sync', nimitai: true, fathom: true, fireflies: true, otter: false },
  { feature: 'Win/loss pattern analysis', nimitai: true, fathom: false, fireflies: false, otter: false },
  { feature: 'Flat team pricing', nimitai: true, fathom: false, fireflies: false, otter: false },
  { feature: 'Price', nimitai: 'from $149/seat/mo', fathom: 'Free–$19/user', fireflies: 'Free–$18/user', otter: '$10–$20/user' },
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

export function AiNotetaker() {
  return (
    <>
      <Helmet>
        <title>Best AI Notetaker for Sales Teams 2026 — Nimitai</title>
        <meta
          name="description"
          content="AI notetaker for B2B sales teams. Beyond notes — deal risks, objections, coaching insights, CRM updates. from $149/user/month. A product of REN AI Technologies."
        />
        <meta
          name="keywords"
          content="AI notetaker for sales, best AI notetaker, AI notetaker, AI meeting notetaker, sales AI notetaker, AI note taker for sales calls, AI notetaker software"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Best AI Notetaker for Sales Teams 2026 — Nimitai | Beyond Notes to Revenue Intelligence" />
        <meta
          property="og:description"
          content="AI notetaker for B2B sales teams. Beyond notes — deal risks, objections, coaching insights, CRM updates. from $149/user/month. A product of REN AI Technologies."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Best AI Notetaker for Sales Teams 2026 — Nimitai | Beyond Notes to Revenue Intelligence" />
        <meta
          name="twitter:description"
          content="AI notetaker for B2B sales teams. Beyond notes — deal risks, objections, coaching insights, CRM updates. from $149/user/month. A product of REN AI Technologies."
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
              <Brain className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">The AI Notetaker Built for Sales Revenue</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              The AI Notetaker That Doesn't Just Take Notes
            </h1>

            <p
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Most AI notetakers record and transcribe. Nimitai is the AI notetaker that goes further — analyzing every sales call for deal risk, objection patterns, coaching gaps, and pipeline health. The AI notetaker your sales team actually needs.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://nilanshgupta.typeform.com/to/UNvZIrgu" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Try Nimitai Free
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

      {/* ── 2. WHAT MOST AI NOTETAKERS MISS ─────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What Most AI Notetakers Miss
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Here is why most AI notetakers fall short for sales teams — and what a great one should do instead.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatMissCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-[#1A1000]/40 dark:to-[#963C00]/20 rounded-2xl flex items-center justify-center mb-5 border border-amber-200/50 dark:border-[#C47010]/30">
                    <Icon className="text-[#E89422] dark:text-[#F5B040]" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. HOW NIMITAI WORKS AS YOUR AI NOTETAKER ───────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              How Nimitai Works as Your AI Notetaker
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Three steps from setup to your first sales intelligence insight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-6xl font-black text-amber-100 dark:text-[#1A1000]/40 select-none leading-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E89422] to-orange-500 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ─────────────────────────────────────── */}
      <section
        id="comparison"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Nimitai vs Other AI Notetakers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              See how Nimitai compares to Fathom, Fireflies, and Otter.ai on the features that matter for sales teams.
            </p>
          </div>

          <div
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-5 text-gray-500 dark:text-gray-400 font-medium text-sm w-2/5">Feature</th>
                  <th className="text-center p-5 font-semibold bg-[#E89422]/10 dark:bg-[#F5B040]/10 rounded-t-xl">
                    <span className="bg-gradient-to-br from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-amber-500 bg-clip-text text-transparent">
                      Nimitai
                    </span>
                  </th>
                  <th className="text-center p-5 font-semibold text-gray-700 dark:text-gray-300">Fathom</th>
                  <th className="text-center p-5 font-semibold text-gray-700 dark:text-gray-300">Fireflies</th>
                  <th className="text-center p-5 font-semibold text-gray-700 dark:text-gray-300">Otter.ai</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-gray-800 transition-colors">
                    <td className="p-5 text-gray-800 dark:text-gray-200 font-medium text-sm">{row.feature}</td>
                    {(['nimitai', 'fathom', 'fireflies', 'otter'] as const).map((key) => {
                      const val = row[key];
                      const isNimitai = key === 'nimitai';
                      return (
                        <td key={key} className={`p-5 text-center ${isNimitai ? 'bg-[#E89422]/5 dark:bg-[#F5B040]/5' : ''}`}>
                          {typeof val === 'boolean' ? (
                            val ? (
                              <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full">
                                <Check className="text-green-600 dark:text-green-400" size={14} />
                              </span>
                            ) : (
                              <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 dark:bg-red-900/30 rounded-full">
                                <X className="text-red-500 dark:text-red-400" size={14} />
                              </span>
                            )
                          ) : (
                            <span className={`text-sm font-medium ${isNimitai ? 'text-[#C47010] dark:text-[#F5B040]' : 'text-gray-600 dark:text-gray-400'}`}>
                              {val as string}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              AI Notetaker FAQ
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Everything you need to know about AI notetakers and how Nimitai compares.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* From the blog */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/30 transition-colors">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-6">From the blog</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { to: '/blog/ai-notetaker-vs-conversation-intelligence', label: 'AI Notetaker vs Conversation Intelligence' },
              { to: '/blog/how-to-analyze-sales-calls', label: 'How to Analyze Sales Calls with AI' },
              { to: '/blog/best-sales-call-recording-software-startups', label: 'Best Sales Call Recording Software for Startups' },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#E89422]/50 bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors group">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-[#E89422] transition-colors leading-snug">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center"
          >
            <div className="relative inline-block mb-10">
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
                The AI Notetaker That Turns Calls Into Revenue
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Stop getting just notes. Start getting deal intelligence. from $149/seat/month, 30-minute setup, 14-day free trial.
            </p>

            <a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Try Nimitai Free
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
