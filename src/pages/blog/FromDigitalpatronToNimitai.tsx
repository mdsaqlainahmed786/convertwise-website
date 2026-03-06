import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BlogShell, PullQuote, Callout, CalendlyCTA, RelatedArticles, StatStrip } from '../../components/blog/BlogShell';

const siteUrl = 'https://nimitai.com';
const pageUrl = `${siteUrl}/blog/from-digitalpatron-to-nimitai`;
const ogImage = `${siteUrl}/assets/blog/og-digitalpatron-to-nimitai.png`;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From Digitalpatron to Nimitai: Why We Started Over — Our Ideology, Mission, and Vision',
  description:
    'Nilansh Gupta and Archit explain why they pivoted from Digitalpatron.in and ConvertWise to build Nimitai from scratch — the ideology behind the product, the mission, the vision, and why a fresh start was the only honest path forward.',
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
  { id: 'digitalpatron', label: 'What Digitalpatron was' },
  { id: 'ceiling', label: 'The consultancy ceiling' },
  { id: 'convertwise', label: 'The ConvertWise chapter' },
  { id: 'fresh-start', label: 'Why a fresh start required courage' },
  { id: 'ideology', label: 'Our ideology: during, not after' },
  { id: 'mission', label: 'Our mission' },
  { id: 'vision', label: 'Our vision' },
  { id: 'what-we-owe', label: 'What we owe to the past' },
  { id: 'sharing', label: 'Why we\'re sharing this' },
];

