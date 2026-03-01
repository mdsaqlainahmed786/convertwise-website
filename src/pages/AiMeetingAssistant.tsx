import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Zap,
  Brain,
  BarChart2,
  CheckSquare,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Bot,
  TrendingUp,
  Clock,
} from 'lucide-react';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/ai-meeting-assistant`;
const ogImage = `${siteUrl}/og-image.jpg`;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best AI Meeting Assistant for Sales Teams 2026 — Nimitai',
  description:
    'Nimitai is the AI meeting assistant built for B2B sales teams. Records every sales call, provides real-time coaching, detects objection patterns, and surfaces deal risks automatically. $149/month for your whole team.',
  url: pageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'AI Meeting Assistant', item: pageUrl },
    ],
  },
};

const faqs = [
  {
    question: 'What is an AI meeting assistant?',
    answer:
      'An AI meeting assistant is software that automatically joins your video calls, records the conversation, transcribes speech to text, and surfaces insights. Advanced AI meeting assistants like Nimitai go further — they provide real-time coaching, detect objection patterns, score deal risk, and sync notes to your CRM automatically.',
  },
  {
    question: "What's the best AI meeting assistant for sales teams?",
    answer:
      'Nimitai is the best AI meeting assistant specifically built for B2B sales teams. Unlike general AI meeting assistants (Otter.ai, Fathom, Fireflies), Nimitai includes sales-specific intelligence: deal risk scoring, objection pattern detection, talk-ratio analysis, and real-time coaching cues.',
  },
  {
    question: 'How does an AI meeting assistant work?',
    answer:
      'An AI meeting assistant connects to your video conferencing platform (Zoom, Google Meet, Teams), joins your calls automatically, records and transcribes the audio, and then uses AI to analyze the conversation. Nimitai\'s AI meeting assistant also provides real-time alerts during calls and delivers post-call insights to your CRM.',
  },
  {
    question: 'How much does an AI meeting assistant cost?',
    answer:
      'AI meeting assistant pricing varies widely. Otter.ai starts free with limited minutes. Fathom has a free tier for basic notes. Nimitai costs $149/month for the entire team with no per-seat pricing — and includes full sales intelligence on top of standard meeting assistant features.',
  },
  {
    question: 'Can an AI meeting assistant replace Gong?',
    answer:
      "Nimitai is a full AI meeting assistant and conversation intelligence platform that replaces Gong for startup and SMB teams. It delivers Gong's core features — call recording, AI coaching, deal intelligence — at $149/month vs Gong's $1,200+/seat/year enterprise pricing.",
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

const featureCards = [
  {
    icon: Brain,
    title: 'Real-Time Coaching',
    body: "A great AI meeting assistant doesn't just record — it coaches you live. Nimitai detects the perfect moment to discuss pricing, flags when you're talking too much, and surfaces objection responses in real time.",
  },
  {
    icon: TrendingUp,
    title: 'Automatic Deal Intelligence',
    body: 'Your AI meeting assistant should tell you which deals are at risk. Nimitai scores every call for deal risk signals, commitment gaps, and competitive mentions — so you never walk into a stall.',
  },
  {
    icon: BarChart2,
    title: 'Talk-Ratio Analysis',
    body: 'The best AI meeting assistants measure who\'s doing the talking. Nimitai tracks talk ratios across all your sales calls and tells you which reps need coaching.',
  },
  {
    icon: CheckSquare,
    title: 'Zero Manual CRM Work',
    body: 'Your AI meeting assistant should update your CRM automatically. Nimitai writes call summaries, action items, and deal notes to Salesforce or HubSpot after every call.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Connect in 30 Minutes',
    body: 'Add Nimitai to your Zoom, Google Meet, or Microsoft Teams account. No IT required, no enterprise negotiation.',
  },
  {
    num: '02',
    title: 'Your AI Meeting Assistant Joins Every Call',
    body: 'Nimitai automatically joins your sales calls, records everything, and analyzes the conversation in real time.',
  },
  {
    num: '03',
    title: 'Get Insights, Not Just Notes',
    body: 'After every call, your AI meeting assistant delivers: deal risk score, objection patterns, talk-ratio report, coaching recommendations, and auto-synced CRM notes.',
  },
];

const comparisonRows = [
  {
    feature: 'Real-time coaching',
    cw: true,
    otter: false,
    fathom: false,
    fireflies: false,
  },
  {
    feature: 'Deal risk detection',
    cw: true,
    otter: false,
    fathom: false,
    fireflies: false,
  },
  {
    feature: 'Talk-ratio analysis',
    cw: true,
    otter: false,
    fathom: false,
    fireflies: true,
  },
  {
    feature: 'Sales-specific insights',
    cw: true,
    otter: false,
    fathom: false,
    fireflies: false,
  },
  {
    feature: 'CRM auto-sync',
    cw: true,
    otter: false,
    fathom: true,
    fireflies: true,
  },
  {
    feature: 'Price',
    cw: '$149/mo (team)',
    otter: 'Free–$20/user',
    fathom: 'Free–$19/user',
    fireflies: 'Free–$18/user',
  },
];

const trustStats = [
  { label: '60% faster call prep', icon: Clock },
  { label: '14hrs saved/week', icon: Zap },
  { label: '4× close rate', icon: TrendingUp },
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

export function AiMeetingAssistant() {
  return (
    <>
      <Helmet>
        <title>Best AI Meeting Assistant for Sales Teams 2026 — Nimitai</title>
        <meta
          name="description"
          content="Nimitai is the AI meeting assistant built for B2B sales teams. Records every sales call, provides real-time coaching, detects objection patterns, and surfaces deal risks automatically. $149/month for your whole team."
        />
        <meta
          name="keywords"
          content="AI meeting assistant, best AI meeting assistant, AI meeting assistant for sales, AI meeting assistant software, meeting assistant AI, AI powered meeting assistant, sales meeting assistant AI"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Best AI Meeting Assistant for Sales Teams 2026 — Nimitai" />
        <meta
          property="og:description"
          content="Nimitai is the AI meeting assistant built for B2B sales teams. Records every sales call, provides real-time coaching, detects objection patterns, and surfaces deal risks automatically. $149/month for your whole team."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Best AI Meeting Assistant for Sales Teams 2026 — Nimitai" />
        <meta
          name="twitter:description"
          content="Nimitai is the AI meeting assistant built for B2B sales teams. Records every sales call, provides real-time coaching, detects objection patterns, and surfaces deal risks automatically. $149/month for your whole team."
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
            >
              <Bot className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">The AI Meeting Assistant Built for Sales</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
            >
              The AI Meeting Assistant That Closes More Deals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Most AI meeting assistants take notes. Nimitai does more — it records your sales calls, coaches you in real time, detects buying signals, flags deal risks, and surfaces objection patterns automatically. The AI meeting assistant your sales team actually needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Start Free Trial
                <Zap size={18} />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Watch Demo
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Trust stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {trustStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-amber-200/60 dark:border-[#C47010]/40 rounded-full shadow-md text-sm font-semibold text-gray-800 dark:text-gray-200"
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

      {/* ── 2. WHAT MAKES A GREAT AI MEETING ASSISTANT ──────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              What Makes a Great AI Meeting Assistant?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Not all AI meeting assistants are equal. Here is what separates a basic note-taker from genuine sales intelligence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-[#E89422]/20">
                    <Icon className="text-white" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ─────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              How Nimitai AI Meeting Assistant Works
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Three steps from setup to your first deal intelligence insight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors relative overflow-hidden"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Nimitai vs Other AI Meeting Assistants
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              See how Nimitai compares to Otter.ai, Fathom, and Fireflies on the features that actually matter for sales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
                  <th className="text-center p-5 font-semibold text-gray-700 dark:text-gray-300">Otter.ai</th>
                  <th className="text-center p-5 font-semibold text-gray-700 dark:text-gray-300">Fathom</th>
                  <th className="text-center p-5 font-semibold text-gray-700 dark:text-gray-300">Fireflies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-gray-800 transition-colors">
                    <td className="p-5 text-gray-800 dark:text-gray-200 font-medium text-sm">{row.feature}</td>
                    {['cw', 'otter', 'fathom', 'fireflies'].map((key) => {
                      const val = row[key as keyof typeof row];
                      const isCw = key === 'cw';
                      return (
                        <td key={key} className={`p-5 text-center ${isCw ? 'bg-[#E89422]/5 dark:bg-[#F5B040]/5' : ''}`}>
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
                            <span className={`text-sm font-medium ${isCw ? 'text-[#C47010] dark:text-[#F5B040]' : 'text-gray-600 dark:text-gray-400'}`}>
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
          </motion.div>
        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────────────────── */}
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
              AI Meeting Assistant FAQ
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Everything you need to know about AI meeting assistants and how Nimitai compares.
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
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="relative inline-block mb-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E89422]/20 to-orange-500/20 rounded-3xl blur-xl" />
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
                Start Using the AI Meeting Assistant Built for Sales
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Join 47+ B2B sales teams. $149/month, 30-minute setup, cancel anytime.
            </p>

            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-orange-500 text-white rounded-full hover:from-[#C47010] hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Try Nimitai Free
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
