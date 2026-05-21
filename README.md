# Natfoods

Site institucional e comercial premium da Natfoods, marca de chips de banana da terra produzidos em Cruzeiro do Sul, Acre, com identidade amazonica e foco em distribuicao nacional.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Componentes reutilizaveis
- SEO basico por rota
- Estrutura preparada para futura loja online e captacao de leads

## Instalar

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Build e validacao

```bash
npm run lint
npm run build
curl http://localhost:3000
```

## Rotas

- `/`
- `/produtos`
- `/nossa-origem`
- `/seja-revendedor`
- `/onde-comprar`
- `/blog`
- `/contato`

## Estrutura de pastas

- `src/app`: rotas, metadata, sitemap e robots.
- `src/components`: componentes visuais reutilizaveis.
- `src/lib/data.ts`: produtos, cards, posts, canais e argumentos comerciais.
- `src/lib/site.ts`: configuracoes de site, WhatsApp e contatos.
- `public/images`: imagens reais dos produtos Natfoods.
- `docs`: documentos de publicacao e checklist.

## Trocar textos

Edite os arrays em `src/lib/data.ts`. Os principais conteudos de produtos, blog, canais de compra, beneficios de revenda e cards institucionais estao centralizados nesse arquivo.

## Trocar imagens

Substitua ou adicione arquivos em `public/images` e atualize o caminho correspondente em `src/lib/data.ts`. As imagens principais usam `next/image` para otimizar carregamento e responsividade.

## Variaveis de ambiente

Copie `.env.example` para `.env.local` e ajuste:

```bash
NEXT_PUBLIC_SITE_URL=https://natfoods.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5568992187626
NEXT_PUBLIC_WHATSAPP_DISPLAY=+55 68 99218-7626
NEXT_PUBLIC_CONTACT_EMAIL=contato@natfoods.com.br
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/natfoodsalimentos?igsh=MWg3amJ6NDNnNjRicA==
NEXT_PUBLIC_INSTAGRAM_HANDLE=@natfoodsalimentos
```

O botao flutuante de WhatsApp e os CTAs comerciais usam `NEXT_PUBLIC_WHATSAPP_NUMBER`. O numero exibido no site vem de `NEXT_PUBLIC_WHATSAPP_DISPLAY`.

## Formulario comercial

O formulario de revendedor usa estado local, validacao basica de WhatsApp e mensagem de sucesso. O ponto de integracao futura esta comentado em `src/components/RevendedorForm.tsx` para API de leads, CRM, e-mail transacional ou automacao de WhatsApp.

## SEO

O projeto inclui metadata por rota, Open Graph, Twitter card, `sitemap.ts`, `robots.ts` e JSON-LD basico para Organization e lista de produtos. Antes de producao, revise dominio, telefone, e-mail, Instagram e imagens oficiais.

## Observacao sobre npm audit

O `npm audit` aponta vulnerabilidades moderadas transitivas no ecossistema Next/PostCSS. Nao aplicar `npm audit fix --force` neste momento, porque a correcao sugerida pode causar downgrade ou mudanca incompatível. Reavaliar antes da publicacao publica e acompanhar atualizacoes do Next.js/PostCSS.
