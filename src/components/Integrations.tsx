import { Video, Calendar, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

export function Integrations() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0400] relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent" />

      {/* Mesh gradient orbs */}
      <motion.div
        className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-[#E89422] rounded-full blur-[150px] opacity-[0.07]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-[#963C00] rounded-full blur-[130px] opacity-[0.06]"
        animate={{ scale: [1.1, 1, 1.1], x: [0, -25, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating sparkles */}
      {[
        { left: '8%', top: '30%', delay: 0 },
        { left: '25%', top: '70%', delay: 0.8 },
        { left: '55%', top: '20%', delay: 0.4 },
        { left: '75%', top: '65%', delay: 1.4 },
        { left: '92%', top: '40%', delay: 0.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-[#E89422]"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -50, -100], opacity: [0, 0.6, 0] }}
          transition={{ duration: 5 + i * 0.4, repeat: Infinity, delay: p.delay, ease: 'easeOut' }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          className="mb-10 text-gray-400 text-sm tracking-wide uppercase"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
        >
          Easily integrates with your existing meeting tools
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          <IntegrationItem
            icon={<Video size={24} />}
            name="Google Meet"
            gradient="from-blue-500 to-blue-600"
            delay={0}
          />

          <IntegrationItem
            icon={<Calendar size={24} />}
            name="Microsoft Teams"
            gradient="from-blue-600 to-[#C47010]"
            delay={0.1}
          />

          <IntegrationItem
            icon={<Monitor size={24} />}
            name="Zoom"
            gradient="from-blue-500 to-blue-700"
            delay={0.2}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/15 to-transparent" />
    </section>
  );
}

function IntegrationItem({
  icon,
  name,
  gradient,
  delay,
}: {
  icon: React.ReactNode;
  name: string;
  gradient: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-4 px-6 py-4 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl hover:bg-white/[0.07] hover:border-[#E89422]/25 transition-all group"
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, delay }}
      whileHover={{ y: -4, scale: 1.03 }}
    >
      <motion.div
        className={`w-11 h-11 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {icon}
      </motion.div>
      <span className="text-lg text-white/90 group-hover:text-white transition-colors">{name}</span>
    </motion.div>
  );
}
