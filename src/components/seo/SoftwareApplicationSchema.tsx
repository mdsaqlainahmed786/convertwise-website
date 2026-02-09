import { Helmet } from 'react-helmet-async';

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ConvertWise",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "47"
    },
    "description": "AI-powered sales automation platform with meeting intelligence. Features include real-time meeting analysis, sales coaching AI, automated lead generation, and meeting preparation tools.",
    "featureList": [
      "AI Meeting Intelligence",
      "Real-time Sales Coaching",
      "Meeting Preparation Agent",
      "Live Meeting Analysis",
      "Sales Automation",
      "Lead Generation Automation"
    ],
    "screenshot": "https://convertwise.site/og-image.jpg",
    "url": "https://convertwise.site"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

