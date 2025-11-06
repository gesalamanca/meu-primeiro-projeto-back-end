const express = require("express") // aqui estou iniciando o express
const router = express.Router() /// aqui estou configurando a primeira parte da rota    
const { v4: uuidv4 } = require('uuid'); // aqui estou configurando o uuid

const app = express() // aqui estou iniciando o app
app.use(express.json()) // aqui estou configurando o app para usar JSON
const porta = 3333 // aqui estou configurando a porta

// aqui estou criando lista inicial de mulheres
const mulheres = [

    {  id:'1',
        nome: "Geovana Salamanca",
        imagem: "https://github.com/gesalamanca.png",
        minibio: "Analista de Testes e futura desenvolvedora" 
    },
    {  id:'2',
        nome: "Iana Chan",
        imagem: "https://bit.ly/3JCXBqP",
        minibio: "Fundadora Programaria", 
    },
    {   id:'3',
        nome: "Simara Conceição",
        imagem: "https://bit.ly/3LJIyOF",
        minibio: "Fundadora Programaria",
}
]

// GET
function mostraMulheres(request, response){
    response.json(mulheres)
}

//POST
function criaMulher(request, response){ 
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)
    response.json(mulheres)
}      

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
}
const mulherEncontrada = mulheres.find(encontraMulher)
if(request.body.nome){
    mulherEncontrada.nome = request.body.nome
}
if(request.body.minibio){
    mulherEncontrada.minibio= request.body.minibio
}
if(request.body.imagem){
    mulherEncontrada.imagem = request.body.imagem
}
response.json(mulheres)
}
app.use(router.get('/mulheres', mostraMulheres))// configurei a rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei a rota POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH/mulheres/id

//PORTA 
function mostraPorta() {
    console.log("Servidor criado e rodando na porta",porta)
}

app.listen(porta, mostraPorta) // aqui estou dizendo para o app ouvir a porta