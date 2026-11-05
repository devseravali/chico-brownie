# Chico Brownie

Site de amostra para a Chico Brownie, uma confeitaria artesanal de São Paulo. A página apresenta a marca, seus produtos e diferenciais, com navegação responsiva e links para pedidos e redes sociais.

## Funcionalidades

- Página inicial com apresentação da marca, história, diferenciais e galeria.
- Cardápio com filtros por categoria: brownies, cones e combos.
- Links para pedidos pelo WhatsApp e iFood, além do perfil no Instagram.
- Layout responsivo para dispositivos móveis e desktop.

## Tecnologias

- React 18
- TypeScript
- Vite
- styled-components

## Requisitos

- Node.js 20 ou superior
- npm

## Como executar

Instale as dependências:

```bash
npm ci
```

Inicie o servidor local de desenvolvimento:

```bash
npm run dev
```

O Vite informará o endereço local no terminal.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Abre uma prévia local da versão compilada. |

## Personalização

- **Informações da marca e canais de contato:** `src/data/brand.ts` — nome, ano de fundação, Instagram, telefone do WhatsApp, mensagem padrão e links de pedidos.
- **Produtos e categorias:** `src/data/products.ts` — nomes, descrições, categorias, preços e imagens.
- **Imagens:** `public/img/` — substitua os arquivos ou atualize suas referências nos dados e componentes.
- **Conteúdo e seções da página:** `src/pages/Home.tsx`.

Antes de publicar, confirme os dados de contato, informações da marca, conteúdo institucional e canais de pedido. O arquivo `src/data/brand.ts` contém um lembrete para validar essas informações nos canais oficiais.

## Publicação

O workflow em `.github/workflows/deploy.yml` compila e publica o site no GitHub Pages quando há um push para a branch `main`, ou quando executado manualmente pelo GitHub Actions. Para publicar, habilite o GitHub Pages usando GitHub Actions nas configurações do repositório.
