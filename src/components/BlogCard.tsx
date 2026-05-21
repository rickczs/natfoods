import { ArrowRight } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  category: string;
  excerpt: string;
};

export function BlogCard({ title, category, excerpt }: BlogCardProps) {
  return (
    <article className="group relative flex h-full min-h-[285px] flex-col overflow-hidden rounded-md border border-[#f4d384]/58 bg-[#06160d]/88 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#f4d384] hover:bg-[#0d2416]/94 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_30px_70px_rgba(0,0,0,0.36),0_0_24px_rgba(244,211,132,0.14)] sm:p-7">
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#173d25]/44 via-[#06160d]/72 to-black/50" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-full bg-gradient-to-b from-white/22 to-transparent transition duration-700 group-hover:translate-y-0" />
      <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-banana/12 blur-2xl transition duration-700 group-hover:bg-banana/24" />
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c89b53]/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <p className="relative text-[11px] font-black uppercase tracking-[0.28em] text-[#e8bd62]">{category}</p>
      <h3 className="relative mt-5 text-xl font-black leading-snug text-[#fff1c7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.52)]">{title}</h3>
      <p className="relative mt-4 font-medium leading-7 text-[#fff8e8]/86 drop-shadow-[0_1px_2px_rgba(0,0,0,0.46)]">{excerpt}</p>
      <Link href="/blog" className="relative mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#f3c968] transition hover:text-[#ffe29a]">
        Ler conteúdo <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1.5" />
      </Link>
    </article>
  );
}
