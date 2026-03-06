import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../public/assets/blog');
mkdirSync(OUT_DIR, { recursive: true });

// Category → accent color + icon + gradient
const CATEGORY_STYLES = {
  'Tool Comparison':      { accent: '#E89422', bg: '#0D1525', tag: '#E89422', icon: '⚡', grad: 'linear-gradient(135deg, #1a2035 0%, #0D1525 60%, #1a1200 100%)' },
  'AI Sales Coaching':    { accent: '#00C9A7', bg: '#071a16', tag: '#00C9A7', icon: '🎯', grad: 'linear-gradient(135deg, #071a16 0%, #070B18 60%, #001a14 100%)' },
  'Sales Intelligence':   { accent: '#6C63FF', bg: '#0D0B1F', tag: '#6C63FF', icon: '📊', grad: 'linear-gradient(135deg, #0D0B1F 0%, #070B18 60%, #0a0920 100%)' },
  'Conversation Intel':   { accent: '#F72585', bg: '#1a0512', tag: '#F72585', icon: '💬', grad: 'linear-gradient(135deg, #1a0512 0%, #070B18 60%, #150310 100%)' },
  'Sales Playbooks':      { accent: '#4CC9F0', bg: '#041520', tag: '#4CC9F0', icon: '📋', grad: 'linear-gradient(135deg, #041520 0%, #070B18 60%, #021018 100%)' },
  'Sales Compliance':     { accent: '#FF6B6B', bg: '#1a0a0a', tag: '#FF6B6B', icon: '⚖️', grad: 'linear-gradient(135deg, #1a0a0a 0%, #070B18 60%, #140808 100%)' },
  'Founder Story':        { accent: '#FFD166', bg: '#1a1400', tag: '#FFD166', icon: '🚀', grad: 'linear-gradient(135deg, #1a1400 0%, #070B18 60%, #141000 100%)' },
  'default':              { accent: '#E89422', bg: '#070B18', tag: '#E89422', icon: '✦',  grad: 'linear-gradient(135deg, #0f1420 0%, #070B18 60%, #120d00 100%)' },
};

