# Website Audit Report — Nimitai (ConvertWise)

**Audit date:** February 28, 2026  
**Scope:** SEO, technical setup, content structure, schema, and conversion paths.  
**Site type:** SaaS (AI meeting intelligence / conversation intelligence).

---

## Executive summary

The site is in good shape for a SaaS marketing site: per-page meta, canonicals, sitemap, robots.txt, and AI/GEO readiness (llms.txt, crawler allowances) are in place. Fixing a few **critical** and **high** items (404/login handling, schema logo URL, optional FAQ schema, missing blog index entries) will improve crawlability, relevance, and user experience.

**SEO health score (0–100):** ~72  
- Technical SEO: good (deduct for no 404, /login handling)  
- Content & on-page: good  
- Schema: good with fixes needed  
- Performance: not measured in this audit  
- AI search readiness: strong (llms.txt, crawlers allowed)

---

## 1. Critical issues

### 1.1 No 404 page or catch-all route

**Issue:** There is no `Route path="*"` or dedicated 404 component. Invalid URLs (e.g. `/foo`, `/blog/invalid-post`) are served the SPA shell (Navigation + Footer) with an empty `<main>`. Search engines and users see a "soft 404": a 200 response with no real content.

**Impact:** Wasted crawl budget, possible indexing of empty URLs, poor UX.

**Recommendation:**

- Add a catch-all route that renders a 404 page (e.g. `NotFound.tsx`) with:
  - `Helmet`: `<title>Page Not Found | Nimitai</title>`, `<meta name="robots" content="noindex, follow" />`, and a clear description.
  - Accessible, on-brand copy and a primary CTA (e.g. "Go to homepage", "View pricing").
- Optionally use your host (e.g. Azure Static Web Apps) to return HTTP 404 for unknown paths if supported; otherwise the custom 404 component is the minimum.

**Priority:** Critical — fix first.

---

### 1.2 `/login` linked but not a real route

**Issue:** Navigation and Footer link to `/login`, but `App.tsx` has no route for `/login`. The host's SPA fallback serves `index.html`, so `/login` shows the **homepage** content with the URL `/login`. Same DOM as homepage, different URL.

