import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { stats, trustHighlights } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="organic-hero relative min-h-[calc(100vh-4rem)] overflow-hidden px-4 py-12 text-forest-900 sm:min-h-[calc(100vh-5rem)] sm:px-8 sm:py-14 lg:min-h-[calc(100vh-7.75rem)] lg:py-20">
      <Image
        src="/images/hero-natfoods-organic-branded.jpg"
        alt="Composição premium de banana chips Natfoods com folhas tropicais"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#f7efe0]/88 lg:hidden" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7efe0]/98 via-[#f7efe0]/76 to-[#f7efe0]/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f3ead8]/92 via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-6 top-1/2 z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-[#f6efd9]/80 text-2xl font-black text-[#9b762c] shadow-[0_18px_45px_rgba(73,53,16,0.18)] backdrop-blur xl:grid">
        ‹
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-[#f6efd9]/80 text-2xl font-black text-[#9b762c] shadow-[0_18px_45px_rgba(73,53,16,0.18)] backdrop-blur xl:grid">
        ›
      </div>
      <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center sm:min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-16rem)]">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-sm border border-[#8a6b2f]/15 bg-[#f7efdd]/70 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#8a6b2f] shadow-sm backdrop-blur sm:text-[11px]">
            <Leaf size={16} />
            <span className="min-w-0">Produzido em Cruzeiro do Sul - Acre</span>
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-black leading-[0.98] text-[#7b5b18] sm:text-5xl lg:text-6xl xl:text-7xl">
            Natural de verdade, direto da Amazônia
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-7 text-[#2f3325] sm:text-xl">
            A essência da selva, em cada pedaço.
          </p>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#2f3325]/86 sm:text-base">
            Deleite-se com nossos chips de banana da terra - crocantes, artesanais e procedentes de colheitas
            sustentáveis em Cruzeiro do Sul - Acre. Um snack puro, com a identidade vibrante da Amazônia.
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/produtos" className="w-full bg-[#a87a22] hover:bg-[#936918] sm:w-auto">
              Conheça os Sabores <span aria-hidden="true">›</span>
            </ButtonLink>
            <a
              href={buildWhatsAppUrl(whatsappMessages.reseller)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero revender Natfoods"
              className="hidden min-h-[52px] place-items-center rounded-md text-[#9b762c] transition hover:translate-x-1 sm:inline-grid sm:size-12"
            >
              <ArrowRight size={24} />
            </a>
          </div>
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {trustHighlights.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center gap-2 rounded-md border border-[#8a6b2f]/12 bg-[#f7efdd]/58 p-3 text-xs font-bold text-[#3b3a2e] shadow-sm backdrop-blur-md">
                <Icon size={15} className="text-[#a87a22]" />
                {title}
              </div>
            ))}
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/45 bg-[#f9f1dc]/62 p-4 shadow-[0_18px_42px_rgba(85,63,22,0.12)] backdrop-blur-md first:bg-forest-800 first:text-white">
                <div className="text-xl font-black text-inherit sm:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-current opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-[38%] top-[18%] z-10 hidden size-32 place-items-center rounded-full border border-[#f5df9a]/40 bg-[#8a6b2f]/88 text-center text-[#f7e8b8] shadow-[0_18px_50px_rgba(71,51,13,0.28)] backdrop-blur lg:grid">
          <div>
            <div className="text-3xl font-black leading-none">100%</div>
            <div className="mt-1 text-[10px] font-black uppercase tracking-[0.26em]">Natural</div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-6 right-4 z-10 hidden max-w-xs rounded-md border border-white/35 bg-[#6b5a2d]/58 p-4 text-white shadow-[0_18px_50px_rgba(60,45,15,0.22)] backdrop-blur-md lg:block">
          <div className="inline-flex items-center gap-2 rounded-md bg-[#8a6b2f] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#fff2c7]">
            <ShieldCheck size={16} /> Snack premium
          </div>
          <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-[#e9d187]">Linha premium</p>
          <p className="mt-1 text-lg font-black">Banana chips Natfoods</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/78">
            <Truck size={16} /> Preparada para distribuição nacional
          </p>
        </div>
      </div>
    </section>
  );
}
