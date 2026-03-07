/**
 * Prerender script for Nimitai SPA
 *
 * Renders each route with Puppeteer and saves the static HTML.
 * This ensures Google crawlers see full content, correct meta tags,
 * and unique canonical URLs for every page.
 *
 * Usage: node scripts/prerender.mjs
 * Run after: vite build
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = join(__dirname, '..', 'build');
const PORT = 4173;

const ROUTES = [
  '/',
  '/about',
  '/pricing',

  // SEO landing pages
  '/ai-meeting-assistant',
  '/ai-meeting-copilot',
  '/ai-sales-coaching',
  '/ai-notetaker',

  // Alternative pages
  '/alternatives/gong-alternative',
  '/alternatives/fathom-alternative',
  '/alternatives/fireflies-alternative',
  '/alternatives/tldv-alternative',
  '/alternatives/chorus-alternative',
  '/alternatives/otter-alternative',

  // Blog
  '/blog',
  '/blog/best-sales-call-recording-software-startups',
  '/blog/how-to-analyze-sales-calls',
  '/blog/sales-call-best-practices',
  '/blog/conversation-intelligence-guide',
  '/blog/gong-pricing-2026',
  '/blog/gong-competitors-alternatives',
  '/blog/why-we-built-nimitai',
  '/blog/from-digitalpatron-to-nimitai',
  '/blog/real-time-sales-coaching-ai',
  '/blog/buyer-intent-signals-sales-calls',
  '/blog/how-to-increase-close-rate',
  '/blog/sales-call-analytics',
  '/blog/ai-notetaker-vs-conversation-intelligence',
  '/blog/gong-vs-nimitai',
  '/blog/ai-objection-handling',
  '/blog/b2b-saas-demo-best-practices',
  '/blog/revenue-intelligence-platforms-2026',
  '/blog/why-nimitai-name',
  '/blog/fathom-vs-gong-vs-nimitai',
  '/blog/otter-vs-gong-vs-nimitai',
  '/blog/what-is-meeting-intelligence',
];

// Simple static file server for the build directory
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(BUILD_DIR, req.url === '/' ? 'index.html' : req.url);

      // For SPA routes, serve index.html
      if (!existsSync(filePath) || !filePath.includes('.')) {
        filePath = join(BUILD_DIR, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const contentTypes = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          png: 'image/png',
          jpg: 'image/jpeg',
          jpeg: 'image/jpeg',
          svg: 'image/svg+xml',
          json: 'application/json',
          txt: 'text/plain',
          xml: 'application/xml',
        };
        res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting prerender...');
  console.log(`Routes to prerender: ${ROUTES.length}`);

  // Start static server
  const server = await startServer();

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let successCount = 0;
  let errorCount = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait for React to mount — look for the root div having children
      await page.waitForFunction(() => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      }, { timeout: 15000 });

      // Wait for react-helmet-async to update the title away from the fallback
      const FALLBACK_TITLE = 'Nimitai \u2014 AI Meeting Intelligence for Sales Teams';
      try {
        await page.waitForFunction((fallback) => {
          const title = document.querySelector('title');
          return title && title.textContent && title.textContent !== fallback;
        }, { timeout: 8000 }, FALLBACK_TITLE);
      } catch {
        // Some pages may legitimately use a title close to fallback — proceed anyway
      }

      // Extra delay to ensure all dynamic content is rendered
      await new Promise(r => setTimeout(r, 1000));

      // Clean up duplicate meta tags in the DOM before extracting HTML
      await page.evaluate(() => {
        // Remove duplicate title tags (keep the last one, which is from react-helmet)
        const titles = document.querySelectorAll('title');
        if (titles.length > 1) {
          for (let i = 0; i < titles.length - 1; i++) titles[i].remove();
        }

        // Remove duplicate canonical links (keep the last one)
        const canonicals = document.querySelectorAll('link[rel="canonical"]');
        if (canonicals.length > 1) {
          for (let i = 0; i < canonicals.length - 1; i++) canonicals[i].remove();
        }

        // Remove duplicate meta descriptions (keep the last one)
        const descriptions = document.querySelectorAll('meta[name="description"]');
        if (descriptions.length > 1) {
          for (let i = 0; i < descriptions.length - 1; i++) descriptions[i].remove();
        }

        // Remove duplicate OG tags (keep the last of each property)
        const ogProps = ['og:title', 'og:description', 'og:url', 'og:image', 'og:type'];
        ogProps.forEach(prop => {
          const tags = document.querySelectorAll(`meta[property="${prop}"]`);
          if (tags.length > 1) {
            for (let i = 0; i < tags.length - 1; i++) tags[i].remove();
          }
        });

        // Remove duplicate twitter tags
        const twProps = ['twitter:title', 'twitter:description', 'twitter:image', 'twitter:card'];
        twProps.forEach(prop => {
          const tags = document.querySelectorAll(`meta[name="${prop}"]`);
          if (tags.length > 1) {
            for (let i = 0; i < tags.length - 1; i++) tags[i].remove();
          }
        });
      });

      // Get the fully rendered HTML
      let html = await page.content();

      // Remove any data-react-helmet attributes (cleanup)
      html = html.replace(/ data-rh="true"/g, '');
      html = html.replace(/ data-react-helmet="true"/g, '');

      // Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = join(BUILD_DIR, 'index.html');
      } else {
        outputPath = join(BUILD_DIR, route, 'index.html');
      }

      // Create directory if needed
      const dir = dirname(outputPath);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }

      writeFileSync(outputPath, html, 'utf-8');
      successCount++;
      console.log(`  [OK] ${route}`);

      await page.close();
    } catch (err) {
      errorCount++;
      console.error(`  [FAIL] ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(`\nPrerender complete: ${successCount} succeeded, ${errorCount} failed`);
}

prerender().catch(console.error);
