## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, PostgreSQL, TypeORM, TypeScript

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

 ## Como rodar o projeto na sua máquina
 
 - Faça o clone deste repositório
 ```
 https://github.com/guferreira1/desafio_pedidu_backend.git
 ```
 
 - Caso tenha o Docker instalado na sua máquina
 
 > Utilize este comando para inicializar o projeto
```
docker-compose up ou docker-compose -d (caso não queira mostras os logs)
```

 - Caso não tenha o Docker instalado na sua máquina será necessário ter o PostgreSQL instalado
 > Utilize este comando para instalar todas as dependências
 ```
 yarn install ou somente yarn
 ```
 
 > Basta criar um arquivo .env com base no arquivo .env.example e preencher com suas credenciais
 
 > Utilize este comando para rodar o servidor na sua máquina
 ```
 yarn dev
 ```
 
 ## Endpoints
 - URL base - http://localhost:3333/
 - products
 - ibge
 
 
#### 1) Criação de podutos - POST /products

``
Exemplo de body
``

```
  {
    "name": "pc gamer",
    "category": "computadores",
    "quantity": 5
  }
```

``
Exemplo de response - status 201
`` 
```javascript
  {
    "name": "pc gamer",
    "category": "computadores",
    "quantity": 5,
    "deleted_at": null,
    "id": "f41d99e3-c6e7-4451-a97e-fb34e70f4882",
    "status": "active",
    "created_at": "2023-01-28T18:42:54.775Z",
    "updated_at": "2023-01-28T18:42:54.775Z"
  }
```

#

#### 2) Listar todos os produtos - GET /products

``
Exemplo de response - status 200
`` 
```javascript
  [
    {
      "id": "f41d99e3-c6e7-4451-a97e-fb34e70f4882",
      "name": "pc gamer",
      "category": "computadores",
      "status": "active",
      "quantity": 5,
      "created_at": "2023-01-28T15:42:54.775Z",
      "updated_at": "2023-01-28T15:42:54.775Z",
      "deleted_at": null
    }
  ]
```

#

#### 3) Editar as informações de um produto - PATCH /poducts/:id

``
Exemplo de body
``

```
  {
    "name": "macbook",
    "quantity": 1
  }
```


``
Exemplo de response - status 200
`` 
```javascript
  {
    "id": "44d50f42-8c1c-461e-8e16-0a04547e7de6",
    "name": "macbook",
    "category": "computadores",
    "status": "active",
    "quantity": 1,
    "created_at": "2023-01-28T17:32:49.917Z",
    "updated_at": "2023-01-28T17:33:42.247Z",
    "deleted_at": null
  }
```

#

### 4) Deletar um produto - DELETE /products/:id

Essa roda não necessita de body

Essa rota irá alterar a propriedade *status* do produto para *inactive*, realizando um soft delete e tornando o produto inativo. 

Caso esteja tudo certo, essa rota irá retornar um status 204 (sem conteúdo).

### 5) Requisição na API do IBGE - GET /ibge

Essa rota realizará uma requisição na API do IBGE e armazenar no banco de dados.

Caso já exista algum dado cadastrado anteriormente com o mesmo identificador, os dados não vão duplicarr, apenas atualizar os dados anteriores caso tenha alguma alteração.
