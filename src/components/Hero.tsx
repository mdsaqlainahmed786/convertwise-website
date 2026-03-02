import { useState } from 'react';
import { Play, Sparkles, Zap, Brain, Target, Users, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,148,34,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,148,34,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />
      <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-amber-300 rounded-full blur-[130px] opacity-35" />
      <div className="absolute -bottom-24 -left-24 w-[650px] h-[650px] bg-orange-300 rounded-full blur-[130px] opacity-28" />
      <div className="absolute top-1/3 -left-16 w-[420px] h-[420px] bg-amber-200 rounded-full blur-[100px] opacity-22" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-orange-200 rounded-full blur-[90px] opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,148,34,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Left content — static */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-[#E89422]/10 backdrop-blur-sm border border-[#E89422]/30 dark:border-[#E89422]/30 rounded-full shadow-lg transition-colors">
              <Sparkles className="text-[#E89422]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-xs tracking-wider uppercase">AI Meeting Intelligence Platform</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-br from-gray-900 dark:from-white via-[#C47010] dark:via-[#F5B040] to-[#E89422] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight mb-6">
              The AI Meeting Intelligence Platform Built for B2B Sales Teams.
            </h1>

            <p className="mb-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
              Record every call. Analyze every signal. Coach every rep — in real time.
            </p>

            <p className="mb-6 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Nimitai is an AI conversation intelligence platform built exclusively for B2B sales teams. Sales managers and founders use Nimitai to detect buyer emotion and purchase signals in real time, auto-generate battle cards before each call, and audit pitch quality — so every rep operates at your best rep's level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#waitlist"
                className="group px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full flex items-center justify-center gap-2 shadow-xl hover:opacity-95 transition-opacity"
                aria-label="Apply for Nimitai AI meeting intelligence founding access — waitlist"
              >
                <span>Apply for Founding Access</span>
                <Zap size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white/70 dark:bg-white/[0.06] backdrop-blur-sm border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-white/10 hover:text-white dark:hover:text-white transition-colors flex cursor-pointer items-center justify-center gap-2 shadow-lg"
                aria-label="Watch 2-minute demo of Nimitai conversation intelligence software"
              >
                <Play size={20} aria-hidden="true" />
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            <div className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm border border-white/80 dark:border-white/[0.08] rounded-2xl p-6 shadow-lg transition-colors">
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
            </div>
          </div>

          {/* Right — dashboard, static */}
          <div className="relative">
            <div className="relative bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm rounded-3xl shadow-2xl border border-white/80 dark:border-white/[0.08] overflow-hidden transition-colors">
              <div className="bg-gradient-to-r from-[#E89422]/90 to-[#963C00]/90 backdrop-blur-sm p-6 text-white border-b border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <Brain size={22} />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Live Meeting</div>
                      <div className="text-lg">Indulge Insight LLP - Q4 Review</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm">Live</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4" style={{ paddingBottom: '3.5rem' }}>
                <div className="bg-gradient-to-br from-amber-50/80 dark:from-[#E89422]/10 to-orange-50/5 dark:to-orange-900/10 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/60 dark:border-white/[0.08] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Engagement Score</span>
                    <span className="text-3xl font-bold tabular-nums bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">84%</span>
                  </div>
                  <div className="h-3 bg-white/50 dark:bg-white/[0.08] backdrop-blur-sm rounded-full overflow-hidden border border-white/60 dark:border-white/[0.06]">
                    <div className="h-full w-[87%] bg-gradient-to-r from-[#E89422] to-[#963C00] rounded-full" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 p-3.5 bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm border border-green-200/60 dark:border-green-700/40 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Perfect moment detected to discuss pricing</span>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/40 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">High interest detected in ROI section</span>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 bg-amber-50/80 dark:bg-[#E89422]/10 backdrop-blur-sm border border-amber-200/60 dark:border-[#E89422]/30 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#E89422] rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Prospect leaning forward - engagement spike</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[{ emoji: '😊', label: 'Positive' }, { emoji: '🤔', label: 'Curious' }, { emoji: '👍', label: 'Engaged' }].map((item, i) => (
                    <div
                      key={i}
                      className="text-center p-3.5 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/70 dark:border-white/[0.08] shadow-sm transition-colors"
                    >
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/70 dark:bg-gray-900/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-white/80 dark:border-white/[0.08] transition-colors">
              <div className="text-3xl mb-1 font-bold bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">43</div>
              <div className="text-xs text-gray-700 dark:text-gray-400">Perfect Moments</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/70 dark:bg-gray-900/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-white/80 dark:border-white/[0.08] transition-colors">
              <div className="text-3xl mb-1 font-bold bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">14hrs</div>
              <div className="text-xs text-gray-700 dark:text-gray-400">Saved/Week</div>
            </div>
          </div>
        </motion.div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
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
