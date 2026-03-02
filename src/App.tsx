import { Routes, Route } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { ThemeProvider } from './components/ThemeProvider';

// SEO landing pages — high-volume keyword targets
import { AiMeetingAssistant } from './pages/AiMeetingAssistant';
import { AiMeetingCopilot } from './pages/AiMeetingCopilot';
import { AiSalesCoaching } from './pages/AiSalesCoaching';
import { AiNotetaker } from './pages/AiNotetaker';

// Core conversion pages
import { Pricing } from './pages/Pricing';

// Alternative pages — highest commercial intent
import { GongAlternative } from './pages/alternatives/GongAlternative';
import { FathomAlternative } from './pages/alternatives/FathomAlternative';
import { FirefliesAlternative } from './pages/alternatives/FirefliesAlternative';
import { TldvAlternative } from './pages/alternatives/TldvAlternative';
import { ChorusAlternative } from './pages/alternatives/ChorusAlternative';
import { OtterAlternative } from './pages/alternatives/OtterAlternative';

// Blog pages
import { BlogIndex } from './pages/blog/BlogIndex';
import { BestSalesCallRecording } from './pages/blog/BestSalesCallRecording';
import { HowToAnalyzeSalesCalls } from './pages/blog/HowToAnalyzeSalesCalls';
import { SalesCallBestPractices } from './pages/blog/SalesCallBestPractices';
import { ConversationIntelligenceGuide } from './pages/blog/ConversationIntelligenceGuide';
import { GongPricing } from './pages/blog/GongPricing';
import { GongCompetitors } from './pages/blog/GongCompetitors';
// New blog posts
import { WhyWeBuildNimitai } from './pages/blog/WhyWeBuildNimitai';
import { FromDigitalpatronToNimitai } from './pages/blog/FromDigitalpatronToNimitai';
import { RealTimeSalesCoaching } from './pages/blog/RealTimeSalesCoaching';
import { BuyerIntentSignals } from './pages/blog/BuyerIntentSignals';
import { HowToIncreaseCloseRate } from './pages/blog/HowToIncreaseCloseRate';
import { SalesCallAnalytics } from './pages/blog/SalesCallAnalytics';
import { AiNotetakerVsConversationIntelligence } from './pages/blog/AiNotetakerVsConversationIntelligence';
import { GongVsNimitai } from './pages/blog/GongVsNimitai';
import { AiObjectionHandling } from './pages/blog/AiObjectionHandling';
import { B2bSaasDemo } from './pages/blog/B2bSaasDemo';
import { RevenueIntelligence } from './pages/blog/RevenueIntelligence';
import { WhyNimitai } from './pages/blog/WhyNimitai';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nimitai-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <AnnouncementBar />
        <Navigation />
        <main role="main">
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
            {/* New blog posts */}
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

            {/* Catch-all 404 — must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
