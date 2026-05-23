import { Instagram, MessageCircle } from "lucide-react";
import { channels } from "@/lib/data";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site";

type WhereToBuySectionProps = {
  showActions?: boolean;
};

export function WhereToBuySection({ showActions = false }: WhereToBuySectionProps) {
  return (
    <section className="paper-leaf-surface relative overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
      <div className="absolute left-[58%] top-8 hidden h-28 w-56 -rotate-6 rounded-[50%] bg-[#e6d6aa]/55 blur-2xl lg:block" />
      <div className="absolute bottom-10 right-12 hidden h-32 w-72 rounded-[50%] bg-[#b58a45]/12 blur-3xl lg:block" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-[780px]">
          <p className="text-[14px] font-black uppercase tracking-[0.22em] text-earth">Onde comprar</p>
          <h2 className="mt-5 max-w-[720px] font-display text-[34px] font-black leading-[1.02] text-forest-900 sm:text-[52px] lg:text-[58px]">
            Em breve, Natfoods mais perto de você
          </h2>
          <p className="mt-7 max-w-[840px] text-base leading-8 text-forest-800/86 sm:text-[20px] sm:leading-[1.65]">
            A Natfoods está preparando sua presença em canais físicos e digitais para levar o sabor da Amazônia a
            consumidores de diferentes regiões do Brasil.
          </p>
        </div>

        {showActions ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl(whatsappMessages.buy)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-forest-800 px-5 text-center text-sm font-black text-white transition hover:bg-forest-700 sm:w-auto"
            >
              <MessageCircle size={18} /> Comprar pelo WhatsApp
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-forest-900/15 bg-white px-5 text-center text-sm font-black text-forest-900 transition hover:border-forest-700/50 sm:w-auto"
            >
              <Instagram size={18} /> Ver Instagram
            </a>
          </div>
        ) : null}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, icon: Icon }) => (
            <article
              key={label}
              className="group relative flex min-h-[86px] items-center gap-4 overflow-hidden rounded-md border border-[#c7b99b] bg-[#efe7d7] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),inset_0_-10px_18px_rgba(81,56,29,0.13),0_10px_0_rgba(78,57,34,0.18),0_22px_42px_rgba(34,27,18,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#b4833e] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.82),inset_0_-10px_18px_rgba(81,56,29,0.12),0_12px_0_rgba(78,57,34,0.16),0_28px_55px_rgba(34,27,18,0.2)] sm:min-h-[96px]"
            >
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/55 to-transparent" />
              <span className="absolute -right-8 -top-10 size-28 rounded-full bg-white/28 blur-xl transition group-hover:bg-banana/20" />
              <span className="relative grid size-11 shrink-0 place-items-center rounded-md border border-[#b28a4a]/45 bg-[#f8efdf] text-earth shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_7px_14px_rgba(68,47,24,0.16)]">
                <Icon size={22} strokeWidth={2.15} />
              </span>
              <h3 className="relative text-[18px] font-black leading-[1.14] text-forest-900">{label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
