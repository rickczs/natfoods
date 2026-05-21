import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { products, storePrepItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Produtos | Chips de banana da terra premium",
  description:
    "Conheça os sabores Natfoods: chips de banana da terra naturais, crocantes e premium, produzidos no Acre para varejo e marketplaces.",
  alternates: {
    canonical: "/produtos"
  },
  openGraph: {
    title: "Produtos Natfoods | Chips de banana da terra",
    description: "Linha de snacks naturais com sabores Tradicional, Orégano, Cebola, Canela, Lemon Pepper e Pápricas.",
    url: "/produtos",
    type: "website",
    images: [
      {
        url: "/images/produtos-grupo.jpeg",
        width: 1200,
        height: 630,
        alt: "Vários sabores de chips de banana da terra Natfoods",
      }
    ]
  }
};

export default function ProdutosPage() {
  return (
    <>
      <Section
        eyebrow="Linha Natfoods"
        title="Chips de banana da terra para varejo, empórios e marketplaces"
        description="Produtos crocantes, naturais e com identidade amazônica, prontos para diferentes canais de venda e momentos de consumo."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.name} {...product} />)}
        </div>
      </Section>
      <Section className="bg-white" eyebrow="Preparado para evoluir" title="Estrutura comercial pronta para loja online">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {storePrepItems.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-md border border-forest-900/10 bg-[#fffaf0] p-6">
              <Icon size={28} className="text-earth" />
              <h2 className="mt-4 font-display text-xl font-black leading-tight text-forest-900">{title}</h2>
              <p className="mt-3 leading-7 text-forest-800/72">{description}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTASection title="Quer colocar a linha Natfoods na sua prateleira?" />
    </>
  );
}
