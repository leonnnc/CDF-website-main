import { isTimeInRangeOnDayParams } from '../interfaces/date.interface';

/**
 * Checks if the current time is within a specified time range on a given day, considering a timezone offset.
 *
 * @param {number} options.timezoneOffset - The timezone offset in hours (default is -5 for GMT-5).
 * @param {number} options.day - The day of the week (0 = Sunday, 6 = Saturday).
 * @param {number} options.startAt - The start hour of the range (24-hour format).
 * @param {number} options.endAt - The end hour of the range (24-hour format)
 * @returns {boolean} - true if the current time falls within the specified range on the given day.
 */
export function isTimeInRangeOnDay({
  timezoneOffset = -5,
  day,
  startAt,
  endAt,
}: isTimeInRangeOnDayParams): boolean {
  const now = new Date();
  const timeZone = now.getTimezoneOffset() * 60000;
  const utcNow = new Date(now.getTime() + timeZone);
  const localNow = new Date(utcNow.getTime() + timezoneOffset * 3600000);

  const dayOfWeek = localNow.getDay();
  const hours = localNow.getHours();

  return dayOfWeek === day && hours >= startAt && hours < endAt;
}
