const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'admin', {
  host: "localhost",
  dialect: "mysql"
})

sequelize.authenticate().then(function () {
  console.log("Conectado com sucesso!")
}).catch(function (erro) {
  console.log("Falha ao se conectar " + erro)
})


// model de postagem 

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

/*Postagem.create({
  titulo: "QUALQUER",
  conteudo: "kkkk"
})*/

//Postagem.sync({ force: true }) 

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

//Usuario.sync({ force: true })/* 

Usuario.create({
  nome: "Israel",
  sobrenome: "Alves",
  idade: 26,
  email: "teste@gmail.com"
})