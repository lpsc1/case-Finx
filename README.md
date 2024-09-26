# Otimização de consulta dos agendamentos cirúrgicos

Este projeto é uma aplicação de agendamento que permite ao usuário visualizar e gerenciar consultas médicas de forma intuitiva e eficiente. A aplicação conta com recursos como filtros, paginação e ordenação, além de uma interface responsiva e amigável.

## **Índice**

- [Recursos Principais](#recursos-principais)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Responsividade](#responsividade)

## **Recursos Principais**

- **Filtros opcionais**: Filtre agendamentos por médico ou paciente.
- **Ordenação e Paginação**: Ordene os agendamentos por data de criação (mais recente) e escolha a quantidade de itens por página.
- **Lista de Agendamentos**: Visualize as consultas em um layout de grid, com cards exibindo informações detalhadas sobre cada agendamento.
- **Responsividade**: Interface otimizada para diversos dispositivos, incluindo desktop, tablet e smartphone.

## **Instalação**

1. Clone o repositório:

```sh
git clone https://github.com/lpsc1/case-Finx.git
```

2. Instale as dependências:

```sh
npm install
```

3. Inicie o servidor backend com JSON Server::

```sh
npm run backend
```

4. Inicie a aplicação:

```sh
npm run dev
```

## **Como Usar**

1. Utilize os filtros de busca para encontrar consultas por nome do médico ou paciente.
2. Ordene os agendamentos por mais recente ou escolha quantos itens deseja ver por página.
3. Navegue pela lista de consultas na interface responsiva.

## **Tecnologias Utilizadas**

1. [Vue 3](https://vuejs.org/): Framework JavaScript para construção de interfaces de usuário.
2. [Vite](https://vitejs.dev/): Ferramenta de build rápida para desenvolvimento com Vue.js.
3. [JSON Server](https://www.npmjs.com/package/json-server): API REST fake para simular operações de CRUD.
4. [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS): Estilização da aplicação, garantindo responsividade e design moderno.

## **Responsividade**
O projeto foi desenvolvido para ser completamente responsivo, adaptando-se perfeitamente a diferentes resoluções de tela, desde dispositivos móveis até desktops.