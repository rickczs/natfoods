import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Store, Truck } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { stats, trustHighlights } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="leaf-texture relative overflow-hidden px-5 py-14 text-white sm:px-8 lg:py-20">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fffaf0] to-transparent" />
      <div className="absolute left-0 top-20 hidden h-64 w-64 rounded-full bg-banana/10 blur-3xl lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-banana">
            <Leaf size={16} />
            Produzido em Cruzeiro do Sul - Acre
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Natural de verdade, direto da Amazônia
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Chips de banana da terra crocantes, saborosos e produzidos em Cruzeiro do Sul - Acre. Um snack natural,
            com identidade amazônica e pronto para conquistar o Brasil.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/produtos">
              Conheça os Sabores <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink
              href={buildWhatsAppUrl(whatsappMessages.reseller)}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className="border-banana/50 bg-banana/10"
            >
              <Store size={18} /> Quero ser Revendedor
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustHighlights.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center gap-3 rounded-md border border-white/12 bg-white/8 p-3 text-sm font-bold text-white/84">
                <Icon size={18} className="text-banana" />
                {title}
              </div>
            ))}
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/14 bg-white/8 p-4 backdrop-blur">
                <div className="text-2xl font-black text-banana">{stat.value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative mx-auto aspect-[4/5] max-w-lg overflow-hidden rounded-md border border-white/14 bg-white/10 shadow-premium">
            <Image
              src="/images/produtos-grupo.jpeg"
              alt="Pacotes Natfoods de chips de banana da terra"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/64 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md bg-banana px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-forest-900">
              <ShieldCheck size={16} /> Snack premium
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white/94 p-4 text-forest-900 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-earth">Linha premium</p>
              <p className="mt-1 text-lg font-black">Banana chips Natfoods</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-bold text-forest-800/72">
                <Truck size={16} /> Preparada para distribuicao nacional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
