# primeiraAPI

Projeto criado para as diciplinas de WEB e Mobile, onde criamos apis para consumir o banco de dados, com os metodos GET e POST. 
Futuramente vai ser implementados outros metodos.

##Link para baixar a imagem Docker
https://hub.docker.com/r/thelllima02/app-vendas_app

##Link do Vercel 
https://primeira-api.vercel.app/

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

4. Crie um arquivo chamado .env na raiz do seu projeto.

```bash
MYSQL_HOST="host.docker.internal"
MYSQL_USER="seu_usuario"
MYSQL_PASSWORD="sua_senha"
MYSQL_NAME="seu_banco_de_dados"
MYSQL_PORT="3031"
```

5. Inicie o conteiner :

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

Feito por [Hércules Silva](https://github.com/thellllima02)
