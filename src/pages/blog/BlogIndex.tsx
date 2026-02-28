import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    title: 'Best Sales Call Recording Software in 2026: 7 Tools Compared (With Real Pricing)',
    slug: '/blog/best-sales-call-recording-software-startups',
    date: 'Feb 26, 2026',
    readTime: '8 min',
    category: 'Sales Call Recording',
    excerpt:
      'Full comparison of the 7 best sales call recording software tools — Gong, Fathom, Fireflies, tl;dv, Avoma, Otter.ai, and Nimitai — with real pricing and an honest take on which sales call recording tool fits your team size.',
  },
  {
    title: 'How to Analyze Sales Calls: A Complete Guide for Sales Managers in 2026',
    slug: '/blog/how-to-analyze-sales-calls',
    date: 'Feb 26, 2026',
    readTime: '7 min',
    category: 'Conversation Intelligence',
    excerpt:
      'Step-by-step sales call analysis guide covering the 5 key metrics, how to spot objection patterns, identify deal risks, and how AI conversation intelligence automates the entire process.',
  },
  {
    title: '15 Sales Call Best Practices That Top B2B Sales Teams Use to Close More Deals',
    slug: '/blog/sales-call-best-practices',
    date: 'Feb 26, 2026',
    readTime: '6 min',
    category: 'AI Sales Coaching',
    excerpt:
      'The 15 most effective sales call best practices used by top-performing B2B sales teams — covering discovery call techniques, objection handling, closing strategies, and how conversation intelligence reinforces them.',
  },
  {
    title: 'Conversation Intelligence: The Complete Guide to AI-Powered Sales Call Analysis (2026)',
    slug: '/blog/conversation-intelligence-guide',
    date: 'Feb 26, 2026',
    readTime: '9 min',
    category: 'Conversation Intelligence',
    excerpt:
      'The complete guide to conversation intelligence software: what it is, how AI analyzes sales calls across a 4-layer pipeline, key features to evaluate, and how to choose the right conversation intelligence platform for your team.',
  },
];

const categoryColors: Record<string, string> = {
  'Sales Call Recording': 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
  'Conversation Intelligence': 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
  'AI Sales Coaching': 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
};

export function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>B2B Sales Intelligence Blog — Nimitai | Sales Call Guides</title>
        <meta
          name="description"
          content="Expert guides on conversation intelligence software, sales call recording best practices, AI meeting intelligence, and closing more B2B deals. Practical insights for sales teams."
        />
        <link rel="canonical" href="https://nimitai.com/blog" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040] text-sm font-medium tracking-wide uppercase">
              The Nimitai Blog
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent leading-tight">
              Sales Intelligence & Conversation Intelligence Guides
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Expert guides on conversation intelligence software, sales call recording best practices, AI meeting intelligence, and how B2B sales teams close more deals using data from their calls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="bg-white dark:bg-gray-900 transition-colors py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors flex flex-col group hover:shadow-2xl"
              >
                {/* Category badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${categoryColors[post.category] ?? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    {post.category}
                  </span>
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

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time dateTime="2026-02-26">{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime} read</span>
                </div>

                {/* Excerpt */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                {/* CTA link */}
                <Link
                  to={post.slug}
                  className="inline-flex items-center gap-1 text-[#C47010] dark:text-[#F5B040] font-semibold hover:text-amber-800 dark:hover:text-amber-100 transition-colors group-hover:gap-2"
                >
                  Read article
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/80 dark:border-gray-700/80 transition-colors"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-gray-900 dark:from-white via-[#1A1000] dark:via-[#F5B040] to-[#C47010] dark:to-[#F5B040] bg-clip-text text-transparent">
              Ready to turn your calls into coaching?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Nimitai automatically surfaces patterns from every sales call so you can close more deals — without spending hours reviewing recordings.
            </p>
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Try Nimitai free for 14 days
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
