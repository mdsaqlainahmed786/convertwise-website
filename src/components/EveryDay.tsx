'use client';

import { Clock, MessageSquare, XCircle, Eye, Zap, CheckCircle, TrendingDown, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScanningGrid } from './backgrounds/ScanningGrid';
import { DataVisualization } from './backgrounds/DataVisualization';

export function EveryDay() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* AI-themed background layers */}
      <ScanningGrid />
      <DataVisualization />
      
      {/* Animated background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30">
            <AlertCircle className="text-red-400" size={16} />
            <span className="text-red-300">The Painful Truth</span>
          </div>
          
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-5xl mx-auto">
            Every Day You Wait,{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Someone Else Closes The Deal
            </span>{' '}
            You Could've Won
          </h2>
        </motion.div>

        {/* Visual Story Flow */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left: The Setup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-2xl">You know the feeling:</h3>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl overflow-hidden mb-6 border border-purple-500/20">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzY1MTkzODM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Successful business deal closed with AI sales automation and meeting intelligence software"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-white">Perfect prospect</p>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-white">Great conversation</p>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <p className="text-gray-300">"We need to think about it..."</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: The Reality */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-red-500/10 backdrop-blur-md border border-red-500/30 rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                    <XCircle size={24} />
                  </div>
                  <h3 className="text-2xl">Three weeks later:</h3>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-red-900/40 to-gray-900/60 rounded-2xl overflow-hidden mb-6 border border-red-500/30 relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1758525747606-9e2676af8234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3NlZCUyMGJ1c2luZXNzbWFuJTIwZnJ1c3RyYXRlZHxlbnwxfHx8fDE3NjUxNzk1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sales professional struggling without AI sales automation tools and meeting intelligence software"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <XCircle className="text-red-400 mx-auto mb-2" size={48} />
                      <p className="text-red-300">LOST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center">
                  <p className="text-2xl text-red-200">
                    "We went with someone else."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* The Critical Moment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-orange-500/30 rounded-3xl p-8 sm:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <TrendingDown className="text-orange-400" size={32} />
                  <h3 className="text-3xl sm:text-4xl">That deal didn't die in week 3.</h3>
                </div>
                <p className="text-xl text-orange-300">It died in the first 15 minutes of your demo.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CriticalMoment
                  icon={<Clock size={28} />}
                  moment="Minute 14"
                  issue="You talked too long"
                  color="orange"
                />
                
                <CriticalMoment
                  icon={<MessageSquare size={28} />}
                  moment="The Pause"
                  issue="You missed their objection"
                  color="red"
                />
                
                <CriticalMoment
                  icon={<Eye size={28} />}
                  moment="The Signal"
                  issue="You didn't see the moment"
                  color="purple"
                />
                
                <CriticalMoment
                  icon={<XCircle size={28} />}
                  moment="The Close"
                  issue="You hesitated when they were ready"
                  color="red"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Solution CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02] rounded-3xl"
            style={{
              backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />

          {/* 4 Moving gradient orbs */}
          <motion.div 
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-200 to-purple-100 rounded-full blur-[100px] opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[110px] opacity-25"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.div 
            className="absolute top-1/2 left-1/3 w-[380px] h-[380px] bg-gradient-to-br from-pink-200 to-purple-100 rounded-full blur-[90px] opacity-20"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <motion.div 
            className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full blur-[95px] opacity-25"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1.05, 1, 1.05],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-white/90">AI-Powered Intelligence</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                  ConvertWise sees the moment.
                </h3>
                
                <p className="text-2xl sm:text-3xl bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mb-8">
                  And tells you exactly what to do.
                </p>

                {/* Features in glassy cards */}
                <div className="space-y-3">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-white/90">Real-time alerts</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-white/90">Instant guidance</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-white/90">Never miss again</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right side - Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1760346547318-7e309662467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHZpZGVvJTIwY2FsbCUyMG1lZXRpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY1MjgyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Real-time meeting intelligence software analyzing video call with AI sales automation and live coaching"
                    className="w-full h-full object-cover"
                  />
                  {/* Glassy overlay with pulse effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                  
                  {/* Floating alert indicators */}
                  <motion.div 
                    className="absolute top-6 left-6 bg-green-500/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg"
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-sm">Perfect moment detected</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-6 right-6 bg-blue-500/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg"
                    animate={{
                      y: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-sm">High engagement</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CriticalMoment({ 
  icon, 
  moment, 
  issue, 
  color 
}: { 
  icon: React.ReactNode;
  moment: string;
  issue: string;
  color: 'orange' | 'red' | 'purple';
}) {
  const colorMap = {
    orange: {
      bg: 'from-orange-500 to-orange-700',
      text: 'text-orange-300',
      border: 'border-orange-500/30',
      bgOpacity: 'bg-orange-500/10'
    },
    red: {
      bg: 'from-red-500 to-red-700',
      text: 'text-red-300',
      border: 'border-red-500/30',
      bgOpacity: 'bg-red-500/10'
    },
    purple: {
      bg: 'from-purple-500 to-purple-700',
      text: 'text-purple-300',
      border: 'border-purple-500/30',
      bgOpacity: 'bg-purple-500/10'
    }
  };

  const colors = colorMap[color];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${colors.bgOpacity} backdrop-blur-sm border ${colors.border} rounded-2xl p-6 text-center hover:bg-white/5 transition-all`}
    >
      <div className={`inline-flex p-3 bg-gradient-to-br ${colors.bg} rounded-xl mb-3 ${colors.text}`}>
        {icon}
      </div>
      <h4 className="mb-2">{moment}</h4>
      <p className={`text-sm ${colors.text}`}>
        {issue}
      </p>
    </motion.div>
  );
}