import { ArrowRight } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  category: string;
  excerpt: string;
};

export function BlogCard({ title, category, excerpt }: BlogCardProps) {
  return (
    <article className="rounded-md border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-earth">{category}</p>
      <h3 className="mt-4 text-xl font-black leading-snug text-forest-900">{title}</h3>
      <p className="mt-3 leading-7 text-forest-800/72">{excerpt}</p>
      <Link href="/blog" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-forest-800">
        Ler conteudo <ArrowRight size={16} />
      </Link>
    </article>
  );
}