const POSTS = [
  { slug: 'og-gong-competitors',             title: 'Top 7 Gong Competitors & Alternatives in 2026',                       category: 'Tool Comparison',    sub: 'See which tools win on price, coaching depth, and ease of use' },
  { slug: 'og-gong-pricing-2026',            title: 'Gong Pricing 2026: What You\'ll Actually Pay',                        category: 'Sales Intelligence',  sub: 'Platform fees, seat minimums, and the real annual cost' },
  { slug: 'og-gong-real-cost',               title: 'The Real Cost of Gong: Hidden Fees & Contracts',                     category: 'Sales Intelligence',  sub: '$10,000–$30,000 more than the pricing page suggests' },
  { slug: 'og-gong-vs-nimitai',              title: 'Gong vs Nimitai: Full Comparison 2026',                              category: 'Tool Comparison',    sub: 'Enterprise revenue intelligence vs B2B SaaS-focused coaching' },
  { slug: 'og-fireflies-vs-gong',            title: 'Fireflies vs Gong vs Nimitai 2026',                                  category: 'Tool Comparison',    sub: '3-tool feature, pricing & coaching breakdown' },
  { slug: 'og-tldv-vs-gong',                 title: 'tl;dv vs Gong vs Nimitai 2026',                                      category: 'Tool Comparison',    sub: 'Which one actually coaches your reps?' },
  { slug: 'og-chorus-vs-gong',               title: 'Chorus vs Gong vs Nimitai 2026',                                     category: 'Tool Comparison',    sub: 'Enterprise CI vs startup-friendly AI' },
  { slug: 'og-best-ai-sales-coaching',       title: 'Best AI Sales Coaching Software 2026',                               category: 'AI Sales Coaching',  sub: '6 tools ranked by real B2B sales teams' },
  { slug: 'og-best-sales-call-software',     title: 'Best Sales Call Recording Software for Startups',                   category: 'AI Sales Coaching',  sub: 'Built for lean teams — not enterprise budgets' },
  { slug: 'og-realtime-coaching',            title: 'Real-Time AI Sales Coaching: Why Post-Call Is Too Late',             category: 'AI Sales Coaching',  sub: 'Live guidance that wins the deal — not the next one' },
  { slug: 'og-ai-replacing-sales-managers',  title: 'How AI is Replacing Sales Managers',                                 category: 'AI Sales Coaching',  sub: 'And why that makes managers MORE valuable' },
  { slug: 'og-ai-objection-handling',        title: 'AI Objection Handling: Surface Responses in Real Time',             category: 'AI Sales Coaching',  sub: 'Stop scrambling mid-call. Let AI do the heavy lifting.' },
  { slug: 'og-buyer-intent',                 title: 'Buyer Intent Signals in Sales Calls: What AI Detects',              category: 'AI Sales Coaching',  sub: 'The 12 signals that predict deal outcomes' },
  { slug: 'og-close-rate',                   title: 'How to Increase Your Close Rate with AI',                            category: 'AI Sales Coaching',  sub: 'Data from 350+ real B2B sales calls' },
  { slug: 'og-discovery-call',               title: 'How to Run a Perfect Discovery Call (With AI)',                      category: 'Sales Playbooks',    sub: 'A step-by-step playbook: 5 phases, 10 questions, scoring rubric' },
  { slug: 'og-b2b-saas-demo',                title: 'B2B SaaS Demo Best Practices That Close More Deals',                category: 'Sales Playbooks',    sub: 'What winning demos do differently' },
  { slug: 'og-sales-call-best-practices',    title: 'Sales Call Best Practices That Actually Close Deals',               category: 'Sales Playbooks',    sub: 'Proven patterns from 350+ analyzed calls' },
  { slug: 'og-conversation-intelligence',    title: 'Conversation Intelligence: The Complete Guide 2026',                category: 'Conversation Intel', sub: 'What it is, how it works, and who needs it' },
  { slug: 'og-notetaker-vs-ci',              title: 'AI Notetaker vs Conversation Intelligence: Key Differences',        category: 'Conversation Intel', sub: 'One takes notes. The other changes how you sell.' },
  { slug: 'og-analyze-sales-calls',          title: 'How to Analyze Sales Calls: A Complete Framework',                  category: 'Conversation Intel', sub: '5 metrics, what to look for, and how AI automates it' },
  { slug: 'og-sales-call-analytics',         title: 'Sales Call Analytics: What to Track and Why',                       category: 'Conversation Intel', sub: 'Talk ratio, sentiment, objections — and what they predict' },
  { slug: 'og-revenue-intelligence',         title: 'What is Revenue Intelligence? Complete Guide 2026',                 category: 'Sales Intelligence',  sub: 'Beyond CRM data — how AI surfaces deal risk in real time' },
  { slug: 'og-call-recording-laws',          title: 'Sales Call Recording Laws by State 2026',                           category: 'Sales Compliance',   sub: 'All 50 states, GDPR, and what every sales team must know' },
  { slug: 'og-why-we-build-nimitai',         title: 'Why We Built Nimitai: What 350 Calls Taught Us',                   category: 'Founder Story',      sub: 'The real story behind the product' },
  { slug: 'og-digitalpatron-to-nimitai',     title: 'From Digitalpatron to Nimitai: Why We Started Over',               category: 'Founder Story',      sub: 'Our ideology, mission, and the pivot that changed everything' },
  { slug: 'og-nimitai-name',                 title: 'Why We Named It Nimitai: The Sanskrit Word Behind Our Mission',     category: 'Founder Story',      sub: 'A 3,000-year-old word that defines everything we build' },
];

function getStyle(category) {
  return CATEGORY_STYLES[category] || CATEGORY_STYLES['default'];
}

