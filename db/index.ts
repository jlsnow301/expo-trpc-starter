import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

config({ path: ".env" });

const client = postgres(process.env.DATABASE_URL!);

/**
 * This is using drizzle to define the database schema.
 * It's a lightweight ORM that allows you to define your database schema in a type-safe way.
 *
 * @url https://orm.drizzle.team/docs/column-types/pg
 *
 * To upload your schema after you've defined it,
 *
 * run `npx drizzle-kit generate`
 *
 * run `npx drizzle-kit migrate`
 */
export const db = drizzle(client, { schema });
