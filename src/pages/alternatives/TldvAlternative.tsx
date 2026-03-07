import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, X, Sparkles, TrendingUp, Target, Brain } from 'lucide-react';

const painPoints = [
  {
    title: 'tl;dv Is Built for Product, Not Sales',
    body: 'tl;dv excels at product and UX research recordings. Nimitai is purpose-built conversation intelligence software for B2B sales teams — with deal intelligence, objection analysis, and rep coaching.',
  },
  {
    title: 'tl;dv Has No Sales Analytics',
    body: 'tl;dv has no deal risk detection, talk-ratio analysis, or objection pattern tracking. Nimitai delivers full AI sales call intelligence that product tools simply don\'t offer.',
  },
  {
    title: 'tl;dv Has No Coaching Intelligence',
    body: 'tl;dv lets you bookmark moments. Nimitai identifies the moments that matter: lost objections, deal-stalling language, missed buying signals — and tells your reps what to do differently.',
  },
  {
    title: 'tl;dv Per-Seat Costs Add Up',
    body: 'tl;dv charges per seat with a free tier that limits features. Nimitai starts at $149/user/month with full AI conversation intelligence included.',
  },
];

const comparisonRows = [
  { feature: 'Call recording & transcription', tldv: true, nimitai: true },
  { feature: 'AI meeting summaries', tldv: true, nimitai: true },
  { feature: 'Clip creation & sharing', tldv: true, nimitai: false },
  { feature: 'GPT Q&A on transcripts', tldv: true, nimitai: true },
  { feature: 'Talk/listen ratio', tldv: false, nimitai: true },
  { feature: 'Objection pattern detection', tldv: false, nimitai: true },
  { feature: 'Deal risk signals', tldv: false, nimitai: true },
  { feature: 'Win/loss analysis', tldv: false, nimitai: true },
  { feature: 'Rep coaching scorecards', tldv: false, nimitai: true },
  { feature: 'Built for sales coaching', tldv: false, nimitai: true },
];

const whyCards = [
  {
    icon: Brain,
    title: 'Rep-Level Performance Tracking',
    body: 'Nimitai tracks talk/listen ratios, question frequency, filler word usage, and next-step commitment rates for every rep — automatically across every call — and surfaces coaching priorities per rep.',
  },
  {
    icon: TrendingUp,
    title: 'Objection Pattern Clustering',
    body: 'Instead of watching individual clips, Nimitai clusters objections across your entire call library. You see which objections appear most on lost deals and which your reps handle best — at scale.',
  },
  {
    icon: Target,
    title: 'Deal Risk Signals Before It Is Too Late',
    body: 'Nimitai flags calls that end without a committed next step, prospects who go quiet after pricing, and deals where competitive mentions spike — so your manager can intervene before the deal is lost.',
  },
];

const faqs = [
  {
    q: 'What does Nimitai have that tl;dv doesn\'t?',
    a: 'Nimitai includes AI conversation intelligence features tl;dv lacks: deal risk scoring, objection pattern detection, talk-ratio analysis, rep performance tracking, and real-time coaching cues. tl;dv is a video highlights tool. Nimitai is full sales intelligence software built for B2B revenue teams.',
  },
  {
    q: 'Is Nimitai more expensive than tl;dv?',
    a: 'tl;dv charges ~$18/user/month with a limited free tier. Nimitai costs $149/user/month and includes full conversation intelligence — objection detection, deal risk alerts, coaching insights, and CRM auto-sync. For teams of 8+ reps, Nimitai is actually cheaper per seat.',
  },
  {
    q: 'Can Nimitai replace tl;dv for my sales team?',
    a: 'Yes. Nimitai does everything tl;dv does for sales (call recording, AI transcription, meeting summaries) plus adds full sales intelligence: objection patterns, deal risk scores, talk-ratio analysis, and coaching. It\'s the tl;dv alternative built specifically for B2B sales performance.',
  },
  {
    q: 'Does Nimitai work with Zoom, Google Meet, and Microsoft Teams?',
    a: 'Yes. Nimitai\'s recording bot joins calls on all three platforms automatically. Connect your Google Calendar or Outlook, and Nimitai joins every sales call without requiring a manual invite or recording start — then delivers AI coaching insights automatically.',
  },
  {
    q: 'How quickly can I switch from tl;dv to Nimitai?',
    a: 'Nimitai setup takes under 30 minutes — connect your calendar, authorize the recording bot, and your next sales call gets recorded and analyzed automatically. No data migration required. Start getting AI sales intelligence from call one.',
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

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nimitai',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Chrome',
  description: 'AI meeting intelligence for B2B sales teams. Real-time coaching, buyer signal detection, and automated call analysis.',
  url: 'https://nimitai.com',
  offers: {
    '@type': 'Offer',
    price: '149',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '149',
      priceCurrency: 'USD',
      unitText: 'seat/month',
    },
  },
};

