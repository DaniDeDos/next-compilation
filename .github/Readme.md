<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center"><a href="https://docs.nestjs.com" target="_blank">NestJS</a> my tricks</p>

# Índice

- [Índice](#Índice)

  - NestJS

    - [First steps](#first-steps)
    - [Create a new project](#get-started)
    - [Logger server startup](https://github.com/DaniDeDos/next-compilation/tree/main/example/nest/logger-main)
    - [Global prefix](https://github.com/DaniDeDos/next-compilation/tree/main/example/nest/global-prefix)
    - [Environment Variables](https://github.com/DaniDeDos/next-compilation/tree/main/example/nest/env)

  - TypeORM
    - test

# First steps

## Prerequisites

- Please make sure that [Node.js](https://nodejs.org) (version >= 16) is installed on your operating system.

### Installation

- Instala [Nest CLI](https://github.com/nestjs/nest) globalmente.

```bash
npm i -g @nestjs/cli
```

> `Nota:` Existen varias formas de iniciar un proyecto con NestJS además del método recomendado con el CLI,
> existen alternativas usando git o degit q consisten en basicamente clonar e instalar las dependencias del repo.

<details closed>
  <summary><b>Alternatives</b></summary>

<br>

> ```bash
> git clone https://github.com/nestjs/typescript-starter.git project
> cd project
> npm install
> npm run start
> ```

</details>

### Get Started

- Create a new project

```bash
nest new <project-name>
```

- Running the app

```bash
npm run start:dev
```

> `Nota:` Recuerda estar en el path del proyecto actual.

- Open your browser and navigate to http://localhost:3000.

## TypeORM

- Install dependencies

```bash
npm i nestjs/typeorm typeorm
```

- Install dependency for database connection

> PostgreSQL

```bash
npm i pg
```

- Update `src/app.module.ts`

> import dependency

```nestjs
import { TypeOrmModule } from '@nestjs/typeorm';
```

> import module

```nestjs
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
```
