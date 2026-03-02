import { useState } from 'react';

const benefits = [
  {
    icon: '◆',
    title: 'Founding pricing — locked for life',
    description: '$149/seat/month. Every seat you add later costs the same as the first. No renegotiations when we raise prices at launch.',
  },
  {
    icon: '◆',
    title: 'Private access to the founding team',
    description: 'Weekly office hours with Nilansh and Archit. Your feedback directly shapes what gets built next.',
  },
  {
    icon: '◆',
    title: 'Priority onboarding — within 48 hours',
    description: 'A private setup call. Live with AI intelligence on your sales calls within the same week you apply.',
  },
  {
    icon: '◆',
    title: 'Founding Partner recognition',
    description: 'Your name in our public founding story. Early access to every capability before public launch.',
  },
];

export function ExclusiveAccess() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0400] relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/30 to-transparent" />

      {/* Static gradient orbs */}
      <div className="absolute -top-40 -right-20 w-[600px] h-[600px] bg-[#E89422] rounded-full blur-[180px] opacity-[0.07]" />
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-orange-700 rounded-full blur-[160px] opacity-[0.06]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,148,34,0.06) 0%, transparent 70%)' }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.9) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />


      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 border border-[#E89422]/25 bg-[#E89422]/[0.07] rounded-full px-5 py-2 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#E89422] rounded-full animate-pulse" />
            <span className="text-[#E89422] text-xs tracking-[0.2em] uppercase font-medium">
              Private Beta · Application Open
            </span>
          </div>
        </div>

        <h2
          className="text-center text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6"
        >
          The AI sales teams that win<br />
          <span className="bg-gradient-to-r from-[#F5B040] to-[#E89422] bg-clip-text text-transparent">always know more</span>{' '}
          before the call ends.
        </h2>

        <p className="text-center text-lg text-gray-400 mb-3 max-w-xl mx-auto leading-relaxed">
          Nimitai is in private beta. We are onboarding founding teams who understand that every sales call is a{' '}
          <span className="text-gray-200">real-time intelligence opportunity</span> — not just a conversation to be recorded and forgotten.
        </p>

        <p className="text-center text-sm text-gray-600 mb-12">
          <span className="text-white font-semibold">412</span> founders already on the waitlist.
        </p>

        <div className="max-w-md mx-auto mb-20">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              aria-label="Apply for Nimitai founding access"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email address"
                className="flex-1 px-5 py-3.5 bg-white/[0.04] border border-white/10 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-[#E89422]/50 transition-colors text-sm"
                aria-label="Work email for Nimitai AI meeting intelligence waitlist"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#E89422] text-[#070B18] font-semibold rounded-full text-sm whitespace-nowrap shadow-lg shadow-[#E89422]/20 hover:opacity-95 transition-opacity"
                aria-label="Apply for Nimitai founding access"
              >
                Apply for Access
              </button>
            </form>
          ) : (
            <div className="text-center py-4 px-6 border border-[#E89422]/25 rounded-full bg-[#E89422]/[0.07]">
              <p className="text-[#E89422] text-sm font-medium">
                You're on the list. We'll reach out within 48 hours.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-white/[0.06] mb-12" />

        <p className="text-center text-[10px] text-gray-600 uppercase tracking-[0.25em] mb-8">
          What founding teams receive
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-[#E89422]/25 hover:bg-white/[0.05] transition-colors cursor-default"
            >
              <span className="text-[#E89422] text-base mt-0.5 flex-shrink-0" aria-hidden="true">
                {b.icon}
              </span>
              <div>
                <p className="text-white text-sm font-semibold mb-1.5">{b.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-700 mt-10">
          Nimitai is{' '}
          <a
            href="/ai-meeting-intelligence-software"
            className="text-gray-500 hover:text-[#E89422] transition-colors underline-offset-2 underline"
          >
            an AI meeting intelligence platform
          </a>{' '}
          built for B2B SaaS sales teams who want real-time conversation intelligence without enterprise pricing.
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/15 to-transparent" />
    </section>
  );
}
