"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-[#fffaf0]/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Natfoods - inicio">
          <span className="grid size-11 place-items-center rounded-md bg-forest-800 text-xl font-black text-banana">N</span>
          <span>
            <span className="block text-xl font-black leading-none text-forest-900">Natfoods</span>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-earth">Amazonia snack</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-forest-900/78 transition hover:text-forest-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.buy)} target="_blank" rel="noopener noreferrer" variant="outline">
            <ShoppingBag size={17} />
            Comprar Agora
          </ButtonLink>
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.reseller)} target="_blank" rel="noopener noreferrer">
            Quero Revender
          </ButtonLink>
        </div>

        <button
          className="grid size-11 place-items-center rounded-md border border-forest-900/15 text-forest-900 lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-forest-900/10 bg-[#fffaf0] px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-bold text-forest-900 hover:bg-forest-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <ButtonLink href={buildWhatsAppUrl(whatsappMessages.buy)} target="_blank" rel="noopener noreferrer" variant="outline">
                Comprar Agora
              </ButtonLink>
              <ButtonLink href={buildWhatsAppUrl(whatsappMessages.reseller)} target="_blank" rel="noopener noreferrer">
                Quero Revender
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
