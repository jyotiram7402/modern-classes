import { SITE } from "@/lib/constants";
import { FAQS } from "@/lib/data";

export function JsonLd() {
  const educationalOrg = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    image: `${SITE.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Vidya Complex, Main Road",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://facebook.com",
      "https://instagram.com",
      "https://youtube.com",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}/opengraph-image`,
    url: SITE.url,
    telephone: SITE.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Vidya Complex, Main Road",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "248",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };

  return (
    <>
      {[educationalOrg, localBusiness, faqSchema, website].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
