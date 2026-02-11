import { X, Check, Sparkles, Zap, Brain, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyDifferent() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white dark:from-gray-900 via-purple-50 dark:via-purple-900/20 to-orange-50 dark:to-orange-900/20 relative overflow-hidden transition-colors">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30 dark:opacity-20 transition-colors"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-3xl opacity-30 dark:opacity-20 transition-colors"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating sparkles */}
      <motion.div
        className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-40"
        animate={{
          y: [0, -80, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/3 w-3 h-3 bg-orange-400 rounded-full opacity-40"
        animate={{
          y: [0, 60, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-700 rounded-full shadow-sm transition-colors">
            <Sparkles className="text-purple-600 dark:text-purple-400" size={16} />
            <span className="text-purple-700 dark:text-purple-300">Why We're Different</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl text-gray-900 dark:text-white">
            Why This Feels Like Cheating
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-400">(It's Not)</p>
        </motion.div>

        {/* Visual comparison with images */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Other tools */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-3xl blur-xl opacity-50 dark:opacity-30 transition-colors"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl transition-colors">
              <div className="bg-gray-100 dark:bg-gray-700 p-6 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <X className="text-gray-600 dark:text-gray-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-500 dark:text-gray-400">Other Tools</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-500">More work for you</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-2xl mb-6 overflow-hidden relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MjU3MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Traditional tools"
                    className="w-full h-full object-cover object-center dark:opacity-60 dark:grayscale"
                  />
                  <div className="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 rounded-2xl"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 transition-colors">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={14} className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Record calls → you review later</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hours of manual review</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 transition-colors">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={14} className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Transcribe meetings → you search manually</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Still missing key signals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 transition-colors">
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
          
          {/* ConvertWise */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 dark:from-purple-600 to-orange-400 dark:to-orange-600 rounded-3xl blur-xl opacity-20 dark:opacity-15 transition-colors"></div>
            <div 
              className="relative bg-white dark:bg-[#43216C] convertwise-card rounded-3xl overflow-hidden border-2 border-transparent dark:border-purple-500/50 shadow-2xl transition-colors"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgb(147 51 234), rgb(249 115 22)) border-box'
              }}
            >
              <div className="bg-gradient-to-r from-purple-600 dark:from-purple-500 to-orange-500 dark:to-orange-400 p-6 text-white border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl">ConvertWise</h3>
                    <p className="text-sm text-white/80">AI that works for you</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="aspect-video bg-gradient-to-br from-purple-100 dark:from-purple-900/30 to-orange-100 dark:to-orange-900/30 rounded-2xl mb-6 overflow-hidden relative transition-colors">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1649937801620-d31db7fb3ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBnbG93aW5nJTIwZGF0YSUyMHB1cnBsZSUyMG9yYW5nZSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBicmFpbnxlbnwxfHx8fDE3NjUyOTEyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI Intelligence"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 dark:from-purple-900/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Brain className="text-purple-300 dark:text-purple-200" size={20} />
                      <span className="drop-shadow-lg font-medium">Real-time Intelligence</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 dark:from-purple-900/30 to-purple-100 dark:to-purple-800/30 rounded-xl border-2 border-purple-200 dark:border-purple-700 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 dark:from-purple-500 to-purple-700 dark:to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Audits your pitch before you ever say it</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">🎯 Proactive optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 dark:from-orange-900/30 to-orange-100 dark:to-orange-800/30 rounded-xl border-2 border-orange-200 dark:border-orange-700 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-orange-600 dark:to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Prepares you with intel you'd never find alone</p>
                      <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">🔍 Deep prospect research</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 dark:from-purple-900/30 to-orange-50 dark:to-orange-900/30 rounded-xl border-2 border-purple-200 dark:border-purple-700 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 dark:from-purple-500 to-orange-500 dark:to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Coaches you live when the moment matters</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">⚡ Real-time guidance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 dark:from-orange-900/30 to-purple-50 dark:to-purple-900/30 rounded-xl border-2 border-orange-200 dark:border-orange-700 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-purple-600 dark:to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Executes follow-through so deals don't stall</p>
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