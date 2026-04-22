import { format, isBefore } from '@formkit/tempo';

/**
 * Formats a date string according to the specified format and language.
 *
 * @param {string} date - The date string to be formatted.
 * @param {string | Date} formatStr - The format string to apply to the date.
 * @param {string} [language='es'] - The language code for localization (default is 'es' for Spanish).
 * @returns {string} - The formatted date string.
 */
export function formatDate(
  date: Date | string,
  formatStr: string,
  language: string = 'es'
): string {
  return format(date, formatStr, language);
}

/**
 * Checks if a given date is before the current date.
 *
 * @param {string} date - The date string to compare with the current date.
 * @returns {boolean} - `true` if the provided date is before the current date, otherwise `false`.
 */
export function isDateBeforeNow(date: string): boolean {
  return isBefore(date, new Date());
}
