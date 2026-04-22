import { BibleVerse } from '@modules/shared/interfaces/bible-quote';

import { isArrayEmpty } from '@/modules/shared/helpers/array.helper';

export function getQuoteVerses(verses: BibleVerse[]) {
  if (isArrayEmpty(verses)) return '';

  if (verses.length > 1) return `${verses[0].verse}-${verses[verses.length - 1].verse}`;

  return verses[0].verse;
}
