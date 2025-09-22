export function getUser() {
  // guard for server-side rendering
  if (typeof window === "undefined") return null;

  const user = window.sessionStorage.getItem("user");

  // handle cases where user is missing or stored as the literal strings 'undefined' or 'null'
  if (!user || user === "undefined" || user === "null") return null;

  try {
    return JSON.parse(user);
  } catch {
    // malformed JSON in storage; clear the value to avoid repeated errors
    try {
      window.sessionStorage.removeItem("user");
    } catch {
      /* ignore */
    }
    return null;
  }
}

export function clearUser() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem("user");
}