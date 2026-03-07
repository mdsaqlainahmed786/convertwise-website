import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    title: 'What is Meeting Intelligence? The Complete Guide for 2026',
    slug: '/blog/what-is-meeting-intelligence',
    date: 'Mar 6, 2026',
    readTime: '10 min',
    category: 'Conversation Intel',
    excerpt: 'Meeting intelligence explained: what it is, how the AI works, key features, use cases, how it differs from basic notetakers, and how to choose the right platform for your B2B sales team in 2026.',
    image: '/og-image.png',
  },
  {
    title: 'Fathom vs Gong vs Nimitai: Full Comparison 2026',
    slug: '/blog/fathom-vs-gong-vs-nimitai',
    date: 'Mar 6, 2026',
    readTime: '9 min',
    category: 'Tool Comparison',
    excerpt: 'Fathom vs Gong vs Nimitai — a full feature, pricing, and coaching capability breakdown. Which AI sales tool is right for your B2B sales team in 2026?',
    image: '/og-image.png',
  },
  {
    title: 'Otter.ai vs Gong vs Nimitai: Which AI Sales Tool Wins in 2026?',
    slug: '/blog/otter-vs-gong-vs-nimitai',
    date: 'Mar 6, 2026',
    readTime: '8 min',
    category: 'Tool Comparison',
    excerpt: 'Otter.ai vs Gong vs Nimitai — full feature, pricing, and sales intelligence breakdown. Which AI meeting tool is right for your B2B sales team in 2026?',
    image: '/og-image.png',
  },
  {
    title: 'How AI is Replacing Sales Managers (And Why That\'s a Good Thing)',
    slug: '/blog/how-ai-is-replacing-sales-managers',
    date: 'Mar 6, 2026',
    readTime: '9 min',
    category: 'AI Sales Coaching',
    excerpt: 'AI is taking over the parts of sales management that humans were never good at — coaching every call, spotting patterns, real-time guidance. Here\'s what that means for sales leaders.',
    image: '/og-image.png',
  },
  {
    title: 'How to Run a Perfect Discovery Call (With AI): A Step-by-Step Playbook',
    slug: '/blog/perfect-discovery-call-ai-playbook',
    date: 'Mar 6, 2026',
    readTime: '10 min',
    category: 'Sales Playbooks',
    excerpt: 'A step-by-step discovery call playbook for B2B sales teams — the 5-phase structure, 10 best questions, AI tools that help, and a scoring rubric for every call.',
    image: '/og-image.png',
  },
  {
    title: 'tl;dv vs Gong vs Nimitai 2026: Which One Actually Coaches Your Reps?',
    slug: '/blog/tldv-vs-gong-vs-nimitai',
    date: 'Mar 6, 2026',
    readTime: '10 min',
    category: 'Tool Comparison',
    excerpt: 'tl;dv vs Gong vs Nimitai — a full feature, pricing, and coaching capability breakdown. Which meeting intelligence tool is right for your B2B sales team in 2026?',
    image: '/og-image.png',
  },
  {
    title: 'Chorus vs Gong vs Nimitai 2026: Enterprise CI vs Startup-Friendly AI',
    slug: '/blog/chorus-vs-gong-vs-nimitai',
    date: 'Mar 6, 2026',
    readTime: '10 min',
    category: 'Tool Comparison',
    excerpt: 'Chorus vs Gong vs Nimitai — enterprise conversation intelligence head-to-head. Is Chorus worth the ZoomInfo bundle? Where does Nimitai fit for startup sales teams?',
    image: '/og-image.png',
  },
  {
    title: 'Sales Call Recording Laws by State 2026: What Every Sales Team Must Know',
    slug: '/blog/sales-call-recording-laws-2026',
    date: 'Mar 6, 2026',
    readTime: '11 min',
    category: 'Sales Compliance',
    excerpt: 'Which US states require two-party consent? Is GDPR relevant? A complete guide to sales call recording laws by state in 2026, with a state-by-state consent table.',
    image: '/og-image.png',
  },
  {
    title: 'Best AI Sales Coaching Software 2026: Ranked by Real Sales Teams',
    slug: '/blog/best-ai-sales-coaching-software-2026',
    date: 'Mar 6, 2026',
    readTime: '10 min',
    category: 'AI Sales Coaching',
    excerpt: 'The 6 best AI sales coaching software tools in 2026, ranked by real B2B sales teams. From enterprise Gong to budget-friendly Nimitai — find the right fit for your team size and budget.',
    image: '/og-image.png',
  },
  {
    title: 'Fireflies vs Gong vs Nimitai: Full Comparison 2026',
    slug: '/blog/fireflies-vs-gong-vs-nimitai',
    date: 'Mar 6, 2026',
    readTime: '10 min',
    category: 'Tool Comparison',
    excerpt: 'Fireflies vs Gong vs Nimitai — a full feature, pricing, and use-case breakdown. Which conversation intelligence tool is right for your sales team in 2026?',
    image: '/og-image.png',
  },
  {
    title: 'The Real Cost of Gong: Hidden Fees, Contracts, and What Nobody Tells You',
    slug: '/blog/gong-real-cost-hidden-fees',
    date: 'Mar 6, 2026',
    readTime: '9 min',
    category: 'Sales Intelligence',
    excerpt: 'The number on Gong\'s pricing page isn\'t your invoice total. Platform fees, seat minimums, implementation costs, and auto-renewal clauses add $10,000–$30,000+ to your real bill.',
    image: '/og-image.png',
  },
  {
    title: 'Why We Named It Nimitai: The Sanskrit Word That Became Our Mission',
    slug: '/blog/why-nimitai-name',
    date: 'Mar 1, 2026',
    readTime: '6 min',
    category: 'Founder Story',
    excerpt: 'The name "Nimitai" comes from the Sanskrit word "nimit" — meaning purpose, destined instrument, and the cause behind an effect. Here\'s why we chose it, what it means, and how a 3,000-year-old word defines everything we build.',
    image: '/og-image.png',
  },
  {
    title: 'Why We Built Nimitai: What 350 Sales Calls Taught Us About AI',
    slug: '/blog/why-we-built-nimitai',
    date: 'Feb 28, 2026',
    readTime: '9 min',
    category: 'Founder Story',
    excerpt: 'Nilansh and Archit share the real story behind Nimitai — 350 B2B sales calls, 47 teams interviewed, and the moment everything became clear about what AI in sales needs to actually do.',
    image: '/og-image.png',
  },
  {
    title: 'From Digitalpatron to Nimitai: Why We Started Over — Our Ideology, Mission, and Vision',
    slug: '/blog/from-digitalpatron-to-nimitai',
    date: 'Feb 28, 2026',
    readTime: '10 min',
    category: 'Founder Story',
    excerpt: 'The honest account of how Nilansh and Archit left Digitalpatron.in and ConvertWise behind, what they learned, and why a fresh start was the only path to building something that actually solves the real problem.',
    image: '/og-image.png',
  },
  {
    title: 'Real-Time AI Sales Coaching: Why Post-Call Review Is Already Too Late',
    slug: '/blog/real-time-sales-coaching-ai',
    date: 'Feb 28, 2026',
    readTime: '8 min',
    category: 'AI Sales Coaching',
    excerpt: 'Post-call coaching makes the next call better. Real-time AI coaching wins the current deal. Here is the difference — and why it is the most important distinction in conversation intelligence.',
    image: '/og-image.png',
  },
  {
    title: 'Buyer Intent Signals in Sales Calls: How to Detect Them Before It\'s Too Late',
    slug: '/blog/buyer-intent-signals-sales-calls',
    date: 'Feb 28, 2026',
    readTime: '7 min',
    category: 'Conversation Intelligence',
    excerpt: 'The 6 strongest buyer intent signal categories in B2B sales calls — timeline anchoring, implementation questions, stakeholder mentions — and how AI conversation intelligence detects them in real time.',
    image: '/og-image.png',
  },
  {
    title: 'How to Increase Sales Close Rate: 9 Proven Strategies from 350+ B2B Sales Calls',
    slug: '/blog/how-to-increase-close-rate',
    date: 'Feb 28, 2026',
    readTime: '10 min',
    category: 'Sales Performance',
    excerpt: '9 data-backed strategies to increase B2B close rate from analyzing 350+ real sales calls. Covers buying signal response, discovery discipline, objection pre-emption, and real-time AI coaching.',
    image: '/og-image.png',
  },
  {
    title: 'Sales Call Analytics: 7 Metrics That Actually Predict Revenue',
    slug: '/blog/sales-call-analytics',
    date: 'Feb 28, 2026',
    readTime: '8 min',
    category: 'Conversation Intelligence',
    excerpt: 'Stop tracking call duration and talk time. These 7 sales call analytics metrics — talk ratio, buying signal frequency, next-step specificity — are the ones that actually predict deal outcomes.',
    image: '/og-image.png',
  },
  {
    title: 'AI Notetaker vs Conversation Intelligence: Why the Difference Costs You Deals',
    slug: '/blog/ai-notetaker-vs-conversation-intelligence',
    date: 'Feb 28, 2026',
    readTime: '7 min',
    category: 'Conversation Intelligence',
    excerpt: 'Fathom, Otter, and Fireflies are AI notetakers — they document your calls. Gong and Nimitai are conversation intelligence platforms — they change their outcomes. Here\'s why that distinction matters.',
    image: '/og-image.png',
  },
  {
    title: 'Gong vs Nimitai (2026): Full Comparison for Startup Sales Teams',
    slug: '/blog/gong-vs-nimitai',
    date: 'Feb 28, 2026',
    readTime: '8 min',
    category: 'Comparison',
    excerpt: 'An honest Gong vs Nimitai comparison for B2B SaaS teams — pricing ($1,600/seat/year vs $149/user/month), real-time coaching, setup time, and who each platform is actually built for.',
    image: '/og-image.png',
  },
  {
    title: 'AI-Powered Objection Handling: How to Win the Moments That Lose Deals',
    slug: '/blog/ai-objection-handling',
    date: 'Feb 28, 2026',
    readTime: '7 min',
    category: 'AI Sales Coaching',
    excerpt: 'Sales objections are predictable. The 5 most common B2B objections, the wrong way and right way to handle each, and how real-time AI conversation intelligence coaches reps through them live.',
    image: '/og-image.png',
  },
  {
    title: 'How to Run a B2B SaaS Demo That Converts: 12 Tactics from 350 Sales Calls',
    slug: '/blog/b2b-saas-demo-best-practices',
    date: 'Feb 28, 2026',
    readTime: '9 min',
    category: 'Founder-Led Sales',
    excerpt: '12 specific tactics that separate B2B SaaS demos that close from demos that end in "I\'ll think about it" — drawn from analyzing 350+ live sales calls by the Nimitai founding team.',
    image: '/og-image.png',
  },
  {
    title: 'Revenue Intelligence Platforms in 2026: What the Best Tools Actually Do',
    slug: '/blog/revenue-intelligence-platforms-2026',
    date: 'Feb 28, 2026',
    readTime: '8 min',
    category: 'Revenue Intelligence',
    excerpt: 'What revenue intelligence actually means, how it differs from CRMs and AI notetakers, the 5 features that predict outcomes, and how Gong, Clari, Chorus, and Nimitai compare in 2026.',
    image: '/og-image.png',
  },
  {
    title: '10 Best Gong Competitors & Alternatives in 2026 (Honest Comparison + Real Pricing)',
    slug: '/blog/gong-competitors-alternatives',
    date: 'Feb 26, 2026',
    readTime: '10 min',
    category: 'Comparison',
    excerpt: 'An honest comparison of the 10 best Gong competitors and alternatives in 2026 — with real pricing, feature breakdowns, and a clear recommendation for startup sales teams who need enterprise-grade intelligence without enterprise pricing.',
    image: '/og-image.png',
  },
  {
    title: 'Gong Pricing in 2026: How Much Does Gong Actually Cost? (Real Numbers)',
    slug: '/blog/gong-pricing-2026',
    date: 'Feb 26, 2026',
    readTime: '7 min',
    category: 'Comparison',
    excerpt: 'The real cost of Gong in 2026 — implementation fees, per-seat pricing, annual minimums, and hidden costs — plus a direct comparison to what startup sales teams actually need.',
    image: '/og-image.png',
  },
  {
    title: 'Best Sales Call Recording Software in 2026: 7 Tools Compared (With Real Pricing)',
    slug: '/blog/best-sales-call-recording-software-startups',
    date: 'Feb 26, 2026',
    readTime: '8 min',
    category: 'Sales Call Recording',
    excerpt: 'Full comparison of the 7 best sales meeting intelligence tools — Gong, Fathom, Fireflies, tl;dv, Avoma, Otter.ai, and Nimitai — with real pricing and an honest take on which tool fits your team size.',
    image: '/og-image.png',
  },
  {
    title: 'How to Analyze Sales Calls: A Complete Guide for Sales Managers in 2026',
    slug: '/blog/how-to-analyze-sales-calls',
    date: 'Feb 26, 2026',
    readTime: '7 min',
    category: 'Conversation Intelligence',
    excerpt: 'Step-by-step sales call analysis guide covering the 5 key metrics, how to spot objection patterns, identify deal risks, and how AI conversation intelligence automates the entire process.',
    image: '/og-image.png',
  },
  {
    title: '15 Sales Call Best Practices That Top B2B Sales Teams Use to Close More Deals',
    slug: '/blog/sales-call-best-practices',
    date: 'Feb 26, 2026',
    readTime: '6 min',
    category: 'AI Sales Coaching',
    excerpt: 'The 15 most effective sales call best practices used by top-performing B2B sales teams — covering discovery call techniques, objection handling, closing strategies, and how conversation intelligence reinforces them.',
    image: '/og-image.png',
  },
  {
    title: 'Conversation Intelligence: The Complete Guide to AI-Powered Sales Analysis (2026)',
    slug: '/blog/conversation-intelligence-guide',
    date: 'Feb 26, 2026',
    readTime: '9 min',
    category: 'Conversation Intelligence',
    excerpt: 'The complete guide to conversation intelligence software: what it is, how AI analyzes sales conversations across a 4-layer pipeline, key features to evaluate, and how to choose the right platform for your team.',
    image: '/og-image.png',
  },
];

