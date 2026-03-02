import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

export function TheProblem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Static gradient orbs — subtle CSS animation */}
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <AlertTriangle className="text-orange-400" size={16} />
            <span className="text-white">Why Sales Teams Lose Deals They Should Win</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl max-w-3xl mx-auto">
            Sales Call Recording Software Isn't Enough. You Need Real-Time Intelligence.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Without AI conversation intelligence, reps miss up to 70% of buyer signals buried in unanalyzed recordings. Nimitai tracks buyer emotion, purchase intent, and engagement patterns automatically — so nothing gets missed and every deal gets the intelligence it deserves.
          </p>
        </div>

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

        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-500/12 to-red-500/12 border border-orange-500/25 rounded-3xl shadow-lg shadow-orange-900/20">
            <p className="text-3xl sm:text-4xl bg-gradient-to-r from-[#963C00] to-red-400 bg-clip-text text-transparent">
              $200B in revenue vanishes annually
            </p>
          </div>
        </div>
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
    <div 
      className={`bg-white/8 border ${colors.border} rounded-2xl p-6 hover:bg-white/12 shadow-lg transition-colors`}
    >
      <div 
        className={`inline-flex p-3 bg-gradient-to-br ${colors.bg} bg-opacity-20 rounded-xl mb-4 ${colors.icon}`}
      >
        {icon}
      </div>
      <div className={`text-5xl sm:text-6xl mb-2 bg-gradient-to-br ${colors.bg} bg-clip-text text-transparent`}>
        {stat}
      </div>
      <h3 className="mb-3">{label}</h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
}