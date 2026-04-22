/**
 * Helper function to check if a value is an empty array.
 * `null` or `undefined` are considered "empty" in this context.
 * @param value - The value to check.
 * @returns `true` if the value is an array and has items.
 */
export function isArrayEmpty(value: unknown) {
  return !Array.isArray(value) || !value.length;
}

/**
 * Helper function to get a random index from an array.
 * @param array - The array to get the index from.
 * @returns A random index from the array.
 */
export function getRandomIndex(array: unknown[]) {
  return Math.floor(Math.random() * array.length);
}
