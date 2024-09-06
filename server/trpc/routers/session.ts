import { eq } from "drizzle-orm";

import { sessionTable } from "@/db/schema";

import { authedProcedure, router } from "../trpc";

const logout = authedProcedure.mutation(async (opts) => {
  const { ctx } = opts;
  const { db, session } = ctx;

  await db.delete(sessionTable).where(eq(sessionTable.id, session.id));
});

export const sessionRouter = router({
  logout,
});
