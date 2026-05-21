export const siteConfig = {
  name: "Natfoods",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://natfoods.com.br",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5568992187626",
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+55 68 99218-7626",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@natfoods.com.br",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/natfoodsalimentos?igsh=MWg3amJ6NDNnNjRicA==",
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "@natfoodsalimentos",
  location: "Cruzeiro do Sul - Acre",
  defaultWhatsAppMessage: "Olá, gostaria de falar com a Natfoods."
};

export const whatsappMessages = {
  buy: "Olá, gostaria de comprar produtos Natfoods. Pode me passar informações?",
  reseller: "Olá, tenho interesse em revender os produtos Natfoods. Gostaria de mais informações.",
  distribution: "Olá, gostaria de falar sobre distribuição dos produtos Natfoods.",
  product: "Olá, tenho interesse nos chips Natfoods. Pode me passar detalhes dos sabores e valores?",
  general: "Olá, gostaria de falar com a Natfoods."
};

export function buildWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export const seoKeywords = [
  "Natfoods",
  "chips de banana da terra",
  "snack natural",
  "Amazônia",
  "Cruzeiro do Sul Acre",
  "revenda de snacks naturais",
  "banana chips premium"
];
