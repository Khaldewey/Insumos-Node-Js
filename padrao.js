
// Criação de servidor 


const express = require("express")
const app = express()
app.listen(8081, function () {
  console.log("Servidor Ativo : localhost:8081")
})

// Body Parser
//const bodyparser = require('body-parser')   isso nao e mais necessario
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Conexão com o banco de dados 
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'admin', {
  host: "localhost",
  dialect: "mysql"
})

// Config   
// Template Engine 
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Rotas
app.get('/cad', function (req, res) {
  res.render('formulario')
})

app.post('/add', function (req, res) {
  res.send('Texto: ' + req.body.titulo + ' Conteudo : ' + req.body.conteudo)
})











