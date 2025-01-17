<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center"><a href="https://docs.nestjs.com" target="_blank">NestJS</a> my tricks</p>

# First Steps

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

### Get started

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