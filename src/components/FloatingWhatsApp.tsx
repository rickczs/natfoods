"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Natfoods pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-3 rounded-md bg-[#1f8f4d] px-4 font-black text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-[#187a41] focus:outline-none focus:ring-4 focus:ring-banana/40"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
