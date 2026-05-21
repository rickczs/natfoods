import type { LucideIcon } from "lucide-react";

type ImpactCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ImpactCard({ title, description, icon: Icon }: ImpactCardProps) {
  return (
    <article className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-md border border-[#d7b363]/90 bg-[#0b1d13]/54 p-5 text-[#f7d78a] shadow-[0_22px_58px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_0_34px_rgba(232,189,98,0.08)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#f4d384] hover:bg-[#10281b]/66 hover:shadow-[0_34px_82px_rgba(0,0,0,0.46),0_0_28px_rgba(244,211,132,0.18),inset_0_1px_0_rgba(255,255,255,0.22)] sm:min-h-[290px] sm:p-6 lg:min-h-[315px]">
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_12%,rgba(244,211,132,0.18),transparent_8rem),linear-gradient(145deg,rgba(255,255,255,0.10),transparent_42%,rgba(0,0,0,0.20))]" />
      <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#fff0bd]/80 to-transparent" />
      <span className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-[#f4d384]/12 blur-2xl transition duration-700 group-hover:bg-[#f4d384]/24" />
      <div className="relative grid size-14 place-items-center rounded-md border border-[#e8c978]/90 bg-[#173724]/72 text-[#f6c943] shadow-[0_0_18px_rgba(246,201,67,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-[#203f28] group-hover:text-[#ffe08a]">
        <Icon size={28} strokeWidth={2.35} />
      </div>
      <h3 className="relative mt-8 max-w-[270px] text-[22px] font-black leading-[1.13] text-[#e8bd62] drop-shadow-[0_2px_3px_rgba(0,0,0,0.48)]">
        {title}
      </h3>
      <p className="relative mt-5 max-w-[300px] text-[16px] font-medium leading-[1.68] text-[#fff1c7] drop-shadow-[0_1px_2px_rgba(0,0,0,0.58)] sm:text-[17px]">
        {description}
      </p>
    </article>
  );
}
