import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "I used to spend Monday mornings reviewing call recordings to figure out why we lost a deal. Nimitai ended that. I now get a three-line brief — pricing hesitation at 4:12, engagement spike at 11:40, a competitor mention we almost missed. Close rate is up 31% in two months.",
    name: 'Arjun Nair',
    role: 'Director of Sales',
    company: 'Stackflow',
    industry: 'B2B SaaS',
    initials: 'AN',
    color: 'from-[#E89422] to-[#963C00]',
  },
  {
    quote:
      "We run 40+ enterprise demos a month with a lean team. Nimitai's pre-call prep agent briefs every rep on buying committee dynamics, live objection patterns, and competitive intel before they open Zoom. It's like giving every AE a playbook written by our best closer.",
    name: 'Priya Verma',
    role: 'VP Revenue',
    company: 'Growvault',
    industry: 'Revenue Intelligence',
    initials: 'PV',
    color: 'from-orange-500 to-orange-700',
  },
  {
    quote:
      "Gong wanted $28,000 a year for my 6-person team. I switched to Nimitai at $745 a month and the real-time AI coaching cues during live calls are honestly better. No annual contract, no minimum seats, live in 20 minutes. I can't explain why everyone isn't doing this.",
    name: 'Marcus Webb',
    role: 'Founder & CEO',
    company: 'Pipetrack',
    industry: 'SaaS Startup',
    initials: 'MW',
    color: 'from-amber-500 to-[#E89422]',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50/60 dark:from-gray-900 via-white dark:via-gray-900 to-orange-50/40 dark:to-gray-900 relative overflow-hidden transition-colors">
      {/* Subtle background orbs */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 dark:from-[#1A1000]/40 to-orange-100 dark:to-orange-900/30 rounded-full transition-colors">
            <Star className="text-[#E89422] dark:text-[#F5B040]" size={15} fill="currentColor" />
            <span className="text-[#C47010] dark:text-[#F5B040] text-sm">Early Customer Stories</span>
          </div>
          <h2 className="mb-4 text-4xl sm:text-5xl text-gray-900 dark:text-white">
            What Sales Leaders Say After{' '}
            <span className="bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent">
              Their First Month
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Founding teams using Nimitai AI conversation intelligence to close more deals, coach faster, and cut the manual work out of B2B sales.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative group bg-white dark:bg-gray-800/90 rounded-3xl p-7 border border-amber-100/70 dark:border-gray-700 hover:border-[#E89422]/40 dark:hover:border-[#E89422]/30 shadow-md shadow-amber-50/50 dark:shadow-none hover:shadow-xl hover:shadow-amber-100/30 dark:hover:shadow-none hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-200"
            >
              {/* Quote icon */}
              <div className="mb-5">
                <div className={`inline-flex p-2.5 bg-gradient-to-br ${t.color} rounded-xl`}>
                  <Quote size={16} className="text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="text-[#E89422] dark:text-[#F5B040]" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>

              {/* Divider */}
              <div className="border-t border-gray-100 dark:border-white/[0.06] pt-5">
                <div className="flex items-center gap-3">
                  {/* Avatar initials */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} · {t.company}</div>
                  </div>
                  {/* Industry badge */}
                  <div className="ml-auto">
                    <span className="text-xs px-2.5 py-1 bg-amber-50 dark:bg-[#E89422]/10 text-[#C47010] dark:text-[#F5B040] rounded-full border border-amber-200/60 dark:border-[#E89422]/20">
                      {t.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/95 dark:bg-gray-800/60 rounded-2xl border border-amber-100/60 dark:border-gray-700 p-6"
        >
          {[
            { stat: '31%', label: 'Avg close rate increase' },
            { stat: '14hrs', label: 'Saved per rep per week' },
            { stat: '500+', label: 'Sales pros on the waitlist' },
            { stat: '$149', label: 'Per seat/month · no contracts' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#E89422] to-[#963C00] bg-clip-text text-transparent mb-1">
                {item.stat}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
