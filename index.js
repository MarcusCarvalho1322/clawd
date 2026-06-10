// index.js - OpenClaw + Railway Integration
// Servidor principal da aplicacao Clawd

const express = require('express');
const path = require('path');

// Carrega variaveis de ambiente do .env em desenvolvimento (opcional em producao)
try {
  require('dotenv').config();
} catch (err) {
  console.warn('dotenv nao carregado (ok em producao):', err.message);
}

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger simples de requisicoes
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    name: 'clawd',
    description: 'OpenClaw integration with Railway',
    status: 'online',
    env: NODE_ENV
  });
});

// Health check (usado pelo Railway para verificar se a app esta saudavel)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Endpoint que recebe dados do OpenClaw
app.post('/api/openclaw', (req, res) => {
  const payload = req.body || {};
  console.log('Dados recebidos do OpenClaw:', JSON.stringify(payload));
  res.status(200).json({
    received: true,
    timestamp: new Date().toISOString(),
    data: payload
  });
});

// Handler 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.originalUrl });
});

// Handler de erros
app.use((err, req, res, next) => {
  console.error('Erro interno:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Inicia o servidor escutando em 0.0.0.0 (necessario no Railway)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor clawd rodando na porta ${PORT} [${NODE_ENV}]`);
});

module.exports = app;
