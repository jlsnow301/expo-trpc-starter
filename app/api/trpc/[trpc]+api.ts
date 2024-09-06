import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/trpc/router";
import { createContext } from "@/server/trpc/trpc";

/**
 * You likely don't need to edit this file. If you're looking to add more tRPC procedures,
 * add them to `@/server/trpc/router.ts` instead.
 */

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });
}

export { handler as GET, handler as POST };
