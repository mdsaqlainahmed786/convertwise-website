import { Helmet } from 'react-helmet-async';

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nimitai",
    "alternateName": "Nimitai AI Meeting Intelligence",
    "url": "https://nimitai.com",
    "description": "AI meeting intelligence and conversation intelligence software for B2B SaaS sales teams. The Gong alternative starting from $149/seat/month.",
    "publisher": {
      "@type": "Organization",
      "name": "Nimitai",
      "url": "https://nimitai.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
