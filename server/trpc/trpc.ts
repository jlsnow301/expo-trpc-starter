import { initTRPC, TRPCError } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { Session, sessionTable } from "@/db/schema";
import { isSessionExpired } from "@/utils/session";

/**
 * Context creation for tRPC
 * @url https://trpc.io/docs/server/context
 */
export function createContext(opts: FetchCreateContextFnOptions) {
  return {
    req: opts.req,
    db,
  };
}

const t = initTRPC.context<typeof createContext>().create({
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;

/**
 * Unauthenticated procedures.
 * @url https://trpc.io/docs/server/procedures
 */
export const publicProcedure = t.procedure;

/**
 * ### Session Authed Procedures
 * You want the user to have a valid session cookie.
 */
export const authedProcedure = publicProcedure.use(async (opts) => {
  const { ctx, next } = opts;

  let session: Session | undefined;
  try {
    const authToken = ctx.req.headers.get("Authorization") ?? null;
    if (!authToken) throw new Error("No token found");

    let sessionId = authToken.split("Bearer ")?.[1];
    sessionId = JSON.parse(sessionId);
    if (!sessionId) throw new Error("Can't parse token");

    session = await db.query.sessionTable.findFirst({
      where: eq(sessionTable.id, sessionId),
    });
    if (!session) throw new Error("No session found");

    if (isSessionExpired(session)) {
      await db.delete(sessionTable).where(eq(sessionTable.id, session.id));

      throw new Error("Session expired");
    }

    await db
      .update(sessionTable)
      .set({ updated: new Date() })
      .where(eq(sessionTable.id, session.id));

    const source = ctx.req.headers.get("x-trpc-source") ?? "unknown";
    console.log(
      ">>> tRPC Request from",
      source,
      "by",
      session?.id ?? "unknown",
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown";

    throw new TRPCError({ code: "UNAUTHORIZED", cause: message });
  }

  return next({
    ctx: {
      ...ctx,
      session,
    },
  });
});
