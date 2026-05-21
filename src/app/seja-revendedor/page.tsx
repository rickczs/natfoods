import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { RevendedorForm } from "@/components/RevendedorForm";
import { Section } from "@/components/Section";
import { partnerProfiles, resellerBenefits, salesChannels } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seja Revendedor | Revenda de snacks naturais",
  description:
    "Seja revendedor Natfoods. Chips de banana da terra premium da Amazônia para lojistas, empórios, supermercados, distribuidores, representantes e marketplaces.",
  openGraph: {
    title: "Seja revendedor Natfoods",
    description:
      "Leve chips de banana da terra Natfoods para sua loja, rede, marketplace ou carteira comercial.",
    images: ["/images/produtos-grupo.jpeg"]
  }
};

export default function SejaRevendedorPage() {
  return (
    <>
      <Section
        className="premium-surface"
        eyebrow="Parcerias comerciais"
        title="Leve a Natfoods para sua loja"
        description="Se você é lojista, distribuidor, representante comercial ou atua com marketplaces, a Natfoods quer conversar com você."
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-md bg-forest-800 p-7 text-white shadow-premium">
            <h2 className="text-2xl font-black">Distribuição nacional, origem amazônica</h2>
            <p className="mt-4 text-lg leading-8 text-white/76">
              A Natfoods foi pensada para atender o mercado nacional de snacks saudáveis, com distribuição para grandes
              centros urbanos e canais varejistas. O plano inicial prevê atuação em regiões como Bahia, Goiânia e São
              Paulo, com expansão gradual para novos mercados.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.reseller)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-banana px-5 text-sm font-black text-forest-900 transition hover:bg-[#ffd84e]"
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
          </div>
          <RevendedorForm />
        </div>
      </Section>

      <Section eyebrow="Por que revender" title="Um snack natural com argumento forte na prateleira">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resellerBenefits.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-md border border-forest-900/10 bg-white p-6 shadow-sm">
              <Icon size={28} className="text-earth" />
              <h2 className="mt-4 text-xl font-black text-forest-900">{title}</h2>
              <p className="mt-3 leading-7 text-forest-800/72">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Parceiro ideal" title="Canais que podem crescer com a Natfoods">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partnerProfiles.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-md border border-forest-900/10 bg-[#fffaf0] p-6">
              <Icon size={28} className="text-earth" />
              <h2 className="mt-4 text-xl font-black text-forest-900">{title}</h2>
              <p className="mt-3 leading-7 text-forest-800/72">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="leaf-texture" eyebrow="Canais atendidos" title="Da loja local ao marketplace nacional">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {salesChannels.map((channel) => (
            <div key={channel} className="rounded-md border border-white/14 bg-white/8 p-5 text-lg font-black text-white">
              {channel}
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="Vamos conversar sobre o seu canal de venda?" description="O formulário já está preparado para futura integração com WhatsApp, CRM ou API de leads." />
    </>
  );
}
