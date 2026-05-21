import { ShoppingBag } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Pronto para levar a Natfoods para novas prateleiras?",
  description = "Converse com nosso time comercial sobre revenda, distribuição, marketplaces e oportunidades para a sua região."
}: CTASectionProps) {
  return (
    <section className="px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-7 rounded-md bg-forest-800 p-5 text-white shadow-premium sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div>
          <h2 className="font-display text-3xl font-black leading-[1.04] sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.reseller)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            Quero Revender <span aria-hidden="true">»</span>
          </ButtonLink>
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.buy)} target="_blank" rel="noopener noreferrer" variant="light" className="w-full sm:w-auto">
            <ShoppingBag size={18} /> Comprar Agora <span aria-hidden="true">»</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
