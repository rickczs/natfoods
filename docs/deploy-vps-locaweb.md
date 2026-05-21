# Deploy Natfoods em VPS Locaweb

Este guia publica o site Natfoods em uma VPS Locaweb usando Ubuntu, Node.js LTS, PM2, Nginx e SSL gratuito com Certbot.

## Arquitetura

```text
natfoodsdaamazonia.com.br
  -> DNS apontando para 191.252.185.61
  -> Nginx com SSL
  -> proxy reverso para http://127.0.0.1:3000
  -> Next.js rodando com PM2
```

## Dados de producao

- Dominio: `natfoodsdaamazonia.com.br`
- IP publico: `191.252.185.61`
- Usuario SSH provavel: `root`
- Repositorio: `https://github.com/rickczs/natfoods.git`
- Diretorio recomendado: `/var/www/natfoods`
- Porta interna da aplicacao: `3000`

## DNS esperado

No painel DNS do dominio:

```text
Tipo: A
Nome: @
Valor: 191.252.185.61
TTL: padrao
```

Para `www`, use a opcao recomendada:

```text
Tipo: CNAME
Nome: www
Valor: natfoodsdaamazonia.com.br
TTL: padrao
```

Alternativa, se o painel nao aceitar CNAME:

```text
Tipo: A
Nome: www
Valor: 191.252.185.61
TTL: padrao
```

Valide a propagacao:

```bash
dig +short natfoodsdaamazonia.com.br
dig +short www.natfoodsdaamazonia.com.br
```

## 1. Acesso SSH

```bash
ssh root@191.252.185.61
```

Se for o primeiro acesso, confirme a chave do servidor. Nao compartilhe senha, chave privada ou token em repositorios.

## 2. Setup inicial da VPS

No servidor, clone o repositorio temporariamente ou envie apenas o script. O fluxo mais simples e:

```bash
apt update
apt install -y git
git clone https://github.com/rickczs/natfoods.git /var/www/natfoods
cd /var/www/natfoods
bash scripts/vps/bootstrap-natfoods.sh
```

O script:

- atualiza pacotes;
- instala `curl`, `git`, `nginx`, `ufw` e dependencias basicas;
- instala Node.js LTS via NodeSource;
- instala PM2 globalmente;
- habilita e inicia Nginx;
- exibe versoes instaladas.

Ele nao apaga arquivos existentes e foi escrito para ser idempotente quando possivel.

### Observacao para VPS com 1 GB de RAM

Se `npm run build` falhar por falta de memoria, crie swap antes do build:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
free -h
```

Esse ajuste ajuda o build do Next.js em VPS pequenas. Ainda assim, evite rodar muitos servicos junto com o site.

## 3. Variaveis de ambiente

Crie `/var/www/natfoods/.env.production`:

```bash
nano /var/www/natfoods/.env.production
```

Conteudo:

```env
NEXT_PUBLIC_SITE_URL=https://natfoodsdaamazonia.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5568992187626
NEXT_PUBLIC_WHATSAPP_DISPLAY=+55 68 99218-7626
NEXT_PUBLIC_CONTACT_EMAIL=contato@natfoods.com.br
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/natfoodsalimentos?igsh=MWg3amJ6NDNnNjRicA==
NEXT_PUBLIC_INSTAGRAM_HANDLE=@natfoodsalimentos
```

Importante:

- nao comite `.env.local`, `.env.production`, senhas ou chaves privadas;
- use `NEXT_PUBLIC_*` apenas para dados publicos, pois esses valores podem aparecer no bundle do navegador;
- contatos publicos como WhatsApp e Instagram podem ficar em `NEXT_PUBLIC_*`.

## 4. Build inicial

```bash
cd /var/www/natfoods
npm ci
npm run lint
npm run build
```

## 5. Inicializacao com PM2

O projeto inclui `ecosystem.config.js` com:

- app name: `natfoods-site`;
- script: `npm`;
- args: `start`;
- cwd: `/var/www/natfoods`;
- `NODE_ENV=production`;
- `PORT=3000`.

Inicie:

```bash
cd /var/www/natfoods
pm2 start ecosystem.config.js
pm2 save
pm2 status
```

Configure PM2 para subir no boot:

```bash
pm2 startup systemd
```

O comando acima imprime uma linha com `sudo env ... pm2 startup ...`. Copie e execute a linha indicada pelo PM2. Depois rode:

```bash
pm2 save
```

Valide localmente na VPS:

```bash
curl -I http://127.0.0.1:3000
```

## 6. Nginx como proxy reverso

Copie a configuracao de exemplo:

```bash
cp /var/www/natfoods/docs/nginx/natfoodsdaamazonia.com.br.conf \
  /etc/nginx/sites-available/natfoodsdaamazonia.com.br
