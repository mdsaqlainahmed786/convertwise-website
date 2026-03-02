import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, X, Sparkles, TrendingUp, Target, Brain } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
};

const painPoints = [
  {
    title: 'Fireflies Gives You Transcripts, Not Intelligence',
    body: "Fireflies.ai produces transcripts. Nimitai produces insights — which deals are at risk, which objections keep coming up, and which reps need coaching. That's the difference between a transcription tool and conversation intelligence software.",
  },
  {
    title: 'Fireflies Has No Deal Risk Detection',
    body: "Fireflies.ai has no deal risk scoring, no objection analysis, and no coaching recommendations. Nimitai analyzes every sales call for deal-killing signals and surfaces them before it's too late.",
  },
  {
    title: "Fireflies Doesn't Improve Your Team",
    body: 'Fireflies.ai has no rep performance tracking or team coaching insights. Nimitai shows managers which reps need help, what objections are being lost on, and how talk ratios affect close rates.',
  },
  {
    title: 'Fireflies Has a Per-Seat Pricing Model',
    body: 'Fireflies.ai charges per seat which adds up fast. Nimitai is $149/month flat for the whole team — no per-seat fees, no surprise bills as your team grows.',
  },
];

const comparisonRows = [
  { feature: 'Call recording & transcription', fireflies: true, nimitai: true },
  { feature: 'Searchable call library', fireflies: true, nimitai: true },
  { feature: 'AI meeting summaries', fireflies: true, nimitai: true },
  { feature: 'Broad tool integrations', fireflies: true, nimitai: true },
  { feature: 'Talk/listen ratio', fireflies: 'Basic', nimitai: true },
  { feature: 'Objection pattern detection', fireflies: false, nimitai: true },
  { feature: 'Deal risk signals', fireflies: false, nimitai: true },
  { feature: 'Win/loss analysis', fireflies: false, nimitai: true },
  { feature: 'Rep coaching scorecards', fireflies: false, nimitai: true },
  { feature: 'Built for sales teams specifically', fireflies: false, nimitai: true },
];

const whyCards = [
  {
    icon: Brain,
    title: 'Objection Pattern Intelligence',
    body: 'Nimitai clusters objections across every call your team has ever had — so you see what prospects actually push back on, not just what reps report in CRM.',
  },
  {
    icon: TrendingUp,
    title: 'Deal Risk Signals',
    body: 'When a call ends without a committed next step, when pricing comes up too early, or when talk-time ratios skew the wrong way — Nimitai flags it before the deal goes cold.',
  },
  {
    icon: Target,
    title: 'Win/Loss Analysis Across Every Call',
    body: 'Connect deal outcomes to call behaviour automatically. Understand which rep habits correlate with closed-won versus closed-lost — without building a BI dashboard.',
  },
];

const faqs = [
  {
    q: 'What does Nimitai have that Fireflies doesn\'t?',
    a: 'Nimitai includes AI sales intelligence features Fireflies lacks: deal risk scoring, objection pattern detection, talk-ratio analysis, rep performance tracking, and coaching insights. Fireflies is a transcription and search tool. Nimitai is full conversation intelligence software built specifically for B2B sales teams.',
  },
  {
    q: 'Is Nimitai more expensive than Fireflies?',
    a: 'Fireflies charges ~$19/seat/month. Nimitai costs $149/month for the whole team and includes full conversation intelligence — objection detection, deal risk alerts, coaching insights, and CRM auto-sync. For growing sales teams, Nimitai is often cheaper per seat and delivers far more sales intelligence.',
  },
  {
    q: 'Can Nimitai replace Fireflies for my sales team?',
    a: 'Yes. Nimitai does everything Fireflies does (call recording, AI transcription, meeting summaries, CRM sync) plus adds the sales intelligence layer: objection patterns, deal risk scores, talk-ratio analysis, and coaching. It\'s the Fireflies alternative built for revenue teams.',
  },
  {
    q: 'Does Nimitai integrate with Zoom, Google Meet, and Teams?',
    a: 'Yes. Nimitai\'s recording bot joins calls on all three platforms automatically. Connect your Google Calendar or Outlook and Nimitai joins every sales call without requiring manual recording — then delivers AI coaching insights from every call automatically.',
  },
  {
    q: 'How quickly can I switch from Fireflies to Nimitai?',
    a: 'Nimitai setup takes under 30 minutes — connect your calendar, authorize the recording bot, and your next sales call gets recorded and analyzed automatically. No data migration required. Start getting AI conversation intelligence from call one.',
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/40">
        <Check size={15} className="text-[#E89422] dark:text-[#F5B040]" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 dark:bg-red-900/20">
        <X size={15} className="text-red-400 dark:text-red-500" />
      </span>
    );
  }
  return <span className="text-sm text-gray-500 dark:text-gray-400">{value}</span>;
}

