import { Helmet } from 'react-helmet-async';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nimitai",
    "alternateName": "REN AI Technologies Private Limited",
    "url": "https://nimitai.com",
    "logo": "https://nimitai.com/nimitai-logo.png",
    "description": "Nimitai is AI meeting intelligence and conversation intelligence software built for B2B SaaS sales teams. Records sales calls, surfaces coaching insights, objection patterns, deal risk signals, and win/loss analysis starting from $149/seat/month.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Nilansh Gupta",
        "jobTitle": "Co-Founder & CEO",
        "url": "https://www.linkedin.com/in/nilansh-gupta/"
      },
      {
        "@type": "Person",
        "name": "Archit Dhir",
        "jobTitle": "Co-Founder & CTO",
        "url": "https://www.linkedin.com/in/archit-dhir-23420a321/"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@nimitai.com",
      "telephone": "+91-9915494146",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nimitai",
      "https://twitter.com/nimitaihq"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
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
