import type { Metadata } from "next";
import { Instagram, MessageCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { channels } from "@/lib/data";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Onde Comprar | Natfoods",
  description:
    "Veja os canais planejados para comprar Natfoods: WhatsApp comercial, distribuidores, lojas parceiras, marketplaces e varejo alimentar.",
  openGraph: {
    title: "Onde comprar Natfoods",
    description: "A Natfoods prepara canais fisicos e digitais para levar chips de banana da terra a novas regioes do Brasil.",
    images: ["/images/produto-tradicional.jpeg"]
  }
};

export default function OndeComprarPage() {
  return (
    <>
      <Section
        eyebrow="Canais de venda"
        title="Em breve, Natfoods mais perto de você"
        description="A Natfoods está preparando sua presença em canais físicos e digitais para levar o sabor da Amazônia a consumidores de diferentes regiões do Brasil."
      >
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppUrl(whatsappMessages.buy)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-forest-800 px-5 text-sm font-black text-white transition hover:bg-forest-700"
          >
            <MessageCircle size={18} /> Comprar pelo WhatsApp
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-forest-900/15 bg-white px-5 text-sm font-black text-forest-900 transition hover:border-forest-700/50"
          >
            <Instagram size={18} /> Ver Instagram
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, icon: Icon }) => (
            <article key={label} className="rounded-md border border-forest-900/10 bg-white p-6">
              <Icon size={28} className="text-earth" />
              <h2 className="mt-4 text-xl font-black text-forest-900">{label}</h2>
            </article>
          ))}
        </div>
      </Section>
      <CTASection title="Quer ser um dos primeiros canais Natfoods?" description="Fale com a equipe comercial para compras, revenda ou distribuição regional." />
    </>
  );
}
