import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

// Core layout components are eagerly loaded (they appear on every page)
import { Home } from './components/Home';
import { About } from './components/About';

// SEO landing pages — high-volume keyword targets
const AiMeetingAssistant = React.lazy(() => import('./pages/AiMeetingAssistant').then(m => ({ default: m.AiMeetingAssistant })));
const AiMeetingCopilot = React.lazy(() => import('./pages/AiMeetingCopilot').then(m => ({ default: m.AiMeetingCopilot })));
const AiSalesCoaching = React.lazy(() => import('./pages/AiSalesCoaching').then(m => ({ default: m.AiSalesCoaching })));
const AiNotetaker = React.lazy(() => import('./pages/AiNotetaker').then(m => ({ default: m.AiNotetaker })));

// Core conversion pages
const Pricing = React.lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));

// Alternative pages — highest commercial intent
const GongAlternative = React.lazy(() => import('./pages/alternatives/GongAlternative').then(m => ({ default: m.GongAlternative })));
const FathomAlternative = React.lazy(() => import('./pages/alternatives/FathomAlternative').then(m => ({ default: m.FathomAlternative })));
const FirefliesAlternative = React.lazy(() => import('./pages/alternatives/FirefliesAlternative').then(m => ({ default: m.FirefliesAlternative })));
const TldvAlternative = React.lazy(() => import('./pages/alternatives/TldvAlternative').then(m => ({ default: m.TldvAlternative })));
const ChorusAlternative = React.lazy(() => import('./pages/alternatives/ChorusAlternative').then(m => ({ default: m.ChorusAlternative })));
const OtterAlternative = React.lazy(() => import('./pages/alternatives/OtterAlternative').then(m => ({ default: m.OtterAlternative })));

