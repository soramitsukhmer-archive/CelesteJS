export { createGroupByKey } from './createGroupByKey'

/**
 * Create a tokeninze key string
 * @param key
 */
export function tokenize(key: string) {
  return key
    .replace(/\s/, "_")
    .toUpperCase();
}
