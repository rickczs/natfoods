import { ArrowRight, ShoppingBag } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Pronto para levar a Natfoods para novas prateleiras?",
  description = "Converse com nosso time comercial sobre revenda, distribuicao, marketplaces e oportunidades para a sua regiao."
}: CTASectionProps) {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-md bg-forest-800 p-8 text-white shadow-premium lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/72">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.reseller)} target="_blank" rel="noopener noreferrer">
            Quero Revender <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.buy)} target="_blank" rel="noopener noreferrer" variant="light">
            <ShoppingBag size={18} /> Comprar Agora
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
