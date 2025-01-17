<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Configurar .env<a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

### Configure environment variables

1. Install dependencies

```bash
npm i nestjs/config
```

2. Update `src/app.module.ts`

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

3. Create `.env`

```bash
PORT=<puerto-app>
```

4. Update `main.ts`

> add console.log()

```nestjs
  console.log(
    `Server running on http://localhost:${process.env.PORT ?? 3000}/api`,
  );
```
