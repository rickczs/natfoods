import Image from "next/image";
import { valueCards } from "@/lib/data";

export function ValuePropositionSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
      <Image
        src="/images/amazonia-bg.jpg"
        alt="Paisagem amazônica ao fundo"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061a10]/96 via-[#12361f]/72 to-[#12361f]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-[#6f4024]/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#8e5a35]/78 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl rounded-md bg-[#061a10]/44 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-6 lg:p-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f1d384] drop-shadow-sm">Proposta de valor</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-[1.04] text-[#ffe29a] drop-shadow-[0_3px_18px_rgba(0,0,0,0.32)] sm:text-4xl lg:text-5xl">
            O sabor da Amazônia em cada crocância
          </h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[#fff8e8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.42)]">
            A Natfoods transforma a banana da terra em um snack premium, crocante e natural. Feito com ingredientes
            selecionados, sem conservantes, sem corantes e com uma proposta que valoriza a produção regional amazônica.
          </p>
        </div>
        <div className="pointer-events-none absolute right-10 top-16 z-10 hidden items-center gap-3 text-[#f1d384] lg:flex">
          <span className="text-5xl">⌁</span>
          <span className="rounded-full bg-[#f1d384] px-4 py-2 text-sm font-black text-[#173d25] shadow-[0_16px_40px_rgba(0,0,0,0.18)]">Banana da terra</span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-md border border-[#f7df9d]/78 bg-[#07170e]/86 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_0_rgba(92,63,30,0.12),0_28px_70px_rgba(0,0,0,0.34)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#f4d384] hover:bg-[#0d2416]/92 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_22px_0_rgba(92,63,30,0.10),0_38px_90px_rgba(0,0,0,0.42),0_0_26px_rgba(244,211,132,0.16)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#16371f]/56 via-[#06140c]/76 to-black/58" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-full bg-gradient-to-b from-white/22 to-transparent transition duration-700 group-hover:translate-y-0" />
              <span className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-banana/12 blur-2xl transition duration-700 group-hover:bg-banana/24" />
              <span className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b48a30]/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative grid size-12 place-items-center rounded-md border border-[#f4d384]/62 bg-[#173d25]/82 text-[#f4d384] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_20px_rgba(0,0,0,0.28)] transition duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-banana group-hover:text-forest-900">
                <Icon size={23} />
              </div>
              <h3 className="relative mt-5 text-xl font-black leading-tight text-[#f3c968] drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">{title}</h3>
              <p className="relative mt-4 text-sm font-semibold leading-6 text-[#fff2c7] drop-shadow-[0_1px_2px_rgba(0,0,0,0.58)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
