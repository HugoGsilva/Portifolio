# 🎮 IndieGameStore API

Uma API RESTful para uma plataforma de marketplace de jogos independentes, construída com Ruby on Rails 8.

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Stack Tecnológica](#-stack-tecnológica)
- [Início Rápido](#-início-rápido)
- [Frontend](#-frontend)
- [Autenticação](#-autenticação)
- [Endpoints da API](#-endpoints-da-api)
- [Documentação Swagger](#-documentação-swagger)
- [Comandos Úteis](#-comandos-úteis)
- [Testes](#-testes)
- [Dados de Demonstração](#-dados-de-demonstração)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Troubleshooting](#-troubleshooting)

## 🎯 Visão Geral

A IndieGameStore API fornece uma plataforma completa de marketplace para desenvolvedores e jogadores de jogos independentes. O sistema implementa:

- **Controle de Acesso por Papel (RBAC)**: Admin, Developer, Gamer
- **Autenticação JWT**: Tokens seguros com HS256
- **Soft Delete**: Preservação de dados com anonimização
- **Multi-moeda**: Suporte a USD, EUR, BRL via money-rails
- **Jobs em Background**: Solid Queue (usando PostgreSQL)
- **Documentação Interativa**: Swagger UI
- **Frontend React**: SPA com Vite + Tailwind CSS
- **UI/UX Moderna**: Suporte a Dark Mode e Temas Personalizados

## 🛠 Stack Tecnológica

### Backend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Ruby | 3.3.0 | Linguagem de programação |
| Rails | 8.0.4 | Framework web |
| PostgreSQL | 16 | Banco de dados |
| Docker | - | Containerização |
| JWT | - | Autenticação |
| Solid Queue | - | Jobs em background |
| RSpec | - | Testes |
| Rswag | - | Documentação Swagger |

### Frontend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 18 | Biblioteca UI |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Estilização |
| React Router | 6 | Roteamento |
| Axios | - | HTTP Client |
| Lucide React | - | Ícones |

## 🚀 Início Rápido

### Pré-requisitos

- Docker
- Docker Compose

### 1. Clone o Repositório

```bash
git clone <repository-url>
cd trabalho-final-HugoGsilva
```

### 2. Configure as Variáveis de Ambiente

```bash
cp .env.example .env
```

### 3. Inicie os Serviços

```bash
# Build e start (Backend + Frontend)
docker compose up --build

# Ou em background
docker compose up -d --build
```

### 4. Popule o Banco com Dados de Demo

```bash
docker compose exec web rails db:seed
```

### 5. Acesse a Aplicação

- **Frontend**: http://localhost:5173
- **API Base URL**: http://127.0.0.1:3000 (ou http://localhost:3000)
- **Swagger UI**: http://127.0.0.1:3000/api-docs

## 🖥 Frontend

O frontend é uma SPA (Single Page Application) construída com React + Vite + Tailwind CSS.

### Funcionalidades

**Públicas:**
- 🏠 Listagem de jogos com busca e filtros por gênero
- 🎮 Detalhes do jogo com reviews
- 🔐 Login e Registro
- 🌓 **Dark Mode**: Alternância entre temas Claro (Forest Calm) e Escuro (Forest Night)

**Usuário Autenticado (Gamer):**
- 📚 Biblioteca de jogos adquiridos
- 🛒 Compra de jogos
- ⭐ Avaliação de jogos (reviews)
- 👤 Gerenciamento de perfil

**Desenvolvedor:**
- 📊 Dashboard com estatísticas
- 🎮 CRUD de jogos próprios
- 📈 Visão de vendas

**Administrador:**
- 📊 Painel administrativo
- 👥 Gerenciamento de usuários (CRUD + alteração de roles)
- 🏷️ Gerenciamento de gêneros (CRUD)

### Executar Frontend Localmente (sem Docker)

```bash
cd frontend

# Instalar dependências
npm install

# Criar arquivo de ambiente
cp .env.example .env

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em http://localhost:5173

### Build de Produção

```bash
# Via Docker Compose (simula produção)
docker compose -f docker-compose.prod.yml up --build
```

No modo produção:
- Frontend: http://localhost (porta 80) via Nginx
- API: http://localhost:3000

## 🔐 Autenticação

A API usa JWT (JSON Web Tokens) para autenticação. O token deve ser enviado no header `Authorization`.

### Login

```bash
# Request
curl -X POST http://127.0.0.1:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@indiegamestore.com", "password": "password123"}'

# Response
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 1,
    "email": "admin@indiegamestore.com",
    "name": "Admin User",
    "role": "admin"
  }
}
```

### Usando o Token

```bash
# Adicione o header Authorization em todas as requisições autenticadas
curl -X GET http://127.0.0.1:3000/api/v1/library_entries \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9..."
```

### Credenciais de Demo

| Role | Email | Senha |
|------|-------|-------|
| **Admin** | admin@indiegamestore.com | password123 |
| **Developer** | dev@indiegamestore.com | password123 |
| **Developer** | pixelmaster@indiegamestore.com | password123 |
| **Developer** | retrostudio@indiegamestore.com | password123 |
| **Gamer** | gamer@indiegamestore.com | password123 |
| **Gamer** | casual@indiegamestore.com | password123 |
| **Gamer** | retrolover@indiegamestore.com | password123 |

## 📡 Endpoints da API

### Autenticação
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/api/v1/auth/login` | Login do usuário | ❌ |

### Usuários
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/api/v1/users` | Registrar novo usuário | ❌ |
| DELETE | `/api/v1/users/:id` | Deletar usuário (soft delete) | ✅ |

### Gêneros
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| GET | `/api/v1/genres` | Listar todos os gêneros | ❌ |
| GET | `/api/v1/genres/:id` | Detalhes de um gênero | ❌ |
| POST | `/api/v1/genres` | Criar gênero | ✅ Admin |
| PATCH | `/api/v1/genres/:id` | Atualizar gênero | ✅ Admin |
| DELETE | `/api/v1/genres/:id` | Deletar gênero | ✅ Admin |

### Jogos
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| GET | `/api/v1/games` | Listar jogos (publicados) | ❌ |
| GET | `/api/v1/games/:id` | Detalhes de um jogo | ❌ |
| POST | `/api/v1/games` | Criar jogo | ✅ Developer |
| PATCH | `/api/v1/games/:id` | Atualizar jogo | ✅ Developer (dono) |
| DELETE | `/api/v1/games/:id` | Deletar jogo | ✅ Developer (dono) / Admin |

#### Filtros para Games
```bash
# Por gênero
GET /api/v1/games?genre_id=1

# Por desenvolvedor
GET /api/v1/games?developer_id=2

# Paginação
GET /api/v1/games?page=1&per_page=20
```

### Reviews
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| GET | `/api/v1/games/:game_id/reviews` | Listar reviews de um jogo | ❌ |
| POST | `/api/v1/games/:game_id/reviews` | Criar review | ✅ Gamer (deve possuir o jogo) |
| PATCH | `/api/v1/reviews/:id` | Atualizar review | ✅ Autor |
| DELETE | `/api/v1/reviews/:id` | Deletar review | ✅ Autor / Admin |

### Biblioteca (Compras)
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| GET | `/api/v1/library_entries` | Listar jogos comprados | ✅ |
| POST | `/api/v1/library_entries` | Comprar um jogo | ✅ Gamer |

## 📚 Documentação Swagger

Acesse a documentação interativa da API:

```
http://127.0.0.1:3000/api-docs
```

Na interface Swagger você pode:
- Ver todos os endpoints disponíveis
- Testar requisições diretamente
- Ver schemas de request/response
- Copiar exemplos de código

## 🔧 Comandos Úteis

### Gerenciamento de Containers

```bash
# Iniciar serviços
docker compose up

# Iniciar em background
docker compose up -d

# Parar serviços
docker compose down

# Ver logs
docker compose logs -f web

# Ver status dos containers
docker compose ps

# Rebuild completo
docker compose down && docker compose build && docker compose up
```

### Rails Console

```bash
# Acessar console Rails
docker compose exec web rails console

# Ou abreviado
docker compose exec web rails c
```

### Banco de Dados

```bash
# Rodar migrations
docker compose exec web rails db:migrate

# Rollback última migration
docker compose exec web rails db:rollback

# Reset completo (drop + create + migrate + seed)
docker compose exec web rails db:reset

# Apenas seed
docker compose exec web rails db:seed

# Ver status das migrations
docker compose exec web rails db:migrate:status
```

### Gems

```bash
# Instalar gems
docker compose exec web bundle install

# Atualizar gems
docker compose exec web bundle update
```

## 🧪 Testes

### Rodar Todos os Testes

```bash
docker compose exec web bundle exec rspec
```

### Testes por Categoria

```bash
# Testes de propriedade (property-based)
docker compose exec web bundle exec rspec spec/properties/

# Testes de factories
docker compose exec web bundle exec rspec spec/factories_spec.rb

# Testes de requests/integração
docker compose exec web bundle exec rspec spec/requests/

# Teste específico
docker compose exec web bundle exec rspec spec/properties/user_properties_spec.rb
```

### Opções de Formatação

```bash
# Formato detalhado
docker compose exec web bundle exec rspec --format documentation

# Formato progresso (padrão)
docker compose exec web bundle exec rspec --format progress

# Com seed específico (reproduzir ordem)
docker compose exec web bundle exec rspec --seed 12345
```

### Gerar Documentação Swagger

```bash
docker compose exec web rails rswag:specs:swaggerize
```

## 📊 Dados de Demonstração

O arquivo `db/seeds.rb` cria dados de demonstração:

| Entidade | Quantidade | Detalhes |
|----------|------------|----------|
| **Gêneros** | 8 | RPG, FPS, Platformer, Puzzle, Adventure, Roguelike, Simulation, Strategy |
| **Usuários** | 7 | 1 admin, 3 developers, 3 gamers |
| **Jogos** | 10 | 9 publicados, 1 não publicado |
| **Compras** | 11 | Distribuídas entre gamers |
| **Reviews** | 9 | Ratings de 3 a 5 estrelas |

### Jogos de Exemplo

| Título | Preço | Gênero | Developer |
|--------|-------|--------|-----------|
| Dungeon Quest | $14.99 | RPG | Indie Dev Studio |
| Space Explorer | $9.99 | Adventure | Indie Dev Studio |
| Pixel Runner | $2.99 | Platformer | Pixel Master Games |
| Neon Blaster | $7.99 | FPS | Pixel Master Games |
| Farm Tycoon | $12.99 | Simulation | Retro Studios |
| Castle Defense | €10.99 | Strategy | Retro Studios |
| Super Jump Bros | R$19.99 | Platformer | Retro Studios |

## 🌍 Variáveis de Ambiente

Veja `.env.example` para todas as variáveis disponíveis:

### Desenvolvimento
```env
DATABASE_URL=postgres://postgres:password@db:5432/indie_game_store_development
RAILS_ENV=development
JWT_SECRET_KEY=sua_chave_secreta_aqui
```

### Produção
```env
# Banco de Dados
DATABASE_URL=postgres://user:pass@host:5432/indie_game_store_production

# Rails
RAILS_ENV=production
SECRET_KEY_BASE=sua_secret_key_base_aqui
JWT_SECRET_KEY=sua_chave_jwt_segura_aqui

# SMTP (Email)
SMTP_ADDRESS=smtp.exemplo.com
SMTP_PORT=587
SMTP_USERNAME=seu_usuario
SMTP_PASSWORD=sua_senha
SMTP_DOMAIN=exemplo.com
MAILER_SENDER=noreply@exemplo.com

# CORS
CORS_ALLOWED_ORIGINS=https://seusite.com,https://www.seusite.com

# Hosts permitidos
ALLOWED_HOSTS=seusite.com,www.seusite.com
```

## 🔍 Troubleshooting

### Porta em Uso

```bash
# Verificar o que está usando a porta
netstat -ano | findstr :3000

# Ou altere a porta no docker-compose.yml
ports:
  - "3001:3000"
```

### Problemas de Conexão com Banco

```bash
# Verificar status do container
docker compose ps

# Ver logs do banco
docker compose logs db

# Reiniciar serviços
docker compose down && docker compose up
```

### Cache/Assets Desatualizados

```bash
# Limpar cache
docker compose exec web rails tmp:clear

# Rebuild completo
docker compose down
docker compose build --no-cache
docker compose up
```

### Gems Não Instaladas

```bash
# Reinstalar gems
docker compose exec web bundle install

# Ou rebuild da imagem
docker compose build
```

### Migrations Pendentes

```bash
# Ver status
docker compose exec web rails db:migrate:status

# Rodar migrations
docker compose exec web rails db:migrate
```

## 📝 Exemplos de Uso com cURL

### Fluxo Completo de Exemplo

```bash
# 1. Login como admin
TOKEN=$(curl -s -X POST http://127.0.0.1:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@indiegamestore.com", "password": "password123"}' \
  | jq -r '.token')

echo "Token: $TOKEN"

# 2. Criar um novo gênero (admin)
curl -X POST http://127.0.0.1:3000/api/v1/genres \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"genre": {"name": "Horror", "description": "Jogos de terror"}}'

# 3. Login como developer
DEV_TOKEN=$(curl -s -X POST http://127.0.0.1:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "dev@indiegamestore.com", "password": "password123"}' \
  | jq -r '.token')

# 4. Criar um jogo (developer)
curl -X POST http://127.0.0.1:3000/api/v1/games \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DEV_TOKEN" \
  -d '{
    "game": {
      "title": "Scary Night",
      "description": "Um jogo de terror assustador",
      "price": "19.99",
      "currency": "USD",
      "genre_id": 1,
      "download_url": "https://example.com/scary-night"
    }
  }'

# 5. Login como gamer
GAMER_TOKEN=$(curl -s -X POST http://127.0.0.1:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "gamer@indiegamestore.com", "password": "password123"}' \
  | jq -r '.token')

# 6. Comprar um jogo
curl -X POST http://127.0.0.1:3000/api/v1/library_entries \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $GAMER_TOKEN" \
  -d '{"library_entry": {"game_id": 1}}'

# 7. Ver biblioteca
curl -X GET http://127.0.0.1:3000/api/v1/library_entries \
  -H "Authorization: Bearer $GAMER_TOKEN"

# 8. Criar review
curl -X POST http://127.0.0.1:3000/api/v1/games/1/reviews \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $GAMER_TOKEN" \
  -d '{"review": {"rating": 5, "content": "Jogo incrível!"}}'
```

## 📄 Licença

Este projeto foi desenvolvido como trabalho final para a disciplina de Desenvolvimento Web III - TADS24 - IFPR.

## 👤 Autor

Hugo G. Silva - [@HugoGsilva](https://github.com/HugoGsilva)