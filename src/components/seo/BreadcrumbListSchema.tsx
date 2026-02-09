import { Helmet } from 'react-helmet-async';

export function BreadcrumbListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://convertwise.site"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://convertwise.site/about"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

