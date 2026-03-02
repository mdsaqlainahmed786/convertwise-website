import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Zap,
  Brain,
  BarChart2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Radio,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/ai-meeting-copilot`;
const ogImage = `${siteUrl}/og-image.jpg`;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI Co-Pilot for Sales Meetings — Nimitai | Real-Time Meeting Intelligence',
  description:
    'Nimitai is the AI co-pilot for your sales meetings. Get real-time coaching cues, live deal risk alerts, talk-ratio tracking, and instant objection responses — while the meeting is happening.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'AI Meeting Co-Pilot', item: pageUrl },
    ],
  },
};

const faqs = [
  {
    question: 'What is an AI co-pilot for meetings?',
    answer:
      'An AI co-pilot for meetings is software that runs in parallel with your video calls and provides real-time guidance to help you perform better during the conversation — not just analyze it afterward. Nimitai acts as your AI meeting co-pilot by surfacing live coaching cues, talk-ratio warnings, objection signals, and deal risk alerts while your call is happening.',
  },
  {
    question: 'How is an AI meeting co-pilot different from a regular AI meeting assistant?',
    answer:
      'A standard AI meeting assistant records and transcribes calls, then delivers insights post-meeting. An AI meeting co-pilot like Nimitai goes further — it actively surfaces intelligence during the call in real time, coaching you on pricing moments, flagging when you need to ask better questions, and alerting you to deal risks before the meeting ends.',
  },
  {
    question: 'What kind of real-time signals does the Nimitai AI co-pilot surface?',
    answer:
      'Nimitai surfaces 43 live insights per call on average. These include: perfect pricing moment detected, talk ratio warnings (when you\'re speaking more than 60%), objection pattern signals (pricing hesitation, authority gaps, timing pushbacks), buying signal detections, and deal risk alerts (no next step defined, no timeline mentioned, competitor mentioned).',
  },
  {
    question: 'Does the AI co-pilot work during Zoom, Google Meet, and Teams?',
    answer:
      'Yes. Nimitai\'s AI meeting co-pilot works natively with Zoom, Google Meet, and Microsoft Teams. It joins your calls automatically after a 30-minute setup — no manual recording required, no IT team needed.',
  },
  {
    question: 'Can the AI meeting co-pilot help with discovery calls specifically?',
    answer:
      'Absolutely. Nimitai is particularly powerful on discovery calls. It detects when prospects mention pain signals, surfaces follow-up questions you should ask, flags when you\'re talking too much (and your prospect too little), and scores how well the discovery is going based on your question depth and pain uncovering.',
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

const liveSignals = [
  {
    color: 'green',
    dotClass: 'bg-green-500',
    bgClass: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700/40',
    textClass: 'text-green-800 dark:text-green-300',
    label: 'Perfect pricing moment detected',
    desc: 'Prospect mentioned ROI twice. This is the optimal window to introduce your pricing tier. Confidence: 87%.',
    icon: TrendingUp,
    iconClass: 'text-green-600 dark:text-green-400',
  },
  {
    color: 'orange',
    dotClass: 'bg-orange-500',
    bgClass: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700/40',
    textClass: 'text-orange-800 dark:text-orange-300',
    label: "Talk ratio warning: you're at 68%",
    desc: 'You have been speaking for 68% of this call. Pause and ask an open-ended question to re-engage your prospect.',
    icon: BarChart2,
    iconClass: 'text-orange-600 dark:text-orange-400',
  },
  {
    color: 'blue',
    dotClass: 'bg-blue-500',
    bgClass: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/40',
    textClass: 'text-blue-800 dark:text-blue-300',
    label: 'Objection pattern: pricing hesitation',
    desc: 'Prospect used phrases associated with pricing hesitation 3 times. Suggested response: anchor to value before discussing cost.',
    icon: Brain,
    iconClass: 'text-blue-600 dark:text-blue-400',
  },
  {
    color: 'red',
    dotClass: 'bg-red-500',
    bgClass: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700/40',
    textClass: 'text-red-800 dark:text-red-300',
    label: 'Deal risk: no next step defined',
    desc: '18 minutes in with no next step agreed. Define a specific follow-up action before this call ends to prevent stall.',
    icon: AlertTriangle,
    iconClass: 'text-red-600 dark:text-red-400',
  },
];

const beforeAfter = {
  before: [
    'Guessing when to introduce pricing',
    'No awareness of talk ratio in the moment',
    "Missing objection signals until it's too late",
    'Forgetting to define next steps',
    'Reviewing call recordings hours later',
    'Coaching happens days after the call',
  ],
  after: [
    'AI flags the perfect pricing moment live',
    'Real-time talk-ratio alert at 60% threshold',
    'Objection patterns surfaced as they emerge',
    'Next-step reminder before the call ends',
    'Insights delivered during the call itself',
    'In-call coaching — in the moment it matters',
  ],
};

const useCases = [
  {
    icon: Target,
    title: 'Discovery Calls',
    subtitle: 'Surface pain signal patterns as they happen',
    body: 'Nimitai detects when your prospect mentions a pain point and signals you in real time. It tracks how many pains you have uncovered, scores discovery quality live, and alerts you when you need to dig deeper rather than pitch.',
  },
  {
    icon: Brain,
    title: 'Demo Calls',
    subtitle: 'Detect ROI moment windows',
    body: 'During product demos, Nimitai identifies the moments when prospects show strong buying intent — leaning-in phrases, ROI questions, "how does this work for X" signals. Your AI co-pilot flags these windows so you can close the room, not just complete the script.',
  },
  {
    icon: Users,
    title: 'Closing Calls',
    subtitle: 'Flag objection clusters before they become blockers',
    body: "On closing calls, Nimitai monitors for objection clusters — pricing hesitation, authority gaps, timing pushbacks — and surfaces them before they derail the deal. Your AI meeting co-pilot ensures you leave every closing call with a clear next step.",
  },
];

const trustStats = [
  { label: '43 live insights per call', icon: Radio },
  { label: '87% confidence score', icon: Target },
  { label: '30-min setup', icon: Zap },
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
            transition={{ duration: 0.25, delay: i * 0.08 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors overflow-hidden"
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

export function AiMeetingCopilot() {
  return (
    <>
      <Helmet>
        <title>AI Meeting Co-Pilot for Sales Teams — Nimitai</title>
        <meta
          name="description"
          content="Nimitai is the AI co-pilot for your sales meetings. Get real-time coaching cues, live deal risk alerts, talk-ratio tracking, and instant objection responses — while the meeting is happening."
        />
        <meta
          name="keywords"
          content="AI co-pilot for meetings, AI meeting co-pilot, AI copilot sales, meeting AI copilot, AI sales copilot, real-time meeting intelligence, AI meeting assistant real time"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="AI Co-Pilot for Sales Meetings — Nimitai | Real-Time Meeting Intelligence" />
        <meta
          property="og:description"
          content="Nimitai is the AI co-pilot for your sales meetings. Get real-time coaching cues, live deal risk alerts, talk-ratio tracking, and instant objection responses — while the meeting is happening."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="AI Co-Pilot for Sales Meetings — Nimitai | Real-Time Meeting Intelligence" />
        <meta
          name="twitter:description"
          content="Nimitai is the AI co-pilot for your sales meetings. Get real-time coaching cues, live deal risk alerts, talk-ratio tracking, and instant objection responses — while the meeting is happening."
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

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-200 to-amber-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[120px] opacity-35" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
            >
              <Radio className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">Real-Time AI Co-Pilot for Every Sales Call</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              The AI Co-Pilot That Wins Sales Meetings in Real Time
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Nimitai is the AI co-pilot for your sales meetings — surfacing live coaching cues, deal risk alerts, objection responses, and talk-ratio nudges while the call is happening.{' '}
              <strong className="text-gray-900 dark:text-white">Not after. During.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Activate Your AI Co-Pilot
                <Zap size={18} />
              </a>
              <a
                href="#live-signals"
                className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                See It Live
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Trust stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {trustStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-amber-200/60 dark:border-[#C47010]/40 rounded-full shadow-md text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    <Icon className="text-[#E89422] dark:text-[#F5B040]" size={14} />
                    {stat.label}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. LIVE SIGNAL CARDS ────────────────────────────────────── */}
      <section
        id="live-signals"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What Your AI Meeting Co-Pilot Does
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Real examples of what Nimitai surfaces during your sales calls — live, as they happen.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveSignals.map((signal, i) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.1 }}
                  className={`rounded-3xl p-6 shadow-xl border transition-colors ${signal.bgClass}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex rounded-full h-3 w-3 ${signal.dotClass}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${signal.textClass}`}>Live Signal</span>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className={`${signal.iconClass} shrink-0 mt-0.5`} size={18} />
                    <h3 className={`text-sm font-bold leading-snug ${signal.textClass}`}>{signal.label}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{signal.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. BEFORE / AFTER ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Sales Meetings Without an AI Co-Pilot vs. With One
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              The difference between flying blind and flying with a co-pilot.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
            >
              <div className="text-sm font-bold uppercase tracking-widest text-red-500 dark:text-red-400 mb-4">Without AI Co-Pilot</div>
              <ul className="space-y-4">
                {beforeAfter.before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-0.5 bg-red-500 rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* With */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="relative bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl p-8 shadow-2xl shadow-[#E89422]/30 border border-[#E89422]/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm font-bold uppercase tracking-widest text-[#F5B040] mb-4">With Nimitai AI Co-Pilot</div>
                <ul className="space-y-4">
                  {beforeAfter.after.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-amber-100 text-sm">
                      <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. USE CASES ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              How Sales Teams Use the Nimitai AI Co-Pilot
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Whether it is a discovery call, demo, or close — your AI co-pilot adapts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.12 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E89422] to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{uc.title}</h3>
                  <p className="text-sm font-medium text-[#E89422] dark:text-[#F5B040] mb-4">{uc.subtitle}</p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{uc.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              AI Meeting Co-Pilot FAQ
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Common questions about using an AI co-pilot for your sales meetings.
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* ── 6. FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            <div className="relative inline-block mb-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E89422]/20 to-orange-500/20 rounded-3xl blur-xl" />
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
                Activate Your AI Sales Meeting Co-Pilot Today
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Join 47+ B2B sales teams winning more deals with real-time AI intelligence. $149/month, setup in 30 minutes.
            </p>

            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-orange-500 text-white rounded-full hover:from-[#C47010] hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Activate Your AI Co-Pilot
              <Zap size={18} />
            </a>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              No credit card required. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
