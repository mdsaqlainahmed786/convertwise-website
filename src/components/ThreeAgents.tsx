import { Search, Zap, Eye, ArrowRight, TrendingUp, Users, Brain, X, BarChart3, Target, Activity, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { CircuitBoard } from './backgrounds/CircuitBoard';
import { DataStream } from './backgrounds/DataStream';

export function ThreeAgents() {
  const [activeModal, setActiveModal] = useState<'audit' | 'prep' | 'live' | null>(null);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/50 dark:bg-[#0A0400] dark:bg-none relative overflow-hidden transition-colors">
        {/* AI-themed background layers */}
        <CircuitBoard />
        <DataStream />

        {/* Top accent line (dark mode) */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent dark:via-[#E89422]/30" />

        {/* Animated background grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Bottom accent line (dark mode) */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/10 to-transparent dark:via-[#E89422]/25" />

        {/* Static gradient orbs */}
        <div className="absolute -top-10 right-10 w-[600px] h-[600px] bg-amber-200 dark:bg-[#E89422] rounded-full blur-[130px] opacity-25 dark:opacity-[0.09]" />
        <div className="absolute -bottom-10 -left-10 w-[500px] h-[500px] bg-orange-300 dark:bg-[#963C00] rounded-full blur-[130px] opacity-22 dark:opacity-[0.08]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-amber-100 dark:bg-amber-900/20 rounded-full blur-[110px] opacity-18 dark:opacity-[0.07]" />
        {/* Floating sparkles */}
        {[
          { left: '8%', top: '40%', delay: 0 },
          { left: '22%', top: '70%', delay: 0.8 },
          { left: '55%', top: '30%', delay: 1.6 },
          { left: '75%', top: '65%', delay: 0.4 },
          { left: '90%', top: '45%', delay: 1.2 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#E89422] dark:bg-[#E89422]"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -80, -160], opacity: [0, 0.6, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
          />
        ))}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-100 dark:bg-[#E89422]/10 backdrop-blur-sm border border-amber-200 dark:border-[#E89422]/25 rounded-full transition-colors"
              initial={{ opacity: 0, scale: 0.88, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <Brain className="text-[#E89422] dark:text-[#F5B040]" size={16} />
              <span className="text-[#C47010] dark:text-[#F5B040] text-sm tracking-wide">AI-Powered Intelligence</span>
            </motion.div>
            <motion.h2
              className="mb-4 text-4xl sm:text-5xl bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-[#F5B040] dark:to-[#E89422] bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              Three AI Agents.<br />Every Stage of Your Deal Covered.
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 75, damping: 20, delay: 0.2 }}
            >
              Pre-call research, live coaching, and post-call pitch auditing — full-cycle AI conversation intelligence for B2B sales teams.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <AgentCard
              icon={<Search size={32} />}
              title="Audit Agent"
              subtitle="Before You Even Book The Call"
              description="Analyzes your current pitch deck, demo flow, and past meeting recordings to identify weak points and optimization opportunities."
              stat="34% → 55%"
              statLabel="Confidence improvement"
              color="amber"
              visual={<AuditVisual />}
              onExplore={() => setActiveModal('audit')}
            />
            
            <AgentCard
              icon={<Zap size={32} />}
              title="Prep Agent"
              subtitle="Walk Into Every Meeting Like You're Psychic"
              description="Pulls every shred of intel on your prospect and compiles it into a 90-second battle card with talking points and key insights."
              stat="55% → 78%"
              statLabel="Confidence after prep"
              color="orange"
              visual={<PrepVisual />}
              onExplore={() => setActiveModal('prep')}
            />
            
            <AgentCard
              icon={<Eye size={32} />}
              title="Live Agent"
              subtitle="Real-Time Coaching While You're In The Room"
              description="Sits in your meeting window, analyzes facial expressions and engagement signals, alerts you to perfect conversion moments as they happen."
              stat="87%"
              statLabel="Confidence during call"
              color="amber"
              visual={<LiveVisual />}
              onExplore={() => setActiveModal('live')}
            />
          </div>
        </div>
      </section>

      {/* Modals */}
      {activeModal === 'audit' && <AuditModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'prep' && <PrepModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'live' && <LiveModal onClose={() => setActiveModal(null)} />}
    </>
  );
}

function AgentCard({ 
  icon, 
  title, 
  subtitle, 
  description, 
  stat, 
  statLabel, 
  color,
  visual,
  onExplore
}: { 
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  statLabel: string;
  color: 'amber' | 'orange';
  visual: React.ReactNode;
  onExplore: () => void;
}) {
  const bgColor = color === 'amber' ? 'bg-[#E89422]' : 'bg-orange-500';
  const gradientFrom = color === 'amber' ? 'from-[#E89422]' : 'from-[#963C00]';
  const gradientTo = color === 'amber' ? 'to-[#963C00]' : 'to-[#963C00]';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12, scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white dark:bg-white/[0.06] backdrop-blur-md dark:backdrop-blur-xl rounded-3xl overflow-hidden border border-amber-200/60 dark:border-white/[0.09] hover:border-[#E89422]/40 dark:hover:border-[#E89422]/40 shadow-xl shadow-amber-200/30 dark:shadow-black/40 hover:shadow-2xl transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-50/60 dark:from-[#1A1000]/30 to-orange-50/80 dark:to-[#0A0400]/50 border-b border-amber-200/40 dark:border-white/[0.06]">
        {visual}
      </div>

      <div className="p-8 relative">
        <div className={`inline-flex p-3 ${bgColor} text-white rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm font-medium">{subtitle}</p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>

        <div className={`pt-6 border-t border-gray-200 dark:border-white/[0.08] bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-clip-text`}>
          <div className="text-3xl mb-1 text-transparent">{stat}</div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">{statLabel}</div>
        </div>
        
        <button
          onClick={onExplore}
          className="mt-6 text-[#E89422] dark:text-[#F5B040] hover:text-[#C47010] dark:hover:text-[#E89422] flex items-center gap-2 group-hover:gap-3 transition-all text-sm font-medium"
        >
          <span>Explore More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

function AuditVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="space-y-3 w-full">
        <div className="flex items-center gap-2">
          <div className="w-16 h-2 bg-amber-200 rounded-full"></div>
          <div className="w-8 h-2 bg-[#F5B040] rounded-full"></div>
          <div className="w-4 h-2 bg-[#E89422] rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-12 h-2 bg-amber-300 rounded-full"></div>
          <div className="w-16 h-2 bg-[#E89422] rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-[#F5B040] rounded-full"></div>
          <div className="w-20 h-2 bg-[#E89422] rounded-full"></div>
          <div className="w-4 h-2 bg-amber-300 rounded-full"></div>
        </div>
        <div className="mt-4 p-3 bg-amber-100 dark:bg-[#E89422]/20 rounded-lg border-l-4 border-[#E89422]">
          <div className="text-xs text-[#C47010] dark:text-[#F5B040] font-medium">Weak Point Detected</div>
        </div>
      </div>
    </div>
  );
}

function PrepVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="bg-orange-100 dark:bg-[#963C00]/20 p-3 rounded-lg border border-transparent dark:border-[#963C00]/30">
          <Users size={20} className="text-orange-600 dark:text-orange-300 mb-2" />
          <div className="text-xs text-orange-700 dark:text-orange-200 font-medium">Company Intel</div>
        </div>
        <div className="bg-orange-100 dark:bg-[#963C00]/20 p-3 rounded-lg border border-transparent dark:border-[#963C00]/30">
          <TrendingUp size={20} className="text-orange-600 dark:text-orange-300 mb-2" />
          <div className="text-xs text-orange-700 dark:text-orange-200 font-medium">Growth Signals</div>
        </div>
        <div className="bg-orange-100 dark:bg-[#963C00]/20 p-3 rounded-lg col-span-2 border border-transparent dark:border-[#963C00]/30">
          <div className="text-xs text-orange-700 dark:text-orange-200 mb-2 font-medium">Battle Card Ready</div>
          <div className="h-1 bg-orange-500 dark:bg-orange-400 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

function LiveVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="space-y-2 w-full">
        <div className="flex items-center gap-2 p-2.5 bg-green-100 dark:bg-green-500/20 rounded-lg border-l-4 border-green-500 dark:border-green-400">
          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="text-xs text-green-700 dark:text-green-300 font-medium">Perfect moment detected</div>
        </div>
        <div className="flex items-center gap-2 p-2.5 bg-blue-100 dark:bg-blue-500/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="text-xs text-blue-700 dark:text-blue-300 font-medium">High engagement</div>
        </div>
        <div className="flex items-center gap-2 p-2.5 bg-amber-100 dark:bg-[#E89422]/20 rounded-lg border-l-4 border-[#E89422]">
          <div className="w-2 h-2 bg-[#E89422] rounded-full animate-pulse flex-shrink-0"></div>
          <div className="text-xs text-[#C47010] dark:text-[#F5B040] font-medium">ROI interest spike</div>
        </div>
      </div>
    </div>
  );
}

// Modal Components
function AuditModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white p-4 sm:p-8 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Search size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl mb-2">Audit Agent</h2>
                <p className="text-amber-100">Before You Even Book The Call</p>
                <p className="text-sm text-[#F5B040] mt-2">
                  Analyzes your current pitch deck, demo flow, and past meeting recordings.
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Audit Insights */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Audit Insights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <InsightCard
                icon={<Activity className="text-[#E89422]" size={20} />}
                title="Timing Audit"
                content="Your demos run 47 min avg. Best converters close at 32 min."
                color="amber"
              />
              <InsightCard
                icon={<Target className="text-orange-600" size={20} />}
                title="Focus Audit"
                content="You spend 18 min on features. Buyers decide in the first 8."
                color="orange"
              />
              <InsightCard
                icon={<AlertCircle className="text-red-600" size={20} />}
                title="Weak Points Flagged"
                content="Slide 7 causes 64% of objections. Reframe or remove."
                color="red"
              />
            </div>
          </div>

          {/* Confidence Score */}
          <div className="bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-orange-50 dark:to-orange-900/20 rounded-2xl p-4 sm:p-8 border-2 border-amber-200 dark:border-amber-800/50">
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Confidence Score</h3>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6 flex-wrap">
              <div className="text-center">
                <div className="text-3xl sm:text-5xl mb-2 text-gray-400 dark:text-gray-500">34%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">baseline</div>
              </div>
              <div className="text-4xl text-[#E89422] dark:text-[#F5B040]">→</div>
              <div className="text-center">
                <div className="text-3xl sm:text-5xl mb-2 bg-gradient-to-r from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-orange-400 bg-clip-text text-transparent">55%</div>
                <div className="text-sm text-[#E89422] dark:text-[#F5B040]">with Nimitai</div>
              </div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-orange-400 rounded-full" style={{ width: '55%' }}></div>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Most reps practice the wrong pitch. You'll practice the one that actually closes.
            </p>
          </div>

          {/* Detailed Capabilities */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Detailed Capabilities</h3>
            <div className="space-y-4">
              <CapabilityCard
                icon={<Eye className="text-[#E89422]" size={24} />}
                title="Audio-Visual Emotion Detection"
                description="Real-time scoring across 14 behavioral dimensions"
              />
              <CapabilityCard
                icon={<BarChart3 className="text-orange-600" size={24} />}
                title="Intent Probability Scoring"
                description="Predicts close/objection using 127 micro-signals"
              />
              <CapabilityCard
                icon={<Activity className="text-[#E89422]" size={24} />}
                title="Non-Verbal Cue Analysis"
                description="Tracks engagement drops and tone shifts in real-time"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrepModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#963C00] to-[#963C00] text-white p-4 sm:p-8 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl mb-2">Prep Agent</h2>
                <p className="text-orange-100">Walk Into Every Meeting Like You're Psychic</p>
                <p className="text-sm text-orange-200 mt-2">
                  Pulls every shred of intel on your prospect and compiles it into a 90-second battle card.
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* What You Get */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">What You Get</h3>
            <div className="space-y-4">
              <WhatYouGetCard
                icon={<FileText className="text-orange-600" size={24} />}
                title="Company Intelligence"
                items={[
                  "Financial records, recent funding",
                  "Tech stack, expansion plans",
                  "Competitor relationships"
                ]}
              />
              <WhatYouGetCard
                icon={<Target className="text-[#E89422]" size={24} />}
                title="Talking Point Library"
                items={[
                  "Pre-loaded ROI stories",
                  "Use case matches",
                  "Competitor positioning",
                  "Implementation timelines"
                ]}
              />
              <WhatYouGetCard
                icon={<Zap className="text-orange-600" size={24} />}
                title="AHA Moments"
                items={[
                  'Personalized one-liners: "I noticed you raised $12M last month—that usually means aggressive hiring..."'
                ]}
              />
            </div>
          </div>

          {/* Confidence Score */}
          <div className="bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-amber-50 dark:to-amber-900/20 rounded-2xl p-8 border-2 border-orange-200 dark:border-orange-800/50">
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Confidence Score</h3>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6 flex-wrap">
              <div className="text-center">
                <div className="text-3xl sm:text-5xl mb-2 text-gray-400 dark:text-gray-500">55%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">after audit</div>
              </div>
              <div className="text-4xl text-orange-600 dark:text-orange-400">→</div>
              <div className="text-center">
                <div className="text-3xl sm:text-5xl mb-2 bg-gradient-to-r from-orange-500 dark:from-[#963C00] to-[#963C00] dark:to-[#F5B040] bg-clip-text text-transparent">78%</div>
                <div className="text-sm text-orange-600 dark:text-orange-400">after prep</div>
              </div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-orange-500 dark:from-[#963C00] to-[#963C00] dark:to-[#F5B040] rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Walk in knowing more about them than they know about themselves.
            </p>
          </div>

          {/* Detailed Capabilities */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Detailed Capabilities</h3>
            <div className="space-y-4">
              <CapabilityCard
                icon={<Users className="text-orange-600" size={24} />}
                title="Deep Company Research"
                description="Scans public records, news, social media, and financial databases"
              />
              <CapabilityCard
                icon={<Brain className="text-[#E89422]" size={24} />}
                title="Intelligent Pattern Matching"
                description="Matches prospect profile to successful past deals"
              />
              <CapabilityCard
                icon={<FileText className="text-orange-600" size={24} />}
                title="Battle Card Generation"
                description="Automated brief with talking points, objections, and close strategies"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#E89422] via-[#C47010] to-orange-600 text-white p-4 sm:p-8 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Eye size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl mb-2">Live Agent</h2>
                <p className="text-amber-100">Real-Time Coaching While You're In The Room</p>
                <p className="text-sm text-[#F5B040] mt-2">
                  Sits in your meeting window, analyzes facial expressions and engagement signals.
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Live Signals */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Real-Time Signals</h3>
            <div className="space-y-3">
              <LiveSignalCard
                type="success"
                title="Perfect Moment Detected"
                description="Buyer showing strong purchase intent signals"
                time="Now"
              />
              <LiveSignalCard
                type="info"
                title="Engagement Spike"
                description="High interest in ROI discussion"
                time="2m ago"
              />
              <LiveSignalCard
                type="warning"
                title="Objection Forming"
                description="Hesitation detected on pricing topic"
                time="5m ago"
              />
            </div>
          </div>

          {/* Confidence Score */}
          <div className="bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-800/50 to-orange-50 dark:to-orange-900/20 rounded-2xl p-4 sm:p-8 border-2 border-amber-200 dark:border-amber-800/50">
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Live Confidence Score</h3>
            <div className="text-center mb-6">
              <div className="text-6xl mb-2 bg-gradient-to-r from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-orange-400 bg-clip-text text-transparent">87%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Current meeting confidence</div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-orange-400 rounded-full animate-pulse" style={{ width: '87%' }}></div>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Live coaching keeps you on track when it matters most.
            </p>
          </div>

          {/* Detailed Capabilities */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Detailed Capabilities</h3>
            <div className="space-y-4">
              <CapabilityCard
                icon={<Eye className="text-[#E89422]" size={24} />}
                title="Facial Expression Analysis"
                description="Detects micro-expressions, attention levels, and emotional states"
              />
              <CapabilityCard
                icon={<Activity className="text-orange-600" size={24} />}
                title="Engagement Tracking"
                description="Monitors body language, nodding, leaning, and participation patterns"
              />
              <CapabilityCard
                icon={<Zap className="text-[#E89422]" size={24} />}
                title="Moment Detection"
                description="Alerts you to perfect timing for pricing, demos, or closing"
              />
              <CapabilityCard
                icon={<BarChart3 className="text-orange-600" size={24} />}
                title="Live Scoring"
                description="Real-time probability scores for close, stall, or objection"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function InsightCard({ icon, title, content, color }: { icon: React.ReactNode; title: string; content: string; color: string }) {
  const colorMap: Record<string, { bg: string; border: string }> = {
    amber: { bg: 'from-amber-50 dark:from-[#1A1000]/30 to-amber-100 dark:to-[#963C00]/30', border: 'border-amber-200 dark:border-[#C47010]' },
    orange: { bg: 'from-orange-50 dark:from-orange-900/30 to-orange-100 dark:to-orange-800/30', border: 'border-orange-200 dark:border-orange-700' },
    red: { bg: 'from-red-50 dark:from-red-900/30 to-red-100 dark:to-red-800/30', border: 'border-red-200 dark:border-red-700' }
  };
  
  return (
    <div className={`bg-gradient-to-br ${colorMap[color].bg} border-2 ${colorMap[color].border} rounded-xl p-4 transition-colors`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="text-sm text-gray-900 dark:text-white">{title}</h4>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
}

function CapabilityCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 dark:from-gray-800 to-white dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-[#E89422] hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 dark:from-[#1A1000]/50 to-orange-100 dark:to-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="mb-1 text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function WhatYouGetCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="bg-gradient-to-br from-white dark:from-gray-800 to-gray-50 dark:to-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 dark:from-orange-900/50 to-amber-100 dark:to-[#1A1000]/50 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h4 className="text-xl text-gray-900 dark:text-white">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LiveSignalCard({ type, title, description, time }: { type: 'success' | 'info' | 'warning'; title: string; description: string; time: string }) {
  const typeMap = {
    success: { bg: 'from-green-50 dark:from-green-900/30 to-green-100 dark:to-green-800/30', border: 'border-green-300 dark:border-green-700', icon: 'text-green-600 dark:text-green-400', dot: 'bg-green-500 dark:bg-green-400' },
    info: { bg: 'from-blue-50 dark:from-blue-900/30 to-blue-100 dark:to-blue-800/30', border: 'border-blue-300 dark:border-blue-700', icon: 'text-blue-600 dark:text-blue-400', dot: 'bg-blue-500 dark:bg-blue-400' },
    warning: { bg: 'from-orange-50 dark:from-orange-900/30 to-orange-100 dark:to-orange-800/30', border: 'border-orange-300 dark:border-orange-700', icon: 'text-orange-600 dark:text-orange-400', dot: 'bg-orange-500 dark:bg-orange-400' }
  };
  
  const colors = typeMap[type];
  
  return (
    <div className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-4 transition-colors`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className={`w-2 h-2 ${colors.dot} rounded-full animate-pulse mt-2`}></div>
          <div>
            <h4 className={`mb-1 ${colors.icon}`}>{title}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
      </div>
    </div>
  );
}