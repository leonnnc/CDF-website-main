/**
 * Check if the URL is an external URL
 * @param url: string
 * @return boolean
 */
export function getIsExternalUrl(url?: string) {
  return Boolean(url?.startsWith('http'));
}
