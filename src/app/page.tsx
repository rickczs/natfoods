import Image from "next/image";
import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImpactCard } from "@/components/ImpactCard";
import { ProductCard } from "@/components/ProductCard";
import { RevendedorForm } from "@/components/RevendedorForm";
import { Section } from "@/components/Section";
import { ValueCard } from "@/components/ValueCard";
import { blogPosts, channels, impactCards, products, valueCards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chips de banana da terra direto da Amazonia",
  description:
    "Natfoods: chips de banana da terra crocantes, naturais e premium, produzidos em Cruzeiro do Sul, Acre, para consumo, revenda e distribuicao nacional.",
  openGraph: {
    title: "Natfoods | Natural de verdade, direto da Amazonia",
    description:
      "Snack natural de banana da terra com origem amazonica, visual premium e preparado para varejo, distribuidores e marketplaces.",
    images: ["/images/produtos-grupo.jpeg"]
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <Section
        className="premium-surface"
        eyebrow="Proposta de valor"
        title="O sabor da Amazônia em cada crocância"
        description="A Natfoods transforma a banana da terra em um snack premium, crocante e natural. Feito com ingredientes selecionados, sem conservantes, sem corantes e com uma proposta que valoriza a produção regional amazônica."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((card) => <ValueCard key={card.title} {...card} />)}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Produtos"
        title="Conheça os sabores Natfoods"
        description="Uma linha de chips de banana da terra criada para diferentes momentos de consumo: do lanche rápido ao produto premium para gôndolas, empórios e marketplaces."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.name} {...product} />)}
        </div>
      </Section>

      <Section className="bg-forest-50" eyebrow="Nossa origem" title="Nascida no Acre, criada para o Brasil">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-premium">
            <Image src="/images/embalagem-detalhe-1.jpeg" alt="Embalagem Natfoods em destaque" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
          <div>
            <p className="text-lg leading-8 text-forest-800/82">
              A Natfoods nasceu em Cruzeiro do Sul - Acre, com o propósito de transformar a riqueza da Amazônia em
              alimentos naturais, saborosos e competitivos. A marca carrega a força da banana da terra, da produção
              regional e de um território com enorme potencial econômico.
            </p>
            <p className="mt-5 text-lg leading-8 text-forest-800/82">
              Do coração da Amazônia para novas prateleiras, a Natfoods quer mostrar que produtos regionais podem
              alcançar mercados nacionais e internacionais sem perder sua essência.
            </p>
          </div>
        </div>
      </Section>

      <Section className="leaf-texture" eyebrow="Impacto regional" title="Mais que um snack: uma oportunidade para a economia amazônica">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactCards.map((card) => <ImpactCard key={card.title} {...card} />)}
        </div>
      </Section>

      <Section
        className="premium-surface"
        eyebrow="Seja revendedor"
        title="Leve a Natfoods para sua loja"
        description="Se você é lojista, distribuidor, representante comercial ou atua com marketplaces, a Natfoods quer conversar com você."
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-md bg-forest-800 p-7 text-white">
            <p className="text-lg leading-8 text-white/78">
              A Natfoods foi pensada para atender o mercado nacional de snacks saudáveis, com distribuição para grandes
              centros urbanos e canais varejistas. O plano inicial prevê atuação em regiões como Bahia, Goiânia e São
              Paulo, com expansão gradual para novos mercados.
            </p>
          </div>
          <RevendedorForm />
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Onde comprar" title="Em breve, Natfoods mais perto de você" description="A Natfoods está preparando sua presença em canais físicos e digitais para levar o sabor da Amazônia a consumidores de diferentes regiões do Brasil.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-md border border-forest-900/10 bg-[#fffaf0] p-4 font-bold text-forest-900">
              <Icon size={20} className="text-earth" />
              {label}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Blog" title="Conteúdos sobre Amazônia, alimentação natural e oportunidades de venda">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.title} {...post} />)}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
