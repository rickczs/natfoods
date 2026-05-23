import Image from "next/image";
import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImpactCard } from "@/components/ImpactCard";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection";
import { RevendedorForm } from "@/components/RevendedorForm";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { WhereToBuySection } from "@/components/WhereToBuySection";
import { blogPosts, impactCards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chips de banana da terra direto da Amazônia",
  description:
    "Natfoods: chips de banana da terra crocantes, naturais e premium, produzidos em Cruzeiro do Sul, Acre, para consumo, revenda e distribuição nacional.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Natfoods | Natural de verdade, direto da Amazônia",
    description:
      "Snack natural de banana da terra com origem amazônica, visual premium e preparado para varejo, distribuidores e marketplaces.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/produtos-grupo.jpeg",
        width: 1200,
        height: 630,
        alt: "Pacotes de chips de banana Natfoods de diferentes sabores",
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <ValuePropositionSection />

      <ProductShowcaseSection />

      <section className="relative overflow-hidden px-4 py-14 sm:px-8 lg:py-24">
        <Image
          src="/images/dobra3-bg.jpg"
          alt="Bananas, folhas e pacote Natfoods sobre textura natural"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8edcf]/90 via-[#f8edcf]/42 to-[#f8edcf]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173d25]/42 via-transparent to-transparent" />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#f8edcf]/92 via-[#f8edcf]/70 to-transparent lg:w-[58%]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8a5d24]">Nossa origem</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-black leading-[1.04] text-forest-900 drop-shadow-[0_2px_12px_rgba(248,237,207,0.72)] sm:text-5xl lg:text-6xl">
              Nascida no Acre, criada para o Brasil
            </h2>
          </div>
          <div className="rounded-md border border-white/75 bg-[#fff8e8]/86 p-5 shadow-[0_24px_70px_rgba(23,61,37,0.20)] backdrop-blur-xl sm:p-8">
            <p className="text-base font-medium leading-8 text-forest-900 sm:text-lg">
              A Natfoods nasceu em Cruzeiro do Sul - Acre, com o propósito de transformar a riqueza da Amazônia em
              alimentos naturais, saborosos e competitivos. A marca carrega a força da banana da terra, da produção
              regional e de um território com enorme potencial econômico.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-forest-900 sm:text-lg">
              Do coração da Amazônia para novas prateleiras, a Natfoods quer mostrar que produtos regionais podem
              alcançar mercados nacionais e internacionais sem perder sua essência.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <Image
          src="/images/producao-de-bananas.png"
          alt="Produção de bananas em ambiente amazônico"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#06160d]/58" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#102a1b]/35 via-[#102a1b]/45 to-[#0b1b12]/78" />
        <div className="relative z-10 mx-auto max-w-[1580px]">
          <div className="max-w-[880px]">
            <p className="text-[14px] font-black uppercase tracking-[0.22em] text-banana">Impacto regional</p>
            <h2 className="mt-5 font-display text-[34px] font-black leading-[1.02] text-[#f4d17a] drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-[54px] lg:text-[64px]">
              Mais que um snack: uma oportunidade para a economia amazônica
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
            {impactCards.map((card) => <ImpactCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>

      <section className="woven-surface relative overflow-hidden px-4 py-16 sm:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[#f7e7c4]/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff2d1]/92 via-[#f8e5bb]/72 to-[#c49558]/34" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/34 via-transparent to-white/36" />
        <div className="pointer-events-none absolute -bottom-14 left-[30%] hidden w-64 rotate-[-8deg] lg:block">
          <Image
            src="/images/produtos-grupo.jpeg"
            alt="Grupo de embalagens premium dos chips de banana da terra Natfoods"
            width={420}
            height={260}
            className="rounded-md opacity-35 mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-earth sm:text-sm">Seja revendedor</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-black leading-[1.02] text-forest-900 sm:text-5xl">
              Leve a Natfoods para sua loja
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-forest-900/82 sm:text-lg">
              Se você é lojista, distribuidor, representante comercial ou atua com marketplaces, a Natfoods quer
              conversar com você.
            </p>
            <div className="mt-8 rounded-md border border-[#d8bc79]/55 bg-forest-900 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_16px_0_rgba(57,39,20,0.16),0_28px_65px_rgba(46,32,16,0.22)] sm:p-7">
              <p className="text-base font-medium leading-7 text-white/92 sm:text-lg sm:leading-8">
                A Natfoods foi pensada para atender o mercado nacional de snacks saudáveis, com distribuição para grandes
                centros urbanos e canais varejistas. O plano inicial prevê atuação em regiões como Bahia, Goiânia e São
                Paulo, com expansão gradual para novos mercados.
              </p>
            </div>
          </div>
          <RevendedorForm variant="premium" />
        </div>
      </section>

      <WhereToBuySection />

      <section className="relative overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
        <Image
          src="/images/blog-bg.png"
          alt="Composição Natfoods para conteúdos sobre Amazônia e alimentação natural"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#fbf6ea]/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ea]/86 via-[#fbf6ea]/62 to-[#fbf6ea]/32" />
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#fbf6ea]/72 via-[#fbf6ea]/18 to-[#fbf6ea]/66" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl rounded-md border border-[#e2d6bd] bg-[#fffaf0] p-5 shadow-[0_24px_70px_rgba(23,61,37,0.16)] sm:p-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-earth sm:text-sm">Blog</p>
            <h2 className="font-display text-3xl font-black leading-[1.04] text-forest-900 sm:text-4xl lg:text-5xl">
              Conteúdos sobre Amazônia, alimentação natural e oportunidades de venda
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.title} {...post} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
