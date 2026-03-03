import { useState, useEffect, useRef } from 'react';
import { Play, Sparkles, TrendingUp, Zap, Brain, Target, Users, X } from 'lucide-react';
import { motion, animate as motionAnimate } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { trackCtaClick, trackVideoPlay } from '../lib/analytics';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const lastDisplayRef = useRef(0);

  useEffect(() => {
    const animation = motionAnimate(0, 84, {
      duration: 1.4,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v: number) => {
        const rounded = Math.round(v);
        if (rounded !== lastDisplayRef.current) {
          lastDisplayRef.current = rounded;
          setDisplayCount(rounded);
        }
      },
    });
    return () => animation.stop();
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,148,34,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,148,34,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* ── Static gradient orbs ─────────────────────────── */}
      <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-amber-300 rounded-full blur-[130px] opacity-15 sm:opacity-35" />
      <div className="absolute -bottom-24 -left-24 w-[650px] h-[650px] bg-orange-300 rounded-full blur-[130px] opacity-10 sm:opacity-28" />
      <div className="hidden sm:block absolute top-1/3 -left-16 w-[420px] h-[420px] bg-amber-200 rounded-full blur-[100px] opacity-22" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-orange-200 rounded-full blur-[90px] opacity-20" />
      {/* Radial centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,148,34,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="relative">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-[#E89422]/10 backdrop-blur-md border border-[#E89422]/30 dark:border-[#E89422]/30 rounded-full shadow-lg relative transition-colors"
            >
              <Sparkles className="text-[#E89422]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-xs tracking-wider uppercase">AI Meeting Intelligence Platform</span>
            </motion.div>

            {/* H1 */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-br from-gray-900 dark:from-white via-[#C47010] dark:via-[#F5B040] to-[#E89422] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                The AI Meeting Intelligence Platform Built for B2B Sales Teams.
              </motion.h1>
            </div>

            <motion.p
              className="mb-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 relative"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Analyze every meeting. Surface every signal. Coach every rep — in real time.
            </motion.p>

            <motion.p
              className="mb-6 text-base text-gray-500 dark:text-gray-400 relative leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            >
              AI meeting intelligence that detects buyer signals, surfaces coaching insights, and auto-generates battle cards — so every rep sells like your best rep. The Gong alternative built for startup sales teams.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
            >
              <motion.a
                href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick('hero_apply_founding_access')}
                className="group px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full flex items-center justify-center gap-2 shadow-xl"
                aria-label="Apply for Nimitai AI meeting intelligence founding access — waitlist"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Apply for Founding Access</span>
                <Zap size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
              </motion.a>
              <button
                onClick={() => { setIsVideoOpen(true); trackVideoPlay(); }}
                className="px-8 py-4 bg-white/70 dark:bg-white/[0.06] backdrop-blur-md border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-white/10 hover:text-white dark:hover:text-white transition-all flex cursor-pointer items-center justify-center gap-2 shadow-lg"
                aria-label="Watch 2-minute demo of Nimitai conversation intelligence software"
              >
                <Play size={20} aria-hidden="true" />
                <span>Watch 2-Min Demo</span>
              </button>
            </motion.div>

            {/* Trust indicators in glass panel */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/80 dark:border-white/[0.08] rounded-2xl p-6 shadow-lg relative transition-colors"
            >
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <span>Private beta · waitlist open</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-white/10" />
                <div className="flex items-center gap-2">
                  <Users className="text-[#E89422]" size={18} />
                  <span>412+ founders on waitlist</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-white/10" />
                <div className="flex items-center gap-2">
                  <Target className="text-[#E89422]" size={18} />
                  <span>Starting at $149/seat/month</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side — Glassy Dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {/* Main glassy dashboard */}
            <div className="relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 dark:border-white/[0.08] overflow-hidden transition-colors">
              {/* Dashboard header */}
              <div className="bg-gradient-to-r from-[#E89422]/90 to-[#963C00]/90 backdrop-blur-xl p-6 text-white border-b border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <Brain size={22} />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Live Meeting</div>
                      <div className="text-lg">Indulge Insight LLP - Q4 Review</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm">Live</span>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-4" style={{ paddingBottom: '3.5rem' }}>
                {/* Engagement score with animated counter */}
                <div className="bg-gradient-to-br from-amber-50/80 dark:from-[#E89422]/10 to-orange-50/5 dark:to-orange-900/10 backdrop-blur-md p-5 rounded-2xl border border-amber-100/60 dark:border-white/[0.08] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Engagement Score</span>
                    <span className="text-3xl font-bold tabular-nums bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">
                      {displayCount}%
                    </span>
                  </div>
                  <div className="h-3 bg-white/50 dark:bg-white/[0.08] backdrop-blur-sm rounded-full overflow-hidden border border-white/60 dark:border-white/[0.06]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#E89422] to-[#963C00] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                  </div>
                </div>

                {/* Live signals */}
                <div className="space-y-2.5">
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                    className="flex items-center gap-3 p-3.5 bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm border border-green-200/60 dark:border-green-700/40 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Perfect moment detected to discuss pricing</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.62 }}
                    className="flex items-center gap-3 p-3.5 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/40 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">High interest detected in ROI section</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.69 }}
                    className="flex items-center gap-3 p-3.5 bg-amber-50/80 dark:bg-[#E89422]/10 backdrop-blur-sm border border-amber-200/60 dark:border-[#E89422]/30 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#E89422] rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Prospect leaning forward - engagement spike</span>
                  </motion.div>
                </div>

                {/* Participant emotions */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { emoji: '😊', label: 'Positive', delay: 0.72 },
                    { emoji: '🤔', label: 'Curious', delay: 0.78 },
                    { emoji: '👍', label: 'Engaged', delay: 0.84 }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1], delay: item.delay }}
                      className="text-center p-3.5 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/70 dark:border-white/[0.08] shadow-sm transition-colors"
                    >
                      <div className="text-2xl mb-1">
                        {item.emoji}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat card — bottom left */}
            <motion.div
              className="hidden sm:block absolute -bottom-6 -left-6 bg-white/70 dark:bg-gray-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/80 dark:border-white/[0.08] transition-colors"
              initial={{ opacity: 0, scale: 0.92, x: 12, y: 6 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              <div>
                <div className="text-3xl mb-1 font-bold bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">43</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">Perfect Moments</div>
              </div>
            </motion.div>

            {/* Floating stat card — top right */}
            <motion.div
              className="hidden sm:block absolute -top-6 -right-6 bg-white/70 dark:bg-gray-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/80 dark:border-white/[0.08] transition-colors"
              initial={{ opacity: 0, scale: 0.92, x: -12, y: -6 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.58 }}
            >
              <div>
                <div className="text-3xl mb-1 font-bold bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">14hrs</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">Saved/Week</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Close video"
            >
              <X size={20} className="text-white" />
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/SWFSRVs4fHI?autoplay=1&enablejsapi=1&modestbranding=1&rel=0&origin=https://nimitai.com"
              title="Nimitai Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder="0"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}
