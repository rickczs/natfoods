import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Leaf, MapPin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ImpactCard } from "@/components/ImpactCard";
import { impactCards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nossa Origem | Cruzeiro do Sul Acre",
  description:
    "Conheça a origem da Natfoods em Cruzeiro do Sul, Acre, e a proposta de levar chips de banana da terra da Amazônia para o Brasil.",
  alternates: {
    canonical: "/nossa-origem"
  },
  openGraph: {
    title: "Natfoods | Nascida no Acre, criada para o Brasil",
    description: "Uma marca amazônica de snacks naturais com origem regional e potencial de distribuição nacional.",
    url: "/nossa-origem",
    type: "website",
    images: [
      {
        url: "/images/embalagem-detalhe-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Pacote Natfoods com identidade amazônica em Cruzeiro do Sul",
      }
    ]
  }
};

export default function NossaOrigemPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-8 lg:pb-32 lg:pt-48">
        <Image
          src="/images/dobra3-bg.jpg"
          alt="Textura de folhas e bananas"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#f8edcf]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8edcf]/98 via-[#f8edcf]/90 to-[#f8edcf]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8edcf] via-transparent to-[#f8edcf]/20" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center xl:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8bc79]/60 bg-[#f8edcf]/80 px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#8a5d24] shadow-sm backdrop-blur-md">
                <MapPin size={14} className="text-[#8a5d24]" />
                Nossa Origem
              </div>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] text-forest-900 drop-shadow-[0_2px_12px_rgba(248,237,207,0.72)] sm:text-5xl lg:text-[64px]">
                Nascida no Acre, <br className="hidden lg:block" />criada para o Brasil
              </h1>
              <div className="mt-8 space-y-6 text-lg font-medium leading-relaxed text-forest-800/90 sm:text-xl sm:leading-9">
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
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(138,93,36,0.15),transparent_60%)] blur-2xl" />
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#d8bc79]/65 bg-forest-900 shadow-[0_30px_85px_rgba(23,61,37,0.35),inset_0_1px_0_rgba(255,255,255,0.16)]">
                <Image
                  src="/images/embalagem-detalhe-2.jpeg"
                  alt="Pacote Natfoods com identidade amazônica"
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06160d]/85 via-[#06160d]/20 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay" />
                
                <div className="absolute left-4 top-4 sm:left-6 sm:top-6 inline-flex items-center gap-2 rounded-md border border-[#f4d384]/45 bg-[#06160d]/60 px-3 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] text-[#ffe29a] shadow-[0_16px_34px_rgba(0,0,0,0.25)] backdrop-blur-md">
                  <Leaf size={14} className="sm:h-4 sm:w-4" /> Origem amazônica
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-lg border border-white/15 bg-[#06160d]/65 p-4 sm:p-6 text-white shadow-[0_24px_54px_rgba(0,0,0,0.40)] backdrop-blur-xl">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-[#f4d384]">
                    <MapPin size={14} className="sm:h-4 sm:w-4" /> Cruzeiro do Sul - Acre
                  </div>
                  <p className="mt-2 sm:mt-3 font-display text-xl sm:text-2xl font-black leading-tight text-[#fff1c7]">
                    Natural de verdade, direto da Amazônia
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 rounded bg-white/10 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-sm">
                    <BadgeCheck size={16} className="text-[#f4d384] sm:h-[18px] sm:w-[18px]" /> Produto regional preparado para escala
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 text-white sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <Image
          src="/images/producao-de-bananas.png"
          alt="Produção de bananas em ambiente amazônico"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#06160d]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#102a1b]/40 via-[#102a1b]/55 to-[#0b1b12]/85" />
        <div className="relative z-10 mx-auto max-w-[1580px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[14px] font-black uppercase tracking-[0.36em] text-banana">Impacto regional</p>
            <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] text-[#f4d17a] drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-[56px]">
              Mais que um snack: uma oportunidade para a economia amazônica
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {impactCards.map((card) => <ImpactCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

