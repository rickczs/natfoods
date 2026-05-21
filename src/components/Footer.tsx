import Image from "next/image";
import Link from "next/link";
import { Leaf, Mail, MapPin, Phone, ShoppingCart, Smartphone } from "lucide-react";
import { navItems } from "@/lib/data";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site";

const commercial = ["Revenda", "Distribuição", "Representação", "Marketplaces", "Exportação"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-4 py-14 text-forest-950 sm:px-8 lg:py-20">
      <Image
        src="/images/rodape-bg.png"
        alt="Composição premium Natfoods com elementos amazônicos"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#2b1d0f]/18" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6eedc]/42 via-transparent to-[#2b1d0f]/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f6eedc]/36 via-transparent to-[#f6eedc]/22" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="rounded-md border border-[#d5b169]/60 bg-[#f6eedc]/12 p-4 shadow-[0_30px_90px_rgba(43,29,13,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[3px] sm:p-6 lg:p-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.1fr_0.85fr_1fr_0.85fr] lg:items-stretch">
            <div className="group relative min-h-[300px] overflow-hidden rounded-md border border-[#ead6ad] bg-[#fffaf0]/96 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_44px_rgba(34,25,12,0.20)] transition duration-500 hover:-translate-y-2 hover:border-[#d0a25b] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.94),0_30px_70px_rgba(34,25,12,0.28)]">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-24 translate-y-[-120%] bg-gradient-to-b from-white/70 to-transparent transition duration-700 group-hover:translate-y-0" />
              <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-banana/16 blur-2xl transition duration-700 group-hover:bg-banana/28" />
              <div className="font-display text-3xl font-black leading-none text-[#8b6826]">Natfoods</div>
              <div className="mt-5 rounded-md border border-[#d7c39a] bg-[#f8efd9] p-4 text-lg font-semibold italic leading-7 text-[#5f421f] shadow-inner">
                O sabor da Amazônia em cada crocância.
              </div>
              <div className="mt-5 flex items-end gap-3">
                <Leaf className="text-[#8b6826] transition duration-500 group-hover:-rotate-6 group-hover:scale-105" size={58} strokeWidth={1.2} />
                <Image src="/images/produto-tradicional.jpeg" alt="Chips Natfoods" width={120} height={82} className="h-16 w-24 rounded-md object-cover shadow-[0_12px_28px_rgba(54,35,14,0.24)] transition duration-500 group-hover:scale-105 group-hover:shadow-[0_18px_38px_rgba(54,35,14,0.28)]" />
              </div>
            </div>

            <FooterPanel title="Links rápidos" icon={<Leaf size={23} />}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-forest-900">
                  {item.label}
                </Link>
              ))}
            </FooterPanel>

            <FooterPanel title="Contato" icon={<Smartphone size={23} />}>
              <span className="flex gap-2"><MapPin size={15} className="mt-1 shrink-0" /> {siteConfig.location}</span>
              <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="flex gap-2 transition hover:text-forest-900">
                <Phone size={15} className="mt-1 shrink-0" /> {siteConfig.whatsappDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex break-words transition hover:text-forest-900">
                <Mail size={15} className="mr-2 mt-1 shrink-0" /> {siteConfig.email}
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-forest-900">
                {siteConfig.instagramHandle}
              </a>
            </FooterPanel>

            <FooterPanel title="Comercial" icon={<ShoppingCart size={23} />}>
              {commercial.map((item) => <span key={item}>{item}</span>)}
            </FooterPanel>
          </div>
        </div>

        <div className="mx-auto mt-7 max-w-3xl rounded-full bg-[#fffaf0]/72 px-5 py-3 text-center text-sm font-semibold text-[#6f4c24] shadow-[0_14px_34px_rgba(43,29,13,0.14)] backdrop-blur-md">
          <p>© 2026 Natfoods. Estrutura preparada para loja online, leads comerciais e expansão nacional.</p>
          <p>
            Desenvolvido com inteligência e design por{" "}
            <a
              href="https://www.iaexpo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-forest-900 underline decoration-[#9a6a35]/35 underline-offset-4 transition hover:text-[#9a6a35]"
            >
              IAEXPO
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterPanel({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="group relative min-h-[300px] overflow-hidden rounded-md border border-[#ead6ad] bg-[#fffaf0]/96 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_44px_rgba(34,25,12,0.20)] transition duration-500 hover:-translate-y-2 hover:border-[#d0a25b] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.94),0_30px_70px_rgba(34,25,12,0.28)]">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-24 translate-y-[-120%] bg-gradient-to-b from-white/70 to-transparent transition duration-700 group-hover:translate-y-0" />
      <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-banana/14 blur-2xl transition duration-700 group-hover:bg-banana/26" />
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      <div className="relative mb-6 inline-flex items-center gap-2 rounded-md bg-[#9a6a35] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#fff0bd] shadow-[0_14px_28px_rgba(45,29,12,0.20)] transition duration-500 group-hover:bg-[#8a5d2f] group-hover:shadow-[0_18px_36px_rgba(45,29,12,0.26)]">
        <span className="transition duration-500 group-hover:-rotate-6 group-hover:scale-110">{icon}</span>
        {title}
      </div>
      <div className="relative grid gap-3 text-[15px] font-bold leading-5 text-[#263a26] [&_a]:transition [&_a:hover]:translate-x-1 [&_a:hover]:text-[#8a5d2f]">
        {children}
      </div>
    </div>
  );
}
