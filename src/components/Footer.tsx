import Link from "next/link";
import { navItems } from "@/lib/data";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site";

const commercial = ["Revenda", "Distribuicao", "Representacao", "Marketplaces", "Exportacao"];

export function Footer() {
  return (
    <footer className="bg-forest-900 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-2xl font-black text-banana">Natfoods</div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/72">O sabor da Amazonia em cada crocancia.</p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-banana">Links rapidos</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-banana">Contato</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <span>{siteConfig.location}</span>
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {siteConfig.whatsappDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-banana">Comercial</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            {commercial.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/54">
        © 2026 Natfoods. Estrutura preparada para loja online, leads comerciais e expansao nacional.
      </div>
    </footer>
  );
}
