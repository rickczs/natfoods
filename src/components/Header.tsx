"use client";

import { Clock, Instagram, Mail, Menu, Phone, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { buildWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-[#fffaf0]/92 backdrop-blur">
      <div className="hidden bg-organic-600 text-white lg:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-8 text-sm font-bold">
          <div className="flex items-center gap-8">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-banana">
              <Mail size={16} /> {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} /> Atendimento: segunda a sexta, 08h às 18h
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-banana">
              <Phone size={16} /> {siteConfig.whatsappDisplay}
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram Natfoods" className="hover:text-banana">
              <Instagram size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center" aria-label="Natfoods - inicio">
          <Image
            src="/images/logo-natfoods.jpeg"
            alt="Natfoods"
            width={164}
            height={64}
            priority
            className="h-11 w-auto rounded-md object-contain sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-forest-900/78 transition hover:text-forest-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.buy)} target="_blank" rel="noopener noreferrer" variant="outline">
            <ShoppingBag size={17} />
            Comprar Agora
          </ButtonLink>
          <ButtonLink href={buildWhatsAppUrl(whatsappMessages.reseller)} target="_blank" rel="noopener noreferrer">
            Quero Revender
          </ButtonLink>
        </div>

        <button
          className="grid size-11 shrink-0 place-items-center rounded-md border border-forest-900/15 text-forest-900 xl:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-forest-900/10 bg-[#fffaf0] px-4 py-5 shadow-premium xl:hidden">
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
