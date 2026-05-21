import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { blogPosts, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Amazonia, snack natural e revenda",
  description:
    "Conteúdos da Natfoods sobre Amazônia, banana da terra, alimentação natural, empreendedorismo regional, revenda e distribuicao.",
  openGraph: {
    title: "Blog Natfoods",
    description: "Artigos sobre chips de banana da terra, snack natural, varejo e oportunidades comerciais.",
    images: ["/images/produtos-grupo.jpeg"]
  }
};

export default function BlogPage() {
  return (
    <>
      <Section
        eyebrow="Conteúdo"
        title="Amazônia, alimentação natural e oportunidades de venda"
        description="Artigos iniciais para fortalecer a autoridade da Natfoods em snacks naturais, produção regional e canais comerciais."
      >
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span key={category} className="rounded-md border border-forest-900/10 bg-white px-3 py-2 text-sm font-bold text-forest-800">
              {category}
            </span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => <BlogCard key={post.title} {...post} />)}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