export function FromDigitalpatronToNimitai() {
  return (
    <>
      <Helmet>
        <title>From Digitalpatron to Nimitai: Why We Started Over | Nimitai Founders</title>
        <meta
          name="description"
          content="Nilansh and Archit explain why they left Digitalpatron.in and ConvertWise behind to build Nimitai — their ideology on AI meeting intelligence, their mission, and the vision driving everything they build."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="From Digitalpatron to Nimitai: Why We Started Over" />
        <meta property="og:description" content="The pivot story from Digitalpatron and ConvertWise to Nimitai — the founders' honest account of why a fresh start was the right call." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <BlogShell
        title="From Digitalpatron to Nimitai: Why We Started Over — And Why That Was the Only Honest Path"
        description="There's a version of this story where we slowly evolved our consultancy into a product. This isn't that version. This is the story of a hard pivot, a clear ideology, and why a fresh start was the most courageous thing we could do."
        category="Founder Story"
        categoryColor="amber"
        authors={['nilansh', 'archit']}
        date="Feb 28, 2026"
        readTime="10 min"
        toc={toc}
      >
        <StatStrip stats={[
          { number: '350+', label: 'Sales calls analyzed' },
          { number: '47', label: 'Sales teams interviewed' },
          { number: '6mo', label: 'User research before writing code' },
          { number: '3rd', label: 'Version before Nimitai' },
        ]} />

        <h2 id="digitalpatron">What Digitalpatron was</h2>
        <p>
          Archit and I built <strong>Digitalpatron.in</strong> in 2022. It was a digital marketing and growth consultancy — the kind of shop that understood that most B2B companies had a conversion problem, not a traffic problem. We did conversion rate optimization, SEO architecture, paid funnel strategy, and go-to-market consulting for SaaS companies.
        </p>
        <p>
          It was good work and we were good at it. We understood buyers. We understood what messaging moved them and what messaging lost them. We built frameworks, ran experiments, and wrote the kind of copy that actually explains a product instead of describing it in marketing speak.
        </p>
        <p>
          But somewhere around month fourteen, we started noticing something. Every client we worked with had the same final bottleneck: their sales calls.
        </p>

        <h2 id="ceiling">The consultancy ceiling</h2>
        <p>
          We could drive qualified traffic. We could improve the landing page. We could craft the perfect email sequence. But we couldn't be in the room when the rep got on the phone with the prospect.
        </p>
        <p>
          Our clients would run the plays we designed. And then, on the call, the deal would go sideways — not because of the marketing, but because the rep missed a signal, didn't handle an objection well, or failed to create urgency at the right moment.
        </p>
        <p>
          We started sitting in on those calls. We started taking notes. And then we started building something we initially called ConvertWise.
        </p>

        <h2 id="convertwise">The ConvertWise chapter: an honest accounting</h2>
        <p>
          ConvertWise was our first attempt at a product. The name told you what it was trying to do — convert more wisely. The core idea was sound: use AI to help sales reps close more deals.
        </p>
        <p>
          But ConvertWise had a fundamental problem. It was built from the outside in. We built features we thought the market needed, based on what we'd observed from a consultant's distance. We were solving the problem as we had described it, not as the users experienced it.
        </p>
        <p>
          After six months of development and early user testing, we had a product that was technically functional but didn't feel right. It felt like a consultant's interpretation of sales — clean, logical, systematic, and slightly disconnected from the messy reality of an actual sales call.
        </p>

        <PullQuote>That's when we made the decision that felt uncomfortable but was obviously correct: start over.</PullQuote>

        <h2 id="fresh-start">Why a fresh start required courage</h2>
        <p>
          We had real users on ConvertWise. We had invested serious time, money, and credibility. We had a brand that people in our network recognized. Starting over meant explaining to everyone why we were changing direction.
        </p>
        <p>
          There's a particular kind of discomfort in publicly admitting that your first version was wrong — not broken, but wrong in its orientation. It's not a bug report you can patch. It's a worldview you have to abandon.
        </p>
        <p>
          We went back to first principles. We stopped building and started listening. We spent six months doing nothing but conducting user research — 350 sales calls, 47 teams, conversations in Bangalore, Paris, Austin, and London.
        </p>
        <p>
          And we came back with something that felt different. It felt true. That became Nimitai.
        </p>

        <CalendlyCTA headline="See what we built after 350 calls" sub="Book a 20-minute demo and see exactly why we started over — and why the research is visible in every feature." />

        <h2 id="ideology">Our ideology: intelligence during, not after</h2>
        <p>
          Every existing tool in this space — <Link to="/alternatives/gong-alternative">Gong</Link>, Chorus, Fathom, Fireflies — operates on the same basic premise: record the conversation, then analyze it. <a href="https://www.g2.com/categories/conversation-intelligence" target="_blank" rel="noopener noreferrer">G2's conversation intelligence category</a> has over 60 tools, and nearly all of them are post-call. The <a href="https://www.salesforce.com/resources/research-reports/state-of-sales/" target="_blank" rel="noopener noreferrer">Salesforce State of Sales</a> shows that real-time AI guidance is the feature sales teams now rank as their top priority investment.
        </p>
        <p>
          That's a useful premise. But it accepts a fundamental constraint as a given: that AI can only help you understand a conversation after it ends.
        </p>

        <Callout emoji="💡" title="We reject that constraint">
          The most valuable moment to surface intelligence is during the conversation, not after it. A buyer dropping a buying signal in real time is worth a hundred post-call summary emails. A rep getting the right response suggestion at the moment of an objection is worth a thousand coaching sessions after the fact.
        </Callout>

        <p>
          This is not a feature decision. It is a foundational belief about where AI creates the most value in a sales interaction. Everything about Nimitai — the interface, the alerts, the pre-call prep, the live suggestions — flows from this belief.
        </p>

        <h2 id="mission">Our mission</h2>
        <PullQuote>Every B2B sales rep should close at the level of the best closer on their team — from day one, not after a year of experience.</PullQuote>
        <p>
          The gap between a top-performing rep and an average rep at most companies isn't talent. It's pattern recognition. The top rep knows when to push and when to pull, when to go quiet and when to create urgency. They've seen the same buyer behaviors hundreds of times and they've internalized what works.
        </p>
        <p>
          Nimitai makes that pattern recognition available to every rep on the team, in real time. Not as a training video they'll watch once and forget. As a live co-pilot who has already seen ten thousand sales calls and knows exactly what this buyer is about to do next.
        </p>

        <h2 id="vision">Our vision</h2>
        <PullQuote>A world where no B2B sales team goes into a conversation without the full intelligence of AI operating in their favor.</PullQuote>
        <p>
          The largest sales teams in the world already have armies of researchers, analysts, and sales engineers who prep every rep before every call. They have deal desks that can craft pricing responses in minutes. They have playbooks built from years of win/loss analysis.
        </p>
        <p>
          Small and mid-size sales teams have none of that. They go into calls with a CRM record, a LinkedIn profile, and their own instincts.
        </p>
        <p>
          Nimitai is the equalizer. A 5-person sales team using Nimitai walks into every call with the same pre-call preparation, real-time <Link to="/ai-sales-coaching">AI sales coaching</Link>, and post-call follow-through as a 500-person enterprise team. The intelligence gap closes. And when the intelligence gap closes, the best product wins — not the one with the biggest sales infrastructure. <Link to="/pricing">Nimitai starts at $149/seat/month</Link> — no enterprise contracts, no 15-seat minimums.
        </p>

        <h2 id="what-we-owe">What we owe to ConvertWise and Digitalpatron</h2>
        <p>
          Starting over doesn't mean the past was wasted. Digitalpatron gave us a deep understanding of B2B conversion and buyer psychology that most product teams never develop. ConvertWise gave us a first attempt that showed us, concretely, what didn't work — which is arguably more valuable than knowing what does.
        </p>
        <p>
          The 350 sales calls we listened to. The 47 teams we interviewed. The frameworks we developed at Digitalpatron for understanding what makes a buyer move. The technical foundation we built and then rebuilt. All of it lives inside Nimitai.
        </p>
        <p>
          The name changed. The approach changed. But the commitment — to solving the real problem that real sales teams face in real sales conversations — never did.
        </p>

        <h2 id="sharing">Why we're sharing this publicly</h2>
        <p>
          We're writing this because we believe founders should be honest about pivots. Too many startup stories are told backwards — after the product works, everything that came before gets reframed as a straight line to success.
        </p>
        <p>
          That's not our story. Our story is: we built something, admitted it wasn't right, threw it out, spent six months doing research, and came back with something we're genuinely proud of.
        </p>
        <p>
          If you're a sales team considering Nimitai — or a founder wondering whether the product actually comes from deep user research or from a late-night whiteboard session — you deserve to know the answer.
        </p>
        <p>
          The answer is 350 sales calls. The answer is six months of research before we wrote a single line of new code. The answer is Nilansh and Archit sitting across from your problem for a year before we claimed we knew how to solve it.
        </p>
        <p>
          That's why we started over. That's why it was worth it.
        </p>

        <h2 id="faq" className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What was Digitalpatron?', a: 'Digitalpatron.in was a B2B growth and digital marketing consultancy founded by Nilansh and Archit in 2022. It specialized in conversion rate optimization, SEO, and go-to-market strategy for SaaS companies. It became the research foundation for Nimitai.' },
            { q: 'Why did you pivot from ConvertWise to Nimitai?', a: 'ConvertWise was built from a consultant\'s perspective — solving the problem as observed from a distance. After 350 sales calls of direct user research, it became clear the product needed to be rebuilt from scratch around a different core belief: AI should work during the conversation, not after it.' },
            { q: 'What is Nimitai\'s ideology?', a: 'Intelligence during, not after. The most valuable moment to surface an insight is during the live conversation, when the rep can still act on it — not in a post-call summary email. Every product decision at Nimitai is filtered through this principle.' },
            { q: 'How is Nimitai priced?', a: 'Nimitai starts at $149/seat/month with no minimums, no long-term contracts, and a 48-hour time to go live. Every seat added later costs the same rate.' },
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
          { to: '/blog/why-we-built-nimitai', label: 'Why We Built Nimitai: 350 Sales Calls, One Hard Truth' },
          { to: '/blog/conversation-intelligence-guide', label: 'Conversation Intelligence: The Complete Guide' },
        ]} />
      </BlogShell>
    </>
  );
}
