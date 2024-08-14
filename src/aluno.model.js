const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  alunos: {
    nome: String,
    fone: String,
    rua: String,
    bairro: String,
    cep: String,
    cidade: String,
    estado: String,
    latitude: Number,
    longitude: Number,
  }
});

module.exports = mongoose.model('Aluno', AlunoSchema);
