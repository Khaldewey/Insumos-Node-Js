const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html")
}
)

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html")
})

//parâmetros

app.get("/ola/:cargo/:nome/:cor", function (req, res) {
  res.send("<h1>Ola " + req.params.nome + "</1>" + "<h2> Seu cargo e: " + req.params.cargo + "</h2>" + "<h3> Sua cor favorita e: " + req.params.cor + "</h3>")
})

app.get("/blog", function (req, res) {
  res.send('Bem-vindo ao blog')
})

app.listen(8081, function () {
  console.log("Servidor Ativo url:httpl://localhost:8081")
})