# Back end development

This project uses tRPC with API routes, which provides an intuitive and
type-safe full stack development experience.

It's quite different from REST APIs. tRPC functions on both the client and
server separately and comes with many goodies built in. Any code that is part of
a route is separated from client code and run exclusively on the server. It's
safe, it does not leak any secrets, and during development, it's easier to debug
as it gives instant feedback on both the sides.

## Getting started

Install dependencies:

```bash
npm i
```

```bash
npm run start
```

This will run both the client and server in development mode.

You can directly access an API endpoint by using, for example:

```bash
curl http://localhost:8081/api/trpc/users.getAll
```

## Development Guidelines

- When adding or modifying backend API routes, please use the tRPC procedures
  defined in the backend files (e.g., `server\trpc\routers\users.ts`,
  `server\trpc\routers\comments.ts`). This ensures our codebase remains
  type-safe, consistent, and easier to maintain.
- Please do not add any new routes using traditional Express.js methods. The
  server file that exists is just an adapter for tRPC.
- You can create middleware functions to run prior to any tRPC procedure, and
  there are already some examples in `trpc/trpc.ts` (session and pex).
- Queries are for fetching data, mutations are for writing data.

## Tools Used for Backend Development

- **[tRPC](https://trpc.io/docs/server/introduction)**: A framework for building
  fully type-safe APIs in TypeScript.
- **[Zod](https://zod.dev)**: A library for validating and ensuring the
  structure of data.
- **[Drizzle ORM](https://orm.drizzle.team/docs/overview)**: A TypeScript ORM
  for safe and efficient database interactions.
