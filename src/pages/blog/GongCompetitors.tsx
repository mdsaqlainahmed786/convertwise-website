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
const pageUrl = `${siteUrl}/blog/gong-competitors-alternatives`;
const ogImage = `${siteUrl}/og-image.jpg`;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 Best Gong Competitors & Alternatives in 2026 (Honest Comparison + Real Pricing)',
  description:
    'Looking for Gong competitors? We ranked the 10 best Gong alternatives in 2026 by price, features, and fit for startup sales teams. Includes real pricing data, feature comparisons, and who each tool is best for.',
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
    question: 'What is the best Gong alternative in 2026?',
    answer:
      "The best Gong alternative in 2026 depends on your team size. For startups and SMBs (1–25 reps), Nimitai delivers full Gong-level conversation intelligence at $149/month flat. For enterprise teams needing Gong's full feature depth, Chorus.ai is the closest alternative. For teams primarily needing meeting notes, Fathom offers the best free experience.",
  },
  {
    question: 'Which Gong competitor has the most affordable pricing?',
    answer:
      'Nimitai is the most affordable Gong competitor with full AI sales intelligence at $149/month for the entire team — no per-seat fees. Fathom offers a free plan but without sales intelligence features. All enterprise Gong competitors (Chorus, Clari, Jiminny) are similarly priced to Gong at $700–$1,600/seat/year.',
  },
  {
    question: 'Can I switch from Gong to a cheaper alternative without losing features?',
    answer:
      "Yes, for most startup and SMB teams. Nimitai matches Gong's core conversation intelligence features — call recording, deal risk scoring, objection pattern detection, talk-ratio analysis, and CRM sync — at $149/month. Enterprise-specific features (forecasting, pipeline management, 500+ rep org charts) remain Gong-only.",
  },
  {
    question: 'Is Fathom really a Gong alternative?',
    answer:
      'Fathom is a meeting notetaker, not a Gong alternative. Gong is a conversation intelligence and revenue intelligence platform. Fathom takes notes. The comparison is frequently made because both record calls — but Fathom lacks deal intelligence, objection analysis, coaching analytics, and rep performance tracking.',
  },
  {
    question: 'What should I look for in a Gong alternative?',
    answer:
      'The right Gong alternative should offer: (1) automated sales call recording and transcription, (2) deal risk detection, (3) objection pattern analysis, (4) talk-ratio reporting, (5) CRM integration, and (6) rep coaching insights. Pricing and contract terms matter too — avoid per-seat pricing and annual contracts if you\'re an early-stage team.',
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

const quickComparisonRows = [
  { tool: 'Nimitai', bestFor: 'Startup & SMB sales', price: '$149/mo flat', differentiator: 'Sales AI + flat pricing', isHighlighted: true },
  { tool: 'Fathom', bestFor: 'Individuals + small teams', price: 'Free–$19/user', differentiator: 'Best free tier', isHighlighted: false },
  { tool: 'Fireflies.ai', bestFor: 'Teams wanting transcription', price: '$10–$18/user', differentiator: 'Large meeting library', isHighlighted: false },
  { tool: 'tl;dv', bestFor: 'Product + sales hybrid', price: '$20–$29/user', differentiator: 'Timestamped highlights', isHighlighted: false },
  { tool: 'Chorus.ai', bestFor: 'Mid-market sales', price: '$1,000+/seat/year', differentiator: 'Mature conversation AI', isHighlighted: false },
  { tool: 'Avoma', bestFor: 'SMB sales', price: '$19–$79/user', differentiator: 'End-to-end meeting lifecycle', isHighlighted: false },
  { tool: 'Wingman', bestFor: 'SMB sales coaching', price: '$60+/user', differentiator: 'Real-time battlecards', isHighlighted: false },
  { tool: 'Otter.ai', bestFor: 'General transcription', price: '$10–$20/user', differentiator: 'Easiest transcription', isHighlighted: false },
  { tool: 'Jiminny', bestFor: 'Enterprise teams', price: 'Custom', differentiator: '360° coaching', isHighlighted: false },
  { tool: 'Modjo', bestFor: 'European sales teams', price: 'Custom', differentiator: 'European compliance', isHighlighted: false },
];

interface Competitor {
  rank: number;
  name: string;
  tagline: string;
  bestFor: string;
  pricing: string;
  limitation: string;
  paragraphs: string[];
}

const competitors: Competitor[] = [
  {
    rank: 1,
    name: 'Nimitai',
    tagline: 'Best for Startup and SMB B2B Sales Teams',
    bestFor: 'B2B SaaS founders with 1–25 reps who need Gong-level intelligence without Gong pricing.',
    pricing: '$149/month flat, whole team, no annual contract.',
    limitation: 'Newer product — less historical data depth than Gong for large enterprises.',
    paragraphs: [
      'Nimitai is purpose-built for the sales motion of early-stage B2B SaaS companies. Where Gong was designed for 200-rep enterprise orgs with dedicated RevOps, Nimitai assumes your head of sales is also running calls, your CRM data is imperfect, and your team is 3–15 people who need real intelligence without a 90-day implementation.',
      'The core platform covers deal risk scoring on every call, objection pattern detection across your call library, talk/listen ratio analysis, real-time coaching cues during calls, and automatic CRM sync to Salesforce or HubSpot. Setup is 30 minutes, not 90 days. The pricing is $149/month for your entire team — unlimited recordings, unlimited seats, no per-call fees.',
      'For startup and SMB sales teams that need Gong-level conversation intelligence at a price that makes sense before Series B, Nimitai is the strongest option in 2026.',
    ],
  },
  {
    rank: 2,
    name: 'Fathom',
    tagline: 'Best Free Gong Alternative for Individuals',
    bestFor: 'Individual sales reps or very small teams who primarily need meeting notes and summaries.',
    pricing: 'Free plan available, paid from $19/user/month.',
    limitation: 'No sales intelligence features (no deal risk, no objection analysis, no talk ratios). Designed for note-taking, not sales optimization.',
    paragraphs: [
      'Fathom is the most popular free Gong alternative — but the comparison is a stretch. Fathom is a meeting note-taking tool that records, transcribes, and summarizes calls. It does this very well. The free plan is generous, the Zoom integration is seamless, and the meeting summaries are genuinely useful.',
      'What Fathom lacks entirely is sales intelligence. There is no deal risk scoring, no objection pattern analysis, no talk-ratio tracking, no coaching nudges, and no rep performance scorecards. It\'s a productivity tool, not a revenue intelligence platform. If you\'re an individual contributor who wants to stop taking notes during calls, Fathom is excellent.',
      'If you\'re a sales leader who wants to improve your team\'s win rate through conversation analysis, Fathom won\'t get you there. The gap between Fathom and Gong is not pricing — it\'s product category.',
    ],
  },
  {
    rank: 3,
    name: 'Fireflies.ai',
    tagline: 'Best for Teams Wanting a Meeting Library',
    bestFor: 'Teams that want searchable call libraries and basic conversation analytics.',
    pricing: 'Free plan (limited), paid from $10–$18/user/month.',
    limitation: 'Basic conversation analytics — no deal risk scoring, no real-time coaching, limited sales-specific intelligence.',
    paragraphs: [
      'Fireflies.ai has built one of the largest meeting recording libraries in the category. The platform records across Zoom, Google Meet, Teams, and dozens of other conferencing tools. Search is a genuine strength — you can search across your entire call history for specific keywords, topics, or moments.',
      'The conversation analytics layer is lighter than Gong or Nimitai. You get basic talk-ratio metrics and topic tracking, but no deal risk scoring, no objection clustering, and no real-time coaching features. Fireflies is best understood as a meeting archive and transcription tool with a basic analytics layer on top.',
      'For teams that primarily need a searchable call library and basic transcription at a low per-seat cost, Fireflies is a strong choice. For teams that want the intelligence to improve win rates, you\'ll outgrow it quickly.',
    ],
  },
  {
    rank: 4,
    name: 'tl;dv',
    tagline: 'Best for Video Highlights and Timestamped Clips',
    bestFor: 'Product-led teams and sales teams that share call clips internally or with prospects.',
    pricing: 'Free plan, paid from $20–$29/user/month.',
    limitation: 'Primarily a video highlight tool — not a full conversation intelligence platform.',
    paragraphs: [
      'tl;dv (Too Long; Didn\'t View) built their product around the insight that most people don\'t watch full call recordings. Instead, the platform makes it easy to create timestamped clips, highlight reels, and sharable moments from any call. The clip-sharing workflow is genuinely best-in-class.',
      'Sales teams use tl;dv primarily for internal coaching moments (sharing a great objection handle with the team) or for sending relevant call clips to prospects ("here\'s the demo section we discussed"). The free plan is usable, and the paid tiers are reasonably priced at $20–$29/user.',
      'Where tl;dv falls short is in systematic conversation intelligence. There\'s no deal risk scoring, no automated objection pattern analysis across your call library, and no real-time coaching features. It\'s a highlight reel tool, not a revenue intelligence platform.',
    ],
  },
  {
    rank: 5,
    name: 'Chorus.ai (ZoomInfo)',
    tagline: 'Closest Enterprise Alternative to Gong',
    bestFor: 'Enterprise sales orgs with 50+ reps and dedicated RevOps.',
    pricing: '$1,000+/seat/year, annual contract.',
    limitation: 'Enterprise pricing and complexity — not accessible for startups or SMBs.',
    paragraphs: [
      'Chorus.ai, now part of ZoomInfo, is the most direct enterprise-level alternative to Gong. The conversation intelligence features are mature — call recording, AI transcription, deal intelligence, pipeline analytics, and coaching workflows. If you\'re running a 100+ rep sales org and already use ZoomInfo for prospecting, Chorus offers meaningful integration advantages.',
      'For teams already in the ZoomInfo ecosystem, Chorus can be bundled into an existing enterprise agreement. The sales intelligence depth is comparable to Gong, with pipeline visibility and coaching analytics that enterprise RevOps teams find valuable.',
      'For startups and SMBs, Chorus is not accessible. The pricing structure mirrors Gong — per-seat, annual contracts, minimum seat requirements, and implementation fees. If your team has fewer than 30 reps or you don\'t have a dedicated RevOps function, Chorus is the wrong tool.',
    ],
  },
  {
    rank: 6,
    name: 'Avoma',
    tagline: 'Best All-in-One Meeting Platform',
    bestFor: 'SMB teams wanting an end-to-end meeting lifecycle tool (scheduling + notes + CRM).',
    pricing: '$19–$79/user/month.',
    limitation: 'Sales intelligence is lighter than Gong or Nimitai — better as a meeting platform than a coaching tool.',
    paragraphs: [
      'Avoma takes a broader approach than most call recording tools. The platform covers the full meeting lifecycle — scheduling, pre-meeting agendas, live note-taking, post-call summaries, and CRM sync. It\'s more meeting management platform than pure conversation intelligence.',
      'The CRM sync is one of Avoma\'s genuine strengths. Call notes, action items, and summaries sync to Salesforce and HubSpot cleanly, which reduces manual CRM update time. For SMB sales teams that struggle with CRM hygiene, this is a real value driver.',
      'The conversation intelligence layer is lighter than dedicated tools. Talk-ratio tracking and basic topic detection are present, but deal risk scoring, objection pattern clustering, and real-time coaching are not at the same depth as Gong or Nimitai. Avoma is best for teams who want to improve meeting workflow, not specifically win rates.',
    ],
  },
  {
    rank: 7,
    name: 'Wingman (Clari)',
    tagline: 'Best for Real-Time Battlecards',
    bestFor: 'Sales teams that need competitive enablement and live coaching cues.',
    pricing: '$60+/user/month.',
    limitation: 'Per-seat pricing adds up quickly; less focus on post-call pattern analysis.',
    paragraphs: [
      'Wingman, now part of Clari, built its reputation on real-time coaching during calls. When a prospect mentions a competitor, Wingman surfaces the relevant battlecard immediately. When the call hits a common objection, it shows the rep the best-performing response. For competitive-heavy sales environments, this is genuinely useful.',
      'The real-time layer is Wingman\'s strongest differentiation. Live coaching nudges, talk-time warnings, and competitor detection during calls set it apart from tools that are purely post-call analytics.',
      'The pricing model is per-seat, which means costs scale linearly with team size. For a 10-rep team at $60/user, that\'s $600/month versus $149/month for Nimitai covering the same team. Post-call pattern analysis and cross-call intelligence are less developed than dedicated analytics platforms.',
    ],
  },
  {
    rank: 8,
    name: 'Otter.ai',
    tagline: 'Best Pure Transcription Tool',
    bestFor: 'Teams that only need transcription and basic meeting notes at low cost.',
    pricing: '$10–$20/user/month.',
    limitation: 'Not a sales intelligence tool — no deal risk, no objection analysis, no coaching.',
    paragraphs: [
      'Otter.ai is the simplest tool on this list. It records meetings, transcribes them accurately, and generates basic summaries. The setup is the easiest of any tool in the category — connect your calendar, and Otter joins calls automatically.',
      'Otter is not trying to be Gong. It\'s a transcription and note-taking product that happens to work well for sales calls. At $10–$20/user/month, it\'s among the cheapest options for teams that just need a written record of their calls.',
      'If you need sales intelligence — deal risk signals, objection analysis, rep coaching, win/loss patterns — Otter is the wrong tool. It will not improve your win rate. But if you just need to stop typing notes during calls and have a searchable transcript archive, Otter delivers reliably.',
    ],
  },
  {
    rank: 9,
    name: 'Jiminny',
    tagline: 'Best for Enterprise Sales Coaching',
    bestFor: 'Large sales organizations focused on rep development and 360° coaching.',
    pricing: 'Custom enterprise pricing.',
    limitation: 'Enterprise-only, custom pricing, long implementation.',
    paragraphs: [
      'Jiminny is purpose-built for enterprise sales coaching workflows. The platform centers on the manager-rep relationship — how managers review calls, provide feedback, and track rep development over time. The coaching workflow, call library, and performance dashboards are designed for organizations that treat sales coaching as a systematic, ongoing process.',
      'Manager dashboards in Jiminny are among the most detailed in the category. Reps can self-review calls, managers can tag and annotate recordings, and the platform tracks improvement over time. For large orgs with dedicated sales enablement and coaching programs, this structure adds real value.',
      'Jiminny does not publish pricing and operates on a custom enterprise model. Implementation timelines are measured in weeks, not minutes. For startups or teams without dedicated sales enablement functions, Jiminny\'s structure doesn\'t fit the motion.',
    ],
  },
  {
    rank: 10,
    name: 'Modjo',
    tagline: 'Best for European Sales Teams',
    bestFor: 'European B2B sales teams with GDPR compliance requirements.',
    pricing: 'Custom pricing.',
    limitation: 'Limited availability and integrations outside Europe.',
    paragraphs: [
      'Modjo is a French-founded conversation intelligence platform with strong traction in European markets. The platform\'s primary differentiator is data residency — all data is stored within EU servers, making it the clearest GDPR-compliant option in the category.',
      'Language support is a genuine strength. Modjo handles French, German, Spanish, and English call analysis more accurately than US-based competitors, which tend to optimize for English-language sales conversations. For multi-language European sales teams, this is a meaningful advantage.',
      'Outside Europe, Modjo\'s integration list is narrower and market presence is limited. US and APAC sales teams will find better-supported options in other tools on this list. Pricing is custom and not publicly available.',
    ],
  },
];

const tocItems = [
  { id: 'quick-comparison', label: 'Quick Comparison Table' },
  { id: 'competitor-1', label: '#1 Nimitai' },
  { id: 'competitor-2', label: '#2 Fathom' },
  { id: 'competitor-3', label: '#3 Fireflies.ai' },
  { id: 'competitor-4', label: '#4 tl;dv' },
  { id: 'competitor-5', label: '#5 Chorus.ai' },
  { id: 'competitor-6', label: '#6 Avoma' },
  { id: 'competitor-7', label: '#7 Wingman' },
  { id: 'competitor-8', label: '#8 Otter.ai' },
  { id: 'competitor-9', label: '#9 Jiminny' },
  { id: 'competitor-10', label: '#10 Modjo' },
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

export function GongCompetitors() {
  return (
    <>
      <Helmet>
        <title>10 Best Gong Competitors & Alternatives in 2026 | Nimitai</title>
        <meta
          name="description"
          content="Looking for Gong competitors? We ranked the 10 best Gong alternatives in 2026 by price, features, and fit for startup sales teams. Includes real pricing data, feature comparisons, and who each tool is best for."
        />
        <meta
          name="keywords"
          content="gong competitors, gong alternatives, best gong competitors, gong alternative list, gong competitor comparison, conversation intelligence alternatives"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="10 Best Gong Competitors & Alternatives in 2026 (Honest Comparison + Real Pricing)" />
        <meta
          property="og:description"
          content="Looking for Gong competitors? We ranked the 10 best Gong alternatives in 2026 by price, features, and fit for startup sales teams. Includes real pricing data, feature comparisons, and who each tool is best for."
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
        <meta name="twitter:title" content="10 Best Gong Competitors & Alternatives in 2026 (Honest Comparison + Real Pricing)" />
        <meta
          name="twitter:description"
          content="Looking for Gong competitors? We ranked the 10 best Gong alternatives in 2026 by price, features, and fit for startup sales teams. Includes real pricing data, feature comparisons, and who each tool is best for."
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

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-200 to-amber-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[120px] opacity-35" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-amber-200/60 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors"
          >
            <TrendingUp className="text-[#E89422] dark:text-[#F5B040]" size={16} />
            <span className="text-[#C47010] dark:text-[#F5B040] text-sm font-medium">10 Best Gong Competitors 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent"
          >
            10 Best Gong Competitors & Alternatives in 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          >
            We compared every major Gong competitor on price, features, and fit for different team sizes. Here's the honest ranking — with real pricing numbers Gong doesn't want you to see.
          </motion.p>

          {/* Author byline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.3 }}
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
              12 min read
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_260px] gap-12 items-start">

            {/* Main content */}
            <article>

              {/* Quick comparison table */}
              <motion.div
                id="quick-comparison"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                className="mb-16"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Comparison: 10 Best Gong Competitors
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Tool</th>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Best For</th>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Price</th>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Key Differentiator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quickComparisonRows.map((row, i) => (
                        <tr
                          key={i}
                          className={`border-t border-gray-100 dark:border-gray-800 transition-colors ${
                            row.isHighlighted ? 'bg-amber-50/60 dark:bg-amber-900/20' : ''
                          }`}
                        >
                          <td className={`p-4 font-semibold ${row.isHighlighted ? 'text-[#C47010] dark:text-[#F5B040]' : 'text-gray-900 dark:text-white'}`}>
                            {row.tool}
                            {row.isHighlighted && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-[#E89422] text-white text-xs rounded-full">#1</span>
                            )}
                          </td>
                          <td className="p-4 text-gray-700 dark:text-gray-300">{row.bestFor}</td>
                          <td className={`p-4 font-medium ${row.isHighlighted ? 'text-[#C47010] dark:text-[#F5B040]' : 'text-gray-700 dark:text-gray-300'}`}>
                            {row.price}
                          </td>
                          <td className="p-4 text-gray-700 dark:text-gray-300">{row.differentiator}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Individual competitor sections */}
              {competitors.map((competitor, idx) => (
                <motion.div
                  key={competitor.rank}
                  id={`competitor-${competitor.rank}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className={`mb-14 pb-14 ${idx < competitors.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}
                >
                  {/* Rank + name header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-md ${
                      competitor.rank === 1
                        ? 'bg-gradient-to-br from-[#E89422] to-[#963C00] text-white shadow-[#E89422]/30'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {competitor.rank}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                        {competitor.name}
                      </h2>
                      <p className="text-[#E89422] dark:text-[#F5B040] font-medium mt-0.5">
                        {competitor.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4 mb-6">
                    {competitor.paragraphs.map((para, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">{para}</p>
                    ))}
                  </div>

                  {/* Metadata pills */}
                  <div className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-5 space-y-3 text-sm">
                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300 shrink-0">Best for:</span>
                      <span className="text-gray-600 dark:text-gray-400">{competitor.bestFor}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300 shrink-0">Pricing:</span>
                      <span className={`font-medium ${competitor.rank === 1 ? 'text-[#E89422] dark:text-[#F5B040]' : 'text-gray-600 dark:text-gray-400'}`}>
                        {competitor.pricing}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300 shrink-0">Limitation:</span>
                      <span className="text-gray-600 dark:text-gray-400">{competitor.limitation}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

            </article>

            {/* Table of contents sidebar */}
            <aside className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.4 }}
                className="sticky top-28 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">In This Article</div>
                <ul className="space-y-2">
                  {tocItems.map((item, i) => (
                    <li key={i}>
                      <a
                        href={`#${item.id}`}
                        className={`text-sm transition-colors leading-snug block py-0.5 ${
                          item.id === 'competitor-1'
                            ? 'text-[#E89422] dark:text-[#F5B040] font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:text-[#E89422] dark:hover:text-[#F5B040]'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="#"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white text-sm font-semibold rounded-xl hover:from-[#C47010] hover:to-[#963C00] transition-all shadow-lg"
                  >
                    Try Nimitai Free
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
            transition={{ duration: 0.25 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Gong Competitors — Frequently Asked Questions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              The most common questions when evaluating Gong and its alternatives.
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
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            <div className="relative inline-block mb-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E89422]/20 to-[#C47010]/20 rounded-3xl blur-xl" />
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
                Try Nimitai — The #1 Gong Alternative for Startups
              </h2>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
              $149/month for your entire sales team. Gong-level AI conversation intelligence. 30-minute setup. No annual contract.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                Start 14-Day Free Trial
                <Zap size={18} />
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                See Full Pricing
                <ArrowRight size={18} />
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              No credit card required. Join 47+ B2B sales teams using Nimitai.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
