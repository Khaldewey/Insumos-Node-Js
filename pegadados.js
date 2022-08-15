const Post = require('./models/Post')

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


// Config   
// Template Engine 
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Rotas
app.get('/cad', function (req, res) {
  res.render('formulario')
})

app.get('/', function (req, res) {
  Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {
    res.render('home', { posts: posts })
  })

})

app.get('/deletar/:id', function (req, res) {
  Post.destroy({ where: { 'id': req.params.id } }).then(function () {
    res.send("Postagem Deletada")
  }).catch(function (erro) {
    res.send("Essa postagem não existe " + erro)
  })
})

app.post('/add', function (req, res) {

  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    //res.send("Post criado com sucesso")
    res.redirect('/')
  }).catch(function () {
    res.send("Houve um erro : " + erro)
  })
})
