import { Helmet } from 'react-helmet-async';

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Nimitai",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "149",
        "priceCurrency": "USD",
        "billingDuration": "P1M",
        "unitText": "MONTH"
      }
    },
    "description": "Nimitai is AI meeting intelligence and conversation intelligence software for B2B SaaS sales teams. Records sales calls, surfaces coaching insights, objection patterns, deal risk signals, and win/loss analysis automatically. $149/month flat for the entire team.",
    "featureList": [
      "AI Sales Call Recording and Transcription",
      "Talk/Listen Ratio Analysis",
      "Objection Pattern Detection",
      "Rep Coaching Scorecards",
      "Deal Risk Signals",
      "Win/Loss Analysis from Call Data",
      "CRM Auto-Sync (HubSpot, Salesforce, Pipedrive)",
      "Real-Time AI Sales Coaching During Calls",
      "Speaker-Diarized Transcription"
    ],
    "screenshot": "https://nimitai.com/og-image.jpg",
    "url": "https://nimitai.com"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
