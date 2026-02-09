import { Helmet } from 'react-helmet-async';
import { Hero } from './Hero';
import { ThreeAgents } from './ThreeAgents';
import { Integrations } from './Integrations';
import { LiveIntelligence } from './LiveIntelligence';
import { TheProblem } from './TheProblem';
import { ProvenResults } from './ProvenResults';
import { WhyDifferent } from './WhyDifferent';
import { EveryDay } from './EveryDay';
import { ExclusiveAccess } from './ExclusiveAccess';
import { FinalCTA } from './FinalCTA';
import { OrganizationSchema } from './seo/OrganizationSchema';
import { SoftwareApplicationSchema } from './seo/SoftwareApplicationSchema';
import { WebSiteSchema } from './seo/WebSiteSchema';

export function Home() {
  const siteUrl = 'https://convertwise.site';
  const title = 'ConvertWise - AI Sales Automation Platform | Meeting Intelligence Software';
  const description = 'Transform your sales process with AI-powered automation. ConvertWise helps businesses achieve 7x ROI and 150% more qualified leads through meeting intelligence and sales automation.';
  const keywords = 'AI sales automation, meeting intelligence software, sales automation platform, AI meeting assistant, sales coaching AI, real-time meeting intelligence, sales meeting preparation software, AI-powered sales tools';
  const ogImage = `${siteUrl}/og-image.jpg`;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="ConvertWise" />
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
        <meta property="og:site_name" content="ConvertWise" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@ConvertWise" />
        <meta name="twitter:site" content="@ConvertWise" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#9333ea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ConvertWise" />
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
      <ExclusiveAccess />
      <FinalCTA />
    </>
  );
}




