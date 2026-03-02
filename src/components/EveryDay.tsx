'use client';

import { Clock, MessageSquare, XCircle, Eye, CheckCircle, TrendingDown, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EveryDay() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0400] text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/30 to-transparent" />

      {/* Static gradient orbs */}
      <div className="absolute -top-32 right-0 w-[700px] h-[700px] bg-[#E89422] rounded-full blur-[180px] opacity-[0.08]" />
      <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] bg-[#963C00] rounded-full blur-[160px] opacity-[0.07]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-red-800 rounded-full blur-[150px] opacity-[0.06]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/15 backdrop-blur-sm rounded-full border border-red-500/25">
            <AlertCircle className="text-red-400" size={14} />
            <span className="text-red-300 text-sm">The Painful Truth</span>
          </div>

          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-5xl mx-auto">
            Every Day You Wait,{' '}
            <span className="bg-gradient-to-r from-[#963C00] to-red-400 bg-clip-text text-transparent">
              Someone Else Closes The Deal
            </span>{' '}
            You Could've Won
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E89422]/10 rounded-3xl blur-xl" />
              <div className="relative bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-xl flex items-center justify-center">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-2xl">You know the feeling:</h3>
                </div>

                <div className="aspect-video bg-gradient-to-br from-[#0A0400]/40 to-amber-900/40 rounded-2xl overflow-hidden mb-6 border border-[#E89422]/15">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzY1MTkzODM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Successful business deal closed with AI sales automation and meeting intelligence software"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-white">Perfect prospect</p>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-white">Great conversation</p>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <p className="text-gray-300">"We need to think about it..."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Reality */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/15 rounded-3xl blur-xl" />
              <div className="relative bg-red-500/[0.08] backdrop-blur-sm border border-red-500/25 rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                    <XCircle size={24} />
                  </div>
                  <h3 className="text-2xl">Three weeks later:</h3>
                </div>

                <div className="aspect-video bg-gradient-to-br from-red-900/40 to-gray-900/60 rounded-2xl overflow-hidden mb-6 border border-red-500/25 relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758525747606-9e2676af8234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3NlZCUyMGJ1c2luZXNzbWFuJTIwZnJ1c3RyYXRlZHxlbnwxfHx8fDE3NjUxNzk1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sales professional struggling without AI sales automation tools and meeting intelligence software"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <XCircle className="text-red-400 mx-auto mb-2" size={48} />
                      <p className="text-red-300 font-semibold tracking-widest text-sm">LOST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/15 backdrop-blur-sm border border-red-500/25 rounded-xl p-6 text-center">
                  <p className="text-2xl text-red-200">"We went with someone else."</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Critical Moment */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/15 rounded-3xl blur-2xl" />
            <div className="relative bg-white/[0.04] backdrop-blur-sm border border-orange-500/25 rounded-3xl p-8 sm:p-12">
              {/* Inner top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#963C00]/30 to-transparent rounded-t-3xl" />

              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <TrendingDown className="text-orange-400" size={32} />
                  <h3 className="text-3xl sm:text-4xl">That deal didn't die in week 3.</h3>
                </div>
                <p className="text-xl text-orange-300">It died in the first 15 minutes of your demo.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CriticalMoment icon={<Clock size={28} />} moment="Minute 14" issue="You talked too long" color="orange" delay={0.55} />
                <CriticalMoment icon={<MessageSquare size={28} />} moment="The Pause" issue="You missed their objection" color="red" delay={0.65} />
                <CriticalMoment icon={<Eye size={28} />} moment="The Signal" issue="You didn't see the moment" color="amber" delay={0.75} />
                <CriticalMoment icon={<XCircle size={28} />} moment="The Close" issue="You hesitated when they were ready" color="red" delay={0.85} />
              </div>
            </div>
          </div>
        </div>

        {/* The Solution CTA */}
        <div className="relative">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-500 to-amber-300 rounded-full blur-[100px] opacity-20"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-br from-[#963C00] to-[#E89422] rounded-full blur-[110px] opacity-15"
            aria-hidden
          />

          <div className="relative bg-white/[0.05] backdrop-blur-sm border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            {/* Inner top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/35 to-transparent" />

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E89422]/10 backdrop-blur-sm border border-[#E89422]/25 rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-[#F5B040]">AI-Powered Intelligence</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                  Nimitai's AI detects the signal.
                </h3>

                <p className="text-2xl sm:text-3xl bg-gradient-to-r from-[#F5B040] to-[#E89422] bg-clip-text text-transparent mb-8">
                  And tells your rep exactly what to do next.
                </p>

                <div className="space-y-3">
                  {[
                    { dot: 'bg-green-400', text: 'Real-time buying signal alerts' },
                    { dot: 'bg-blue-400', text: 'Live AI coaching prompts' },
                    { dot: 'bg-[#F5B040]', text: 'Never miss a close moment again' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl hover:bg-white/[0.07] hover:border-[#E89422]/20 transition-colors"
                    >
                      <div className={`w-2 h-2 ${item.dot} rounded-full`} />
                      <span className="text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760346547318-7e309662467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHZpZGVvJTIwY2FsbCUyMG1lZXRpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY1MjgyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Real-time meeting intelligence software analyzing video call with AI sales automation and live coaching"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0400]/60 via-transparent to-transparent" />

                  <div className="absolute top-6 left-6 bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-sm">Perfect moment detected</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-sm">High engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent" />
    </section>
  );
}

function CriticalMoment({
  icon,
  moment,
  issue,
  color,
  delay,
}: {
  icon: React.ReactNode;
  moment: string;
  issue: string;
  color: 'orange' | 'red' | 'amber';
  delay: number;
}) {
  const colorMap = {
    orange: { bg: 'from-[#963C00] to-[#963C00]', text: 'text-orange-300', border: 'border-orange-500/25', bgOpacity: 'bg-orange-500/[0.08]' },
    red: { bg: 'from-red-500 to-red-700', text: 'text-red-300', border: 'border-red-500/25', bgOpacity: 'bg-red-500/[0.08]' },
    amber: { bg: 'from-[#E89422] to-[#963C00]', text: 'text-[#F5B040]', border: 'border-[#E89422]/25', bgOpacity: 'bg-[#E89422]/[0.08]' },
  };

  const colors = colorMap[color];

  return (
    <div
      className={`${colors.bgOpacity} backdrop-blur-sm border ${colors.border} rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-colors`}
    >
      <div className={`inline-flex p-3 bg-gradient-to-br ${colors.bg} rounded-xl mb-3 ${colors.text}`}>
        {icon}
      </div>
      <h4 className="mb-2 text-white">{moment}</h4>
      <p className={`text-sm ${colors.text}`}>{issue}</p>
    </div>
  );
}
