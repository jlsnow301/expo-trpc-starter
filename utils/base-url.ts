export function getBaseUrl(): string {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  if (process.env.BASE_URL)
    // defined in environment variables
    return `https://${process.env.BASE_URL}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 8081}`;
}
