# Guia de Instalação e Comandos

Siga as etapas abaixo para instalar o projeto e executá-lo em seu ambiente local. Certifique-se de que o [Node.js](https://nodejs.org) esteja instalado em sua máquina antes de prosseguir.

## Instalação

Para começar, instale as dependências necessárias usando o gerenciador de pacotes [Yarn](https://yarnpkg.com).

```bash
yarn install

```

## Descrição do projeto

A aplicação é uma plataforma web desenvolvida utilizando as tecnologias React, TypeScript, Vite, Redux Toolkit (RTK), RTK Query e Tailwind CSS. Seu principal objetivo é fornecer informações atualizadas sobre os posts mais relevantes do subreddit ReactJS, obtidos por meio da API do Reddit. A aplicação exibe os posts classificados como hot, new e rising, permitindo aos usuários acompanhar as discussões mais recentes e populares relacionadas à comunidade ReactJS.

## Executando o Projeto

Para rodar o projeto em um ambiente local, utilize o seguinte comando:

```bash
yarn dev
```

## Construindo o Bundle para Produção

Para criar a versão otimizada do projeto para produção, execute o seguinte comando:

```bash
yarn build
```

## Executando os Testes

Para executar os testes do projeto, utilize o seguinte comando:

```bash
yarn test
```

## Linguagens e Frameworks Utilizados

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- React - Biblioteca JavaScript para construção de interfaces de usuário.
- TypeScript - Superset do JavaScript que adiciona tipagem estática.
- Tailwind CSS - Framework CSS utilitário para criação de estilos rápidos e customizáveis.
- Vite - Build tool e bundler extremamente rápido para aplicações JavaScript.
- Redux Toolkit - Conjunto de utilitários para gerenciamento de estado com Redux.
- RTK Query - Biblioteca para facilitar data fetching, cache e controle de erros com Redux Toolkit. Fornece ferramentas como transformErrorResponse para tratamento de erros provenientes da API e providesTags para evitar requisições desnecessárias.
  Certifique-se de revisar as documentações oficiais dos frameworks e bibliotecas para obter informações detalhadas sobre suas funcionalidades e utilização.
