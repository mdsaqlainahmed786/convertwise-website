import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Analyze Sales Calls with AI: 5 Patterns That Separate Winners from Losers',
  datePublished: '2026-02-26',
  dateModified: '2026-02-26',
  author: {
    '@type': 'Organization',
    name: 'Nimitai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Nimitai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nimitai.com/logo.png',
    },
  },
  url: 'https://nimitai.com/blog/how-to-analyze-sales-calls',
};

export function HowToAnalyzeSalesCalls() {
  return (
    <>
      <Helmet>
        <title>How to Analyze Sales Calls: Guide for Sales Managers (2026) | Nimitai</title>
        <meta
          name="description"
          content="Step-by-step guide on how to analyze sales calls using AI conversation intelligence. Learn which metrics matter, how to spot objection patterns, identify deal risks, and coach your reps to close more deals."
        />
        <meta
          name="keywords"
          content="how to analyze sales calls, sales call analysis, analyze sales calls, sales call review, conversation intelligence, sales call metrics, sales coaching from call recordings"
        />
        <link rel="canonical" href="https://nimitai.com/blog/how-to-analyze-sales-calls" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <Link to="/blog" className="hover:text-[#C47010] dark:hover:text-[#F5B040] transition-colors">
                Blog
              </Link>
              <span>›</span>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040] text-xs font-semibold uppercase tracking-wide">
                Sales Intelligence
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
              How to Analyze Sales Calls: A Complete Guide for Sales Managers in 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <time dateTime="2026-02-26">Feb 26, 2026</time>
              <span>·</span>
              <span>7 min read</span>
              <span>·</span>
              <span>By Nimitai</span>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Sales call analysis is where the gap between a 20% and 40% close rate becomes visible. This guide covers how to analyze sales calls systematically — the key metrics, the objection patterns, and how AI conversation intelligence software automates the entire sales call analysis process so your team can coach faster and close more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-4">
        <img
          src="/assets/call-agent.jpeg"
          alt="AI analyzing sales call patterns — talk ratios, objection detection, and deal risk signals"
          className="w-full rounded-2xl shadow-xl object-cover"
          style={{ maxHeight: '420px', objectPosition: 'center' }}
          loading="eager"
        />
      </div>

      {/* Article Body */}
      <section className="bg-white dark:bg-gray-900 transition-colors py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              Most founders approach sales call review the same way: you finish a call that felt off, you replay 20 minutes of it, you make a mental note, and then you move on. The calls that go well don't get reviewed at all. The calls that went badly get a partial listen and an informal debrief. Neither approach generates the systematic insight you need to close more deals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              AI changes this dynamic fundamentally. Instead of reviewing the calls you happen to remember or the ones that felt wrong, AI analysis covers every call automatically. It surfaces patterns you couldn't see by listening to five calls in isolation — because the signal only becomes visible at 20 or 50 calls. The question shifts from "what went wrong on that call?" to "what do all my lost deals have in common?" That is a different, and far more powerful, question.
            </p>
          </motion.div>

          {/* Why Most Sales Call Analysis Fails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Sales Call Analysis Drives Better Close Rates</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              The core reason sales call analysis drives better close rates is systematic visibility. Without structured analysis of your sales calls, you review the calls you happen to remember — usually the outliers. The middle 60% of calls, which contain the most correctable problems, never get analyzed at all. Systematic sales call analysis eliminates this survivorship bias.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              The second reason is consistency. When you manually review a sales call on a Tuesday afternoon after a good morning, you evaluate it differently than you would reviewing the same call on a Friday after a difficult week. AI conversation intelligence software evaluates every call against the same criteria every time — no variance, no emotion, no selective attention.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              The third reason is the scale of pattern recognition. Even if you analyzed every sales call consistently, you cannot simultaneously track talk ratios, question counts, objection timing, next-step specificity, and competitor mentions across 50 calls. Analyzing sales calls with AI does exactly this — cross-dimensional pattern synthesis that would take a human hundreds of hours to approximate manually.
            </p>
          </motion.div>

          {/* The 5 Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">The 5 Most Important Metrics When Analyzing Sales Calls</h2>

            {/* Pattern 1 */}
            <div className="mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E89422] dark:bg-[#E89422] text-white flex items-center justify-center font-bold text-lg">1</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight pt-1">Talk Ratio</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The single most consistent predictor of call outcome in our data is talk ratio. Winning calls have reps talking 40–50% of the time. Losing calls have reps talking 70% or more. The pattern is so reliable that talk ratio alone, measured within the first 15 minutes of a call, is a statistically significant predictor of whether that deal will advance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The intuition behind this is straightforward: if you're talking 70% of the time, you're not listening. You're pitching. Discovery has collapsed into a monologue. The prospect is no longer engaged as a participant — they're an audience. That dynamic rarely converts.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                But the deeper question is not who talks more — it's who asks better questions. A rep who talks 45% of the time and spends that time asking precise discovery questions will outperform a rep who talks 45% of the time and fills it with feature narration. Talk ratio is a proxy for engagement quality; it is not the final word.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 border border-amber-100 dark:border-amber-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">How AI surfaces this:</strong> Nimitai automatically calculates talk ratio for every call participant, tracks it over time per rep, and flags calls where the ratio falls outside the coaching threshold. No manual calculation required.
                </p>
              </div>
            </div>

            {/* Pattern 2 */}
            <div className="mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E89422] dark:bg-[#E89422] text-white flex items-center justify-center font-bold text-lg">2</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight pt-1">Question Count and Quality</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Top-performing reps ask three times more questions per call than average performers. This is a reproducible finding across industries, deal sizes, and sales methodologies. Questions signal engagement, demonstrate interest, and invite the prospect to become a co-author of the solution rather than a passive recipient of a pitch.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                But question count alone doesn't tell the full story. The quality and type of question matters enormously. Discovery questions — "What would make this a success for you in the first 90 days?" or "What's happened every time you've tried to solve this before?" — outperform feature validation questions — "Did I show you the reporting dashboard?" or "Do you like the integrations?" — by a wide margin.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                AI can classify question types automatically. Not just counting questions, but categorising them: discovery vs feature, open vs closed, problem-focused vs solution-focused. A rep who asks 12 questions and 10 of them are closed verification questions ("Does that make sense? Did that answer your question?") is not performing the same way as a rep who asks 8 genuinely diagnostic questions.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 border border-amber-100 dark:border-amber-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">How AI surfaces this:</strong> Nimitai classifies every question asked on the call by type, tracks the discovery-to-feature question ratio per rep, and surfaces the specific calls where question quality dropped.
                </p>
              </div>
            </div>

            {/* Pattern 3 */}
            <div className="mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E89422] dark:bg-[#E89422] text-white flex items-center justify-center font-bold text-lg">3</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight pt-1">Next Step Clarity</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Sixty-eight percent of lost deals end with no clear next step agreed on the call itself. This is one of the highest-leverage coaching signals in the dataset — and one of the most correctable. The difference between a deal that advances and a deal that goes dark is often as simple as whether a specific next step was confirmed before the call ended.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "I'll follow up with a proposal" is not a next step. It's a vague intent with no accountability on either side. "You'll review the proposal by Thursday and we'll connect Friday at 2pm with Sarah from procurement" is a next step. Specificity — day, time, attendees, and what each party will have prepared — is what converts a follow-up intention into a scheduled event.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                AI detects next-step language patterns with high accuracy. It can distinguish between a vague "let's stay in touch" and a confirmed calendar commitment. It can flag calls that ended without any commitment language, and it can track the correlation between next-step specificity and deal advancement rate in your own pipeline.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 border border-amber-100 dark:border-amber-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">How AI surfaces this:</strong> Nimitai flags every call that ended without a confirmed next step and generates a weekly report showing the percentage of your calls with and without clear commitments.
                </p>
              </div>
            </div>

            {/* Pattern 4 */}
            <div className="mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E89422] dark:bg-[#E89422] text-white flex items-center justify-center font-bold text-lg">4</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight pt-1">Objection Handling Patterns</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                There is a stark difference in how objections appear on winning versus losing calls. On winning calls, objections are surfaced early — often because the rep proactively raises them. "One thing I want to address before we go deeper is pricing — I want to make sure we're in the right ballpark before we spend another 30 minutes." This approach surfaces the objection at the moment when the rep has maximum credibility and the prospect has maximum engagement.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                On losing calls, objections appear in the final 10 minutes and go unresolved. "This looks interesting, but I think pricing will be a challenge" — followed by "Let me get you more information on that" — is a pattern that almost never converts. The objection that surfaces in the last 10 minutes is the one the prospect has been thinking about for the entire call and never felt safe enough to raise. It surfaces at the end because the rep didn't create space for it earlier.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At the individual call level, late-stage objections are a coaching signal. At scale, they become strategic intelligence. If "pricing" is appearing in 70% of your lost deals in the final 10 minutes, you have a structural problem — either your pricing needs to change, or your qualification criteria need to filter for budget earlier, or your value articulation is not landing before pricing comes up. AI clustering across 50 calls makes this pattern visible in a way that individual call review never could.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 border border-amber-100 dark:border-amber-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">How AI surfaces this:</strong> Nimitai clusters objections across all your calls, shows which objections appear most frequently, which deal stage they appear on, and when in the call they surface. Pricing appearing late on lost deals is flagged as a deal risk pattern.
                </p>
              </div>
            </div>

            {/* Pattern 5 */}
            <div className="mb-4">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E89422] dark:bg-[#E89422] text-white flex items-center justify-center font-bold text-lg">5</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight pt-1">Mention of Competitors</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When a competitor is mentioned during a sales call and not directly addressed, the deal win rate drops significantly. This is one of the most underappreciated patterns in sales call data. Reps frequently hear a competitor name and either deflect ("we don't really compete with them") or pivot away from it. Both responses leave the objection unresolved in the prospect's mind.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The better response is direct engagement: "What's drawing you to them? What specifically are you hoping they'll solve?" This gives you real intelligence about what the prospect values, and it positions you to address the comparison directly and honestly rather than avoiding it. Avoidance signals weakness. Engagement signals confidence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                AI flags every competitor mention and tracks whether it was engaged or ignored. Over 30 or 50 calls, you get a clear picture of which competitors come up most often, in which deal stage, and whether your reps handle those mentions well or deflect them. This competitive intelligence is exceptionally hard to generate manually — but it emerges automatically from systematic call analysis.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 border border-amber-100 dark:border-amber-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">How AI surfaces this:</strong> Nimitai tracks every competitor mention across your call library, shows frequency by competitor, deal stage, and outcome, and identifies calls where competitor mentions were left unaddressed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mid-article CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-[#E89422] to-[#963C00] rounded-3xl p-8 text-center shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">See these patterns in your own calls</h3>
              <p className="text-amber-100 leading-relaxed mb-6">
                Nimitai automatically surfaces all 5 patterns from every call you record. No manual analysis. No reviewing recordings. Just the insights that matter.
              </p>
              <a
                href="#"
                className="px-8 py-4 bg-white text-[#C47010] rounded-full hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 font-semibold"
              >
                Try Nimitai free for 14 days
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* How to Set Up AI Call Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">How AI Conversation Intelligence Automates Sales Call Analysis</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Getting from zero to your first AI insight report is a four-step process that takes under 30 minutes. There is no implementation project, no IT dependency, and no configuration complexity.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Connect your calendar',
                  detail: 'Nimitai reads your Google or Outlook calendar to identify upcoming sales calls. No manual scheduling required — if it\'s on your calendar, it gets recorded.',
                },
                {
                  step: '2',
                  title: 'Record your next call',
                  detail: 'Nimitai\'s recording bot joins automatically at the scheduled call time. Your prospect sees a standard recording notification. The call is captured, transcribed, and sent for analysis.',
                },
                {
                  step: '3',
                  title: 'Review your AI insight report',
                  detail: 'Within minutes of the call ending, you receive a coaching report: talk ratio, questions asked and classified, whether a next step was confirmed, objections raised, and any competitor mentions flagged.',
                },
                {
                  step: '4',
                  title: 'Compare patterns across 10+ calls',
                  detail: 'After your first 10 calls, pattern-level analysis becomes available. You can see your average talk ratio over time, your most common unresolved objection, and whether your next-step confirmation rate is improving.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-md border border-white/80 dark:border-gray-700/80 transition-colors flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040] flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What to Do With the Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Automate Your Sales Call Analysis with Nimitai</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              Analysis without action is expensive note-taking. The purpose of surfacing these five patterns is to generate specific coaching interventions that you can test on your next 10 calls and measure on the 10 after that.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              The most effective approach is a weekly 30-minute review cadence. Look at the aggregate data for the week: average talk ratio, question count distribution, next-step confirmation rate, top objections by frequency. Pick one metric to focus on improving for the following week. Not five — one. Trying to improve talk ratio, question quality, and next-step clarity simultaneously is too much cognitive load to apply in a live call.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              The fastest win for most founders is next-step clarity. It is a discrete, binary behaviour change: does the call end with a specific next step confirmed, or not? Unlike talk ratio (which requires sustained discipline across a 45-minute call), next-step confirmation happens in the final 90 seconds of every call. It is the highest-leverage, lowest-friction improvement available, and it produces measurable pipeline advancement within 2–3 weeks of consistent execution.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Once next-step confirmation becomes automatic, move to talk ratio. Then question quality. Then objection surfacing timing. Each improvement compounds on the previous one. Over a quarter of consistent coaching, the aggregate effect on close rate is significant — not because you changed your product or your pricing, but because you changed the quality of the conversation.
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How many calls do I need before the AI patterns are meaningful?',
                  a: '10 calls gives you directional data — you can see your average talk ratio, your most common unresolved objections, and whether you\'re confirming next steps. 30+ calls gives you reliable pattern recognition — statistically significant correlations between specific behaviours and deal outcomes in your particular market and ICP. We recommend starting immediately and letting the data accumulate, rather than waiting until you have "enough" calls.',
                },
                {
                  q: 'Can I analyse historical calls I already have?',
                  a: 'Nimitai analyses new calls automatically from the moment you connect your calendar. Historical recordings can be uploaded for retrospective analysis — this is useful for establishing a baseline before comparing to post-implementation behaviour. Contact us after signing up to discuss historical import options.',
                },
                {
                  q: 'How is this different from just reading transcripts?',
                  a: 'Reading transcripts is sequential — one call at a time, one hour per call. AI analysis is cross-call. It surfaces patterns across 50 calls simultaneously that would take you 50 hours to find manually. More importantly, the patterns that matter — talk ratio trends over time, objection clustering by deal stage, competitor mention correlation with win rates — are invisible to sequential reading. They only emerge from aggregate analysis.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-md border border-white/80 dark:border-gray-700/80 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">{item.q}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Back to blog */}
          <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#C47010] dark:text-[#F5B040] hover:text-amber-800 dark:hover:text-amber-100 font-medium transition-colors"
            >
              <span>←</span> Back to the blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
