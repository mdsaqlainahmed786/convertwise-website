import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FileText,
  BarChart2,
  AlertTriangle,
  Users,
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
const pageUrl = `${siteUrl}/alternatives/fathom-alternative`;
const ogImage = `${siteUrl}/og-image.jpg`;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Fathom Alternative 2026 — Nimitai AI Sales Intelligence | More Than Just Notes',
  description:
    'Looking for a Fathom alternative with real sales intelligence? Nimitai goes beyond AI note-taking to surface objection patterns, deal risks, talk-ratio analysis, and coaching insights from every sales call. $149/month for the whole team.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${siteUrl}/alternatives` },
      { '@type': 'ListItem', position: 3, name: 'Best Fathom Alternative 2026', item: pageUrl },
    ],
  },
};

const faqs = [
  {
    question: 'What does Nimitai have that Fathom doesn\'t?',
    answer:
      'Nimitai includes AI conversation intelligence features Fathom lacks: deal risk scoring, objection pattern detection, talk-ratio analysis, rep performance tracking, and real-time coaching cues. Fathom is an AI notetaker. Nimitai is a full sales intelligence platform.',
  },
  {
    question: 'Is Nimitai more expensive than Fathom?',
    answer:
      "Fathom's free tier covers basic note-taking. Nimitai costs $149/month for the whole team and includes full conversation intelligence — objection detection, deal risk alerts, coaching insights, and CRM auto-sync. For sales teams, the ROI difference is significant.",
  },
  {
    question: 'Can Nimitai replace Fathom for my sales team?',
    answer:
      'Yes. Nimitai does everything Fathom does (call recording, AI transcription, meeting summaries) plus adds the sales intelligence layer: objection patterns, deal risk scores, talk-ratio analysis, and coaching. It\'s the Fathom alternative built for revenue teams.',
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
  { feature: 'Call recording & transcription', fathom: true, cw: true, fathomLabel: '✓', cwLabel: '✓', startupRow: false },
  { feature: 'AI meeting summaries', fathom: true, cw: true, fathomLabel: '✓', cwLabel: '✓', startupRow: false },
  { feature: 'Talk/listen ratio', fathom: false, cw: true, fathomLabel: '✗', cwLabel: '✓', startupRow: true },
  { feature: 'Objection pattern detection', fathom: false, cw: true, fathomLabel: '✗', cwLabel: '✓', startupRow: true },
  { feature: 'Deal risk signals', fathom: false, cw: true, fathomLabel: '✗', cwLabel: '✓', startupRow: true },
  { feature: 'Win/loss analysis', fathom: false, cw: true, fathomLabel: '✗', cwLabel: '✓', startupRow: true },
  { feature: 'Rep coaching scorecards', fathom: false, cw: true, fathomLabel: '✗', cwLabel: '✓', startupRow: true },
  { feature: 'Cross-call analytics', fathom: false, cw: true, fathomLabel: '✗', cwLabel: '✓', startupRow: true },
  { feature: 'CRM auto-sync', fathom: null, cw: true, fathomLabel: 'Partial', cwLabel: '✓', startupRow: false },
  { feature: 'Built for sales coaching', fathom: false, cw: true, fathomLabel: '✗', cwLabel: '✓', startupRow: true },
];

const painPoints = [
  {
    icon: FileText,
    title: 'Fathom Only Takes Notes',
    body: "Fathom captures what was said. Nimitai tells you what it means — objection patterns, deal risk scores, talk-ratio analysis, and AI coaching insights from every sales call.",
  },
  {
    icon: BarChart2,
    title: 'Fathom Has No Sales Intelligence',
    body: "Fathom has no deal risk detection, no objection pattern analysis, and no sales coaching features. Nimitai is full conversation intelligence software built specifically for B2B sales teams.",
  },
  {
    icon: AlertTriangle,
    title: 'Fathom Doesn\'t Coach Your Reps',
    body: "Fathom summarizes meetings. Nimitai coaches your reps — surfacing talk-ratio issues, missed objections, and lost-deal patterns across your entire call library.",
  },
  {
    icon: Users,
    title: 'Fathom Has No Team Analytics',
    body: "Fathom has no cross-rep analytics or team coaching dashboards. Nimitai shows you which reps are improving, which deals are at risk, and which objections your team keeps losing on.",
  },
];

const whyCards = [
  {
    icon: TrendingUp,
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

function ComparisonCell({ row }: { row: typeof comparisonRows[number] }) {
  if (row.fathom === null) {
    return (
      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium">
        Partial
      </span>
    );
  }
  if (row.fathom) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full">
        <Check className="text-green-600 dark:text-green-400" size={14} />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 dark:bg-red-900/30 rounded-full">
      <X className="text-red-500 dark:text-red-400" size={14} />
    </span>
  );
}

export function FathomAlternative() {
  return (
    <>
      <Helmet>
        <title>Best Fathom Alternative 2026 — Nimitai AI Sales Intelligence</title>
        <meta
          name="description"
          content="Looking for a Fathom alternative with real sales intelligence? Nimitai goes beyond AI note-taking to surface objection patterns, deal risks, talk-ratio analysis, and coaching insights from every sales call. $149/month for the whole team."
        />
        <meta
          name="keywords"
          content="fathom alternative, fathom ai alternative, fathom notetaker alternative, fathom video alternative, best fathom alternative, AI meeting intelligence, sales call recording software, conversation intelligence software"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Best Fathom Alternative 2026 — Nimitai AI Sales Intelligence | More Than Just Notes" />
        <meta
          property="og:description"
          content="Looking for a Fathom alternative with real sales intelligence? Nimitai goes beyond AI note-taking to surface objection patterns, deal risks, talk-ratio analysis, and coaching insights from every sales call. $149/month for the whole team."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Best Fathom Alternative 2026 — Nimitai AI Sales Intelligence | More Than Just Notes" />
        <meta
          name="twitter:description"
          content="Looking for a Fathom alternative with real sales intelligence? Nimitai goes beyond AI note-taking to surface objection patterns, deal risks, talk-ratio analysis, and coaching insights from every sales call. $149/month for the whole team."
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
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">Best Fathom Alternative 2026</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              The Best Fathom Alternative for B2B Sales Intelligence
            </h1>

            <p
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Fathom is a great AI notetaker — but it stops at transcription. Nimitai goes further: it analyzes your sales calls for objection patterns, deal risk signals, talk ratios, and coaching opportunities. The Fathom alternative built for sales teams who need real conversation intelligence.
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

      {/* ── 2. WHY TEAMS LEAVE FATHOM ──────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Why Sales Teams Outgrow Fathom
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Fathom is the right tool until it isn't. Here is where the gap opens up for sales-led teams.
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
              Nimitai vs Fathom: AI Note-Taking vs Full Sales Intelligence
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Fathom captures calls. Nimitai coaches your team on them.
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
                    Fathom
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
                      row.startupRow ? 'bg-amber-50/40 dark:bg-[#1A1000]/10' : ''
                    }`}
                  >
                    <td className="p-5 text-gray-800 dark:text-gray-200 font-medium text-sm">{row.feature}</td>
                    <td className="p-5 text-center">
                      <ComparisonCell row={row} />
                    </td>
                    <td className="p-5 text-center bg-[#E89422]/5 dark:bg-[#F5B040]/5">
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Check className="text-green-600 dark:text-green-400" size={14} />
                      </span>
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
              What Nimitai Adds to Call Intelligence
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Built from the ground up for sales coaching, not general meeting capture.
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
              Fathom vs Nimitai: Pricing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Once your team grows past 8 reps, Nimitai is cheaper — and it includes coaching intelligence Fathom
              doesn't have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Fathom card */}
            <div
              className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                Fathom
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Free — $19<span className="text-xl font-medium text-gray-500 dark:text-gray-400">/user/mo</span></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Team plans from $19/user/month</p>
              <ul className="space-y-3">
                {[
                  { text: 'Free tier available', ok: true },
                  { text: 'Good transcription quality', ok: true },
                  { text: 'No coaching intelligence features', ok: false },
                  { text: 'No cross-call analytics', ok: false },
                  { text: 'No deal risk signals', ok: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    {item.ok ? (
                      <Check className="text-green-500 shrink-0" size={16} />
                    ) : (
                      <X className="text-red-400 shrink-0" size={16} />
                    )}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nimitai card */}
            <div
              className="relative bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl p-8 shadow-2xl shadow-[#E89422]/30 border border-[#E89422]/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm font-semibold uppercase tracking-widest text-[#F5B040] mb-2">
                  Nimitai
                </div>
                <div className="text-4xl font-bold text-white mb-2">$149<span className="text-xl font-medium text-[#F5B040]">/month</span></div>
                <p className="text-sm text-[#F5B040] mb-6">For teams of 1–10 reps. Full coaching intelligence included.</p>
                <ul className="space-y-3">
                  {[
                    'Full AI coaching intelligence',
                    'Cross-call pattern analysis',
                    'Deal risk signals',
                    'Win/loss analysis',
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

          {/* Callout */}
          <div
            className="mt-8 max-w-4xl mx-auto bg-white/95 dark:bg-gray-800/60 rounded-3xl p-6 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors text-center"
          >
            <p className="text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Math check:</strong> A 10-rep team on Fathom pays $190/month. Nimitai costs{' '}
              <strong className="text-[#E89422] dark:text-[#F5B040]">$149/month</strong> for the whole team — and includes the coaching intelligence Fathom doesn't have.
            </p>
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
              Common questions from teams evaluating Fathom vs Nimitai.
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
                Get More Than Notes — Try the Best Fathom Alternative
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Nimitai gives you everything Fathom has, plus AI conversation intelligence that actually closes deals. $149/month for the whole team.
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
