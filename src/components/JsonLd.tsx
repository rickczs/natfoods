import { products } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cruzeiro do Sul",
      addressRegion: "AC",
      addressCountry: "BR"
    },
    sameAs: [siteConfig.instagramUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappDisplay,
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese"
    }
  };

  const productCollection = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chips de banana da terra Natfoods",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: `Natfoods ${product.name}`,
        description: product.description,
        image: `${siteConfig.url}${product.image}`,
        brand: {
          "@type": "Brand",
          name: "Natfoods"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollection) }}
      />
    </>
  );
}
