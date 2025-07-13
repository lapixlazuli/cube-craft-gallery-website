# 3DimensionLabs

Este repositório contém o código do site da **3DimensionLabs**, uma galeria interativa de projetos e serviços de impressão 3D.

## Sobre o projeto

O site apresenta a marca e seus trabalhos, permitindo que visitantes explorem diferentes categorias de atuação e entrem em contato para iniciar projetos personalizados. Ele foi desenvolvido com **React** e **TypeScript**, usando **Vite** para o bundling e **Tailwind CSS** com a biblioteca **shadcn-ui** para os componentes de interface.

## Principais seções

- **Página inicial** (`/`): traz um cabeçalho responsivo, um herói com animações de cubos, a grade "Dimensões Criativas" e um formulário de contato que exibe toasts de confirmação.
- **Portfólio** (`/portfolio`): apresenta projetos em cards filtráveis por categoria.
- **404**: página exibida para rotas inexistentes.

## Estrutura do código

```
src/
  assets/        # imagens e outros arquivos estáticos
  components/    # cabeçalho, rodapé, hero, etc.
  pages/         # páginas renderizadas pelo React Router
  hooks/         # hooks utilitários (ex.: useIsMobile)
  lib/           # funções auxiliares
```

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Para gerar a versão de produção:

```bash
npm run build
```

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui
- React Router
- React Query

