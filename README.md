# URL SHORTENER

## Requisitos

Para rodar o projeto é necessário ter:

<ul>
  <li><a href='https://nodejs.org/en'>Node.js</a></li>
  <li><a href='https://www.npmjs.com/'>NPM</a></li>
  <li><a href='https://www.docker.com/'>Docker</a></li>
  <li><a href='https://git-scm.com/'>Git</a></li>
</ul>

## Instalação

Faça o clone do projeto em uma pasta.

```bash
  git clone https://github.com/FelipePinha/url-shortener.git
```

Instale as dependências.

```bash
  npm install
```

O banco de dados está rodando localmente no docker. Execute o comando para iniciar o container do postgres.

```bash
  docker-compose up -d
```

Faça uma cópia do .env.example e insira as credenciais do banco de dados.
```bash
  DB_USER=docker
  DB_PASS=docker
  DB_NAME=urlshort
  DB_HOST=localhost
  DB_PORT=5432

  PORT=3000
```

## Comandos

Para rodar o projeto execute o comando abaixo.

```bash
  npm run dev
```

Para rodar as migrations execute o comando.

```bash
  npm run migration:generate
  npm run migration:run
```
