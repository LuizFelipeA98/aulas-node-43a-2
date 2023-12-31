const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', { items })
})

app.get('/', (req, res) => {
    const usuario = {
        nome: "Luiz Felipe",
        profissao: "Estagiario",
        idade: 25
    }

    const auth = true

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})