const categoryColors: Record<string, string> = {
  'Sales Call Recording': 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
  'Conversation Intelligence': 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
  'AI Sales Coaching': 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
  'Founder Story': 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
  'Sales Performance': 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
  'Comparison': 'bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300',
  'Founder-Led Sales': 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
  'Revenue Intelligence': 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
  'Sales Compliance': 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
  'Sales Intelligence': 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
  'Tool Comparison': 'bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300',
  'Conversation Intel': 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300',
  'Sales Playbooks': 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
};

const PAGE_SIZE = 12;

function toWebp(src: string) {
  return src.replace(/\.(png|jpg|jpeg)$/, '.webp');
}

export function BlogIndex() {
  const [visible, setVisible] = useState(PAGE_SIZE);

  return (
    <>
      <Helmet>
        <title>B2B Sales Intelligence Blog — Nimitai | Sales Call Guides</title>
        <meta name="description" content="Expert guides on conversation intelligence software, sales call recording best practices, AI meeting intelligence, and closing more B2B deals. Practical insights for sales teams." />
        <link rel="canonical" href="https://nimitai.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimitai.com/blog" />
        <meta property="og:title" content="B2B Sales Intelligence Blog — Nimitai | Sales Call Guides" />
        <meta property="og:description" content="Expert guides on conversation intelligence software, sales call recording best practices, AI meeting intelligence, and closing more B2B deals. Practical insights for sales teams." />
        <meta property="og:image" content="https://nimitai.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nimitai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NimitaiHQ" />
        <meta name="twitter:title" content="B2B Sales Intelligence Blog — Nimitai | Sales Call Guides" />
        <meta name="twitter:description" content="Expert guides on conversation intelligence software, sales call recording best practices, AI meeting intelligence, and closing more B2B deals." />
        <meta name="twitter:image" content="https://nimitai.com/og-image.png" />
        {/* Preload first above-fold card image (all posts share og-image.png) */}
        <link rel="preload" as="image" href="/og-image.png" type="image/png" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040] text-sm font-medium tracking-wide uppercase">
            The Nimitai Blog
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
            Sales Intelligence &amp; Conversation Intelligence Guides
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Expert guides on conversation intelligence software, sales call recording best practices, AI meeting intelligence, and how B2B sales teams close more deals using data from their calls.
          </p>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="bg-white dark:bg-gray-900 transition-colors py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(0, visible).map((post, i) => (
              <article
                key={post.slug}
                className="bg-white/95 dark:bg-gray-800/60 rounded-3xl overflow-hidden shadow-lg border border-white/80 dark:border-gray-700/80 flex flex-col group hover:shadow-xl transition-shadow"
              >
                {/* Thumbnail — WebP with PNG fallback */}
                <Link to={post.slug} className="block overflow-hidden">
                  <picture>
                    <source srcSet={toWebp(post.image)} type="image/webp" />
                    <img
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={630}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      fetchPriority={i < 2 ? 'high' : 'auto'}
                      decoding={i < 2 ? 'sync' : 'async'}
                      className="w-full aspect-[1200/630] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </picture>
                </Link>

                <div className="p-8 flex flex-col flex-1">
                  {/* Category badge + Meta */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${categoryColors[post.category] ?? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">·</span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
                    <span className="text-sm text-gray-400 dark:text-gray-500">·</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 leading-snug">
                    <Link
                      to={post.slug}
                      className="text-gray-900 dark:text-white hover:text-[#C47010] dark:hover:text-[#F5B040] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* CTA link */}
                  <Link
                    to={post.slug}
                    className="inline-flex items-center gap-1 text-[#C47010] dark:text-[#F5B040] font-semibold hover:text-amber-800 dark:hover:text-amber-100 transition-colors"
                  >
                    Read article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          {visible < posts.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisible(v => Math.min(v + PAGE_SIZE, posts.length))}
                className="px-8 py-4 rounded-full border-2 border-[#E89422] text-[#C47010] dark:text-[#F5B040] font-semibold hover:bg-[#E89422] hover:text-white transition-colors"
              >
                Load more articles ({posts.length - visible} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-12 shadow-lg border border-white/80 dark:border-gray-700/80">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Ready to turn your calls into coaching?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Nimitai automatically surfaces patterns from every sales call so you can close more deals — without spending hours reviewing recordings.
            </p>
            <a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors inline-flex items-center gap-2"
            >
              Try Nimitai free for 14 days
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
