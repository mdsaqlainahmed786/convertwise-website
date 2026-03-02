import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CircuitBoard } from './backgrounds/CircuitBoard';
import { DataStream } from './backgrounds/DataStream';
import { trackCtaClick } from '../lib/analytics';

const proofPoints = [
  'Private beta · founding teams only',
  '$149/seat/month · founding price locked for life',
  'Setup within 48 hours of acceptance',
];

export function FinalCTA() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070B18] relative overflow-hidden">
      {/* AI-themed background layers */}
      <CircuitBoard />
      <DataStream />

      {/* Top teal accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent" />

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]"
        style={{ background: '#E89422' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
        style={{ background: '#C47010' }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="inline-flex items-center gap-2 border border-[#E89422]/25 bg-[#E89422]/5 rounded-full px-5 py-2 text-xs text-[#E89422] tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#E89422] rounded-full animate-pulse" />
          Waitlist Now Open
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
        >
          The conversation intelligence edge<br />
          your competitors can't see coming.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Nimitai records, transcribes, and analyzes every sales call — surfacing buyer intent signals,
          objection patterns, and real-time AI coaching cues your team can act on immediately.
          No lengthy implementation. No enterprise contracts. Live within 48 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.a
            href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick('final_cta_apply_founding_access')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E89422] text-[#070B18] font-semibold rounded-full shadow-lg"
            aria-label="Apply for Nimitai founding access — AI conversation intelligence for sales teams"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Apply for Founding Access
            <ArrowRight size={18} />
          </motion.a>
          <Link
            to="/pricing"
            className="px-8 py-4 border border-white/15 text-gray-400 rounded-full hover:border-white/30 hover:text-white transition-all text-sm"
          >
            View founding pricing →
          </Link>
        </motion.div>

        {/* Proof points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-gray-600">
          {proofPoints.map((point, i) => (
            <motion.span
              key={i}
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 + i * 0.08 }}
            >
              <span className="text-[#E89422]">◆</span>
              {point}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
