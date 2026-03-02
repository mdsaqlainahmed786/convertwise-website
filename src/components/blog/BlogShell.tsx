import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'motion/react';
import { Linkedin, Twitter, Link2, Calendar, ArrowRight, Check, TrendingUp, Lightbulb } from 'lucide-react';

/* ─── Constants ─────────────────────────────────────────────── */
export const CALENDLY_URL = 'https://calendly.com/gnilansh';
export const NILANSH_LINKEDIN = 'https://linkedin.com/in/nilanshgupta';
export const ARCHIT_LINKEDIN = 'https://www.linkedin.com/in/architdhir-healthcare-growth/';
export const COMPANY_LINKEDIN = 'https://www.linkedin.com/company/nimitai';
export const TWITTER_URL = 'https://twitter.com/nimitaihq';
export const SITE_URL = 'https://nimitai.com';

/* ─── Types ──────────────────────────────────────────────────── */
export interface TocItem { id: string; label: string }
export type AuthorKey = 'nilansh' | 'archit';

const AUTHORS: Record<AuthorKey, { name: string; role: string; initials: string; color: string; linkedin: string; bio: string }> = {
  nilansh: {
    name: 'Nilansh Gupta',
    role: 'Co-founder & CEO, Nimitai',
    initials: 'N',
    color: 'from-[#E89422] to-[#963C00]',
    linkedin: NILANSH_LINKEDIN,
    bio: 'Nilansh spent 6 months listening to 350+ B2B sales calls before founding Nimitai. He previously built Digitalpatron.in, a growth and CRO consultancy for SaaS companies.',
  },
  archit: {
    name: 'Archit',
    role: 'Co-founder & CTO, Nimitai',
    initials: 'A',
    color: 'from-orange-500 to-orange-800',
    linkedin: ARCHIT_LINKEDIN,
    bio: 'Archit leads product and engineering at Nimitai. He co-founded Digitalpatron.in and has spent years building AI-powered tools for B2B sales teams.',
  },
};

/* ─── Animated Counter ───────────────────────────────────────── */
function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [displayed, setDisplayed] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const numericMatch = value.match(/^([\d.]+)/);
    if (!numericMatch) { setDisplayed(value); return; }
    const target = parseFloat(numericMatch[1]);
    const suffix = value.slice(numericMatch[0].length);
    const isDecimal = value.includes('.');
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = eased * target;
      setDisplayed((isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{displayed}</span>;
}

/* ─── Reading Progress Bar ───────────────────────────────────── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-200/30 dark:bg-gray-800/30 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#E89422] to-[#963C00]"
        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  );
}

/* ─── Share Buttons ──────────────────────────────────────────── */
function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : SITE_URL;

  const shareLinkedIn = () =>
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');

  const shareTwitter = () =>
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 dark:text-gray-500 mr-1 hidden sm:block">Share</span>
      <button
        onClick={shareLinkedIn}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] dark:text-blue-400 transition-colors text-xs font-medium"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={13} /> LinkedIn
      </button>
      <button
        onClick={shareTwitter}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors text-xs font-medium"
        aria-label="Share on Twitter"
      >
        <Twitter size={13} /> Twitter
      </button>
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors text-xs font-medium"
        aria-label="Copy link"
      >
        {copied
          ? <span className="flex items-center gap-1 text-green-600"><Check size={13} /> Copied!</span>
          : <span className="flex items-center gap-1"><Link2 size={13} /> Copy</span>
        }
      </button>
    </div>
  );
}

/* ─── Sticky TOC ─────────────────────────────────────────────── */
function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav aria-label="Table of contents" className="space-y-1">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">On this page</p>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-colors ${
            active === item.id
              ? 'border-[#E89422] text-[#C47010] dark:text-[#F5B040] font-medium'
              : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

