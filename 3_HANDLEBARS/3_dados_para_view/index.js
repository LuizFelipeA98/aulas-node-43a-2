const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const usuario = {
        nome: "Luiz Felipe",
        profissao: "Estagiario",
        idade: 25
    }

    res.render('home', { usuario })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})