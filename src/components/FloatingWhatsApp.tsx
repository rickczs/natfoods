"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8">
      <div className="group relative flex items-center justify-center">
        {/* Glow effect behind */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#f4d384] to-[#25D366] opacity-30 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:blur-lg" />
        
        <a
          href={buildWhatsAppUrl(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Natfoods pelo WhatsApp"
          className="relative flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-b from-[#1c884a]/95 to-[#125a31]/95 px-4 py-3 font-display font-black text-white shadow-[0_8px_32px_rgba(18,90,49,0.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f4d384]/50 hover:shadow-[0_16px_48px_rgba(18,90,49,0.6)] sm:px-6 sm:py-3.5"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle size={22} className="text-[#f4d384] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
            <div className="absolute -inset-1.5 animate-ping rounded-full bg-[#f4d384] opacity-20 duration-1000" />
          </div>
          <span className="hidden tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] sm:inline">
            Fale Conosco
          </span>
        </a>
      </div>
    </div>
  );
}
