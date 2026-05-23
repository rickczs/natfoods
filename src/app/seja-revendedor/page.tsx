import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, type LucideIcon } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { RevendedorForm } from "@/components/RevendedorForm";
import { partnerProfiles, resellerBenefits, salesChannels } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

type PremiumCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: "light" | "dark";
};

export const metadata: Metadata = {
  title: "Seja Revendedor | Revenda de snacks naturais",
  description:
    "Seja revendedor Natfoods. Chips de banana da terra premium da Amazônia para lojistas, empórios, supermercados, distribuidores, representantes e marketplaces.",
  alternates: {
    canonical: "/seja-revendedor"
  },
  openGraph: {
    title: "Seja revendedor Natfoods",
    description: "Leve chips de banana da terra Natfoods para sua loja, rede, marketplace ou carteira comercial.",
    url: "/seja-revendedor",
    type: "website",
    images: [
      {
        url: "/images/produtos-grupo.jpeg",
        width: 1200,
        height: 630,
        alt: "Linha de produtos Natfoods pronta para revenda",
      }
    ]
  }
};

export default function SejaRevendedorPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
        <Image
          src="/images/producao-de-bananas.png"
          alt="Produção de bananas em ambiente amazônico"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#06160d]/56" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06160d]/92 via-[#06160d]/54 to-[#f8efd9]/16" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06160d]/48 via-transparent to-[#f8efd9]/90" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="rounded-md border border-[#f4d384]/55 bg-[#06160d]/84 p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-banana">Parcerias comerciais</p>
              <h1 className="mt-4 font-display text-4xl font-black leading-[1.02] text-[#ffe29a] drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
                Leve a Natfoods para sua loja
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#fff8e8]/92 drop-shadow-[0_2px_8px_rgba(0,0,0,0.48)] sm:text-lg">
                Se você é lojista, distribuidor, representante comercial ou atua com marketplaces, a Natfoods quer
                conversar com você.
              </p>
              <a
                href={buildWhatsAppUrl(whatsappMessages.reseller)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-banana px-5 text-center text-sm font-black text-forest-900 shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#ffd84e] sm:w-auto"
              >
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </div>

            <div className="relative min-h-[330px] overflow-hidden rounded-md border border-[#d8c39c]/70 shadow-[0_24px_70px_rgba(43,29,13,0.22)]">
              <Image
                src="/images/produtos-grupo.jpeg"
                alt="Linha de produtos Natfoods para revenda"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082315]/82 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 max-w-sm rounded-md bg-[#fffaf0]/92 px-4 py-3 text-sm font-black text-forest-900 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur">
                Produto natural com origem amazônica e argumento forte para prateleiras.
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="rounded-md border border-[#d8bc79]/55 bg-forest-900 p-6 text-white shadow-[0_24px_70px_rgba(43,29,13,0.24)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-banana">Distribuição nacional</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-[1.04] sm:text-4xl">
                Origem amazônica, presença nacional.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-white/90">
                A Natfoods foi pensada para atender o mercado nacional de snacks saudáveis, com distribuição para grandes
                centros urbanos e canais varejistas. O plano inicial prevê atuação em regiões como Bahia, Goiânia e São
                Paulo, com expansão gradual para novos mercados.
              </p>
            </div>
            <RevendedorForm variant="premium" />
          </div>
        </div>
      </section>

      <section className="paper-leaf-surface relative overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-earth">Por que revender</p>
            <h2 className="mt-4 font-display text-3xl font-black leading-[1.04] text-forest-900 sm:text-5xl">
              Um snack natural com argumento forte na prateleira
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {resellerBenefits.map((card) => <PremiumCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 text-white sm:px-8 lg:py-24">
        <Image
          src="/images/amazonia-bg.jpg"
          alt="Paisagem amazônica"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#06160d]/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06160d]/92 via-[#06160d]/60 to-[#06160d]/26" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-banana">Parceiro ideal</p>
            <h2 className="mt-4 font-display text-3xl font-black leading-[1.04] text-[#ffe29a] sm:text-5xl">
              Canais que podem crescer com a Natfoods
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerProfiles.map((card) => <PremiumCard key={card.title} {...card} tone="dark" />)}
          </div>
          <div className="mt-12 rounded-md border border-[#f4d384]/45 bg-[#06160d]/72 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-banana">Canais atendidos</p>
            <h3 className="mt-3 font-display text-2xl font-black text-[#fff1c7] sm:text-3xl">
              Da loja local ao marketplace nacional
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {salesChannels.map((channel) => (
                <div key={channel} className="rounded-md border border-[#f4d384]/35 bg-white/10 p-4 text-base font-black text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/14">
                  {channel}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Vamos conversar sobre o seu canal de venda?"
        description="O formulário já está preparado para futura integração com WhatsApp, CRM ou API de leads."
      />
    </>
  );
}

function PremiumCard({ title, description, icon: Icon, tone = "light" }: PremiumCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={`group relative flex h-full min-h-[245px] flex-col overflow-hidden rounded-md p-6 transition duration-500 hover:-translate-y-2 ${
        isDark
          ? "border border-[#f4d384]/58 bg-[#06160d]/86 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-md hover:border-[#f4d384]"
          : "border border-[#d8c39c] bg-[#fffaf0]/96 text-forest-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_18px_44px_rgba(43,29,13,0.14)] backdrop-blur-sm hover:border-[#c89b53]"
      }`}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-full bg-gradient-to-b from-white/45 to-transparent transition duration-700 group-hover:translate-y-0" />
      <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-banana/16 blur-2xl transition duration-700 group-hover:bg-banana/28" />
      <div
        className={`relative grid size-12 place-items-center rounded-md border shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-banana group-hover:text-forest-900 ${
          isDark ? "border-[#f4d384]/58 bg-[#173d25]/72 text-[#f4d384]" : "border-[#c89b53]/45 bg-[#f8e7bd] text-earth"
        }`}
      >
        <Icon size={24} />
      </div>
      <h3 className={`relative mt-5 text-xl font-black leading-tight ${isDark ? "text-[#fff1c7]" : "text-forest-900"}`}>
        {title}
      </h3>
      <p className={`relative mt-4 leading-7 ${isDark ? "text-[#fff8e8]/84" : "text-forest-800/76"}`}>
        {description}
      </p>
    </article>
  );
}
