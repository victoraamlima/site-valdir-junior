export function getBaseUrl(path: string) {
  const basePath = process.env.NEXT_PUBLIC_REPO_NAME || '';
  return `${basePath}${path}`;
}