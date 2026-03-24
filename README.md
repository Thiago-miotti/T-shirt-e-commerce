# Shirt Shop

Loja de camisetas em React com carrinho, navegação e componentes de UI. Projeto criado **para estudar [Zustand](https://github.com/pmndrs/zustand)** (gerenciamento de estado global) e **[Storybook](https://storybook.js.org/)** (documentação e desenvolvimento isolado de componentes).

## Demonstração

(src/assets/Demonstracao.gif)

## Tecnologias

| Área                             | Tecnologia                                                                          |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| **Runtime / UI**                 | [React](https://react.dev/) 19                                                      |
| **Linguagem**                    | [TypeScript](https://www.typescriptlang.org/)                                       |
| **Build & dev server**           | [Vite](https://vite.dev/) 8                                                         |
| **Roteamento**                   | [TanStack Router](https://tanstack.com/router) (file-based com plugin)              |
| **Estado global**                | [Zustand](https://github.com/pmndrs/zustand)                                        |
| **Estilização**                  | [Tailwind CSS](https://tailwindcss.com/) 4 (`@tailwindcss/vite`)                    |
| **Componentes & acessibilidade** | [Radix UI](https://www.radix-ui.com/), [Vaul](https://vaul.emilkowal.ski/) (drawer) |
| **Variantes de componentes**     | [class-variance-authority (CVA)](https://cva.style/), `clsx`, `tailwind-merge`      |
| **Carrossel**                    | [Embla Carousel](https://www.embla-carousel.com/) (React)                           |
| **Ícones**                       | [React Icons](https://react-icons.github.io/react-icons/)                           |
| **Documentação de UI**           | [Storybook](https://storybook.js.org/) 10 (`@storybook/react-vite`)                 |
| **Lint**                         | ESLint                                                                              |

## Scripts

```bash
npm run dev              # aplicação (Vite)
npm run build            # build de produção
npm run preview          # pré-visualizar o build
npm run storybook        # Storybook em http://localhost:6006
npm run build-storybook  # build estático do Storybook
npm run lint             # ESLint
```

## Requisitos

- [Node.js](https://nodejs.org/) (versão compatível com as dependências do projeto)

## Como executar

```bash
npm install
npm run dev
```

Para abrir o Storybook:

```bash
npm run storybook
```
