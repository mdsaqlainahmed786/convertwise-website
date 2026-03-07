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
  const description = 'Stop losing deals to patterns nobody caught. Nimitai gives B2B sales teams real-time coaching, objection intelligence, and deal risk signals — automatically. The #1 Gong alternative for startups. From $149/seat/month.';
  const keywords = 'AI meeting intelligence, conversation intelligence software, gong alternative, AI sales coaching, meeting intelligence, gong alternative for startups, fathom alternative, fireflies alternative, AI meeting assistant, AI notetaker for sales, sales meeting analysis, buyer signal detection';
  const ogImage = `${siteUrl}/og-image.png?v=2`;

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
        <meta name="twitter:creator" content="@Nimit_ai" />
        <meta name="twitter:site" content="@Nimit_ai" />

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
