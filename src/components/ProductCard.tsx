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
    <article className="overflow-hidden rounded-md border border-forest-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[4/3] bg-forest-50">
        <Image src={image} alt={`Chips de banana Natfoods sabor ${name}`} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
      </div>
      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-earth">Sabor Natfoods</p>
        <h3 className="mt-2 text-2xl font-black text-forest-900">{name}</h3>
        <p className="mt-3 min-h-20 leading-7 text-forest-800/72">{description}</p>
        <ButtonLink
          href={buildWhatsAppUrl(whatsappMessages.product)}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="mt-5 w-full"
        >
          <MessageCircle size={18} /> Tenho interesse
        </ButtonLink>
      </div>
    </article>
  );
}