// Blog pages
const BlogIndex = React.lazy(() => import('./pages/blog/BlogIndex').then(m => ({ default: m.BlogIndex })));
const BestSalesCallRecording = React.lazy(() => import('./pages/blog/BestSalesCallRecording').then(m => ({ default: m.BestSalesCallRecording })));
const HowToAnalyzeSalesCalls = React.lazy(() => import('./pages/blog/HowToAnalyzeSalesCalls').then(m => ({ default: m.HowToAnalyzeSalesCalls })));
const SalesCallBestPractices = React.lazy(() => import('./pages/blog/SalesCallBestPractices').then(m => ({ default: m.SalesCallBestPractices })));
const ConversationIntelligenceGuide = React.lazy(() => import('./pages/blog/ConversationIntelligenceGuide').then(m => ({ default: m.ConversationIntelligenceGuide })));
const GongPricing = React.lazy(() => import('./pages/blog/GongPricing').then(m => ({ default: m.GongPricing })));
const GongCompetitors = React.lazy(() => import('./pages/blog/GongCompetitors').then(m => ({ default: m.GongCompetitors })));
const WhyWeBuildNimitai = React.lazy(() => import('./pages/blog/WhyWeBuildNimitai').then(m => ({ default: m.WhyWeBuildNimitai })));
const FromDigitalpatronToNimitai = React.lazy(() => import('./pages/blog/FromDigitalpatronToNimitai').then(m => ({ default: m.FromDigitalpatronToNimitai })));
const RealTimeSalesCoaching = React.lazy(() => import('./pages/blog/RealTimeSalesCoaching').then(m => ({ default: m.RealTimeSalesCoaching })));
const BuyerIntentSignals = React.lazy(() => import('./pages/blog/BuyerIntentSignals').then(m => ({ default: m.BuyerIntentSignals })));
const HowToIncreaseCloseRate = React.lazy(() => import('./pages/blog/HowToIncreaseCloseRate').then(m => ({ default: m.HowToIncreaseCloseRate })));
const SalesCallAnalytics = React.lazy(() => import('./pages/blog/SalesCallAnalytics').then(m => ({ default: m.SalesCallAnalytics })));
const AiNotetakerVsConversationIntelligence = React.lazy(() => import('./pages/blog/AiNotetakerVsConversationIntelligence').then(m => ({ default: m.AiNotetakerVsConversationIntelligence })));
const GongVsNimitai = React.lazy(() => import('./pages/blog/GongVsNimitai').then(m => ({ default: m.GongVsNimitai })));
const AiObjectionHandling = React.lazy(() => import('./pages/blog/AiObjectionHandling').then(m => ({ default: m.AiObjectionHandling })));
const B2bSaasDemo = React.lazy(() => import('./pages/blog/B2bSaasDemo').then(m => ({ default: m.B2bSaasDemo })));
const RevenueIntelligence = React.lazy(() => import('./pages/blog/RevenueIntelligence').then(m => ({ default: m.RevenueIntelligence })));
const WhyNimitai = React.lazy(() => import('./pages/blog/WhyNimitai').then(m => ({ default: m.WhyNimitai })));
const GongRealCost = React.lazy(() => import('./pages/blog/GongRealCost').then(m => ({ default: m.GongRealCost })));
const FirefliesVsGongVsNimitai = React.lazy(() => import('./pages/blog/FirefliesVsGongVsNimitai').then(m => ({ default: m.FirefliesVsGongVsNimitai })));
const BestAiSalesCoaching = React.lazy(() => import('./pages/blog/BestAiSalesCoaching').then(m => ({ default: m.BestAiSalesCoaching })));
const SalesCallRecordingLaws = React.lazy(() => import('./pages/blog/SalesCallRecordingLaws').then(m => ({ default: m.SalesCallRecordingLaws })));
const ChorusVsGongVsNimitai = React.lazy(() => import('./pages/blog/ChorusVsGongVsNimitai').then(m => ({ default: m.ChorusVsGongVsNimitai })));
const TldvVsGongVsNimitai = React.lazy(() => import('./pages/blog/TldvVsGongVsNimitai').then(m => ({ default: m.TldvVsGongVsNimitai })));
const PerfectDiscoveryCall = React.lazy(() => import('./pages/blog/PerfectDiscoveryCall').then(m => ({ default: m.PerfectDiscoveryCall })));
const AiReplacingSalesManagers = React.lazy(() => import('./pages/blog/AiReplacingSalesManagers').then(m => ({ default: m.AiReplacingSalesManagers })));
const FathomVsGongVsNimitai = React.lazy(() => import('./pages/blog/FathomVsGongVsNimitai').then(m => ({ default: m.FathomVsGongVsNimitai })));
const OtterVsGongVsNimitai = React.lazy(() => import('./pages/blog/OtterVsGongVsNimitai').then(m => ({ default: m.OtterVsGongVsNimitai })));
const MeetingIntelligenceGuide = React.lazy(() => import('./pages/blog/MeetingIntelligenceGuide').then(m => ({ default: m.MeetingIntelligenceGuide })));
const Waitlist = React.lazy(() => import('./pages/Waitlist').then(m => ({ default: m.Waitlist })));
const NotFound = React.lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Minimal full-height placeholder that matches the page background — prevents layout shift during lazy load
const PageSkeleton = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900" aria-hidden="true" />
);

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nimitai-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <ScrollToTop />
        <AnnouncementBar />
        <Navigation />
        <main role="main">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              {/* Core pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />

              {/* SEO landing pages — high-volume keyword targets */}
              <Route path="/ai-meeting-assistant" element={<AiMeetingAssistant />} />
              <Route path="/ai-meeting-copilot" element={<AiMeetingCopilot />} />
              <Route path="/ai-sales-coaching" element={<AiSalesCoaching />} />
              <Route path="/ai-notetaker" element={<AiNotetaker />} />

              {/* Alternative pages — highest commercial intent */}
              <Route path="/alternatives/gong-alternative" element={<GongAlternative />} />
              <Route path="/alternatives/fathom-alternative" element={<FathomAlternative />} />
              <Route path="/alternatives/fireflies-alternative" element={<FirefliesAlternative />} />
              <Route path="/alternatives/tldv-alternative" element={<TldvAlternative />} />
              <Route path="/alternatives/chorus-alternative" element={<ChorusAlternative />} />
              <Route path="/alternatives/otter-alternative" element={<OtterAlternative />} />

              {/* Blog */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/best-sales-call-recording-software-startups" element={<BestSalesCallRecording />} />
              <Route path="/blog/how-to-analyze-sales-calls" element={<HowToAnalyzeSalesCalls />} />
              <Route path="/blog/sales-call-best-practices" element={<SalesCallBestPractices />} />
              <Route path="/blog/conversation-intelligence-guide" element={<ConversationIntelligenceGuide />} />
              <Route path="/blog/gong-pricing-2026" element={<GongPricing />} />
              <Route path="/blog/gong-competitors-alternatives" element={<GongCompetitors />} />
              <Route path="/blog/why-we-built-nimitai" element={<WhyWeBuildNimitai />} />
              <Route path="/blog/from-digitalpatron-to-nimitai" element={<FromDigitalpatronToNimitai />} />
              <Route path="/blog/real-time-sales-coaching-ai" element={<RealTimeSalesCoaching />} />
              <Route path="/blog/buyer-intent-signals-sales-calls" element={<BuyerIntentSignals />} />
              <Route path="/blog/how-to-increase-close-rate" element={<HowToIncreaseCloseRate />} />
              <Route path="/blog/sales-call-analytics" element={<SalesCallAnalytics />} />
              <Route path="/blog/ai-notetaker-vs-conversation-intelligence" element={<AiNotetakerVsConversationIntelligence />} />
              <Route path="/blog/gong-vs-nimitai" element={<GongVsNimitai />} />
              <Route path="/blog/ai-objection-handling" element={<AiObjectionHandling />} />
              <Route path="/blog/b2b-saas-demo-best-practices" element={<B2bSaasDemo />} />
              <Route path="/blog/revenue-intelligence-platforms-2026" element={<RevenueIntelligence />} />
              <Route path="/blog/why-nimitai-name" element={<WhyNimitai />} />
              <Route path="/blog/gong-real-cost-hidden-fees" element={<GongRealCost />} />
              <Route path="/blog/fireflies-vs-gong-vs-nimitai" element={<FirefliesVsGongVsNimitai />} />
              <Route path="/blog/best-ai-sales-coaching-software-2026" element={<BestAiSalesCoaching />} />
              <Route path="/blog/sales-call-recording-laws-2026" element={<SalesCallRecordingLaws />} />
              <Route path="/blog/chorus-vs-gong-vs-nimitai" element={<ChorusVsGongVsNimitai />} />
              <Route path="/blog/tldv-vs-gong-vs-nimitai" element={<TldvVsGongVsNimitai />} />
              <Route path="/blog/perfect-discovery-call-ai-playbook" element={<PerfectDiscoveryCall />} />
              <Route path="/blog/how-ai-is-replacing-sales-managers" element={<AiReplacingSalesManagers />} />
              <Route path="/blog/fathom-vs-gong-vs-nimitai" element={<FathomVsGongVsNimitai />} />
              <Route path="/blog/otter-vs-gong-vs-nimitai" element={<OtterVsGongVsNimitai />} />
              <Route path="/blog/what-is-meeting-intelligence" element={<MeetingIntelligenceGuide />} />

              {/* Waitlist / Login */}
              <Route path="/login" element={<Waitlist />} />

              {/* Catch-all 404 — must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
