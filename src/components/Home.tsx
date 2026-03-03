import { Helmet } from 'react-helmet-async';
import { Hero } from './Hero';
import { ThreeAgents } from './ThreeAgents';
import { Integrations } from './Integrations';
import { LiveIntelligence } from './LiveIntelligence';
import { TheProblem } from './TheProblem';
import { ProvenResults } from './ProvenResults';
import { WhyDifferent } from './WhyDifferent';
import { EveryDay } from './EveryDay';
import { HowItWorks } from './HowItWorks';
import { ExclusiveAccess } from './ExclusiveAccess';
import { FinalCTA } from './FinalCTA';
import { OrganizationSchema } from './seo/OrganizationSchema';
import { SoftwareApplicationSchema } from './seo/SoftwareApplicationSchema';
import { WebSiteSchema } from './seo/WebSiteSchema';

export function Home() {
  const siteUrl = 'https://nimitai.com';
  const title = 'Nimitai — AI Meeting Intelligence for Sales Teams | Gong Alternative';
  const description = 'Nimitai is AI meeting intelligence that analyzes your B2B sales conversations to surface real-time coaching, buyer signals, and deal risks. The #1 Gong alternative for startup sales teams. $149/mo, setup in 30 minutes.';
  const keywords = 'AI meeting intelligence, conversation intelligence software, gong alternative, AI sales coaching, meeting intelligence, gong alternative for startups, fathom alternative, fireflies alternative, AI meeting assistant, AI notetaker for sales, sales meeting analysis, buyer signal detection';
  const ogImage = `${siteUrl}/og-image.jpg`;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Nimitai" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nimitai AI meeting intelligence dashboard for B2B sales teams" />
        <meta property="og:site_name" content="Nimitai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Nimitai AI meeting intelligence dashboard for B2B sales teams" />
        <meta name="twitter:creator" content="@NimitaiHQ" />
        <meta name="twitter:site" content="@NimitaiHQ" />

        {/* FAQPage JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Nimitai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nimitai is AI meeting intelligence software that automatically analyzes your B2B sales conversations and surfaces actionable coaching insights, objection patterns, talk-ratio analysis, and deal risk signals in real time. It's a Gong alternative built specifically for startup sales teams at $149/month."
              }
            },
            {
              "@type": "Question",
              "name": "How is Nimitai different from Gong?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nimitai offers the same AI conversation intelligence as Gong — real-time meeting analysis, objection detection, talk-ratio insights, deal risk alerts — at a fraction of the cost. No enterprise contract, no annual commitment, setup in 30 minutes. Perfect for teams under 50 reps."
              }
            },
            {
              "@type": "Question",
              "name": "What AI meeting intelligence features does Nimitai include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nimitai includes real-time meeting analysis, AI-powered transcription, talk-ratio insights, objection pattern detection, deal risk scoring, live coaching cues, buyer signal detection, and automated CRM notes. It integrates with Zoom, Google Meet, and Microsoft Teams."
              }
            },
            {
              "@type": "Question",
              "name": "How much does Nimitai cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nimitai costs $149 per seat per month with no annual contract. Setup takes under 30 minutes."
              }
            },
            {
              "@type": "Question",
              "name": "Is Nimitai a good Gong alternative for small teams?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Nimitai is purpose-built as a Gong alternative for startup and SMB sales teams. It delivers enterprise-grade conversation intelligence — real-time meeting analysis, AI coaching, deal intelligence — without the $1,200/year per-seat enterprise pricing."
              }
            },
            {
              "@type": "Question",
              "name": "Which meeting platforms does Nimitai integrate with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nimitai integrates with Zoom, Google Meet, and Microsoft Teams. Setup takes under 30 minutes and requires no IT support."
              }
            }
          ]
        })}</script>

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#E89422" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nimitai" />
      </Helmet>
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <WebSiteSchema />
      <Hero />
      <ThreeAgents />
      <Integrations />
      <LiveIntelligence />
      <TheProblem />
      <ProvenResults />
      <WhyDifferent />
      <EveryDay />
      <HowItWorks />
      <ExclusiveAccess />
      <FinalCTA />
    </>
  );
}
