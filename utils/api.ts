import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@/server/trpc/router";

/**
 * This is the client side entrypoint for tRPC requests.
 * It can be used in place of standard useeffect/usestate hooks.
 *
 * @url https://trpc.io/docs/concepts
 * @url https://trpc.io/docs/client/react/useQuery#example
 * @example
 * ```tsx
 * const { data, error } = api.user.getById.useQuery({ id: 123 });
 *
 * if (error) return <div>failed to load user</div>;
 * if (!data) return <div>loading...</div>;
 *
 * return <div>hello {data.name}!</div>;
 * ```
 */
export const api = createTRPCReact<AppRouter>();
