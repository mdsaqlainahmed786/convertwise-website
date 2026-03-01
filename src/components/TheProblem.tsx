import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export function TheProblem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Mesh gradient orbs */}
      <motion.div
        className="absolute -top-20 right-0 w-[600px] h-[600px] bg-[#E89422] rounded-full blur-[140px] opacity-12"
        animate={{ scale: [1, 1.25, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-10 w-[500px] h-[500px] bg-[#963C00] rounded-full blur-[130px] opacity-12"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-red-700 rounded-full blur-[120px] opacity-8"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
        animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Floating sparkles */}
      {[
        { left: '15%', top: '25%', delay: 0 },
        { left: '40%', top: '60%', delay: 1 },
        { left: '70%', top: '30%', delay: 0.5 },
        { left: '85%', top: '70%', delay: 1.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#E89422]"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -60, -120], opacity: [0, 0.5, 0] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <AlertTriangle className="text-orange-400" size={16} />
            <span className="text-white">Why Sales Teams Lose Deals They Should Win</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl max-w-3xl mx-auto">
            Sales Call Recording Software Isn't Enough. You Need Real-Time Intelligence.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Without AI conversation intelligence, reps miss up to 70% of buyer signals buried in unanalyzed recordings. Nimitai tracks buyer emotion, purchase intent, and engagement patterns automatically — so nothing gets missed and every deal gets the intelligence it deserves.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard
            icon={<AlertTriangle size={32} />}
            stat="70%"
            label="Missed Buying Signals"
            description="Sales teams miss hesitation spikes and enthusiasm shifts buried in unanalyzed call recordings."
            color="red"
            delay={0.2}
          />
          
          <StatCard
            icon={<Clock size={32} />}
            stat="3+"
            label="Hours Wasted on Manual Review"
            description="Reps manually dig through CRM notes before critical meetings — time AI sales intelligence eliminates."
            color="orange"
            delay={0.4}
          />
          
          <StatCard
            icon={<TrendingDown size={32} />}
            stat="47%"
            label="Deal Stall Rate"
            description="Post-meeting emails address surface objections — conversation intelligence catches what reps miss."
            color="amber"
            delay={0.6}
          />
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-orange-500/12 to-red-500/12 backdrop-blur-md border border-orange-500/25 rounded-3xl shadow-lg shadow-orange-900/20">
            <p className="text-3xl sm:text-4xl bg-gradient-to-r from-[#963C00] to-red-400 bg-clip-text text-transparent">
              $200B in revenue vanishes annually
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ 
  icon, 
  stat, 
  label, 
  description, 
  color,
  delay
}: { 
  icon: React.ReactNode;
  stat: string;
  label: string;
  description: string;
  color: string;
  delay: number;
}) {
  const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
    red: { bg: 'from-red-500 to-red-700', text: 'text-red-400', border: 'border-red-500/20', icon: 'text-red-400' },
    orange: { bg: 'from-[#963C00] to-[#963C00]', text: 'text-orange-400', border: 'border-orange-500/20', icon: 'text-orange-400' },
    amber: { bg: 'from-[#E89422] to-[#963C00]', text: 'text-[#F5B040]', border: 'border-[#E89422]/20', icon: 'text-[#F5B040]' }
  };

  const colors = colorMap[color];

  return (
    <motion.div 
      className={`bg-white/8 backdrop-blur-md border ${colors.border} rounded-2xl p-6 hover:bg-white/12 shadow-lg transition-all`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 65, damping: 20, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <motion.div 
        className={`inline-flex p-3 bg-gradient-to-br ${colors.bg} bg-opacity-20 rounded-xl mb-4 ${colors.icon}`}
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <div className={`text-5xl sm:text-6xl mb-2 bg-gradient-to-br ${colors.bg} bg-clip-text text-transparent`}>
        {stat}
      </div>
      <h3 className="mb-3">{label}</h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </motion.div>
  );
}