import { useState } from 'react';
import { Play, Sparkles, TrendingUp, Zap, Brain, Target, Users, X } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 dark:from-purple-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* 4 Moving gradient orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 to-purple-100 rounded-full blur-[120px] opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[120px] opacity-35"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-pink-200 to-purple-100 rounded-full blur-[110px] opacity-30"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full blur-[100px] opacity-35"
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Moving elements in background - left side only */}
            <motion.div
              className="absolute -top-10 -left-10 w-3 h-3 bg-purple-500 rounded-full blur-sm"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute top-20 -right-8 w-2 h-2 bg-orange-500 rounded-full blur-sm"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            <motion.div
              className="absolute top-1/3 -left-6 w-2.5 h-2.5 bg-pink-400 rounded-full blur-sm"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 2, 1],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            <motion.div
              className="absolute bottom-32 left-10 w-3 h-3 bg-yellow-400 rounded-full blur-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.6, 1],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />

            <motion.div
              className="absolute bottom-48 -right-4 w-2 h-2 bg-purple-400 rounded-full blur-sm"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 2.2, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
            />

            {/* Floating light particles */}
            <motion.div
              className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                y: [0, -100, -200],
                x: [0, 30, 60]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 0
              }}
            />

            <motion.div
              className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                y: [0, -120, -240],
                x: [0, -20, -40]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
            />

            <motion.div
              className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                y: [0, -80, -160],
                x: [0, 40, 80]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />

            {/* Pulsing rings */}
            <motion.div
              className="absolute top-10 left-1/3 w-20 h-20 border-2 border-purple-300/30 rounded-full"
              animate={{
                scale: [1, 2.5],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="absolute bottom-20 right-10 w-16 h-16 border-2 border-orange-300/30 rounded-full"
              animate={{
                scale: [1, 2.8],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.5
              }}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-purple-200/60 dark:border-purple-500/30 rounded-full shadow-lg relative transition-colors"
            >
              <Sparkles className="text-purple-600 dark:text-purple-400" size={16} />
              <span className="text-purple-700 dark:text-purple-300">Meeting Intelligence Co-Pilot</span>
            </motion.div>
            
            <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-br from-gray-900 dark:from-white via-purple-900 dark:via-purple-300 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent leading-tight relative">
              Know the meeting before you walk into it.
            </h1>
            
            <p className="mb-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 relative">
              Read the moment when you're inside it.
            </p>
            
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400 relative">
              Preparation wins the room. Signals win the deal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 relative">
              <button 
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                aria-label="Transform your next meeting with ConvertWise AI sales automation"
              >
                <span>Transform Your Next Meeting</span>
                <Zap size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all flex cursor-pointer items-center justify-center gap-2 shadow-lg"
                aria-label="Watch 2-minute demo of ConvertWise meeting intelligence software"
              >
                <Play size={20} aria-hidden="true" />
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Trust indicators in glass panel */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/80 dark:border-gray-700/80 rounded-2xl p-6 shadow-lg relative transition-colors"
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-600 dark:text-green-400" size={18} />
                  <span>4× Close Rate</span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <Users className="text-purple-600 dark:text-purple-400" size={18} />
                  <span>47 Active Partners</span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <Target className="text-orange-600 dark:text-orange-400" size={18} />
                  <span>87% Confidence Score</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Glassy Dashboard */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main glassy dashboard */}
            <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 dark:border-gray-700/80 overflow-hidden transition-colors">
              {/* Dashboard header - glassy gradient */}
              <div className="bg-gradient-to-r from-purple-500/90 dark:from-purple-600/90 to-orange-500/90 dark:to-orange-600/90 backdrop-blur-xl p-6 text-white border-b border-white/20 dark:border-gray-600/20">
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
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live</span>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-4">
                {/* Confidence meter - glassy */}
                <div className="bg-gradient-to-br from-purple-100/50 dark:from-purple-900/30 to-orange-100/50 dark:to-orange-900/30 backdrop-blur-md p-5 rounded-2xl border border-white/60 dark:border-gray-700/60 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Engagement Score</span>
                    <span className="text-3xl bg-gradient-to-r from-purple-600 dark:from-purple-400 to-orange-500 dark:to-orange-400 bg-clip-text text-transparent">84%</span>
                  </div>
                  <div className="h-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full overflow-hidden border border-white/60 dark:border-gray-600/60">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-600 to-orange-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Live signals - glassy cards */}
                <div className="space-y-2.5">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex items-center gap-3 p-3.5 bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm border border-green-200/60 dark:border-green-700/40 rounded-xl transition-colors"
                    >
                      <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Perfect moment detected to discuss pricing</span>
                    </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center gap-3 p-3.5 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/40 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">High interest detected in ROI section</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center gap-3 p-3.5 bg-orange-50/80 dark:bg-orange-900/20 backdrop-blur-sm border border-orange-200/60 dark:border-orange-700/40 rounded-xl transition-colors"
                  >
                    <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Prospect leaning forward - engagement spike</span>
                  </motion.div>
                </div>

                {/* Participant emotions - glassy */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { emoji: '😊', label: 'Positive', delay: 0.9 },
                    { emoji: '🤔', label: 'Curious', delay: 1.0 },
                    { emoji: '👍', label: 'Engaged', delay: 1.1 }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      className="text-center p-3.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-white/70 dark:border-gray-700/70 shadow-sm transition-colors"
                    >
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating glassy stat cards */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-3xl mb-1 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-purple-700 dark:to-purple-500 bg-clip-text text-transparent">43</div>
              <div className="text-xs text-gray-700 dark:text-gray-300">Perfect Moments</div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className="text-3xl mb-1 bg-gradient-to-r from-orange-500 dark:from-orange-400 to-orange-600 dark:to-orange-500 bg-clip-text text-transparent">14hrs</div>
              <div className="text-xs text-gray-700 dark:text-gray-300">Saved/Week</div>
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
              src="https://www.youtube-nocookie.com/embed/SWFSRVs4fHI?autoplay=1&enablejsapi=1&modestbranding=1&rel=0&origin=https://convertwise.site"
              title="ConvertWise Demo Video"
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