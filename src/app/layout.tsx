import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { seoKeywords, siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Natfoods | Chips de banana da terra direto da Amazônia",
    template: "%s | Natfoods"
  },
  description:
    "Chips de banana da terra crocantes, naturais e produzidos em Cruzeiro do Sul, Acre, com identidade amazônica, proposta premium e distribuição nacional.",
  keywords: seoKeywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Natfoods | Natural de verdade, direto da Amazônia",
    description:
      "Snack premium de banana da terra produzido em Cruzeiro do Sul, Acre, para varejo, distribuidores, marketplaces e consumidores de todo o Brasil.",
    url: siteConfig.url,
    siteName: "Natfoods",
    images: [
      {
        url: "/images/produtos-grupo.jpeg",
        width: 1200,
        height: 630,
        alt: "Chips de Banana da Terra Premium Natfoods",
      }
    ],
    type: "website",
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Natfoods | Chips de banana da terra da Amazônia",
    description: "Snack natural premium produzido no Acre para consumo, revenda e distribuição nacional.",
    images: ["/images/produtos-grupo.jpeg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
