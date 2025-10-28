const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Geovana Salamanca",
        imagem: "https://github.com/gesalamanca.png",
        minibio: "Analista de Testes e futura desenvolvedora" 
    },
    {
        nome: "Iana Chan",
        imagem: "https://bit.ly/3JCXBqP",
        minibio: "Fundadora Programaria", 
    },
        {nome: "Simara Conceiçã",
        imagem: "https://bit.ly/3LJIyOF",
        minibio: "Fundadora Programaria",
}
]

function mostraMulheres(request, response){
    response.json(mulheres)}
       

function mostraPorta() {
    console.log("Servidor criado e rodando na porta",porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)