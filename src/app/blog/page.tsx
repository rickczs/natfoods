import type { Metadata } from "next";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { blogPosts, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Amazônia, snack natural e revenda",
  description:
    "Conteúdos da Natfoods sobre Amazônia, banana da terra, alimentação natural, empreendedorismo regional, revenda e distribuição.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog Natfoods",
    description: "Artigos sobre chips de banana da terra, snack natural, varejo e oportunidades comerciais.",
    url: "/blog",
    type: "article",
    images: [
      {
        url: "/images/produtos-grupo.jpeg",
        width: 1200,
        height: 630,
        alt: "Artigos do Blog Natfoods sobre chips de banana",
      }
    ]
  }
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
        <Image
          src="/images/blog-bg.png"
          alt="Composição amazônica com folhas, bananas e elementos regionais"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#06160d]/52" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06160d]/92 via-[#06160d]/54 to-[#06160d]/22" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06160d]/68 via-transparent to-[#06160d]/82" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="rounded-md border border-[#f4d384]/55 bg-[#06160d]/86 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-banana">Conteúdo</p>
              <h1 className="mt-4 font-display text-4xl font-black leading-[1.02] text-[#ffe29a] drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
                Amazônia, alimentação natural e oportunidades de venda
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#fff8e8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.48)] sm:text-lg">
                Artigos iniciais para fortalecer a autoridade da Natfoods em snacks naturais, produção regional e canais
                comerciais.
              </p>
            </div>

            <div className="relative hidden min-h-[280px] overflow-hidden rounded-md border border-[#d8c39c]/70 shadow-[0_24px_70px_rgba(43,29,13,0.20)] lg:block">
              <Image
                src="/images/producao-de-bananas.png"
                alt="Produção de bananas na Amazônia"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082315]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-md bg-[#fffaf0]/90 px-4 py-3 text-sm font-black text-forest-900 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur">
                Conteúdo para varejo, revenda e consumo natural
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-md border border-[#f4d384]/45 bg-[#06160d]/78 px-4 py-2 text-sm font-black text-[#fff1c7] shadow-[0_12px_26px_rgba(0,0,0,0.20)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#f4d384] hover:bg-[#0d2416]/88"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => <BlogCard key={post.title} {...post} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
