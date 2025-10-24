# API de Progressão de Alunos de Música

Esta API REST permite o acompanhamento da progressão de alunos de música, com funcionalidades para registro de instrutores, alunos, lições e progresso dos alunos.

## Funcionalidades
- Registro e login de instrutor
- Registro e login de aluno
- Registro de lições
- Registro de lições realizadas pelo aluno
- Consulta de progresso do aluno

## Regras de acesso
- Instrutores: acesso total às funcionalidades após login
- Alunos: acesso apenas à consulta de progresso após login

## Autenticação
- Middleware JWT para autenticação
- Regras de acesso implementadas conforme perfil

## Estrutura do Projeto
- `src/routes`: Rotas da API
- `src/controllers`: Lógica dos endpoints
- `src/services`: Regras de negócio
- `src/models`: Modelos de dados (em memória)
- `resources`: Documentação Swagger

## Banco de Dados
- Utiliza armazenamento em memória

## Documentação
- Disponível em `resources/swagger.yaml`

## Como executar
1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm start`
3. Acesse a documentação Swagger conforme instruções no projeto
