const mongoose = require('mongoose');

// Conectando ao banco de dados MongoDB
async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')
    await mongoose.connect('mongodb+srv://dbgeovana:dbgeovana2331@clustermulheres.h1sxrfl.mongodb.net/?appName=ClusterMulheres')

    console.log('Conexão com o banco de dados realizada com sucesso')
    } catch (erro) {
        console.log(erro)
    }

}

module.exports = conectaBancoDeDados;
