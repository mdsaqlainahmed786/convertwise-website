import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
  User,
} from 'lucide-react';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/blog/gong-pricing-2026`;
const ogImage = `${siteUrl}/og-image.jpg`;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Gong Pricing in 2026: How Much Does Gong Actually Cost? (Real Numbers)',
  description:
    "Gong pricing is not publicly listed. Here's what Gong actually costs in 2026 based on real customer data: $1,200–$1,600/seat/year, 15-seat minimum, annual contracts. And a $149/month alternative that delivers the same AI.",
  url: pageUrl,
  datePublished: '2026-02-28',
  dateModified: '2026-02-28',
  author: {
    '@type': 'Person',
    name: 'Nilansh Gupta, Founder of Nimitai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Nimitai',
    url: siteUrl,
  },
};

const faqs = [
  {
    question: 'How much does Gong cost per user?',
    answer:
      'Gong costs approximately $1,200 to $1,600 per seat per year in 2026. This pricing is not publicly listed — Gong uses custom enterprise quotes. The actual cost depends on team size, contract length, and negotiation. Enterprise deals commonly run $75,000–$150,000+ per year.',
  },
  {
    question: 'Does Gong have a free trial?',
    answer:
      'Gong does not offer a self-serve free trial. You must book a demo with a Gong sales rep and request a trial environment. The process typically takes 1–2 weeks to begin. In contrast, Nimitai offers a 14-day free trial with instant access — no sales call required.',
  },
  {
    question: 'What is the minimum contract for Gong?',
    answer:
      'Gong requires an annual contract, typically with a 15-seat minimum. Most new customers commit to a 12-month term with no monthly or quarterly payment options. Early termination fees apply in most contracts.',
  },
  {
    question: 'Is there a cheaper alternative to Gong with the same features?',
    answer:
      'Yes. Nimitai is the most direct Gong alternative for startup sales teams — offering AI call recording, conversation intelligence, deal risk scoring, objection pattern detection, and CRM sync at $149/month for your entire team. That\'s roughly 90% cheaper than Gong for a 5-person sales team.',
  },
  {
    question: 'Why is Gong so expensive?',
    answer:
      'Gong is priced for enterprise sales organizations with 50–500+ reps, dedicated RevOps teams, and annual planning cycles. The pricing reflects enterprise software economics — long implementation timelines, dedicated customer success, and complex integrations. For small sales teams, this pricing structure doesn\'t make sense.',
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

const pricingBreakdown = [
  { component: 'Per seat (base)', cost: '$1,200–$1,600/seat/year' },
  { component: 'Minimum seats', cost: '15 seats' },
  { component: 'Minimum annual spend', cost: '~$18,000–$24,000/year' },
  { component: 'Implementation fee', cost: '$5,000–$15,000 (varies)' },
  { component: 'Typical enterprise deal', cost: '$75,000–$150,000/year' },
];

const tocItems = [
  { id: 'why-no-public-pricing', label: 'Why Gong Hides Its Pricing' },
  { id: 'what-gong-costs', label: 'What Gong Actually Costs in 2026' },
  { id: 'whats-included', label: "What's Included in Gong's Price" },
  { id: 'priced-out', label: 'Why 80% of Teams Get Priced Out' },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors overflow-hidden"
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
          </motion.div>
        );
      })}
    </div>
  );
}

export function GongPricing() {
  return (
    <>
      <Helmet>
        <title>Gong Pricing 2026: How Much Does Gong Actually Cost? | Nimitai</title>
        <meta
          name="description"
          content="Gong pricing is not publicly listed. Here's what Gong actually costs in 2026 based on real customer data: $1,200–$1,600/seat/year, 15-seat minimum, annual contracts. And a $149/month alternative that delivers the same AI."
        />
        <meta
          name="keywords"
          content="gong pricing, gong pricing 2026, how much does gong cost, gong price per user, gong cost per seat, gong revenue intelligence pricing, gong io pricing"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Gong Pricing in 2026: How Much Does Gong Actually Cost? (Real Numbers)" />
        <meta
          property="og:description"
          content="Gong pricing is not publicly listed. Here's what Gong actually costs in 2026 based on real customer data: $1,200–$1,600/seat/year, 15-seat minimum, annual contracts. And a $149/month alternative that delivers the same AI."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-02-28" />
        <meta property="article:author" content="Nilansh Gupta" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Gong Pricing in 2026: How Much Does Gong Actually Cost? (Real Numbers)" />
        <meta
          name="twitter:description"
          content="Gong pricing is not publicly listed. Here's what Gong actually costs in 2026 based on real customer data: $1,200–$1,600/seat/year, 15-seat minimum, annual contracts. And a $149/month alternative that delivers the same AI."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@Nimitai" />
        <meta name="twitter:site" content="@Nimitai" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#E89422" />

        {/* JSON-LD Article */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(232,148,34,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,148,34,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-200 to-amber-100 rounded-full blur-[120px] opacity-40"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[120px] opacity-35"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
          >
            <TrendingUp className="text-[#E89422] dark:text-[#F5B040]" size={16} />
            <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">Gong Pricing 2026 — Real Numbers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
          >
            Gong Pricing in 2026: How Much Does It Actually Cost?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Gong doesn't publish pricing. Here's what real customers pay — and why 80% of sales teams can't afford it.
          </motion.p>

          {/* Author byline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6"
          >
            <span className="inline-flex items-center gap-2">
              <User size={15} className="text-[#E89422]" />
              By Nilansh Gupta, Founder of Nimitai
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={15} className="text-[#E89422]" />
              February 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <TrendingUp size={15} className="text-[#E89422]" />
              8 min read
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

            {/* Main content */}
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">

              {/* Section 1 */}
              <motion.div
                id="why-no-public-pricing"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-0">
                  Why Gong Doesn't Show Pricing Publicly
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Gong uses an enterprise sales motion — custom quotes based on team size, contract length, and negotiation leverage. This is a deliberate strategy, not an oversight. By hiding pricing, Gong can charge different rates to different buyers and maximize revenue per deal.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This creates significant information asymmetry where buyers don't know if they're overpaying relative to other customers at similar company sizes. A 20-person sales team and a 200-person sales team might be quoted wildly different prices — and neither knows what the other paid.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Most users discover real Gong pricing only after going through a multi-week sales process: demo, discovery call, technical evaluation, and finally a quote. By that point, many teams are already invested in the evaluation and less likely to walk away.
                </p>
              </motion.div>

              {/* Callout box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="not-prose bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 my-8"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">The bottom line:</strong> Gong's opaque pricing is a feature of their business model, not a bug. It's designed to maximize deal size and prevent easy price comparisons.
                </p>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                id="what-gong-costs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What Gong Actually Costs in 2026
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Based on aggregated data from real Gong customers, sales rep conversations, and G2/Capterra reviews, here's what Gong actually charges in 2026:
                </p>

                {/* Pricing breakdown table */}
                <div className="not-prose overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">Component</th>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingBreakdown.map((row, i) => (
                        <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                          <td className="p-4 text-gray-700 dark:text-gray-300 text-sm font-medium">{row.component}</td>
                          <td className="p-4 text-gray-900 dark:text-white text-sm font-semibold">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                id="whats-included"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What's Included in Gong's Price
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Gong's platform covers the full revenue intelligence stack for enterprise teams. Here's what you get when you pay Gong-level pricing:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Sales call recording and storage',
                    'AI transcription and search',
                    'Conversation intelligence and analytics',
                    'Deal intelligence and pipeline visibility',
                    'Team and rep performance analytics',
                    'CRM integration (Salesforce, HubSpot)',
                    'Revenue forecasting (enterprise tiers only)',
                    'Pipeline analytics and health scoring',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full shrink-0">
                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Section 4 */}
              <motion.div
                id="priced-out"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why 80% of Sales Teams Get Priced Out of Gong
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The 15-seat minimum is the killer for startups. A 5-person sales team would still need to pay for 15 seats minimum — meaning you're paying for 10 phantom users just to get access to the platform. At $1,200/seat, that's $18,000/year before you even consider the implementation fee.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Combined with mandatory annual contracts and implementation fees ($5,000–$15,000), Gong becomes a $25,000–$40,000 first-year decision for even a small team. For seed or Series A startups with 3–10 sales reps, that's a material chunk of the entire sales budget.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Enterprise-scale customers with 50–500 reps can amortize the implementation cost and seat minimums across their org. For a startup, the economics just don't work — which is why most early-stage sales teams either go without conversation intelligence or look for Gong alternatives.
                </p>
              </motion.div>

              {/* Callout box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="not-prose bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 my-8"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">The math for a 5-person team:</strong> Gong minimum = 15 seats x $1,400/seat = $21,000/year + $8,000 implementation = $29,000 first-year cost. That's roughly 16x more expensive than Nimitai for a team that's 3x smaller than Gong's minimum.
                </p>
              </motion.div>

              {/* Section 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  The Best Gong Alternative for Startup Pricing
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Nimitai was built specifically for B2B SaaS founders and startup sales teams who need Gong-level conversation intelligence without Gong-level enterprise pricing. At $149/month for your entire team — no per-seat fees, no seat minimums, no annual contract — Nimitai delivers the same core AI that makes Gong valuable: deal risk scoring, objection pattern detection, talk-ratio analysis, and automatic CRM sync.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Setup takes 30 minutes. There's a 14-day free trial with no credit card required. And if it's not the right fit, you cancel in your account settings — no penalty, no enterprise exit negotiation.
                </p>

                {/* Mini comparison box */}
                <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
                  <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                    <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Gong</div>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <div>$1,200–$1,600/seat/year</div>
                      <div>15-seat minimum</div>
                      <div>Annual contract required</div>
                    </div>
                  </div>
                  <div className="relative bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-2xl p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
                    <div className="relative z-10">
                      <div className="text-sm font-bold text-[#F5B040] uppercase tracking-widest mb-3">Nimitai</div>
                      <div className="space-y-2 text-sm text-amber-100">
                        <div>$149/month flat</div>
                        <div>Unlimited seats</div>
                        <div>No annual contract</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </article>

            {/* Table of contents sidebar */}
            <aside className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-28 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">In This Article</div>
                <ul className="space-y-3">
                  {tocItems.map((item, i) => (
                    <li key={i}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors leading-snug block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="/pricing"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white text-sm font-semibold rounded-xl hover:from-[#C47010] hover:to-[#963C00] transition-all shadow-lg"
                  >
                    See Nimitai Pricing
                  </a>
                </div>
              </motion.div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Gong Pricing — Frequently Asked Questions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Answers to the most common questions about Gong's cost structure.
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="relative inline-block mb-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E89422]/20 to-[#C47010]/20 rounded-3xl blur-xl" />
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
                Get Gong-Level Intelligence at $149/Month
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              No 15-seat minimum. No annual contract. No implementation fee. Just AI sales intelligence that works on day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Start Free Trial
                <Zap size={18} />
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                See Nimitai Pricing vs Gong
                <ArrowRight size={18} />
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              No credit card required. 14-day free trial.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
