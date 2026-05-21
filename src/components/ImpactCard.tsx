import type { LucideIcon } from "lucide-react";

type ImpactCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ImpactCard({ title, description, icon: Icon }: ImpactCardProps) {
  return (
    <article className="rounded-md border border-white/14 bg-white/8 p-6 text-white">
      <div className="grid size-12 place-items-center rounded-md bg-banana text-forest-900">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-white/72">{description}</p>
    </article>
  );
}
