import { products } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-natfoods.jpeg`,
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

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: "Snacks naturais e premium da Amazônia",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produtos",
        item: `${siteConfig.url}/produtos`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Onde Comprar",
        item: `${siteConfig.url}/onde-comprar`
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollection) }}
      />
    </>
  );
}
