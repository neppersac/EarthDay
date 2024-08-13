const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Aluno = require('./aluno.model');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Criar um Aluno
app.post('/alunos', async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).send(aluno);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Listar todos os Alunos
app.get('/alunos', async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.status(200).send(alunos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Buscar Aluno por ID
app.get('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).send();
    }
    res.status(200).send(aluno);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Atualizar Aluno por ID
app.patch('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!aluno) {
      return res.status(404).send();
    }
    res.status(200).send(aluno);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Deletar Aluno por ID
app.delete('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndDelete(req.params.id);
    if (!aluno) {
      return res.status(404).send();
    }
    res.status(200).send(aluno);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
