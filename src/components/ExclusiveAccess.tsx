import { Lock, Clock, Users, Shield, Zap, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { NeuralNetwork } from './backgrounds/NeuralNetwork';
import { AIParticles } from './backgrounds/AIParticles';

export function ExclusiveAccess() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 dark:from-purple-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 relative overflow-hidden transition-colors">
      {/* AI-themed background layers */}
      <NeuralNetwork />
      <AIParticles />
      
      {/* Background elements */}
      <motion.div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30 dark:opacity-20 transition-colors"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-3xl opacity-30 dark:opacity-20 transition-colors"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-100 dark:from-orange-900/30 to-red-100 dark:to-red-900/30 border border-orange-300 dark:border-orange-700 rounded-full shadow-sm transition-colors">
            <Lock className="text-orange-700 dark:text-orange-400" size={16} />
            <span className="text-orange-700 dark:text-orange-300">Exclusive Access</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl bg-gradient-to-r from-gray-900 dark:from-white to-gray-600 dark:to-gray-300 bg-clip-text text-transparent">
            You Can't Have It Yet
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ConvertWise is currently available to{' '}
            <span className="text-purple-600 dark:text-purple-400">47 select partners</span>.
            <br />
            Public launch: <span className="text-orange-600 dark:text-orange-400">Q3 2025</span>.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Why wait section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 dark:from-purple-800/30 to-purple-300 dark:to-purple-700/30 rounded-3xl blur-xl opacity-30 dark:opacity-20 transition-colors"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-purple-200 dark:border-purple-700 shadow-xl transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 dark:from-purple-500 to-purple-700 dark:to-purple-600 rounded-2xl flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-2xl text-gray-900 dark:text-white">Why The Wait:</h3>
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                We're not scaling until it's perfect.
              </p>
              
              <div className="space-y-4">
                <BenefitCard 
                  icon={<Users size={20} />}
                  title="Private onboarding with Renai's R&D team"
                  color="purple"
                />
                
                <BenefitCard 
                  icon={<Zap size={20} />}
                  title="Co-development sessions (your feedback shapes the product)"
                  color="purple"
                />
                
                <BenefitCard 
                  icon={<Award size={20} />}
                  title="Access to behavioral insights nobody else has"
                  color="purple"
                />
                
                <BenefitCard 
                  icon={<Lock size={20} />}
                  title="Preferential pricing locked for 24 months"
                  color="orange"
                />
                
                <BenefitCard 
                  icon={<Zap size={20} />}
                  title="First access to new agent capabilities"
                  color="orange"
                />
              </div>
            </div>
          </div>
          
          {/* The catch section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 dark:from-orange-800/30 to-red-200 dark:to-red-800/30 rounded-3xl blur-xl opacity-30 dark:opacity-20 transition-colors"></div>
            <div className="relative catch-card rounded-3xl p-8 border-2 border-orange-300 dark:border-orange-700 shadow-xl transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-red-500 dark:to-red-400 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl text-gray-900 dark:text-white">The Catch:</h3>
              </div>
              
              <p className="text-xl text-gray-900 dark:text-white mb-8 leading-relaxed">
                We're accepting <span className="text-orange-600 dark:text-orange-400">12 more partners</span> this quarter.
                <br />
                After that, waitlist until public launch.
              </p>
              
              {/* Stats cards */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 dark:from-purple-400 to-purple-700 dark:to-purple-600 rounded-2xl flex items-center justify-center">
                      <Users className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-4xl bg-gradient-to-r from-purple-600 dark:from-purple-400 to-purple-800 dark:to-purple-600 bg-clip-text text-transparent">
                        300+
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">Current Waitlist</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-red-500 dark:to-red-400 rounded-2xl flex items-center justify-center">
                      <Clock className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-4xl bg-gradient-to-r from-orange-500 dark:from-orange-400 to-red-500 dark:to-red-400 bg-clip-text text-transparent">
                        4-6 months
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">Average Wait Time</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 dark:from-red-900/30 to-orange-100 dark:to-orange-900/30 rounded-2xl p-6 border-2 border-red-300 dark:border-red-700 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 dark:from-red-400 to-red-600 dark:to-red-500 rounded-2xl flex items-center justify-center">
                      <Lock className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-4xl bg-gradient-to-r from-red-600 dark:from-red-400 to-red-700 dark:to-red-500 bg-clip-text text-transparent">
                        12 spots
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">Remaining This Quarter</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency message */}
              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-orange-400 dark:border-orange-600 shadow-lg transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 dark:bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white mb-2">Limited Time Only</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Next cohort opens <span className="text-orange-600 dark:text-orange-400">March 15, 2025</span>.
                      Don't miss your chance to get ahead of the competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ 
  icon, 
  title, 
  color 
}: { 
  icon: React.ReactNode;
  title: string;
  color: 'purple' | 'orange';
}) {
  const bgColor = color === 'purple' ? 'from-purple-600 to-purple-700' : 'from-orange-500 to-orange-600';
  
  return (
    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-white dark:from-gray-800 to-gray-50 dark:to-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all">
      <div className={`w-10 h-10 bg-gradient-to-br ${bgColor} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
        {icon}
      </div>
      <p className="text-gray-700 dark:text-gray-300 pt-2">{title}</p>
    </div>
  );
}

function AlertCircle({ className, size }: { className?: string; size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}