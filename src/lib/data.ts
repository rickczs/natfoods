import {
  Banana,
  BadgeCheck,
  Building2,
  Factory,
  Globe2,
  Handshake,
  Leaf,
  LineChart,
  MapPin,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Store,
  Truck,
  Users,
  Warehouse
} from "lucide-react";

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Nossa Origem", href: "/nossa-origem" },
  { label: "Seja Revendedor", href: "/seja-revendedor" },
  { label: "Onde Comprar", href: "/onde-comprar" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" }
];

export const products = [
  {
    name: "Tradicional",
    image: "/images/produto-tradicional.jpeg",
    description: "Banana da terra crocante, sabor limpo e natural para todos os momentos."
  },
  {
    name: "Orégano",
    image: "/images/produto-oregano.jpeg",
    description: "Toque aromatico e herbal para quem busca um snack leve e marcante."
  },
  {
    name: "Cebola",
    image: "/images/produto-cebola.jpeg",
    description: "Sabor salgado equilibrado, ideal para gôndolas de snacks especiais."
  },
  {
    name: "Canela",
    image: "/images/produto-canela.jpeg",
    description: "Perfil adocicado e acolhedor, com a crocancia premium da Natfoods."
  },
  {
    name: "Lemon Pepper",
    image: "/images/embalagem-detalhe-1.jpeg",
    description: "Notas citricas e picantes em uma versao moderna de banana chips."
  },
  {
    name: "Páprica Doce",
    image: "/images/embalagem-detalhe-2.jpeg",
    description: "Colorido, suave e perfeito para consumidores que gostam de temperos."
  },
  {
    name: "Páprica Picante",
    image: "/images/embalagem-detalhe-3.jpeg",
    description: "Uma opcao intensa para varejo, empórios e marketplaces."
  }
];

export const valueCards = [
  {
    title: "100% Natural",
    description: "Banana da terra selecionada, sem conservantes e sem ingredientes artificiais.",
    icon: Leaf
  },
  {
    title: "Crocância Premium",
    description: "Textura leve, sabor marcante e embalagem ideal para consumo rápido.",
    icon: PackageCheck
  },
  {
    title: "Origem Amazônica",
    description: "Produzido em Cruzeiro do Sul, no Acre, com identidade regional.",
    icon: MapPin
  },
  {
    title: "Potencial Nacional",
    description: "Produto preparado para varejo, distribuidores, empórios, supermercados e marketplaces.",
    icon: Truck
  }
];

export const impactCards = [
  {
    title: "Agricultura familiar",
    description: "Valorizacao de produtores locais e fortalecimento da cadeia da banana da terra.",
    icon: Sprout
  },
  {
    title: "Geração de renda",
    description: "Potencial de empregos diretos e indiretos na produção, embalagem, logística e distribuição.",
    icon: Users
  },
  {
    title: "Produto regional com escala",
    description: "Capacidade inicial planejada de 60.000 pacotes por mês, com possibilidade de expansão produtiva.",
    icon: Scale
  },
  {
    title: "Amazônia no mercado nacional",
    description: "Uma marca acreana preparada para disputar espaço no setor de snacks naturais.",
    icon: Factory
  }
];

export const channels = [
  { label: "WhatsApp comercial", icon: Handshake },
  { label: "Distribuidores regionais", icon: Truck },
  { label: "Lojas parceiras", icon: Store },
  { label: "Amazon", icon: ShoppingBag },
  { label: "Shopee", icon: ShoppingBag },
  { label: "Magalu", icon: ShoppingBag },
  { label: "Varejo alimentar", icon: Store },
  { label: "Empórios e lojas de produtos naturais", icon: Leaf }
];

