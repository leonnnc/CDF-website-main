import { DEFAULT_COURSE_MESSAGE } from '../constants/course.constant';

/**
 * Generates a URL-encoded message of a course for socials.
 *
 * @param {string} title - The title of the course to be included in the message.
 * @returns {string} - A URL-encoded string containing the default course message followed by the provided course title.
 */
export function createCourseMessage(title: string): string {
  return encodeURIComponent(`${DEFAULT_COURSE_MESSAGE} ${title}`);
}
