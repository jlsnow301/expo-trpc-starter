import { router } from "expo-router";

import { SESSION_EXPIRY } from "@/constants/session";
import { Session } from "@/db/schema";

/**
 * ### Session Expiry
 * Checks if the session is over the session expiry constant
 */
export function isSessionExpired(session: Session) {
  const now = new Date();

  return now.getTime() - session.updated.getTime() > SESSION_EXPIRY;
}

/** Client function: Reroutes to expiration page if server error is "UNAUTHORIZED" */
export function handleUnauthorized(error: any) {
  if (error?.data?.code === "UNAUTHORIZED") {
    router.replace("/");
  }
}
