import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Zap,
  Brain,
  BarChart2,
  Target,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  Check,
  X,
} from 'lucide-react';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/ai-sales-coaching`;
const ogImage = `${siteUrl}/og-image.jpg`;

const faqs = [
  {
    question: 'What is AI sales coaching software?',
    answer:
      'AI sales coaching software automatically analyzes sales call recordings, identifies coaching opportunities for each rep, and surfaces personalized improvement insights — without managers having to listen to every call manually. Nimitai goes further by providing real-time coaching cues during calls, so reps improve in the moment, not just after the fact.',
  },
  {
    question: 'How is AI sales coaching different from traditional sales coaching?',
    answer:
      'Traditional sales coaching relies on managers randomly sampling calls and offering feedback days later. AI sales coaching software like Nimitai analyzes every call automatically, identifies each rep\'s specific weaknesses (talk ratio, objection handling, discovery quality), and delivers coaching insights immediately after each call — at scale, without manager bandwidth.',
  },
  {
    question: 'How does Nimitai identify coaching opportunities?',
    answer:
      'Nimitai analyzes each call across four key dimensions: talk ratio (is the rep talking too much?), objection handling (which objection types are they struggling with?), discovery quality (are they uncovering pain deeply enough?), and follow-up commitment (are they leaving calls with clear next steps?). Each dimension generates a score and specific coaching recommendations.',
  },
  {
    question: 'Can AI sales coaching software replace a sales manager?',
    answer:
      'AI sales coaching software does not replace managers — it makes them dramatically more effective. Instead of spending hours listening to call recordings, managers receive an AI-curated summary of exactly which reps need coaching and on what. This frees managers to focus on high-impact coaching conversations rather than call auditing.',
  },
  {
    question: 'How quickly can I see results from AI sales coaching?',
    answer:
      'Most teams using Nimitai see measurable improvement within 30–60 days. Talk ratios improve within the first 2 weeks as reps receive immediate feedback. Objection handling improves within the first month as reps build pattern awareness. Close rates typically improve within the first quarter. Nimitai tracks rep progress over time so you can measure improvement precisely.',
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

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI Sales Coaching Software for B2B Teams 2026 — Nimitai',
  description:
    'Nimitai is AI sales coaching software that automatically analyzes every sales call, identifies coaching opportunities, tracks rep improvement over time, and tells managers exactly who needs help and why. $149/month.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'AI Sales Coaching', item: pageUrl },
    ],
  },
};

const oldWay = [
  'Manager listens to 1 call out of 50',
  'Feedback arrives 3–5 days after the call',
  'Coaching is generic, not rep-specific',
  'No data on which reps struggle with what',
  'Inconsistent coaching cadence',
  'Reps have no idea how their talk ratio compares',
];

const newWay = [
  'AI analyzes every single call automatically',
  'Coaching insights delivered within minutes',
  'Personalized coaching per rep, per weakness',
  'Full visibility into every rep\'s coaching needs',
  'Consistent AI coaching after every call',
  'Rep talk ratio tracked and benchmarked across the team',
];

const coachingFeatures = [
  {
    icon: BarChart2,
    title: 'Talk Ratio Coaching',
    desc: 'Identifies reps talking more than 60% of the time',
    body: 'Nimitai measures talk ratio on every call and flags when reps are dominating the conversation. It benchmarks each rep against your team average and sends specific nudges to help them ask better questions and listen more.',
  },
  {
    icon: MessageSquare,
    title: 'Objection Handling',
    desc: 'Flags which reps struggle with specific objection types',
    body: 'Nimitai clusters objection patterns across all your calls and identifies which reps consistently struggle with pricing objections, authority gaps, or timing pushbacks. Managers receive a targeted coaching agenda — no call review required.',
  },
  {
    icon: Target,
    title: 'Discovery Quality',
    desc: 'Scores how well reps uncover customer pain',
    body: 'Great sales calls start with great discovery. Nimitai scores how well each rep uncovers customer pain, challenges, and business impact — and identifies the reps who pitch too early before establishing deep pain understanding.',
  },
  {
    icon: Clock,
    title: 'Follow-Up Coaching',
    desc: 'Detects deals stalling from weak follow-up',
    body: 'Nimitai flags calls where no clear next step was defined, where timelines were vague, or where follow-up commitments were soft. This prevents the most common cause of pipeline stalls — deals that die because of a non-committal call ending.',
  },
];

const results = [
  {
    metric: '89%',
    label: 'Conversion improvement',
    sub: 'Average across Nimitai teams after 90 days',
  },
  {
    metric: '3.2×',
    label: 'Team capacity',
    sub: 'More reps coached per manager per week',
  },
  {
    metric: '14hrs',
    label: 'Saved per week',
    sub: 'Per manager on call review and coaching prep',
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

export function AiSalesCoaching() {
  return (
    <>
      <Helmet>
        <title>AI Sales Coaching Software for B2B Teams 2026 — Nimitai</title>
        <meta
          name="description"
          content="Nimitai is AI sales coaching software that automatically analyzes every sales call, identifies coaching opportunities, tracks rep improvement over time, and tells managers exactly who needs help and why. $149/month."
        />
        <meta
          name="keywords"
          content="AI sales coaching, AI sales coach, AI sales coaching software, sales coaching software, AI sales training, automated sales coaching, sales call coaching AI"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="AI Sales Coaching Software for B2B Teams 2026 — Nimitai" />
        <meta
          property="og:description"
          content="Nimitai is AI sales coaching software that automatically analyzes every sales call, identifies coaching opportunities, tracks rep improvement over time, and tells managers exactly who needs help and why. $149/month."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="AI Sales Coaching Software for B2B Teams 2026 — Nimitai" />
        <meta
          name="twitter:description"
          content="Nimitai is AI sales coaching software that automatically analyzes every sales call, identifies coaching opportunities, tracks rep improvement over time, and tells managers exactly who needs help and why. $149/month."
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
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(232,148,34,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,148,34,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/95 dark:bg-gray-800/70 border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
            >
              <Brain className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">AI-Powered Sales Coaching Software</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              AI Sales Coaching That Improves Every Rep — Automatically
            </h1>

            <p
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Traditional sales coaching relies on managers listening to random call recordings. Nimitai AI sales coaching software analyzes{' '}
              <strong className="text-gray-900 dark:text-white">EVERY call</strong>, identifies each rep's coaching needs, and delivers personalized insights — so managers coach smarter, not harder.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Start AI Coaching Your Team
                <Zap size={18} />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white/95 dark:bg-gray-800/70 border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                See How It Works
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OLD WAY vs NEW WAY ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What AI Sales Coaching Replaces
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              The old way of coaching was slow, inconsistent, and impossible to scale. Here is what changes with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Old Way */}
            <div
              className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <div className="text-sm font-bold uppercase tracking-widest text-red-500 dark:text-red-400 mb-6">The Old Way</div>
              <ul className="space-y-4">
                {oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="text-red-500 dark:text-red-400" size={10} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way */}
            <div
              className="relative bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl p-8 shadow-2xl shadow-[#E89422]/30 border border-[#E89422]/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm font-bold uppercase tracking-widest text-[#F5B040] mb-6">With Nimitai AI Coaching</div>
                <ul className="space-y-4">
                  {newWay.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-amber-100 text-sm">
                      <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="text-green-400" size={10} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 4 WAYS AI COACHING WORKS ─────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              4 Ways Nimitai AI Sales Coaching Works
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Each dimension of sales performance, analyzed and coached automatically.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#E89422]/20">
                    <Icon className="text-white" size={22} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-xs font-medium text-[#E89422] dark:text-[#F5B040] mb-3">{feature.desc}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. RESULTS ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What B2B Sales Teams Achieve with AI Coaching
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Real results from teams using Nimitai AI sales coaching.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {results.map((r, i) => (
              <div
                key={i}
                className="text-center bg-white/95 dark:bg-gray-800/60 rounded-3xl p-10 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
              >
                <div className="text-5xl font-black bg-gradient-to-br from-[#E89422] to-orange-500 bg-clip-text text-transparent mb-3">
                  {r.metric}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">{r.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{r.sub}</div>
              </div>
            ))}
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
              AI Sales Coaching FAQ
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Everything you need to know about AI sales coaching and how Nimitai delivers it.
            </p>
          </div>

          <FAQAccordion />
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
                Start AI Coaching Your Sales Team Today
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Join 47+ B2B sales teams using Nimitai to coach every rep, every call. $149/month, 30-minute setup, cancel anytime.
            </p>

            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-orange-500 text-white rounded-full hover:from-[#C47010] hover:to-orange-600 transition-colors transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
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
