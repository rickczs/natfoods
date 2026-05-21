import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

export function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-[#c9b484] bg-[#f6edd9]/94 shadow-[0_16px_42px_rgba(72,49,18,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(72,49,18,0.24)]">
      <div className="relative aspect-[4/3] bg-[#efe1c6]">
        <Image src={image} alt={`Chips de banana Natfoods sabor ${name}`} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
        <div className="absolute left-4 top-4 rounded-sm bg-organic-600 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-sm">
          Natural
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-earth">Sabor Natfoods</p>
        <h3 className="mt-2 font-display text-2xl font-black leading-tight text-forest-900">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-forest-800/78 md:min-h-16">{description}</p>
        <ButtonLink
          href={buildWhatsAppUrl(whatsappMessages.product)}
          target="_blank"
          rel="noopener noreferrer"
          variant="gold"
          className="mt-auto w-full"
        >
          <MessageCircle size={18} /> Tenho interesse <span aria-hidden="true">»</span>
        </ButtonLink>
      </div>
    </article>
  );
}
