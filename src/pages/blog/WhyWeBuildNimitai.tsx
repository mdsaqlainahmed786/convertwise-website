import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageSquare, Zap, TrendingUp, Users } from 'lucide-react';
import { BlogShell, StatStrip, PullQuote, Callout, RelatedArticles, CalendlyCTA } from '../../components/blog/BlogShell';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/blog/why-we-built-nimitai`;
const ogImage = `${siteUrl}/assets/blog/og-why-we-build-nimitai.png`;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why We Built Nimitai: What 350 Sales Calls Taught Us About AI',
  description: 'Nilansh and Archit share the real story behind Nimitai — 350 B2B sales calls, 47 teams interviewed, and the moment everything became clear.',
  url: pageUrl,
  datePublished: '2026-02-28',
  dateModified: '2026-02-28',
  author: [
    { '@type': 'Person', name: 'Nilansh Gupta', url: `${siteUrl}/about` },
    { '@type': 'Person', name: 'Archit', url: `${siteUrl}/about` },
  ],
  publisher: { '@type': 'Organization', name: 'Nimitai', url: siteUrl },
  image: ogImage,
};

const toc = [
  { id: 'google-sheet', label: 'It started with a Google Sheet' },
  { id: 'three-fifty-calls', label: '350 calls and one pattern' },
  { id: 'existing-tools', label: 'Why existing tools failed' },
  { id: 'what-we-heard', label: 'What sales teams told us' },
  { id: 'the-moment', label: 'The moment we knew' },
  { id: 'what-nimitai-is', label: 'What Nimitai is — and isn\'t' },
  { id: 'who-for', label: 'Who we\'re building for' },
  { id: 'beta-feedback', label: 'Beta feedback' },
];

export function WhyWeBuildNimitai() {
  return (
    <>
      <Helmet>
        <title>Why We Built Nimitai: 350 Sales Calls, One Hard Truth | Nimitai</title>
        <meta name="description" content="Nilansh and Archit share the story behind Nimitai — 350 B2B sales calls that revealed a painful truth about AI in sales, and why they built conversation intelligence from scratch." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Why We Built Nimitai: 350 Sales Calls, One Hard Truth" />
        <meta property="og:description" content="The real founder story behind Nimitai AI meeting intelligence — 350 calls, 47 teams, and the moment everything became clear." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <BlogShell
        title="Why We Built Nimitai: What 350 Sales Calls Taught Us About AI"
        description="We are Nilansh and Archit — and this is the story of 350 sales calls, one painful pattern, and why we walked away from everything we'd built to create something the market actually needed."
        category="Founder Story"
        categoryColor="amber"
        authors={['nilansh', 'archit']}
        date="Feb 28, 2026"
        readTime="9 min"
        toc={toc}
      >
        <StatStrip stats={[
          { number: '350+', label: 'Sales calls listened to' },
          { number: '47', label: 'Sales teams interviewed' },
          { number: '6', label: 'Months of user research' },
          { number: '67%', label: 'Calls with a missed buying signal' },
        ]} />

        <h2 id="google-sheet">It started with a Google Sheet</h2>
        <p>
          In early 2024, Archit and I were running <strong>Digitalpatron.in</strong> — a growth and digital marketing consultancy we'd built from scratch. We worked with B2B SaaS companies across India, Southeast Asia, and the UK, helping them with conversion rate optimization, funnel strategy, and go-to-market playbooks.
        </p>
        <p>
          We were good at it. We understood buyers. We understood what messaging moved them and what messaging lost them. But something kept nagging at us.
        </p>
        <p>
          Our clients would implement everything we recommended — better landing pages, smarter email sequences, tighter ICP targeting — and then lose deals in the last mile. On the call. With a real human buyer who was interested but not yet convinced.
        </p>
        <p>
          We started sitting in on sales calls. First as observers. Then we started keeping a Google Sheet. That sheet grew into something we hadn't expected.
        </p>

        <h2 id="three-fifty-calls">350 calls and one pattern that wouldn't go away</h2>
        <p>
          Over six months, we listened to more than 350 B2B sales calls. We talked to 47 different sales teams — SDRs, AEs, founders doing their own selling, VP Sales at Series A companies. We watched demos, discovery calls, pricing conversations, and closing sequences.
        </p>
        <p>
          We weren't looking for one thing. We were just watching. But one pattern appeared in so many calls it became impossible to ignore:
        </p>

        <PullQuote>The rep knew what to say. They just didn't know when.</PullQuote>

        <p>
          The buyer would drop a buying signal — a question about implementation timelines, a comment about their current vendor's pricing, a mention of their end-of-quarter budget — and the rep would nod, keep talking, and miss it. Not because they were bad. Because they were managing the entire conversation in their head, processing context, remembering notes, handling nerves, and trying to sound natural all at once.
        </p>
        <p>
          Post-call, with the transcript in front of them, every rep could see it immediately. "I should have said this here." "That was my moment." But by then it was too late. The buyer had moved on. The <a href="https://www.salesforce.com/resources/research-reports/state-of-sales/" target="_blank" rel="noopener noreferrer">Salesforce State of Sales</a> puts it plainly: 57% of reps say they miss buying signals during live calls. <a href="https://www.g2.com/categories/conversation-intelligence" target="_blank" rel="noopener noreferrer">G2's conversation intelligence category</a> has exploded as a result — teams are finally investing in tools that catch those moments in real time.
        </p>

        <Callout emoji="📊" title="The number that changed everything">
          In 67% of calls where a buying signal was present, the rep missed it or failed to respond to it within the same call. In roughly a third of those cases, acting on the missed signal would have materially changed the outcome of the deal.
        </Callout>

        <h2 id="existing-tools">Why existing tools weren't solving it</h2>
        <p>
          We looked at <Link to="/alternatives/gong-alternative">Gong</Link>, <Link to="/alternatives/chorus-alternative">Chorus</Link>, <Link to="/alternatives/fireflies-alternative">Fireflies</Link>, and a dozen others. They were all doing excellent post-call summaries. A few were flagging keywords.
        </p>
        <p>
          But they were all solving the wrong problem. They were making it easier to <em>review</em> what went wrong. Not easier to <em>get it right</em> while it was happening.
        </p>

        <PullQuote>Post-call analysis helps you understand what happened. Real-time intelligence helps you win.</PullQuote>

        <p>
          That distinction became the foundation of Nimitai.
        </p>

        <h2 id="what-we-heard">What we heard from real sales teams</h2>
        <p>We asked every team we interviewed the same question: <em>"If you could have one thing happen differently in your sales calls, what would it be?"</em></p>
        <p>The answers fell into four buckets:</p>

        <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
          {[
            { icon: <MessageSquare size={18} />, title: 'Know when to close', body: '"I miss the window. By the time I push, the energy is gone."' },
            { icon: <Zap size={18} />, title: 'Handle pricing objections live', body: '"I freeze when they bring up Gong. I don\'t have a crisp answer ready."' },
            { icon: <TrendingUp size={18} />, title: "Track who's actually interested", body: '"I waste follow-up energy on deals that were already dead on the call."' },
            { icon: <Users size={18} />, title: 'Coach without reviewing hours of calls', body: '"I\'d love to coach my team more but I can\'t review 20 calls a week."' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/40">
              <div className="text-[#E89422] mt-0.5 flex-shrink-0">{item.icon}</div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs italic">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p>These weren't edge cases. These were the four most common answers, across company sizes, industries, and geographies. The pain was universal.</p>

        <CalendlyCTA headline="Want to see how Nimitai solves this?" sub="Book a 20-minute live demo — we'll show you real-time intelligence on a real sales call." />

        <h2 id="the-moment">The moment we knew we had to build this</h2>
        <p>
          We were on a call with a founder in Bangalore — a 7-person SaaS team selling to mid-market HR departments. He was pitching a genuinely good product. The prospect was engaged, asking detailed questions about integrations, mentioning that their current vendor had a renewal coming up.
        </p>
        <p>
          The founder heard all of it. He acknowledged the renewal comment, moved to the next slide, and kept pitching. He didn't realize what had just happened: the buyer had just handed him the single most important piece of competitive intelligence possible on that call, and it had passed unacknowledged.
        </p>
        <p>
          Two weeks later, we asked him how the deal went. Lost. The prospect renewed with their existing vendor because <em>"the timing wasn't right."</em>
        </p>

        <PullQuote>We looked at each other. We already knew what we were going to build. We just needed to admit it out loud.</PullQuote>

        <h2 id="what-nimitai-is">What Nimitai is — and isn't</h2>
        <p>
          Nimitai is not a call recorder. It is not a transcription tool. It is not a coaching platform you use after the call ends.
        </p>
        <p>
          Nimitai is an AI co-pilot that operates in real time, during the live conversation. It listens, processes context, and surfaces intelligence to the rep at the moment it's needed — not in a summary email at 6pm.
        </p>

        <Callout emoji="⚡" title="What Nimitai does in a live meeting">
          Real-time buyer intent detection → Live objection coaching → Pre-call intelligence briefing → Automatic post-meeting follow-through. All without call recording.
        </Callout>

        <p>The goal is simple: every rep on your team closes at the level of your best closer. Not next quarter. From the first week they use Nimitai.</p>

        <h2 id="who-for">Who we're building for</h2>
        <p>
          We are not building for Salesforce. We are not building for companies with 500-seat enterprise contracts and dedicated RevOps teams.
        </p>
        <p>
          We are building for the B2B SaaS team with 2 to 20 sales reps. The founder who does their own selling. The VP Sales who spends Sunday nights listening to call recordings instead of spending time with their family. The SDR who's three months in and still losing deals they should be winning.
        </p>
        <p>
          <Link to="/pricing">Nimitai starts at $149/seat/month</Link> — and every seat you add later costs the same. No enterprise contracts. No 15-seat minimums.
        </p>

        <h2 id="beta-feedback">A note on our beta feedback</h2>
        <p>
          We launched private beta in early 2026. Over 500 teams joined the waitlist. The first cohort of founding customers is live.
        </p>
        <p>
          The feedback has been better than we expected — and more honest than we feared. Teams tell us they're closing deals they would have lost. Sales managers tell us they're coaching from the dashboard instead of from call transcripts. Founders tell us they finally understand what's happening in their team's calls without sitting in on them.
        </p>
        <p>
          That's not a coincidence. That's 350 calls worth of research showing up in a product.
        </p>

        <StatStrip stats={[
          { number: '31%', label: 'Average close rate increase' },
          { number: '14hrs', label: 'Saved per rep per week' },
          { number: '48h', label: 'Time to go live' },
          { number: '$149', label: 'Per seat per month' },
        ]} />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What problem does Nimitai solve?', a: 'Nimitai solves the buying signal gap — the moment a buyer drops a signal (timeline question, budget mention, competitor reference) and the rep misses it because they are managing the conversation in their head. Nimitai surfaces those signals in real time so the rep can act on them during the call.' },
            { q: 'Why did you build Nimitai instead of improving an existing tool?', a: 'Every existing tool we evaluated operated on the same premise: record the call, then analyze it. That solves the wrong problem. Understanding what went wrong after the fact is useful. Preventing it from going wrong in the first place is transformative. No existing tool was doing the latter.' },
            { q: 'Who is Nimitai built for?', a: 'Nimitai is built for B2B SaaS sales teams with 2 to 50 reps — founders doing their own selling, AEs who want to close more, and VP Sales who want to coach without reviewing hours of call recordings every week.' },
            { q: 'How much does Nimitai cost?', a: 'Nimitai starts at $149/seat/month with no minimums, no enterprise contracts, and a 48-hour time to go live. Every additional seat costs the same.' },
          ].map(({ q, a }) => (
            <div key={q} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">{q}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl text-center">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">See Nimitai in action</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">Built for B2B SaaS sales teams. <Link to="/pricing">From $149/seat/month</Link>, 30-minute setup.</p>
          <a href="https://nilanshgupta.typeform.com/to/UNvZIrgu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E89422] to-orange-500 text-white font-semibold rounded-full hover:from-[#C47010] hover:to-orange-600 transition-colors">
            Join the Waitlist
          </a>
        </div>

        <RelatedArticles links={[
          { to: '/ai-meeting-assistant', label: 'AI Meeting Assistant — Nimitai' },
          { to: '/pricing', label: 'Nimitai Pricing — $149/seat/month' },
          { to: '/blog/from-digitalpatron-to-nimitai', label: 'From Digitalpatron to Nimitai: Why We Started Over' },
          { to: '/blog/how-to-increase-close-rate', label: 'How to Increase Close Rate: 9 Strategies from 350+ Calls' },
        ]} />
      </BlogShell>
    </>
  );
}
