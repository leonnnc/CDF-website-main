import { OFFERING_VERSES } from '@modules/shared/data/bible-verse.data';
import { getRandomIndex, isArrayEmpty } from '@modules/shared/helpers/array.helper';
import clsx from 'clsx';

import { getQuoteVerses } from '@/modules/donation-dialog/helpers/quote.helper';

export function DonationVerse() {
  const { book, chapter, verses } = OFFERING_VERSES[getRandomIndex(OFFERING_VERSES)];

  const quoteVerses = getQuoteVerses(verses);

  if (isArrayEmpty(verses)) return null;

  return (
    <figure className="text-smaller md:text-small">
      <blockquote
        className={clsx(
          'pl-2.5 border-l-2 border-neutral-400 text-neutral-600 mb-2',
          'dark:border-neutral-200 dark:text-neutral-200'
        )}
      >
        {verses.map((item) => {
          const { text, verse } = item;

          return <p key={verse}>{text}</p>;
        })}
      </blockquote>
      <figcaption className={clsx('text-neutral-400 font-medium', 'dark:text-neutral-300')}>
        {book} {chapter}:{quoteVerses}
      </figcaption>
    </figure>
  );
}
