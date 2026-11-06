# Chico Brownie 🍫

Este é um site de amostra feito para apresentar a Chico Brownie com o mesmo carinho que um brownie merece. Uma vitrine digital para conhecer a marca, explorar os produtos e encontrar o caminho até o próximo pedido.

O projeto apresenta uma confeitaria artesanal de São Paulo em uma página responsiva, com links para pedidos e redes sociais.

## O que tem por aqui

- Uma página inicial com a marca, sua história, seus diferenciais e uma galeria.
- Um cardápio para explorar brownies, cones e combos por categoria.
- Atalhos para pedir pelo WhatsApp ou iFood e visitar o Instagram.
- Um visual que se adapta ao celular e ao desktop.

## Tecnologias

- React 18
- TypeScript
- Vite
- styled-components

## Onde dar seu toque

- **Informações da marca e canais de contato:** `src/data/brand.ts` — nome, ano de fundação, Instagram, telefone do WhatsApp, mensagem padrão e links de pedidos.
- **Produtos e categorias:** `src/data/products.ts` — nomes, descrições, categorias, preços e imagens.
- **Imagens:** `public/img/` — substitua os arquivos ou atualize suas referências nos dados e componentes.
- **Conteúdo e seções da página:** `src/pages/Home.tsx`.

Antes de publicar, confira os dados de contato, as informações da marca e os canais de pedido. Em `src/data/brand.ts` há um lembrete para validar tudo nos canais oficiais — brownie bom não precisa de link quebrado.

## Publicação

O workflow em `.github/workflows/deploy.yml` compila e publica o site no GitHub Pages quando há um push para a branch `main`, ou quando executado manualmente pelo GitHub Actions. Para publicar, habilite o GitHub Pages usando GitHub Actions nas configurações do repositório.

1. Em **Settings > Pages > Build and deployment > Source**, selecione **GitHub Actions**, não **Deploy from a branch**.
2. Em **Actions > Deploy to GitHub Pages**, execute **Run workflow** na branch `main` ou envie um novo push para essa branch.
3. Aguarde o job `deploy` terminar antes de abrir o site.

O workflow usa o caminho informado pelo GitHub Pages como base do build e publica apenas `dist`. Não publique a raiz do repositório: o `index.html` original depende do Vite para substituir `%BASE_URL%` e compilar `src/main.tsx`. Se esses valores aparecerem no HTML publicado, o Pages está servindo o código-fonte em vez do build, causando erros 400/404 nas imagens e no JavaScript.

---

Feito com carinho por [@devseravali](https://github.com/devseravali). 🍫