/* ─── Author Card ────────────────────────────────────────────── */
function AuthorCard({ authorKey }: { authorKey: AuthorKey }) {
  const a = AUTHORS[authorKey];
  return (
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-amber-900/10 dark:to-orange-900/5 border border-amber-100/80 dark:border-amber-900/30">
      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
        {a.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-900 dark:text-white text-base">{a.name}</p>
        <p className="text-xs text-[#C47010] dark:text-[#F5B040] font-medium mb-2">{a.role}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{a.bio}</p>
        <div className="flex items-center gap-4">
          <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] hover:underline">
            <Linkedin size={13} /> LinkedIn
          </a>
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:underline">
            <Twitter size={13} /> @nimitaihq
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Calendly CTA ───────────────────────────────────────────── */
export function CalendlyCTA({ headline = "Book a 20-minute demo", sub = "See Nimitai in a live sales call — no slides, no pitch deck, just real-time intelligence on a real conversation." }: { headline?: string; sub?: string }) {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br from-[#E89422]/12 via-orange-500/6 to-amber-400/4 border border-[#E89422]/30 p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5 my-12"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E89422] to-[#963C00] flex items-center justify-center shadow-lg">
        <Calendar size={22} className="text-white" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <p className="font-bold text-gray-900 dark:text-white text-[1.0625rem]">{headline}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{sub}</p>
      </div>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white text-sm font-semibold rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap hover:scale-105"
      >
        Book a Call <ArrowRight size={15} />
      </a>
    </div>
  );
}

/* ─── Pull Quote ─────────────────────────────────────────────── */
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-14 px-2 sm:px-6">
      <div className="relative text-center">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[7rem] text-[#E89422]/10 font-serif leading-none select-none pointer-events-none">"</div>
        <blockquote className="relative text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 leading-[1.45] italic pt-6 pb-4 px-4">
          {children}
        </blockquote>
        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-[#E89422] to-transparent mt-2" />
      </div>
    </div>
  );
}

/* ─── Stat Strip ─────────────────────────────────────────────── */
export function StatStrip({ stats }: { stats: { number: string; label: string }[] }) {
  return (
    <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-px my-12 overflow-hidden rounded-2xl border border-amber-100/80 dark:border-amber-900/30 bg-amber-100/30 dark:bg-amber-900/10 shadow-sm">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="bg-white dark:bg-gray-900 p-5 text-center"
        >
          <div className="text-3xl sm:text-4xl font-black text-[#E89422] tabular-nums leading-none mb-1.5">
            <AnimatedNumber value={s.number} />
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Callout Box ────────────────────────────────────────────── */
export function Callout({
  emoji = '💡',
  title,
  children,
  variant = 'default',
}: {
  emoji?: string;
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'success' | 'data';
}) {
  const styles = {
    default: 'border-amber-200/70 dark:border-amber-800/40 bg-amber-50 dark:bg-amber-950/30',
    warning: 'border-orange-200/70 dark:border-orange-800/40 bg-orange-50 dark:bg-orange-950/30',
    success: 'border-green-200/70 dark:border-green-800/40 bg-green-50 dark:bg-green-950/30',
    data: 'border-blue-200/70 dark:border-blue-800/40 bg-blue-50 dark:bg-blue-950/30',
  }[variant];

  return (
    <div className={`not-prose my-8 flex gap-4 p-5 rounded-xl border ${styles}`}>
      <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{emoji}</span>
      <div>
        {title && <p className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</p>}
        <div className="text-[0.9375rem] text-gray-700 dark:text-gray-300 leading-[1.7]">{children}</div>
      </div>
    </div>
  );
}

/* ─── Key Takeaway ───────────────────────────────────────────── */
export function KeyTakeaway({ children, title = 'Key Takeaway' }: { children: React.ReactNode; title?: string }) {
  return (
    <div
      className="not-prose my-12 relative overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/40 to-white dark:from-[#1A0A00] dark:via-amber-950/30 dark:to-gray-900 border border-amber-200/60 dark:border-amber-700/30 rounded-2xl" />
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <Lightbulb size={128} className="text-[#E89422]" />
      </div>
      <div className="relative px-7 py-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#E89422] rounded-full" />
          <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#C47010] dark:text-[#F5B040]">{title}</p>
        </div>
        <div className="text-[1.0625rem] leading-[1.75] text-gray-800 dark:text-gray-200 font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Section Divider ────────────────────────────────────────── */
export function SectionDivider({ label }: { label?: string }) {
  if (label) {
    return (
      <div className="not-prose my-14 flex items-center gap-5">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200 dark:to-gray-700/60" />
        <span className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 px-1">{label}</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200 dark:to-gray-700/60" />
      </div>
    );
  }
  return (
    <div className="not-prose my-14 flex items-center justify-center gap-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700" />
      ))}
    </div>
  );
}

/* ─── Bar Visualization ──────────────────────────────────────── */
export function BarViz({
  title,
  bars,
  caption,
}: {
  title?: string;
  bars: { label: string; value: number; suffix?: string; color?: string; note?: string }[];
  caption?: string;
}) {
  const max = Math.max(...bars.map((b) => b.value));
  return (
    <div
      className="not-prose my-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 shadow-sm"
    >
      {title && (
        <div className="flex items-center gap-2.5 mb-7">
          <TrendingUp size={16} className="text-[#E89422]" />
          <p className="font-bold text-gray-900 dark:text-white text-base">{title}</p>
        </div>
      )}
      <div className="space-y-5">
        {bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{bar.label}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-black text-gray-900 dark:text-white tabular-nums">
                  {bar.value}{bar.suffix ?? '%'}
                </span>
                {bar.note && <span className="text-xs text-gray-400 dark:text-gray-500">{bar.note}</span>}
              </div>
            </div>
            <div className="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${bar.color ?? 'bg-gradient-to-r from-[#E89422] to-[#963C00]'}`}
                style={{ width: `${(bar.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-6 text-center leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
          {caption}
        </p>
      )}
    </div>
  );
}

/* ─── Numbered Insight Cards ─────────────────────────────────── */
export function NumberedInsights({
  items,
}: {
  items: { number: string; title: string; body: string; action?: string }[];
}) {
  return (
    <div className="not-prose space-y-5 my-10">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex gap-5 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/80 hover:border-amber-200/80 dark:hover:border-amber-700/40 hover:shadow-sm transition-colors group"
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#E89422] to-[#963C00] text-white font-black text-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            {item.number}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-[1rem] leading-snug">{item.title}</h4>
            <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-[1.7]">{item.body}</p>
            {item.action && (
              <div className="mt-3 flex items-start gap-2.5">
                <Check size={14} className="text-[#E89422] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="font-bold text-[#C47010] dark:text-[#F5B040]">Action: </span>
                  {item.action}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Two-Column Layout ──────────────────────────────────────── */
export function TwoColumnInsight({
  left,
  right,
}: {
  left: { label: string; items: string[] };
  right: { label: string; items: string[] };
}) {
  return (
    <div className="not-prose my-10 grid sm:grid-cols-2 gap-4">
      {[left, right].map((col, ci) => (
        <div
          key={ci}
          className={`p-5 rounded-xl border ${
            ci === 0
              ? 'border-red-100 dark:border-red-900/30 bg-red-50/60 dark:bg-red-950/20'
              : 'border-green-100 dark:border-green-900/30 bg-green-50/60 dark:bg-green-950/20'
          }`}
        >
          <p className={`text-xs font-black uppercase tracking-[0.18em] mb-3 ${ci === 0 ? 'text-red-500 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
            {col.label}
          </p>
          <ul className="space-y-2">
            {col.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${ci === 0 ? 'bg-red-100 dark:bg-red-900/40 text-red-500' : 'bg-green-100 dark:bg-green-900/40 text-green-600'}`}>
                  {ci === 0 ? '✕' : '✓'}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ─── Insight Grid ───────────────────────────────────────────── */
export function InsightGrid({
  items,
}: {
  items: { icon: string; title: string; body: string }[];
}) {
  return (
    <div className="not-prose my-10 grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
        >
          <span className="text-2xl mb-3 block">{item.icon}</span>
          <p className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">{item.title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-[1.65]">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Related Articles ───────────────────────────────────────── */
export function RelatedArticles({ links }: { links: { to: string; label: string }[] }) {
  return (
    <div className="not-prose mt-14 pt-10 border-t border-gray-100 dark:border-gray-800">
      <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-5">Continue reading</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#E89422]/50 hover:bg-gradient-to-r hover:from-amber-50 hover:to-transparent dark:hover:from-amber-900/10 dark:hover:to-transparent transition-colors group"
          >
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-[#E89422]/20 to-orange-500/10 flex items-center justify-center group-hover:from-[#E89422]/30 transition-colors">
              <ArrowRight size={13} className="text-[#E89422] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-snug">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Decorative Hero SVG ────────────────────────────────────── */
function HeroDecoration() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none opacity-[0.04] dark:opacity-[0.03]" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
        <circle cx="350" cy="60" r="180" stroke="#E89422" strokeWidth="1.5" />
        <circle cx="350" cy="60" r="130" stroke="#E89422" strokeWidth="1" />
        <circle cx="350" cy="60" r="80" stroke="#E89422" strokeWidth="0.8" />
        <line x1="80" y1="250" x2="380" y2="20" stroke="#E89422" strokeWidth="0.8" />
        <line x1="120" y1="290" x2="420" y2="0" stroke="#E89422" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

/* ─── Main BlogShell ─────────────────────────────────────────── */
interface BlogShellProps {
  title: string;
  description: string;
  category: string;
  categoryColor?: 'amber' | 'orange' | 'gray';
  authors: AuthorKey[];
  date?: string;
  readTime?: string;
  toc?: TocItem[];
  children: React.ReactNode;
  /** Rendered after the article body — above the final waitlist CTA */
  cta?: React.ReactNode;
}

export function BlogShell({
  title,
  description,
  category,
  categoryColor = 'amber',
  authors,
  date = 'Feb 28, 2026',
  readTime = '8 min',
  toc = [],
  children,
  cta,
}: BlogShellProps) {
  const categoryClass = {
    amber: 'bg-amber-100 dark:bg-amber-900/40 text-[#C47010] dark:text-[#F5B040]',
    orange: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
    gray: 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400',
  }[categoryColor];

  const pageTitle = typeof window !== 'undefined' ? document.title : title;

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 dark:from-[#080300] via-white dark:via-gray-900 to-orange-50/60 dark:to-gray-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors border-b border-gray-100 dark:border-gray-800">
        <HeroDecoration />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-10" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#C47010] transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link to="/blog" className="hover:text-[#C47010] transition-colors">Blog</Link>
            <span className="opacity-40">/</span>
            <span className="text-gray-600 dark:text-gray-400 truncate max-w-[260px]">{title}</span>
          </nav>

          <div>
            <span className={`inline-block mb-5 px-3.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-[0.15em] ${categoryClass}`}>
              {category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.15] mb-6 tracking-tight">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-[1.7] mb-10 max-w-2xl">
              {description}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-7 border-t border-gray-200/80 dark:border-gray-700/60">
              <div className="flex items-center gap-3.5">
                <div className="flex -space-x-2">
                  {authors.map((key) => {
                    const a = AUTHORS[key];
                    return (
                      <a key={key} href={a.linkedin} target="_blank" rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.color} flex items-center justify-center text-white text-sm font-bold border-2 border-white dark:border-gray-900 hover:scale-110 transition-transform shadow`}
                        title={a.name}
                      >
                        {a.initials}
                      </a>
                    );
                  })}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {authors.map((k) => AUTHORS[k].name).join(' & ')}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{date} · {readTime} read</p>
                </div>
              </div>

              <ShareButtons title={pageTitle} />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className={`flex gap-14 ${toc.length > 0 ? 'lg:grid lg:grid-cols-[1fr_260px]' : ''}`}>

            {/* Article content */}
            <article className="min-w-0 max-w-3xl mx-auto lg:mx-0 w-full">
              <div className={`
                prose prose-lg dark:prose-invert max-w-none

                prose-headings:font-extrabold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:tracking-tight

                prose-h2:text-[1.875rem] prose-h2:mt-16 prose-h2:mb-5 prose-h2:scroll-mt-24 prose-h2:leading-[1.2]
                prose-h3:text-[1.25rem] prose-h3:font-bold prose-h3:mt-10 prose-h3:mb-3 prose-h3:leading-snug

                prose-p:text-[1.0625rem] prose-p:leading-[1.875] prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:my-6

                prose-li:text-[1rem] prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-[1.75] prose-li:my-2
                prose-ul:my-7 prose-ol:my-7 prose-ul:space-y-1 prose-ol:space-y-1

                prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold

                prose-a:text-[#C47010] dark:prose-a:text-[#F5B040] prose-a:no-underline prose-a:font-medium hover:prose-a:underline

                prose-blockquote:border-l-[3px] prose-blockquote:border-[#E89422] prose-blockquote:bg-amber-50/70 dark:prose-blockquote:bg-amber-900/10 prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:pl-5 prose-blockquote:pr-4 prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:text-[1rem]

                prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono

                prose-hr:border-gray-100 dark:prose-hr:border-gray-800 prose-hr:my-10
              `}>
                {children}
              </div>

              {/* Author cards */}
              <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800">
                <p className="text-[0.65rem] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-5">Written by</p>
                <div className="space-y-4">
                  {authors.map((key) => <AuthorCard key={key} authorKey={key} />)}
                </div>
              </div>

              {/* Share + Calendly */}
              <div className="mt-10">
                <CalendlyCTA />
              </div>

              {/* Bottom share */}
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <span className="text-sm text-gray-400">Found this useful?</span>
                <ShareButtons title={pageTitle} />
              </div>

              {cta}
            </article>

            {/* Sticky sidebar — TOC only on desktop */}
            {toc.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <TableOfContents items={toc} />

                  {/* Mini Calendly CTA */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#E89422]/10 to-orange-500/5 border border-[#E89422]/25">
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">See Nimitai live</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">20-min demo on a real sales call</p>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white text-xs font-semibold rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors hover:shadow-md"
                    >
                      <Calendar size={13} /> Book a Call
                    </a>
                    <div className="mt-4 pt-4 border-t border-[#E89422]/20 flex flex-col gap-2">
                      <a href={COMPANY_LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[#0A66C2] hover:underline">
                        <Linkedin size={12} /> Follow Nimitai
                      </a>
                      <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:underline">
                        <Twitter size={12} /> @nimitaihq
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-[#0A0400] via-white dark:via-gray-900 to-orange-50 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="bg-white/95 dark:bg-gray-800/60 rounded-3xl p-10 sm:p-12 shadow-xl border border-white/90 dark:border-gray-700/80"
          >
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E89422]/10 border border-[#E89422]/20 text-[#C47010] dark:text-[#F5B040] text-xs font-bold">
                <span className="w-1.5 h-1.5 bg-[#E89422] rounded-full" />
                Beta live · 500+ on waitlist
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight leading-[1.2]">
              Get real-time intelligence on every sales call
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-9 text-[0.9375rem] leading-[1.75]">
              Nimitai surfaces buyer intent signals, coaches your reps through objections, and generates follow-ups — all during the live conversation. $149/month flat, founding price locked for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors shadow-lg hover:shadow-xl font-semibold text-sm hover:scale-[1.02]"
              >
                <Calendar size={16} /> Book a Demo
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full hover:border-[#E89422]/50 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Join the Waitlist <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400 dark:text-gray-600">
              <a href={COMPANY_LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"><Linkedin size={12} /> LinkedIn</a>
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><Twitter size={12} /> Twitter</a>
              <Link to="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">← More articles</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
