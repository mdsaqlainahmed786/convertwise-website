import { Search, Zap, Eye, ArrowRight, TrendingUp, Users, Brain, X, BarChart3, Target, Activity, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { CircuitBoard } from './backgrounds/CircuitBoard';
import { DataStream } from './backgrounds/DataStream';

export function ThreeAgents() {
  const [activeModal, setActiveModal] = useState<'audit' | 'prep' | 'live' | null>(null);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 relative overflow-hidden transition-colors">
        {/* AI-themed background layers */}
        <CircuitBoard />
        <DataStream />
        
        {/* Animated background grid */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full transition-colors">
              <Brain className="text-purple-600 dark:text-purple-400" size={16} />
              <span className="text-purple-700 dark:text-purple-300">AI-Powered Intelligence</span>
            </div>
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-r from-gray-900 dark:from-white to-gray-600 dark:to-gray-400 bg-clip-text text-transparent">
              Three Agents. One Unfair Advantage.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              AI that reads the room and optimizes every moment
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <AgentCard
              icon={<Search size={32} />}
              title="Audit Agent"
              subtitle="Before You Even Book The Call"
              description="Analyzes your current pitch deck, demo flow, and past meeting recordings to identify weak points and optimization opportunities."
              stat="34% → 55%"
              statLabel="Confidence improvement"
              color="purple"
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
              color="purple"
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
  color: 'purple' | 'orange';
  visual: React.ReactNode;
  onExplore: () => void;
}) {
  const bgColor = color === 'purple' ? 'bg-purple-600' : 'bg-orange-500';
  const gradientFrom = color === 'purple' ? 'from-purple-600' : 'from-orange-500';
  const gradientTo = color === 'purple' ? 'to-purple-800' : 'to-orange-700';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 dark:from-gray-700 to-gray-100 dark:to-gray-800">
        {visual}
      </div>

      <div className="p-8 relative">
        <div className={`inline-flex p-3 ${bgColor} text-white rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="mb-2">{title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">{subtitle}</p>
        <p className="mb-6 text-gray-700 dark:text-gray-300">{description}</p>
        
        <div className={`pt-6 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-clip-text`}>
          <div className="text-3xl mb-1 text-transparent">{stat}</div>
          <div className="text-gray-600 dark:text-gray-400">{statLabel}</div>
        </div>
        
        <button 
          onClick={onExplore}
          className={`mt-6 text-${color === 'purple' ? 'purple' : 'orange'}-600 hover:text-${color === 'purple' ? 'purple' : 'orange'}-700 flex items-center gap-2 group-hover:gap-3 transition-all`}
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
          <div className="w-16 h-2 bg-purple-200 rounded-full"></div>
          <div className="w-8 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-4 h-2 bg-purple-600 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-12 h-2 bg-purple-300 rounded-full"></div>
          <div className="w-16 h-2 bg-purple-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-20 h-2 bg-purple-600 rounded-full"></div>
          <div className="w-4 h-2 bg-purple-300 rounded-full"></div>
        </div>
        <div className="mt-4 p-3 bg-purple-100 rounded-lg border-l-4 border-purple-600">
          <div className="text-xs text-purple-700">Weak Point Detected</div>
        </div>
      </div>
    </div>
  );
}

function PrepVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="bg-orange-100 p-3 rounded-lg">
          <Users size={20} className="text-orange-600 mb-2" />
          <div className="text-xs text-orange-700">Company Intel</div>
        </div>
        <div className="bg-orange-100 p-3 rounded-lg">
          <TrendingUp size={20} className="text-orange-600 mb-2" />
          <div className="text-xs text-orange-700">Growth Signals</div>
        </div>
        <div className="bg-orange-100 p-3 rounded-lg col-span-2">
          <div className="text-xs text-orange-700 mb-2">Battle Card Ready</div>
          <div className="h-1 bg-orange-600 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

function LiveVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="space-y-2 w-full">
        <div className="flex items-center gap-2 p-2 bg-green-100 rounded-lg border-l-4 border-green-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-xs text-green-700">Perfect moment detected</div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-blue-100 rounded-lg border-l-4 border-blue-500">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="text-xs text-blue-700">High engagement</div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-purple-100 rounded-lg border-l-4 border-purple-500">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="text-xs text-purple-700">ROI interest spike</div>
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
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Search size={32} />
              </div>
              <div>
                <h2 className="text-3xl mb-2">Audit Agent</h2>
                <p className="text-purple-100">Before You Even Book The Call</p>
                <p className="text-sm text-purple-200 mt-2">
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
        <div className="p-8 space-y-8">
          {/* Audit Insights */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Audit Insights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <InsightCard
                icon={<Activity className="text-purple-600" size={20} />}
                title="Timing Audit"
                content="Your demos run 47 min avg. Best converters close at 32 min."
                color="purple"
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
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Confidence Score</h3>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-5xl mb-2 text-gray-400 dark:text-gray-500">34%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">baseline</div>
              </div>
              <div className="text-4xl text-purple-600 dark:text-purple-400">→</div>
              <div className="text-center">
                <div className="text-5xl mb-2 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-orange-500 dark:to-orange-400 bg-clip-text text-transparent">55%</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">with ConvertWise</div>
              </div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-purple-600 dark:from-purple-400 to-orange-500 dark:to-orange-400 rounded-full" style={{ width: '55%' }}></div>
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
                icon={<Eye className="text-purple-600" size={24} />}
                title="Audio-Visual Emotion Detection"
                description="Real-time scoring across 14 behavioral dimensions"
              />
              <CapabilityCard
                icon={<BarChart3 className="text-orange-600" size={24} />}
                title="Intent Probability Scoring"
                description="Predicts close/objection using 127 micro-signals"
              />
              <CapabilityCard
                icon={<Activity className="text-purple-600" size={24} />}
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
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-700 text-white p-8 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Zap size={32} />
              </div>
              <div>
                <h2 className="text-3xl mb-2">Prep Agent</h2>
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
        <div className="p-8 space-y-8">
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
                icon={<Target className="text-purple-600" size={24} />}
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
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Confidence Score</h3>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-5xl mb-2 text-gray-400 dark:text-gray-500">55%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">after audit</div>
              </div>
              <div className="text-4xl text-orange-600 dark:text-orange-400">→</div>
              <div className="text-center">
                <div className="text-5xl mb-2 bg-gradient-to-r from-orange-500 dark:from-orange-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">78%</div>
                <div className="text-sm text-orange-600 dark:text-orange-400">after prep</div>
              </div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-orange-500 dark:from-orange-400 to-purple-600 dark:to-purple-400 rounded-full" style={{ width: '78%' }}></div>
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
                icon={<Brain className="text-purple-600" size={24} />}
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
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-purple-700 to-orange-600 text-white p-8 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Eye size={32} />
              </div>
              <div>
                <h2 className="text-3xl mb-2">Live Agent</h2>
                <p className="text-purple-100">Real-Time Coaching While You're In The Room</p>
                <p className="text-sm text-purple-200 mt-2">
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
        <div className="p-8 space-y-8">
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
          <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 rounded-2xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Live Confidence Score</h3>
            <div className="text-center mb-6">
              <div className="text-6xl mb-2 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-orange-500 dark:to-orange-400 bg-clip-text text-transparent">87%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Current meeting confidence</div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-purple-600 dark:from-purple-400 to-orange-500 dark:to-orange-400 rounded-full animate-pulse" style={{ width: '87%' }}></div>
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
                icon={<Eye className="text-purple-600" size={24} />}
                title="Facial Expression Analysis"
                description="Detects micro-expressions, attention levels, and emotional states"
              />
              <CapabilityCard
                icon={<Activity className="text-orange-600" size={24} />}
                title="Engagement Tracking"
                description="Monitors body language, nodding, leaning, and participation patterns"
              />
              <CapabilityCard
                icon={<Zap className="text-purple-600" size={24} />}
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
    purple: { bg: 'from-purple-50 dark:from-purple-900/30 to-purple-100 dark:to-purple-800/30', border: 'border-purple-200 dark:border-purple-700' },
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
    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 dark:from-gray-800 to-white dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 dark:from-purple-900/50 to-orange-100 dark:to-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
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
        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 dark:from-orange-900/50 to-purple-100 dark:to-purple-900/50 rounded-xl flex items-center justify-center">
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