function generateHTML(post) {
  const s = getStyle(post.category);
  const titleWords = post.title.split(' ');
  // Split title into 2–3 lines naturally
  const mid = Math.ceil(titleWords.length / 2);
  const line1 = titleWords.slice(0, mid).join(' ');
  const line2 = titleWords.slice(mid).join(' ');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: ${s.bg};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    position: relative;
  }

  /* Background gradient */
  .bg {
    position: absolute; inset: 0;
    background: ${s.grad};
  }

  /* Noise texture overlay */
  .noise {
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.5;
  }

  /* Glowing orb */
  .orb {
    position: absolute;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, ${s.accent}22 0%, transparent 70%);
    top: -100px; right: -100px;
  }

  /* Grid lines */
  .grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(${s.accent}08 1px, transparent 1px),
      linear-gradient(90deg, ${s.accent}08 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* Left accent bar */
  .bar {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 6px;
    background: linear-gradient(180deg, ${s.accent} 0%, transparent 100%);
  }

  /* Content */
  .content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 52px 72px 48px 80px;
  }

  /* Top row */
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-mark {
    width: 44px; height: 44px;
    background: linear-gradient(135deg, ${s.accent} 0%, #963C00 100%);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px; font-weight: 900; color: white;
    letter-spacing: -1px;
  }

  .logo-text {
    font-size: 22px; font-weight: 700;
    color: white; letter-spacing: -0.3px;
  }

  .tag {
    background: ${s.accent}22;
    border: 1px solid ${s.accent}44;
    color: ${s.accent};
    font-size: 13px; font-weight: 600;
    padding: 6px 14px;
    border-radius: 100px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  /* Middle — title */
  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
  }

  .icon {
    font-size: 36px; margin-bottom: 16px;
    filter: grayscale(0);
  }

  .title {
    font-size: 52px;
    font-weight: 800;
    line-height: 1.12;
    color: white;
    letter-spacing: -1.5px;
    margin-bottom: 16px;
    max-width: 800px;
  }

  .title span {
    color: ${s.accent};
  }

  .sub {
    font-size: 20px;
    color: rgba(255,255,255,0.55);
    font-weight: 400;
    line-height: 1.5;
    max-width: 680px;
  }

  /* Bottom row */
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .domain {
    font-size: 16px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.5px;
  }

  .pill {
    background: ${s.accent};
    color: #070B18;
    font-size: 13px; font-weight: 700;
    padding: 8px 18px;
    border-radius: 100px;
    letter-spacing: 0.3px;
  }

  /* Decorative corner lines */
  .corner-tl, .corner-br {
    position: absolute;
    width: 80px; height: 80px;
    border-color: ${s.accent}33;
    border-style: solid;
  }
  .corner-tl { top: 20px; right: 20px; border-width: 1px 1px 0 0; }
  .corner-br { bottom: 20px; left: 20px; border-width: 0 0 1px 1px; }
</style>
</head>
<body>
  <div class="bg"></div>
  <div class="noise"></div>
  <div class="grid"></div>
  <div class="orb"></div>
  <div class="bar"></div>
  <div class="corner-tl"></div>
  <div class="corner-br"></div>

  <div class="content">
    <div class="top">
      <div class="logo">
        <div class="logo-mark">N</div>
        <div class="logo-text">Nimitai</div>
      </div>
      <div class="tag">${post.category}</div>
    </div>

    <div class="middle">
      <div class="icon">${s.icon}</div>
      <h1 class="title">${line1}<br>${line2}</h1>
      <p class="sub">${post.sub}</p>
    </div>

    <div class="bottom">
      <span class="domain">nimitai.com</span>
      <span class="pill">Read Article →</span>
    </div>
  </div>
</body>
</html>`;
}

async function generateAll() {
  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

  let count = 0;
  for (const post of POSTS) {
    const html = generateHTML(post);
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 100));

    const outPath = join(OUT_DIR, `${post.slug}.png`);
    await page.screenshot({ path: outPath, type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
    count++;
    console.log(`✓ [${count}/${POSTS.length}] ${post.slug}.png`);
  }

  await browser.close();
  console.log(`\nDone! ${count} OG images generated in public/assets/blog/`);
}

generateAll().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
