import { BarChart3, Clock, Target, Zap, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScanningGrid } from './backgrounds/ScanningGrid';
import { AIParticles } from './backgrounds/AIParticles';

export function ProvenResults() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* AI-themed background layers */}
      <ScanningGrid />
      <AIParticles />
      
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"
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
        className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"
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

      {/* Floating particles */}
      <motion.div
        className="absolute top-40 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-20"
        animate={{
          y: [0, -100, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-20"
        animate={{
          y: [0, 80, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full">
            <Award className="text-purple-600" size={16} />
            <span className="text-purple-700">Proven Results</span>
          </div>
          <h2 className="mb-4 text-4xl sm:text-5xl">
            The ConvertWise Impact
          </h2>
          <p className="text-xl text-gray-600">
            Real outcomes from early partners across SaaS, MedTech, and Services
          </p>
        </motion.div>

        {/* Hero stats with visuals */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Confidence Score Card */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Target size={32} />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="text-5xl mb-2 bg-gradient-to-br from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    87%
                  </div>
                  <h3 className="mb-3">Avg Confidence Score</h3>
                  <p className="text-gray-600 mb-6">
                    Live Agent surfaces perfect ROI moments in real-time.
                  </p>
                  
                  {/* Mini chart visualization */}
                  <div className="space-y-3 bg-purple-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Perfect Moments</span>
                      <span className="text-purple-700">43 across 18 demos</span>
                    </div>
                    <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-800 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '87%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Pricing Hesitation Detected</span>
                      <span className="text-purple-700">67% before voiced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Time Saved Card */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                  >
                    <Clock size={32} />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="text-5xl mb-2 bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-transparent">
                    14hrs
                  </div>
                  <h3 className="mb-3">Time Saved Per Week</h3>
                  <p className="text-gray-600 mb-6">
                    Eliminates manual note-taking, CRM updates, and follow-up drafting.
                  </p>
                  
                  {/* Tasks visualization */}
                  <div className="space-y-2 bg-orange-50 p-4 rounded-xl">
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm text-gray-700">Zero manual entry required</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm text-gray-700">3.2× team capacity increase</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm text-gray-700">Auto-generated follow-ups</span>
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
            color="purple"
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
            color="purple"
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
  color: 'purple' | 'orange';
  delay: number;
}) {
  const bgColor = color === 'purple' ? 'from-purple-600 to-purple-800' : 'from-orange-500 to-orange-700';
  
  return (
    <motion.div 
      className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={`${title} - ConvertWise AI sales automation success story showing increased ROI and lead generation`}
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
            className="flex items-start gap-3 text-gray-700"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * (index + 1) }}
          >
            <div className={`mt-0.5 text-${color === 'purple' ? 'purple' : 'orange'}-600`}>
              {result.icon}
            </div>
            <span className="text-sm">{result.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}