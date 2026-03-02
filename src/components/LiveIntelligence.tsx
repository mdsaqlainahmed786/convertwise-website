import { Activity, Eye, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function LiveIntelligence() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070B18] text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/30 to-transparent" />

      {/* Static gradient orbs */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] bg-[#E89422] rounded-full blur-[180px] opacity-[0.09]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#963C00] rounded-full blur-[160px] opacity-[0.08]" />
      <div className="absolute top-1/2 -right-24 w-[500px] h-[400px] bg-amber-700 rounded-full blur-[140px] opacity-[0.07]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#E89422]/10 backdrop-blur-sm border border-[#E89422]/25 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            >
              <Activity className="text-[#F5B040]" size={14} />
              <span className="text-[#F5B040] text-sm tracking-wide">Live Meeting Intelligence</span>
            </motion.div>

            <motion.h2
              className="mb-6 text-4xl sm:text-5xl leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              Real-Time Conversation Intelligence{' '}
              <span className="bg-gradient-to-r from-[#F5B040] to-[#E89422] bg-clip-text text-transparent">
                That Reads Every Buyer
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.2 }}
            >
              Nimitai's Live Agent detects emotional shifts and buying signals during active calls — surfacing real-time coaching prompts before the opportunity passes. Every pause, spark of interest, or confidence dip is measured and acted on, so your reps always know the exact moment to lean in, pivot, or close.
            </motion.p>

            {/* Feature list */}
            <div className="space-y-3">
              {[
                {
                  icon: <Eye className="text-[#F5B040]" size={20} />,
                  bg: 'bg-[#E89422]/15',
                  title: 'Real-Time Emotion Detection',
                  desc: 'Track micro-expressions and body language signals',
                  delay: 0.25,
                },
                {
                  icon: <TrendingUp className="text-orange-400" size={20} />,
                  bg: 'bg-orange-500/15',
                  title: 'Engagement Scoring',
                  desc: 'Live confidence metrics for every participant',
                  delay: 0.35,
                },
                {
                  icon: <AlertCircle className="text-green-400" size={20} />,
                  bg: 'bg-green-500/15',
                  title: 'Perfect Moment Alerts',
                  desc: 'Get notified when it\'s time to close or pivot',
                  delay: 0.45,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white/[0.04] backdrop-blur-md rounded-xl border border-white/[0.08] hover:bg-white/[0.07] hover:border-[#E89422]/20 transition-all"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: item.delay }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-white/90">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-[#E89422]/10 rounded-3xl blur-2xl scale-95 pointer-events-none" />

            {/* Main dashboard */}
            <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
              {/* Inner top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/30 to-transparent" />

              {/* Dashboard header */}
              <div className="bg-gradient-to-r from-[#E89422] to-[#963C00] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Activity size={20} />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Live Analysis</div>
                      <div className="text-xs opacity-75">Enterprise Demo Call</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm">Recording</span>
                  </div>
                </div>
              </div>

              {/* Meeting participants */}
              <div className="p-4 border-b border-white/[0.08]">
                <div className="text-sm text-gray-400 mb-3">Participants (4)</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <ParticipantCard name="Archit" emotion="😊" engagement={92} color="green" />
                  <ParticipantCard name="Shreedhar" emotion="🤔" engagement={78} color="blue" />
                  <ParticipantCard name="Lisa" emotion="👍" engagement={85} color="amber" />
                  <ParticipantCard name="Ishika" emotion="😐" engagement={65} color="orange" />
                </div>
              </div>

              {/* Live signals */}
              <div className="p-4 space-y-2">
                <div className="text-sm text-gray-400 mb-3">Live Signals</div>

                <div className="flex items-start gap-3 p-3 bg-green-500/15 border border-green-500/25 rounded-xl">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                  <div className="flex-1">
                    <div className="text-sm text-green-300">Perfect Closing Moment</div>
                    <div className="text-xs text-green-400/70 mt-1">Sarah shows strong buying signals</div>
                  </div>
                  <div className="text-xs text-green-400">Now</div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-500/15 border border-blue-500/25 rounded-xl">
                  <TrendingUp className="text-blue-400 flex-shrink-0" size={16} />
                  <div className="flex-1">
                    <div className="text-sm text-blue-300">Engagement Spike</div>
                    <div className="text-xs text-blue-400/70 mt-1">High interest in ROI metrics</div>
                  </div>
                  <div className="text-xs text-blue-400">2m ago</div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-orange-500/15 border border-orange-500/25 rounded-xl">
                  <AlertCircle className="text-orange-400 flex-shrink-0" size={16} />
                  <div className="flex-1">
                    <div className="text-sm text-orange-300">Attention Dip</div>
                    <div className="text-xs text-orange-400/70 mt-1">Consider changing topic</div>
                  </div>
                  <div className="text-xs text-orange-400">5m ago</div>
                </div>
              </div>

              {/* Overall metrics */}
              <div className="p-4 bg-white/[0.03] border-t border-white/[0.06]">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl text-[#F5B040] mb-1">87%</div>
                    <div className="text-xs text-gray-500">Avg Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-orange-400 mb-1">12</div>
                    <div className="text-xs text-gray-500">Key Moments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-green-400 mb-1">23m</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-gradient-to-br from-[#E89422] to-[#963C00] p-4 rounded-2xl shadow-2xl border border-[#E89422]/30">
              <div className="text-3xl mb-1">43</div>
              <div className="text-xs text-[#F5B040]">Moments Detected</div>
            </div>

            <div className="hidden sm:block absolute -top-6 -right-6 bg-gradient-to-br from-[#963C00] to-[#963C00] p-4 rounded-2xl shadow-2xl border border-orange-400/30">
              <div className="text-3xl mb-1">92%</div>
              <div className="text-xs text-orange-200">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent" />
    </section>
  );
}

function ParticipantCard({
  name,
  emotion,
  engagement,
  color,
}: {
  name: string;
  emotion: string;
  engagement: number;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    green: 'from-green-500 to-green-600',
    blue: 'from-blue-500 to-blue-600',
    amber: 'from-[#E89422] to-[#963C00]',
    orange: 'from-[#963C00] to-[#963C00]',
  };

  return (
    <div className="bg-white/[0.04] backdrop-blur-sm rounded-xl p-3 text-center border border-white/[0.08]">
      <div className="text-2xl mb-1">{emotion}</div>
      <div className="text-xs text-white/80 mb-2">{name}</div>
      <div className={`text-xs bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent font-semibold`}>
        {engagement}%
      </div>
    </div>
  );
}
