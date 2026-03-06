import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Chrome, Sparkles, Lock, Zap } from 'lucide-react';
import { trackCtaClick } from '../lib/analytics';

export function Waitlist() {
  return (
    <>
      <Helmet>
        <title>Join the Waitlist — Nimitai AI Meeting Intelligence</title>
        <meta name="description" content="Nimitai is in private beta. Apply for founding access to AI meeting intelligence built for B2B sales teams." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-[#070B18]">

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.9) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient orbs */}
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-[#E89422] rounded-full blur-[160px] opacity-[0.07] pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-orange-700 rounded-full blur-[140px] opacity-[0.06] pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,148,34,0.05) 0%, transparent 70%)' }}
        />

        <div className="max-w-lg w-full mx-auto relative z-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-10"
          >
            <Link to="/" aria-label="Back to Nimitai home">
              <img
                src="/chrome-logo.png"
                alt="Nimitai"
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2.5 border border-[#E89422]/25 bg-[#E89422]/[0.07] rounded-full px-5 py-2 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#E89422] rounded-full animate-pulse" />
              <span className="text-[#E89422] text-xs tracking-[0.18em] uppercase font-medium">
                Private Beta · Application Open
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-5"
          >
            Nimitai is almost{' '}
            <span className="bg-gradient-to-r from-[#F5B040] to-[#E89422] bg-clip-text text-transparent">
              ready for you.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="text-center text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-md mx-auto"
          >
            We're onboarding founding teams right now. Apply below — we'll reach out within{' '}
            <span className="text-gray-200 font-medium">48 hours</span> to get you set up.
          </motion.p>

          {/* Main CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 mb-5"
          >
            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Lock, text: 'Founding pricing — from $149/seat/month, locked for life' },
                { icon: Zap, text: 'Priority onboarding call within 48 hours of approval' },
                { icon: Sparkles, text: 'Direct access to Nilansh and Archit, the founding team' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#E89422]/10 border border-[#E89422]/20 flex items-center justify-center mt-0.5">
                    <Icon size={14} className="text-[#E89422]" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('waitlist_page_apply')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white font-semibold rounded-xl text-sm shadow-lg shadow-[#E89422]/20 hover:shadow-xl hover:shadow-[#E89422]/30 transition-shadow"
              aria-label="Apply for Nimitai founding access"
            >
              Apply for Founding Access
              <ArrowRight size={17} />
            </motion.a>

            <p className="text-center text-xs text-gray-600 mt-4">
              <span className="text-white font-semibold">412</span> founders already on the waitlist
            </p>
          </motion.div>

          {/* Chrome Extension coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              <Chrome size={24} className="text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold mb-0.5">Chrome Extension — Coming Soon</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Real-time AI coaching directly inside Zoom and Google Meet. No tab switching. Apply above to get early access.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-[#E89422]/10 border border-[#E89422]/20 text-[#E89422]">
                Soon
              </span>
            </div>
          </motion.div>

          {/* Bottom nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            <Link
              to="/"
              className="text-xs text-gray-600 hover:text-[#E89422] transition-colors"
            >
              Back to home
            </Link>
            <span className="text-gray-800 text-xs">·</span>
            <Link
              to="/pricing"
              className="text-xs text-gray-600 hover:text-[#E89422] transition-colors"
            >
              View pricing
            </Link>
            <span className="text-gray-800 text-xs">·</span>
            <a
              href="mailto:hello@nimitai.com"
              className="text-xs text-gray-600 hover:text-[#E89422] transition-colors"
            >
              hello@nimitai.com
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