**Impact:** Duplicate content signals, confusing UX (users think they're on a login page), and possible indexing of `/login` as a separate page.

**Recommendation (choose one):**

- **Option A:** Add a real `/login` route that renders a dedicated login/SSO page and set appropriate meta (title, description, `noindex` if it's app-only).
- **Option B:** If login is external (e.g. app.nimitai.com), change nav/footer to an absolute link to that URL instead of `to="/login"` / `href="/login"`.
- **Option C:** If there is no login yet, remove "Log In" from nav/footer until the flow exists, or link to a "Coming soon" / waitlist page with correct meta and `noindex` if needed.

**Priority:** Critical — fix with 404 handling.

---

## 2. High-priority issues

### 2.1 BlogPosting schema uses non-existent logo URL

**Issue:** Four blog pages use `BlogPosting` JSON-LD with `publisher.logo.url: "https://nimitai.com/logo.png"`. The site uses `/convertwiselogo1.svg` for favicon and Organization schema. So `/logo.png` likely does not exist.

**Files:**  
`BestSalesCallRecording.tsx`, `HowToAnalyzeSalesCalls.tsx`, `SalesCallBestPractices.tsx`, `ConversationIntelligenceGuide.tsx`.

**Impact:** Rich result validation may fail or show a broken logo; inconsistent branding in structured data.

**Recommendation:** In each of these files, set `publisher.logo.url` to the same logo as Organization schema, e.g. `"https://nimitai.com/convertwiselogo1.svg"`. If you prefer a PNG for social/rich results, add a `logo.png` (e.g. 600×60 or similar) and reference that.

**Priority:** High — quick fix.

---

### 2.2 FAQPage schema on homepage

**Issue:** The homepage injects `FAQPage` JSON-LD with several Q&As. Current guidance (e.g. from your SEO quality gates) suggests reserving FAQ schema for government/healthcare or clearly FAQ-dedicated content to avoid overuse and potential policy issues.

**Impact:** Low to medium risk depending on search engine policy; possible over-optimization signal.

**Recommendation:** Treat as optional. Either remove the FAQPage block from the homepage or keep it only if the homepage has a visible FAQ section that matches the schema. If you keep it, ensure every `Question`/`Answer` pair appears on the page in accessible text.

**Priority:** High (policy/clarity) — decide and implement.

---

### 2.3 Blog index missing two posts

**Issue:** `BlogIndex.tsx` defines a `posts` array with only 4 entries. The app has 6 blog routes, including:

- `/blog/gong-pricing-2026`
- `/blog/gong-competitors-alternatives`

These two are not in the `posts` array, so they never appear on the blog index page.

**Impact:** Two high-intent posts are not discoverable from the blog hub; internal linking and UX suffer.

**Recommendation:** Add two `BlogPost` objects to `posts` in `BlogIndex.tsx` for:

- Gong Pricing 2026  
- Gong Competitors & Alternatives  

Use the same fields (title, slug, date, readTime, category, excerpt) and match the slugs to the routes in `App.tsx`.

**Priority:** High — quick content fix.

---

## 3. Medium-priority issues

### 3.1 Canonical and sitemap URL consistency

**Issue:** The sitemap uses `https://nimitai.com/` (with trailing slash) for the homepage. The default canonical in `index.html` is `https://nimitai.com` (no trailing slash). Home.tsx also uses `https://nimitai.com`. Search engines usually normalize, but mixed signals are unnecessary.

**Recommendation:** Pick one convention (e.g. no trailing slash for canonicals) and use it everywhere: `index.html`, `Home.tsx`, and `public/sitemap.xml`. Keep sitemap `<loc>` values identical to the canonical URLs you use on each page.

**Priority:** Medium.

---

### 3.2 BreadcrumbList schema only on About

**Issue:** `BreadcrumbListSchema` is hardcoded to "Home → About" and only rendered on the About page. Alternatives and blog pages have no breadcrumb structured data.

**Recommendation:** For better rich results and crawl clarity, add page-specific breadcrumbs (e.g. Home → Blog → [Post title], Home → Alternatives → [Competitor name]). Implement either a reusable component that takes an array of `{ name, url }` or per-page JSON-LD so each URL has correct breadcrumbs.

**Priority:** Medium — improves structure and potential SERP display.

---

### 3.3 Footer blog links vs. blog index

**Issue:** The Footer links to 6 blog posts; the blog index lists 4. After you add the two missing posts to the index (see 2.3), align the two lists so the footer either mirrors the index or explicitly represents "featured" or "popular" posts so the structure is clear.

**Priority:** Medium (partially addressed by 2.3).

---

## 4. Low-priority / optional

### 4.1 Repo and asset naming (ConvertWise vs Nimitai)

**Observation:** The repo is `convertwise-website`, `package.json` name is `"ConvertWise"`, and the logo asset is `convertwiselogo1.svg`. The live brand is Nimitai (formerly ConvertWise). This is mostly internal; no user-facing bug.

**Recommendation:** Optional. Rename when convenient (e.g. `nimitai-website`, `nimitai-logo.svg`) for consistency; low impact on SEO.

---

### 4.2 Permissions-Policy (microphone/camera)

**Observation:** `staticwebapp.config.json` sets `Permissions-Policy: camera=(), microphone=()`. The product records calls (microphone). This policy applies to the **marketing site** (nimitai.com), not necessarily the app subdomain, so it may be intentional to block mic/camera on the marketing domain.

**Recommendation:** Confirm that the app that actually records calls is on a different origin (e.g. app.nimitai.com). If so, no change needed. If you ever embed a recording widget on nimitai.com, you would need to allow `microphone` for that frame.

**Priority:** Low — verify only.

---

## 5. What's working well

- **Per-page meta:** All main routes use `react-helmet-async` with unique title, description, canonical, Open Graph, and Twitter tags.
- **Canonicals:** Every route sets a canonical URL; no duplicate canonicals found.
- **Sitemap:** `public/sitemap.xml` includes all 21 URLs, sensible priorities and `lastmod`; referenced in `robots.txt` and in `index.html` via `<link rel="sitemap">`.
- **robots.txt:** Allows `/`, disallows `/api/`, allows major crawlers (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, etc.), and declares the sitemap.
- **llms.txt:** Present and detailed (product description, keywords, key facts, pricing, pages, citation guidance). Strong for GEO/AI citations.
- **Structured data:** WebSite, Organization, SoftwareApplication on homepage; BlogPosting on blog posts; BreadcrumbList on About. Only the logo URL and optional FAQ usage need adjustment.
- **Security headers:** `staticwebapp.config.json` sets X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy.
- **SPA fallback:** `navigationFallback` excludes `*.xml`, `*.txt`, etc., so `sitemap.xml` and `robots.txt` are served as static files.
- **Analytics:** GA4 with SPA `history.pushState` tracking so route changes send `page_view` events.
- **Internal linking:** Navigation and Footer link to all main sections, alternatives, tools, and blog posts (once the two missing posts are added to the index).

---

## 6. Action plan (prioritized)

| Priority   | Action |
|-----------|--------|
| Critical  | Add a 404 route and a dedicated NotFound page with noindex and helpful CTAs. |
| Critical  | Resolve `/login`: add a real route, or link externally, or remove until ready. |
| High      | Change BlogPosting `publisher.logo.url` to `https://nimitai.com/convertwiselogo1.svg` (or a real logo.png) in all four blog posts. |
| High      | Decide on FAQPage schema: remove from homepage or align with visible FAQ content. |
| High      | Add Gong Pricing 2026 and Gong Competitors to the blog index `posts` array. |
| Medium    | Standardize canonical/sitemap URLs (trailing slash or not) across index, Home, and sitemap. |
| Medium    | Add breadcrumb schema to alternatives and blog post pages (dynamic or per-page). |
| Low       | Optional: align repo/package/asset names with Nimitai; verify Permissions-Policy for app subdomain. |

---

## 7. Checklist for re-audit

After changes:

- [ ] Visit a non-existent path (e.g. `/not-a-page`) and confirm 404 page with noindex and CTAs.
- [ ] Visit `/login` and confirm it either shows a real login page, redirects externally, or is removed.
- [ ] Validate one blog post with [Google Rich Results Test](https://search.google.com/test/rich-results) and confirm publisher logo resolves.
- [ ] Confirm blog index shows all 6 posts.
- [ ] Confirm canonical and sitemap homepage URL match.

---

*End of audit.*
