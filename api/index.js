const express = require('express');
const app = express();

const usuarios = [
  { nome: 'Ana', cidade: 'Crato' },
  { nome: 'Bruno', cidade: 'Crato' },
  { nome: 'Carlos', cidade: 'Mauriti' },
  { nome: 'Daniela', cidade: 'Juazeiro do Norte' },
  { nome: 'Eduardo', cidade: 'Crato' },
  { nome: 'Fernanda', cidade: 'Milagres' },
  { nome: 'Gustavo', cidade: 'Missão Velha' },
  { nome: 'Helena', cidade: 'Barbalha' },
  { nome: 'Igor', cidade: 'Barbalha' },
  { nome: 'Juliana', cidade: 'Juazeiro do Norte' }
];

app.get('/api/usuario/todos', (req, res) => {
  res.json(usuarios);
});

app.get('/api/usuario/cidade/:cidade', (req, res) => {
  const cidadeParam = req.params.cidade.toLowerCase();
  const filtrados = usuarios.filter(u => u.cidade.toLowerCase() === cidadeParam);
  res.json(filtrados);
});

app.get('/api/usuario/sorteado', (req, res) => {
  const sorteado = usuarios[Math.floor(Math.random() * usuarios.length)];
  res.json(sorteado);
});

module.exports = app;
