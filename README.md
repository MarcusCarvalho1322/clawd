# Clawd - OpenClaw + Railway Integration

Projeto para integrar OpenClaw com Railway.

## Instalação Local

```bash
npm install
cp .env.example .env
npm run dev
```

## Deploy no Railway

### Método 1: Via CLI
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Método 2: Via GitHub
1. Acesse [railway.app](https://railway.app)
2. Clique em "New Project"
3. Selecione "Deploy from GitHub"
4. Autorize e selecione este repositório
5. Configure as variáveis de ambiente

## Variáveis de Ambiente

Configure no Railway Dashboard:
- `PORT` - Porta da aplicação (padrão: 3000)
- `NODE_ENV` - Ambiente (development/production)
- `OPENCLAW_API_KEY` - Sua chave de API do OpenClaw
- `OPENCLAW_SECRET` - Seu secret do OpenClaw
- `DATABASE_URL` - URL do banco de dados (se necessário)

## Endpoints

- `GET /health` - Health check
- `POST /api/openclaw` - Recebe dados do OpenClaw

## Estrutura do Projeto

```
clawd/
├── index.js           # Aplicação principal
├── package.json       # Dependências
├── railway.json       # Configuração Railway
├── .env.example       # Variáveis de exemplo
└── README.md          # Este arquivo
```

## Próximas Etapas

- [ ] Conectar banco de dados PostgreSQL
- [ ] Implementar autenticação
- [ ] Criar endpoints para OpenClaw
- [ ] Adicionar testes

## Suporte

Para dúvidas sobre Railway: https://docs.railway.app
