# Database development

This project uses Drizzle ORM with Postgres as the database. Supabase is
currently the provider.

Drizzle is only slightly an ORM: It's very lightweight and provides a sql-like
syntax for writing queries.

## Development Guidelines

- Try to keep your code as readable as possible.
- Postgres uses snake_case for column names, while TypeScript uses camelCase.
- When writing schemas, it can be helpful to export types using the $infer
  keyword. There is an example in the schema file.
- The drizzle query and sql syntax are interchangeable. Use whichever you
  prefer.
- Write relations tables to be able to query for related data.

## How to update the schema

```bash
npm run db:generate
```

```bash
npm run db:migrate
```

## Extra resources

https://orm.drizzle.team/docs/overview
