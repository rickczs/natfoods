# Go-live VPS Natfoods

## DNS

- [ ] Registro A configurado: `@ -> 191.252.185.61`.
- [ ] Registro `www` configurado como CNAME: `www -> natfoodsdaamazonia.com.br`.
- [ ] Alternativa, se CNAME nao for aceito: `www -> A -> 191.252.185.61`.
- [ ] Propagacao DNS conferida com `dig natfoodsdaamazonia.com.br`.

## VPS

- [ ] SSH testado: `ssh root@191.252.185.61`.
- [ ] Sistema atualizado.
- [ ] Node.js LTS instalado.
- [ ] Git instalado.
- [ ] PM2 instalado.
- [ ] Nginx instalado e ativo.
- [ ] Firewall liberando apenas `22`, `80` e `443`.
- [ ] Porta `3000` nao exposta publicamente no firewall.
- [ ] Swap configurado se o build precisar de mais memoria.

## Aplicacao

- [ ] Repositorio clonado em `/var/www/natfoods`.
- [ ] `.env.production` criado com dados oficiais.
- [ ] `npm ci` executado.
- [ ] `npm run lint` aprovado.
- [ ] `npm run build` aprovado.
- [ ] Aplicacao ativa na porta interna `3000`.
- [ ] `pm2 status` mostrando `natfoods-site` online.
- [ ] `pm2 save` executado.

## Nginx e SSL

- [ ] Configuracao criada em `/etc/nginx/sites-available/natfoodsdaamazonia.com.br`.
- [ ] Symlink criado em `/etc/nginx/sites-enabled/`.
- [ ] `nginx -t` aprovado.
- [ ] Proxy reverso funcionando em HTTP.
- [ ] Certbot instalado.
- [ ] SSL ativo para `natfoodsdaamazonia.com.br`.
- [ ] SSL ativo para `www.natfoodsdaamazonia.com.br`.
- [ ] Renovacao automatica testada com `certbot renew --dry-run`.

## Testes finais

- [ ] `https://natfoodsdaamazonia.com.br` abre corretamente.
- [ ] `https://www.natfoodsdaamazonia.com.br` abre corretamente.
- [ ] WhatsApp testado.
- [ ] Instagram testado.
- [ ] `https://natfoodsdaamazonia.com.br/sitemap.xml` testado.
- [ ] `https://natfoodsdaamazonia.com.br/robots.txt` testado.
- [ ] Teste mobile realizado.
- [ ] Lighthouse executado em mobile e desktop.
- [ ] Logs do PM2 conferidos.
- [ ] Logs do Nginx conferidos.
