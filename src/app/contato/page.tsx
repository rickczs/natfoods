import type { Metadata } from "next";
import { Instagram, Mail, MapPin, MessageCircle, type LucideIcon } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { RevendedorForm } from "@/components/RevendedorForm";
import { Section } from "@/components/Section";
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
    "Entre em contato com a Natfoods para compra, revenda, distribuicao, representacao comercial, marketplaces e parcerias.",
  openGraph: {
    title: "Fale com a Natfoods",
    description: "Canal comercial para chips de banana da terra Natfoods, revenda e distribuicao nacional.",
    images: ["/images/embalagem-detalhe-1.jpeg"]
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
      <Section eyebrow="Contato" title="Fale com a Natfoods" description="Estamos preparando os canais comerciais para atender consumidores, lojistas, distribuidores, representantes e marketplaces.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map(({ title, description, icon: Icon, href, external }) => (
            <article key={title} className="rounded-md border border-forest-900/10 bg-white p-6">
              <Icon size={28} className="text-earth" />
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-4 block text-xl font-black text-forest-900 hover:text-forest-700"
                >
                  {title}
                </a>
              ) : (
                <h2 className="mt-4 text-xl font-black text-forest-900">{title}</h2>
              )}
              <p className="mt-3 leading-7 text-forest-800/72">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <RevendedorForm />
        </div>
      </Section>
      <CTASection title="Natfoods: o sabor da Amazônia em cada crocância" />
    </>
  );
}
