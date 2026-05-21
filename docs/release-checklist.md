# Checklist de publicacao Natfoods

## Conteudo

- [ ] Revisar copy final de todas as paginas.
- [ ] Confirmar acentos, termos comerciais e nomes de sabores.
- [ ] Validar telefone, e-mail, Instagram e endereco comercial.
- [ ] Trocar placeholders por contatos oficiais.
- [ ] Confirmar imagens finais dos produtos e embalagens.

## SEO

- [ ] Ajustar `NEXT_PUBLIC_SITE_URL` para o dominio definitivo.
- [ ] Conferir titles e descriptions das rotas.
- [ ] Testar Open Graph em WhatsApp, Facebook e LinkedIn.
- [ ] Validar `robots.txt`.
- [ ] Validar `sitemap.xml`.
- [ ] Revisar JSON-LD de Organization e Product antes de producao.

## Conversao

- [ ] Confirmar numero do WhatsApp comercial.
- [ ] Integrar formulario com API, CRM, e-mail ou automacao de WhatsApp.
- [ ] Definir mensagem automatica de lead recebido.
- [ ] Validar jornada de revendedor no mobile.
- [ ] Criar politica de privacidade se o formulario for publicado.

## Performance

- [ ] Rodar `npm run build`.
- [ ] Rodar Lighthouse em mobile e desktop.
- [ ] Revisar peso das imagens finais.
- [ ] Conferir layout nas rotas principais em 360px, 768px, 1440px.

## Deploy

- [ ] Definir plataforma: Vercel, VPS ou outro servidor.
- [ ] Configurar variaveis de ambiente.
- [ ] Configurar dominio.
- [ ] Configurar SSL.
- [ ] Testar redirecionamento `www`/sem `www`.
- [ ] Criar rotina de backup e versionamento.

## Restricao controlada

- [ ] Reavaliar `npm audit` antes de producao publica.
- [ ] Nao aplicar `npm audit fix --force` sem testar impacto de versoes.
