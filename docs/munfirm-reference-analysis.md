# Analise do kit Munfirm

Fonte local analisada:

```text
documentos /Munfirm
```

O pacote local e um template kit Elementor, nao um projeto Next.js/HTML pronto. Ele contem screenshots e JSONs de secoes que servem como referencia visual e estrutural.

## Arquivos

- Total: 54 arquivos.
- `27` arquivos JSON em `templates/`.
- `26` screenshots JPG em `screenshots/`.
- `1` arquivo HTML de ajuda.

## Paleta extraida

Cores principais do `global.json`:

- Primary: `#1A2428` - verde/preto profundo.
- Secondary: `#FF7800` - laranja de destaque.
- Accent: `#76A713` - verde organico vivo.
- Text: `#666666`.

Cores de apoio:

- `#EBF2DC` - verde claro.
- `#FFF5ED` - creme quente.
- `#F1F6E7` - fundo organico claro.
- `#377B1A` - verde folha.
- `#FFE9D5` - laranja claro.

Adaptacao Natfoods:

- Manter verde floresta da marca.
- Usar amarelo banana como destaque no lugar do laranja forte.
- Usar fundos creme/verde claro para aproximar do estilo organic store.
- Evitar copia literal do template.

## Tipografia observada

O kit usa:

- `Livvic` para titulos e botoes.
- `Nunito Sans` para texto.
- `Shadows Into Light` para chamadas decorativas.

Adaptacao Natfoods:

- Podemos manter Inter por performance ou migrar para uma combinacao mais organica.
- Se migrar, sugestao: `Nunito Sans` para corpo e titulos com peso alto.
- Evitar letra muito manuscrita em excesso; usar somente em detalhes se necessario.

## Estrutura visual observada

Home 01 e Home 02 seguem a mesma logica:

- Header compacto com menu e CTA.
- Hero grande com produto/alimento em destaque.
- Faixa de beneficios ou categorias logo apos o hero.
- Secao "About Company".
- Cards de produtos/servicos.
- CTA de video/suporte.
- Galeria de fotos.
- Depoimentos.
- Blog.
- Footer com newsletter/contato.

## Padroes que valem para Natfoods

- Hero claro, com produto real e badges de confianca.
- Fundo creme e verde claro em secoes alternadas.
- Cards brancos com sombra leve e icones organicos.
- CTAs verdes/amarelos com alto contraste.
- Blocos comerciais com linguagem direta: compra, revenda, distribuicao.
- Galeria ou vitrine de imagens reais dos pacotes.
- Secao de depoimentos pode entrar quando houver validacao real.
- Blog em cards simples com categoria, titulo e chamada.

## Cuidados

- Nao importar JSON Elementor para o Next.js.
- Nao copiar imagens ou composicoes do template para producao sem licenca adequada.
- Usar Munfirm apenas como referencia de estilo e organizacao.
- Priorizar imagens reais da Natfoods em `public/images`.
