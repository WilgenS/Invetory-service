<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

[Nest](https://github.com/nestjs/nest) Project for inventory management in different areas using with shops, supermarket, distribuitors, etc.

## Database Diagrama
https://dbdiagram.io/d/Inventory-64d5475d02bd1c4a5e9778ef


## Installation
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Wilgen Sanchez](https://github.com/WilgenS)

## License

Nest is [MIT licensed](LICENSE).


## Structure project

project-root/
├── src/
│ ├── app.module.ts
│ ├── main.ts
│ ├── features/
│ │ └── _/ # folder
│ │ ├── _.module.ts
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── _.entity.ts
│ │ └── _.dto.ts
│ ├── middlewares/
│ │ └── _.middleware.ts
│ ├── communication/
│ │ ├── tcp/
│ │ │ └── tcp.client.ts
│ │ └── ...
│ └── utils/
│ └── _.util.ts
│ └── guard/
│ └── _.guard.ts
│ └── decorator/
│ └── _.decorator.ts
│ └── contracts/
│ └── \_.contract.ts
├── test/
├── node_modules/
├── .env
├── .gitignore
├── nest-cli.json
├── package.json
└── tsconfig.json
