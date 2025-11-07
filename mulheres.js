const express = require("express") // aqui estou iniciando o express
const router = express.Router() /// aqui estou configurando a primeira parte da rota    

const conectaBancoDeDados = require ('./bancoDeDados') // aqui estou ligando ao arquivo bancoDeDados.js
conectaBancoDeDados() // aqui estou conectando ao banco de dados

const Mulher = require ('./mulherModel') // aqui estou ligando ao arquivo mulherModel.js

const app = express() // aqui estou iniciando o app
app.use(express.json()) // aqui estou configurando o app para usar JSON
const porta = 3333 // aqui estou configurando a porta



// GET
async function mostraMulheres(request, response){
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find() // aqui estou buscando as mulheres no banco de dados
        response.json(mulheresVindasDoBancoDeDados) // aqui estou retornando as mulheres em formato JSON
        }
    catch(erro){
        console.log(erro)
}
}

//POST
async function criaMulher(request, response){ 
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    try{
        const mulherCriada = await novaMulher.save() // aqui estou salvando a nova mulher no banco de dados
        response.status(201).json(mulherCriada) // aqui estou retornando a nova mulher em formato JSON com o status 201
    }
    catch(erro){
        console.log(erro)
    }
}      

//PATCH
async function corrigeMulher(request, response){
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id) // aqui estou buscando a mulher pelo id no banco de dados
    if(request.body.nome){
    mulherEncontrada.nome = request.body.nome
    }
    if(request.body.minibio){
    mulherEncontrada.minibio= request.body.minibio
    }
    if(request.body.imagem){
    mulherEncontrada.imagem = request.body.imagem
    }
     if(request.body.citacao){
    mulherEncontrada.citacao = request.body.citacao
    }
    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save() // aqui estou salvando a mulher atualizada no banco de dados
    response.json(mulherAtualizadaNoBancoDeDados) // aqui estou retornando a mulher atualizada em formato JSON
        }

    
    catch(erro){
        console.log(erro)

}
}

//DELETE
async function deletaMulher(request, response){
    try{
        await Mulher.findByIdAndDelete(request.params.id) // aqui estou deletando a mulher pelo id no banco de dados
    response.json({mensagem: 'Mulher deletada com sucesso!'}) // aqui estou retornando uma mensagem de sucesso em formato JSON

    } catch(erro){
        console.log(erro)
    }

    }
    

app.use(router.get('/mulheres', mostraMulheres))// configurei a rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei a rota POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH/mulheres/id
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei a rota DELETE/mulheres/id

//PORTA 
function mostraPorta() {
    console.log("Servidor criado e rodando na porta",porta)
}

app.listen(porta, mostraPorta) // aqui estou dizendo para o app ouvir a porta