import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Linkedin, ArrowRight, TrendingUp, Users, Brain, Target, Zap, Eye } from 'lucide-react';
import { OrganizationSchema } from './seo/OrganizationSchema';
import { BreadcrumbListSchema } from './seo/BreadcrumbListSchema';
import architImage from '../assets/archit.png';
import architWebp from '../assets/archit.webp';
import nilanshImage from '../assets/Nilansh.png';
import nilanshWebp from '../assets/Nilansh.webp';

const timeline = [
  {
    year: '2019',
    label: 'The Agency Years',
    description: 'Nilansh and Archit co-found Digital Patron, a performance marketing agency. Over 5 years they drive 150% more qualified leads and 7x ROI across 200+ B2B clients — and start seeing a pattern.',
    tag: 'Origin',
  },
  {
    year: '2023',
    label: 'The Insight',
    description: 'After sitting in hundreds of client sales calls, the pattern becomes undeniable: deals aren\'t dying in the CRM. They\'re dying in the meeting. At minute 23. When the buyer checks out and nobody notices.',
    tag: 'Turning Point',
  },
  {
    year: 'Q1 2024',
    label: 'ConvertWise',
    description: 'First product launched under the ConvertWise name — AI sales automation. They enter startup competitions, win grants, and onboard early pilot teams. The market confirms the problem is real.',
    tag: 'First Product',
  },
  {
    year: 'Q3 2024',
    label: '350 Calls Analyzed',
    description: 'The founding team personally analyzes 350+ B2B sales calls. The data is clear: 68% of lost deals had at least one unaddressed objection. Reps knew something felt off. AI could have flagged it live.',
    tag: 'Research',
  },
  {
    year: 'Q1 2025',
    label: 'Nimitai is Born',
    description: 'ConvertWise becomes Nimitai — Sanskrit for "the intelligent cause behind an outcome." Sharper positioning: not sales automation. AI meeting intelligence. Real-time. Built for founders and SMB sales teams.',
    tag: 'Rebrand',
  },
  {
    year: '2025–Now',
    label: 'Private Beta',
    description: '412 founders on the waitlist. Founding teams onboarding. The Chrome extension in development. Nimitai is becoming the standard for how startup sales teams understand what happens inside their calls.',
    tag: 'Traction',
  },
];

const stats = [
  { number: '350+', label: 'Sales calls personally analyzed by the founding team' },
  { number: '412', label: 'Founders on the waitlist before public launch' },
  { number: '200+', label: 'Businesses transformed at Digital Patron' },
  { number: '$18B', label: 'Conversation intelligence market by 2028' },
];

const values = [
  { icon: Brain, title: 'Signal over noise', description: 'Surface the one insight that changes the outcome. Not a wall of data.' },
  { icon: Target, title: 'Founder-first', description: 'Priced, designed, and supported for startup sales teams — not enterprises.' },
  { icon: Eye, title: 'Radical transparency', description: 'Show the data. No spin. Let founders see exactly what\'s happening in their calls.' },
  { icon: Zap, title: 'Speed over perfection', description: '30-minute setup. First insight before end of day one. We ship, then improve.' },
];