export const blogPosts = [
  {
    title: "Por que a banana da terra é uma excelente opção de snack natural",
    category: "Alimentação saudável",
    excerpt: "Entenda como sabor, textura e origem transformam a banana da terra em uma escolha inteligente."
  },
  {
    title: "Como produtos amazônicos podem ganhar espaço no varejo nacional",
    category: "Produção amazônica",
    excerpt: "Marca, distribuição e consistência ajudam produtos regionais a chegar a novas prateleiras."
  },
  {
    title: "Natfoods: uma marca acreana com potencial de expansão",
    category: "Empreendedorismo regional",
    excerpt: "Cruzeiro do Sul entra no mapa dos snacks naturais com uma proposta premium e escalável."
  },
  {
    title: "Como revender chips de banana da terra na sua loja",
    category: "Revenda e distribuição",
    excerpt: "Veja canais, perfis de consumidor e oportunidades para empórios, mercados e representantes."
  },
  {
    title: "Snacks naturais: uma tendência de consumo no Brasil",
    category: "Receitas e consumo",
    excerpt: "Consumidores buscam praticidade, ingredientes simples e produtos com história real."
  }
];

export const interestOptions = [
  "Revender na minha loja",
  "Distribuir para mercados e empórios",
  "Representação comercial",
  "Compra para marketplace",
  "Exportação",
  "Outros"
];

export const stats = [
  { label: "pacotes por mês", value: "60 mil" },
  { label: "sabores planejados", value: "7" },
  { label: "origem", value: "Acre" }
];

export const categories = [
  "Alimentação saudável",
  "Banana da terra",
  "Produção amazônica",
  "Empreendedorismo regional",
  "Revenda e distribuição",
  "Receitas e consumo"
];

export const storePrepItems = [
  { title: "Loja online", description: "Estrutura preparada para catálogo, checkout e campanhas digitais.", icon: ShoppingBag },
  { title: "Marketplace", description: "Copy e cards pensados para Amazon, Shopee, Magalu e canais parceiros.", icon: Store },
  { title: "B2B", description: "Fluxo comercial pronto para revendedores, distribuidores e representantes.", icon: Handshake },
  { title: "Produto hero", description: "Imagens reais dos pacotes Natfoods em destaque desde a primeira dobra.", icon: Banana }
];

export const resellerBenefits = [
  {
    title: "Produto com história real",
    description: "Origem amazônica clara, produção em Cruzeiro do Sul e uma narrativa forte para ponto de venda.",
    icon: MapPin
  },
  {
    title: "Linha premium e versátil",
    description: "Sete sabores planejados para varejo alimentar, lojas naturais, empórios e canais digitais.",
    icon: BadgeCheck
  },
  {
    title: "Margem e recompra",
    description: "Snack de consumo rápido, fácil de expor e adequado para compras recorrentes.",
    icon: LineChart
  },
  {
    title: "Suporte comercial",
    description: "Estrutura preparada para materiais de venda, distribuição regional e campanhas de lançamento.",
    icon: Handshake
  }
];

export const partnerProfiles = [
  { title: "Lojistas", description: "Mercados de bairro, conveniências e lojas com giro de snacks.", icon: Store },
  { title: "Empórios", description: "Canais com curadoria de alimentos naturais, regionais e premium.", icon: Leaf },
  { title: "Supermercados", description: "Redes e lojas independentes que buscam produtos de origem brasileira.", icon: Building2 },
  { title: "Distribuidores", description: "Operações regionais com carteira ativa no varejo alimentar.", icon: Warehouse },
  { title: "Representantes", description: "Profissionais comerciais com acesso a lojistas e compradores.", icon: Users },
  { title: "Marketplaces", description: "Canais digitais para venda direta e kits de sabores Natfoods.", icon: Globe2 }
];

export const salesChannels = [
  "Lojas de produtos naturais",
  "Empórios e delicatessens",
  "Supermercados",
  "Atacarejos e distribuidores",
  "Marketplaces",
  "Representação comercial"
];

export const trustHighlights = [
  { title: "Sem conservantes", icon: ShieldCheck },
  { title: "Identidade amazônica", icon: Leaf },
  { title: "Pronto para B2B", icon: Truck },
  { title: "Potencial de escala", icon: Factory }
];
