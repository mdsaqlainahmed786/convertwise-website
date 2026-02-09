import { Helmet } from 'react-helmet-async';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ConvertWise",
    "url": "https://convertwise.site",
    "logo": "https://convertwise.site/convertwiselogo1.svg",
    "description": "AI-powered sales automation platform that helps businesses achieve 7x ROI and 150% more qualified leads through meeting intelligence and sales automation.",
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
      "email": "hello@convertwise.site",
      "telephone": "+91-9915494146",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/convertwise",
      "https://twitter.com/ConvertWise"
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