export function About() {
  const siteUrl = 'https://nimitai.com';
  const pageUrl = `${siteUrl}/about`;
  const title = 'About Nimitai — AI Meeting Intelligence for B2B Sales Teams';
  const description = 'Nimitai is AI meeting intelligence built by Nilansh Gupta and Archit Dhir. We analyze B2B sales conversations in real time to surface coaching insights, buyer signals, and deal risks — starting from $149/seat/month.';
  const keywords = 'Nimitai founders, AI meeting intelligence, conversation intelligence startup, Nilansh Gupta, Archit Dhir';
  const ogImage = `${siteUrl}/og-image.png`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@Nimit_ai" />
        <meta name="twitter:site" content="@Nimit_ai" />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbListSchema items={[
        { name: 'Home', item: 'https://nimitai.com' },
        { name: 'About', item: 'https://nimitai.com/about' },
      ]} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070B18]">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.9) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#E89422] rounded-full blur-[180px] opacity-[0.06] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-orange-700 rounded-full blur-[140px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 border border-[#E89422]/25 bg-[#E89422]/[0.07] rounded-full px-5 py-2 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-[#E89422] rounded-full animate-pulse" />
            <span className="text-[#E89422] text-xs tracking-[0.18em] uppercase font-medium">Our Story · REN AI Technologies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-6"
          >
            We sat in 350 sales calls.<br />
            <span className="bg-gradient-to-r from-[#F5B040] to-[#E89422] bg-clip-text text-transparent">
              The signal was always there.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Deals don't die in the CRM. They die in the meeting — when the buyer raises an objection and nobody catches it in time. Nimitai was built to change that.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white font-semibold rounded-full text-sm shadow-lg shadow-[#E89422]/20 hover:shadow-xl transition-shadow"
            >
              Apply for Founding Access <ArrowRight size={16} />
            </a>
            <a
              href="mailto:hello@nimitai.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-gray-300 hover:text-white hover:border-white/25 rounded-full text-sm transition-colors"
            >
              Talk to the founders
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0D1A] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                className="bg-[#0A0D1A] p-6 sm:p-8 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#F5B040] to-[#E89422] bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-500 leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B18]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <p className="text-[#E89422] text-xs tracking-[0.2em] uppercase font-medium mb-4">The Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">From agency to intelligence platform</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E89422]/40 via-[#E89422]/20 to-transparent transform sm:-translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-14 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                    <div className={`inline-flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E89422]/10 border border-[#E89422]/20 text-[#E89422]">{item.tag}</span>
                      <span className="text-gray-600 text-sm font-mono">{item.year}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.label}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">{item.description}</p>
                  </div>

                  {/* Dot — desktop centre, mobile left */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#070B18] border-2 border-[#E89422] shadow-[0_0_12px_rgba(232,148,34,0.4)]" />

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKET OPPORTUNITY ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0D1A]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <p className="text-[#E89422] text-xs tracking-[0.2em] uppercase font-medium mb-4">The Opportunity</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">A massive market. A clear white space.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The conversation intelligence market is growing at 21% CAGR — but every existing product is built for enterprises. No one owns the startup and SMB segment.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: '$18.4B', label: 'Market size by 2028', sub: '21% CAGR', color: 'from-[#E89422] to-[#963C00]' },
              { stat: '$1,600+', label: 'Per seat per year for enterprise tools', sub: 'Gong, Chorus, Clari', color: 'from-red-500 to-red-700' },
              { stat: 'from $149', label: 'Per seat per month — Nimitai', sub: 'Setup in 30 minutes', color: 'from-[#F5B040] to-[#E89422]' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 sm:p-8"
              >
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>{item.stat}</div>
                <div className="text-white text-sm font-medium mb-1">{item.label}</div>
                <div className="text-gray-600 text-xs">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING TEAM ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B18]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="text-[#E89422] text-xs tracking-[0.2em] uppercase font-medium mb-4">The People</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Built by operators, not academics</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Both founders have lived the problem firsthand — running sales for B2B clients for years before deciding to build the product they wished existed.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Nilansh */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden"
            >
              {/* Top amber accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#E89422]/40 to-transparent" />
              <div className="p-8">
                <div className="flex items-start gap-5 mb-6">
                  <picture>
                    <source srcSet={nilanshWebp} type="image/webp" />
                    <img
                      src={nilanshImage}
                      alt="Nilansh Gupta — Co-Founder & CEO, Nimitai"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover object-center flex-shrink-0 border border-white/10"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">Nilansh Gupta</h3>
                    <p className="text-[#E89422] text-sm font-medium mb-2">Co-Founder & CEO</p>
                    <a
                      href="https://www.linkedin.com/in/nilansh-gupta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#E89422] transition-colors text-xs"
                    >
                      <Linkedin size={13} /> linkedin.com/in/nilansh-gupta
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  A decade in digital marketing and AI-driven growth. Helped 200+ B2B businesses generate pipeline at Digital Patron — and watched deals die in meetings he couldn't control. That frustration became Nimitai.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: '10+', l: 'Years in B2B' },
                    { n: '200+', l: 'Clients grown' },
                    { n: '7x', l: 'Avg ROI' },
                  ].map(item => (
                    <div key={item.l} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3 text-center">
                      <div className="text-lg font-bold text-[#E89422]">{item.n}</div>
                      <div className="text-[10px] text-gray-600 leading-tight mt-0.5">{item.l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-2">
                    {['AI Marketing', 'Growth Strategy', 'Founder-Led Sales'].map(tag => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Archit */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-[#E89422]/40 to-transparent" />
              <div className="p-8">
                <div className="flex items-start gap-5 mb-6">
                  <picture>
                    <source srcSet={architWebp} type="image/webp" />
                    <img
                      src={architImage}
                      alt="Archit Dhir — Co-Founder & CTO, Nimitai"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover object-center flex-shrink-0 border border-white/10"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">Archit Dhir</h3>
                    <p className="text-[#E89422] text-sm font-medium mb-2">Co-Founder & CTO</p>
                    <a
                      href="https://www.linkedin.com/in/archit-dhir-23420a321/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#E89422] transition-colors text-xs"
                    >
                      <Linkedin size={13} /> linkedin.com/in/archit-dhir
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  MBA + deep technical background in marketing automation, PPC, and data-driven systems. Architected the intelligence engine at the core of Nimitai — the layer that turns raw call data into coaching signals.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: 'MBA', l: 'Background' },
                    { n: '200%', l: 'Revenue lift' },
                    { n: '#1', l: 'Conversion rates' },
                  ].map(item => (
                    <div key={item.l} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3 text-center">
                      <div className="text-lg font-bold text-[#E89422]">{item.n}</div>
                      <div className="text-[10px] text-gray-600 leading-tight mt-0.5">{item.l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-2">
                    {['AI Architecture', 'Marketing Automation', 'Data Intelligence'].map(tag => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0D1A]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <p className="text-[#E89422] text-xs tracking-[0.2em] uppercase font-medium mb-4">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">The principles we build by</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-[#E89422]/20 hover:bg-white/[0.05] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E89422]/10 border border-[#E89422]/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#E89422]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070B18]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              label: 'Mission',
              heading: 'Make enterprise-grade conversation intelligence accessible to every startup sales team.',
              body: 'Gong costs $1,600/seat/year and takes 90 days to set up. We deliver the same AI intelligence — setup in 30 minutes, from $149/seat/month, no enterprise contract.',
            },
            {
              icon: TrendingUp,
              label: 'Vision',
              heading: 'A world where no B2B founder loses a deal without knowing exactly why.',
              body: 'Every won deal has a signal. Every lost deal has a pattern. Nimitai surfaces both — so founders and sales teams can make decisions based on data, not instinct.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#E89422]/10 border border-[#E89422]/20 flex items-center justify-center">
                    <Icon size={18} className="text-[#E89422]" />
                  </div>
                  <span className="text-[#E89422] text-xs font-semibold tracking-widest uppercase">{item.label}</span>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold leading-snug mb-4">{item.heading}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── INVESTOR CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0400] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,148,34,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-[#E89422] text-xs tracking-[0.2em] uppercase font-medium mb-6">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Investors, partners,<br />founding teams — we'd love to talk.
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              We're in private beta, growing deliberately, and looking for the right people to build with. If that's you, reach out directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@nimitai.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white font-semibold rounded-full text-sm shadow-lg shadow-[#E89422]/20 hover:shadow-xl transition-shadow"
              >
                hello@nimitai.com <ArrowRight size={16} />
              </a>
              <a
                href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-gray-300 hover:text-white hover:border-white/25 rounded-full text-sm transition-colors"
              >
                Apply for founding access
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <a href="https://www.linkedin.com/in/nilansh-gupta/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-600 hover:text-[#E89422] transition-colors text-xs">
                <Linkedin size={14} /> Nilansh Gupta
              </a>
              <span className="text-gray-800">·</span>
              <a href="https://www.linkedin.com/in/archit-dhir-23420a321/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-600 hover:text-[#E89422] transition-colors text-xs">
                <Linkedin size={14} /> Archit Dhir
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/15 to-transparent" />
      </section>
    </>
  );
}
