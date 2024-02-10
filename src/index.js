const express= require('express');
const cors= require('cors');
const routes = require('./routes');
const app = express()

app.use(cors());
app.use(express.json()); //transforma json em objeto javaScript
app.use(routes);
// oque vem depois da / é meu recurso que quero acessar, a rota é a / mais o nome do recurso
// Query: são os parametros nomeados enviados na rota depois do '?', serve para filtros, paginação
// Route params: server para identificar um recurso único, exemplo /users:id = /users/1

// Request: uso para fazer uma requisição para acessar parametros, const params= request.params

//e o response quando quero mostrar a resposta de algo para o usuario, response.json

//Request body: corpo da requisição, utilizando para criar ou alterar recursos, tipo nome de user
//const body= request.body

// nodemon é para executar as mudanças do projeto
app.listen(3333)