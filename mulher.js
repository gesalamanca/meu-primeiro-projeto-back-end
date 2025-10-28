const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json(
        {
            nome: "Geovana Salamanca",
            imagem: "https://github.com/gesalamanca.png",
            minibio: "Analista de Testes e futura desenvolvedora"
        }
    )
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta",porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
