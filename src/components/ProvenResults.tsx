import { BarChart3, Clock, Target, Zap, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScanningGrid } from './backgrounds/ScanningGrid';
import { AIParticles } from './backgrounds/AIParticles';

export function ProvenResults() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50/80 dark:from-gray-900 via-white dark:via-gray-900 to-orange-50/60 dark:to-gray-900 relative overflow-hidden transition-colors">
      {/* AI-themed background layers */}
      <ScanningGrid />
      <AIParticles />

      {/* Mesh orbs — light mode only (dark handled by ScanningGrid/AIParticles) */}
      <motion.div
        className="absolute -top-16 right-0 w-[500px] h-[500px] bg-amber-200 rounded-full blur-[100px] opacity-30 dark:opacity-10 transition-opacity"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -left-16 w-[450px] h-[450px] bg-orange-200 rounded-full blur-[100px] opacity-25 dark:opacity-10 transition-opacity"
        animate={{ scale: [1.15, 1, 1.15], x: [0, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-100 rounded-full blur-[120px] opacity-20 dark:opacity-5 transition-opacity"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      {/* Floating sparkles */}
      {[
        { left: '10%', top: '30%', delay: 0 },
        { left: '30%', top: '60%', delay: 1 },
        { left: '70%', top: '40%', delay: 0.5 },
        { left: '85%', top: '65%', delay: 1.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#E89422]"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -70, -140], opacity: [0, 0.5, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 dark:from-[#1A1000]/30 to-orange-100 dark:to-orange-900/30 rounded-full transition-colors">
            <Award className="text-[#E89422] dark:text-[#F5B040]" size={16} />
            <span className="text-[#C47010] dark:text-[#F5B040]">Conversation Intelligence Results</span>
          </div>
          <h2 className="mb-4 text-4xl sm:text-5xl text-gray-900 dark:text-white">
            Real Results From AI Meeting Intelligence in the Field
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real outcomes from B2B sales teams using Nimitai AI conversation intelligence across SaaS, MedTech, and Services
          </p>
        </motion.div>

        {/* Hero stats with visuals */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Confidence Score Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 65, damping: 20, delay: 0.15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white/70 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl border border-amber-100/80 dark:border-gray-700 hover:border-amber-300 dark:hover:border-[#E89422] shadow-lg hover:shadow-2xl shadow-amber-100/50 dark:shadow-none transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-[#C47010] rounded-2xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Target size={32} />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="text-5xl mb-2 bg-gradient-to-br from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-[#C47010] bg-clip-text text-transparent">
                    87%
                  </div>
                  <h3 className="mb-3 text-gray-900 dark:text-white">AI Conversation Intelligence Score</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Nimitai AI meeting intelligence surfaces perfect ROI moments and buying signals in real time.
                  </p>
                  
                  {/* Mini chart visualization */}
                  <div className="space-y-3 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl transition-colors">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Perfect Moments</span>
                      <span className="text-[#C47010] dark:text-[#F5B040]">43 across 18 demos</span>
                    </div>
                    <div className="h-2 bg-amber-200 dark:bg-amber-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#E89422] dark:from-[#E89422] to-[#963C00] dark:to-[#C47010] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '87%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Pricing Hesitation Detected</span>
                      <span className="text-[#C47010] dark:text-[#F5B040]">67% before voiced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Time Saved Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 65, damping: 20, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white/70 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl border border-orange-100/80 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 shadow-lg hover:shadow-2xl shadow-orange-100/50 dark:shadow-none transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-orange-700 dark:to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                  >
                    <Clock size={32} />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="text-5xl mb-2 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-orange-700 dark:to-orange-600 bg-clip-text text-transparent">
                    14hrs
                  </div>
                  <h3 className="mb-3 text-gray-900 dark:text-white">Time Saved Per Week</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    AI sales call recording eliminates manual note-taking, CRM updates, and follow-up drafting.
                  </p>
                  
                  {/* Tasks visualization */}
                  <div className="space-y-2 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl transition-colors">
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-orange-700 dark:to-orange-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Zero manual entry required</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-orange-700 dark:to-orange-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">3.2× team capacity increase</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 dark:from-orange-400 to-orange-700 dark:to-orange-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Auto-generated follow-ups</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Case studies with images */}
        <div className="grid lg:grid-cols-3 gap-6">
          <CaseStudyCard
            title="Texas SaaS"
            image="https://images.unsplash.com/photo-1707301280425-475534ec3cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY1MjI2NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            results={[
              { icon: <Target size={16} />, text: '87% confidence score across 18 demos' },
              { icon: <Zap size={16} />, text: '43 perfect ROI moments surfaced' },
              { icon: <TrendingUp size={16} />, text: '67% pricing objections detected early' }
            ]}
            color="amber"
            delay={0.2}
          />
          
          <CaseStudyCard
            title="Paris MedTech"
            image="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NTIzMjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            results={[
              { icon: <TrendingUp size={16} />, text: '3.2× team capacity (zero hires)' },
              { icon: <BarChart3 size={16} />, text: '127 buying signals detected' },
              { icon: <Target size={16} />, text: '$250K pipeline in 21 days' }
            ]}
            color="orange"
            delay={0.4}
          />
          
          <CaseStudyCard
            title="Digitalpatron"
            image="https://images.unsplash.com/photo-1630344745991-fb948c5bf9d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBncm93dGh8ZW58MXx8fHwxNzY1MTc4MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            results={[
              { icon: <TrendingUp size={16} />, text: '89% increase in conversion rates' },
              { icon: <Target size={16} />, text: '156 high-value opportunities closed' },
              { icon: <BarChart3 size={16} />, text: '$1.2M additional revenue in Q1' }
            ]}
            color="amber"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ 
  title, 
  image,
  results, 
  color,
  delay
}: { 
  title: string;
  image: string;
  results: Array<{ icon: React.ReactNode; text: string }>;
  color: 'amber' | 'orange';
  delay: number;
}) {
  const bgColor = color === 'amber' ? 'from-[#E89422] to-[#963C00]' : 'from-orange-500 to-orange-700';
  const altMap: Record<string, string> = {
    'Texas SaaS': 'Texas SaaS team using Nimitai AI sales call intelligence — 87% confidence score across 18 demos',
    'Paris MedTech': 'Paris MedTech team using conversation intelligence software — $250K pipeline in 21 days',
    'Digitalpatron': 'Digitalpatron using AI meeting intelligence — 89% conversion rate increase',
  };
  const imageAlt = altMap[title] ?? `${title} - Nimitai AI conversation intelligence success story showing increased win rates and deal performance`;

  return (
    <motion.div
      className="group bg-white/70 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-100/60 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent shadow-md shadow-amber-50 dark:shadow-none hover:shadow-2xl transition-colors"
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 65, damping: 20, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${bgColor} text-white rounded-full shadow-lg`}>
          {title}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {results.map((result, index) => (
          <motion.div 
            key={index} 
            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * (index + 1) }}
          >
            <div className={`mt-0.5 ${color === 'amber' ? 'text-[#E89422] dark:text-[#F5B040]' : 'text-orange-600 dark:text-orange-400'}`}>
              {result.icon}
            </div>
            <span className="text-sm">{result.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}