import type { Metadata } from "next";
import Image from "next/image";
import { Instagram, Mail, MapPin, MessageCircle, type LucideIcon } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { RevendedorForm } from "@/components/RevendedorForm";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site";

type ContactItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
};

export const metadata: Metadata = {
  title: "Contato | Natfoods",
  description:
    "Entre em contato com a Natfoods para compra, revenda, distribuição, representação comercial, marketplaces e parcerias.",
  alternates: {
    canonical: "/contato"
  },
  openGraph: {
    title: "Fale com a Natfoods",
    description: "Canal comercial para chips de banana da terra Natfoods, revenda e distribuição nacional.",
    url: "/contato",
    type: "website",
    images: [
      {
        url: "/images/embalagem-detalhe-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Embalagem Natfoods - Fale Conosco",
      }
    ]
  }
};

const contacts: ContactItem[] = [
  { title: siteConfig.location, description: "Origem da produção Natfoods", icon: MapPin },
  {
    title: siteConfig.whatsappDisplay,
    description: "Canal para compras e parcerias",
    icon: MessageCircle,
    href: buildWhatsAppUrl(whatsappMessages.general),
    external: true
  },
  { title: siteConfig.email, description: "Atendimento institucional e comercial", icon: Mail, href: `mailto:${siteConfig.email}` },
  {
    title: siteConfig.instagramHandle,
    description: "Acompanhe produtos, novidades e bastidores",
    icon: Instagram,
    href: siteConfig.instagramUrl,
    external: true
  }
];

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
        <Image
          src="/images/hero-natfoods-organic-branded.jpg"
          alt="Produtos Natfoods com folhas tropicais e banana chips"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#f8efd9]/84" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8efd9]/98 via-[#f8efd9]/76 to-[#173d25]/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/34 via-transparent to-[#f8efd9]/92" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="rounded-md border border-[#d8c39c] bg-[#fffaf0]/92 p-6 shadow-[0_24px_70px_rgba(43,29,13,0.18)] backdrop-blur-md sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-earth">Contato</p>
              <h1 className="mt-4 font-display text-4xl font-black leading-[1.02] text-forest-900 sm:text-5xl lg:text-6xl">
                Fale com a Natfoods
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-forest-800/84 sm:text-lg">
                Estamos preparando os canais comerciais para atender consumidores, lojistas, distribuidores,
                representantes e marketplaces.
              </p>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-md border border-[#d8c39c]/70 shadow-[0_24px_70px_rgba(43,29,13,0.20)]">
              <Image
                src="/images/produtos-grupo.jpeg"
                alt="Linha de produtos Natfoods"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082315]/78 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-md bg-[#fffaf0]/90 px-4 py-3 text-sm font-black text-forest-900 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur">
                Atendimento comercial Natfoods
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contacts.map(({ title, description, icon: Icon, href, external }) => (
              <article
                key={title}
                className="group relative min-h-[190px] overflow-hidden rounded-md border border-[#d8c39c] bg-[#fffaf0]/94 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_18px_44px_rgba(43,29,13,0.14)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#c89b53] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_30px_70px_rgba(43,29,13,0.22)]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-full bg-gradient-to-b from-white/80 to-transparent transition duration-700 group-hover:translate-y-0" />
                <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-banana/16 blur-2xl transition duration-700 group-hover:bg-banana/28" />
                <div className="relative grid size-12 place-items-center rounded-md border border-[#c89b53]/45 bg-[#f8e7bd] text-earth shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] transition duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-banana group-hover:text-forest-900">
                  <Icon size={24} />
                </div>
                {href ? (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="relative mt-5 block break-words text-lg font-black leading-tight text-forest-900 transition hover:text-earth sm:text-xl"
                  >
                    {title}
                  </a>
                ) : (
                  <h2 className="relative mt-5 break-words text-lg font-black leading-tight text-forest-900 sm:text-xl">{title}</h2>
                )}
                <p className="relative mt-3 leading-7 text-forest-800/76">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="rounded-md border border-[#d8bc79]/55 bg-forest-900 p-6 text-white shadow-[0_24px_70px_rgba(43,29,13,0.22)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-banana">Comercial</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-[1.04] sm:text-4xl">
                Compras, revenda e distribuição em um só canal.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-white/88">
                Use o formulário para apresentar sua loja, região, canal de venda ou volume estimado. A Natfoods avalia
                o melhor caminho comercial para cada perfil de parceiro.
              </p>
            </div>
            <RevendedorForm variant="premium" />
          </div>
        </div>
      </section>
      <CTASection title="Natfoods: o sabor da Amazônia em cada crocância" />
    </>
  );
}
