//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos extras
server.use(express.static('public'))

//habilitar body do formulario
server.use(express.urlencoded({ extended: true }))

//configurando a templete engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true, //boolean ou booleano
})

//lista de doadores: Vetores/Array
const donors = [
    {
        name: "Ana Souza",
        blood: "AB+"
    },
    {
        name: "Alexandre Rocha",
        blood: "B+"
    },
    {
        name: "Giovane Rocha",
        blood: "A+"
    },
    {
        name: "Camila Rocha",
        blood: "O+"
    }
]

//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

server.post("/", function(req, res) {
    //pegar dados do formulario.
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({ 
        name: name,
        blood: blood,
     })

     return res.redirect("/")
}) 

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("Teste servidor")
})