export function TldvAlternative() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://nimitai.com/alternatives/tldv-alternative',
        url: 'https://nimitai.com/alternatives/tldv-alternative',
        name: 'Best tl;dv Alternative 2026 — Nimitai | AI Sales Intelligence for B2B Teams',
        description:
          'tl;dv alternative for sales teams. Nimitai adds deal risk, objection patterns, coaching insights. $149/user/month. A product of REN AI Technologies.',
        isPartOf: { '@id': 'https://nimitai.com/#website' },
        breadcrumb: { '@id': 'https://nimitai.com/alternatives/tldv-alternative#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://nimitai.com/alternatives/tldv-alternative#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nimitai.com/' },
          { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://nimitai.com/alternatives' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Best tl;dv Alternative 2026',
            item: 'https://nimitai.com/alternatives/tldv-alternative',
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
        <title>Best tl;dv Alternative 2026 — Nimitai AI Sales Intelligence</title>
        <meta
          name="description"
          content="tl;dv alternative for sales teams. Nimitai adds deal risk, objection patterns, coaching insights. $149/user/month. A product of REN AI Technologies."
        />
        <meta
          name="keywords"
          content="tldv alternative, tl;dv alternative, tldv ai alternative, tl dv alternative, best tldv alternative, sales call recording software, conversation intelligence software, AI meeting intelligence"
        />
        <link rel="canonical" href="https://nimitai.com/alternatives/tldv-alternative" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimitai.com/alternatives/tldv-alternative" />
        <meta property="og:title" content="Best tl;dv Alternative 2026 — Nimitai | AI Sales Intelligence for B2B Teams" />
        <meta
          property="og:description"
          content="tl;dv alternative for sales teams. Nimitai adds deal risk, objection patterns, coaching insights. $149/user/month. A product of REN AI Technologies."
        />
        <meta property="og:image" content="https://nimitai.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NimitaiHQ" />
        <meta name="twitter:title" content="Best tl;dv Alternative 2026 — Nimitai | AI Sales Intelligence for B2B Teams" />
        <meta
          name="twitter:description"
          content="tl;dv alternative for sales teams. Nimitai adds deal risk, objection patterns, coaching insights. $149/user/month. A product of REN AI Technologies."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
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
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="max-w-4xl"
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/95 dark:bg-gray-800/70 border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
            >
              <Sparkles className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-sm text-[#C47010] dark:text-[#F5B040] font-medium">
                Best tl;dv Alternative 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              The Best tl;dv Alternative for B2B Sales Intelligence
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
              tl;dv is excellent for video highlights and async meeting sharing. But if you run a sales team, you need more: objection pattern detection, deal risk scoring, talk-ratio analysis, and AI coaching insights. That's Nimitai — the tl;dv alternative built for B2B sales performance. Built after analyzing 350+ real B2B sales calls across 200+ businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.nimitai.com"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 font-medium"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </a>
              <a
                href="#comparison"
                className="px-8 py-4 bg-white/95 dark:bg-gray-800/70 border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-colors inline-flex items-center gap-2 font-medium"
              >
                See Full Comparison
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traction / Credibility ── */}
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { number: '350+', label: 'Sales calls analyzed' },
              { number: '200+', label: 'B2B businesses studied' },
              { number: '412', label: 'Founders on waitlist' },
              { number: '$149', label: 'per seat/month' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30">
                <div className="text-2xl sm:text-3xl font-black text-[#E89422]">{stat.number}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pain Points ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Where tl;dv Falls Short for Sales Coaching
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              tl;dv is a well-designed product. It just isn't designed for the problem you're trying to solve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div
                key={point.title}
               
                className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-[#1A1000]/40 dark:to-[#963C00]/40 flex items-center justify-center mb-4">
                  <X size={18} className="text-[#E89422] dark:text-[#F5B040]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{point.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point.body}</p>
              </div>
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
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Nimitai vs tl;dv: Sales Intelligence vs Video Highlights
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A direct feature comparison across the capabilities that matter most for sales coaching.
            </p>
          </div>

          <div
           
            className="bg-white/95 dark:bg-gray-800/60 rounded-3xl shadow-xl border border-white/80 dark:border-gray-700/80 overflow-hidden transition-colors"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200/60 dark:border-gray-700/60">
                    <th className="text-left py-5 px-6 text-sm font-semibold text-gray-500 dark:text-gray-400 w-1/2">
                      Feature
                    </th>
                    <th className="text-center py-5 px-6 text-sm font-semibold text-gray-500 dark:text-gray-400 w-1/4">
                      tl;dv
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
                        <CellValue value={row.tldv} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <CellValue value={row.nimitai} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Nimitai ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What Nimitai Does Instead
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Built for one outcome: improving your sales team's close rate through data-driven coaching.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                 
                  className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E89422] to-[#963C00] flex items-center justify-center mb-5 shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing Comparison ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Pricing Comparison
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Flat team pricing means your cost doesn't scale with headcount.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* tl;dv */}
            <div
             
              className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">tl;dv</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                ~$18<span className="text-base font-normal text-gray-500 dark:text-gray-400">/user/mo</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">~$90/mo for 5 reps</p>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Call recording & transcription</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> Clip creation & sharing</li>
                <li className="flex items-start gap-2"><Check size={15} className="text-green-500 mt-0.5 shrink-0" /> GPT Q&A on transcripts</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Objection pattern detection</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Deal risk signals</li>
                <li className="flex items-start gap-2"><X size={15} className="text-red-400 mt-0.5 shrink-0" /> Rep coaching scorecards</li>
              </ul>
            </div>

            {/* Nimitai */}
            <div
             
              className="bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl p-8 shadow-xl border border-[#E89422]/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium">
                Recommended
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nimitai</h3>
              <div className="text-3xl font-bold text-white mb-1">
                $149<span className="text-base font-normal text-[#F5B040]">/user/month</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
               
                className="border-b border-gray-200 dark:border-gray-700/60 py-7 last:border-0"
              >
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Switch to the Best tl;dv Alternative for Sales Teams
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Nimitai delivers the call recording tl;dv does, plus full AI sales coaching and deal intelligence. from $149/seat/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.nimitai.com"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 font-medium"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </a>
              <a
                href="https://nimitai.com/pricing"
                className="px-8 py-4 bg-white/95 dark:bg-gray-800/70 border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-colors inline-flex items-center gap-2 font-medium"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              $149/user/month for the team. Month-to-month. No minimum seats.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
