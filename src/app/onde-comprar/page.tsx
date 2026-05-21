import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { WhereToBuySection } from "@/components/WhereToBuySection";

export const metadata: Metadata = {
  title: "Onde Comprar | Natfoods",
  description:
    "Veja os canais planejados para comprar Natfoods: WhatsApp comercial, distribuidores, lojas parceiras, marketplaces e varejo alimentar.",
  alternates: {
    canonical: "/onde-comprar"
  },
  openGraph: {
    title: "Onde comprar Natfoods",
    description: "A Natfoods prepara canais fisicos e digitais para levar chips de banana da terra a novas regioes do Brasil.",
    url: "/onde-comprar",
    type: "website",
    images: [
      {
        url: "/images/produto-tradicional.jpeg",
        width: 1200,
        height: 630,
        alt: "Pacote de banana chips tradicional Natfoods",
      }
    ]
  }
};

export default function OndeComprarPage() {
  return (
    <>
      <WhereToBuySection showActions />
      <CTASection title="Quer ser um dos primeiros canais Natfoods?" description="Fale com a equipe comercial para compras, revenda ou distribuição regional." />
    </>
  );
}
