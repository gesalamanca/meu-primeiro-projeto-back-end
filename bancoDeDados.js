const mongoose = require('mongoose');
require('dotenv').config();

// Conectando ao banco de dados MongoDB
async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')
    await mongoose.connect(process.env.MONGO_URL);

    console.log('Conexão com o banco de dados realizada com sucesso')
    } catch (erro) {
        console.log(erro)
    }

}

module.exports = conectaBancoDeDados;
