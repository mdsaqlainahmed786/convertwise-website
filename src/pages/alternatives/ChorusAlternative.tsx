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
    title: 'Chorus.ai Costs $20,000+/Year',
    body: 'Chorus.ai (ZoomInfo) enterprise pricing starts at $20,000/year minimum. Nimitai delivers the same conversation intelligence features at $149/month — saving startups over $18,000/year.',
  },
  {
    title: 'Chorus.ai Requires Enterprise Negotiation',
    body: 'Chorus.ai requires procurement cycles, legal review, and enterprise negotiations. Nimitai is self-serve — sign up, connect your calendar, and start recording sales calls today.',
  },
  {
    title: 'Chorus.ai Is Overkill for Small Teams',
    body: 'Chorus.ai is engineered for 500+ rep enterprise teams. Nimitai is purpose-built conversation intelligence for startup and SMB sales teams of 2–50 reps who need results now.',
  },
  {
    title: 'Chorus.ai Has a Steep Learning Curve',
    body: 'Chorus.ai implementations take months and require dedicated success managers. Nimitai has a 30-minute setup, intuitive UI, and your team gets insights from call one.',
  },
];

const comparisonRows = [
  { feature: 'Call recording & transcription', chorus: true, nimitai: true },
  { feature: 'AI coaching insights', chorus: true, nimitai: true },
  { feature: 'Talk/listen ratio', chorus: true, nimitai: true },
  { feature: 'Objection pattern detection', chorus: true, nimitai: true },
  { feature: 'Deal risk signals', chorus: true, nimitai: true },
  { feature: 'Win/loss analysis', chorus: true, nimitai: true },
  { feature: 'Rep coaching scorecards', chorus: true, nimitai: true },
  { feature: 'CRM auto-sync', chorus: true, nimitai: true },
  { feature: 'Startup-accessible pricing', chorus: false, nimitai: true },
  { feature: 'Independent (not enterprise bundle)', chorus: false, nimitai: true },
  { feature: 'Setup under 1 hour', chorus: false, nimitai: true },
  { feature: 'Month-to-month billing', chorus: false, nimitai: true },
];

const whyCards = [
  {
    icon: Brain,
    title: 'Full Coaching Intelligence — No Enterprise Tax',
    body: 'Nimitai delivers talk/listen ratio, objection detection, deal risk signals, rep scoring, and win/loss analysis — the same capabilities that made Chorus great — without the ZoomInfo bundle pricing.',
  },
  {
    icon: TrendingUp,
    title: 'Up and Running in Under an Hour',
    body: 'Connect your calendar and authorise the bot. Your next call is recorded, transcribed, and analysed automatically. No implementation project. No dedicated onboarding manager required.',
  },
  {
    icon: Target,
    title: 'Month-to-Month, No Minimums',
    body: 'Nimitai is $149/month for the team, billed monthly, with no minimum seat count and no annual commitment required. Cancel any time. Exactly the flexibility startups need.',
  },
];

