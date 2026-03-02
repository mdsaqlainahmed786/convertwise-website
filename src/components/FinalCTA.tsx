import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CircuitBoard } from './backgrounds/CircuitBoard';
import { DataStream } from './backgrounds/DataStream';

const proofPoints = [
  'Private beta · founding teams only',
  '$149/seat/month · founding price locked for life',
  'Setup within 48 hours of acceptance',
];

export function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B18] relative overflow-hidden">
      {/* AI-themed background layers */}
      <CircuitBoard />
      <DataStream />

      {/* Top teal accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 border border-[#E89422]/25 bg-[#E89422]/5 rounded-full px-5 py-2 text-xs text-[#E89422] tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#E89422] rounded-full" />
          Waitlist Now Open
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          The conversation intelligence edge<br />
          your competitors can't see coming.
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Nimitai records, transcribes, and analyzes every sales call — surfacing buyer intent signals,
          objection patterns, and real-time AI coaching cues your team can act on immediately.
          No lengthy implementation. No enterprise contracts. Live within 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E89422] text-[#070B18] font-semibold rounded-full shadow-lg hover:opacity-95 transition-opacity"
            aria-label="Apply for Nimitai founding access — AI conversation intelligence for sales teams"
          >
            Apply for Founding Access
            <ArrowRight size={18} />
          </a>
          <Link
            to="/pricing"
            className="px-8 py-4 border border-white/15 text-gray-400 rounded-full hover:border-white/30 hover:text-white transition-colors text-sm"
          >
            View founding pricing →
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-gray-600">
          {proofPoints.map((point, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-[#E89422]">◆</span>
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
