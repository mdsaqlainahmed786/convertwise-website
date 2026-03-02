import { X, Check, Sparkles, Zap, Brain, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyDifferent() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white dark:from-gray-900 via-amber-50 dark:via-[#1A1000]/20 to-orange-50 dark:to-orange-900/20 relative overflow-hidden transition-colors">
      {/* Mesh gradient orbs — CSS (no JS) */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] bg-amber-200 dark:bg-amber-900/10 rounded-full blur-[110px] opacity-35 dark:opacity-20 transition-opacity animate-ambient-float-a"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -left-16 w-[480px] h-[480px] bg-orange-200 dark:bg-[#963C00]/15 rounded-full blur-[110px] opacity-28 dark:opacity-20 transition-opacity animate-ambient-float-b"
        aria-hidden
      />
      <div
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-yellow-100 dark:bg-amber-900/5 rounded-full blur-[90px] opacity-20 dark:opacity-5 transition-opacity animate-ambient-float-c"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white dark:bg-gray-800 border border-amber-200 dark:border-[#E89422]/30 rounded-full shadow-sm transition-colors">
            <Sparkles className="text-[#E89422] dark:text-[#F5B040]" size={16} />
            <span className="text-[#C47010] dark:text-[#F5B040]">Conversation Intelligence vs. Basic Call Recording</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl text-gray-900 dark:text-white">
            Why AI Conversation Intelligence Feels Like Cheating
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-400">(It's Not)</p>
        </motion.div>

        {/* Visual comparison with images */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Other tools */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-3xl blur-xl opacity-30 dark:opacity-20 transition-colors"></div>
            <div className="relative bg-white/70 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/70 dark:border-gray-700 shadow-xl shadow-gray-200/50 dark:shadow-none transition-colors">
              <div className="bg-gray-100/70 dark:bg-gray-700 backdrop-blur-sm p-6 border-b border-gray-200/70 dark:border-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <X className="text-gray-600 dark:text-gray-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-500 dark:text-gray-400">Gong, Fathom, Fireflies & Other Tools</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-500">Basic call recording — more work for you</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-2xl mb-6 overflow-hidden relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MjU3MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Traditional sales call recording tools like Gong and Fireflies require manual review"
                    className="w-full h-full object-cover object-center dark:opacity-60 dark:grayscale"
                  />
                  <div className="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 rounded-2xl"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gray-50/70 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-200/70 dark:border-gray-600 transition-colors">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={14} className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Record calls → you review later</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hours of manual review</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50/70 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-200/70 dark:border-gray-600 transition-colors">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={14} className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Transcribe meetings → you search manually</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Still missing key signals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50/70 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-200/70 dark:border-gray-600 transition-colors">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={14} className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">"AI note-taker" → gives you more work</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Notes without insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Nimitai */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5B040] dark:from-[#E89422] to-orange-400 dark:to-orange-600 rounded-3xl blur-xl opacity-30 dark:opacity-15 transition-colors"></div>
            <div className="relative bg-white/65 dark:bg-gray-800/90 backdrop-blur-md convertwise-card rounded-3xl overflow-hidden border border-[#E89422]/50 dark:border-[#E89422]/50 shadow-2xl shadow-amber-200/40 dark:shadow-amber-900/20 transition-colors">
              <div className="bg-gradient-to-r from-[#E89422] dark:from-[#E89422] to-orange-500 dark:to-orange-400 p-6 text-white border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl">Nimitai</h3>
                    <p className="text-sm text-white/80">AI Meeting Intelligence</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="aspect-video bg-gradient-to-br from-amber-100 dark:from-[#1A1000]/30 to-orange-100 dark:to-orange-900/30 rounded-2xl mb-6 overflow-hidden relative transition-colors">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1649937801620-d31db7fb3ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBnbG93aW5nJTIwZGF0YSUyMHB1cnBsZSUyMG9yYW5nZSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBicmFpbnxlbnwxfHx8fDE3NjUyOTEyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Nimitai AI meeting intelligence dashboard showing real-time sales call analysis and buyer signals"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1000]/30 dark:from-[#1A1000]/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Brain className="text-[#F5B040] dark:text-[#F5B040]" size={20} />
                      <span className="drop-shadow-lg font-medium">Real-time Intelligence</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-amber-50/60 dark:bg-[#1A1000]/30 backdrop-blur-sm rounded-xl border border-amber-200/70 dark:border-[#C47010] transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-[#C47010] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">AI audits your sales pitch and call prep before you start</p>
                      <p className="text-sm text-[#E89422] dark:text-[#F5B040] mt-1">🎯 Proactive optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-orange-50/60 dark:bg-orange-900/30 backdrop-blur-sm rounded-xl border border-orange-200/70 dark:border-orange-700 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-orange-600 dark:to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Surfaces conversation intelligence and deal signals automatically</p>
                      <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">🔍 Deep prospect research</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-amber-50/60 dark:bg-[#1A1000]/30 backdrop-blur-sm rounded-xl border border-amber-200/70 dark:border-[#C47010] transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#E89422] dark:from-[#E89422] to-orange-500 dark:to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Real-time AI sales coaching during every call</p>
                      <p className="text-sm text-[#E89422] dark:text-[#F5B040] mt-1">⚡ Real-time guidance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-orange-50/60 dark:bg-orange-900/30 backdrop-blur-sm rounded-xl border border-orange-200/70 dark:border-orange-700 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-[#C47010] dark:to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Automated CRM notes and follow-up from every call recording</p>
                      <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">🚀 Automated actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}