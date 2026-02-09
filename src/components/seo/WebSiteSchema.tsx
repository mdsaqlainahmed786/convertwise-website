import { Helmet } from 'react-helmet-async';

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ConvertWise",
    "url": "https://convertwise.site",
    "description": "AI-powered sales automation platform and meeting intelligence software",
    "publisher": {
      "@type": "Organization",
      "name": "ConvertWise"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://convertwise.site/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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

