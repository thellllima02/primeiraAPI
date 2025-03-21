# primeiraAPI
 Criando a primeiras API para ser usado tanto em Web quanto mobile 

##Link para baixar a imagem Docker

https://hub.docker.com/r/thellllima02/api-mercado-app

# PrimeiraAPI - Sistema de Gestão de Vendas

Este projeto é uma aplicação desenvolvida em **NestJS** para gerenciar vendas, produtos, clientes, fornecedores e categorias.

## 📂 Estrutura do Projeto

```
app-vendas/
├── data/                 # Dados estáticos (se necessário)
├── node_modules/         # Dependências do projeto
├── public/               # Arquivos públicos (imagens, ícones, etc.)
└── src/                  # Código-fonte principal
    ├── app/
    │   ├── api/          # API principal
    │   │   ├── api-vercel/    # Rotas específicas para deploy na Vercel
    │   │   ├── categoria/     # Rotas relacionadas a categorias
    │   │   │    └── route.js
    │   │   ├── cliente/       # Rotas relacionadas a clientes
    │   │   ├── compra/        # Rotas relacionadas a compras
    │   │   ├── fornecedor/    # Rotas relacionadas a fornecedores
    │   │   ├── produto/       # Rotas relacionadas a produtos
    │   │   └── venda/         # Rotas relacionadas a vendas
    │   ├── categoria/        # Páginas de categorias
    │   ├── cliente/          # Páginas de clientes
    │   ├── components/       # Componentes reutilizáveis
    │   ├── compra/           # Páginas de compras
    │   ├── fornecedor/       # Páginas de fornecedores
    │   ├── lib/              # Bibliotecas e utilitários
    │   ├── produto/          # Páginas de produtos
    │   └── venda/            # Páginas de vendas
    ├── favicon.ico          # Ícone do projeto
    ├── globals.css          # Estilos globais
    ├── layout.js            # Layout principal
    ├── not-found.js         # Página de erro 404
    ├── page.js              # Página principal
    └── page.module.css      # Estilos específicos do projeto
```

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework para Node.js
- [Next.js](https://nextjs.org/) - Framework React para renderização no lado do servidor
- JavaScript

## 📌 Pré-requisitos

Certifique-se de ter os seguintes itens instalados na sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

## 📦 Como Executar o Projeto

1. Clone o repositório:

```bash
    git clone https://github.com/thellllima02/primeiraAPI.git
```

2. Acesse o diretório do projeto:

```bash
    cd primeiraapi
```

3. Instale as dependências:

```bash
    npm install
    # ou
    yarn install
```

4. Inicie o servidor de desenvolvimento:

```bash
    npm run start:dev
```
A aplicação estará disponível em: `http://localhost:3000`

ou 

```bash
  docker-compose up -d
```
A aplicação estará disponível em: `http://localhost:3030`
O Banco de dados estará disponível em: `http://localhost:3031`
O PHP Admin estará disponível em: `http://localhost:3032`

## 📊 Endpoints Principais

- `/api/categoria` - Gerenciamento de categorias
- `/api/cliente` - Gerenciamento de clientes
- `/api/compra` - Gerenciamento de compras
- `/api/fornecedor` - Gerenciamento de fornecedores
- `/api/produto` - Gerenciamento de produtos
- `/api/venda` - Gerenciamento de vendas

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para contribuir!

---

Feito com 💙 por [Hércules Silva](https://github.com/thellllima02)