```

Ative o site:

```bash
ln -s /etc/nginx/sites-available/natfoodsdaamazonia.com.br \
  /etc/nginx/sites-enabled/natfoodsdaamazonia.com.br
```

Se existir o site default do Nginx e ele estiver conflitando, remova apenas o symlink:

```bash
rm -f /etc/nginx/sites-enabled/default
```

Teste e recarregue:

```bash
nginx -t
systemctl reload nginx
```

Valide:

```bash
curl -I http://natfoodsdaamazonia.com.br
curl -I http://www.natfoodsdaamazonia.com.br
```

## 7. SSL com Certbot

Instale Certbot:

```bash
apt install -y certbot python3-certbot-nginx
```

Emita o certificado:

```bash
certbot --nginx -d natfoodsdaamazonia.com.br -d www.natfoodsdaamazonia.com.br
```

Escolha redirecionamento HTTP -> HTTPS quando o Certbot perguntar.

Teste renovacao:

```bash
certbot renew --dry-run
```

Valide:

```bash
curl -I https://natfoodsdaamazonia.com.br
curl -I https://www.natfoodsdaamazonia.com.br
```

## 8. Deploy de atualizacao

Depois do primeiro deploy, atualize com:

```bash
cd /var/www/natfoods
bash scripts/vps/deploy-natfoods.sh
```

O script executa:

- `git pull --ff-only`;
- `npm ci`;
- `npm run lint`;
- `npm run build`;
- restart ou start do PM2;
- `pm2 save`;
- `pm2 status`.

## 9. Rollback basico

Veja commits recentes:

```bash
cd /var/www/natfoods
git log --oneline -5
```

Volte para um commit conhecido:

```bash
git checkout <commit-seguro>
npm ci
npm run build
pm2 restart natfoods-site --update-env
pm2 save
```

Para voltar a acompanhar a branch principal:

```bash
git checkout main
git pull --ff-only
bash scripts/vps/deploy-natfoods.sh
```

## 10. Logs e diagnostico

PM2:

```bash
pm2 status
pm2 logs natfoods-site
pm2 monit
```

Nginx:

```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
systemctl status nginx
```

Aplicacao:

```bash
curl -I http://127.0.0.1:3000
curl -I https://natfoodsdaamazonia.com.br
curl -I https://natfoodsdaamazonia.com.br/sitemap.xml
curl -I https://natfoodsdaamazonia.com.br/robots.txt
```

## 11. Seguranca operacional

- Nao comite `.env.local`, `.env.production`, senhas, tokens ou chaves SSH.
- Use `NEXT_PUBLIC_*` apenas para dados publicos.
- Futuramente, crie um usuario Linux sem root para deploy e deixe `root` apenas para administracao.
- Mantenha o firewall liberando apenas `22`, `80` e `443`.
- A porta `3000` deve responder apenas internamente, via `127.0.0.1`, atras do Nginx.
- Evite hospedar muitos servicos nessa VPS de 1 GB de RAM.
- Mantenha backups do projeto, configuracoes Nginx e variaveis de ambiente.
