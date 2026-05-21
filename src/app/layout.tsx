import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { seoKeywords, siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Natfoods | Chips de banana da terra direto da Amazonia",
    template: "%s | Natfoods"
  },
  description:
    "Chips de banana da terra crocantes, naturais e produzidos em Cruzeiro do Sul, Acre, com identidade amazonica, proposta premium e distribuicao nacional.",
  keywords: seoKeywords,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Natfoods | Natural de verdade, direto da Amazonia",
    description:
      "Snack premium de banana da terra produzido em Cruzeiro do Sul, Acre, para varejo, distribuidores, marketplaces e consumidores de todo o Brasil.",
    url: siteConfig.url,
    siteName: "Natfoods",
    images: ["/images/produtos-grupo.jpeg"],
    type: "website",
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Natfoods | Chips de banana da terra da Amazonia",
    description: "Snack natural premium produzido no Acre para consumo, revenda e distribuicao nacional.",
    images: ["/images/produtos-grupo.jpeg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
