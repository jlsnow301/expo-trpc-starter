import { sessionRouter } from "./routers/session";
import { router } from "./trpc";

/**
 * ### This is the main router for the tRPC API.
 *
 * It functions as a container for all the routers in /routers.
 *
 * Anything you add here will be accessible in the API.
 *
 * @url https://trpc.io/docs/server/router
 *
 * @example
 * ```ts
 * export const appRouter = router({
 *   posts: postsRouter,
 *   users: usersRouter,
 * });
 *
 * // In the expo page
 * const { data, error } = api.posts.getAll.useQuery();
 * const { data: userData } = api.users.getById.useQuery({ id: 123 });
 *                                ^// Each item will display in line completions
 * ```
 */
export const appRouter = router({
  session: sessionRouter,
  // Any other routers you want to add
});

export type AppRouter = typeof appRouter;
