import { atom, useAtom } from "jotai";
import { useEffect } from "react";

import { api } from "@/utils/api";
import { deleteToken, getToken, setToken } from "@/utils/storage";

const sessionAtom = atom<string | null>(null);

/**
 * ## Auth hook.
 * Use this to retrieve and set the session id.
 * Offers a logout function which will delete the cookie locally and on the server.
 *
 * @example
 * ```tsx
 * Get the values near the top of the component
 * const { session, setSession, logout } = useAuth();
 *
 * // Set the session
 * setSession(sessionId);
 *
 * // Use the session
 * if (session) {
 *   // Do something with the session
 * }
 *
 * // Use the logout function
 * <Button onPress={logout} title="Logout" />
 * ```
 */
export function useAuth() {
  const [session, setSession] = useAtom(sessionAtom);

  const { mutate } = api.session.logout.useMutation({
    onSuccess: logout,
    onError: logout,
  });

  function onSetToken(sessionId: string) {
    setToken(sessionId);
    setSession(sessionId);
  }

  function logout() {
    deleteToken();
    setSession(null);
  }

  useEffect(() => {
    if (!session) {
      const cookie = getToken();

      if (cookie) setSession(cookie);
    }
  }, []);

  return {
    session,
    setSession: onSetToken,
    logout: mutate,
  };
}
