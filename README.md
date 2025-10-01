# 🧑‍💻 API REST + Frontend para Gerenciamento de Usuários

Este projeto consiste em uma aplicação **Node.js + Express + MongoDB** com um **frontend em EJS** para gerenciamento de usuários.  
Permite realizar as operações:

- Criar usuário
- Listar todos os usuários
- Buscar usuário por ID
- Editar usuário
- Excluir usuário

O frontend foi desenvolvido em **EJS** com um **tema dark moderno e elegante**.  

===

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **Axios**
- **EJS (views do frontend)**
- **CSS (tema dark customizado)**

===


## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (>= 18.x)
- [MongoDB](https://www.mongodb.com/try/download/community) (rodando local ou remoto, ex: Atlas)

===

## 🔧 Instalação

Clone o repositório e entre na pasta:
(no cmd)
"git clone https://github.com/kauaseppe/Projeto-Grupo-Business.git
cd Projeto-Grupo-Business"

Instale as dependências:
(no cmd)
"npm install"
As dependências incluem express, mongoose, axios, ejs e cors.

▶️ Executando o Projeto
1. Configure o MongoDB

Certifique-se de que o MongoDB está rodando localmente (padrão mongodb://localhost:27017/usuariosDB).
Se quiser usar o MongoDB Atlas, ajuste a string de conexão em backend/index.js.

2. Rode o Backend

Abra um terminal dentro da pasta backend/ e execute:
"node index.js"

A API estará disponível em:
"http://localhost:3000"

3. Rode o Frontend

Abra outro terminal dentro da pasta frontend/ e execute:
"node index.js"

O frontend estará disponível em:
"http://localhost:4000"

===

🎨 Frontend

O frontend em EJS fornece uma interface gráfica simples e elegante para interagir com a API.
Acesse no navegador:

"http://localhost:4000"

Lá você poderá criar, listar, editar e excluir usuários facilmente.

🧪 Testes Simples
Você pode testar as rotas da API usando:

Insomnia / Postman
cURL no terminal
Ou diretamente pelo frontend (recomendado)



👨‍💻 Autor: Kauã Alves Seppe
📅 Versão: 1.0