export function FirefliesAlternative() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://nimitai.com/alternatives/fireflies-alternative',
        url: 'https://nimitai.com/alternatives/fireflies-alternative',
        name: 'Best Fireflies Alternative 2026 — Nimitai | AI Sales Intelligence Beyond Transcription',
        description:
          'Looking for a Fireflies alternative with real sales intelligence? Nimitai records and analyzes sales calls to surface deal risks, objection patterns, and coaching insights — not just transcripts. $149/month for B2B sales teams.',
        isPartOf: { '@id': 'https://nimitai.com/#website' },
        breadcrumb: { '@id': 'https://nimitai.com/alternatives/fireflies-alternative#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://nimitai.com/alternatives/fireflies-alternative#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nimitai.com/' },
          { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://nimitai.com/alternatives' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Best Fireflies Alternative 2026',
            item: 'https://nimitai.com/alternatives/fireflies-alternative',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Best Fireflies Alternative 2026 — Nimitai AI Sales Intelligence</title>
        <meta
          name="description"
          content="Looking for a Fireflies alternative with real sales intelligence? Nimitai records and analyzes sales calls to surface deal risks, objection patterns, and coaching insights — not just transcripts. $149/month for B2B sales teams."
        />
        <meta
          name="keywords"
          content="fireflies alternative, fireflies ai alternative, fireflies notetaker alternative, fireflies.ai alternative, best fireflies alternative, sales call recording software, conversation intelligence software, AI meeting intelligence"
        />
        <link rel="canonical" href="https://nimitai.com/alternatives/fireflies-alternative" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimitai.com/alternatives/fireflies-alternative" />
        <meta property="og:title" content="Best Fireflies Alternative 2026 — Nimitai | AI Sales Intelligence Beyond Transcription" />
        <meta
          property="og:description"
          content="Looking for a Fireflies alternative with real sales intelligence? Nimitai records and analyzes sales calls to surface deal risks, objection patterns, and coaching insights — not just transcripts. $149/month for B2B sales teams."
        />
        <meta property="og:site_name" content="Nimitai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Fireflies Alternative 2026 — Nimitai | AI Sales Intelligence Beyond Transcription" />
        <meta
          name="twitter:description"
          content="Looking for a Fireflies alternative with real sales intelligence? Nimitai records and analyzes sales calls to surface deal risks, objection patterns, and coaching insights — not just transcripts. $149/month for B2B sales teams."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(232,148,34,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(232,148,34,0.3) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-200 to-amber-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[120px] opacity-35" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
            >
              <Sparkles className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-sm text-[#C47010] dark:text-[#F5B040] font-medium">
                Best Fireflies.ai Alternative 2026
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              The Best Fireflies.ai Alternative for B2B Sales Teams
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Fireflies.ai records and transcribes meetings well — but transcripts don't close deals. Nimitai adds the intelligence layer: objection pattern detection, deal risk scoring, talk-ratio analysis, and AI coaching insights from every sales call. The Fireflies alternative built for sales performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.nimitai.com"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 font-medium"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </a>
              <a
                href="#comparison"
                className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all inline-flex items-center gap-2 font-medium"
              >
                See Full Comparison
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Where Fireflies Falls Short for Sales Teams
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Fireflies is a great meeting recorder. The question is whether recording and searching is enough.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                {...fadeUp}
                transition={{ duration: 0.25, delay: i * 0.1 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-[#1A1000]/40 dark:to-[#963C00]/40 flex items-center justify-center mb-4">
                  <X size={18} className="text-[#E89422] dark:text-[#F5B040]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{point.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section
        id="comparison"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Nimitai vs Fireflies.ai: Full Feature & Pricing Comparison
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A direct feature comparison across the capabilities that matter most for sales coaching.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/80 dark:border-gray-700/80 overflow-hidden transition-colors"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200/60 dark:border-gray-700/60">
                    <th className="text-left py-5 px-6 text-sm font-semibold text-gray-500 dark:text-gray-400 w-1/2">
                      Feature
                    </th>
                    <th className="text-center py-5 px-6 text-sm font-semibold text-gray-500 dark:text-gray-400 w-1/4">
                      Fireflies
                    </th>
                    <th className="text-center py-5 px-6 text-sm font-semibold text-[#E89422] dark:text-[#F5B040] w-1/4">
                      Nimitai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100/60 dark:border-gray-700/40 last:border-0 ${
                        i % 2 === 0 ? 'bg-transparent' : 'bg-amber-50/30 dark:bg-[#1A1000]/10'
                      }`}
                    >
                      <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <CellValue value={row.fireflies} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <CellValue value={row.nimitai} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Nimitai ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What Nimitai Adds
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Purpose-built for sales teams. Every feature exists to improve close rates.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  {...fadeUp}
                  transition={{ duration: 0.25, delay: i * 0.1 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E89422] to-[#963C00] flex items-center justify-center mb-5 shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing Comparison ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Pricing Comparison
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Transparent pricing. No per-seat surprises as your team grows.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Fireflies */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fireflies</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                ~$19<span className="text-base font-normal text-gray-500 dark:text-gray-400">/seat/mo</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">~$95/mo for 5 reps</p>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Call recording & transcription</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Searchable call library</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Keyword tracking</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Objection pattern detection</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Deal risk signals</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Rep coaching scorecards</li>
              </ul>
            </motion.div>

            {/* Nimitai */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl p-8 shadow-xl border border-[#E89422]/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium backdrop-blur-sm">
                Recommended
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nimitai</h3>
              <div className="text-3xl font-bold text-white mb-1">
                $149<span className="text-base font-normal text-[#F5B040]">/team/mo</span>
              </div>
              <p className="text-sm text-[#F5B040] mb-6">Up to 10 reps. No per-seat pricing.</p>
              <ul className="space-y-3 text-sm text-amber-100">
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Call recording & transcription</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> AI meeting summaries & CRM sync</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Objection pattern detection</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Deal risk signals</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Win/loss analysis</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Rep coaching scorecards</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                {...fadeUp}
                transition={{ duration: 0.25, delay: i * 0.08 }}
                className="border-b border-gray-200 dark:border-gray-700/60 py-7 last:border-0"
              >
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Upgrade From Fireflies to Real Sales Intelligence
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Nimitai does everything Fireflies does, plus AI sales coaching and deal intelligence. $149/month for your whole team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.nimitai.com"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 font-medium"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </a>
              <a
                href="https://nimitai.com/pricing"
                className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all inline-flex items-center gap-2 font-medium"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              $149/month for the team. Month-to-month. No minimum seats.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
