<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Configurar .env<a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

### Configure environment variables

- Install dependencies

```bash
npm i nestjs/config
```

- Update `src/app.module.ts`

> import dependency

```nestjs
import { ConfigModule } from '@nestjs/config';
```

> import module

```nestjs
@Module({
  imports: [
    ConfigModule.forRoot()
  ],
})
```

- Create `.env`

```bash
PORT=<puerto-app>
```