const faqs = [
  {
    q: 'Is Nimitai a good replacement for Chorus.ai?',
    a: 'Yes. Nimitai delivers the core Chorus.ai (ZoomInfo) conversation intelligence features — AI call recording, objection detection, deal risk scoring, rep coaching insights, talk-ratio analysis — at $149/month vs Chorus.ai\'s $20,000+/year enterprise pricing. It\'s the best Chorus alternative for startup and SMB sales teams.',
  },
  {
    q: 'How does Nimitai compare to Chorus.ai on features?',
    a: 'Nimitai matches Chorus.ai on the features that close deals: AI call recording, conversation intelligence, objection pattern detection, deal risk alerts, talk-ratio analysis, and coaching insights. The difference is that Nimitai costs $149/month with no annual contract, while Chorus.ai requires a $20,000+ enterprise agreement.',
  },
  {
    q: 'Can small teams use Nimitai instead of Chorus.ai?',
    a: 'Absolutely. Nimitai is purpose-built for startup and SMB sales teams that need Chorus.ai-level conversation intelligence without the enterprise price tag. Setup takes 30 minutes and you get insights from your very first call recording.',
  },
  {
    q: 'How does pricing compare between Nimitai and Chorus.ai?',
    a: 'Chorus.ai (ZoomInfo) enterprise pricing starts at $20,000+/year with minimum seat requirements and annual commitments. Nimitai is $149/month for the whole team, month-to-month, with no minimum seat requirement and no annual contract.',
  },
  {
    q: 'Can I export my Chorus data before switching?',
    a: 'Chorus allows transcript exports. Your call recordings and analytical data may require a request to ZoomInfo support. Nimitai starts building your coaching intelligence from your first call — the patterns it surfaces improve after 30+ calls of data, so historical data from Chorus is not required to get value quickly.',
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

export function ChorusAlternative() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://nimitai.com/alternatives/chorus-alternative',
        url: 'https://nimitai.com/alternatives/chorus-alternative',
        name: 'Best Chorus.ai Alternative 2026 — Nimitai | Conversation Intelligence Without Enterprise Pricing',
        description:
          'Looking for a Chorus.ai (ZoomInfo) alternative? Nimitai delivers the same conversation intelligence — call recording, AI coaching, deal risk analysis — without the $20,000+ enterprise contract. $149/month for startup sales teams.',
        isPartOf: { '@id': 'https://nimitai.com/#website' },
        breadcrumb: { '@id': 'https://nimitai.com/alternatives/chorus-alternative#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://nimitai.com/alternatives/chorus-alternative#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nimitai.com/' },
          { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://nimitai.com/alternatives' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Best Chorus.ai Alternative 2026',
            item: 'https://nimitai.com/alternatives/chorus-alternative',
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
        <title>Best Chorus.ai Alternative 2026 — Nimitai Conversation Intelligence</title>
        <meta
          name="description"
          content="Looking for a Chorus.ai (ZoomInfo) alternative? Nimitai delivers the same conversation intelligence — call recording, AI coaching, deal risk analysis — without the $20,000+ enterprise contract. $149/month for startup sales teams."
        />
        <meta
          name="keywords"
          content="chorus alternative, chorus.ai alternative, zoominfo chorus alternative, chorus conversation intelligence alternative, best chorus alternative, conversation intelligence software, sales call recording software, AI meeting intelligence"
        />
        <link rel="canonical" href="https://nimitai.com/alternatives/chorus-alternative" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimitai.com/alternatives/chorus-alternative" />
        <meta property="og:title" content="Best Chorus.ai Alternative 2026 — Nimitai | Conversation Intelligence Without Enterprise Pricing" />
        <meta
          property="og:description"
          content="Looking for a Chorus.ai (ZoomInfo) alternative? Nimitai delivers the same conversation intelligence — call recording, AI coaching, deal risk analysis — without the $20,000+ enterprise contract. $149/month for startup sales teams."
        />
        <meta property="og:site_name" content="Nimitai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Chorus.ai Alternative 2026 — Nimitai | Conversation Intelligence Without Enterprise Pricing" />
        <meta
          name="twitter:description"
          content="Looking for a Chorus.ai (ZoomInfo) alternative? Nimitai delivers the same conversation intelligence — call recording, AI coaching, deal risk analysis — without the $20,000+ enterprise contract. $149/month for startup sales teams."
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
                Best Chorus.ai Alternative 2026
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              The Best Chorus.ai Alternative for Startup Sales Teams
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Chorus.ai (now part of ZoomInfo) is powerful conversation intelligence software — but it costs $20,000+ per year and requires enterprise negotiations. Nimitai delivers the same core features: AI call recording, objection detection, deal risk scoring, rep coaching — at $149/month with no annual contract.
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
              Why Teams Are Moving Away from Chorus
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              The product hasn't got worse. The commercial reality around it has changed significantly.
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
              Nimitai vs Chorus.ai: Conversation Intelligence at Every Price Point
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              The coaching intelligence is equivalent. The commercial terms are not.
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
                      Chorus
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
                        <CellValue value={row.chorus} />
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
              What Makes Nimitai the Right Chorus Alternative
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Same coaching depth. Built for teams of 5 to 25. No enterprise contract required.
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
              This is where the difference is most stark. Same intelligence, very different cost structure.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Chorus */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Chorus by ZoomInfo</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                ~$1,100<span className="text-base font-normal text-gray-500 dark:text-gray-400">/seat/yr</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Annual contract, minimum seats required</p>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Full AI coaching intelligence</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Objection & deal risk detection</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Rep scorecards & win/loss</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> No month-to-month option</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Minimum seat requirement</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Often sold as part of ZoomInfo bundle</li>
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
              <p className="text-sm text-[#F5B040] mb-6">Month-to-month. Up to 10 reps. No minimums.</p>
              <ul className="space-y-3 text-sm text-amber-100">
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Full AI coaching intelligence</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Objection & deal risk detection</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Rep scorecards & win/loss analysis</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Month-to-month billing</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> No minimum seat count</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-[#F5B040] mt-0.5 shrink-0" /> Setup in under 1 hour</li>
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
              Switch from Chorus.ai to a Smarter Alternative
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              47+ sales teams chose Nimitai as their Chorus.ai alternative. Setup in 30 minutes, $149/month, cancel anytime.
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
              $149/month for the team. Month-to-month. No minimum seats. Cancel any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
