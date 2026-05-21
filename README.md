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
NEXT_PUBLIC_SITE_URL=https://natfoodsdaamazonia.com.br
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

## Deploy em VPS Locaweb

Deploy oficial previsto:

- Dominio: `https://natfoodsdaamazonia.com.br`
- VPS Locaweb: `191.252.185.61`
- Stack: Ubuntu, Node.js LTS, PM2, Nginx e Certbot/Let's Encrypt.
- Aplicacao interna: `http://127.0.0.1:3000`

Documentacao completa:

- `docs/deploy-vps-locaweb.md`
- `docs/go-live-vps-checklist.md`
- `docs/nginx/natfoodsdaamazonia.com.br.conf`

Fluxo resumido na VPS:

```bash
ssh root@191.252.185.61
apt update
apt install -y git
git clone https://github.com/rickczs/natfoods.git /var/www/natfoods
cd /var/www/natfoods
bash scripts/vps/bootstrap-natfoods.sh
nano .env.production
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

Depois, configure Nginx e SSL conforme `docs/deploy-vps-locaweb.md`.

## Observacao sobre npm audit

O `npm audit` aponta vulnerabilidades moderadas transitivas no ecossistema Next/PostCSS. Nao aplicar `npm audit fix --force` neste momento, porque a correcao sugerida pode causar downgrade ou mudanca incompatível. Reavaliar antes da publicacao publica e acompanhar atualizacoes do Next.js/PostCSS.
