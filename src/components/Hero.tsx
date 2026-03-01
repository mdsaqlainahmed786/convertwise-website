import { useState, useEffect } from 'react';
import { Play, Sparkles, TrendingUp, Zap, Brain, Target, Users, X } from 'lucide-react';
import { motion, animate as motionAnimate } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const animation = motionAnimate(0, 84, {
      duration: 2.5,
      delay: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v: number) => setDisplayCount(Math.round(v)),
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

      {/* ── Mesh gradient orbs ─────────────────────────── */}
      {/* Orb 1 — amber, top-right */}
      <motion.div
        className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-amber-300 rounded-full blur-[130px] opacity-35"
        animate={{ scale: [1, 1.18, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orb 2 — orange, bottom-left */}
      <motion.div
        className="absolute -bottom-24 -left-24 w-[650px] h-[650px] bg-orange-300 rounded-full blur-[130px] opacity-28"
        animate={{ scale: [1.12, 1, 1.12], x: [0, -40, 0], y: [0, 35, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Orb 3 — amber soft, center-left */}
      <motion.div
        className="absolute top-1/3 -left-16 w-[420px] h-[420px] bg-amber-200 rounded-full blur-[100px] opacity-22"
        animate={{ scale: [1, 1.22, 1], x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      {/* Orb 4 — orange light, bottom-right */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-orange-200 rounded-full blur-[90px] opacity-20"
        animate={{ scale: [1.1, 0.9, 1.1], x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Radial centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,148,34,0.06) 0%, transparent 70%)' }}
      />
      {/* Floating sparkle particles */}
      {[
        { left: '12%', top: '55%', delay: 0 },
        { left: '25%', top: '65%', delay: 1.1 },
        { left: '38%', top: '70%', delay: 0.6 },
        { left: '52%', top: '60%', delay: 1.8 },
        { left: '65%', top: '72%', delay: 0.3 },
        { left: '78%', top: '58%', delay: 1.4 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#E89422]"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -90, -180], opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="relative">
            {/* Pulsing ring accents */}
            <motion.div
              className="absolute top-0 left-1/3 w-24 h-24 border border-amber-300/20 rounded-full"
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-16 h-16 border border-orange-300/20 rounded-full"
              animate={{ scale: [1, 2.8], opacity: [0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-[#E89422]/10 backdrop-blur-md border border-[#E89422]/30 dark:border-[#E89422]/30 rounded-full shadow-lg relative transition-colors"
            >
              <Sparkles className="text-[#E89422]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-xs tracking-wider uppercase">AI Meeting Intelligence Platform</span>
            </motion.div>

            {/* H1 */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-br from-gray-900 dark:from-white via-[#C47010] dark:via-[#F5B040] to-[#E89422] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.2 }}
              >
                The AI Meeting Intelligence Platform Built for B2B Sales Teams.
              </motion.h1>
            </div>

            <motion.p
              className="mb-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.85 }}
            >
              Record every call. Analyze every signal. Coach every rep — in real time.
            </motion.p>

            <motion.p
              className="mb-6 text-base text-gray-500 dark:text-gray-400 relative leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.95 }}
            >
              Nimitai is an AI conversation intelligence platform built exclusively for B2B sales teams. Sales managers and founders use Nimitai to detect buyer emotion and purchase signals in real time, auto-generate battle cards before each call, and audit pitch quality — so every rep operates at your best rep's level.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 relative"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.15 }}
            >
              <motion.a
                href="#waitlist"
                className="group px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full flex items-center justify-center gap-2 shadow-xl"
                aria-label="Apply for Nimitai AI meeting intelligence founding access — waitlist"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    "0 8px 25px rgba(232,148,34,0.3)",
                    "0 12px 45px rgba(232,148,34,0.65)",
                    "0 8px 25px rgba(232,148,34,0.3)",
                  ]
                }}
                transition={{
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <span>Apply for Founding Access</span>
                <Zap size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
              </motion.a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white/70 dark:bg-white/[0.06] backdrop-blur-md border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-white/10 hover:text-white dark:hover:text-white transition-all flex cursor-pointer items-center justify-center gap-2 shadow-lg"
                aria-label="Watch 2-minute demo of Nimitai conversation intelligence software"
              >
                <Play size={20} aria-hidden="true" />
                <span>Watch 2-Min Demo</span>
              </button>
            </motion.div>

            {/* Trust indicators in glass panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 1.35 }}
              className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/80 dark:border-white/[0.08] rounded-2xl p-6 shadow-lg relative transition-colors"
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <span>Private beta · waitlist open</span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-white/10" />
                <div className="flex items-center gap-2">
                  <Users className="text-[#E89422]" size={18} />
                  <span>412+ founders on waitlist</span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-white/10" />
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
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 55, damping: 20, delay: 0.4 }}
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
                      transition={{ duration: 1.8, delay: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                  </div>
                </div>

                {/* Live signals */}
                <div className="space-y-2.5">
                  <motion.div
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.8 }}
                    className="flex items-center gap-3 p-3.5 bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm border border-green-200/60 dark:border-green-700/40 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Perfect moment detected to discuss pricing</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.95 }}
                    className="flex items-center gap-3 p-3.5 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/40 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">High interest detected in ROI section</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ type: "spring", stiffness: 120, damping: 22, delay: 1.1 }}
                    className="flex items-center gap-3 p-3.5 bg-amber-50/80 dark:bg-[#E89422]/10 backdrop-blur-sm border border-amber-200/60 dark:border-[#E89422]/30 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#E89422] rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Prospect leaning forward - engagement spike</span>
                  </motion.div>
                </div>

                {/* Participant emotions */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { emoji: '😊', label: 'Positive', delay: 1.25 },
                    { emoji: '🤔', label: 'Curious', delay: 1.35 },
                    { emoji: '👍', label: 'Engaged', delay: 1.45 }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 14, delay: item.delay }}
                      className="text-center p-3.5 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/70 dark:border-white/[0.08] shadow-sm transition-colors"
                    >
                      <motion.div
                        className="text-2xl mb-1"
                        animate={{ scale: [1, 1.18, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      >
                        {item.emoji}
                      </motion.div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat card — bottom left */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/70 dark:bg-gray-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/80 dark:border-white/[0.08] transition-colors"
              initial={{ opacity: 0, scale: 0.75, x: 20, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 14, delay: 1.0 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, -0.5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl mb-1 font-bold bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">43</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">Perfect Moments</div>
              </motion.div>
            </motion.div>

            {/* Floating stat card — top right */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white/70 dark:bg-gray-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/80 dark:border-white/[0.08] transition-colors"
              initial={{ opacity: 0, scale: 0.75, x: -20, y: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 14, delay: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -1.5, 0.8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="text-3xl mb-1 font-bold bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">14hrs</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">Saved/Week</div>
              </motion.div>
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
