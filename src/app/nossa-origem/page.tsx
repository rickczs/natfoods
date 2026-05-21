import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { ImpactCard } from "@/components/ImpactCard";
import { Section } from "@/components/Section";
import { impactCards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nossa Origem | Cruzeiro do Sul Acre",
  description:
    "Conheça a origem da Natfoods em Cruzeiro do Sul, Acre, e a proposta de levar chips de banana da terra da Amazônia para o Brasil.",
  openGraph: {
    title: "Natfoods | Nascida no Acre, criada para o Brasil",
    description: "Uma marca amazonica de snacks naturais com origem regional e potencial de distribuicao nacional.",
    images: ["/images/embalagem-detalhe-2.jpeg"]
  }
};

export default function NossaOrigemPage() {
  return (
    <>
      <Section eyebrow="Nossa origem" title="Nascida no Acre, criada para o Brasil">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-lg leading-8 text-forest-800/82">
            <p>
              A Natfoods nasceu em Cruzeiro do Sul - Acre, com o propósito de transformar a riqueza da Amazônia em
              alimentos naturais, saborosos e competitivos.
            </p>
            <p>
              A marca carrega a força da banana da terra, da produção regional e de um território com enorme potencial
              econômico. O objetivo é mostrar que produtos regionais podem alcançar mercados nacionais e internacionais
              sem perder sua essência.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-premium">
            <Image src="/images/embalagem-detalhe-2.jpeg" alt="Pacote Natfoods com identidade amazônica" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
        </div>
      </Section>
      <Section className="leaf-texture" eyebrow="Impacto regional" title="Mais que um snack: uma oportunidade para a economia amazônica">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactCards.map((card) => <ImpactCard key={card.title} {...card} />)}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
