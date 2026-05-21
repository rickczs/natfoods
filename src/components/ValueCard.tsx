import type { LucideIcon } from "lucide-react";

type ValueCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
  return (
    <article className="rounded-md border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <div className="grid size-14 place-items-center rounded-md bg-organic-100 text-organic-700">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-black text-forest-900">{title}</h3>
      <p className="mt-3 leading-7 text-forest-800/72">{description}</p>
    </article>
  );
}
